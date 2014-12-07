var Promise = require('es6-promise').Promise;

module.exports = function (pages) {

    return Promise.resolve(pages.length ? [pages[0]] : []);
};
