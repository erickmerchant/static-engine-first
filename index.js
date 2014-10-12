module.exports = function () {

    return function (pages, next) {

        next([pages ? pages[0] : undefined]);
    };
};
