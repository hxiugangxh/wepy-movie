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
    }, _this.methods = {
      onMoreMoives: function onMoreMoives(title) {
        _wepy2.default.navigateTo({
          url: '/pages/movies/more-movies/more-movies?title=' + title
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return PostItem;
}(_wepy2.default.component);

exports.default = PostItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWxpc3QuanMiXSwibmFtZXMiOlsiUG9zdEl0ZW0iLCJkYXRhIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJtb3ZpZSIsIm1ldGhvZHMiLCJvbk1vcmVNb2l2ZXMiLCJ0aXRsZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsSSxHQUFPLEUsUUFFUkMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLGdCQUFlLEVBQUMsT0FBTSxrQkFBUCxFQUEwQixRQUFPLE9BQWpDLEVBQXlDLFNBQVEsT0FBakQsRUFBeUQsT0FBTSxLQUEvRCxFQUFxRSxTQUFRLE9BQTdFLEVBQWhCLEVBQXNHLHFCQUFvQixFQUFDLE9BQU0sa0JBQVAsRUFBMEIsUUFBTyxPQUFqQyxFQUF5QyxTQUFRLE9BQWpELEVBQXlELE9BQU0sS0FBL0QsRUFBcUUsU0FBUSxPQUE3RSxFQUExSCxFQUFULEUsUUFDWkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxPLEdBQVU7QUFDUkMsa0JBRFEsd0JBQ0tDLEtBREwsRUFDWTtBQUNsQix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLLGlEQUFpREY7QUFEeEMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7RUFSMEIsZUFBS0csUzs7a0JBQXRCWCxRIiwiZmlsZSI6Im1vdmllLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IE1vdmllIGZyb20gJy4vbW92aWUnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdEl0ZW0gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgZGF0YSA9IHt9XG5cbiAgICRwcm9wcyA9IHtcIm1vdmllXCI6e1wieG1sbnM6di1iaW5kXCI6e1wiZm9yXCI6XCJtb2l2ZUxpc3QubW92aWVzXCIsXCJpdGVtXCI6XCJtb3ZpZVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcIm1vdmllXCJ9LFwidi1iaW5kOm1vdmllLm9uY2VcIjp7XCJmb3JcIjpcIm1vaXZlTGlzdC5tb3ZpZXNcIixcIml0ZW1cIjpcIm1vdmllXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwibW92aWVcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIG1vdmllOiBNb3ZpZVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgb25Nb3JlTW9pdmVzKHRpdGxlKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL21vdmllcy9tb3JlLW1vdmllcy9tb3JlLW1vdmllcz90aXRsZT0nICsgdGl0bGVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==