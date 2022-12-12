console.log('---Advent of Code 2022 #10 ---');
const myParser = require('../utils/inputparser');


let mockInputArray = myParser.parseLinesOfText('./puzzles/10/mock-input.txt');
let inputArray = myParser.parseLinesOfText('./puzzles/10/input.txt');
let arrayOfData = inputArray;

/*
Start by figuring out the signal being sent by the CPU. The CPU has a single register, X, which starts with the value 1. It supports only two instructions:

addx V takes two cycles to complete. After two cycles, the X register is increased by the value V. (V can be negative.)
noop takes one cycle to complete. It has no other effect.
 */
let commands = arrayOfData.map(line => {
    if(line.includes('addx')) {
        let commandValues = line.split(' ');
        return {
            command: commandValues[0],
            value: parseFloat(commandValues[1]),
            cycles: 2
        }
    }
    if(line.includes('noop')) {
        return {
            command: line,
            value: null,
            cycles: 1
        }
    }
    throw new Error('Hey, I wasnt able to parse this command!');
});
// console.log('commands', commands);
let xRegister = 1;
let cycleCount = 0;


let signalStrengthLog = [];
let logIndex = 0;


// execute commands
commands.map(data => {
    if(data.command === 'noop') {
        cycleCount += data.cycles;
        logSignalStrength();
    }
    if(data.command === 'addx') {
        for(let i = data.cycles; i > 0; i--){
            cycleCount += 1;
            logSignalStrength();
        }
        xRegister += data.value;
    }
});
let sumOfSignalStrengths = 0;
signalStrengthLog.forEach(logEntry => {
    sumOfSignalStrengths += logEntry.signalStrength;
});
console.log('cycleCount', cycleCount);
console.log('xRegister', xRegister);
console.log('signalStrengthLog', signalStrengthLog);
console.log('expected result from mock input', 13140);
console.log('sumOfSignalStrengths', sumOfSignalStrengths);

/* --- Keep functions below this line (for organization!) ----- */
/**
 * @returns number
 */
function getSignalStrength() {
    return cycleCount * xRegister;
}

function logSignalStrength(){
    if(cycleCount === 20) {
        logIndex +=1;
        signalStrengthLog.push({
                cycle: cycleCount,
                signalStrength: getSignalStrength()
            }
        )
    } else if(cycleCount === ( 20 + (logIndex * 40))) {
        logIndex +=1;
        signalStrengthLog.push({
                cycle: cycleCount,
                signalStrength: getSignalStrength()
            }
        )

    }
}

