import { defineClientAppEnhance } from '@vuepress/client'
import AnButton from '../../packages/Button'
import '../../packages/theme-chalk/src/button.scss'
import './styles/index.scss'
export default defineClientAppEnhance(({ app }) => {
  app.component('AnButton', AnButton)
})
