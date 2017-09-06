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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
      movies: []
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MoreMovies, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        var title, doubanBase, inThreaterUrl, cominSoonUrl, top250Url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                title = '正在热映';


                this.navigateTitle = title;

                doubanBase = this.$parent.globalData.doubanBase;
                inThreaterUrl = doubanBase + '/v2/movie/in_theaters' + '?start=0&count=10';
                cominSoonUrl = doubanBase + '/v2/movie/coming_soon' + '?start=0&count=10';
                top250Url = doubanBase + '/v2/movie/top250' + '?start=0&count=10';


                this.$parent.globalData.moreMoviesTitle = title;
                _context.t0 = title;
                _context.next = _context.t0 === '正在热映' ? 10 : _context.t0 === '即将上映' ? 12 : _context.t0 === 'Top250' ? 14 : 16;
                break;

              case 10:
                this.loadMovies(inThreaterUrl, '正在热映');
                return _context.abrupt('break', 18);

              case 12:
                this.loadMovies(cominSoonUrl, '即将上映');
                return _context.abrupt('break', 18);

              case 14:
                this.loadMovies(top250Url, 'Top250');
                return _context.abrupt('break', 18);

              case 16:
                console.log('加载更多标题参数传输错误');
                return _context.abrupt('break', 18);

              case 18:
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
      _wepy2.default.setNavigationBarTitle({
        title: this.navigateTitle
      });
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

      this.movies = movies;

      this.$apply();

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

          if ((i + 1) * j + j < 10) {
            addArr.push(movies[i][j]);
          }
        }
      }
      arr = [].concat(_toConsumableArray(arr), addArr);

      return arr;
    }
  }]);

  return MoreMovies;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(MoreMovies , 'pages/movies/more-movies/more-movies'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vcmUtbW92aWVzLmpzIl0sIm5hbWVzIjpbIk1vcmVNb3ZpZXMiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm1vdmllRGF0YUdyaWQiLCJkYXRhIiwibW92aWVzIiwibWV0aG9kcyIsInBhcmFtcyIsInRpdGxlIiwibmF2aWdhdGVUaXRsZSIsImRvdWJhbkJhc2UiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImluVGhyZWF0ZXJVcmwiLCJjb21pblNvb25VcmwiLCJ0b3AyNTBVcmwiLCJtb3JlTW92aWVzVGl0bGUiLCJsb2FkTW92aWVzIiwiY29uc29sZSIsImxvZyIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsIlVSTCIsImxvYWRUaXRsZSIsImRhdGFHcmlkIiwiZ2V0U3RvcmFnZVN5bmMiLCJodHRwIiwiZGVhbERvdWJhbkRhdGEiLCJzZXRTdG9yYWdlU3luYyIsInN1YmplY3RzIiwicm93TW92aWUiLCJpIiwibGVuZ3RoIiwic3ViamVjdCIsInN1YnN0cmluZyIsIm1vdmllIiwic3RhcnMiLCJjb252ZXJ0VG9TdGFyc0FycmF5IiwicmF0aW5nIiwiY29udmVyYWdlVXJsIiwiaW1hZ2VzIiwibGFyZ2UiLCJhdmVyYWdlIiwicHVzaCIsImV2ZW50Iiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwibW92aWVzVG9BcnIiLCIkYXBwbHkiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJhcnIiLCJhZGRBcnIiLCJqIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDcEJDLE0sR0FBUyxFQUFDLGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHNCQUFxQixRQUF4QyxFQUFqQixFLFFBQ1pDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSSxHQUFPO0FBQ0xDLGNBQVE7QUFESCxLLFFBSVBD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ekIsT0FBTzBCLE1BQTNCLEVBQW1DRCxHQUFuQyxFQUF3QztBQUN0QyxhQUFLLElBQUlvQixJQUFJLENBQWIsRUFBZ0JBLElBQUk3QyxPQUFPeUIsQ0FBUCxFQUFVQyxNQUE5QixFQUFzQ21CLEdBQXRDLEVBQTJDO0FBQ3pDRixjQUFJTixJQUFKLENBQVNyQyxPQUFPeUIsQ0FBUCxFQUFVb0IsQ0FBVixDQUFUOztBQUVBLGNBQUksQ0FBQ3BCLElBQUksQ0FBTCxJQUFVb0IsQ0FBVixHQUFjQSxDQUFkLEdBQWtCLEVBQXRCLEVBQTBCO0FBQ3hCRCxtQkFBT1AsSUFBUCxDQUFZckMsT0FBT3lCLENBQVAsRUFBVW9CLENBQVYsQ0FBWjtBQUNEO0FBQ0Y7QUFDRjtBQUNERix5Q0FBVUEsR0FBVixHQUFrQkMsTUFBbEI7O0FBRUEsYUFBT0QsR0FBUDtBQUNEOzs7O0VBM0pxQyxlQUFLRyxJOztrQkFBeEJwRCxVIiwiZmlsZSI6Im1vcmUtbW92aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB1dGlsIGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnXG4gIGltcG9ydCBNb3ZpZURhdGFHcmlkIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbW92aWUtZGF0YS1ncmlkJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vcmVNb3ZpZXMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgJHByb3BzID0ge1wibW92aWVEYXRhR3JpZFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bW92aWVzLm9uY2VcIjpcIm1vdmllc1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBtb3ZpZURhdGFHcmlkOiBNb3ZpZURhdGFHcmlkXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIG1vdmllczogW11cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge31cblxuICAgIGFzeW5jIG9uTG9hZChwYXJhbXMpIHtcbiAgICAgIGxldCB0aXRsZSA9ICfmraPlnKjng63mmKAnXG5cbiAgICAgIHRoaXMubmF2aWdhdGVUaXRsZSA9IHRpdGxlXG5cbiAgICAgIGxldCBkb3ViYW5CYXNlID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZG91YmFuQmFzZVxuXG4gICAgICBsZXQgaW5UaHJlYXRlclVybCA9IGRvdWJhbkJhc2UgKyAnL3YyL21vdmllL2luX3RoZWF0ZXJzJyArICc/c3RhcnQ9MCZjb3VudD0xMCdcbiAgICAgIGxldCBjb21pblNvb25VcmwgPSBkb3ViYW5CYXNlICsgJy92Mi9tb3ZpZS9jb21pbmdfc29vbicgKyAnP3N0YXJ0PTAmY291bnQ9MTAnXG4gICAgICBsZXQgdG9wMjUwVXJsID0gZG91YmFuQmFzZSArICcvdjIvbW92aWUvdG9wMjUwJyArICc/c3RhcnQ9MCZjb3VudD0xMCdcblxuICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEubW9yZU1vdmllc1RpdGxlID0gdGl0bGVcbiAgICAgIHN3aXRjaCAodGl0bGUpIHtcbiAgICAgICAgY2FzZSAn5q2j5Zyo54Ot5pigJzpcbiAgICAgICAgICB0aGlzLmxvYWRNb3ZpZXMoaW5UaHJlYXRlclVybCwgJ+ato+WcqOeDreaYoCcpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAn5Y2z5bCG5LiK5pigJzpcbiAgICAgICAgICB0aGlzLmxvYWRNb3ZpZXMoY29taW5Tb29uVXJsLCAn5Y2z5bCG5LiK5pigJylcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdUb3AyNTAnOlxuICAgICAgICAgIHRoaXMubG9hZE1vdmllcyh0b3AyNTBVcmwsICdUb3AyNTAnKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS5sb2coJ+WKoOi9veabtOWkmuagh+mimOWPguaVsOS8oOi+k+mUmeivrycpXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICB0aXRsZTogdGhpcy5uYXZpZ2F0ZVRpdGxlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGxvYWRNb3ZpZXMoVVJMLCBsb2FkVGl0bGUpIHtcbiAgICAgIGxldCBkYXRhR3JpZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2RhdGFHcmlkJylcbiAgICAgIGxldCBtb3JlTW92aWVzVGl0bGUgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5tb3JlTW92aWVzVGl0bGVcblxuICAgICAgaWYgKG1vcmVNb3ZpZXNUaXRsZSAhPT0gbG9hZFRpdGxlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfor7fmsYLmlbDmja4nKVxuICAgICAgICB1dGlsLmh0dHAoVVJMLCB0aGlzLmRlYWxEb3ViYW5EYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRhdGFHcmlkKSB7XG4gICAgICAgICAgdGhpcy5kZWFsRG91YmFuRGF0YShkYXRhR3JpZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn6K+35rGC5pWw5o2uJylcbiAgICAgICAgICB1dGlsLmh0dHAoVVJMLCB0aGlzLmRlYWxEb3ViYW5EYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVhbERvdWJhbkRhdGEoZGF0YUdyaWQpIHtcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2RhdGFHcmlkJywgZGF0YUdyaWQpXG4gICAgICBsZXQgc3ViamVjdHMgPSBkYXRhR3JpZC5zdWJqZWN0c1xuXG4gICAgICBsZXQgbW92aWVzID0gW11cbiAgICAgIGxldCByb3dNb3ZpZSA9IFtdXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHN1YmplY3QgPSBzdWJqZWN0c1tpXVxuXG4gICAgICAgIGxldCB0aXRsZSA9IHN1YmplY3QudGl0bGVcbiAgICAgICAgaWYgKHRpdGxlLmxlbmd0aCA+IDYpIHtcbiAgICAgICAgICB0aXRsZSA9IHRpdGxlLnN1YnN0cmluZygwLCA2KSArICcuLi4nXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1vdmllID0ge1xuICAgICAgICAgIHN0YXJzOiB1dGlsLmNvbnZlcnRUb1N0YXJzQXJyYXkoc3ViamVjdC5yYXRpbmcuc3RhcnMpLFxuICAgICAgICAgIGNvbnZlcmFnZVVybDogc3ViamVjdC5pbWFnZXMubGFyZ2UsXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIGF2ZXJhZ2U6IHN1YmplY3QucmF0aW5nLmF2ZXJhZ2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgcm93TW92aWUucHVzaChtb3ZpZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaSAlIDMgPT09IDIpIHtcbiAgICAgICAgICAgIHJvd01vdmllLnB1c2gobW92aWUpXG4gICAgICAgICAgICBtb3ZpZXMucHVzaChyb3dNb3ZpZSlcbiAgICAgICAgICAgIHJvd01vdmllID0gW11cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm93TW92aWUucHVzaChtb3ZpZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaSA9PT0gc3ViamVjdHMubGVuZ3RoIC0gMSAmJiBpICUgMyAhPT0gMikge1xuICAgICAgICAgIG1vdmllcy5wdXNoKHJvd01vdmllKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm1vdmllcyA9IG1vdmllc1xuICAgIH1cblxuICAgIG9uU2Nyb2xsdG9sb3dlcihldmVudCkge1xuICAgICAgd2VweS5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKVxuXG4gICAgICBsZXQgbW92aWVzID0gdGhpcy5kYXRhLm1vdmllc1xuXG4gICAgICBsZXQgc3ViamVjdHMgPSB0aGlzLm1vdmllc1RvQXJyKG1vdmllcylcblxuICAgICAgbW92aWVzID0gW11cbiAgICAgIGxldCByb3dNb3ZpZSA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBtb3ZpZSA9IHN1YmplY3RzW2ldXG5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICByb3dNb3ZpZS5wdXNoKG1vdmllKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpICUgMyA9PT0gMikge1xuICAgICAgICAgICAgcm93TW92aWUucHVzaChtb3ZpZSlcbiAgICAgICAgICAgIG1vdmllcy5wdXNoKHJvd01vdmllKVxuICAgICAgICAgICAgcm93TW92aWUgPSBbXVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3dNb3ZpZS5wdXNoKG1vdmllKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpID09PSBzdWJqZWN0cy5sZW5ndGggLSAxICYmIGkgJSAzICE9PSAyKSB7XG4gICAgICAgICAgbW92aWVzLnB1c2gocm93TW92aWUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5tb3ZpZXMgPSBtb3ZpZXNcblxuICAgICAgdGhpcy4kYXBwbHkoKVxuXG4gICAgICB3ZXB5LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG4gICAgfVxuXG4gICAgbW92aWVzVG9BcnIobW92aWVzKSB7XG4gICAgICBsZXQgYXJyID0gW11cbiAgICAgIGxldCBhZGRBcnIgPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3ZpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtb3ZpZXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBhcnIucHVzaChtb3ZpZXNbaV1bal0pXG5cbiAgICAgICAgICBpZiAoKGkgKyAxKSAqIGogKyBqIDwgMTApIHtcbiAgICAgICAgICAgIGFkZEFyci5wdXNoKG1vdmllc1tpXVtqXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFyciA9IFsuLi5hcnIsIC4uLmFkZEFycl1cblxuICAgICAgcmV0dXJuIGFyclxuICAgIH1cbiAgfVxuXG4iXX0=