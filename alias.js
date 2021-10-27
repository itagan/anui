const { readdirSync } = require('fs')
const { join } = require('path')
const chalk = require('chalk')
const headPkgList = [] // 非 @an-ui/开头的组件

const pkgList = readdirSync(join(__dirname, './packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg)
)
const alias = pkgList.reduce((pre, pkg) => {
  pre[`@an-ui/${pkg}`] = join(__dirname, './packages', pkg)
  return {
    ...pre,
  }
}, {})

console.log(`🌼 alias list \n${chalk.blue(Object.keys(alias).join('\n'))}`)

module.exports = alias
