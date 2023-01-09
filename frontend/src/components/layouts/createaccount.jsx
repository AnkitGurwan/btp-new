import React,{useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/authentication/AuthContext';

const Createaccount=()=>{
    const {registerUser} = useContext(AuthContext);
    const [user, setUser] = useState({ name: "", email: "" });
    const detectChanges = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const navigate=useNavigate()
    const submit = async (e)=>{
        e.preventDefault();
        const x=await registerUser(user.name, user.email);
        console.log("Email sent successfully")
        if(x===200)
        navigate('/login')
    }

    return(
<div className="center">
    <br/>
        <h1>Create account</h1>
        <form className='formcreateaccount' onSubmit={submit}>
    <div className="text_field">
        <input className='body2input' name='name' value={user.name}  placeholder="Name" required onChange={detectChanges}/>
        <span></span>
      </div><br/>
<div className="text_field">
        <input className='body2input' name='email' value={user.email} type='email' placeholder="Email" required onChange={detectChanges}/>
        <span></span>
        </div><br/><br/>
    <button className='cardbutton1' type="submit" >Signup</button>
    <div className='divnote'>NOTE:Once you "Signup" you will receive a mail on this Email account.</div>
</form>
</div>
)

}
export default Createaccount;