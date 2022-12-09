console.log('---Advent of Code 2022 #9 ---');
const myParser = require('../utils/inputparser');

let mockInputArray = myParser.parseLinesOfText('./puzzles/9/mock-input.txt');
let inputArray = myParser.parseLinesOfText('./puzzles/9/input.txt');
let arrayOfData = inputArray;

let commands = arrayOfData.map(row => {
    let data = row.split(' ');
    return {
        direction: data[0],
        count: parseFloat(data[1])
    };
});
const visitedTailLocations = new Set();
const headLocationLog = [];
const tailLocationLog = [];

let startingLocation = {x: 0, y: 0};
let headLocation = {x: 0, y: 0};
let tailLocation = {x: 0, y: 0};

commands.map((command) => {
    // parse the command and take each movement 1 unit at a time
    for(let i = command.count; i > 0; i--) {
        // console.log(command, i);
        // let coordinateValueBefore = getCoordinateStringValue(tailLocation);
        // visitedTailLocations.add(coordinateValueBefore);
        // Step 1 move head
        headLocation = moveItem(headLocation, command.direction);
        // Step 2 check if tail is adjacent
        let tailAdjacent = isAdjacent(headLocation, tailLocation);
        // tailLocationLog.push({adjacent: tailAdjacent, tailLocation, headLocation});
        // Step 3 move tail if is not adjacent
        if(!tailAdjacent) {
            // this will be more difficult since the tail can move diagonally
            tailLocation = moveItemAdjacentTo(headLocation, tailLocation, command.direction);
        }

        // Step 4 log tail position by adding to the set (will not include duplicates)
        let coordinateValue = getCoordinateStringValue(tailLocation);
        visitedTailLocations.add(coordinateValue);
        // Just for debugging purposes
        tailLocationLog.push({adjacent: tailAdjacent, tailLocation, headLocation});
        headLocationLog.push(headLocation);
    }

});

function getCoordinateStringValue(item) {
    return item.x.toString() + ', ' + item.y.toString();
}


/**
 * @param {Object} item
 * @param {Number} item.x
 * @param {Number} item.y
 * @param {String} direction - U, D, L, R
 *
 * @returns {Object} item
 */
function moveItem(item, direction) {

    switch(direction) {
        case 'R':
            return {
                x: item.x + 1,
                y: item.y
            };
            break;
        case 'L':
            return {
                x: item.x - 1,
                y: item.y
            };
            break;
        case 'D':
            return {
                x: item.x,
                y: item.y - 1
            };
            break;
        case 'U':
            return {
                x: item.x,
                y: item.y + 1
            };
            break;
        default:
            return '';
            throw new Error('Hey! You are trying to move in an undefined direction!');
    }

}

function moveItemAdjacentTo(head, tail, direction) {
    // attempt to move in the same direction as the head, but if not in the same column or row,will need to move diagonal
    // if moving left or right
    if(direction === 'R' || direction === 'L'){
        let horizontalMovement = direction === 'R' ? 1 : -1;
        let verticalMovement = head.y > tail.y ? 1 : -1;
        // already in the same row
        if( head.y === tail.y) {
            return {
                x: tail.x + horizontalMovement,
                y: tail.y
            }
        } else {
            // not in the same row, so move to catch up
            return {
                x: tail.x + horizontalMovement,
                y: tail.y + verticalMovement
            }
        }
    }
    if(direction === 'U' || direction === 'D'){
        let verticalMovement = direction === 'U' ? 1 : -1;
        // 1if(head.x === tail.x)
        let horizontalMovement = head.x > tail.x ? 1 : -1;
        // already in the same col
        if( head.x === tail.x) {
            return {
                x: tail.x,
                y: tail.y + verticalMovement
            }
        } else {
            // not in the same col, so move to catch up
            return {
                x: tail.x + horizontalMovement,
                y: tail.y + verticalMovement
            }
        }
    }
    throw new Error('Hey! The tail encountered a scenario where it could not move?!')
}


/**
 * @returns boolean
 */
function isAdjacent(head, tail) {
    if( head.x === tail.x && head.y === tail.y) {
        // console.log('Items are on top of each other');
        return true;
    }
    // head and tail in the same row
    if(head.y === tail.y) {
        // to the right
        if(head.x === tail.x + 1){
            // console.log('Head is to the right');
            return true;
        }
        // to the left
        if(head.x === tail.x - 1){
            // console.log('Head is to the left');
            return true;
        }
    }
    // head and tail in the same column
    if(head.x === tail.x) {
        // above
        if(head.y === tail.y + 1){
            // console.log('Head is above');
            return true;
        }
        // below
        if(head.y === tail.y - 1){
            // console.log('Head below');
            return true;
        }
    }

    // head is in the row above
    if(head.y === tail.y + 1) {
        if(head.x === tail.x - 1) {
            // console.log('Head is diagonal to tail - top left');
            return true;
        }
        if(head.x === tail.x + 1) {
            // console.log('Head is diagonal to tail - top right');
            return true;
        }
    }

    // head is in the row below
    if(head.y === tail.y - 1) {
        if(head.x === tail.x - 1) {
            // console.log('Head is diagonal to tail - bottom left');
            return true;
        }
        if(head.x === tail.x + 1) {
            // console.log('Head is diagonal to tail - bottom right');
            return true;
        }
    }
    return false

}


const p1_final_value = visitedTailLocations.size;
const expectedMockFinalValue = 13;
console.log('p1_final_value', p1_final_value);
// console.log('expectedMockFinalValue', expectedMockFinalValue);
// console.log('visitedTailLocations', visitedTailLocations);

// console.log('headLocationLog', headLocationLog);
// console.log('tailLocationLog', tailLocationLog);
tailLocationLog.map((data, index) => {
    // console.log(index, data);
})