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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MoreMovies.__proto__ || Object.getPrototypeOf(MoreMovies)).call.apply(_ref, [this].concat(args))), _this), _this.$props = { "movieDataGrid": { "xmlns:v-bind": "", "v-bind:movies.once": "movies", "title": "test props" } }, _this.$events = {}, _this.components = {
      movieDataGrid: _movieDataGrid2.default
    }, _this.data = {
      movies: []
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MoreMovies, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        var doubanBase, inThreaterUrl, cominSoonUrl, top250Url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.navigateTitle = params.title;

                doubanBase = this.$parent.globalData.doubanBase;
                inThreaterUrl = doubanBase + '/v2/movie/in_theaters' + '?start=0&count=10';
                cominSoonUrl = doubanBase + '/v2/movie/coming_soon' + '?start=0&count=10';
                top250Url = doubanBase + '/v2/movie/top250' + '?start=0&count=10';


                this.$parent.globalData.moreMoviesTitle = this.navigateTitle;
                _context.t0 = this.navigateTitle;
                _context.next = _context.t0 === '正在热映' ? 9 : _context.t0 === '即将上映' ? 11 : _context.t0 === 'Top250' ? 13 : 15;
                break;

              case 9:
                this.loadMovies(inThreaterUrl, '正在热映');
                return _context.abrupt('break', 17);

              case 11:
                this.loadMovies(cominSoonUrl, '即将上映');
                return _context.abrupt('break', 17);

              case 13:
                this.loadMovies(top250Url, 'Top250');
                return _context.abrupt('break', 17);

              case 15:
                console.log('加载更多标题参数传输错误');
                return _context.abrupt('break', 17);

              case 17:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vcmUtbW92aWVzLmpzIl0sIm5hbWVzIjpbIk1vcmVNb3ZpZXMiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm1vdmllRGF0YUdyaWQiLCJkYXRhIiwibW92aWVzIiwibWV0aG9kcyIsInBhcmFtcyIsIm5hdmlnYXRlVGl0bGUiLCJ0aXRsZSIsImRvdWJhbkJhc2UiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImluVGhyZWF0ZXJVcmwiLCJjb21pblNvb25VcmwiLCJ0b3AyNTBVcmwiLCJtb3JlTW92aWVzVGl0bGUiLCJsb2FkTW92aWVzIiwiY29uc29sZSIsImxvZyIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsIlVSTCIsImxvYWRUaXRsZSIsImRhdGFHcmlkIiwiZ2V0U3RvcmFnZVN5bmMiLCJodHRwIiwiZGVhbERvdWJhbkRhdGEiLCJzZXRTdG9yYWdlU3luYyIsInN1YmplY3RzIiwicm93TW92aWUiLCJpIiwibGVuZ3RoIiwic3ViamVjdCIsInN1YnN0cmluZyIsIm1vdmllIiwic3RhcnMiLCJjb252ZXJ0VG9TdGFyc0FycmF5IiwicmF0aW5nIiwiY29udmVyYWdlVXJsIiwiaW1hZ2VzIiwibGFyZ2UiLCJhdmVyYWdlIiwicHVzaCIsImV2ZW50Iiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwibW92aWVzVG9BcnIiLCIkYXBwbHkiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJhcnIiLCJhZGRBcnIiLCJqIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDcEJDLE0sR0FBUyxFQUFDLGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHNCQUFxQixRQUF4QyxFQUFpRCxTQUFRLFlBQXpELEVBQWpCLEUsUUFDWkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxJLEdBQU87QUFDTEMs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QUFiLEVBQWdCQSxJQUFJekIsT0FBTzBCLE1BQTNCLEVBQW1DRCxHQUFuQyxFQUF3QztBQUN0QyxhQUFLLElBQUlvQixJQUFJLENBQWIsRUFBZ0JBLElBQUk3QyxPQUFPeUIsQ0FBUCxFQUFVQyxNQUE5QixFQUFzQ21CLEdBQXRDLEVBQTJDO0FBQ3pDRixjQUFJTixJQUFKLENBQVNyQyxPQUFPeUIsQ0FBUCxFQUFVb0IsQ0FBVixDQUFUOztBQUVBLGNBQUksQ0FBQ3BCLElBQUksQ0FBTCxJQUFVb0IsQ0FBVixHQUFjQSxDQUFkLEdBQWtCLEVBQXRCLEVBQTBCO0FBQ3hCRCxtQkFBT1AsSUFBUCxDQUFZckMsT0FBT3lCLENBQVAsRUFBVW9CLENBQVYsQ0FBWjtBQUNEO0FBQ0Y7QUFDRjtBQUNERix5Q0FBVUEsR0FBVixHQUFrQkMsTUFBbEI7O0FBRUEsYUFBT0QsR0FBUDtBQUNEOzs7O0VBeEpxQyxlQUFLRyxJOztrQkFBeEJwRCxVIiwiZmlsZSI6Im1vcmUtbW92aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB1dGlsIGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnXG4gIGltcG9ydCBNb3ZpZURhdGFHcmlkIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbW92aWUtZGF0YS1ncmlkJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vcmVNb3ZpZXMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgJHByb3BzID0ge1wibW92aWVEYXRhR3JpZFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bW92aWVzLm9uY2VcIjpcIm1vdmllc1wiLFwidGl0bGVcIjpcInRlc3QgcHJvcHNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgbW92aWVEYXRhR3JpZDogTW92aWVEYXRhR3JpZFxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgbW92aWVzOiBbXVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7fVxuXG4gICAgYXN5bmMgb25Mb2FkKHBhcmFtcykge1xuICAgICAgdGhpcy5uYXZpZ2F0ZVRpdGxlID0gcGFyYW1zLnRpdGxlXG5cbiAgICAgIGxldCBkb3ViYW5CYXNlID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZG91YmFuQmFzZVxuXG4gICAgICBsZXQgaW5UaHJlYXRlclVybCA9IGRvdWJhbkJhc2UgKyAnL3YyL21vdmllL2luX3RoZWF0ZXJzJyArICc/c3RhcnQ9MCZjb3VudD0xMCdcbiAgICAgIGxldCBjb21pblNvb25VcmwgPSBkb3ViYW5CYXNlICsgJy92Mi9tb3ZpZS9jb21pbmdfc29vbicgKyAnP3N0YXJ0PTAmY291bnQ9MTAnXG4gICAgICBsZXQgdG9wMjUwVXJsID0gZG91YmFuQmFzZSArICcvdjIvbW92aWUvdG9wMjUwJyArICc/c3RhcnQ9MCZjb3VudD0xMCdcblxuICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEubW9yZU1vdmllc1RpdGxlID0gdGhpcy5uYXZpZ2F0ZVRpdGxlXG4gICAgICBzd2l0Y2ggKHRoaXMubmF2aWdhdGVUaXRsZSkge1xuICAgICAgICBjYXNlICfmraPlnKjng63mmKAnOlxuICAgICAgICAgIHRoaXMubG9hZE1vdmllcyhpblRocmVhdGVyVXJsLCAn5q2j5Zyo54Ot5pigJylcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICfljbPlsIbkuIrmmKAnOlxuICAgICAgICAgIHRoaXMubG9hZE1vdmllcyhjb21pblNvb25VcmwsICfljbPlsIbkuIrmmKAnKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ1RvcDI1MCc6XG4gICAgICAgICAgdGhpcy5sb2FkTW92aWVzKHRvcDI1MFVybCwgJ1RvcDI1MCcpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmxvZygn5Yqg6L295pu05aSa5qCH6aKY5Y+C5pWw5Lyg6L6T6ZSZ6K+vJylcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgIHRpdGxlOiB0aGlzLm5hdmlnYXRlVGl0bGVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbG9hZE1vdmllcyhVUkwsIGxvYWRUaXRsZSkge1xuICAgICAgbGV0IGRhdGFHcmlkID0gd2VweS5nZXRTdG9yYWdlU3luYygnZGF0YUdyaWQnKVxuICAgICAgbGV0IG1vcmVNb3ZpZXNUaXRsZSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm1vcmVNb3ZpZXNUaXRsZVxuXG4gICAgICBpZiAobW9yZU1vdmllc1RpdGxlICE9PSBsb2FkVGl0bGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+ivt+axguaVsOaNricpXG4gICAgICAgIHV0aWwuaHR0cChVUkwsIHRoaXMuZGVhbERvdWJhbkRhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGF0YUdyaWQpIHtcbiAgICAgICAgICB0aGlzLmRlYWxEb3ViYW5EYXRhKGRhdGFHcmlkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfor7fmsYLmlbDmja4nKVxuICAgICAgICAgIHV0aWwuaHR0cChVUkwsIHRoaXMuZGVhbERvdWJhbkRhdGEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWFsRG91YmFuRGF0YShkYXRhR3JpZCkge1xuICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZGF0YUdyaWQnLCBkYXRhR3JpZClcbiAgICAgIGxldCBzdWJqZWN0cyA9IGRhdGFHcmlkLnN1YmplY3RzXG5cbiAgICAgIGxldCBtb3ZpZXMgPSBbXVxuICAgICAgbGV0IHJvd01vdmllID0gW11cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc3ViamVjdCA9IHN1YmplY3RzW2ldXG5cbiAgICAgICAgbGV0IHRpdGxlID0gc3ViamVjdC50aXRsZVxuICAgICAgICBpZiAodGl0bGUubGVuZ3RoID4gNikge1xuICAgICAgICAgIHRpdGxlID0gdGl0bGUuc3Vic3RyaW5nKDAsIDYpICsgJy4uLidcbiAgICAgICAgfVxuICAgICAgICBsZXQgbW92aWUgPSB7XG4gICAgICAgICAgc3RhcnM6IHV0aWwuY29udmVydFRvU3RhcnNBcnJheShzdWJqZWN0LnJhdGluZy5zdGFycyksXG4gICAgICAgICAgY29udmVyYWdlVXJsOiBzdWJqZWN0LmltYWdlcy5sYXJnZSxcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgYXZlcmFnZTogc3ViamVjdC5yYXRpbmcuYXZlcmFnZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICByb3dNb3ZpZS5wdXNoKG1vdmllKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpICUgMyA9PT0gMikge1xuICAgICAgICAgICAgcm93TW92aWUucHVzaChtb3ZpZSlcbiAgICAgICAgICAgIG1vdmllcy5wdXNoKHJvd01vdmllKVxuICAgICAgICAgICAgcm93TW92aWUgPSBbXVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3dNb3ZpZS5wdXNoKG1vdmllKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpID09PSBzdWJqZWN0cy5sZW5ndGggLSAxICYmIGkgJSAzICE9PSAyKSB7XG4gICAgICAgICAgbW92aWVzLnB1c2gocm93TW92aWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubW92aWVzID0gbW92aWVzXG4gICAgfVxuXG4gICAgb25TY3JvbGx0b2xvd2VyKGV2ZW50KSB7XG4gICAgICB3ZXB5LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG5cbiAgICAgIGxldCBtb3ZpZXMgPSB0aGlzLmRhdGEubW92aWVzXG5cbiAgICAgIGxldCBzdWJqZWN0cyA9IHRoaXMubW92aWVzVG9BcnIobW92aWVzKVxuXG4gICAgICBtb3ZpZXMgPSBbXVxuICAgICAgbGV0IHJvd01vdmllID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG1vdmllID0gc3ViamVjdHNbaV1cblxuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgIHJvd01vdmllLnB1c2gobW92aWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGkgJSAzID09PSAyKSB7XG4gICAgICAgICAgICByb3dNb3ZpZS5wdXNoKG1vdmllKVxuICAgICAgICAgICAgbW92aWVzLnB1c2gocm93TW92aWUpXG4gICAgICAgICAgICByb3dNb3ZpZSA9IFtdXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvd01vdmllLnB1c2gobW92aWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgPT09IHN1YmplY3RzLmxlbmd0aCAtIDEgJiYgaSAlIDMgIT09IDIpIHtcbiAgICAgICAgICBtb3ZpZXMucHVzaChyb3dNb3ZpZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLm1vdmllcyA9IG1vdmllc1xuXG4gICAgICB0aGlzLiRhcHBseSgpXG5cbiAgICAgIHdlcHkuaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKClcbiAgICB9XG5cbiAgICBtb3ZpZXNUb0Fycihtb3ZpZXMpIHtcbiAgICAgIGxldCBhcnIgPSBbXVxuICAgICAgbGV0IGFkZEFyciA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1vdmllc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGFyci5wdXNoKG1vdmllc1tpXVtqXSlcblxuICAgICAgICAgIGlmICgoaSArIDEpICogaiArIGogPCAxMCkge1xuICAgICAgICAgICAgYWRkQXJyLnB1c2gobW92aWVzW2ldW2pdKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXJyID0gWy4uLmFyciwgLi4uYWRkQXJyXVxuXG4gICAgICByZXR1cm4gYXJyXG4gICAgfVxuICB9XG5cbiJdfQ==