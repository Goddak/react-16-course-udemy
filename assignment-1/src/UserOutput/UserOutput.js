import React from 'react';
import Input from '../UserInput/UserInput';
import './UserOutput.css';

function User (props) {
  return (
    <div className="user" style={props.style || {}}>
      <h1>{props.name}</h1>
      <h5>Favourite saying 1</h5>
      <p className="user--output">{props.para1 || 'Alright Duck?'}</p>
      <h5>Favourite saying 2</h5>
      <p className="user--output">{props.para2 || 'Hello Sally'}</p>
      <h5>Update User</h5>
      <span>
        <p>Change username</p>
        <Input value={props.name} changeUsername={props.changeUsername}/>
      </span>
    </div>
  );
}

export default User;