var domready = require('domready')
var strftime = require('strftime')
var relative = require('relative-date')

module.exports = function () {
  formatDates()
  domready(formatDates)
  setInterval(formatDates, 5 * 1000)
}

var formatDates = function () {
  var dates = document.querySelectorAll('[data-date]')

  Array.prototype.forEach.call(dates, function (el) {
    var date

    // Allow `YYYY-MM-DD` strings as input
    if (el.dataset.date.match(/^\d{4}-\d{2}-\d{2}$/)) {
      var parts = el.dataset.date.split('-')
      date = new Date(parts[0], parts[1] - 1, parts[2])
    } else {
      date = new Date(el.dataset.date)
    }

    if (!date.getFullYear()) {
      return console.error('Invalid date', el.dataset.date)
    }

    var format = el.dataset.format || 'relative'
    var result = format === 'relative' ? relative(date) : strftime(format, date)

    el.textContent = result
  })
}
