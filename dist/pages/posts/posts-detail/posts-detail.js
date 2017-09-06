'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _postsData = require('./../../../data/posts-data.js');

var _postsData2 = _interopRequireDefault(_postsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostsDetail = function (_wepy$page) {
  _inherits(PostsDetail, _wepy$page);

  function PostsDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PostsDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostsDetail.__proto__ || Object.getPrototypeOf(PostsDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '电影详情'
    }, _this.components = {}, _this.data = {
      isPlayingMusic: true,
      collected: false,
      currentPostId: null,
      postData: {}
    }, _this.methods = {
      onMusicTap: function onMusicTap() {
        this.dealBackgroundMusic();
      },
      onColletionTap: function onColletionTap() {
        var id = this.currentPostId;

        var postsCollected = _wepy2.default.getStorageSync('posts_collected');
        var postCollected = postsCollected[id];
        postCollected = !postCollected;
        postsCollected[id] = postCollected;

        this.collected = postCollected;

        console.log(this.collected);

        this.$apply();

        _wepy2.default.setStorageSync('posts_collected', postsCollected);
      },
      onShareTap: function onShareTap() {
        var itemList = ['分享给微信好友', '分享到朋友圈', '分享到QQ', '分享到微博'];
        _wepy2.default.showActionSheet({
          itemList: itemList,
          itemColor: '#405f80',
          success: function success(res) {
            // res.cancel 用户是不是点击了取消按钮
            // res.tapIndex 数组元素的序号，从0开始
            _wepy2.default.showModal({
              title: '用户' + (itemList[res.tapIndex] ? itemList[res.tapIndex] : '取消'),
              content: '用户是否取消？' + res.cancel + '现在无法实现分享功能，什么时候能支持呢'
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PostsDetail, [{
    key: 'dealBackgroundMusic',
    value: function dealBackgroundMusic() {
      var isPlayingMusic = this.isPlayingMusic;
      isPlayingMusic = !isPlayingMusic;
      this.isPlayingMusic = isPlayingMusic;

      var postData = this.postData;
      if (isPlayingMusic) {
        _wepy2.default.playBackgroundAudio({
          dataUrl: postData.music.url,
          title: postData.music.title,
          coverImgUrl: postData.music.coverImg
        });

        this.$parent.globalData.backgroundMusicId = this.postData.postId;
        this.$parent.globalData.isPlayingMusic = true;
      } else {
        _wepy2.default.pauseBackgroundAudio();
        this.$parent.globalData.backgroundMusicId = null;
        this.$parent.globalData.isPlayingMusic = false;
      }
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        var _this2 = this;

        var postId, postsCollected, postCollected, _postsCollected, postData;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                postId = params.id;

                this.currentPostId = postId;
                this.postData = _postsData2.default.postList[postId];

                postsCollected = _wepy2.default.getStorageSync('posts_collected');

                if (postsCollected) {
                  postCollected = postsCollected[postId];

                  this.collected = postCollected;
                } else {
                  _postsCollected = {};

                  _postsCollected[postId] = false;
                  _wepy2.default.setStorageSync('posts_collected', _postsCollected);
                }

                postData = this.postData;


                _wepy2.default.playBackgroundAudio({
                  dataUrl: postData.music.url,
                  title: postData.music.title,
                  coverImgUrl: postData.music.coverImg
                });

                _wepy2.default.onBackgroundAudioPlay(function () {
                  _this2.isPlayingMusic = true;
                  _this2.$parent.globalData.isPlayingMusic = true;
                  _this2.$apply();
                });

                _wepy2.default.onBackgroundAudioPause(function () {
                  _this2.isPlayingMusic = false;
                  _this2.$parent.globalData.isPlayingMusic = false;
                  _this2.$apply();
                });

              case 9:
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
  }]);

  return PostsDetail;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(PostsDetail , 'pages/posts/posts-detail/posts-detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzLWRldGFpbC5qcyJdLCJuYW1lcyI6WyJQb3N0c0RldGFpbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImlzUGxheWluZ011c2ljIiwiY29sbGVjdGVkIiwiY3VycmVudFBvc3RJZCIsInBvc3REYXRhIiwibWV0aG9kcyIsIm9uTXVzaWNUYXAiLCJkZWFsQmFja2dyb3VuZE11c2ljIiwib25Db2xsZXRpb25UYXAiLCJpZCIsInBvc3RzQ29sbGVjdGVkIiwiZ2V0U3RvcmFnZVN5bmMiLCJwb3N0Q29sbGVjdGVkIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsInNldFN0b3JhZ2VTeW5jIiwib25TaGFyZVRhcCIsIml0ZW1MaXN0Iiwic2hvd0FjdGlvblNoZWV0IiwiaXRlbUNvbG9yIiwic3VjY2VzcyIsInJlcyIsInNob3dNb2RhbCIsInRpdGxlIiwidGFwSW5kZXgiLCJjb250ZW50IiwiY2FuY2VsIiwicGxheUJhY2tncm91bmRBdWRpbyIsImRhdGFVcmwiLCJtdXNpYyIsInVybCIsImNvdmVySW1nVXJsIiwiY292ZXJJbWciLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImJhY2tncm91bmRNdXNpY0lkIiwicG9zdElkIiwicGF1c2VCYWNrZ3JvdW5kQXVkaW8iLCJwYXJhbXMiLCJwb3N0TGlzdCIsIm9uQmFja2dyb3VuZEF1ZGlvUGxheSIsIm9uQmFja2dyb3VuZEF1ZGlvUGF1c2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLHNCQUFnQixJQURYO0FBRUxDLGlCQUFXLEtBRk47QUFHTEMscUJBQWUsSUFIVjtBQUlMQyxnQkFBVTtBQUpMLEssUUFPUEMsTyxHQUFVO0FBQ1JD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QUFTMEIsS0FBVCxDQUFlTixLQUZDO0FBR3ZCUSwrQkFBYTVCLFNBQVMwQixLQUFULENBQWVHO0FBSEwsaUJBQXpCOztBQU1BLCtCQUFLUSxxQkFBTCxDQUEyQixZQUFNO0FBQy9CLHlCQUFLeEMsY0FBTCxHQUFzQixJQUF0QjtBQUNBLHlCQUFLaUMsT0FBTCxDQUFhQyxVQUFiLENBQXdCbEMsY0FBeEIsR0FBeUMsSUFBekM7QUFDQSx5QkFBS2MsTUFBTDtBQUNELGlCQUpEOztBQU1BLCtCQUFLMkIsc0JBQUwsQ0FBNEIsWUFBTTtBQUNoQyx5QkFBS3pDLGNBQUwsR0FBc0IsS0FBdEI7QUFDQSx5QkFBS2lDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QmxDLGNBQXhCLEdBQXlDLEtBQXpDO0FBQ0EseUJBQUtjLE1BQUw7QUFDRCxpQkFKRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTNHcUMsZUFBSzRCLEk7O2tCQUF6Qi9DLFciLCJmaWxlIjoicG9zdHMtZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBwb3N0c0RhdGEgZnJvbSAnLi4vLi4vLi4vZGF0YS9wb3N0cy1kYXRhJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3RzRGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55S15b2x6K+m5oOFJ1xuICAgIH1cblxuICAgIGNvbXBvbmVudHMgPSB7fVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGlzUGxheWluZ011c2ljOiB0cnVlLFxuICAgICAgY29sbGVjdGVkOiBmYWxzZSxcbiAgICAgIGN1cnJlbnRQb3N0SWQ6IG51bGwsXG4gICAgICBwb3N0RGF0YToge31cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgb25NdXNpY1RhcDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlYWxCYWNrZ3JvdW5kTXVzaWMoKVxuICAgICAgfSxcbiAgICAgIG9uQ29sbGV0aW9uVGFwKCkge1xuICAgICAgICBsZXQgaWQgPSB0aGlzLmN1cnJlbnRQb3N0SWRcblxuICAgICAgICBsZXQgcG9zdHNDb2xsZWN0ZWQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdwb3N0c19jb2xsZWN0ZWQnKVxuICAgICAgICBsZXQgcG9zdENvbGxlY3RlZCA9IHBvc3RzQ29sbGVjdGVkW2lkXVxuICAgICAgICBwb3N0Q29sbGVjdGVkID0gIXBvc3RDb2xsZWN0ZWRcbiAgICAgICAgcG9zdHNDb2xsZWN0ZWRbaWRdID0gcG9zdENvbGxlY3RlZFxuXG4gICAgICAgIHRoaXMuY29sbGVjdGVkID0gcG9zdENvbGxlY3RlZFxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29sbGVjdGVkKVxuXG4gICAgICAgIHRoaXMuJGFwcGx5KClcblxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdwb3N0c19jb2xsZWN0ZWQnLCBwb3N0c0NvbGxlY3RlZClcbiAgICAgIH0sXG4gICAgICBvblNoYXJlVGFwKCkge1xuICAgICAgICBsZXQgaXRlbUxpc3QgPSBbXG4gICAgICAgICAgJ+WIhuS6q+e7meW+ruS/oeWlveWPiycsXG4gICAgICAgICAgJ+WIhuS6q+WIsOaci+WPi+WciCcsXG4gICAgICAgICAgJ+WIhuS6q+WIsFFRJyxcbiAgICAgICAgICAn5YiG5Lqr5Yiw5b6u5Y2aJ1xuICAgICAgICBdXG4gICAgICAgIHdlcHkuc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICBpdGVtTGlzdDogaXRlbUxpc3QsXG4gICAgICAgICAgaXRlbUNvbG9yOiAnIzQwNWY4MCcsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgLy8gcmVzLmNhbmNlbCDnlKjmiLfmmK/kuI3mmK/ngrnlh7vkuoblj5bmtojmjInpkq5cbiAgICAgICAgICAgIC8vIHJlcy50YXBJbmRleCDmlbDnu4TlhYPntKDnmoTluo/lj7fvvIzku44w5byA5aeLXG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn55So5oi3JyArICgoaXRlbUxpc3RbcmVzLnRhcEluZGV4XSkgPyBpdGVtTGlzdFtyZXMudGFwSW5kZXhdIDogJ+WPlua2iCcpLFxuICAgICAgICAgICAgICBjb250ZW50OiAn55So5oi35piv5ZCm5Y+W5raI77yfJyArIHJlcy5jYW5jZWwgKyAn546w5Zyo5peg5rOV5a6e546w5YiG5Lqr5Yqf6IO977yM5LuA5LmI5pe25YCZ6IO95pSv5oyB5ZGiJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVhbEJhY2tncm91bmRNdXNpYygpIHtcbiAgICAgIGxldCBpc1BsYXlpbmdNdXNpYyA9IHRoaXMuaXNQbGF5aW5nTXVzaWNcbiAgICAgIGlzUGxheWluZ011c2ljID0gIWlzUGxheWluZ011c2ljXG4gICAgICB0aGlzLmlzUGxheWluZ011c2ljID0gaXNQbGF5aW5nTXVzaWNcblxuICAgICAgbGV0IHBvc3REYXRhID0gdGhpcy5wb3N0RGF0YVxuICAgICAgaWYgKGlzUGxheWluZ011c2ljKSB7XG4gICAgICAgIHdlcHkucGxheUJhY2tncm91bmRBdWRpbyh7XG4gICAgICAgICAgZGF0YVVybDogcG9zdERhdGEubXVzaWMudXJsLFxuICAgICAgICAgIHRpdGxlOiBwb3N0RGF0YS5tdXNpYy50aXRsZSxcbiAgICAgICAgICBjb3ZlckltZ1VybDogcG9zdERhdGEubXVzaWMuY292ZXJJbWdcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5iYWNrZ3JvdW5kTXVzaWNJZCA9IHRoaXMucG9zdERhdGEucG9zdElkXG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmlzUGxheWluZ011c2ljID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5wYXVzZUJhY2tncm91bmRBdWRpbygpXG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmJhY2tncm91bmRNdXNpY0lkID0gbnVsbFxuICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5pc1BsYXlpbmdNdXNpYyA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgb25Mb2FkKHBhcmFtcykge1xuICAgICAgbGV0IHBvc3RJZCA9IHBhcmFtcy5pZFxuICAgICAgdGhpcy5jdXJyZW50UG9zdElkID0gcG9zdElkXG4gICAgICB0aGlzLnBvc3REYXRhID0gcG9zdHNEYXRhLnBvc3RMaXN0W3Bvc3RJZF1cblxuICAgICAgbGV0IHBvc3RzQ29sbGVjdGVkID0gd2VweS5nZXRTdG9yYWdlU3luYygncG9zdHNfY29sbGVjdGVkJylcbiAgICAgIGlmIChwb3N0c0NvbGxlY3RlZCkge1xuICAgICAgICBsZXQgcG9zdENvbGxlY3RlZCA9IHBvc3RzQ29sbGVjdGVkW3Bvc3RJZF1cbiAgICAgICAgdGhpcy5jb2xsZWN0ZWQgPSBwb3N0Q29sbGVjdGVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcG9zdHNDb2xsZWN0ZWQgPSB7fVxuICAgICAgICBwb3N0c0NvbGxlY3RlZFtwb3N0SWRdID0gZmFsc2VcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygncG9zdHNfY29sbGVjdGVkJywgcG9zdHNDb2xsZWN0ZWQpXG4gICAgICB9XG5cbiAgICAgIGxldCBwb3N0RGF0YSA9IHRoaXMucG9zdERhdGFcblxuICAgICAgd2VweS5wbGF5QmFja2dyb3VuZEF1ZGlvKHtcbiAgICAgICAgZGF0YVVybDogcG9zdERhdGEubXVzaWMudXJsLFxuICAgICAgICB0aXRsZTogcG9zdERhdGEubXVzaWMudGl0bGUsXG4gICAgICAgIGNvdmVySW1nVXJsOiBwb3N0RGF0YS5tdXNpYy5jb3ZlckltZ1xuICAgICAgfSlcblxuICAgICAgd2VweS5vbkJhY2tncm91bmRBdWRpb1BsYXkoKCkgPT4ge1xuICAgICAgICB0aGlzLmlzUGxheWluZ011c2ljID0gdHJ1ZVxuICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5pc1BsYXlpbmdNdXNpYyA9IHRydWVcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSlcblxuICAgICAgd2VweS5vbkJhY2tncm91bmRBdWRpb1BhdXNlKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmdNdXNpYyA9IGZhbHNlXG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmlzUGxheWluZ011c2ljID0gZmFsc2VcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==