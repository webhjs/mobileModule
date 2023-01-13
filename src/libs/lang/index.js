/*
 * @Descripttion: 
 * @version: 
 * @Author: 金苏
 * @Date: 2021-03-22 09:20:49
 * @LastEditors: 金苏
 * @LastEditTime: 2021-03-24 10:47:52
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getLang } from '@/libs/common/lang'
import vantEnLocale from 'vant/es/locale/lang/zh-CN'
import vantZhLocale from 'vant/es/locale/lang/en-US'

import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...vantEnLocale
  },
  zh: {
    ...zhLocale,
    ...vantZhLocale
  }
}

const i18n = new VueI18n({
  locale: getLang() || 'zh',
  messages
})

export default i18n
