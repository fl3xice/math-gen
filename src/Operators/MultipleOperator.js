const MultipleOperator = (string) => {
    return string.matchAll(/\{([0-9]+)\}/g);
}

module.exports = MultipleOperator;