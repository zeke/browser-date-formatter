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
  t.equal($('#strftime').text(), '2016-04-07', 'supports custom strftime formats')
  t.equal($('#non-iso-input').text(), '2017--03--06', 'properly parses nonstandard input like YYYY-MM-DD')
  window.close()
  t.end()
})
