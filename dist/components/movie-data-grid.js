'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MovieDataGrid.__proto__ || Object.getPrototypeOf(MovieDataGrid)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _this.props = {
      title: String
    }, _this.$props = { "movie": { "is": { "for": "rowMovie", "item": "movie", "index": "index", "key": "key", "value": "movie" }, "xmlns:v-bind": { "for": "rowMovie", "item": "movie", "index": "index", "key": "key", "value": "movie" }, "v-bind:movie.once": { "for": "rowMovie", "item": "movie", "index": "index", "key": "key", "value": "movie" } } }, _this.$events = {}, _this.components = {
      movie: _movie2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MovieDataGrid, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('我静态传值了', this.title);
    }
  }]);

  return MovieDataGrid;
}(_wepy2.default.component);

exports.default = MovieDataGrid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWRhdGEtZ3JpZC5qcyJdLCJuYW1lcyI6WyJNb3ZpZURhdGFHcmlkIiwiZGF0YSIsInByb3BzIiwidGl0bGUiLCJTdHJpbmciLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm1vdmllIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLEksR0FBTyxFLFFBQ1BDLEssR0FBUTtBQUNOQyxhQUFPQztBQURELEssUUFJVEMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLE1BQUssRUFBQyxPQUFNLFVBQVAsRUFBa0IsUUFBTyxPQUF6QixFQUFpQyxTQUFRLE9BQXpDLEVBQWlELE9BQU0sS0FBdkQsRUFBNkQsU0FBUSxPQUFyRSxFQUFOLEVBQW9GLGdCQUFlLEVBQUMsT0FBTSxVQUFQLEVBQWtCLFFBQU8sT0FBekIsRUFBaUMsU0FBUSxPQUF6QyxFQUFpRCxPQUFNLEtBQXZELEVBQTZELFNBQVEsT0FBckUsRUFBbkcsRUFBaUwscUJBQW9CLEVBQUMsT0FBTSxVQUFQLEVBQWtCLFFBQU8sT0FBekIsRUFBaUMsU0FBUSxPQUF6QyxFQUFpRCxPQUFNLEtBQXZELEVBQTZELFNBQVEsT0FBckUsRUFBck0sRUFBVCxFLFFBQ1pDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEs7Ozs7OzZCQUdEO0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLEtBQUtQLEtBQTNCO0FBQ0Q7Ozs7RUFid0MsZUFBS1EsUzs7a0JBQTNCWCxhIiwiZmlsZSI6Im1vdmllLWRhdGEtZ3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgTW92aWUgZnJvbSAnLi9tb3ZpZSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpZURhdGFHcmlkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGRhdGEgPSB7fVxuICAgIHByb3BzID0ge1xuICAgICAgdGl0bGU6IFN0cmluZ1xuICAgIH1cblxuICAgJHByb3BzID0ge1wibW92aWVcIjp7XCJpc1wiOntcImZvclwiOlwicm93TW92aWVcIixcIml0ZW1cIjpcIm1vdmllXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwibW92aWVcIn0sXCJ4bWxuczp2LWJpbmRcIjp7XCJmb3JcIjpcInJvd01vdmllXCIsXCJpdGVtXCI6XCJtb3ZpZVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcIm1vdmllXCJ9LFwidi1iaW5kOm1vdmllLm9uY2VcIjp7XCJmb3JcIjpcInJvd01vdmllXCIsXCJpdGVtXCI6XCJtb3ZpZVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcIm1vdmllXCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBtb3ZpZTogTW92aWVcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgY29uc29sZS5sb2coJ+aIkemdmeaAgeS8oOWAvOS6hicsIHRoaXMudGl0bGUpXG4gICAgfVxuICB9XG4iXX0=