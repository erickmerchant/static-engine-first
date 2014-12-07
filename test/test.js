var assert = require('chai').assert;
var first = require('../index.js');

describe('plugin', function(){

    it('it should return the first page', function(done){

        first([{title: 'one'}, {title: 'two'}, {title: 'three'}]).then(function(pages){

            assert.deepEqual(pages, [{title: 'one'}]);

            done();
        });
    });

    it('it should return an empty array if pages is empty', function(done){

        first([]).then(function(pages){

            assert.deepEqual(pages, []);

            done();
        });
    });
});
