import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';


const loginUser = (credentials) => {

  var user_info ={};
  user_info["username"] = credentials['username'];
  user_info["password"] = credentials['password'];
  console.log('user name', user_info)
  var headers = new Headers();
  headers.append('content-type',  'application/json');
  headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5000');
  headers.append('Access-Control-Allow-Methods', '*');
  headers.append('Access-Control-Allow-Methods', 'GET, POST');

  return fetch('http://127.0.0.1:5000/user/token', {
    method: 'POST',
    headers: headers,
    body:  JSON.stringify(user_info)
  })
  .then(data => data.json())
};

const Login = ({setToken}) => {
  const navigate = useNavigate(); 
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });

    setToken(token.payload);
    return navigate("/dashboard")
  };

  
  
  return (
    <div><h1>Please Log In</h1>
    <form className="formStyle"  onSubmit={handleSubmit} >
      <input  label="Username:" type="text" onChange={(e)=> setUserName(e.target.value)} />
      <input label="Password:" type="password" onChange={(e) => setPassword(e.target.value)} />
      <div>
        <button className="submitStyle" type="submit" >Submit</button>
      </div>
    </form>
    </div>
    
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
export default Login;