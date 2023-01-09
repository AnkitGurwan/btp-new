import React,{useEffect,useState} from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Main from './pages/main';
import Mainlogin from './pages/mainlogin';
import Studentlogin from './pages/studentloginpage';
import Accountpage from './pages/accountpage';
import Createpassword from './pages/createpasswordpage';
import Resetpassword from './pages/resetpasswordpage';
import Projectpage from './pages/projectpage'
import AuthState from "../context/authentication/AuthState";
import Resetpasswordinterface from './pages/resetpasswordinterfacepage';
import Newprojectpage from './pages/newprojectpage';
import Readmoreproject from './layouts/readmorePage';
import Updateproject from './layouts/updateproject';
import Studentallproject from './pages/studentallprojectpage'
import Studentspecificproject from './pages/studentspecificprojectpage'
import ItemState from '../context/project/ItemState';

function App(){
    return(
        <AuthState>
            <ItemState>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/login' element={<Mainlogin/>}/>
                <Route path='/studentlogin' element={<Studentlogin/>}/>
                <Route path='/createaccount' element={<Accountpage/>}/>
                <Route path='/set-password/:token' element={<Createpassword/>}/>
                <Route path='/resetpassword' element={<Resetpassword/>}/>
                <Route path='/reset-set-password/:email/:token' element={<Resetpasswordinterface/>}/>
                <Route path='/mainpage' element={<Projectpage/>}/>
                <Route path='/studentallproject' element={<Studentallproject/>}/>
                <Route path='/studentallproject/:id' element={<Studentspecificproject/>}/>
                <Route path='/newproject' element={<Newprojectpage/>}/>
                <Route path='/mainpage/:id' element={<Readmoreproject/>}/>
                <Route path='/mainpage/update/:id' element={<Updateproject/>}/>
            </Routes>
            </BrowserRouter>
            </ItemState>
              
        </AuthState>
        
        )}
export default App;