const TotalOperator = require("./Operators/TotalOperator");
const DividerOperator = require("./Operators/DividerOperator");
const MultipleOperator = require("./Operators/MultipleOperator");

class Parser {

    PrepareString = "";
    allShards = [];
    operators = [{type:"",nums:0}];

    constructor(example) {
        this.PrepareString = example.trim().toLowerCase();
        this.allShards = [...this.PrepareString.split(/ +/g)];
        this.operators = [];

        this.parse();
    }

    parse() {
        this.allShards.forEach((shard) => {
            if (typeof [...TotalOperator(shard)][0] !== "undefined") {
                const totalOperator = [...TotalOperator(shard)][0][1]

                this.operators.push({
                    "type": "totalOperator",
                    "nums": totalOperator
                });
                return true;
            }

            if (typeof [...DividerOperator(shard)][0] !== "undefined") {
                const dividerOperator = [...DividerOperator(shard)][0][1]

                this.operators.push({
                    "type": "dividerOperator",
                    "nums": dividerOperator
                });
                return true;
            }

            if (typeof [...MultipleOperator(shard)][0] !== "undefined") {
                const multipleOperator = [...MultipleOperator(shard)][0][1]

                this.operators.push({
                    "type": "multipleOperator",
                    "nums": multipleOperator
                });
                return true;
            }
        })
    }
}

module.exports = Parser;