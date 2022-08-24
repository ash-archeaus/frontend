// import '../transaction.css';

function SentToTable(){
    return(
        <div>
            <h4>Transaction: Sent</h4>
            <table className="sentTable">
                
                <thead>
                    <tr>
                        <th>Receiver Name</th>
                        <th>Account Number </th>
                        <th>Amount sent</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>abc</td>
                        <td>abc123</td>
                        <td id="amountRed">-10000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SentToTable;