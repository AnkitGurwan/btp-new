import React from 'react';
import { Link } from 'react-router-dom';


function Projectcard(props){
    const {project}=props;
   
    return(
    <div className='projectcardmaindiv'>
        
            <div class="card" style={{width:"27vw"}}>
            <div class="card-body">
                <h3 class="card-title">{project.title}</h3>
                <h5 class="card-subtitle mb-2 text-muted">{project.co_supervisor}<h6>(co-supervisor)</h6></h5>
                <p class="card-text">{project.brief_abstract.slice(0,150)}<Link to={project._id} style={{"textDecoration":"none"}}><h6>...read more</h6></Link></p>
                <p class="card-text"><h5>Specialisation</h5>{project.specialization}</p>
                <h6 class="card-title">{project.creation_date} </h6>
                <h6 class="card-title">{project.creation_time} </h6>
                <div className='projectcardupdate'>
                <Link className='projectcardlink1' to={`update/${project._id}`}>Update</Link>
                
                </div>


                
                
            </div>
        </div>
    </div>
    

    )}

export default Projectcard