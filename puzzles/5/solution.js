console.log('---Advent of Code 2022 #5 ---');
const fs = require('fs');
const stacksInput =
    '[D]                     [N] [F]    \n' +
    '[H] [F]             [L] [J] [H]    \n' +
    '[R] [H]             [F] [V] [G] [H]\n' +
    '[Z] [Q]         [Z] [W] [L] [J] [B]\n' +
    '[S] [W] [H]     [B] [H] [D] [C] [M]\n' +
    '[P] [R] [S] [G] [J] [J] [W] [Z] [V]\n' +
    '[W] [B] [V] [F] [G] [T] [T] [T] [P]\n' +
    '[Q] [V] [C] [H] [P] [Q] [Z] [D] [W]\n' +
    ' 1   2   3   4   5   6   7   8   9 ';

const instructionsInput =
    'move 1 from 3 to 9\n' +
    'move 2 from 2 to 1\n' +
    'move 3 from 5 to 4\n' +
    'move 1 from 1 to 8\n' +
    'move 1 from 3 to 9\n' +
    'move 1 from 5 to 7\n' +
    'move 1 from 5 to 3\n' +
    'move 4 from 4 to 2\n' +
    'move 2 from 3 to 4\n' +
    'move 1 from 3 to 2\n' +
    'move 6 from 1 to 5\n' +
    'move 1 from 4 to 3\n' +
    'move 1 from 3 to 9\n' +
    'move 4 from 2 to 4\n' +
    'move 4 from 8 to 7\n' +
    'move 3 from 2 to 6\n' +
    'move 1 from 2 to 7\n' +
    'move 5 from 5 to 6\n' +
    'move 1 from 5 to 8\n' +
    'move 5 from 8 to 7\n' +
    'move 7 from 4 to 6\n' +
    'move 15 from 6 to 4\n' +
    'move 1 from 8 to 7\n' +
    'move 1 from 1 to 5\n' +
    'move 1 from 2 to 4\n' +
    'move 2 from 4 to 8\n' +
    'move 1 from 5 to 2\n' +
    'move 5 from 6 to 4\n' +
    'move 2 from 2 to 1\n' +
    'move 1 from 9 to 4\n' +
    'move 1 from 6 to 9\n' +
    'move 3 from 9 to 3\n' +
    'move 3 from 4 to 3\n' +
    'move 1 from 6 to 1\n' +
    'move 5 from 3 to 4\n' +
    'move 2 from 8 to 5\n' +
    'move 1 from 3 to 6\n' +
    'move 1 from 6 to 2\n' +
    'move 1 from 2 to 8\n' +
    'move 6 from 4 to 2\n' +
    'move 1 from 2 to 7\n' +
    'move 1 from 5 to 3\n' +
    'move 4 from 9 to 3\n' +
    'move 1 from 9 to 1\n' +
    'move 3 from 1 to 6\n' +
    'move 1 from 9 to 7\n' +
    'move 14 from 7 to 6\n' +
    'move 1 from 8 to 3\n' +
    'move 4 from 2 to 6\n' +
    'move 3 from 3 to 8\n' +
    'move 9 from 4 to 9\n' +
    'move 1 from 1 to 5\n' +
    'move 2 from 5 to 8\n' +
    'move 3 from 8 to 2\n' +
    'move 4 from 2 to 6\n' +
    'move 1 from 3 to 9\n' +
    'move 10 from 6 to 1\n' +
    'move 5 from 9 to 8\n' +
    'move 1 from 9 to 3\n' +
    'move 6 from 1 to 8\n' +
    'move 3 from 7 to 4\n' +
    'move 2 from 4 to 5\n' +
    'move 2 from 9 to 8\n' +
    'move 15 from 8 to 3\n' +
    'move 3 from 7 to 9\n' +
    'move 8 from 4 to 3\n' +
    'move 2 from 5 to 9\n' +
    'move 6 from 6 to 5\n' +
    'move 6 from 5 to 8\n' +
    'move 1 from 7 to 8\n' +
    'move 6 from 9 to 2\n' +
    'move 5 from 2 to 4\n' +
    'move 6 from 3 to 5\n' +
    'move 5 from 5 to 8\n' +
    'move 1 from 5 to 7\n' +
    'move 1 from 9 to 7\n' +
    'move 2 from 6 to 4\n' +
    'move 12 from 8 to 2\n' +
    'move 7 from 2 to 4\n' +
    'move 3 from 7 to 5\n' +
    'move 3 from 5 to 7\n' +
    'move 3 from 7 to 9\n' +
    'move 2 from 9 to 7\n' +
    'move 1 from 9 to 3\n' +
    'move 2 from 7 to 4\n' +
    'move 3 from 1 to 9\n' +
    'move 4 from 6 to 5\n' +
    'move 6 from 2 to 8\n' +
    'move 14 from 4 to 9\n' +
    'move 7 from 9 to 6\n' +
    'move 9 from 9 to 2\n' +
    'move 1 from 5 to 8\n' +
    'move 5 from 6 to 3\n' +
    'move 3 from 1 to 9\n' +
    'move 3 from 8 to 9\n' +
    'move 1 from 8 to 3\n' +
    'move 5 from 2 to 5\n' +
    'move 1 from 4 to 9\n' +
    'move 2 from 6 to 1\n' +
    'move 2 from 3 to 6\n' +
    'move 3 from 8 to 3\n' +
    'move 2 from 6 to 3\n' +
    'move 1 from 4 to 9\n' +
    'move 4 from 3 to 6\n' +
    'move 7 from 6 to 9\n' +
    'move 10 from 9 to 2\n' +
    'move 10 from 3 to 2\n' +
    'move 7 from 2 to 8\n' +
    'move 2 from 1 to 7\n' +
    'move 13 from 3 to 7\n' +
    'move 7 from 5 to 1\n' +
    'move 1 from 9 to 6\n' +
    'move 4 from 8 to 4\n' +
    'move 2 from 3 to 2\n' +
    'move 4 from 4 to 6\n' +
    'move 1 from 3 to 4\n' +
    'move 5 from 6 to 5\n' +
    'move 3 from 5 to 7\n' +
    'move 12 from 2 to 5\n' +
    'move 7 from 5 to 6\n' +
    'move 2 from 8 to 3\n' +
    'move 7 from 6 to 2\n' +
    'move 3 from 9 to 6\n' +
    'move 1 from 6 to 7\n' +
    'move 1 from 4 to 9\n' +
    'move 2 from 7 to 6\n' +
    'move 13 from 7 to 4\n' +
    'move 3 from 7 to 5\n' +
    'move 1 from 9 to 6\n' +
    'move 12 from 4 to 3\n' +
    'move 1 from 8 to 1\n' +
    'move 2 from 6 to 4\n' +
    'move 1 from 7 to 9\n' +
    'move 2 from 9 to 8\n' +
    'move 12 from 3 to 5\n' +
    'move 1 from 8 to 2\n' +
    'move 15 from 5 to 6\n' +
    'move 2 from 4 to 6\n' +
    'move 1 from 9 to 6\n' +
    'move 5 from 5 to 4\n' +
    'move 4 from 4 to 2\n' +
    'move 2 from 1 to 5\n' +
    'move 4 from 1 to 5\n' +
    'move 1 from 8 to 6\n' +
    'move 7 from 5 to 2\n' +
    'move 22 from 2 to 3\n' +
    'move 9 from 6 to 3\n' +
    'move 1 from 1 to 8\n' +
    'move 1 from 8 to 7\n' +
    'move 23 from 3 to 6\n' +
    'move 2 from 2 to 4\n' +
    'move 1 from 7 to 8\n' +
    'move 1 from 8 to 2\n' +
    'move 19 from 6 to 9\n' +
    'move 2 from 2 to 4\n' +
    'move 4 from 4 to 6\n' +
    'move 13 from 6 to 8\n' +
    'move 12 from 9 to 1\n' +
    'move 2 from 5 to 9\n' +
    'move 2 from 4 to 8\n' +
    'move 1 from 2 to 7\n' +
    'move 1 from 7 to 1\n' +
    'move 4 from 6 to 2\n' +
    'move 10 from 1 to 9\n' +
    'move 1 from 6 to 7\n' +
    'move 11 from 8 to 2\n' +
    'move 6 from 3 to 6\n' +
    'move 1 from 7 to 2\n' +
    'move 1 from 1 to 8\n' +
    'move 2 from 6 to 7\n' +
    'move 7 from 6 to 3\n' +
    'move 9 from 3 to 1\n' +
    'move 7 from 9 to 6\n' +
    'move 1 from 8 to 7\n' +
    'move 4 from 2 to 6\n' +
    'move 1 from 8 to 3\n' +
    'move 6 from 6 to 5\n' +
    'move 9 from 9 to 3\n' +
    'move 5 from 6 to 1\n' +
    'move 1 from 7 to 8\n' +
    'move 2 from 8 to 4\n' +
    'move 1 from 4 to 2\n' +
    'move 1 from 4 to 5\n' +
    'move 2 from 5 to 6\n' +
    'move 1 from 6 to 9\n' +
    'move 9 from 1 to 4\n' +
    'move 4 from 4 to 6\n' +
    'move 2 from 4 to 7\n' +
    'move 7 from 2 to 8\n' +
    'move 5 from 6 to 7\n' +
    'move 6 from 3 to 8\n' +
    'move 8 from 1 to 9\n' +
    'move 3 from 5 to 2\n' +
    'move 2 from 3 to 9\n' +
    'move 3 from 9 to 4\n' +
    'move 7 from 2 to 3\n' +
    'move 1 from 7 to 2\n' +
    'move 10 from 3 to 2\n' +
    'move 6 from 9 to 4\n' +
    'move 1 from 3 to 1\n' +
    'move 1 from 1 to 8\n' +
    'move 4 from 8 to 5\n' +
    'move 10 from 8 to 4\n' +
    'move 2 from 8 to 9\n' +
    'move 7 from 4 to 9\n' +
    'move 6 from 2 to 6\n' +
    'move 3 from 6 to 5\n' +
    'move 4 from 4 to 9\n' +
    'move 8 from 7 to 5\n' +
    'move 1 from 9 to 2\n' +
    'move 7 from 2 to 1\n' +
    'move 4 from 9 to 8\n' +
    'move 2 from 6 to 3\n' +
    'move 2 from 3 to 2\n' +
    'move 13 from 5 to 7\n' +
    'move 5 from 4 to 9\n' +
    'move 5 from 1 to 7\n' +
    'move 3 from 5 to 8\n' +
    'move 17 from 7 to 2\n' +
    'move 15 from 2 to 6\n' +
    'move 15 from 9 to 5\n' +
    'move 1 from 9 to 5\n' +
    'move 4 from 8 to 6\n' +
    'move 1 from 4 to 6\n' +
    'move 5 from 4 to 7\n' +
    'move 5 from 2 to 7\n' +
    'move 18 from 6 to 2\n' +
    'move 2 from 7 to 6\n' +
    'move 10 from 2 to 8\n' +
    'move 2 from 2 to 3\n' +
    'move 11 from 8 to 7\n' +
    'move 7 from 7 to 5\n' +
    'move 9 from 7 to 5\n' +
    'move 3 from 7 to 5\n' +
    'move 2 from 1 to 7\n' +
    'move 4 from 2 to 1\n' +
    'move 30 from 5 to 1\n' +
    'move 1 from 3 to 1\n' +
    'move 35 from 1 to 9\n' +
    'move 2 from 2 to 5\n' +
    'move 2 from 8 to 3\n' +
    'move 20 from 9 to 2\n' +
    'move 3 from 7 to 9\n' +
    'move 1 from 3 to 6\n' +
    'move 5 from 5 to 3\n' +
    'move 18 from 2 to 5\n' +
    'move 4 from 5 to 8\n' +
    'move 7 from 9 to 7\n' +
    'move 1 from 6 to 2\n' +
    'move 3 from 8 to 5\n' +
    'move 6 from 3 to 5\n' +
    'move 3 from 7 to 4\n' +
    'move 2 from 2 to 3\n' +
    'move 1 from 4 to 5\n' +
    'move 2 from 4 to 5\n' +
    'move 4 from 7 to 2\n' +
    'move 26 from 5 to 6\n' +
    'move 2 from 2 to 7\n' +
    'move 1 from 2 to 9\n' +
    'move 1 from 7 to 8\n' +
    'move 1 from 5 to 3\n' +
    'move 2 from 8 to 3\n' +
    'move 11 from 9 to 3\n' +
    'move 6 from 3 to 4\n' +
    'move 27 from 6 to 4\n' +
    'move 33 from 4 to 3\n' +
    'move 4 from 6 to 8\n' +
    'move 1 from 2 to 8\n' +
    'move 1 from 7 to 3\n' +
    'move 4 from 8 to 9\n' +
    'move 1 from 8 to 6\n' +
    'move 34 from 3 to 8\n' +
    'move 1 from 8 to 5\n' +
    'move 1 from 2 to 9\n' +
    'move 8 from 3 to 9\n' +
    'move 3 from 5 to 4\n' +
    'move 1 from 6 to 5\n' +
    'move 27 from 8 to 9\n' +
    'move 1 from 3 to 4\n' +
    'move 1 from 5 to 7\n' +
    'move 3 from 8 to 1\n' +
    'move 11 from 9 to 1\n' +
    'move 1 from 7 to 5\n' +
    'move 11 from 9 to 3\n' +
    'move 1 from 5 to 1\n' +
    'move 1 from 8 to 7\n' +
    'move 2 from 9 to 2\n' +
    'move 1 from 2 to 1\n' +
    'move 1 from 2 to 7\n' +
    'move 2 from 8 to 2\n' +
    'move 6 from 3 to 8\n' +
    'move 1 from 4 to 2\n' +
    'move 7 from 1 to 2\n' +
    'move 1 from 7 to 1\n' +
    'move 19 from 9 to 1\n' +
    'move 3 from 2 to 9\n' +
    'move 10 from 1 to 4\n' +
    'move 2 from 9 to 1\n' +
    'move 1 from 7 to 9\n' +
    'move 7 from 1 to 6\n' +
    'move 10 from 4 to 3\n' +
    'move 14 from 1 to 7\n' +
    'move 2 from 9 to 1\n' +
    'move 3 from 4 to 6\n' +
    'move 9 from 7 to 6\n' +
    'move 1 from 3 to 5\n' +
    'move 4 from 8 to 5\n' +
    'move 10 from 6 to 8\n' +
    'move 3 from 5 to 6\n' +
    'move 10 from 3 to 4\n' +
    'move 4 from 3 to 7\n' +
    'move 1 from 5 to 9\n' +
    'move 2 from 7 to 9\n' +
    'move 1 from 1 to 9\n' +
    'move 6 from 2 to 4\n' +
    'move 1 from 5 to 3\n' +
    'move 11 from 4 to 9\n' +
    'move 3 from 4 to 9\n' +
    'move 1 from 2 to 7\n' +
    'move 2 from 3 to 5\n' +
    'move 1 from 3 to 2\n' +
    'move 7 from 7 to 2\n' +
    'move 2 from 5 to 8\n' +
    'move 8 from 2 to 1\n' +
    'move 2 from 6 to 8\n' +
    'move 9 from 6 to 8\n' +
    'move 3 from 8 to 2\n' +
    'move 3 from 2 to 6\n' +
    'move 9 from 9 to 5\n' +
    'move 3 from 5 to 8\n' +
    'move 5 from 9 to 4\n' +
    'move 3 from 6 to 4\n' +
    'move 1 from 6 to 3\n' +
    'move 3 from 1 to 6\n' +
    'move 3 from 6 to 9\n' +
    'move 17 from 8 to 5\n' +
    'move 12 from 5 to 4\n' +
    'move 21 from 4 to 3\n' +
    'move 1 from 4 to 9\n' +
    'move 7 from 5 to 4\n' +
    'move 22 from 3 to 7\n' +
    'move 3 from 1 to 8\n' +
    'move 3 from 9 to 1\n' +
    'move 4 from 4 to 6\n' +
    'move 1 from 6 to 2\n' +
    'move 3 from 4 to 1\n' +
    'move 1 from 6 to 7\n' +
    'move 4 from 9 to 3\n' +
    'move 2 from 5 to 7\n' +
    'move 1 from 9 to 6\n' +
    'move 2 from 6 to 9\n' +
    'move 8 from 7 to 9\n' +
    'move 1 from 6 to 2\n' +
    'move 1 from 9 to 3\n' +
    'move 4 from 3 to 4\n' +
    'move 14 from 7 to 4\n' +
    'move 1 from 3 to 2\n' +
    'move 3 from 7 to 8\n' +
    'move 12 from 8 to 9\n' +
    'move 8 from 4 to 1\n' +
    'move 1 from 7 to 4\n' +
    'move 2 from 5 to 1\n' +
    'move 3 from 2 to 9\n' +
    'move 17 from 9 to 3\n' +
    'move 6 from 9 to 1\n' +
    'move 1 from 9 to 2\n' +
    'move 13 from 3 to 9\n' +
    'move 4 from 3 to 1\n' +
    'move 3 from 9 to 1\n' +
    'move 22 from 1 to 9\n' +
    'move 1 from 8 to 1\n' +
    'move 6 from 9 to 5\n' +
    'move 4 from 1 to 9\n' +
    'move 3 from 1 to 9\n' +
    'move 4 from 4 to 8\n' +
    'move 4 from 4 to 2\n' +
    'move 1 from 4 to 3\n' +
    'move 3 from 8 to 9\n' +
    'move 1 from 3 to 4\n' +
    'move 1 from 1 to 3\n' +
    'move 1 from 8 to 2\n' +
    'move 1 from 5 to 8\n' +
    'move 4 from 2 to 1\n' +
    'move 1 from 8 to 7\n' +
    'move 10 from 9 to 6\n' +
    'move 1 from 7 to 9\n' +
    'move 1 from 2 to 3\n' +
    'move 1 from 6 to 1\n' +
    'move 3 from 5 to 7\n' +
    'move 1 from 8 to 7\n' +
    'move 1 from 6 to 1\n' +
    'move 1 from 2 to 4\n' +
    'move 1 from 5 to 2\n' +
    'move 19 from 9 to 2\n' +
    'move 1 from 4 to 7\n' +
    'move 1 from 3 to 7\n' +
    'move 3 from 7 to 9\n' +
    'move 4 from 1 to 2\n' +
    'move 10 from 9 to 4\n' +
    'move 1 from 5 to 8\n' +
    'move 3 from 6 to 4\n' +
    'move 1 from 3 to 4\n' +
    'move 10 from 2 to 8\n' +
    'move 12 from 2 to 5\n' +
    'move 3 from 5 to 9\n' +
    'move 5 from 6 to 5\n' +
    'move 5 from 1 to 4\n' +
    'move 22 from 4 to 3\n' +
    'move 3 from 8 to 7\n' +
    'move 1 from 7 to 2\n' +
    'move 3 from 2 to 9\n' +
    'move 19 from 3 to 5\n' +
    'move 2 from 7 to 8\n' +
    'move 7 from 5 to 6\n' +
    'move 5 from 9 to 6\n' +
    'move 1 from 9 to 3\n' +
    'move 16 from 5 to 1\n' +
    'move 2 from 3 to 1\n' +
    'move 3 from 7 to 3\n' +
    'move 7 from 8 to 4\n' +
    'move 2 from 8 to 1\n' +
    'move 5 from 5 to 9\n' +
    'move 1 from 5 to 2\n' +
    'move 1 from 2 to 3\n' +
    'move 1 from 8 to 5\n' +
    'move 4 from 5 to 7\n' +
    'move 2 from 3 to 8\n' +
    'move 2 from 1 to 5\n' +
    'move 4 from 7 to 6\n' +
    'move 6 from 4 to 7\n' +
    'move 4 from 9 to 8\n' +
    'move 14 from 6 to 7\n' +
    'move 8 from 1 to 7\n' +
    'move 7 from 1 to 3\n' +
    'move 3 from 5 to 9\n' +
    'move 28 from 7 to 5\n' +
    'move 1 from 1 to 8\n' +
    'move 4 from 8 to 3\n' +
    'move 9 from 3 to 1\n' +
    'move 1 from 9 to 5\n' +
    'move 6 from 3 to 2\n' +
    'move 10 from 1 to 6\n' +
    'move 1 from 1 to 9\n' +
    'move 5 from 9 to 7\n' +
    'move 14 from 5 to 3\n' +
    'move 1 from 4 to 1\n' +
    'move 1 from 7 to 2\n' +
    'move 1 from 7 to 1\n' +
    'move 1 from 1 to 7\n' +
    'move 3 from 8 to 5\n' +
    'move 4 from 6 to 3\n' +
    'move 3 from 7 to 2\n' +
    'move 15 from 3 to 6\n' +
    'move 16 from 5 to 7\n' +
    'move 4 from 2 to 8\n' +
    'move 1 from 3 to 1\n' +
    'move 5 from 7 to 3\n' +
    'move 12 from 6 to 4\n' +
    'move 4 from 8 to 5\n' +
    'move 1 from 4 to 2\n' +
    'move 2 from 5 to 3\n' +
    'move 8 from 6 to 3\n' +
    'move 7 from 4 to 5\n' +
    'move 9 from 7 to 6\n' +
    'move 1 from 7 to 9\n' +
    'move 1 from 1 to 9\n' +
    'move 1 from 1 to 9\n' +
    'move 5 from 2 to 8\n' +
    'move 5 from 8 to 2\n' +
    'move 11 from 5 to 9\n' +
    'move 1 from 4 to 2\n' +
    'move 4 from 9 to 6\n' +
    'move 12 from 3 to 7\n' +
    'move 3 from 4 to 9\n' +
    'move 14 from 6 to 2\n' +
    'move 2 from 2 to 4\n' +
    'move 2 from 3 to 5\n' +
    'move 10 from 7 to 2\n' +
    'move 1 from 4 to 8\n' +
    'move 1 from 2 to 7\n' +
    'move 28 from 2 to 9\n' +
    'move 4 from 7 to 5\n' +
    'move 1 from 2 to 4\n' +
    'move 6 from 5 to 1\n' +
    'move 2 from 4 to 3\n' +
    'move 1 from 8 to 1\n' +
    'move 40 from 9 to 1\n' +
    'move 10 from 1 to 6\n' +
    'move 5 from 3 to 5\n' +
    'move 1 from 9 to 8\n' +
    'move 3 from 6 to 7\n' +
    'move 11 from 1 to 2\n' +
    'move 9 from 2 to 3\n' +
    'move 3 from 5 to 1\n' +
    'move 4 from 7 to 1\n' +
    'move 2 from 2 to 4\n' +
    'move 2 from 5 to 8\n' +
    'move 19 from 1 to 7\n' +
    'move 8 from 3 to 2\n' +
    'move 14 from 1 to 8\n' +
    'move 14 from 7 to 1\n' +
    'move 4 from 6 to 5\n' +
    'move 1 from 1 to 9'
