/* URL of this problem
 * https://leetcode.com/problems/flip-game/description/
 *
 * @param {string} currentState
 * @return {string[]}
 */

var generatePossibleNextMoves = function(currentState) {
    const PossibleStates = [];

    for (let i = 0; i < currentState.length - 1; i++) {
        const CurrentStateArr = [...currentState];

        if (CurrentStateArr[i] === "+" && CurrentStateArr[i + 1] === "+") {
            CurrentStateArr[i] = "-";
            CurrentStateArr[i + 1] = "-";

            PossibleStates.push(CurrentStateArr.join(""));
        }
    }

    return PossibleStates;
};

module.exports = generatePossibleNextMoves;