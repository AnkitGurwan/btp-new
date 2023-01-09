import React,{useState,useContext} from 'react'
import './styles.css'
import {Link ,useNavigate} from 'react-router-dom'
import AuthContext from '../../context/authentication/AuthContext'

const Body2 = ()=>{

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const {loginUser} = useContext(AuthContext);

    const navigate=useNavigate()
    const onChangeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const loginSubmitHandler = async (event) => {
        document.getElementById('proflogin').classList="body2button2";
        event.preventDefault();
        const x=await loginUser(user.email,user.password)
        console.log("x = ",x);
        if(x === 200){
            document.getElementById('proflogin').classList="body2button1";
            alert("Login Successfully");
            navigate('/mainpage')
            setUser({email:"", password:""})
            
        }else alert('Login Unsuccessful')
    }

    return(
        
    <div className="center">
        <h1>Welcome to the Professor Login Page</h1>
        
    <form  onSubmit={loginSubmitHandler}>
    
    <div className="text_field">
        <input type="email" required placeholder='User email' className='body2input' name="email" value={user.email} onChange={onChangeHandler} />
    </div>

    <div className="text_field">
        <input type="password" required placeholder='Password' className='body2input' name="password" value={user.password} onChange={onChangeHandler}/>

    </div>
    <br/>
    <Link to="/resetpassword" className="pass">Forgot password?</Link><br/><br/>
    <button className='body2button1' type="submit" id='proflogin'>Login</button>
    <br/>
    

    <div className="signup_link"> Not a member?  <Link to="/createaccount">Signup</Link>
    </div>
    </form>
    </div>

    )
}
export default Body2;
