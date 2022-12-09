console.log('---Advent of Code 2022 #8 ---');
const myParser = require('../utils/inputparser');

let mockInputArray = myParser.parseLinesOfText('./puzzles/8/mock-input.txt');
let inputArray = myParser.parseLinesOfText('./puzzles/8/input.txt');
// switch between mock and real data here
let arrayOfData = inputArray;
console.log(arrayOfData, 'arrayOfData');
let allTrees = arrayOfData.map((row) => row.split(''));
allTrees = allTrees.map(row => {
    return row.map(tree => parseFloat(tree));
})
let visibleTrees = {
    top: [...allTrees[0]],
    left: [],
    right: [],
    bottom: [...allTrees[allTrees.length - 1]],
}
for(let i = 0; i < allTrees.length; i++) {
    visibleTrees.left.push(allTrees[i][0]);
    visibleTrees.right.push(allTrees[i][allTrees[i].length - 1]);
}
console.log('visibleTrees', visibleTrees);
let middleTrees = [];
function findInnerTrees() {
    for(let rowIndex = 0; rowIndex < allTrees.length; rowIndex++) {
        if( (rowIndex === 0) || rowIndex === allTrees.length -1 ) {
            // skip the first and last lines
            continue;
        }
        let currentRowOfTrees = allTrees[rowIndex];
        for( let columnIndex = 0; columnIndex < currentRowOfTrees.length; columnIndex++) {
            if( (columnIndex === 0) || columnIndex === currentRowOfTrees.length - 1 ) {
                // skip the first and last trees (left & right)
                continue;
            }
            let currentTree =  currentRowOfTrees[columnIndex];
            let visibleFromTopEdge = currentTree > visibleTrees.top[columnIndex];
            let visibleFromBottomEdge = currentTree > visibleTrees.bottom[columnIndex];
            let visibleFromLeftEdge = currentTree > visibleTrees.left[rowIndex];
            let visibleFromRightEdge = currentTree > visibleTrees.right[rowIndex];
            console.log(`row: ${rowIndex}, column: ${columnIndex}`);
            console.log('currentTree', currentTree);
            console.log('visibleTrees.left[i]', visibleTrees.left[rowIndex]);



            if(visibleFromLeftEdge) {
                console.log('found a tree that could be visible from the left!', middleTrees);
                let startingTreeIndex = columnIndex - 1;
                if(startingTreeIndex === 0) {
                    console.log('found one on the left edge', currentTree);
                    middleTrees.push(currentTree);
                    continue;
                }
                let notTheTallestTree = false;
                for(let k = startingTreeIndex; k > 0; k--) {
                    // console.log('currentRowOfTrees[k]', currentRowOfTrees[k]);
                    // console.log('currentRowOfTrees[j]', currentRowOfTrees[j]);
                    if(currentRowOfTrees[k] >= currentTree){

                        notTheTallestTree = true;
                        break;
                    }
                }
                if(notTheTallestTree) {
                    //do nothing, it might be visible from another angle
                } else {
                    middleTrees.push(currentTree);
                    continue;
                }
            }
            if(visibleFromRightEdge) {
                // console.log('found a tree that could be visible from the right!', middleTrees);
                let startingTreeIndex = columnIndex + 1;
                if(startingTreeIndex === currentRowOfTrees.length - 1) {
                    middleTrees.push(currentTree);
                    continue;
                }
                let notTheTallestTree = false;
                for(let k = startingTreeIndex; k < currentRowOfTrees.length - 1; k++) {
                    // console.log('currentRowOfTrees[k]', currentRowOfTrees[k]);
                    // console.log('currentRowOfTrees[j]', currentRowOfTrees[j]);
                    if(currentRowOfTrees[k] >= currentTree){

                        notTheTallestTree = true;
                        break;
                    }
                }
                if(notTheTallestTree) {
                    //do nothing, it might be visible from another angle
                } else {
                    middleTrees.push(currentTree);
                    continue;
                }
            }

            if(visibleFromTopEdge) {
                // console.log('found a tree that could be visible from the top', middleTrees);
                let startingTreeIndex = rowIndex - 1;
                if(startingTreeIndex === 0) {
                    middleTrees.push(currentTree);
                    continue;
                }
                let notTheTallestTree = false;
                for(let k = startingTreeIndex; k > 0; k--) {
                    // console.log('currentRowOfTrees[k]', currentRowOfTrees[k]);
                    // console.log('currentRowOfTrees[j]', currentRowOfTrees[j]);
                    if(allTrees[k][columnIndex] >= currentTree){

                        notTheTallestTree = true;
                        break;
                    }
                }
                if(notTheTallestTree) {
                    //do nothing, it might be visible from another angle
                } else {
                    middleTrees.push(currentTree);
                    continue;
                }
            }

            if(visibleFromBottomEdge) {
                // console.log('found a tree that could be visible from the top', middleTrees);
                let startingTreeIndex = rowIndex + 1;
                if(startingTreeIndex === allTrees.length - 1) {
                    middleTrees.push(currentTree);
                    continue;
                }
                let notTheTallestTree = false;
                for(let k = startingTreeIndex; k < allTrees.length; k++) {
                    // console.log('currentRowOfTrees[k]', currentRowOfTrees[k]);
                    // console.log('currentRowOfTrees[j]', currentRowOfTrees[j]);
                    if(allTrees[k][columnIndex] >= currentTree){

                        notTheTallestTree = true;
                        break;
                    }
                }
                if(notTheTallestTree) {
                    //do nothing, it might be visible from another angle
                } else {
                    middleTrees.push(currentTree);
                    continue;
                }
            }

        }

    }
}
findInnerTrees();
console.log('middle trees', middleTrees);
function getTotalTreeCount() {
    // subtract 4 to account for shared trees on the corners
    return middleTrees.length + visibleTrees.top.length + visibleTrees.bottom.length + visibleTrees.left.length + visibleTrees.right.length - 4;
}
let p1_result = getTotalTreeCount();
console.log('p1_result', p1_result);