import AnButton from './Button'
const components = [AnButton]

const install = (app) => {
  if (install.installed) return
  components.forEach((component) => {
    app.use(component)
  })
}

const AnUi = { install }

export { install, AnButton }

export default AnUi
