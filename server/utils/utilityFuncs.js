function checkOldOrNew(year) {
    if (year > 2022) {
        return true;
    }

    return false;
}

function calculateYearDifference(startYear, endYear) {
    return endYear - startYear;
}

function oddOREven(num) {
    if (num % 2 === 0) {
        return true;
    }

    return false;
}

function newFeesA(totalCapacity) {
    let val;
    let totalFee;

    val = totalCapacity - 20000;
    val = val / 20000;
    val = val * 10000;

    totalFee = val + 130000;

    return totalFee;
}

function newFeesB(totalCapacity) {
    let val;
    let totalFee;

    val = totalCapacity - 20000;
    val = val / 20000;
    val = val * 5000;

    totalFee = val + 105000;

    return totalFee;
}

function heuristicsB(volume) {
    let licenseFee;
    let signal = true;

    let baseFee = 6000;
    let stepCount = 0;
    let lowerLimit = 20001;
    let upperLimit = 40000;

    if (volume <= 20000) {
        licenseFee = 5000;
        return licenseFee;
    }

    while (signal) {
        if (lowerLimit <= volume && upperLimit >= volume) {
            signal = false;
            licenseFee = baseFee + (stepCount * 1000);
        } else {
            lowerLimit += 20000;
            upperLimit += 20000;
            stepCount += 1;
        }
    }

    return { volume, lowerLimit, upperLimit, licenseFee };
}

function heuristicsA(volume) {
    let licenseFee;
    let signal = true;

    let baseFee = 7000;
    let stepCount = 0;
    let lowerLimit = 10001;
    let upperLimit = 20000;

    if (volume <= 10000) {
        licenseFee = 5000;
        return licenseFee;
    }

    while (signal) {
        if (lowerLimit <= volume && upperLimit >= volume) {
            signal = false;
            licenseFee = baseFee + (stepCount * 1000);
        } else {
            lowerLimit += 10000;
            upperLimit += 10000;
            stepCount += 2;
        }
    }

    return { volume, lowerLimit, upperLimit, licenseFee };
}

// console.log(heuristicsA(29000));


module.exports = {
    checkOldOrNew,
    calculateYearDifference,
    oddOREven,
    newFeesA,
    newFeesB,
    heuristicsB,
    heuristicsA
};