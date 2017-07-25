import axios from 'axios'

var instance = axios.create({
  // baseURL: 'http://iuigaapi.sgshop.club',
  timeout: 10000,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    // 'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    Accept: 'application/json',
    Authorization: 'Bearer 926447d15c1bd88e1c48825647bfb7041ef0f5de'
  }
})
// Bearer 926447d15c1bd88e1c48825647bfb7041ef0f5de

export default {
  getFaqList () {
    console.log('start fecth......')
    return instance.get('/v1/help/faq/list').then(function (response) {
      // console.log(response.data)
      return response.data
    }).catch(function (error) {
      console.log(error.data)
      // console.log(error.status)
      // console.log(error.statusText)
      // console.log(error.headers)
      // console.log(error.config)
    })
  }
}
