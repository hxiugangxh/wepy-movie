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
        _util2.default.http(URL, this.dealDoubanData);
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

      var that = this.__prevPage__;
      that.searchMovies = movies;
      that.$apply();

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLmpzIl0sIm5hbWVzIjpbIk1vdmllIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibW92aWVMaXN0IiwibW92aWVEYXRhR3JpZCIsImRhdGEiLCJ0b3BpY01vdmllTGlzdCIsImluVGhlYXRlcnMiLCJjb21pbmdTb29uIiwidG9wMjUwIiwiaXNTZWFyY2giLCJzZWFyY2hNb3ZpZXMiLCJtZXRob2RzIiwib25Gb2N1cyIsIiRhcHBseSIsImNsb3NlU2VhcmNoIiwicXVlcnkiLCJldmVudCIsIlVSTCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiZG91YmFuQmFzZSIsImRldGFpbCIsInZhbHVlIiwiaHR0cCIsImRlYWxEb3ViYW5EYXRhIiwic3ViamVjdHMiLCJtb3ZpZXMiLCJyb3dNb3ZpZSIsImkiLCJsZW5ndGgiLCJzdWJqZWN0IiwidGl0bGUiLCJzdWJzdHJpbmciLCJtb3ZpZSIsInN0YXJzIiwiY29udmVydFRvU3RhcnNBcnJheSIsInJhdGluZyIsImNvbnZlcmFnZVVybCIsImltYWdlcyIsImxhcmdlIiwiYXZlcmFnZSIsInB1c2giLCJ0aGF0IiwiX19wcmV2UGFnZV9fIiwic2V0U3RvcmFnZVN5bmMiLCJpblRocmVhdGVyVXJsIiwiY29taW5Tb29uVXJsIiwidG9wMjUwVXJsIiwiaW5UaHJlYXRlciIsImdldFN0b3JhZ2VTeW5jIiwiY29taW5Tb29uIiwiZ2V0TW92aWVMaXN0RGF0YSIsInVybCIsImtleSIsIm15VGl0bGUiLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVyIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzRG91YmFuRGF0YSIsImZhaWwiLCJtb3ZpZURvdWJhbiIsImluZGV4IiwidGVtcCIsIm1vdmllSWQiLCJpZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7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b0JvQyxJQUFwQixDQUF5QjtBQUN2QlYsZUFBT3VCLE9BRGdCO0FBRXZCNUIsZ0JBQVFBO0FBRmUsT0FBekI7O0FBS0EsV0FBS2IsTUFBTDs7QUFFQSxxQkFBSytCLGNBQUwsQ0FBb0JTLEdBQXBCLEVBQXlCLEVBQUN0QixPQUFPdUIsT0FBUixFQUFpQjVCLFFBQVFBLE1BQXpCLEVBQXpCO0FBQ0Q7Ozs7RUF4S2dDLGVBQUsyQyxJOztrQkFBbkJ6RSxLIiwiZmlsZSI6Im1vdmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb3ZpZS1saXN0J1xuICBpbXBvcnQgdXRpbCBmcm9tICcuLi8uLi91dGlscy91dGlsJ1xuICBpbXBvcnQgTW92aWVEYXRhR3JpZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vdmllLWRhdGEtZ3JpZCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eUteW9sSdcbiAgICB9XG5cbiAgICRwcm9wcyA9IHtcIm1vdmllTGlzdFwiOntcInhtbG5zOnYtYmluZFwiOntcImZvclwiOlwidG9waWNNb3ZpZUxpc3RcIixcIml0ZW1cIjpcIm1vdmllTGlzdFwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcIm1vdmllTGlzdFwifSxcInYtYmluZDptb2l2ZUxpc3Qub25jZVwiOntcImZvclwiOlwidG9waWNNb3ZpZUxpc3RcIixcIml0ZW1cIjpcIm1vdmllTGlzdFwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcIm1vdmllTGlzdFwifX0sXCJtb3ZpZURhdGFHcmlkXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDptb3ZpZXMub25jZVwiOlwic2VhcmNoTW92aWVzXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIG1vdmllTGlzdDogTW92aWVMaXN0LFxuICAgICAgbW92aWVEYXRhR3JpZDogTW92aWVEYXRhR3JpZFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICB0b3BpY01vdmllTGlzdDogW10sXG4gICAgICBpblRoZWF0ZXJzOiB7fSxcbiAgICAgIGNvbWluZ1Nvb246IHt9LFxuICAgICAgdG9wMjUwOiB7fSxcbiAgICAgIGlzU2VhcmNoOiBmYWxzZSxcbiAgICAgIHNlYXJjaE1vdmllczoge31cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgb25Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5pc1NlYXJjaCA9IHRydWVcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIGNsb3NlU2VhcmNoKCkge1xuICAgICAgICB0aGlzLmlzU2VhcmNoID0gZmFsc2VcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIHF1ZXJ5KGV2ZW50KSB7XG4gICAgICAgIGxldCBVUkwgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5kb3ViYW5CYXNlICsgJy92Mi9tb3ZpZS9zZWFyY2g/cT0nICsgZXZlbnQuZGV0YWlsLnZhbHVlXG4vLyAgICAgICAgbGV0IHNlYXJjaE1vdmllcyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3NlYXJjaE1vdmllcycpXG4vL1xuLy8gICAgICAgIGlmIChzZWFyY2hNb3ZpZXMgIT09ICcnKSB7XG4vLyAgICAgICAgICB0aGlzLnNlYXJjaE1vdmllcyA9IHNlYXJjaE1vdmllc1xuLy8gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuLy8gICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICBjb25zb2xlLmxvZygn6K+35rGC5pWw5o2uJylcbi8vLy8gICAgICAgICAgdXRpbC5odHRwKFVSTCwgdGhpcy5kZWFsRG91YmFuRGF0YSlcbi8vICAgICAgICB9XG4gICAgICAgIHV0aWwuaHR0cChVUkwsIHRoaXMuZGVhbERvdWJhbkRhdGEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVhbERvdWJhbkRhdGEoZGF0YSkge1xuICAgICAgbGV0IHN1YmplY3RzID0gZGF0YS5zdWJqZWN0c1xuXG4gICAgICBsZXQgbW92aWVzID0gW11cbiAgICAgIGxldCByb3dNb3ZpZSA9IFtdXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHN1YmplY3QgPSBzdWJqZWN0c1tpXVxuXG4gICAgICAgIGxldCB0aXRsZSA9IHN1YmplY3QudGl0bGVcbiAgICAgICAgaWYgKHRpdGxlLmxlbmd0aCA+IDYpIHtcbiAgICAgICAgICB0aXRsZSA9IHRpdGxlLnN1YnN0cmluZygwLCA2KSArICcuLi4nXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1vdmllID0ge1xuICAgICAgICAgIHN0YXJzOiB1dGlsLmNvbnZlcnRUb1N0YXJzQXJyYXkoc3ViamVjdC5yYXRpbmcuc3RhcnMpLFxuICAgICAgICAgIGNvbnZlcmFnZVVybDogc3ViamVjdC5pbWFnZXMubGFyZ2UsXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIGF2ZXJhZ2U6IHN1YmplY3QucmF0aW5nLmF2ZXJhZ2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgcm93TW92aWUucHVzaChtb3ZpZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaSAlIDMgPT09IDIpIHtcbiAgICAgICAgICAgIHJvd01vdmllLnB1c2gobW92aWUpXG4gICAgICAgICAgICBtb3ZpZXMucHVzaChyb3dNb3ZpZSlcbiAgICAgICAgICAgIHJvd01vdmllID0gW11cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm93TW92aWUucHVzaChtb3ZpZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaSA9PT0gc3ViamVjdHMubGVuZ3RoIC0gMSAmJiBpICUgMyAhPT0gMikge1xuICAgICAgICAgIG1vdmllcy5wdXNoKHJvd01vdmllKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCB0aGF0ID0gdGhpcy5fX3ByZXZQYWdlX19cbiAgICAgIHRoYXQuc2VhcmNoTW92aWVzID0gbW92aWVzXG4gICAgICB0aGF0LiRhcHBseSgpXG5cbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3NlYXJjaE1vdmllcycsIG1vdmllcylcbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICBsZXQgZG91YmFuQmFzZSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmRvdWJhbkJhc2VcblxuICAgICAgbGV0IGluVGhyZWF0ZXJVcmwgPSBkb3ViYW5CYXNlICsgJy92Mi9tb3ZpZS9pbl90aGVhdGVycycgKyAnP3N0YXJ0PTAmY291bnQ9MydcbiAgICAgIGxldCBjb21pblNvb25VcmwgPSBkb3ViYW5CYXNlICsgJy92Mi9tb3ZpZS9jb21pbmdfc29vbicgKyAnP3N0YXJ0PTAmY291bnQ9MydcbiAgICAgIGxldCB0b3AyNTBVcmwgPSBkb3ViYW5CYXNlICsgJy92Mi9tb3ZpZS90b3AyNTAnICsgJz9zdGFydD0wJmNvdW50PTMnXG5cbiAgICAgIGxldCBpblRocmVhdGVyID0gd2VweS5nZXRTdG9yYWdlU3luYygnaW5UaHJlYXRlcicpXG4gICAgICBsZXQgY29taW5Tb29uID0gd2VweS5nZXRTdG9yYWdlU3luYygnY29taW5Tb29uJylcbiAgICAgIGxldCB0b3AyNTAgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd0b3AyNTAnKVxuXG4gICAgICBpZiAoaW5UaHJlYXRlciA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5nZXRNb3ZpZUxpc3REYXRhKGluVGhyZWF0ZXJVcmwsICdpblRocmVhdGVyJywgJ+ato+WcqOeDreaYoCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvcGljTW92aWVMaXN0LnB1c2goaW5UaHJlYXRlcilcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbWluU29vbiA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5nZXRNb3ZpZUxpc3REYXRhKGNvbWluU29vblVybCwgJ2NvbWluU29vbicsICfljbPlsIbkuIrmmKAnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b3BpY01vdmllTGlzdC5wdXNoKGNvbWluU29vbilcbiAgICAgIH1cblxuICAgICAgaWYgKHRvcDI1MCA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5nZXRNb3ZpZUxpc3REYXRhKHRvcDI1MFVybCwgJ3RvcDI1MCcsICdUb3AyNTAnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b3BpY01vdmllTGlzdC5wdXNoKHRvcDI1MClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNb3ZpZUxpc3REYXRhKHVybCwga2V5LCBteVRpdGxlKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdqc29uJ1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ+ivt+axguaIkOWKnycpXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgIHRoYXQucHJvY2Vzc0RvdWJhbkRhdGEocmVzLmRhdGEsIGtleSwgbXlUaXRsZSlcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfor7fmsYLlpLHotKUnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHByb2Nlc3NEb3ViYW5EYXRhKG1vdmllRG91YmFuLCBrZXksIG15VGl0bGUpIHtcbiAgICAgIGxldCBtb3ZpZXMgPSBbXVxuXG4gICAgICBmb3IgKGxldCBpbmRleCBpbiBtb3ZpZURvdWJhbi5zdWJqZWN0cykge1xuICAgICAgICBsZXQgc3ViamVjdCA9IG1vdmllRG91YmFuLnN1YmplY3RzW2luZGV4XVxuXG4gICAgICAgIGxldCB0aXRsZSA9IHN1YmplY3QudGl0bGVcbiAgICAgICAgaWYgKHRpdGxlLmxlbmd0aCA+IDYpIHtcbiAgICAgICAgICB0aXRsZSA9IHRpdGxlLnN1YnN0cmluZygwLCA2KSArICcuLi4nXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGVtcCA9IHtcbiAgICAgICAgICBzdGFyczogdXRpbC5jb252ZXJ0VG9TdGFyc0FycmF5KHN1YmplY3QucmF0aW5nLnN0YXJzKSxcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgYXZlcmFnZTogc3ViamVjdC5yYXRpbmcuYXZlcmFnZSxcbiAgICAgICAgICBjb252ZXJhZ2VVcmw6IHN1YmplY3QuaW1hZ2VzLmxhcmdlLFxuICAgICAgICAgIG1vdmllSWQ6IHN1YmplY3QuaWRcbiAgICAgICAgfVxuXG4gICAgICAgIG1vdmllcy5wdXNoKHRlbXApXG4gICAgICB9XG4gICAgICB0aGlzLnRvcGljTW92aWVMaXN0LnB1c2goe1xuICAgICAgICB0aXRsZTogbXlUaXRsZSxcbiAgICAgICAgbW92aWVzOiBtb3ZpZXNcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuJGFwcGx5KClcblxuICAgICAgd2VweS5zZXRTdG9yYWdlU3luYyhrZXksIHt0aXRsZTogbXlUaXRsZSwgbW92aWVzOiBtb3ZpZXN9KVxuICAgIH1cbiAgfVxuIl19