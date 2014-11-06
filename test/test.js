var assert = require('chai').assert;
var first = require('../index.js');

describe('plugin', function(){

    it('it should return the first page', function(done){

        var plugin = first();

        plugin([{title: 'one'}, {title: 'two'}, {title: 'three'}], function(pages, next){

            assert.deepEqual(pages, [{title: 'one'}]);

            done();
        });
    });

    it('it should return an empty array if pages is empty', function(done){

        var plugin = first('./test/content/defaults.first');

        plugin([], function(pages, next){

            assert.deepEqual(pages, []);

            done();
        });
    });
});
