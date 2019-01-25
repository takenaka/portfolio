import Axios from "axios";

export default class Embed {
  apiKey

  constructor(apiKey) {
    this.apiKey = apiKey
  }

  async getContents(urls) {
    const options = {
      card: 1,
      key: this.apiKey,
      native: true,
      scheme: 'https',
      urls: urls.join(',')
    }

    const createParams = data => {
      const params = Object.keys(data).map(key => key + '=' + String(data[key]))
      return params.join('&')
    }

    const requestUrl =
      'https://api-cdn.embed.ly/1/card-details?' + createParams(options)

    // console.log(requestUrl)
    return await Axios.get(requestUrl).then(res => res.data);
  }
}
