const TotalOperator = (string) => {
    return string.matchAll(/\(([0-9]+)\)/g);
}

module.exports = TotalOperator;