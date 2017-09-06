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
    }, _this.$props = { "movieList": { "xmlns:v-bind": { "for": "topicMovieList", "item": "movieList", "index": "index", "key": "key", "value": "movieList" }, "v-bind:moiveList.once": { "for": "topicMovieList", "item": "movieList", "index": "index", "key": "key", "value": "movieList" } } }, _this.$events = {}, _this.components = {
      movieList: _movieList2.default
    }, _this.data = {
      topicMovieList: [],
      inTheaters: {},
      comingSoon: {},
      top250: {},
      isSearch: false,
      searchMovies: {}
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Movie, [{
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

                console.log(this.topicMovieList);

              case 11:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLmpzIl0sIm5hbWVzIjpbIk1vdmllIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibW92aWVMaXN0IiwiZGF0YSIsInRvcGljTW92aWVMaXN0IiwiaW5UaGVhdGVycyIsImNvbWluZ1Nvb24iLCJ0b3AyNTAiLCJpc1NlYXJjaCIsInNlYXJjaE1vdmllcyIsIm1ldGhvZHMiLCJkb3ViYW5CYXNlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJpblRocmVhdGVyVXJsIiwiY29taW5Tb29uVXJsIiwidG9wMjUwVXJsIiwiaW5UaHJlYXRlciIsImdldFN0b3JhZ2VTeW5jIiwiY29taW5Tb29uIiwiZ2V0TW92aWVMaXN0RGF0YSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwidXJsIiwia2V5IiwibXlUaXRsZSIsInRoYXQiLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVyIiwic3VjY2VzcyIsInJlcyIsInByb2Nlc3NEb3ViYW5EYXRhIiwiZmFpbCIsIm1vdmllRG91YmFuIiwibW92aWVzIiwiaW5kZXgiLCJzdWJqZWN0cyIsInN1YmplY3QiLCJ0aXRsZSIsImxlbmd0aCIsInN1YnN0cmluZyIsInRlbXAiLCJzdGFycyIsImNvbnZlcnRUb1N0YXJzQXJyYXkiLCJyYXRpbmciLCJhdmVyYWdlIiwiY29udmVyYWdlVXJsIiwiaW1hZ2VzIiwibGFyZ2UiLCJtb3ZpZUlkIiwiaWQiLCIkYXBwbHkiLCJzZXRTdG9yYWdlU3luYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFDLE9BQU0sZ0JBQVAsRUFBd0IsUUFBTyxXQUEvQixFQUEyQyxTQUFRLE9B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SUMsT0FBTztBQUNUQyxpQkFBTyxlQUFLQyxtQkFBTCxDQUF5Qk4sUUFBUU8sTUFBUixDQUFlRixLQUF4QyxDQURFO0FBRVRKLGlCQUFPQSxLQUZFO0FBR1RPLG1CQUFTUixRQUFRTyxNQUFSLENBQWVDLE9BSGY7QUFJVEMsd0JBQWNULFFBQVFVLE1BQVIsQ0FBZUMsS0FKcEI7QUFLVEMsbUJBQVNaLFFBQVFhO0FBTFIsU0FBWDs7QUFRQWhCLGVBQU9mLElBQVAsQ0FBWXNCLElBQVo7QUFDRDtBQUNELFdBQUt2QyxjQUFMLENBQW9CaUIsSUFBcEIsQ0FBeUI7QUFDdkJtQixlQUFPZCxPQURnQjtBQUV2QlUsZ0JBQVFBO0FBRmUsT0FBekI7O0FBS0EsV0FBS2lCLE1BQUw7O0FBRUEscUJBQUtDLGNBQUwsQ0FBb0I3QixHQUFwQixFQUF5QixFQUFDZSxPQUFPZCxPQUFSLEVBQWlCVSxRQUFRQSxNQUF6QixFQUF6QjtBQUNEOzs7O0VBdkdnQyxlQUFLbUIsSTs7a0JBQW5CM0QsSyIsImZpbGUiOiJtb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgTW92aWVMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW92aWUtbGlzdCdcbiAgaW1wb3J0IHV0aWwgZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eUteW9sSdcbiAgICB9XG5cbiAgICRwcm9wcyA9IHtcIm1vdmllTGlzdFwiOntcInhtbG5zOnYtYmluZFwiOntcImZvclwiOlwidG9waWNNb3ZpZUxpc3RcIixcIml0ZW1cIjpcIm1vdmllTGlzdFwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcIm1vdmllTGlzdFwifSxcInYtYmluZDptb2l2ZUxpc3Qub25jZVwiOntcImZvclwiOlwidG9waWNNb3ZpZUxpc3RcIixcIml0ZW1cIjpcIm1vdmllTGlzdFwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcIm1vdmllTGlzdFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgbW92aWVMaXN0OiBNb3ZpZUxpc3RcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdG9waWNNb3ZpZUxpc3Q6IFtdLFxuICAgICAgaW5UaGVhdGVyczoge30sXG4gICAgICBjb21pbmdTb29uOiB7fSxcbiAgICAgIHRvcDI1MDoge30sXG4gICAgICBpc1NlYXJjaDogZmFsc2UsXG4gICAgICBzZWFyY2hNb3ZpZXM6IHt9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHt9XG5cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICBsZXQgZG91YmFuQmFzZSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmRvdWJhbkJhc2VcblxuICAgICAgbGV0IGluVGhyZWF0ZXJVcmwgPSBkb3ViYW5CYXNlICsgJy92Mi9tb3ZpZS9pbl90aGVhdGVycycgKyAnP3N0YXJ0PTAmY291bnQ9MydcbiAgICAgIGxldCBjb21pblNvb25VcmwgPSBkb3ViYW5CYXNlICsgJy92Mi9tb3ZpZS9jb21pbmdfc29vbicgKyAnP3N0YXJ0PTAmY291bnQ9MydcbiAgICAgIGxldCB0b3AyNTBVcmwgPSBkb3ViYW5CYXNlICsgJy92Mi9tb3ZpZS90b3AyNTAnICsgJz9zdGFydD0wJmNvdW50PTMnXG5cbiAgICAgIGxldCBpblRocmVhdGVyID0gd2VweS5nZXRTdG9yYWdlU3luYygnaW5UaHJlYXRlcicpXG4gICAgICBsZXQgY29taW5Tb29uID0gd2VweS5nZXRTdG9yYWdlU3luYygnY29taW5Tb29uJylcbiAgICAgIGxldCB0b3AyNTAgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd0b3AyNTAnKVxuXG4gICAgICBpZiAoaW5UaHJlYXRlciA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5nZXRNb3ZpZUxpc3REYXRhKGluVGhyZWF0ZXJVcmwsICdpblRocmVhdGVyJywgJ+ato+WcqOeDreaYoCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvcGljTW92aWVMaXN0LnB1c2goaW5UaHJlYXRlcilcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbWluU29vbiA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5nZXRNb3ZpZUxpc3REYXRhKGNvbWluU29vblVybCwgJ2NvbWluU29vbicsICfljbPlsIbkuIrmmKAnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b3BpY01vdmllTGlzdC5wdXNoKGNvbWluU29vbilcbiAgICAgIH1cblxuICAgICAgaWYgKHRvcDI1MCA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5nZXRNb3ZpZUxpc3REYXRhKHRvcDI1MFVybCwgJ3RvcDI1MCcsICdUb3AyNTAnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b3BpY01vdmllTGlzdC5wdXNoKHRvcDI1MClcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2codGhpcy50b3BpY01vdmllTGlzdClcbiAgICB9XG5cbiAgICBnZXRNb3ZpZUxpc3REYXRhKHVybCwga2V5LCBteVRpdGxlKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdqc29uJ1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ+ivt+axguaIkOWKnycpXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgIHRoYXQucHJvY2Vzc0RvdWJhbkRhdGEocmVzLmRhdGEsIGtleSwgbXlUaXRsZSlcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfor7fmsYLlpLHotKUnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHByb2Nlc3NEb3ViYW5EYXRhKG1vdmllRG91YmFuLCBrZXksIG15VGl0bGUpIHtcbiAgICAgIGxldCBtb3ZpZXMgPSBbXVxuXG4gICAgICBmb3IgKGxldCBpbmRleCBpbiBtb3ZpZURvdWJhbi5zdWJqZWN0cykge1xuICAgICAgICBsZXQgc3ViamVjdCA9IG1vdmllRG91YmFuLnN1YmplY3RzW2luZGV4XVxuXG4gICAgICAgIGxldCB0aXRsZSA9IHN1YmplY3QudGl0bGVcbiAgICAgICAgaWYgKHRpdGxlLmxlbmd0aCA+IDYpIHtcbiAgICAgICAgICB0aXRsZSA9IHRpdGxlLnN1YnN0cmluZygwLCA2KSArICcuLi4nXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGVtcCA9IHtcbiAgICAgICAgICBzdGFyczogdXRpbC5jb252ZXJ0VG9TdGFyc0FycmF5KHN1YmplY3QucmF0aW5nLnN0YXJzKSxcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgYXZlcmFnZTogc3ViamVjdC5yYXRpbmcuYXZlcmFnZSxcbiAgICAgICAgICBjb252ZXJhZ2VVcmw6IHN1YmplY3QuaW1hZ2VzLmxhcmdlLFxuICAgICAgICAgIG1vdmllSWQ6IHN1YmplY3QuaWRcbiAgICAgICAgfVxuXG4gICAgICAgIG1vdmllcy5wdXNoKHRlbXApXG4gICAgICB9XG4gICAgICB0aGlzLnRvcGljTW92aWVMaXN0LnB1c2goe1xuICAgICAgICB0aXRsZTogbXlUaXRsZSxcbiAgICAgICAgbW92aWVzOiBtb3ZpZXNcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuJGFwcGx5KClcblxuICAgICAgd2VweS5zZXRTdG9yYWdlU3luYyhrZXksIHt0aXRsZTogbXlUaXRsZSwgbW92aWVzOiBtb3ZpZXN9KVxuICAgIH1cbiAgfVxuIl19