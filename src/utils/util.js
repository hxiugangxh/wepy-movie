import wepy from 'wepy'

function convertToStarsArray(stars) {
  let num = stars.toString().substring(0, 1)
  let array = []
  for (let i = 1; i <= 5; i++) {
    if (i <= num) {
      array.push(1)
    } else {
      array.push(0)
    }
  }
  return array
}

function http(url, callBack) {
  wepy.request({
    url: url,
    method: 'GET',
    header: {
      'Content-Type': 'json'
    },
    success: function (res) {
      callBack.call(this, res.data)
      // callBack.apply(this, [res.data])
    },
    fail: function (error) {
      console.log(error)
    }
  })
}

function convertToCastString(casts) {
  let castsjoin = ''
  for (let idx in casts) {
    castsjoin = castsjoin + casts[idx].name + ' / '
  }
  return castsjoin.substring(0, castsjoin.length - 2)
}

function convertToCastInfos(casts) {
  let castsArray = []
  for (let idx in casts) {
    let cast = {
      img: casts[idx].avatars ? casts[idx].avatars.large : '',
      name: casts[idx].name
    }
    castsArray.push(cast)
  }
  return castsArray
}

module.exports = {
  convertToStarsArray: convertToStarsArray,
  http: http,
  convertToCastString: convertToCastString,
  convertToCastInfos: convertToCastInfos
}
