import React,{useContext,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import Projectcard from './projectcard'

const Createaccount=()=>{
    const {itemsspecific,Projectspecific} = useContext(ItemContext);

    const getItem=async ()=>{
        await Projectspecific()
      }
      useEffect(()=>{
        getItem()
      },[])
    
    return(
        <div className=''>
          <div className='allprojectslinkdiv'><Link to='/newproject' className='allprojectslink'  ><h1>+</h1>ADD NEW PROJECT</Link></div>
          <div className='allprojectsdiv'>{itemsspecific.map( (project,i)=>{return (<Projectcard key={i} project={project}/>)})}</div>
          
        </div>
    )
}
export default Createaccount;