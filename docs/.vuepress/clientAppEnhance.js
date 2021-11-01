import { defineClientAppEnhance } from '@vuepress/client'
import AnButton from '@an-ui/Button'
import AnCell from '@an-ui/Cell'
import AnCard from '@an-ui/Card'
import AnPopup from '@an-ui/Popup'
import AnOverlay from '@an-ui/Overlay'
import '@an-ui/theme-chalk/src/button.scss'
import '@an-ui/theme-chalk/src/cell.scss'
import '@an-ui/theme-chalk/src/card.scss'
import '@an-ui/theme-chalk/src/overlay.scss'
import './styles/index.scss'
export default defineClientAppEnhance(({ app }) => {
  app.component('AnButton', AnButton)
  app.component('AnCell', AnCell)
  app.component('AnCard', AnCard)
  app.component('AnPopup', AnPopup)
  app.component('AnOverlay', AnOverlay)
})
