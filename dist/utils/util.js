'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function convertToStarsArray(stars) {
  var num = stars.toString().substring(0, 1);
  var array = [];
  for (var i = 1; i <= 5; i++) {
    if (i <= num) {
      array.push(1);
    } else {
      array.push(0);
    }
  }
  return array;
}

function http(url, callBack) {
  _wepy2.default.request({
    url: url,
    method: 'GET',
    header: {
      'Content-Type': 'json'
    },
    success: function success(res) {
      callBack.call(this, res.data);
      // callBack.apply(this, [res.data])
    },
    fail: function fail(error) {
      console.log(error);
    }
  });
}

function convertToCastString(casts) {
  var castsjoin = '';
  for (var idx in casts) {
    castsjoin = castsjoin + casts[idx].name + ' / ';
  }
  return castsjoin.substring(0, castsjoin.length - 2);
}

function convertToCastInfos(casts) {
  var castsArray = [];
  for (var idx in casts) {
    var cast = {
      img: casts[idx].avatars ? casts[idx].avatars.large : '',
      name: casts[idx].name
    };
    castsArray.push(cast);
  }
  return castsArray;
}

module.exports = {
  convertToStarsArray: convertToStarsArray,
  http: http,
  convertToCastString: convertToCastString,
  convertToCastInfos: convertToCastInfos
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOlsiY29udmVydFRvU3RhcnNBcnJheSIsInN0YXJzIiwibnVtIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJhcnJheSIsImkiLCJwdXNoIiwiaHR0cCIsInVybCIsImNhbGxCYWNrIiwicmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJjYWxsIiwiZGF0YSIsImZhaWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb252ZXJ0VG9DYXN0U3RyaW5nIiwiY2FzdHMiLCJjYXN0c2pvaW4iLCJpZHgiLCJuYW1lIiwibGVuZ3RoIiwiY29udmVydFRvQ2FzdEluZm9zIiwiY2FzdHNBcnJheSIsImNhc3QiLCJpbWciLCJhdmF0YXJzIiwibGFyZ2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFFQSxTQUFTQSxtQkFBVCxDQUE2QkMsS0FBN0IsRUFBb0M7QUFDbEMsTUFBSUMsTUFBTUQsTUFBTUUsUUFBTixHQUFpQkMsU0FBakIsQ0FBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsQ0FBVjtBQUNBLE1BQUlDLFFBQVEsRUFBWjtBQUNBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxLQUFLLENBQXJCLEVBQXdCQSxHQUF4QixFQUE2QjtBQUMzQixRQUFJQSxLQUFLSixHQUFULEVBQWM7QUFDWkcsWUFBTUUsSUFBTixDQUFXLENBQVg7QUFDRCxLQUZELE1BRU87QUFDTEYsWUFBTUUsSUFBTixDQUFXLENBQVg7QUFDRDtBQUNGO0FBQ0QsU0FBT0YsS0FBUDtBQUNEOztBQUVELFNBQVNHLElBQVQsQ0FBY0MsR0FBZCxFQUFtQkMsUUFBbkIsRUFBNkI7QUFDM0IsaUJBQUtDLE9BQUwsQ0FBYTtBQUNYRixTQUFLQSxHQURNO0FBRVhHLFlBQVEsS0FGRztBQUdYQyxZQUFRO0FBQ04sc0JBQWdCO0FBRFYsS0FIRztBQU1YQyxhQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEJMLGVBQVNNLElBQVQsQ0FBYyxJQUFkLEVBQW9CRCxJQUFJRSxJQUF4QjtBQUNBO0FBQ0QsS0FUVTtBQVVYQyxVQUFNLGNBQVVDLEtBQVYsRUFBaUI7QUFDckJDLGNBQVFDLEdBQVIsQ0FBWUYsS0FBWjtBQUNEO0FBWlUsR0FBYjtBQWNEOztBQUVELFNBQVNHLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUNsQyxNQUFJQyxZQUFZLEVBQWhCO0FBQ0EsT0FBSyxJQUFJQyxHQUFULElBQWdCRixLQUFoQixFQUF1QjtBQUNyQkMsZ0JBQVlBLFlBQVlELE1BQU1FLEdBQU4sRUFBV0MsSUFBdkIsR0FBOEIsS0FBMUM7QUFDRDtBQUNELFNBQU9GLFVBQVVwQixTQUFWLENBQW9CLENBQXBCLEVBQXVCb0IsVUFBVUcsTUFBVixHQUFtQixDQUExQyxDQUFQO0FBQ0Q7O0FBRUQsU0FBU0Msa0JBQVQsQ0FBNEJMLEtBQTVCLEVBQW1DO0FBQ2pDLE1BQUlNLGFBQWEsRUFBakI7QUFDQSxPQUFLLElBQUlKLEdBQVQsSUFBZ0JGLEtBQWhCLEVBQXVCO0FBQ3JCLFFBQUlPLE9BQU87QUFDVEMsV0FBS1IsTUFBTUUsR0FBTixFQUFXTyxPQUFYLEdBQXFCVCxNQUFNRSxHQUFOLEVBQVdPLE9BQVgsQ0FBbUJDLEtBQXhDLEdBQWdELEVBRDVDO0FBRVRQLFlBQU1ILE1BQU1FLEdBQU4sRUFBV0M7QUFGUixLQUFYO0FBSUFHLGVBQVd0QixJQUFYLENBQWdCdUIsSUFBaEI7QUFDRDtBQUNELFNBQU9ELFVBQVA7QUFDRDs7QUFFREssT0FBT0MsT0FBUCxHQUFpQjtBQUNmbkMsdUJBQXFCQSxtQkFETjtBQUVmUSxRQUFNQSxJQUZTO0FBR2ZjLHVCQUFxQkEsbUJBSE47QUFJZk0sc0JBQW9CQTtBQUpMLENBQWpCIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5mdW5jdGlvbiBjb252ZXJ0VG9TdGFyc0FycmF5KHN0YXJzKSB7XG4gIGxldCBudW0gPSBzdGFycy50b1N0cmluZygpLnN1YnN0cmluZygwLCAxKVxuICBsZXQgYXJyYXkgPSBbXVxuICBmb3IgKGxldCBpID0gMTsgaSA8PSA1OyBpKyspIHtcbiAgICBpZiAoaSA8PSBudW0pIHtcbiAgICAgIGFycmF5LnB1c2goMSlcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyYXkucHVzaCgwKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cblxuZnVuY3Rpb24gaHR0cCh1cmwsIGNhbGxCYWNrKSB7XG4gIHdlcHkucmVxdWVzdCh7XG4gICAgdXJsOiB1cmwsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXI6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnanNvbidcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIGNhbGxCYWNrLmNhbGwodGhpcywgcmVzLmRhdGEpXG4gICAgICAvLyBjYWxsQmFjay5hcHBseSh0aGlzLCBbcmVzLmRhdGFdKVxuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0Nhc3RTdHJpbmcoY2FzdHMpIHtcbiAgbGV0IGNhc3Rzam9pbiA9ICcnXG4gIGZvciAobGV0IGlkeCBpbiBjYXN0cykge1xuICAgIGNhc3Rzam9pbiA9IGNhc3Rzam9pbiArIGNhc3RzW2lkeF0ubmFtZSArICcgLyAnXG4gIH1cbiAgcmV0dXJuIGNhc3Rzam9pbi5zdWJzdHJpbmcoMCwgY2FzdHNqb2luLmxlbmd0aCAtIDIpXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0Nhc3RJbmZvcyhjYXN0cykge1xuICBsZXQgY2FzdHNBcnJheSA9IFtdXG4gIGZvciAobGV0IGlkeCBpbiBjYXN0cykge1xuICAgIGxldCBjYXN0ID0ge1xuICAgICAgaW1nOiBjYXN0c1tpZHhdLmF2YXRhcnMgPyBjYXN0c1tpZHhdLmF2YXRhcnMubGFyZ2UgOiAnJyxcbiAgICAgIG5hbWU6IGNhc3RzW2lkeF0ubmFtZVxuICAgIH1cbiAgICBjYXN0c0FycmF5LnB1c2goY2FzdClcbiAgfVxuICByZXR1cm4gY2FzdHNBcnJheVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29udmVydFRvU3RhcnNBcnJheTogY29udmVydFRvU3RhcnNBcnJheSxcbiAgaHR0cDogaHR0cCxcbiAgY29udmVydFRvQ2FzdFN0cmluZzogY29udmVydFRvQ2FzdFN0cmluZyxcbiAgY29udmVydFRvQ2FzdEluZm9zOiBjb252ZXJ0VG9DYXN0SW5mb3Ncbn1cbiJdfQ==