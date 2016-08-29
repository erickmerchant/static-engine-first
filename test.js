var test = require('tape')
var first = require('./index.js')

test('it should return the first page', function (t) {
  first([{title: 'one'}, {title: 'two'}, {title: 'three'}], function (err, pages) {
    t.equal(null, err)
    t.deepEqual(pages, [{title: 'one'}])

    t.end()
  })
})

test('it should return an empty array if pages is empty', function (t) {
  first([], function (err, pages) {
    t.equal(null, err)
    t.deepEqual(pages, [])

    t.end()
  })
})