const instructions = instructionsInput.split('\n');
const moveKey = 'move ';
const fromKey = 'from ';
const toKey = 'to ';
function parseInstructions(data) {
    return data.map(line => {
        let moveIndex = line.indexOf(moveKey) + moveKey.length;
        let fromIndex = line.indexOf(fromKey) + fromKey.length;
        let toIndex = line.indexOf(toKey) + toKey.length;
       return {
           // support 2 character numbers
           amount: parseFloat(line.charAt(moveIndex) + line.charAt(moveIndex + 1)),
           from: parseFloat(line.charAt(fromIndex)) - 1,
           to: parseFloat(line.charAt(toIndex)) - 1,
        }
    })
}
const parsedInstructions = parseInstructions(instructions);
const rows = stacksInput.split('\n');
let columns = [[], [], [], [], [], [], [], [], []];
rows.forEach(stackString => {
        for (let i = 0, column = 0; i < stackString.length; i += 4, column += 1) {
            if(stackString[ i + 1] !== ' ') {
                columns[column].push(stackString[ i + 1]);
            }
        }
    }
)

columns = columns.map(items => {
    items.pop();
    // items.reverse();
    return items;
});
console.log(columns);

const mockParsedInstructions = parsedInstructions.slice(0, 51);
console.log('parsedInstructions', parsedInstructions);
fs.writeFile('./myparsedinstructions.txt', JSON.stringify(parsedInstructions), err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});
fs.writeFile('./mystacks.txt', JSON.stringify(columns), err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});
let p1_stacks = JSON.parse(JSON.stringify(columns));
// for (let { amount, from, to } of parsedInstructions) {
//     for (let c = 0; c < amount; c++) {
//         let crate = p1_stacks[from].pop();
//         p1_stacks[to].push(crate);
//     }
// }
parsedInstructions.forEach((command) => {

    // for (let c = 0; c < command.amount; c++) {
    //     let crate = columns[command.from ].pop();
    //     columns[command.to].push(crate);
    // }
    let items = p1_stacks[command.from].splice(0, command.amount);
    p1_stacks[command.to] = [...items, ...p1_stacks[command.to]];
});
console.log('final columns', p1_stacks);
let finalArrangement = '';
p1_stacks.forEach(col => {
    if(col.length > 0) {
        finalArrangement += col[0];
    } else {
        // finalArrangement += ' ';
    }

})
console.log('finalArrangement', finalArrangement);