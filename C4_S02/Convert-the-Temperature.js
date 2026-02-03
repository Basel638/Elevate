1/**
2 * @param {number} celsius
3 * @return {number[]}
4 */
5var convertTemperature = function(celsius) {
6    let kelvin = celsius + 273.15;
7
8    let fahrenheit = (celsius * 1.80) + 32;
9
10    return [kelvin, fahrenheit];
11};