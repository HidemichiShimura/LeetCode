const convertTemperature = require("./2469.convert-the-temperature");

test("Return the array Ans with temperatures converted to Kelvin and Fahrenheit", () => {
    expect(convertTemperature(36.50)).toEqual([309.65000, 97.70000]);
});

test("Return Ans with two Infinity if the input celcius is Infinity", () => {
    expect(convertTemperature(Infinity)).toEqual([Infinity, Infinity]);
});

test("Return Ans with two -Infinity if the input celcius is -Infinity", () => {
    expect(convertTemperature(-Infinity)).toEqual([-Infinity, -Infinity]);
});