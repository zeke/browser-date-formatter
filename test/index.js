const tape = require('tape')
const fs = require('fs')
const path = require('path')
const $ = require('jquery')
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8')
const formatter = require('..')

tape('formatter', function (t) {
  document.body.innerHTML = html
  formatter()
  t.ok($('#default').text().match(/ ago$/), 'uses a relative date string by default')
  t.equal($('#custom-strftime-1').text(), '2016-04-07', 'defaults to Y-M-D format')
  t.equal($('#custom-strftime-2').text(), '2016', 'supports custom strftime formats')
  t.end()
  window.close()
})
