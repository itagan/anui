import { defineClientAppEnhance } from '@vuepress/client'
import AnButton from '@an-ui/Button'
import AnCell from '@an-ui/Cell'
import '@an-ui/theme-chalk/src/button.scss'
import '@an-ui/theme-chalk/src/cell.scss'
import './styles/index.scss'
export default defineClientAppEnhance(({ app }) => {
  app.component('AnButton', AnButton)
  app.component('AnCell', AnCell)
})
