var tap = require('tap')
var first = require('./index.js')

tap.test('it should return the first page', function (t) {
  first([{title: 'one'}, {title: 'two'}, {title: 'three'}], function (err, pages) {
    t.equal(null, err)
    t.deepEqual(pages, [{title: 'one'}])

    t.end()
  })
})

tap.test('it should return an empty array if pages is empty', function (t) {
  first([], function (err, pages) {
    t.equal(null, err)
    t.deepEqual(pages, [])

    t.end()
  })
})
