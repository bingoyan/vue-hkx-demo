/**
 * 同步处理请求
 * 更改 Vuex 的 store 中的状态的唯一方法是提交mutation。
 * Vuex 中的 mutations 非常类似于事件每个mutation都有一个字符串的 事件类型 (type)
 * 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
 */
import {
  USER_INFO_SUBMIT
} from './mutation-types.js'

export default{
  [USER_INFO_SUBMIT] (state, {sex, age}, faqlist) {
    alert(state.user_name + '性别:' + sex + '年龄:' + age)
    return faqlist
  }
}
