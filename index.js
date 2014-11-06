module.exports = function () {

    return function (pages, next) {

        next(pages.length ? [pages[0]] : []);
    };
};
