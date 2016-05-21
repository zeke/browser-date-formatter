const tape = require('tape')
const fs = require('fs')
const path = require('path')
const $ = require('jquery')
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8')
const formatter = require('..')

tape('formatter', function (t) {
  document.body.innerHTML = html
  formatter()
  t.equal($('#default').text(), '2016-04-07', 'defaults to Y-M-D format')
  t.equal($('#custom-strftime').text(), '2016', 'supports custom strftime formats')
  t.ok($('#relative').text().match(/ ago$/), 'supports relative date formats')
  t.end()
  window.close()
})
