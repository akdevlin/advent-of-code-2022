console.log('---Advent of Code 2022 #10 ---');
const myParser = require('../utils/inputparser');

let mockInputArray = myParser.parseLinesOfTextByEmptyLines('./puzzles/11/mock-input.txt');
let inputArray = myParser.parseLinesOfTextByEmptyLines('./puzzles/11/input.txt');
let arrayOfData = inputArray;
let monkeys = arrayOfData.map(data => {
    let lines = data.split('\n');
    let parsedData = {
        items: [],
        valueChangeOperation: '',
        divisibleBy: null,
        testPassMonkey: null,
        testFailMonkey: null,
        inspectedItems: 0
    };
    lines.forEach(line => {
        line = line.trim();
        let values = line.split(' ');
        if (line.includes('Starting items:')) {
            parsedData.items = parseInitialItemValues(values);
        } else if (line.includes('Operation:')) {
            let values = line.split(' ');
            parsedData.valueChangeOperation = parseValueChangeOperation(values);
        } else if (line.includes('Test:')) {
            let values = line.split(' ');
            parsedData.divisibleBy = parseDivisibleTestValue(values);
        } else if (line.includes('If true:')) {
            parsedData.testPassMonkey = parseThrowTo(values);
        } else if (line.includes('If false:')) {
            parsedData.testFailMonkey = parseThrowTo(values);
        } else {
            // console.log(line);
        }
    });
    return parsedData;
});
// console.log('monkeys', monkeys);
let rounds = 10 * 1000;
// execute throws
const superModulo = monkeys.reduce(
    (prev, monkey) => {
        console.log(monkey.divisbleBy)
        return monkey.divisibleBy * prev;
    },
    1
);
console.log('superModulo,', superModulo);
for (var i = 1; i <= rounds; i++) {
    for( let monkeyIndex = 0; monkeyIndex < monkeys.length; monkeyIndex++ ) {
        let data = monkeys[monkeyIndex];
        let returnValue = JSON.parse(JSON.stringify(data));
        // if (data.items.length < 1) {
        //     // console.log(`R: ${i}, M: ${monkeyIndex} - skipping this turn because there are no items`);
        //     return returnValue;
        // } 
        for (let j = 0; j < monkeys[monkeyIndex].items.length; j++) {
            let old = data.items[j];
            // console.log('old original value', old);
            let newVal = eval(data.valueChangeOperation);
            newVal = newVal % superModulo;

            let divisibleBy = newVal % data.divisibleBy;
            // console.log(' divisibleBy', divisibleBy);
// newVal = divisibleBy;
            if (divisibleBy === 0) {
                monkeys[data.testPassMonkey].items.push(newVal);
            } else {
                monkeys[data.testFailMonkey].items.push(newVal);
            }

            returnValue.inspectedItems += 1;
            // reduce the number of items held
            if (data.items.length) {
                let newItems = returnValue.items.reverse();
                newItems.pop();
                newItems.reverse();
                // returnValue.items = data.items.slice(1);
            } else {
                returnValue.items = [];
            }
        }
        monkeys[monkeyIndex] = returnValue;
    }
    


    // monkeys.forEach((data, monkeyIndex) => {
    //     let returnValue = JSON.parse(JSON.stringify(data));
    //     if (data.items.length < 1) {
    //         // console.log(`R: ${i}, M: ${monkeyIndex} - skipping this turn because there are no items`);
    //         return returnValue;
    //     }
    //     for (let j = 0; j < data.items.length; j++) {
    //         let old = data.items[j];
    //         console.log('old original value', old);
    //         let newVal = eval(data.valueChangeOperation);
    //         console.log(' newVal after operation', newVal);
    //         newVal = Math.floor(newVal / 3);
    //         console.log(' newVal after division', newVal);
    //         let divisibleBy = newVal % data.divisibleBy;
    //         console.log(' divisibleBy', divisibleBy);
    //
    //         if (divisibleBy === 0) {
    //             monkeys[data.testPassMonkey].items.push(newVal);
    //             console.log(` pushed ${newVal} to`, monkeys[data.testPassMonkey].items);
    //         } else {
    //             monkeys[data.testFailMonkey].items.push(newVal);
    //             console.log(` pushed ${newVal} to`, monkeys[data.testFailMonkey].items);
    //         }
    //
    //         returnValue.inspectedItems += 1;
    //         // reduce the number of items held
    //         if (data.items.length > 1) {
    //             returnValue.items = data.items.slice(1);
    //         } else {
    //             returnValue.items = [];
    //         }
    //     }
    //     monkeys[monkeyIndex]= returnValue;
    // });

    console.log(`Round ${i}: `);
    monkeys.forEach((data, index) => {
        let dataString = data.items.join(', ');
        console.log(`  Monkey ${index}: ${dataString}`);
    });
    // TODO: find out why the first item is being removed and then the thrown items are added
}

let inspectedItemCounts = monkeys.map(monkey => monkey.inspectedItems);
inspectedItemCounts = inspectedItemCounts.sort((a, b) => {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }
    return 0;
});
console.log('inspectedItemCounts', inspectedItemCounts);
let finalAnswer = inspectedItemCounts[0] * inspectedItemCounts[1];
console.log('finalAnswer', finalAnswer);
console.log('TODO: add input data and then submit the answer!!!!');
console.log('expectedMock answer', 10605);

/* --- Keep functions below this line (for organization!) ----- */

function parseInitialItemValues(values) {
    let items = values.slice(2);
    let returnVal = []
    items = items.map(value => {
        allChars = value.split('');
        let stringValue = '';
        allChars.forEach(char => {
            if (stringValue !== ',') {
                stringValue += char;
            }
        });

        returnVal.push(parseFloat(stringValue));
    });
    return returnVal;
}

function parseValueChangeOperation(values) {
    let items = values.slice(3);
    let returnVal = []
    items = items.map(value => {
        allChars = value.split('');
        let stringValue = '';
        allChars.forEach(char => {
            if (stringValue !== ',') {
                stringValue += char;
            }
        });

        returnVal.push(stringValue);
    });
    return returnVal.join(' ');
}

function parseDivisibleTestValue(values) {
    let items = values.slice(3);
    let returnVal = []
    items = items.map(value => {
        allChars = value.split('');
        let stringValue = '';
        allChars.forEach(char => {
            if (stringValue !== ',') {
                stringValue += char;
            }
        });

        returnVal = parseFloat(stringValue);
    });
    return returnVal;
}

function parseThrowTo(values) {
    let items = values.slice(5);
    let returnVal = []
    items = items.map(value => {
        allChars = value.split('');
        let stringValue = '';
        allChars.forEach(char => {
            if (stringValue !== ',') {
                stringValue += char;
            }
        });
        returnVal = parseFloat(stringValue);
    });

    return returnVal;
}