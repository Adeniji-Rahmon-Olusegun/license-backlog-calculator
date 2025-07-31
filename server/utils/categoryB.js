const { checkOldOrNew, oddOREven, calculateYearDifference, newFeesB, heuristicsB} = require('./utilityFuncs');

function calculateFeeB(currentYear, expiryDate, totalCapacity, takeOverFee) {
    let resOld = 0;
    let resNew = 0;
    let totalRes = 0;
    let licenseStatus = "New Regime";
    let takeOverFeeVal = (takeOverFee * 0.05) || 0;

    let { lowerLimit, upperLimit, licenseFee } = heuristicsB(totalCapacity);

    if (!checkOldOrNew(expiryDate)) {
        licenseStatus = "Old Regime";
        let oldYears = calculateYearDifference(expiryDate + 1, 2022);

        if (oddOREven(oldYears)) {
            resOld = (oldYears / 2) * (41500 + licenseFee) + (41500 + licenseFee)/2;
        } else {
            resOld = Math.round(oldYears / 2) * (41500 + licenseFee);
        }
    }

    let newYears = 0;
    
    if (expiryDate >= 2023 ) {
        newYears = calculateYearDifference(expiryDate + 1, currentYear);
    } else {
        newYears = calculateYearDifference(2023, currentYear);
    }
    
    if (oddOREven(newYears)) {
        console.log("yeah new");
        let newFee = newFeesB(totalCapacity)
        resNew = ((newYears / 2) * newFee) + (newFee / 2);
    } else {
        let newFee = newFeesB(totalCapacity);
        resNew = Math.round(newYears / 2) * newFee;
    }

    totalRes = resOld + resNew + takeOverFeeVal;

    if (licenseStatus ===  "New Regime") {
        lowerLimit = "";
        upperLimit = "";
        licenseFee = "";
    }

    return { totalRes, licenseStatus, upperLimit, lowerLimit, licenseFee };
}

// console.log(calculateFeeB(2026, 2015, 132000));

module.exports = {calculateFeeB};