
// import '../transaction.css';

function ReceivedFromTable(){
    return(
        <div>
            <h4>Transaction: Received</h4>
            <table className="receivedTable">
                <thead>
                
                    <tr>
                        <th>Sent By</th>
                        <th>Account Number</th>
                        <th>Amount Received</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Arjun</td>
                        <td>xyz999</td>
                        <td id="amountGreen">+3000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ReceivedFromTable;