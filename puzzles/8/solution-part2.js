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
let allTreeScores = []
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

            // console.log(`row: ${rowIndex}, column: ${columnIndex}`);
            // console.log('currentTree', currentTree);
            // console.log('visibleTrees.left[i]', visibleTrees.left[rowIndex]);
            let currentViews = {
                top: 1,
                bottom: 1,
                right: 1,
                left: 1
            };

            // left
            let startingTreeIndexL = columnIndex - 1;
            if(startingTreeIndexL !== 0) {
                for(let k = startingTreeIndexL; k > 0; k--) {
                    // console.log('currentRowOfTrees[k]', currentRowOfTrees[k]);
                    // console.log('currentRowOfTrees[j]', currentRowOfTrees[j]);
                    if(currentRowOfTrees[k] >= currentTree){
                        break;
                    } else {
                        currentViews.left +=1;
                    }
                }
            }

            // right
            let startingTreeIndexR = columnIndex + 1;
            if(startingTreeIndexR !== currentRowOfTrees.length - 1) {
                for(let k = startingTreeIndexR; k < currentRowOfTrees.length - 1; k++) {
                    // console.log('currentRowOfTrees[k]', currentRowOfTrees[k]);
                    // console.log('currentRowOfTrees[j]', currentRowOfTrees[j]);
                    if(currentRowOfTrees[k] >= currentTree){
                        break;
                    } else {
                        currentViews.right +=1;
                    }
                }
            }

            // top
            let startingTreeIndexT = rowIndex - 1;
            if(startingTreeIndexT !== 0) {
                for(let k = startingTreeIndexT; k > 0; k--) {
                    if(allTrees[k][columnIndex] >= currentTree){
                        break;
                    } else {
                        currentViews.top += 1;
                    }
                }
            }
            // bottom
            let startingTreeIndexB = rowIndex + 1;
            if(startingTreeIndexB !== allTrees.length - 1) {
                for(let k = startingTreeIndexB; k < allTrees.length; k++) {
                    if(allTrees[k][columnIndex] >= currentTree){
                        break;
                    } else {
                        currentViews.bottom += 1;
                    }
                }
            }
            const scenicScore = currentViews.top * currentViews.left * currentViews.bottom * currentViews.right;
            allTreeScores.push(scenicScore);

        }

    }
}
findInnerTrees();
console.log('allTreeScores', allTreeScores);
let orderedList = allTreeScores.sort((a, b) => {
    if(a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
})
console.log('lo', orderedList[allTreeScores.length - 1]);
console.log('hi', orderedList[0]);
let p2_result = orderedList[0];
console.log('p2_result', p2_result);