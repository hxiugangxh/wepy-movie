'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _movie = require('./movie.js');

var _movie2 = _interopRequireDefault(_movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostItem = function (_wepy$component) {
  _inherits(PostItem, _wepy$component);

  function PostItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PostItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostItem.__proto__ || Object.getPrototypeOf(PostItem)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _this.$props = { "movie": { "xmlns:v-bind": { "for": "moiveList.movies", "item": "movie", "index": "index", "key": "key", "value": "movie" }, "v-bind:movie.once": { "for": "moiveList.movies", "item": "movie", "index": "index", "key": "key", "value": "movie" } } }, _this.$events = {}, _this.components = {
      movie: _movie2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return PostItem;
}(_wepy2.default.component);

exports.default = PostItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWxpc3QuanMiXSwibmFtZXMiOlsiUG9zdEl0ZW0iLCJkYXRhIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJtb3ZpZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxJLEdBQU8sRSxRQUVSQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsZ0JBQWUsRUFBQyxPQUFNLGtCQUFQLEVBQTBCLFFBQU8sT0FBakMsRUFBeUMsU0FBUSxPQUFqRCxFQUF5RCxPQUFNLEtBQS9ELEVBQXFFLFNBQVEsT0FBN0UsRUFBaEIsRUFBc0cscUJBQW9CLEVBQUMsT0FBTSxrQkFBUCxFQUEwQixRQUFPLE9BQWpDLEVBQXlDLFNBQVEsT0FBakQsRUFBeUQsT0FBTSxLQUEvRCxFQUFxRSxTQUFRLE9BQTdFLEVBQTFILEVBQVQsRSxRQUNaQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLOzs7O0VBTDBCLGVBQUtDLFM7O2tCQUF0Qk4sUSIsImZpbGUiOiJtb3ZpZS1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBNb3ZpZSBmcm9tICcuL21vdmllJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3RJdGVtIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGRhdGEgPSB7fVxuXG4gICAkcHJvcHMgPSB7XCJtb3ZpZVwiOntcInhtbG5zOnYtYmluZFwiOntcImZvclwiOlwibW9pdmVMaXN0Lm1vdmllc1wiLFwiaXRlbVwiOlwibW92aWVcIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIixcInZhbHVlXCI6XCJtb3ZpZVwifSxcInYtYmluZDptb3ZpZS5vbmNlXCI6e1wiZm9yXCI6XCJtb2l2ZUxpc3QubW92aWVzXCIsXCJpdGVtXCI6XCJtb3ZpZVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcIm1vdmllXCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBtb3ZpZTogTW92aWVcbiAgICB9XG4gIH1cbiJdfQ==