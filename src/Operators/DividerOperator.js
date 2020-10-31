const DividerOperator = (string) => {
    return string.matchAll(/\[([0-9]+)\]/g);
}

module.exports = DividerOperator;