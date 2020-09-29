
exports.min = function min (array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 0;
    }
    return array.reduce(function (a, b) {
        return (a < b ? a : b);
    });
}

exports.max = function max (array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 0;
    }
    return array.reduce(function (a, b) {
        return (a > b ? a : b);
    });
}

exports.avg = function avg (array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 0;
    }
    return array.reduce(function (a, b) {
        return (a + b);
    })/array.length;
}
