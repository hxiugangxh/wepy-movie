'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _postsData = require('./../../data/posts-data.js');

var _postsData2 = _interopRequireDefault(_postsData);

var _postItem = require('./../../components/post-item.js');

var _postItem2 = _interopRequireDefault(_postItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_wepy$page) {
  _inherits(Post, _wepy$page);

  function Post() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Post);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Post.__proto__ || Object.getPrototypeOf(Post)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '文与字'
    }, _this.$props = { "postItem": { "xmlns:v-bind": { "for": "postList", "item": "post", "index": "index", "key": "key", "value": "index" }, "v-bind:post.once": { "for": "postList", "item": "post", "index": "index", "key": "key", "value": "index" }, "v-bind:index.once": { "for": "postList", "item": "post", "index": "index", "key": "key", "value": "index" } } }, _this.$events = {}, _this.components = {
      postItem: _postItem2.default
    }, _this.data = {
      postList: []
    }, _this.methods = {
      onPostTap: function onPostTap(postId) {
        _wepy2.default.navigateTo({
          url: 'posts-detail/posts-detail?id=' + postId
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Post, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.postList = _postsData2.default.postList;

              case 1:
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
  }]);

  return Post;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Post , 'pages/posts/post'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuanMiXSwibmFtZXMiOlsiUG9zdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBvc3RJdGVtIiwiZGF0YSIsInBvc3RMaXN0IiwibWV0aG9kcyIsIm9uUG9zdFRhcCIsInBvc3RJZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBQyxPQUFNLFVBQVAsRUFBa0IsUUFBTyxNQUF6QixFQUFnQyxTQUFRLE9BQXhDLEVBQWdELE9BQU0sS0FBdEQsRUFBNEQsU0FBUSxPQUFwRSxFQUFoQixFQUE2RixvQkFBbUIsRUFBQyxPQUFNLFVBQVAsRUFBa0IsUUFBTyxNQUF6QixFQUFnQyxTQUFRLE9BQXhDLEVBQWdELE9BQU0sS0FBdEQsRUFBNEQsU0FBUSxPQUFwRSxFQUFoSCxFQUE2TCxxQkFBb0IsRUFBQyxPQUFNLFVBQVAsRUFBa0IsUUFBTyxNQUF6QixFQUFnQyxTQUFRLE9BQXhDLEVBQWdELE9BQU0sS0FBdEQsRUFBNEQsU0FBUSxPQUFwRSxFQUFqTixFQUFaLEUsUUFDWkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUlWQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFETCxLLFFBR1BDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFQyxNQURGLEVBQ1U7QUFDaEIsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSyxrQ0FBa0NGO0FBRHpCLFNBQWhCO0FBR0Q7QUFMTyxLOzs7Ozs7Ozs7OztBQVNSLHFCQUFLSCxRQUFMLEdBQWdCLG9CQUFTQSxRQUF6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXZCOEIsZUFBS00sSTs7a0JBQWxCZCxJIiwiZmlsZSI6InBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHBvc3REYXRhIGZyb20gJy4uLy4uL2RhdGEvcG9zdHMtZGF0YSdcbiAgaW1wb3J0IFBvc3RJdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC1pdGVtJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlofkuI7lrZcnXG4gICAgfVxuXG4gICAkcHJvcHMgPSB7XCJwb3N0SXRlbVwiOntcInhtbG5zOnYtYmluZFwiOntcImZvclwiOlwicG9zdExpc3RcIixcIml0ZW1cIjpcInBvc3RcIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIixcInZhbHVlXCI6XCJpbmRleFwifSxcInYtYmluZDpwb3N0Lm9uY2VcIjp7XCJmb3JcIjpcInBvc3RMaXN0XCIsXCJpdGVtXCI6XCJwb3N0XCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aW5kZXgub25jZVwiOntcImZvclwiOlwicG9zdExpc3RcIixcIml0ZW1cIjpcInBvc3RcIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIixcInZhbHVlXCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgcG9zdEl0ZW06IFBvc3RJdGVtXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHBvc3RMaXN0OiBbXVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgb25Qb3N0VGFwKHBvc3RJZCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ3Bvc3RzLWRldGFpbC9wb3N0cy1kZXRhaWw/aWQ9JyArIHBvc3RJZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMucG9zdExpc3QgPSBwb3N0RGF0YS5wb3N0TGlzdFxuICAgIH1cbiAgfVxuIl19