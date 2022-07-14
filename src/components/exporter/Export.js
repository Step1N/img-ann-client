import { CSVLink } from "react-csv";
import React ,{ useRef } from 'react';

const Export =(props)=>{

  const csvLink = useRef() ;

  const handleChange = (e) =>{
    props.onClick(e)
    csvLink.current.link.click();
  };

  return (
    <div>
      
      <CSVLink
         data={props.data}
         filename='img_vehical_status.csv'
         className='hidden'
         ref={csvLink}
         target='_blank'
        
      />
      <input type="submit" value="confirm" onClick={(e)=>handleChange(e)} />
      
  </div>);
};

export default Export