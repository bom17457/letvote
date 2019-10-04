module.exports.prototype = function () {
    Number.prototype.Equal = function (integer) {
        return this == integer
    }

    String.prototype.Equal = function (str) {
        return this == str
    }
}
