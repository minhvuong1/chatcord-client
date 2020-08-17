import React from 'react';
import './TextContainer.css';
import { Link } from 'react-router-dom';

const TextContainer = ({ users, room }) => {
    
  return (
    <div className="textContainer">
        <div>
            <h1>ChatCord <i className='far fa-smile' style={{fontSize: '36px'}}></i></h1>
            <p>Invite your friends to join room 
                <b> 
                    {room.charAt(0).toUpperCase() + room.slice(1)}
                </b>!
            </p>
            <h2>OR</h2>
            <p>Join Another Room
                <Link to='/'> <u>Here</u></Link>
            </p>

        </div>  
            {/* For PORT: <h3>Created with React, Express, Node and Socket.IO</h3> */}
            <h3>Creator: github.com/minhvuong1</h3>
    </div>
  );
};

export default TextContainer;