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

var MovieDataGrid = function (_wepy$component) {
  _inherits(MovieDataGrid, _wepy$component);

  function MovieDataGrid() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MovieDataGrid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MovieDataGrid.__proto__ || Object.getPrototypeOf(MovieDataGrid)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _this.$props = { "movie": { "is": { "for": "rowMovie", "item": "movie", "index": "index", "key": "key", "value": "movie" }, "xmlns:v-bind": { "for": "rowMovie", "item": "movie", "index": "index", "key": "key", "value": "movie" }, "v-bind:movie.once": { "for": "rowMovie", "item": "movie", "index": "index", "key": "key", "value": "movie" } } }, _this.$events = {}, _this.components = {
      movie: _movie2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return MovieDataGrid;
}(_wepy2.default.component);

exports.default = MovieDataGrid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWRhdGEtZ3JpZC5qcyJdLCJuYW1lcyI6WyJNb3ZpZURhdGFHcmlkIiwiZGF0YSIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibW92aWUiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7Ozs7Ozs7Ozs7O29NQUNuQkMsSSxHQUFPLEUsUUFFUkMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLE1BQUssRUFBQyxPQUFNLFVBQVAsRUFBa0IsUUFBTyxPQUF6QixFQUFpQyxTQUFRLE9BQXpDLEVBQWlELE9BQU0sS0FBdkQsRUFBNkQsU0FBUSxPQUFyRSxFQUFOLEVBQW9GLGdCQUFlLEVBQUMsT0FBTSxVQUFQLEVBQWtCLFFBQU8sT0FBekIsRUFBaUMsU0FBUSxPQUF6QyxFQUFpRCxPQUFNLEtBQXZELEVBQTZELFNBQVEsT0FBckUsRUFBbkcsRUFBaUwscUJBQW9CLEVBQUMsT0FBTSxVQUFQLEVBQWtCLFFBQU8sT0FBekIsRUFBaUMsU0FBUSxPQUF6QyxFQUFpRCxPQUFNLEtBQXZELEVBQTZELFNBQVEsT0FBckUsRUFBck0sRUFBVCxFLFFBQ1pDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEs7Ozs7RUFMK0IsZUFBS0MsUzs7a0JBQTNCTixhIiwiZmlsZSI6Im1vdmllLWRhdGEtZ3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgTW92aWUgZnJvbSAnLi9tb3ZpZSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpZURhdGFHcmlkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGRhdGEgPSB7fVxuXG4gICAkcHJvcHMgPSB7XCJtb3ZpZVwiOntcImlzXCI6e1wiZm9yXCI6XCJyb3dNb3ZpZVwiLFwiaXRlbVwiOlwibW92aWVcIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIixcInZhbHVlXCI6XCJtb3ZpZVwifSxcInhtbG5zOnYtYmluZFwiOntcImZvclwiOlwicm93TW92aWVcIixcIml0ZW1cIjpcIm1vdmllXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwibW92aWVcIn0sXCJ2LWJpbmQ6bW92aWUub25jZVwiOntcImZvclwiOlwicm93TW92aWVcIixcIml0ZW1cIjpcIm1vdmllXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwibW92aWVcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIG1vdmllOiBNb3ZpZVxuICAgIH1cbiAgfVxuIl19