import React, { StrictMode } from 'react'
import "./Profile.css"
import { Redirect } from 'react-router-dom';

const EditProfile = ({changeHandlerDesc, changeDescHandler, editing}) => {
  let userName = String(sessionStorage.getItem('username'))
  return(
    <div className='edit_container'>
        <label><b>New Description</b></label>
        <br/>
        
        <textarea name='udesc' onChange={changeHandlerDesc} rows="6" cols="50">{sessionStorage.getItem(userName) ? sessionStorage.getItem(userName) : ''}</textarea>
        <br/>
        <br/>
        <button type="submit" className="logout_submit" onClick={changeDescHandler}>Save changes</button>
        {editing
        ? <Redirect to='/Profile'/>
        : <div></div>
        }
    </div>
  );
}
export default EditProfile;