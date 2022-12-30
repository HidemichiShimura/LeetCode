const generatePossibleNextMoves = require("./293.flip-game");

test("Return an array of all the possible states after one valid move", () => {
    expect(generatePossibleNextMoves("++++")).toEqual(["--++","+--+","++--"]);
});

test("Return an empty array if the input currentState is made of only one of '+'", () => {
    expect(generatePossibleNextMoves("+")).toEqual([]);
});

test("Return an empty array if the input currentState is an empty string", () => {
    expect(generatePossibleNextMoves("")).toEqual([]);
});

test("Return an empty array if the input currentState comprises only '-", () => {
    expect(generatePossibleNextMoves("----")).toEqual([]);
});