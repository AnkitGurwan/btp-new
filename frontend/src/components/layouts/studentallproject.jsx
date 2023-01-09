import React,{useState, useContext,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import Projectcard from './studentprojectcard'

const Createaccount=()=>{
    const {items,userProjects} = useContext(ItemContext);

    const getItem=async ()=>{
        await userProjects()
      }
      useEffect(()=>{
        getItem()
      },[])
    
    return(
        <div >
          <div className='studentallprojectdiv1'>Kindly "Register" to the project you are interested in</div>
          <marquee scrollamount="15" className='studentallprojectdiv2'>Note: These projects selection will be final, no further changes will be made.</marquee>
          <div className='allprojectsdiv'>{items.map( (project,i)=>{return (<Projectcard key={i} project={project}/>)})}</div>
          
        </div>
    )
}
export default Createaccount;