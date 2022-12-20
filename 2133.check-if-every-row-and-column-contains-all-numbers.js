/* URL of this problem
 * https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/description/
 *
 * @param {number[][]} matrix
 * @return {boolean}
 */

var checkValid = function(matrix) {
    const ValidNum = createValidNum(matrix.length); // Create a string of integers from 1 to matrix.length(inclusive)
    const Columns = createColumns(matrix); // Create an array of columns of matrix

    for (let i = 0; i < matrix.length; i++) {
        const SortedRow = matrix[i].sort((a, b) => a - b);
        const SortedColumn = Columns[i].sort((a, b) => a - b);

        if (ValidNum !== SortedRow.join("") || ValidNum !== SortedColumn.join("")) {
            return false;
        }
    }
    return true;
};

function createColumns(arr) {
    const Columns = [];

    for (let i = 0; i < arr.length; i++) {
        const Column = [];

        for (let j = 0; j < arr.length; j++) {
            Column.push(arr[j][i]);
        }
        Columns.push(Column);
    }

    return Columns;
}

function createValidNum(num) {
    let ValidNum = "";

    for (let i = 1; i <= num; i++) {
        ValidNum += i;
    }

    return ValidNum;
}

module.exports = checkValid;