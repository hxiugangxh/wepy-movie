'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _movieList = require('./../../components/movie-list.js');

var _movieList2 = _interopRequireDefault(_movieList);

var _util = require('./../../utils/util.js');

var _util2 = _interopRequireDefault(_util);

var _movieDataGrid = require('./../../components/movie-data-grid.js');

var _movieDataGrid2 = _interopRequireDefault(_movieDataGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_wepy$page) {
  _inherits(Movie, _wepy$page);

  function Movie() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Movie);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Movie.__proto__ || Object.getPrototypeOf(Movie)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '电影'
    }, _this.$props = { "movieList": { "xmlns:v-bind": { "for": "topicMovieList", "item": "movieList", "index": "index", "key": "key", "value": "movieList" }, "v-bind:moiveList.once": { "for": "topicMovieList", "item": "movieList", "index": "index", "key": "key", "value": "movieList" } }, "movieDataGrid": { "xmlns:v-bind": "", "v-bind:movies.once": "searchMovies" } }, _this.$events = {}, _this.components = {
      movieList: _movieList2.default,
      movieDataGrid: _movieDataGrid2.default
    }, _this.data = {
      topicMovieList: [],
      inTheaters: {},
      comingSoon: {},
      top250: {},
      isSearch: false,
      searchMovies: {}
    }, _this.methods = {
      onFocus: function onFocus() {
        this.isSearch = true;
        this.$apply();
      },
      closeSearch: function closeSearch() {
        this.isSearch = false;
        this.$apply();
      },
      query: function query(event) {
        var _this2 = this;

        var URL = this.$parent.globalData.doubanBase + '/v2/movie/search?q=' + event.detail.value;
        //        let searchMovies = wepy.getStorageSync('searchMovies')
        //
        //        if (searchMovies !== '') {
        //          this.searchMovies = searchMovies
        //          this.$apply()
        //        } else {
        //          console.log('请求数据')
        ////          util.http(URL, this.dealDoubanData)
        //        }
        var param = {
          url: URL,
          method: 'GET',
          header: {
            'Content-Type': 'json'
          }
        };

        _wepy2.default.request(param).then(function (d) {
          return _this2.dealDoubanData(d.data);
        });

        //util.http(URL, this.dealDoubanData)
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Movie, [{
    key: 'dealDoubanData',
    value: function dealDoubanData(data) {
      var subjects = data.subjects;

      var movies = [];
      var rowMovie = [];

      for (var i = 0; i < subjects.length; i++) {
        var subject = subjects[i];

        var title = subject.title;
        if (title.length > 6) {
          title = title.substring(0, 6) + '...';
        }
        var movie = {
          stars: _util2.default.convertToStarsArray(subject.rating.stars),
          converageUrl: subject.images.large,
          title: title,
          average: subject.rating.average
        };

        if (i === 0) {
          rowMovie.push(movie);
        } else {
          if (i % 3 === 2) {
            rowMovie.push(movie);
            movies.push(rowMovie);
            rowMovie = [];
          } else {
            rowMovie.push(movie);
          }
        }

        if (i === subjects.length - 1 && i % 3 !== 2) {
          movies.push(rowMovie);
        }
      }

      //      let that = this.__prevPage__
      //      that.searchMovies = movies
      //      that.$apply()
      this.searchMovies = movies;
      this.$apply();

      _wepy2.default.setStorageSync('searchMovies', movies);
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var doubanBase, inThreaterUrl, cominSoonUrl, top250Url, inThreater, cominSoon, top250;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                doubanBase = this.$parent.globalData.doubanBase;
                inThreaterUrl = doubanBase + '/v2/movie/in_theaters' + '?start=0&count=3';
                cominSoonUrl = doubanBase + '/v2/movie/coming_soon' + '?start=0&count=3';
                top250Url = doubanBase + '/v2/movie/top250' + '?start=0&count=3';
                inThreater = _wepy2.default.getStorageSync('inThreater');
                cominSoon = _wepy2.default.getStorageSync('cominSoon');
                top250 = _wepy2.default.getStorageSync('top250');


                if (inThreater === '') {
                  this.getMovieListData(inThreaterUrl, 'inThreater', '正在热映');
                } else {
                  this.topicMovieList.push(inThreater);
                }

                if (cominSoon === '') {
                  this.getMovieListData(cominSoonUrl, 'cominSoon', '即将上映');
                } else {
                  this.topicMovieList.push(cominSoon);
                }

                if (top250 === '') {
                  this.getMovieListData(top250Url, 'top250', 'Top250');
                } else {
                  this.topicMovieList.push(top250);
                }

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'getMovieListData',
    value: function getMovieListData(url, key, myTitle) {
      var that = this;
      _wepy2.default.request({
        url: url,
        data: {},
        method: 'GET',
        header: {
          'Content-Type': 'json'
        },
        success: function success(res) {
          console.log('请求成功');
          console.log(res);
          that.processDoubanData(res.data, key, myTitle);
        },
        fail: function fail() {
          console.log('请求失败');
        }
      });
    }
  }, {
    key: 'processDoubanData',
    value: function processDoubanData(movieDouban, key, myTitle) {
      var movies = [];

      for (var index in movieDouban.subjects) {
        var subject = movieDouban.subjects[index];

        var title = subject.title;
        if (title.length > 6) {
          title = title.substring(0, 6) + '...';
        }

        var temp = {
          stars: _util2.default.convertToStarsArray(subject.rating.stars),
          title: title,
          average: subject.rating.average,
          converageUrl: subject.images.large,
          movieId: subject.id
        };

        movies.push(temp);
      }
      this.topicMovieList.push({
        title: myTitle,
        movies: movies
      });

      this.$apply();

      _wepy2.default.setStorageSync(key, { title: myTitle, movies: movies });
    }
  }]);

  return Movie;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Movie , 'pages/movies/movie'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLmpzIl0sIm5hbWVzIjpbIk1vdmllIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibW92aWVMaXN0IiwibW92aWVEYXRhR3JpZCIsImRhdGEiLCJ0b3BpY01vdmllTGlzdCIsImluVGhlYXRlcnMiLCJjb21pbmdTb29uIiwidG9wMjUwIiwiaXNTZWFyY2giLCJzZWFyY2hNb3ZpZXMiLCJtZXRob2RzIiwib25Gb2N1cyIsIiRhcHBseSIsImNsb3NlU2VhcmNoIiwicXVlcnkiLCJldmVudCIsIlVSTCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiZG91YmFuQmFzZSIsImRldGFpbCIsInZhbHVlIiwicGFyYW0iLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXIiLCJyZXF1ZXN0IiwidGhlbiIsImQiLCJkZWFsRG91YmFuRGF0YSIsInN1YmplY3RzIiwibW92aWVzIiwicm93TW92aWUiLCJpIiwibGVuZ3RoIiwic3ViamVjdCIsInRpdGxlIiwic3Vic3RyaW5nIiwibW92aWUiLCJzdGFycyIsImNvbnZlcnRUb1N0YXJzQXJyYXkiLCJyYXRpbmciLCJjb252ZXJhZ2VVcmwiLCJpbWFnZXMiLCJsYXJnZSIsImF2ZXJhZ2UiLCJwdXNoIiwic2V0U3RvcmFnZVN5bmMiLCJpblRocmVhdGVyVXJsIiwiY29taW5Tb29uVXJsIiwidG9wMjUwVXJsIiwiaW5UaHJlYXRlciIsImdldFN0b3JhZ2VTeW5jIiwiY29taW5Tb29uIiwiZ2V0TW92aWVMaXN0RGF0YSIsImtleSIsIm15VGl0bGUiLCJ0aGF0Iiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzRG91YmFuRGF0YSIsImZhaWwiLCJtb3ZpZURvdWJhbiIsImluZGV4IiwidGVtcCIsIm1vdmllSWQiLCJpZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7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LG1CQUFTVixRQUFRTSxNQUFSLENBQWVJLE9BSGY7QUFJVEgsd0JBQWNQLFFBQVFRLE1BQVIsQ0FBZUMsS0FKcEI7QUFLVHVCLG1CQUFTaEMsUUFBUWlDO0FBTFIsU0FBWDs7QUFRQXJDLGVBQU9lLElBQVAsQ0FBWW9CLElBQVo7QUFDRDtBQUNELFdBQUs5RCxjQUFMLENBQW9CMEMsSUFBcEIsQ0FBeUI7QUFDdkJWLGVBQU9vQixPQURnQjtBQUV2QnpCLGdCQUFRQTtBQUZlLE9BQXpCOztBQUtBLFdBQUtuQixNQUFMOztBQUVBLHFCQUFLbUMsY0FBTCxDQUFvQlEsR0FBcEIsRUFBeUIsRUFBQ25CLE9BQU9vQixPQUFSLEVBQWlCekIsUUFBUUEsTUFBekIsRUFBekI7QUFDRDs7OztFQXBMZ0MsZUFBS3NDLEk7O2tCQUFuQjFFLEsiLCJmaWxlIjoibW92aWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vdmllLWxpc3QnXG4gIGltcG9ydCB1dGlsIGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG4gIGltcG9ydCBNb3ZpZURhdGFHcmlkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW92aWUtZGF0YS1ncmlkJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmllIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55S15b2xJ1xuICAgIH1cblxuICAgJHByb3BzID0ge1wibW92aWVMaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6e1wiZm9yXCI6XCJ0b3BpY01vdmllTGlzdFwiLFwiaXRlbVwiOlwibW92aWVMaXN0XCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwibW92aWVMaXN0XCJ9LFwidi1iaW5kOm1vaXZlTGlzdC5vbmNlXCI6e1wiZm9yXCI6XCJ0b3BpY01vdmllTGlzdFwiLFwiaXRlbVwiOlwibW92aWVMaXN0XCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwibW92aWVMaXN0XCJ9fSxcIm1vdmllRGF0YUdyaWRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm1vdmllcy5vbmNlXCI6XCJzZWFyY2hNb3ZpZXNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgbW92aWVMaXN0OiBNb3ZpZUxpc3QsXG4gICAgICBtb3ZpZURhdGFHcmlkOiBNb3ZpZURhdGFHcmlkXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHRvcGljTW92aWVMaXN0OiBbXSxcbiAgICAgIGluVGhlYXRlcnM6IHt9LFxuICAgICAgY29taW5nU29vbjoge30sXG4gICAgICB0b3AyNTA6IHt9LFxuICAgICAgaXNTZWFyY2g6IGZhbHNlLFxuICAgICAgc2VhcmNoTW92aWVzOiB7fVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBvbkZvY3VzKCkge1xuICAgICAgICB0aGlzLmlzU2VhcmNoID0gdHJ1ZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgY2xvc2VTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuaXNTZWFyY2ggPSBmYWxzZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgcXVlcnkoZXZlbnQpIHtcbiAgICAgICAgbGV0IFVSTCA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmRvdWJhbkJhc2UgKyAnL3YyL21vdmllL3NlYXJjaD9xPScgKyBldmVudC5kZXRhaWwudmFsdWVcbi8vICAgICAgICBsZXQgc2VhcmNoTW92aWVzID0gd2VweS5nZXRTdG9yYWdlU3luYygnc2VhcmNoTW92aWVzJylcbi8vXG4vLyAgICAgICAgaWYgKHNlYXJjaE1vdmllcyAhPT0gJycpIHtcbi8vICAgICAgICAgIHRoaXMuc2VhcmNoTW92aWVzID0gc2VhcmNoTW92aWVzXG4vLyAgICAgICAgICB0aGlzLiRhcHBseSgpXG4vLyAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgIGNvbnNvbGUubG9nKCfor7fmsYLmlbDmja4nKVxuLy8vLyAgICAgICAgICB1dGlsLmh0dHAoVVJMLCB0aGlzLmRlYWxEb3ViYW5EYXRhKVxuLy8gICAgICAgIH1cbiAgICAgICAgdmFyIHBhcmFtID0ge1xuICAgICAgICAgIHVybDogVVJMLFxuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2pzb24nXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2VweS5yZXF1ZXN0KHBhcmFtKS50aGVuKChkKSA9PiB0aGlzLmRlYWxEb3ViYW5EYXRhKGQuZGF0YSkpXG5cbiAgICAgICAgLy91dGlsLmh0dHAoVVJMLCB0aGlzLmRlYWxEb3ViYW5EYXRhKVxuICAgICAgfVxuICAgIH1cblxuICAgIGRlYWxEb3ViYW5EYXRhKGRhdGEpIHtcbiAgICAgIGxldCBzdWJqZWN0cyA9IGRhdGEuc3ViamVjdHNcblxuICAgICAgbGV0IG1vdmllcyA9IFtdXG4gICAgICBsZXQgcm93TW92aWUgPSBbXVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzdWJqZWN0ID0gc3ViamVjdHNbaV1cblxuICAgICAgICBsZXQgdGl0bGUgPSBzdWJqZWN0LnRpdGxlXG4gICAgICAgIGlmICh0aXRsZS5sZW5ndGggPiA2KSB7XG4gICAgICAgICAgdGl0bGUgPSB0aXRsZS5zdWJzdHJpbmcoMCwgNikgKyAnLi4uJ1xuICAgICAgICB9XG4gICAgICAgIGxldCBtb3ZpZSA9IHtcbiAgICAgICAgICBzdGFyczogdXRpbC5jb252ZXJ0VG9TdGFyc0FycmF5KHN1YmplY3QucmF0aW5nLnN0YXJzKSxcbiAgICAgICAgICBjb252ZXJhZ2VVcmw6IHN1YmplY3QuaW1hZ2VzLmxhcmdlLFxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBhdmVyYWdlOiBzdWJqZWN0LnJhdGluZy5hdmVyYWdlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgIHJvd01vdmllLnB1c2gobW92aWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGkgJSAzID09PSAyKSB7XG4gICAgICAgICAgICByb3dNb3ZpZS5wdXNoKG1vdmllKVxuICAgICAgICAgICAgbW92aWVzLnB1c2gocm93TW92aWUpXG4gICAgICAgICAgICByb3dNb3ZpZSA9IFtdXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvd01vdmllLnB1c2gobW92aWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgPT09IHN1YmplY3RzLmxlbmd0aCAtIDEgJiYgaSAlIDMgIT09IDIpIHtcbiAgICAgICAgICBtb3ZpZXMucHVzaChyb3dNb3ZpZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4vLyAgICAgIGxldCB0aGF0ID0gdGhpcy5fX3ByZXZQYWdlX19cbi8vICAgICAgdGhhdC5zZWFyY2hNb3ZpZXMgPSBtb3ZpZXNcbi8vICAgICAgdGhhdC4kYXBwbHkoKVxuICAgICAgdGhpcy5zZWFyY2hNb3ZpZXMgPSBtb3ZpZXNcbiAgICAgIHRoaXMuJGFwcGx5KClcblxuICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnc2VhcmNoTW92aWVzJywgbW92aWVzKVxuICAgIH1cblxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgIGxldCBkb3ViYW5CYXNlID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZG91YmFuQmFzZVxuXG4gICAgICBsZXQgaW5UaHJlYXRlclVybCA9IGRvdWJhbkJhc2UgKyAnL3YyL21vdmllL2luX3RoZWF0ZXJzJyArICc/c3RhcnQ9MCZjb3VudD0zJ1xuICAgICAgbGV0IGNvbWluU29vblVybCA9IGRvdWJhbkJhc2UgKyAnL3YyL21vdmllL2NvbWluZ19zb29uJyArICc/c3RhcnQ9MCZjb3VudD0zJ1xuICAgICAgbGV0IHRvcDI1MFVybCA9IGRvdWJhbkJhc2UgKyAnL3YyL21vdmllL3RvcDI1MCcgKyAnP3N0YXJ0PTAmY291bnQ9MydcblxuICAgICAgbGV0IGluVGhyZWF0ZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdpblRocmVhdGVyJylcbiAgICAgIGxldCBjb21pblNvb24gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdjb21pblNvb24nKVxuICAgICAgbGV0IHRvcDI1MCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3RvcDI1MCcpXG5cbiAgICAgIGlmIChpblRocmVhdGVyID09PSAnJykge1xuICAgICAgICB0aGlzLmdldE1vdmllTGlzdERhdGEoaW5UaHJlYXRlclVybCwgJ2luVGhyZWF0ZXInLCAn5q2j5Zyo54Ot5pigJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9waWNNb3ZpZUxpc3QucHVzaChpblRocmVhdGVyKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29taW5Tb29uID09PSAnJykge1xuICAgICAgICB0aGlzLmdldE1vdmllTGlzdERhdGEoY29taW5Tb29uVXJsLCAnY29taW5Tb29uJywgJ+WNs+WwhuS4iuaYoCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvcGljTW92aWVMaXN0LnB1c2goY29taW5Tb29uKVxuICAgICAgfVxuXG4gICAgICBpZiAodG9wMjUwID09PSAnJykge1xuICAgICAgICB0aGlzLmdldE1vdmllTGlzdERhdGEodG9wMjUwVXJsLCAndG9wMjUwJywgJ1RvcDI1MCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvcGljTW92aWVMaXN0LnB1c2godG9wMjUwKVxuICAgICAgfVxuICAgIH1cblxuICAgIGdldE1vdmllTGlzdERhdGEodXJsLCBrZXksIG15VGl0bGUpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpc1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGRhdGE6IHt9LFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn6K+35rGC5oiQ5YqfJylcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgdGhhdC5wcm9jZXNzRG91YmFuRGF0YShyZXMuZGF0YSwga2V5LCBteVRpdGxlKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ+ivt+axguWksei0pScpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJvY2Vzc0RvdWJhbkRhdGEobW92aWVEb3ViYW4sIGtleSwgbXlUaXRsZSkge1xuICAgICAgbGV0IG1vdmllcyA9IFtdXG5cbiAgICAgIGZvciAobGV0IGluZGV4IGluIG1vdmllRG91YmFuLnN1YmplY3RzKSB7XG4gICAgICAgIGxldCBzdWJqZWN0ID0gbW92aWVEb3ViYW4uc3ViamVjdHNbaW5kZXhdXG5cbiAgICAgICAgbGV0IHRpdGxlID0gc3ViamVjdC50aXRsZVxuICAgICAgICBpZiAodGl0bGUubGVuZ3RoID4gNikge1xuICAgICAgICAgIHRpdGxlID0gdGl0bGUuc3Vic3RyaW5nKDAsIDYpICsgJy4uLidcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0ZW1wID0ge1xuICAgICAgICAgIHN0YXJzOiB1dGlsLmNvbnZlcnRUb1N0YXJzQXJyYXkoc3ViamVjdC5yYXRpbmcuc3RhcnMpLFxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBhdmVyYWdlOiBzdWJqZWN0LnJhdGluZy5hdmVyYWdlLFxuICAgICAgICAgIGNvbnZlcmFnZVVybDogc3ViamVjdC5pbWFnZXMubGFyZ2UsXG4gICAgICAgICAgbW92aWVJZDogc3ViamVjdC5pZFxuICAgICAgICB9XG5cbiAgICAgICAgbW92aWVzLnB1c2godGVtcClcbiAgICAgIH1cbiAgICAgIHRoaXMudG9waWNNb3ZpZUxpc3QucHVzaCh7XG4gICAgICAgIHRpdGxlOiBteVRpdGxlLFxuICAgICAgICBtb3ZpZXM6IG1vdmllc1xuICAgICAgfSlcblxuICAgICAgdGhpcy4kYXBwbHkoKVxuXG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKGtleSwge3RpdGxlOiBteVRpdGxlLCBtb3ZpZXM6IG1vdmllc30pXG4gICAgfVxuICB9XG4iXX0=