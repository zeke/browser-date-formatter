var domready = require('domready')
var strftime = require('prettydate').strftime
var relative = require('relative-date')

module.exports = function () {
  domready(formatDates)
  setInterval(formatDates, 5 * 1000)
}

var formatDates = function () {
  var dates = document.querySelectorAll('[data-date]')

  Array.prototype.forEach.call(dates, function (el) {
    var date = new Date(el.dataset.date)

    if (!date.getFullYear()) {
      return console.error('Invalid date', el.dataset.date)
    }

    var format = el.dataset.format || '%Y-%m-%d'
    var result = format === 'relative' ? relative(date) : strftime(date, format)

    el.textContent = result
  })
}
