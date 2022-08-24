const[search, setSearch] = useState("")

const handleSearch = (event) => {
    setSearch(event.target.value);
};


if(!customers.length){
    var data = {
        nodes: customers.filter((item) =>
          item.name.includes(search)
        ),
      };
}



function getCustoData1(data) {
    console.log(data);
    const rowss = data.map(c => <tr key={c.id}>
        <td>{c.id}</td>
        <td>
            <Popup 
        contentStyle={{width: "800px", 
        background: "white"}} 
        
        trigger={<button id="customerBtn">{c.customer_Name}</button>} >
            <div className='popupDiv'>
                <h3>{c.customer_Name}'s transactions</h3>
                <div>
                    <SentToTable/>
                </div>

                <div>
                    <ReceivedFromTable/>
                </div>

            </div>
            </Popup></td>
        <td>{c.account_Number}</td>
        <td>{c.ifsc}</td>
        <td>{c.amount}</td>
        <td>{c.od}</td>
        <td>{c.location}</td>
    </tr>)
    return rowss
}