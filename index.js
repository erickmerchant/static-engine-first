module.exports = function (pages, done) {

    return done(null, pages.length ? [pages[0]] : []);
};
