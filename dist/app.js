'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      return new Promise(function (resolve, reject) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJib3JkZXJTdHlsZSIsInNlbGVjdGVkQ29sb3IiLCJ0YWJCYXIiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0IiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwiZ2xvYmFsRGF0YSIsImlzUGxheWluZ011c2ljIiwiYmFja2dyb3VuZE11c2ljSWQiLCJkb3ViYW5CYXNlIiwibW9yZU1vdmllc1RpdGxlIiwidXNlIiwidGVzdEFzeW5jIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYiIsInRoYXQiLCJ1c2VySW5mbyIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBOENFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUEzQ2RBLE1BMkNjLEdBM0NMO0FBQ1BDLGFBQU8sQ0FDTCxvQkFESyxFQUVMLGtCQUZLLEVBR0wsc0NBSEssRUFJTCx1Q0FKSyxFQUtMLGFBTEssQ0FEQTtBQVFQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCLE9BSmxCO0FBS05DLHFCQUFhLE9BTFA7QUFNTkMsdUJBQWU7QUFOVCxPQVJEO0FBZ0JQQyxjQUFRO0FBQ05GLHFCQUFhLE9BRFA7QUFFTkMsdUJBQWUsTUFGVDtBQUdORSxjQUFNLENBQ0o7QUFDRUMsb0JBQVUsb0JBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyxvQkFBVSwwQkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FESSxFQU9KO0FBQ0VILG9CQUFVLGtCQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsdUJBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBUEk7QUFIQTtBQWhCRCxLQTJDSztBQUFBLFVBUGRDLFVBT2MsR0FQRDtBQUNYQyxzQkFBZ0IsS0FETDtBQUVYQyx5QkFBbUIsSUFGUjtBQUdYQyxrQkFBWSx3QkFIRDtBQUlYQyx1QkFBaUI7QUFKTixLQU9DOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRlk7QUFHYjs7OzsrQkFFVTtBQUNULFdBQUtDLFNBQUw7QUFDRDs7OzBCQUVLQyxDLEVBQUc7QUFDUCxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLG1CQUFXLFlBQU07QUFDZkYsa0JBQVEsa0JBQVI7QUFDRCxTQUZELEVBRUdGLElBQUksSUFGUDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7Ozs7Ozt1QkFHb0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJDLG9COztBQUNOQyx3QkFBUUMsR0FBUixDQUFZRixJQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBR1VHLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS2pCLFVBQUwsQ0FBZ0JrQixRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtsQixVQUFMLENBQWdCa0IsUUFBdkI7QUFDRDtBQUNELHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGVBRGUsbUJBQ1BDLEdBRE8sRUFDRjtBQUNYSixlQUFLakIsVUFBTCxDQUFnQmtCLFFBQWhCLEdBQTJCRyxJQUFJSCxRQUEvQjtBQUNBRixnQkFBTUEsR0FBR0ssSUFBSUgsUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBN0UwQixlQUFLSSxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gICAgY29uZmlnID0ge1xuICAgICAgcGFnZXM6IFtcbiAgICAgICAgJ3BhZ2VzL21vdmllcy9tb3ZpZScsXG4gICAgICAgICdwYWdlcy9wb3N0cy9wb3N0JyxcbiAgICAgICAgJ3BhZ2VzL21vdmllcy9tb3JlLW1vdmllcy9tb3JlLW1vdmllcycsXG4gICAgICAgICdwYWdlcy9wb3N0cy9wb3N0cy1kZXRhaWwvcG9zdHMtZGV0YWlsJyxcbiAgICAgICAgJ3BhZ2VzL2luZGV4J1xuICAgICAgXSxcbiAgICAgIHdpbmRvdzoge1xuICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgICAgICBib3JkZXJTdHlsZTogJ3doaXRlJyxcbiAgICAgICAgc2VsZWN0ZWRDb2xvcjogJ2JsdWUnXG4gICAgICB9LFxuICAgICAgdGFiQmFyOiB7XG4gICAgICAgIGJvcmRlclN0eWxlOiAnd2hpdGUnLFxuICAgICAgICBzZWxlY3RlZENvbG9yOiAnYmx1ZScsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL21vdmllcy9tb3ZpZScsXG4gICAgICAgICAgICB0ZXh0OiAn55S15b2xJyxcbiAgICAgICAgICAgIGljb25QYXRoOiAnL2ltYWdlcy90YWIvZGlhbnlpbmcucG5nJyxcbiAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcvaW1hZ2VzL3RhYi9kaWFueWluZ19obC5wbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3Bvc3RzL3Bvc3QnLFxuICAgICAgICAgICAgdGV4dDogJ+mYheivuycsXG4gICAgICAgICAgICBpY29uUGF0aDogJy9pbWFnZXMvdGFiL3l1ZWR1LnBuZycsXG4gICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnL2ltYWdlcy90YWIveXVlZHVfaGwucG5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cblxuICAgIGdsb2JhbERhdGEgPSB7XG4gICAgICBpc1BsYXlpbmdNdXNpYzogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kTXVzaWNJZDogbnVsbCxcbiAgICAgIGRvdWJhbkJhc2U6ICdodHRwczovL2FwaS5kb3ViYW4uY29tJyxcbiAgICAgIG1vcmVNb3ZpZXNUaXRsZTogJydcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKClcbiAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICB9XG5cbiAgICBvbkxhdW5jaCgpIHtcbiAgICAgIHRoaXMudGVzdEFzeW5jKClcbiAgICB9XG5cbiAgICBzbGVlcChzKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcbiAgICAgICAgfSwgcyAqIDEwMDApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIHRlc3RBc3luYygpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH1cblxuICAgIGdldFVzZXJJbmZvKGNiKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgICB9XG4gICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=