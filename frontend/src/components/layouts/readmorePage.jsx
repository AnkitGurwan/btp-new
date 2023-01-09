import React, { useState,useContext,useEffect } from "react";
import { useNavigate,useParams,Link } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import Projectcardspecific from "./projectcardspecific";


const Specificprojectcard=()=> {
    const {items,userProjects} = useContext(ItemContext);

    const getItem=async ()=>{
        await userProjects()
      }
      useEffect(()=>{
        getItem()
      },[])


    const params=useParams();
    const id=params.id
    

     return(
        <div className=''>
          <div className='allprojectslinkdiv'><Link to='/newproject' className='allprojectslink'  ><h1>+</h1>ADD NEW PROJECT</Link></div>
          <div className='allprojectsdiv'>{items.filter((project)=>project._id===id).map((projects,i)=>{return (<Projectcardspecific key={i} project={projects}/>)})}</div>
          
        </div>
    )
  
}

export default Specificprojectcard