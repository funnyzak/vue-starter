const viewGenerator = require('./plop/view/prompt.cjs')

module.exports = function (plop) {
  plop.setGenerator('view', viewGenerator)
}
