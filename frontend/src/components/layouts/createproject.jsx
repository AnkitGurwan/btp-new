import React, { useState,useContext } from "react";
import { useNavigate,Link } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';


const NewProject=()=> {
  const {createProject} = useContext(ItemContext);
  const [itemData, setItemData] = useState({ title:"",abstract:"",cosupervisor:"",specialization:"",date:"",time:"",isbanned:false })
  
  const onChangeHandler = (e) => {
    setItemData({...itemData,[e.target.name]:e.target.value});
  }

  const navigate=useNavigate()
    const submit = async (e)=>{
        e.preventDefault();
        const x=await createProject(itemData.title,itemData.abstract,itemData.cosupervisor,itemData.specialization,itemData.date,itemData.time,itemData.isbanned);
        console.log("Project created succesfully.")
        if(x===200)
        navigate('/mainpage')
    }
  
  return (
    <div>
      <Link className='goback' to={`/mainpage`}>Go Back</Link>
    <form className="cardform" onSubmit={submit}>
    <div className="cardheaddiv">Please fill out the information about the project</div>
    <label className="cardlabel">
    <div className="carddiv">Title:</div>    
    <input name="title" type="text" className="cardinput" onChange={onChangeHandler} value={itemData.title} required/>
    </label>
    <label className="cardlabel">
     <div className="carddiv">Brief Abstract:</div>    
    <textarea className="cardinput" name="abstract" rows="7" cols="120" value={itemData.abstract} onChange={onChangeHandler} required></textarea>
    </label>
    <label className="cardlabel">
     <div className="carddiv">Co-Supervisor:</div>    
        <input type="text" name="cosupervisor" className="cardinput" value={itemData.cosupervisor} onChange={onChangeHandler}/>
    </label>
    <label className="cardlabel">
     <div className="carddiv">Specialization:</div>    
   
    <input name="specialization" type="text" className="cardinput" value={itemData.specialization} onChange={onChangeHandler}/>
    </label>
    
    <button className='cardbutton' type="submit">Submit</button>
</form>
</div>
  );
}

export default NewProject