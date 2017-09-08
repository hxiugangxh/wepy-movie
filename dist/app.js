'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _promisePolyfill = require('./npm/promise-polyfill/promise.js');

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _promisePolyfill2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _promisePolyfill2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/movies/movie', 'pages/posts/post', 'pages/movies/more-movies/more-movies', 'pages/posts/posts-detail/posts-detail', 'pages/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
        borderStyle: 'white',
        selectedColor: 'blue'
      },
      tabBar: {
        borderStyle: 'white',
        selectedColor: 'blue',
        list: [{
          pagePath: 'pages/movies/movie',
          text: '电影',
          iconPath: '/images/tab/dianying.png',
          selectedIconPath: '/images/tab/dianying_hl.png'
        }, {
          pagePath: 'pages/posts/post',
          text: '阅读',
          iconPath: '/images/tab/yuedu.png',
          selectedIconPath: '/images/tab/yuedu_hl.png'
        }]
      }
    };
    _this.globalData = {
      isPlayingMusic: false,
      backgroundMusicId: null,
      doubanBase: 'https://api.douban.com',
      moreMoviesTitle: ''
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new _promisePolyfill2.default(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJib3JkZXJTdHlsZSIsInNlbGVjdGVkQ29sb3IiLCJ0YWJCYXIiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0IiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwiZ2xvYmFsRGF0YSIsImlzUGxheWluZ011c2ljIiwiYmFja2dyb3VuZE11c2ljSWQiLCJkb3ViYW5CYXNlIiwibW9yZU1vdmllc1RpdGxlIiwidXNlIiwidGVzdEFzeW5jIiwicyIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNiIiwidGhhdCIsInVzZXJJbmZvIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQStDRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBNUNkQSxNQTRDYyxHQTVDTDtBQUNQQyxhQUFPLENBRUwsb0JBRkssRUFHTCxrQkFISyxFQUlMLHNDQUpLLEVBS0wsdUNBTEssRUFNTCxhQU5LLENBREE7QUFTUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QixPQUpsQjtBQUtOQyxxQkFBYSxPQUxQO0FBTU5DLHVCQUFlO0FBTlQsT0FURDtBQWlCUEMsY0FBUTtBQUNORixxQkFBYSxPQURQO0FBRU5DLHVCQUFlLE1BRlQ7QUFHTkUsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLG9CQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsMEJBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBREksRUFPSjtBQUNFSCxvQkFBVSxrQkFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLHVCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQVBJO0FBSEE7QUFqQkQsS0E0Q0s7QUFBQSxVQVBkQyxVQU9jLEdBUEQ7QUFDWEMsc0JBQWdCLEtBREw7QUFFWEMseUJBQW1CLElBRlI7QUFHWEMsa0JBQVksd0JBSEQ7QUFJWEMsdUJBQWlCO0FBSk4sS0FPQzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSFk7QUFJYjs7OzsrQkFFVTtBQUNULFdBQUtDLFNBQUw7QUFDRDs7OzBCQUVLQyxDLEVBQUc7QUFDUCxhQUFPLDhCQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0QsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFLSSxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0I7O0FBQ05DLHdCQUFRQyxHQUFSLENBQVlGLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHVUcsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLaEIsVUFBTCxDQUFnQmlCLFFBQXBCLEVBQThCO0FBQzVCLGVBQU8sS0FBS2pCLFVBQUwsQ0FBZ0JpQixRQUF2QjtBQUNEO0FBQ0QscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDUEMsR0FETyxFQUNGO0FBQ1hKLGVBQUtoQixVQUFMLENBQWdCaUIsUUFBaEIsR0FBMkJHLElBQUlILFFBQS9CO0FBQ0FGLGdCQUFNQSxHQUFHSyxJQUFJSCxRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUEvRTBCLGVBQUtJLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcbiAgaW1wb3J0IFByb21pc2UgZnJvbSAncHJvbWlzZS1wb2x5ZmlsbCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBwYWdlczogW1xuXG4gICAgICAgICdwYWdlcy9tb3ZpZXMvbW92aWUnLFxuICAgICAgICAncGFnZXMvcG9zdHMvcG9zdCcsXG4gICAgICAgICdwYWdlcy9tb3ZpZXMvbW9yZS1tb3ZpZXMvbW9yZS1tb3ZpZXMnLFxuICAgICAgICAncGFnZXMvcG9zdHMvcG9zdHMtZGV0YWlsL3Bvc3RzLWRldGFpbCcsXG4gICAgICAgICdwYWdlcy9pbmRleCdcbiAgICAgIF0sXG4gICAgICB3aW5kb3c6IHtcbiAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICAgICAgYm9yZGVyU3R5bGU6ICd3aGl0ZScsXG4gICAgICAgIHNlbGVjdGVkQ29sb3I6ICdibHVlJ1xuICAgICAgfSxcbiAgICAgIHRhYkJhcjoge1xuICAgICAgICBib3JkZXJTdHlsZTogJ3doaXRlJyxcbiAgICAgICAgc2VsZWN0ZWRDb2xvcjogJ2JsdWUnLFxuICAgICAgICBsaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9tb3ZpZXMvbW92aWUnLFxuICAgICAgICAgICAgdGV4dDogJ+eUteW9sScsXG4gICAgICAgICAgICBpY29uUGF0aDogJy9pbWFnZXMvdGFiL2RpYW55aW5nLnBuZycsXG4gICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnL2ltYWdlcy90YWIvZGlhbnlpbmdfaGwucG5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9wb3N0cy9wb3N0JyxcbiAgICAgICAgICAgIHRleHQ6ICfpmIXor7snLFxuICAgICAgICAgICAgaWNvblBhdGg6ICcvaW1hZ2VzL3RhYi95dWVkdS5wbmcnLFxuICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy9pbWFnZXMvdGFiL3l1ZWR1X2hsLnBuZydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBnbG9iYWxEYXRhID0ge1xuICAgICAgaXNQbGF5aW5nTXVzaWM6IGZhbHNlLFxuICAgICAgYmFja2dyb3VuZE11c2ljSWQ6IG51bGwsXG4gICAgICBkb3ViYW5CYXNlOiAnaHR0cHM6Ly9hcGkuZG91YmFuLmNvbScsXG4gICAgICBtb3JlTW92aWVzVGl0bGU6ICcnXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpXG4gICAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gICAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcbiAgICB9XG5cbiAgICBvbkxhdW5jaCgpIHtcbiAgICAgIHRoaXMudGVzdEFzeW5jKClcbiAgICB9XG5cbiAgICBzbGVlcChzKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcbiAgICAgICAgfSwgcyAqIDEwMDApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIHRlc3RBc3luYygpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH1cblxuICAgIGdldFVzZXJJbmZvKGNiKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgICB9XG4gICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=