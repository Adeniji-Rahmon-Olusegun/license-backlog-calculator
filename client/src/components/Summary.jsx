import '../styles/summary.css';

export default function Summary({ data }) {
    
    return (
        
        <section className="summary">
            <h2>Calculation Summary</h2>
            <p className='summary-p'>Total Amount Due:</p>

            <p className='summary-fee'>₦{(data.totalRes).toLocaleString()}</p>
             <hr />
            <p className='summary-result'>Result Data</p>
           
            <table className='summary-table'>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Items</th>
                        <th>Values</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>License Regime</td>
                        <td>{data.licenseStatus}</td>
                    </tr>

                    <tr>
                        <td>2.</td>
                        <td>Volume Range</td>
                        <td>{(data.lowerLimit).toLocaleString()} - {data.upperLimit.toLocaleString()}</td>
                    </tr>

                    <tr>
                        <td>3.</td>
                        <td>Appl. Old Regime Fee</td>
                        <td>₦{(data.licenseFee).toLocaleString() || 0}</td>
                    </tr>
                </tbody>
            </table>
        </section>
  
    )
}