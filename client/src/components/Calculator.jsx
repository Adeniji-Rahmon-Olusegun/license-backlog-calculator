import { useState } from 'react';
import Summary from './Summary';
import '../styles/calculator.css';
import axios from 'axios';


export default function Calculator() {

    const [ result, setResult] = useState({ 
        totalRes: 0, 
        licenseStatus: '', 
        upperLimit: '', 
        lowerLimit: '',
        licenseFee: 0
    });

    const [ loading, setLoading] = useState(false);

    async function handleSubmission(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = Object.fromEntries(formData.entries());
    
        setLoading(true);

        try {
            // 'https://license-backlog-calculator.onrender.com/api/calculateLicenseFee'
            const response = await axios.post('https://license-backlog-calculator.onrender.com/api/calculateLicenseFee', userData);
            setResult({ ...result, ...response.data });
            console.log(result);
        } catch (error) {
            console.error("Couldn't fetch response")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <section className='calculator'>
                <h2>ROMS License Backlog Calculator</h2>

                <form onSubmit={handleSubmission}>
                    
                    <label htmlFor="licenseType">License Category Type:</label>
                    <select name="licenseType" id="licenseType" required={true} >
                        <option value="" disabled selected>--Choose License Type--</option>
                        <option value="Category A">Category-A</option>
                        <option value="Category B">Category-B</option>
                    </select>

                    <label htmlFor="currentLicenseYear">End of Current License Year:</label>
                    <input type="number" id="currentLicenseYear" name="currentLicenseYear" placeholder='e.g. 2026' min="2026" max="2099" required={true} />

                    <label htmlFor="expiryYear">Previous License Expiry Year:</label>
                    <input type="number" id="expiryYear" name="expiryYear" placeholder='e.g. 1996' min="1000" max="2099" required={true} />

                    <label htmlFor="totalCapacity">Tank Capacity (ltrs.):</label>
                    <input type="number" id="totalCapacity" name="totalCapacity" placeholder='e.g. 120000' required={true}/>

                    <label htmlFor="takeOverFee">Take-Over Fee (if Applicable):</label>
                    <input type="number" id="takeOverFee" name="takeOverFee" defaultValue={0} placeholder='e.g. 50,000,000'/>

                    <button type="submit" className='calculator-button'>Calculate</button>
                </form>
                
            </section>


            <Summary data={result}/>
        </>
    )
}