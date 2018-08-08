import wepy from 'wepy'

const app = getApp()

// HTTP工具类
export default class http {
  static async request(method, url, data) {
    const param = {
      url: url,
      method: method,
      data: data
    };
    const res = await wepy.request(param);
    if (this.isSuccess(res)) {
      return res.data;
    } else {
      if (res.statusCode == 401 && wepy.getStorageSync('refresh_token') != '') {
        console.log('refresh_token--尝试获取新的token');
        await this.refreshToken(method, url, data);

        const res2 = await wepy.request(param);

        if (this.isSuccess(res2)) {
          console.log('access_token刷新成功')
          return res2.data;
        } else {
          if (res2.statusCode == 401) {
            console.log('refresh_token--也过期--重新登录')
            // 弹向登录
          } else {
            throw this.requestException(res);
          }
        }

      }

      console.error(method, url, data, res);
    }
  }

  static async refreshToken(method, url, data) {
    let param = {
      url: 'http://127.0.0.1:8080/oauth/token',
      data: {
        'grant_type': 'refresh_token',
        'refresh_token': wepy.getStorageSync('refresh_token')
      },
      method: 'POST',
      header: {
        'Authorization': 'Basic aW1vb2M6aW1vb2NzZWNyZXQ=',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    let obj = await wepy.request(param);

    wepy.$instance.globalData.auth = obj.data
  }


  /**
   * 判断请求是否成功
   */
  static isSuccess(res) {
    const wxCode = res.statusCode;
    // 微信请求错误
    if (wxCode !== 200) {
      return false;
    }
    const wxData = res.data;
    return !(wxData && wxData.code !== 1);
  }

  /**
   * 异常
   */
  static requestException(res) {
    const error = {};
    error.statusCode = res.statusCode;
    const wxData = res.data;
    const serverData = wxData.data;
    if (serverData) {
      error.serverCode = wxData.code;
      error.message = serverData.message;
      error.serverData = serverData;
    }
    return error;
  }

  static get(url, data) {
    return this.request('GET', url, data)
  }

  static put(url, data) {
    return this.request('PUT', url, data)
  }

  static post(url, data) {
    return this.request('POST', url, data)
  }

  static patch(url, data) {
    return this.request('PATCH', url, data)
  }

  static delete(url, data) {
    return this.request('DELETE', url, data)
  }
}
