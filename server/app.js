const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { calculateFeeB } = require('./utils/categoryB');
const { calculateFeeA } = require('./utils/categoryA')
const { Result } = require('express-validator');

const app = express();

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

app.post('/api/calculateLicenseFee', (req, res) => {
    let amountToBePaid;
    let { licenseType, currentLicenseYear, expiryYear, totalCapacity, takeOverFee } = req.body;

    currentLicenseYear = parseInt(currentLicenseYear);
    expiryYear = parseInt(expiryYear);
    totalCapacity = parseInt(totalCapacity);
    takeOverFee = parseInt(takeOverFee);

    console.log(req.body)
    console.log(currentLicenseYear, expiryYear, totalCapacity, takeOverFee);
    
    if (licenseType && licenseType === "Category B") {
        amountToBePaid = calculateFeeB(currentLicenseYear, expiryYear, totalCapacity, takeOverFee)
    } else if (licenseType && licenseType === "Category A") {
        amountToBePaid = calculateFeeA(currentLicenseYear, expiryYear, totalCapacity, takeOverFee)
    }
       
    console.log(amountToBePaid, );
    res.json({ ...amountToBePaid });
})

const port = 5000;

app.listen(port, () => console.log(`Running on port ${port}`))