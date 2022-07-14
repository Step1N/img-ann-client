import React, {useState} from 'react';
import { withCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'

import UploadImg from '../images/UploadImg';
import Options from '../menu/Options';
import Export from '../exporter/Export';



  const Dashboard = () => {
    const navigate = useNavigate(); 
    const getInitialState = () => {
      return {rows:[], imgType:"", images:[], disbaled:false}
    };

    const [data, setState] = useState(getInitialState);
    
    const findCords = (e) => {
      let row ={name: e.target.id, type: data.imgType, X:e.screenX, Y:e.screenY}
      data.rows.push(row)
      setState({rows: data.rows, imgType:data.imgType, images:data.images,disbaled:data.disbaled})
      
    };

    const displayImg = (rawImages) => {
      setState({rows: data.rows, imgType:data.imgType, images:rawImages, disbaled:true})
    };

    const selectOption = (imageType) => {
      setState({rows: data.rows, imgType:imageType, images:data.images,disbaled:data.disbaled})
    };

    const downloadCords = (e) => {
      console.log("found csv entries", data.rows)
    };

    const logout = (e) => {
      localStorage.clear();
      sessionStorage.clear();
      return navigate("/")
    };
    
    return(
    <div> 
      <h2>Dashboard</h2>
        <button  style={{float: 'right'}} onClick={(e) => logout(e)}>Logout</button>
        <UploadImg   onClick={(e)=> displayImg(e)} ></UploadImg>
          {data.images.map((im, index) =>( 
            <ul id={index}>
              <li id={index}><img id={im.imgName} width="400"  height="400"  src ={"data:image/png;base64,"+ im.img}  alt= {im.imgName} onClick={(e) => findCords(e)}/></li>
              <li id={index}><Options  onClick={(e)=> selectOption(e)}/></li>
          </ul>
          ))}

         {data.disbaled ?<Export data={data.rows}  onClick={downloadCords} >Confirm</Export>:<></>}
    </div>
    );
  }
  
  export default withCookies(Dashboard);
