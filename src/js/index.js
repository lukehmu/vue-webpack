import printMe from './print'

require('../css/style.css')

const _ = require('lodash')

function component() {
  const element = document.createElement('div')

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  const btn = document.createElement('button')
  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe
  element.appendChild(btn)

  return element
}

let element = component() // Store the element to re-render on print.js changes
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('Accepting the updated printMe module')
    document.body.removeChild(element)
    element = component() // Re-render the "component" to update the click handler
    document.body.appendChild(element)
  })
}
