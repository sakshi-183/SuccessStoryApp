import {useState,useRef} from "react";
import axios from "axios";
function Success()
{
    const rName=useRef();
    const [name,setName]=useState("");
    const [company,setCompany]=useState("");
    const [pkg,setPkg]=useState("");
    const [ans,setAns]=useState("");

    const save =(event)=>{
        event.preventDefault();
        let urladd="http://localhost:9000/create";
        axios.post(urladd,{name,company,pkg})
        .then(res =>{
            if(res.data.affectedRows==1)
            {
                setAns("Thank u");
                setName("");
                setCompany("");
                setPkg("");
                rName.current.focus();

            }

        })
        .catch(err=>console.log(err));
    }
    return(
        <>
        <center>
            <h1>Success Story App</h1>
            <form onSubmit={save}>
            <input type="text" placeholder="enter name "
            onChange={(event)=>{setName(event.target.value)}}
            value={name} ref={rName}/>
            <br/><br/>
            <input type="text" placeholder="enter company name"
            onChange={(event)=>{setCompany(event.target.value)}}
            value={company}/>
            <br/><br/>
            <input type="number" step="any" placeholder="enter package"
            onChange={(event)=>{setPkg(event.target.value)}}
            value={pkg}/>
            <br/><br/>
            <input type="submit"/>

            </form>
            <h1>{ans}</h1>
        </center>
        </>
    );

}
export default Success;