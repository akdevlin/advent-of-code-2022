const path = require('path');
const fs = require('fs');

const [raw_stacks, raw_instructions] = fs
    .readFileSync(path.join(__dirname, 'input.txt.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n\n');

const CRATE_SIZE = '[X]'.length;
const raw_stacks_lines = raw_stacks.split('\n');
// Remove last line of " 1   2   3   4   5   6   7   8   9 "
raw_stacks_lines.pop();

const stacks = [];

for (let raw_stack_line of raw_stacks_lines) {
    for (let i = 0; i < raw_stack_line.length; i += CRATE_SIZE + 1) {
        const start = i;
        const end = start + CRATE_SIZE;
        const crate = raw_stack_line.substring(start, end);

        const stack_index = i / (CRATE_SIZE + 1);
        if (!stacks[stack_index]) {
            stacks[stack_index] = [];
        }
        if (crate.trim()) {
            // "[X]" -> "X"
            stacks[stack_index].push(crate.substring(1, 2));
        }
    }
}

// Now the "top" item of the stack is the first item within all the arrays.
// It's easier to have this at the end so we can `pop` them, so reverse all
// our stacks
for (let stack of stacks) {
    stack.reverse();
}

// Now parse move instructions
const instructions = raw_instructions.split('\n').map((line) => {
    // e.g. `move 13 from 3 to 6`
    let [, amount, from, to] = /move (\d+) from (\d+) to (\d+)/.exec(line);
    amount = parseInt(amount, 10);
    // Stacks are 0-indexed
    from = parseInt(from, 10) - 1;
    to = parseInt(to, 10) - 1;

    return { amount, from, to };
});
console.log('instructions', instructions);
fs.writeFile('./workinginstructions.txt', JSON.stringify(instructions), err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});
function partOne() {
    const stacks_p1 = JSON.parse(JSON.stringify(stacks));

    for (let { amount, from, to } of instructions) {
        for (let c = 0; c < amount; c++) {
            let crate = stacks_p1[from].pop();
            stacks_p1[to].push(crate);
        }
    }

    return stacks_p1;
}
fs.writeFile('./workingstacks.txt', JSON.stringify(stacks), err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});

function partTwo() {
    const stacks_p2 = JSON.parse(JSON.stringify(stacks));
    for (let { amount, from, to } of instructions) {
        // Negative `start` index counts back from the end of the array
        let group_crates = stacks_p2[from].splice(-1 * amount, amount);
        stacks_p2[to].push(...group_crates);
    }

    return stacks_p2;
}

const top_crates_p1 = partOne()
    .map((stack) => stack[stack.length - 1])
    .join('');

const top_crates_p2 = partTwo()
    .map((stack) => stack[stack.length - 1])
    .join('');

console.log('Part One:', top_crates_p1);
console.log('Part Two:', top_crates_p2);