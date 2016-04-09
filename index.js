var animate = require('amator');

module.exports = scrollIntoView;

function scrollIntoView(el, options) {
  if (!el) throw new Error('Element is required in scrollIntoView')

  var parent = el.parentNode
  if (!parent) throw new Error('Element is not attached to the DOM in scrollIntoView')

  var parentTop = parent.getBoundingClientRect().top

  return animate(parent, {
    scrollTop: el.offsetTop - parentTop
  }, options)
}

