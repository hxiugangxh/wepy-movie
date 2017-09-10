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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzLWRldGFpbC5qcyJdLCJuYW1lcyI6WyJQb3N0c0RldGFpbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImlzUGxheWluZ011c2ljIiwiY29sbGVjdGVkIiwiY3VycmVudFBvc3RJZCIsInBvc3REYXRhIiwibWV0aG9kcyIsIm9uTXVzaWNUYXAiLCJkZWFsQmFja2dyb3VuZE11c2ljIiwib25Db2xsZXRpb25UYXAiLCJpZCIsInBvc3RzQ29sbGVjdGVkIiwiZ2V0U3RvcmFnZVN5bmMiLCJwb3N0Q29sbGVjdGVkIiwiJGFwcGx5Iiwic2V0U3RvcmFnZVN5bmMiLCJvblNoYXJlVGFwIiwiaXRlbUxpc3QiLCJzaG93QWN0aW9uU2hlZXQiLCJpdGVtQ29sb3IiLCJzdWNjZXNzIiwicmVzIiwic2hvd01vZGFsIiwidGl0bGUiLCJ0YXBJbmRleCIsImNvbnRlbnQiLCJjYW5jZWwiLCJwbGF5QmFja2dyb3VuZEF1ZGlvIiwiZGF0YVVybCIsIm11c2ljIiwidXJsIiwiY292ZXJJbWdVcmwiLCJjb3ZlckltZyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiYmFja2dyb3VuZE11c2ljSWQiLCJwb3N0SWQiLCJwYXVzZUJhY2tncm91bmRBdWRpbyIsInBhcmFtcyIsInBvc3RMaXN0Iiwib25CYWNrZ3JvdW5kQXVkaW9QbGF5Iiwib25CYWNrZ3JvdW5kQXVkaW9QYXVzZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsc0JBQWdCLElBRFg7QUFFTEMsaUJBQVcsS0FGTjtBQUdMQyxxQkFBZSxJQUhWO0FBSUxDLGdCQUFVO0FBSkwsSyxRQU9QQyxPLEdBQVU7QUFDUkMsa0JBQVksc0JBQVk7QUFD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ZUc7QUFITCxpQkFBekI7O0FBTUEsK0JBQUtRLHFCQUFMLENBQTJCLFlBQU07QUFDL0IseUJBQUt0QyxjQUFMLEdBQXNCLElBQXRCO0FBQ0EseUJBQUsrQixPQUFMLENBQWFDLFVBQWIsQ0FBd0JoQyxjQUF4QixHQUF5QyxJQUF6QztBQUNBLHlCQUFLWSxNQUFMO0FBQ0QsaUJBSkQ7O0FBTUEsK0JBQUsyQixzQkFBTCxDQUE0QixZQUFNO0FBQ2hDLHlCQUFLdkMsY0FBTCxHQUFzQixLQUF0QjtBQUNBLHlCQUFLK0IsT0FBTCxDQUFhQyxVQUFiLENBQXdCaEMsY0FBeEIsR0FBeUMsS0FBekM7QUFDQSx5QkFBS1ksTUFBTDtBQUNELGlCQUpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBekdxQyxlQUFLNEIsSTs7a0JBQXpCN0MsVyIsImZpbGUiOiJwb3N0cy1kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHBvc3RzRGF0YSBmcm9tICcuLi8uLi8uLi9kYXRhL3Bvc3RzLWRhdGEnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdHNEZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnlLXlvbHor6bmg4UnXG4gICAgfVxuXG4gICAgY29tcG9uZW50cyA9IHt9XG5cbiAgICBkYXRhID0ge1xuICAgICAgaXNQbGF5aW5nTXVzaWM6IHRydWUsXG4gICAgICBjb2xsZWN0ZWQ6IGZhbHNlLFxuICAgICAgY3VycmVudFBvc3RJZDogbnVsbCxcbiAgICAgIHBvc3REYXRhOiB7fVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBvbk11c2ljVGFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVhbEJhY2tncm91bmRNdXNpYygpXG4gICAgICB9LFxuICAgICAgb25Db2xsZXRpb25UYXAoKSB7XG4gICAgICAgIGxldCBpZCA9IHRoaXMuY3VycmVudFBvc3RJZFxuXG4gICAgICAgIGxldCBwb3N0c0NvbGxlY3RlZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3Bvc3RzX2NvbGxlY3RlZCcpXG4gICAgICAgIGxldCBwb3N0Q29sbGVjdGVkID0gcG9zdHNDb2xsZWN0ZWRbaWRdXG4gICAgICAgIHBvc3RDb2xsZWN0ZWQgPSAhcG9zdENvbGxlY3RlZFxuICAgICAgICBwb3N0c0NvbGxlY3RlZFtpZF0gPSBwb3N0Q29sbGVjdGVkXG5cbiAgICAgICAgdGhpcy5jb2xsZWN0ZWQgPSBwb3N0Q29sbGVjdGVkXG5cbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuXG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3Bvc3RzX2NvbGxlY3RlZCcsIHBvc3RzQ29sbGVjdGVkKVxuICAgICAgfSxcbiAgICAgIG9uU2hhcmVUYXAoKSB7XG4gICAgICAgIGxldCBpdGVtTGlzdCA9IFtcbiAgICAgICAgICAn5YiG5Lqr57uZ5b6u5L+h5aW95Y+LJyxcbiAgICAgICAgICAn5YiG5Lqr5Yiw5pyL5Y+L5ZyIJyxcbiAgICAgICAgICAn5YiG5Lqr5YiwUVEnLFxuICAgICAgICAgICfliIbkuqvliLDlvq7ljZonXG4gICAgICAgIF1cbiAgICAgICAgd2VweS5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgICAgIGl0ZW1MaXN0OiBpdGVtTGlzdCxcbiAgICAgICAgICBpdGVtQ29sb3I6ICcjNDA1ZjgwJyxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAvLyByZXMuY2FuY2VsIOeUqOaIt+aYr+S4jeaYr+eCueWHu+S6huWPlua2iOaMiemSrlxuICAgICAgICAgICAgLy8gcmVzLnRhcEluZGV4IOaVsOe7hOWFg+e0oOeahOW6j+WPt++8jOS7jjDlvIDlp4tcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICfnlKjmiLcnICsgKChpdGVtTGlzdFtyZXMudGFwSW5kZXhdKSA/IGl0ZW1MaXN0W3Jlcy50YXBJbmRleF0gOiAn5Y+W5raIJyksXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfnlKjmiLfmmK/lkKblj5bmtojvvJ8nICsgcmVzLmNhbmNlbCArICfnjrDlnKjml6Dms5Xlrp7njrDliIbkuqvlip/og73vvIzku4DkuYjml7blgJnog73mlK/mjIHlkaInXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWFsQmFja2dyb3VuZE11c2ljKCkge1xuICAgICAgbGV0IGlzUGxheWluZ011c2ljID0gdGhpcy5pc1BsYXlpbmdNdXNpY1xuICAgICAgaXNQbGF5aW5nTXVzaWMgPSAhaXNQbGF5aW5nTXVzaWNcbiAgICAgIHRoaXMuaXNQbGF5aW5nTXVzaWMgPSBpc1BsYXlpbmdNdXNpY1xuXG4gICAgICBsZXQgcG9zdERhdGEgPSB0aGlzLnBvc3REYXRhXG4gICAgICBpZiAoaXNQbGF5aW5nTXVzaWMpIHtcbiAgICAgICAgd2VweS5wbGF5QmFja2dyb3VuZEF1ZGlvKHtcbiAgICAgICAgICBkYXRhVXJsOiBwb3N0RGF0YS5tdXNpYy51cmwsXG4gICAgICAgICAgdGl0bGU6IHBvc3REYXRhLm11c2ljLnRpdGxlLFxuICAgICAgICAgIGNvdmVySW1nVXJsOiBwb3N0RGF0YS5tdXNpYy5jb3ZlckltZ1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmJhY2tncm91bmRNdXNpY0lkID0gdGhpcy5wb3N0RGF0YS5wb3N0SWRcbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuaXNQbGF5aW5nTXVzaWMgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZXB5LnBhdXNlQmFja2dyb3VuZEF1ZGlvKClcbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuYmFja2dyb3VuZE11c2ljSWQgPSBudWxsXG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmlzUGxheWluZ011c2ljID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQocGFyYW1zKSB7XG4gICAgICBsZXQgcG9zdElkID0gcGFyYW1zLmlkXG4gICAgICB0aGlzLmN1cnJlbnRQb3N0SWQgPSBwb3N0SWRcbiAgICAgIHRoaXMucG9zdERhdGEgPSBwb3N0c0RhdGEucG9zdExpc3RbcG9zdElkXVxuXG4gICAgICBsZXQgcG9zdHNDb2xsZWN0ZWQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdwb3N0c19jb2xsZWN0ZWQnKVxuICAgICAgaWYgKHBvc3RzQ29sbGVjdGVkKSB7XG4gICAgICAgIGxldCBwb3N0Q29sbGVjdGVkID0gcG9zdHNDb2xsZWN0ZWRbcG9zdElkXVxuICAgICAgICB0aGlzLmNvbGxlY3RlZCA9IHBvc3RDb2xsZWN0ZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwb3N0c0NvbGxlY3RlZCA9IHt9XG4gICAgICAgIHBvc3RzQ29sbGVjdGVkW3Bvc3RJZF0gPSBmYWxzZVxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdwb3N0c19jb2xsZWN0ZWQnLCBwb3N0c0NvbGxlY3RlZClcbiAgICAgIH1cblxuICAgICAgbGV0IHBvc3REYXRhID0gdGhpcy5wb3N0RGF0YVxuXG4gICAgICB3ZXB5LnBsYXlCYWNrZ3JvdW5kQXVkaW8oe1xuICAgICAgICBkYXRhVXJsOiBwb3N0RGF0YS5tdXNpYy51cmwsXG4gICAgICAgIHRpdGxlOiBwb3N0RGF0YS5tdXNpYy50aXRsZSxcbiAgICAgICAgY292ZXJJbWdVcmw6IHBvc3REYXRhLm11c2ljLmNvdmVySW1nXG4gICAgICB9KVxuXG4gICAgICB3ZXB5Lm9uQmFja2dyb3VuZEF1ZGlvUGxheSgoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nTXVzaWMgPSB0cnVlXG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmlzUGxheWluZ011c2ljID0gdHJ1ZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuXG4gICAgICB3ZXB5Lm9uQmFja2dyb3VuZEF1ZGlvUGF1c2UoKCkgPT4ge1xuICAgICAgICB0aGlzLmlzUGxheWluZ011c2ljID0gZmFsc2VcbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuaXNQbGF5aW5nTXVzaWMgPSBmYWxzZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19