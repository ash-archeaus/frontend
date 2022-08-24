import { Link,useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import '../styles/CustList.css';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SentToTable from './vishnu/SentToTable';
import ReceivedFromTable from './vishnu/ReceivedFromTable';



function CustomerDetails(){
    /* Form Post*/
    const navigate = useNavigate()
    const [customer_Name, setName] = useState("")
    const [account_Number, setAccNo] = useState("")
    const [ifsc, setIfsc] = useState("")
    const [amount, setAmount] = useState("")
    const [od, setOd] = useState("")
    const [location, setLoc] = useState("")

    const[search, setSearch] = useState("")

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    

   

    // const handleSearch =(e)=>{
    //     setSearch(e.target.value)
    //     const searchh = e.target.value
    //     axios.get("http://localhost:8080/CustomerGet", searchh)
    //     .then(res => {console.log(res.data)})
    //     .catch(err => {console.alert("Nah Mate!!!")})       
    // }

    


    const handleNameChange = (e) =>{
        setName(e.target.value)
    }

    const handleAccChange = (e) =>{
        setAccNo(e.target.value)
    }

    const handleIfscChange = (e) =>{
        setIfsc(e.target.value)
    }

    const handleAmountChange = (e) =>{
        setAmount(e.target.value)
    }

    const handleOdChange = (e) =>{
        setOd(e.target.value)
    }

    const handleLocChange = (e) =>{
        setLoc(e.target.value)
    }


    const submitCustomer =() => {
        const custoo = {customer_Name, account_Number, ifsc, amount, od, location}
        
        console.log("New Customers",custoo)
                //NEED TO WORK WITH THIS ADDING 
        // axios.post("http://localhost:8080/CustomerPost", custoo)
        // .then(res => { navigate("/CustomerList")})
        // .catch(err => {console.alert("Nah Mate!!!")})   

    }
    /* Form Post End*/

    /* Search by Name */
    // const searchUser =(customer_Name)=>{
    //     axios.get("http://localhost:8080/CustomerSearch/"+customer_Name)
    //     .then(res=> {
    //         const searchuser = customers.filter(d => d.customer_Name !== customer_Name)
    //         setSearch(searchuser)
    //     })
    //     .catch(err=>console.log("Some error occurred"))
    // }
    /*End of Search by Name */


    const [customers, setCustomers] = useState([])
 
    // accountholdername: "ANUPAMA N"
    // clearbalance: 84560
    // customeraddress: "H.No 123, road no 321"
    // customercity: "delhi"
    // customerid: "13645221972859"
    // customertype: "Individual"
    // overdraftflag: 0

    useEffect(()=>{
        axios.get("http://localhost:8080/customers/CustomerGet")
            .then(res=>{setCustomers(res.data)})
            .catch(err=>console.log("Some error occurred"))
            
        },[])

        

    function getCustoData(){
        let sno=1;
        const rowss = customers.filter((val)=>{
            if(search===""){
                return val;
            }
            else if(val.accountholdername.toLowerCase().includes(search.toLowerCase())){
                return val;
            }
        })
        .map(c => <tr key={c.id}>
            <td>{sno++}</td>
            <td>
                <Popup 
            contentStyle={{width: "800px", 
            background: "white"}} 
            
            trigger={<button id="customerBtn">{c.accountholdername}</button>} >
                <div className='popupDiv'>
                    <h3>{c.accountholdername}'s transactions</h3>
                    <div>
                        <SentToTable/>
                    </div>
                    <div>
                        <ReceivedFromTable/>
                    </div>

                </div>
                </Popup></td>
            <td>{c.customerid}</td>
            <td>{c.clearbalance}</td>
            <td>{c.overdraftflag}</td>
            <td>{c.customeraddress}</td>
            <td>{c.customercity}</td>
        </tr>)
        return rowss
    }
    return(
        
        <div>
             <div>
            <Link to="/home" style={{textDecoration:"none"}}><h4>Back</h4></Link>
            In customer details
        </div>
            <div className="forTable">

                <div className="forSearch">
                    <button id="ctBtn">Customer Table</button>
                    <Popup trigger={<button id="btnBtn">Add New Customer</button> } position="right top"  >
                        <div>
                            <form>
                                <label>
                                    Customer_Name:
                                    <input type="text" onChange={(e)=>handleNameChange(e)}></input>
                                    Account Number:
                                    <input type="text" onChange={(e)=>handleAccChange(e)}></input>
                                    IFSC:
                                    <input type="text" onChange={(e)=>handleIfscChange(e)}></input>
                                    Amount:
                                    <input type="text" onChange={(e)=>handleAmountChange(e)}></input>
                                    OD:
                                    <input type="text" onChange={(e)=>handleOdChange(e)}></input>
                                    Location:
                                    <input type="text" onChange={(e)=>handleLocChange(e)}></input>
                                </label>
                                <input type="submit" value="Submit" onClick={submitCustomer} />


                            </form>
                        </div>
                    </Popup>
 
                    <input type="text" 
                    id="myInput" 
                    onChange={handleSearch}
                    placeholder="Search Customers" 
                    title="Type in a name" ></input>

                </div>

                <div className="c-t-s">
                <table className="cust-table-style" scroll>
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Customer Name</th>
                            <th>Account Number</th>
                            <th>IFSC</th>
                            <th>Amount</th>
                            <th>OD</th>
                            <th>Location</th>
                        </tr>
                    </thead>

                    <tbody>
                        {getCustoData()}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default CustomerDetails;
