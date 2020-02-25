module.exports = function toReadable(number) {
    const digits = new Map([
        [0, "zero"], [1, "one"], [2, "two"], [3, "three"], [4, "four"], [5, "five"], [6, "six"], [7, "seven"], [8, "eight"], [9, "nine"],
        [10, "ten"], [11, "eleven"], [12, "twelve"], [13, "thirteen"], [14, "fourteen"], [15, "fifteen"], [16, "sixteen"], [17, "seventeen"], [18, "eighteen"], [19, "nineteen"],
        [20, "twenty"], [30, "thirty"], [40, "forty"], [50, "fifty"], [60, "sixty"], [70, "seventy"], [80, "eighty"], [90, "ninety"],
        [100, "hundred"],
        [1000, "thousand"]
    ]);
    if (number <= 19) {
        return digits.get(number)
    } else if (number <= 99) {
        if (number % 10 === 0) {
            return digits.get(number)
        } else {
            let ten = parseInt(number / 10) * 10;
            return digits.get(ten) + " " + toReadable(number - ten);
        }
    } else {
        if (number % 100 === 0) {
            // let hundred = number / 100;
            return digits.get(number / 100) + " " + digits.get(100)
        } else {
            let hundred = parseInt(number / 100);
            return digits.get(hundred) + " " + digits.get(100) + " " + toReadable(number - hundred * 100);
        }
    }
}
