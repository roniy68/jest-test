const stringLength = (str) => {
    if (str.length >= 1 && str.length <= 10) {
        return str.length;
    }
    throw new Error('abc');
};

module.exports = stringLength;