'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./../../../utils/util.js');

var _util2 = _interopRequireDefault(_util);

var _movieDataGrid = require('./../../../components/movie-data-grid.js');

var _movieDataGrid2 = _interopRequireDefault(_movieDataGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MoreMovies = function (_wepy$page) {
  _inherits(MoreMovies, _wepy$page);

  function MoreMovies() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MoreMovies);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MoreMovies.__proto__ || Object.getPrototypeOf(MoreMovies)).call.apply(_ref, [this].concat(args))), _this), _this.$props = { "movieDataGrid": { "xmlns:v-bind": "", "v-bind:movies.once": "movies" } }, _this.$events = {}, _this.components = {
      movieDataGrid: _movieDataGrid2.default
    }, _this.data = {
      movies: {}
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MoreMovies, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        var title, doubanBase, inThreaterUrl, cominSoonUrl, top250Url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                title = options.title;

                title = '正在热映';

                this.data.navigateTitle = title;

                doubanBase = this.$parent.globalData.doubanBase;
                inThreaterUrl = doubanBase + '/v2/movie/in_theaters' + '?start=0&count=10';
                cominSoonUrl = doubanBase + '/v2/movie/coming_soon' + '?start=0&count=10';
                top250Url = doubanBase + '/v2/movie/top250' + '?start=0&count=10';


                this.$parent.globalData.moreMoviesTitle = title;
                _context.t0 = title;
                _context.next = _context.t0 === '正在热映' ? 11 : _context.t0 === '即将上映' ? 13 : _context.t0 === 'Top250' ? 15 : 17;
                break;

              case 11:
                this.loadMovies(inThreaterUrl, '正在热映');
                return _context.abrupt('break', 19);

              case 13:
                this.loadMovies(cominSoonUrl, '即将上映');
                return _context.abrupt('break', 19);

              case 15:
                this.loadMovies(top250Url, 'Top250');
                return _context.abrupt('break', 19);

              case 17:
                console.log('加载更多标题参数传输错误');
                return _context.abrupt('break', 19);

              case 19:

                console.log(this.movies);

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onReady',
    value: function onReady() {
      //      wepy.setNavigationBarTitle({
      //        title: this.data.navigateTitle
      //      })
    }
  }, {
    key: 'loadMovies',
    value: function loadMovies(URL, loadTitle) {
      var dataGrid = _wepy2.default.getStorageSync('dataGrid');
      var moreMoviesTitle = this.$parent.globalData.moreMoviesTitle;

      if (moreMoviesTitle !== loadTitle) {
        console.log('请求数据');
        _util2.default.http(URL, this.dealDoubanData);
      } else {
        if (dataGrid) {
          console.log('旧数据');
          this.dealDoubanData(dataGrid);
        } else {
          console.log('请求数据');
          _util2.default.http(URL, this.dealDoubanData);
        }
      }
    }
  }, {
    key: 'dealDoubanData',
    value: function dealDoubanData(dataGrid) {
      _wepy2.default.setStorageSync('dataGrid', dataGrid);
      var subjects = dataGrid.subjects;

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
          coverageUrl: subject.images.large,
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
      this.movies = movies;
    }
  }, {
    key: 'onScrolltolower',
    value: function onScrolltolower(event) {
      _wepy2.default.showNavigationBarLoading();

      var movies = this.data.movies;

      var subjects = this.moviesToArr(movies);

      movies = [];
      var rowMovie = [];
      for (var i = 0; i < subjects.length; i++) {
        var movie = subjects[i];

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

      this.setData({
        movies: movies
      });

      _wepy2.default.hideNavigationBarLoading();
    }
  }, {
    key: 'moviesToArr',
    value: function moviesToArr(movies) {
      var arr = [];
      var addArr = [];
      for (var i = 0; i < movies.length; i++) {
        for (var j = 0; j < movies[i].length; j++) {
          arr.push(movies[i][j]);

          if (addArr.length < 20) {
            addArr.push(movies[i][j]);
          }
        }
      }
      arr = arr.concat(arr);

      return arr;
    }
  }]);

  return MoreMovies;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(MoreMovies , 'pages/movies/more-movies/more-movies'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vcmUtbW92aWVzLmpzIl0sIm5hbWVzIjpbIk1vcmVNb3ZpZXMiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm1vdmllRGF0YUdyaWQiLCJkYXRhIiwibW92aWVzIiwibWV0aG9kcyIsIm9wdGlvbnMiLCJ0aXRsZSIsIm5hdmlnYXRlVGl0bGUiLCJkb3ViYW5CYXNlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJpblRocmVhdGVyVXJsIiwiY29taW5Tb29uVXJsIiwidG9wMjUwVXJsIiwibW9yZU1vdmllc1RpdGxlIiwibG9hZE1vdmllcyIsImNvbnNvbGUiLCJsb2ciLCJVUkwiLCJsb2FkVGl0bGUiLCJkYXRhR3JpZCIsImdldFN0b3JhZ2VTeW5jIiwiaHR0cCIsImRlYWxEb3ViYW5EYXRhIiwic2V0U3RvcmFnZVN5bmMiLCJzdWJqZWN0cyIsInJvd01vdmllIiwiaSIsImxlbmd0aCIsInN1YmplY3QiLCJzdWJzdHJpbmciLCJtb3ZpZSIsInN0YXJzIiwiY29udmVydFRvU3RhcnNBcnJheSIsInJhdGluZyIsImNvdmVyYWdlVXJsIiwiaW1hZ2VzIiwibGFyZ2UiLCJhdmVyYWdlIiwicHVzaCIsImV2ZW50Iiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwibW92aWVzVG9BcnIiLCJzZXREYXRhIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwiYXJyIiwiYWRkQXJyIiwiaiIsImNvbmNhdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNwQkMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsc0JBQXFCLFFBQXhDLEVBQWpCLEUsUUFDWkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUlWQyxJLEdBQU87QUFDTEMsY0FBUTtBQURILEssUUFJUEMsTyxHQUFVLEU7Ozs7Ozsy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LFNBQVMsRUFBYjtBQUNBLFdBQUssSUFBSW5CLElBQUksQ0FBYixFQUFnQkEsSUFBSXhCLE9BQU95QixNQUEzQixFQUFtQ0QsR0FBbkMsRUFBd0M7QUFDdEMsYUFBSyxJQUFJb0IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJNUMsT0FBT3dCLENBQVAsRUFBVUMsTUFBOUIsRUFBc0NtQixHQUF0QyxFQUEyQztBQUN6Q0YsY0FBSU4sSUFBSixDQUFTcEMsT0FBT3dCLENBQVAsRUFBVW9CLENBQVYsQ0FBVDs7QUFFQSxjQUFJRCxPQUFPbEIsTUFBUCxHQUFnQixFQUFwQixFQUF3QjtBQUN0QmtCLG1CQUFPUCxJQUFQLENBQVlwQyxPQUFPd0IsQ0FBUCxFQUFVb0IsQ0FBVixDQUFaO0FBQ0Q7QUFDRjtBQUNGO0FBQ0RGLFlBQU1BLElBQUlHLE1BQUosQ0FBV0gsR0FBWCxDQUFOOztBQUVBLGFBQU9BLEdBQVA7QUFDRDs7OztFQS9KcUMsZUFBS0ksSTs7a0JBQXhCcEQsVSIsImZpbGUiOiJtb3JlLW1vdmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgdXRpbCBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJ1xuICBpbXBvcnQgTW92aWVEYXRhR3JpZCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vdmllLWRhdGEtZ3JpZCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3JlTW92aWVzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICRwcm9wcyA9IHtcIm1vdmllRGF0YUdyaWRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm1vdmllcy5vbmNlXCI6XCJtb3ZpZXNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgbW92aWVEYXRhR3JpZDogTW92aWVEYXRhR3JpZFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBtb3ZpZXM6IHt9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHt9XG5cbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgICAgbGV0IHRpdGxlID0gb3B0aW9ucy50aXRsZVxuICAgICAgdGl0bGUgPSAn5q2j5Zyo54Ot5pigJ1xuXG4gICAgICB0aGlzLmRhdGEubmF2aWdhdGVUaXRsZSA9IHRpdGxlXG5cbiAgICAgIGxldCBkb3ViYW5CYXNlID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZG91YmFuQmFzZVxuXG4gICAgICBsZXQgaW5UaHJlYXRlclVybCA9IGRvdWJhbkJhc2UgKyAnL3YyL21vdmllL2luX3RoZWF0ZXJzJyArICc/c3RhcnQ9MCZjb3VudD0xMCdcbiAgICAgIGxldCBjb21pblNvb25VcmwgPSBkb3ViYW5CYXNlICsgJy92Mi9tb3ZpZS9jb21pbmdfc29vbicgKyAnP3N0YXJ0PTAmY291bnQ9MTAnXG4gICAgICBsZXQgdG9wMjUwVXJsID0gZG91YmFuQmFzZSArICcvdjIvbW92aWUvdG9wMjUwJyArICc/c3RhcnQ9MCZjb3VudD0xMCdcblxuICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEubW9yZU1vdmllc1RpdGxlID0gdGl0bGVcbiAgICAgIHN3aXRjaCAodGl0bGUpIHtcbiAgICAgICAgY2FzZSAn5q2j5Zyo54Ot5pigJzpcbiAgICAgICAgICB0aGlzLmxvYWRNb3ZpZXMoaW5UaHJlYXRlclVybCwgJ+ato+WcqOeDreaYoCcpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAn5Y2z5bCG5LiK5pigJzpcbiAgICAgICAgICB0aGlzLmxvYWRNb3ZpZXMoY29taW5Tb29uVXJsLCAn5Y2z5bCG5LiK5pigJylcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdUb3AyNTAnOlxuICAgICAgICAgIHRoaXMubG9hZE1vdmllcyh0b3AyNTBVcmwsICdUb3AyNTAnKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS5sb2coJ+WKoOi9veabtOWkmuagh+mimOWPguaVsOS8oOi+k+mUmeivrycpXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2codGhpcy5tb3ZpZXMpXG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbi8vICAgICAgd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuLy8gICAgICAgIHRpdGxlOiB0aGlzLmRhdGEubmF2aWdhdGVUaXRsZVxuLy8gICAgICB9KVxuICAgIH1cblxuICAgIGxvYWRNb3ZpZXMoVVJMLCBsb2FkVGl0bGUpIHtcbiAgICAgIGxldCBkYXRhR3JpZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2RhdGFHcmlkJylcbiAgICAgIGxldCBtb3JlTW92aWVzVGl0bGUgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5tb3JlTW92aWVzVGl0bGVcblxuICAgICAgaWYgKG1vcmVNb3ZpZXNUaXRsZSAhPT0gbG9hZFRpdGxlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfor7fmsYLmlbDmja4nKVxuICAgICAgICB1dGlsLmh0dHAoVVJMLCB0aGlzLmRlYWxEb3ViYW5EYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRhdGFHcmlkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ+aXp+aVsOaNricpXG4gICAgICAgICAgdGhpcy5kZWFsRG91YmFuRGF0YShkYXRhR3JpZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn6K+35rGC5pWw5o2uJylcbiAgICAgICAgICB1dGlsLmh0dHAoVVJMLCB0aGlzLmRlYWxEb3ViYW5EYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVhbERvdWJhbkRhdGEoZGF0YUdyaWQpIHtcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2RhdGFHcmlkJywgZGF0YUdyaWQpXG4gICAgICBsZXQgc3ViamVjdHMgPSBkYXRhR3JpZC5zdWJqZWN0c1xuXG4gICAgICBsZXQgbW92aWVzID0gW11cbiAgICAgIGxldCByb3dNb3ZpZSA9IFtdXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHN1YmplY3QgPSBzdWJqZWN0c1tpXVxuXG4gICAgICAgIGxldCB0aXRsZSA9IHN1YmplY3QudGl0bGVcbiAgICAgICAgaWYgKHRpdGxlLmxlbmd0aCA+IDYpIHtcbiAgICAgICAgICB0aXRsZSA9IHRpdGxlLnN1YnN0cmluZygwLCA2KSArICcuLi4nXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1vdmllID0ge1xuICAgICAgICAgIHN0YXJzOiB1dGlsLmNvbnZlcnRUb1N0YXJzQXJyYXkoc3ViamVjdC5yYXRpbmcuc3RhcnMpLFxuICAgICAgICAgIGNvdmVyYWdlVXJsOiBzdWJqZWN0LmltYWdlcy5sYXJnZSxcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgYXZlcmFnZTogc3ViamVjdC5yYXRpbmcuYXZlcmFnZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICByb3dNb3ZpZS5wdXNoKG1vdmllKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpICUgMyA9PT0gMikge1xuICAgICAgICAgICAgcm93TW92aWUucHVzaChtb3ZpZSlcbiAgICAgICAgICAgIG1vdmllcy5wdXNoKHJvd01vdmllKVxuICAgICAgICAgICAgcm93TW92aWUgPSBbXVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3dNb3ZpZS5wdXNoKG1vdmllKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpID09PSBzdWJqZWN0cy5sZW5ndGggLSAxICYmIGkgJSAzICE9PSAyKSB7XG4gICAgICAgICAgbW92aWVzLnB1c2gocm93TW92aWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubW92aWVzID0gbW92aWVzXG4gICAgfVxuXG4gICAgb25TY3JvbGx0b2xvd2VyKGV2ZW50KSB7XG4gICAgICB3ZXB5LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG5cbiAgICAgIGxldCBtb3ZpZXMgPSB0aGlzLmRhdGEubW92aWVzXG5cbiAgICAgIGxldCBzdWJqZWN0cyA9IHRoaXMubW92aWVzVG9BcnIobW92aWVzKVxuXG4gICAgICBtb3ZpZXMgPSBbXVxuICAgICAgbGV0IHJvd01vdmllID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG1vdmllID0gc3ViamVjdHNbaV1cblxuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgIHJvd01vdmllLnB1c2gobW92aWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGkgJSAzID09PSAyKSB7XG4gICAgICAgICAgICByb3dNb3ZpZS5wdXNoKG1vdmllKVxuICAgICAgICAgICAgbW92aWVzLnB1c2gocm93TW92aWUpXG4gICAgICAgICAgICByb3dNb3ZpZSA9IFtdXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvd01vdmllLnB1c2gobW92aWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgPT09IHN1YmplY3RzLmxlbmd0aCAtIDEgJiYgaSAlIDMgIT09IDIpIHtcbiAgICAgICAgICBtb3ZpZXMucHVzaChyb3dNb3ZpZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBtb3ZpZXM6IG1vdmllc1xuICAgICAgfSlcblxuICAgICAgd2VweS5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKVxuICAgIH1cblxuICAgIG1vdmllc1RvQXJyKG1vdmllcykge1xuICAgICAgbGV0IGFyciA9IFtdXG4gICAgICBsZXQgYWRkQXJyID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW92aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbW92aWVzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgYXJyLnB1c2gobW92aWVzW2ldW2pdKVxuXG4gICAgICAgICAgaWYgKGFkZEFyci5sZW5ndGggPCAyMCkge1xuICAgICAgICAgICAgYWRkQXJyLnB1c2gobW92aWVzW2ldW2pdKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXJyID0gYXJyLmNvbmNhdChhcnIpXG5cbiAgICAgIHJldHVybiBhcnJcbiAgICB9XG4gIH1cblxuIl19