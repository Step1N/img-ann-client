import React ,{useState} from 'react';

  const UploadImg = (props) => {
    
    const getInitialState = () => {
      return {images:[]}
    };

    const [data, setState] = useState(getInitialState);

    const uploadAnnImg =(e)=>{
      let files = e.target.files;
      let file_name = files[0].name;
      var fd = new FormData();
      for (let i = 0; i < files.length; i++) {
        fd.append('ann_img', files[i])
      }
      var baseURL = 'http://127.0.0.1:5000/';
      var url = baseURL+'images?img_name='+file_name+'&img_desc=testafile';
      
      let headers = new Headers();
      headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5000');
      headers.append('Access-Control-Allow-Methods', '*');
      headers.append('Access-Control-Allow-Methods', 'GET, POST');
      fetch(url, {method: 'POST', headers: headers, body:fd})
      .then((response) => response.json())
      .then((response) =>  {
            console.log('Found upload response ', response.payload)
            return fetch(baseURL+'images',  {method: 'GET',  headers: headers})
        })
      .then((response) => response.json())
      .then((response) =>{
        let imgsList = []
        for (let i = 0; i < response.payload.length; i++) {
          imgsList.push({imgName:response.payload[i].img_name, img:response.payload[i].image})
        }
          setState({images: imgsList});
        });
    };

    const handleClick =()=> {
      props.onClick(data.images)
    };

    return(
    <div > 
        <table>
          <tbody>
            <tr><td>Choose image to upload </td><td><input className="file-upload" type="file" id="ann_img" multiple name="file"  onChange={(e)=> uploadAnnImg(e)}/></td></tr>
          </tbody>
        </table>
        <br/>
        <br/>
        <input style={{ float: "left" }} type="submit" value="upload" onClick={handleClick} />
    </div>
    );
  }
  
  export default UploadImg
