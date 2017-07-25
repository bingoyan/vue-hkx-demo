// 一异步处理请求，一般用于服务器api的请求
// 这里定义我们vue组件要操作的动作事件, 比如请求一个异步操作,获取其他组件的状态等
import {
  USER_INFO_SUBMIT
} from './mutation-types.js'
import FaqList from '../api/faqlist.js'

export default {
  async submit ({ commit, state }, userinfo) {
    let faqlist = await FaqList.getFaqList()
    console.log(faqlist.data['list'])
    console.log('<<<<<<<<<<<<<>>>>>>>>>>>>>>>')
    commit(USER_INFO_SUBMIT, userinfo, faqlist)
  }
}
