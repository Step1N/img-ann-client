import React ,{useState} from 'react';

  const Options = (props) => {
    const getInitialState = () => {
      return {value :""};
    };
    const [data, setOption] = useState(getInitialState);
    const handleChange = (e) =>{
      setOption({value:e.target.value});
      props.onClick(e.target.value)
    };

    return(
      <div>
          
          <select  value={data.value}  onChange={(e)=>handleChange(e)} >
          <option value="">vehicle Type</option>
            <option value="Car">Car</option>
            <option value="Bus">Bus</option>
            <option value="Autorickshaw">Autorickshaw</option>
            <option value="Bike">Bike</option>
        </select>
        <br/>
        <br/>
        
        <b>Choose type of vehicle then pick particular type of vehicle from image and say confirm</b>
      </div>
      );
  }
  
  export default Options