"use strict";

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
  wx.request({
    url: url,
    method: 'GET',
    header: {
      "Content-Type": "json"
    },
    success: function success(res) {
      callBack(res.data);
    },
    fail: function fail(error) {
      console.log(error);
    }
  });
}

function convertToCastString(casts) {
  var castsjoin = "";
  for (var idx in casts) {
    castsjoin = castsjoin + casts[idx].name + " / ";
  }
  return castsjoin.substring(0, castsjoin.length - 2);
}

function convertToCastInfos(casts) {
  var castsArray = [];
  for (var idx in casts) {
    var cast = {
      img: casts[idx].avatars ? casts[idx].avatars.large : "",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOlsiY29udmVydFRvU3RhcnNBcnJheSIsInN0YXJzIiwibnVtIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJhcnJheSIsImkiLCJwdXNoIiwiaHR0cCIsInVybCIsImNhbGxCYWNrIiwid3giLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVyIiwic3VjY2VzcyIsInJlcyIsImRhdGEiLCJmYWlsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY29udmVydFRvQ2FzdFN0cmluZyIsImNhc3RzIiwiY2FzdHNqb2luIiwiaWR4IiwibmFtZSIsImxlbmd0aCIsImNvbnZlcnRUb0Nhc3RJbmZvcyIsImNhc3RzQXJyYXkiLCJjYXN0IiwiaW1nIiwiYXZhdGFycyIsImxhcmdlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxtQkFBVCxDQUE2QkMsS0FBN0IsRUFBb0M7QUFDbEMsTUFBSUMsTUFBTUQsTUFBTUUsUUFBTixHQUFpQkMsU0FBakIsQ0FBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsQ0FBVjtBQUNBLE1BQUlDLFFBQVEsRUFBWjtBQUNBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxLQUFLLENBQXJCLEVBQXdCQSxHQUF4QixFQUE2QjtBQUMzQixRQUFJQSxLQUFLSixHQUFULEVBQWM7QUFDWkcsWUFBTUUsSUFBTixDQUFXLENBQVg7QUFDRCxLQUZELE1BR0s7QUFDSEYsWUFBTUUsSUFBTixDQUFXLENBQVg7QUFDRDtBQUNGO0FBQ0QsU0FBT0YsS0FBUDtBQUNEOztBQUVELFNBQVNHLElBQVQsQ0FBY0MsR0FBZCxFQUFtQkMsUUFBbkIsRUFBNkI7QUFDM0JDLEtBQUdDLE9BQUgsQ0FBVztBQUNUSCxTQUFLQSxHQURJO0FBRVRJLFlBQVEsS0FGQztBQUdUQyxZQUFRO0FBQ04sc0JBQWdCO0FBRFYsS0FIQztBQU1UQyxhQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEJOLGVBQVNNLElBQUlDLElBQWI7QUFDRCxLQVJRO0FBU1RDLFVBQU0sY0FBVUMsS0FBVixFQUFpQjtBQUNyQkMsY0FBUUMsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFYUSxHQUFYO0FBYUQ7O0FBRUQsU0FBU0csbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0FBQ2xDLE1BQUlDLFlBQVksRUFBaEI7QUFDQSxPQUFLLElBQUlDLEdBQVQsSUFBZ0JGLEtBQWhCLEVBQXVCO0FBQ3JCQyxnQkFBWUEsWUFBWUQsTUFBTUUsR0FBTixFQUFXQyxJQUF2QixHQUE4QixLQUExQztBQUNEO0FBQ0QsU0FBT0YsVUFBVXBCLFNBQVYsQ0FBb0IsQ0FBcEIsRUFBdUJvQixVQUFVRyxNQUFWLEdBQW1CLENBQTFDLENBQVA7QUFDRDs7QUFFRCxTQUFTQyxrQkFBVCxDQUE0QkwsS0FBNUIsRUFBbUM7QUFDakMsTUFBSU0sYUFBYSxFQUFqQjtBQUNBLE9BQUssSUFBSUosR0FBVCxJQUFnQkYsS0FBaEIsRUFBdUI7QUFDckIsUUFBSU8sT0FBTztBQUNUQyxXQUFLUixNQUFNRSxHQUFOLEVBQVdPLE9BQVgsR0FBcUJULE1BQU1FLEdBQU4sRUFBV08sT0FBWCxDQUFtQkMsS0FBeEMsR0FBZ0QsRUFENUM7QUFFVFAsWUFBTUgsTUFBTUUsR0FBTixFQUFXQztBQUZSLEtBQVg7QUFJQUcsZUFBV3RCLElBQVgsQ0FBZ0J1QixJQUFoQjtBQUNEO0FBQ0QsU0FBT0QsVUFBUDtBQUNEOztBQUVESyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZuQyx1QkFBcUJBLG1CQUROO0FBRWZRLFFBQU1BLElBRlM7QUFHZmMsdUJBQW9CQSxtQkFITDtBQUlmTSxzQkFBbUJBO0FBSkosQ0FBakIiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbnZlcnRUb1N0YXJzQXJyYXkoc3RhcnMpIHtcclxuICB2YXIgbnVtID0gc3RhcnMudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgdmFyIGFycmF5ID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XHJcbiAgICBpZiAoaSA8PSBudW0pIHtcclxuICAgICAgYXJyYXkucHVzaCgxKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBhcnJheS5wdXNoKDApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGh0dHAodXJsLCBjYWxsQmFjaykge1xyXG4gIHd4LnJlcXVlc3Qoe1xyXG4gICAgdXJsOiB1cmwsXHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwianNvblwiXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICBjYWxsQmFjayhyZXMuZGF0YSk7XHJcbiAgICB9LFxyXG4gICAgZmFpbDogZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRUb0Nhc3RTdHJpbmcoY2FzdHMpIHtcclxuICB2YXIgY2FzdHNqb2luID0gXCJcIjtcclxuICBmb3IgKHZhciBpZHggaW4gY2FzdHMpIHtcclxuICAgIGNhc3Rzam9pbiA9IGNhc3Rzam9pbiArIGNhc3RzW2lkeF0ubmFtZSArIFwiIC8gXCI7XHJcbiAgfVxyXG4gIHJldHVybiBjYXN0c2pvaW4uc3Vic3RyaW5nKDAsIGNhc3Rzam9pbi5sZW5ndGggLSAyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFRvQ2FzdEluZm9zKGNhc3RzKSB7XHJcbiAgdmFyIGNhc3RzQXJyYXkgPSBbXVxyXG4gIGZvciAodmFyIGlkeCBpbiBjYXN0cykge1xyXG4gICAgdmFyIGNhc3QgPSB7XHJcbiAgICAgIGltZzogY2FzdHNbaWR4XS5hdmF0YXJzID8gY2FzdHNbaWR4XS5hdmF0YXJzLmxhcmdlIDogXCJcIixcclxuICAgICAgbmFtZTogY2FzdHNbaWR4XS5uYW1lXHJcbiAgICB9XHJcbiAgICBjYXN0c0FycmF5LnB1c2goY2FzdCk7XHJcbiAgfVxyXG4gIHJldHVybiBjYXN0c0FycmF5O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBjb252ZXJ0VG9TdGFyc0FycmF5OiBjb252ZXJ0VG9TdGFyc0FycmF5LFxyXG4gIGh0dHA6IGh0dHAsXHJcbiAgY29udmVydFRvQ2FzdFN0cmluZzpjb252ZXJ0VG9DYXN0U3RyaW5nLFxyXG4gIGNvbnZlcnRUb0Nhc3RJbmZvczpjb252ZXJ0VG9DYXN0SW5mb3NcclxufSJdfQ==