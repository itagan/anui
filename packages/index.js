import AnButton from './Button'
import AnCell from './Cell'
const components = [AnButton, AnCell]

const install = (app) => {
  if (install.installed) return
  components.forEach((component) => {
    app.use(component)
  })
}

const AnUi = { install }

export { install, AnButton, AnCell }

export default AnUi
