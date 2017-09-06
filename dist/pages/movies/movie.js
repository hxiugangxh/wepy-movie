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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Movie.__proto__ || Object.getPrototypeOf(Movie)).call.apply(_ref, [this].concat(args))), _this), _this.$props = { "movieList": { "xmlns:v-bind": "", "v-bind:moiveList.once": "top250" } }, _this.$events = {}, _this.components = {
      movieList: _movieList2.default
    }, _this.data = {
      inTheaters: {},
      comingSoon: {},
      top250: {},
      searchResult: {},
      containerShow: true,
      searchPanelShow: false,
      movie: {}
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Movie, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var inTheatersUrl, comingSoonUrl, top250Url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                inTheatersUrl = this.$parent.globalData.doubanBase + '/v2/movie/in_theaters' + '?start=0&count=3';
                comingSoonUrl = this.$parent.globalData.doubanBase + '/v2/movie/coming_soon' + '?start=0&count=3';
                top250Url = this.$parent.globalData.doubanBase + '/v2/movie/top250' + '?start=0&count=3';


                if (_wepy2.default.getStorageSync('inTheaters') !== '') {
                  this.inTheaters = _wepy2.default.getStorageSync('inTheaters');
                } else {
                  this.getMovieListData(inTheatersUrl, 'inTheaters', '正在热映');
                }

                if (_wepy2.default.getStorageSync('comingSoon') !== '') {
                  this.comingSoon = _wepy2.default.getStorageSync('comingSoon');
                } else {
                  this.getMovieListData(comingSoonUrl, 'comingSoon', '即将上映');
                }

                if (_wepy2.default.getStorageSync('top250') !== '') {
                  this.top250 = _wepy2.default.getStorageSync('top250');
                } else {
                  this.getMovieListData(top250Url, 'top250', '豆瓣Top250');
                }

              case 6:
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
    value: function getMovieListData(url, settedKey, categoryTitle) {
      var that = this;
      _wepy2.default.request({
        url: url,
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'Content-Type': 'json'
        },
        success: function success(res) {
          that.processDoubanData(res.data, settedKey, categoryTitle);
        },
        fail: function fail(error) {
          console.log(error);
        }
      });
    }
  }, {
    key: 'processDoubanData',
    value: function processDoubanData(moviesDouban, settedKey, categoryTitle) {
      var movies = [];
      for (var idx in moviesDouban.subjects) {
        var subject = moviesDouban.subjects[idx];
        var title = subject.title;
        if (title.length >= 6) {
          title = title.substring(0, 6) + '...';
        }
        // [1,1,1,1,1] [1,1,1,0,0]
        var temp = {
          stars: _util2.default.convertToStarsArray(subject.rating.stars),
          title: title,
          average: subject.rating.average,
          coverageUrl: subject.images.large,
          movieId: subject.id
        };
        movies.push(temp);
      }
      var readyData = {};
      readyData[settedKey] = {
        categoryTitle: categoryTitle,
        movies: movies
      };

      this.setData(readyData);

      _wepy2.default.setStorageSync(settedKey, readyData[settedKey]);
    }
  }]);

  return Movie;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Movie , 'pages/movies/movie'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLmpzIl0sIm5hbWVzIjpbIk1vdmllIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJtb3ZpZUxpc3QiLCJkYXRhIiwiaW5UaGVhdGVycyIsImNvbWluZ1Nvb24iLCJ0b3AyNTAiLCJzZWFyY2hSZXN1bHQiLCJjb250YWluZXJTaG93Iiwic2VhcmNoUGFuZWxTaG93IiwibW92aWUiLCJtZXRob2RzIiwiaW5UaGVhdGVyc1VybCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiZG91YmFuQmFzZSIsImNvbWluZ1Nvb25VcmwiLCJ0b3AyNTBVcmwiLCJnZXRTdG9yYWdlU3luYyIsImdldE1vdmllTGlzdERhdGEiLCJ1cmwiLCJzZXR0ZWRLZXkiLCJjYXRlZ29yeVRpdGxlIiwidGhhdCIsInJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwicHJvY2Vzc0RvdWJhbkRhdGEiLCJmYWlsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibW92aWVzRG91YmFuIiwibW92aWVzIiwiaWR4Iiwic3ViamVjdHMiLCJzdWJqZWN0IiwidGl0bGUiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJ0ZW1wIiwic3RhcnMiLCJjb252ZXJ0VG9TdGFyc0FycmF5IiwicmF0aW5nIiwiYXZlcmFnZSIsImNvdmVyYWdlVXJsIiwiaW1hZ2VzIiwibGFyZ2UiLCJtb3ZpZUlkIiwiaWQiLCJwdXNoIiwicmVhZHlEYXRhIiwic2V0RGF0YSIsInNldFN0b3JhZ2VTeW5jIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ3BCQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIseUJBQXdCLFFBQTNDLEVBQWIsRSxRQUNaQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLEksR0FBTztBQUNMQyxr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LElBQXVCO0FBQ3JCQyx1QkFBZUEsYUFETTtBQUVyQmEsZ0JBQVFBO0FBRmEsT0FBdkI7O0FBS0EsV0FBS21CLE9BQUwsQ0FBYUQsU0FBYjs7QUFFQSxxQkFBS0UsY0FBTCxDQUFvQmxDLFNBQXBCLEVBQStCZ0MsVUFBVWhDLFNBQVYsQ0FBL0I7QUFDRDs7OztFQTFGZ0MsZUFBS21DLEk7O2tCQUFuQjFELEsiLCJmaWxlIjoibW92aWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vdmllLWxpc3QnXG4gIGltcG9ydCB1dGlsIGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgJHByb3BzID0ge1wibW92aWVMaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDptb2l2ZUxpc3Qub25jZVwiOlwidG9wMjUwXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIG1vdmllTGlzdDogTW92aWVMaXN0XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGluVGhlYXRlcnM6IHt9LFxuICAgICAgY29taW5nU29vbjoge30sXG4gICAgICB0b3AyNTA6IHt9LFxuICAgICAgc2VhcmNoUmVzdWx0OiB7fSxcbiAgICAgIGNvbnRhaW5lclNob3c6IHRydWUsXG4gICAgICBzZWFyY2hQYW5lbFNob3c6IGZhbHNlLFxuICAgICAgbW92aWU6IHt9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHt9XG5cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICBsZXQgaW5UaGVhdGVyc1VybCA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmRvdWJhbkJhc2UgK1xuICAgICAgICAnL3YyL21vdmllL2luX3RoZWF0ZXJzJyArICc/c3RhcnQ9MCZjb3VudD0zJ1xuICAgICAgbGV0IGNvbWluZ1Nvb25VcmwgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5kb3ViYW5CYXNlICtcbiAgICAgICAgJy92Mi9tb3ZpZS9jb21pbmdfc29vbicgKyAnP3N0YXJ0PTAmY291bnQ9MydcbiAgICAgIGxldCB0b3AyNTBVcmwgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5kb3ViYW5CYXNlICtcbiAgICAgICAgJy92Mi9tb3ZpZS90b3AyNTAnICsgJz9zdGFydD0wJmNvdW50PTMnXG5cbiAgICAgIGlmICh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdpblRoZWF0ZXJzJykgIT09ICcnKSB7XG4gICAgICAgIHRoaXMuaW5UaGVhdGVycyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2luVGhlYXRlcnMnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRNb3ZpZUxpc3REYXRhKGluVGhlYXRlcnNVcmwsICdpblRoZWF0ZXJzJywgJ+ato+WcqOeDreaYoCcpXG4gICAgICB9XG5cbiAgICAgIGlmICh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdjb21pbmdTb29uJykgIT09ICcnKSB7XG4gICAgICAgIHRoaXMuY29taW5nU29vbiA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2NvbWluZ1Nvb24nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRNb3ZpZUxpc3REYXRhKGNvbWluZ1Nvb25VcmwsICdjb21pbmdTb29uJywgJ+WNs+WwhuS4iuaYoCcpXG4gICAgICB9XG5cbiAgICAgIGlmICh3ZXB5LmdldFN0b3JhZ2VTeW5jKCd0b3AyNTAnKSAhPT0gJycpIHtcbiAgICAgICAgdGhpcy50b3AyNTAgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd0b3AyNTAnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRNb3ZpZUxpc3REYXRhKHRvcDI1MFVybCwgJ3RvcDI1MCcsICfosYbnk6NUb3AyNTAnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGdldE1vdmllTGlzdERhdGEodXJsLCBzZXR0ZWRLZXksIGNhdGVnb3J5VGl0bGUpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpc1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsIC8vIE9QVElPTlMsIEdFVCwgSEVBRCwgUE9TVCwgUFVULCBERUxFVEUsIFRSQUNFLCBDT05ORUNUXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIHRoYXQucHJvY2Vzc0RvdWJhbkRhdGEocmVzLmRhdGEsIHNldHRlZEtleSwgY2F0ZWdvcnlUaXRsZSlcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJvY2Vzc0RvdWJhbkRhdGEobW92aWVzRG91YmFuLCBzZXR0ZWRLZXksIGNhdGVnb3J5VGl0bGUpIHtcbiAgICAgIGxldCBtb3ZpZXMgPSBbXVxuICAgICAgZm9yIChsZXQgaWR4IGluIG1vdmllc0RvdWJhbi5zdWJqZWN0cykge1xuICAgICAgICBsZXQgc3ViamVjdCA9IG1vdmllc0RvdWJhbi5zdWJqZWN0c1tpZHhdXG4gICAgICAgIGxldCB0aXRsZSA9IHN1YmplY3QudGl0bGVcbiAgICAgICAgaWYgKHRpdGxlLmxlbmd0aCA+PSA2KSB7XG4gICAgICAgICAgdGl0bGUgPSB0aXRsZS5zdWJzdHJpbmcoMCwgNikgKyAnLi4uJ1xuICAgICAgICB9XG4gICAgICAgIC8vIFsxLDEsMSwxLDFdIFsxLDEsMSwwLDBdXG4gICAgICAgIGxldCB0ZW1wID0ge1xuICAgICAgICAgIHN0YXJzOiB1dGlsLmNvbnZlcnRUb1N0YXJzQXJyYXkoc3ViamVjdC5yYXRpbmcuc3RhcnMpLFxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBhdmVyYWdlOiBzdWJqZWN0LnJhdGluZy5hdmVyYWdlLFxuICAgICAgICAgIGNvdmVyYWdlVXJsOiBzdWJqZWN0LmltYWdlcy5sYXJnZSxcbiAgICAgICAgICBtb3ZpZUlkOiBzdWJqZWN0LmlkXG4gICAgICAgIH1cbiAgICAgICAgbW92aWVzLnB1c2godGVtcClcbiAgICAgIH1cbiAgICAgIGxldCByZWFkeURhdGEgPSB7fVxuICAgICAgcmVhZHlEYXRhW3NldHRlZEtleV0gPSB7XG4gICAgICAgIGNhdGVnb3J5VGl0bGU6IGNhdGVnb3J5VGl0bGUsXG4gICAgICAgIG1vdmllczogbW92aWVzXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0RGF0YShyZWFkeURhdGEpXG5cbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoc2V0dGVkS2V5LCByZWFkeURhdGFbc2V0dGVkS2V5XSlcbiAgICB9XG4gIH1cbiJdfQ==