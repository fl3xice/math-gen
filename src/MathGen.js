const Parser = require("./parser");

class MathGen {

    num = 0;

    constructor(example) {
        this.parser = new Parser(example);
    }

    run() {

        this.parser.operators.forEach((operator) => {

            switch (operator.type) {
                case "totalOperator":
                    operator.nums.split('').forEach(num => {
                        this.num += Number.parseInt(num);
                    })
                    break;
                case "dividerOperator":
                    operator.nums.split('').forEach(num => {
                        this.num /= Number.parseInt(num);
                    })
                    break;
                case "multipleOperator":
                    operator.nums.split('').forEach(num => {
                        this.num *= Number.parseInt(num);
                    })
                    break;
            }
        });

        return this.num;
    }
}

module.exports = MathGen;