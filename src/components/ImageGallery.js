import React, { useState } from "react";

const ImageGallery =() =>{
  let data =[
    {
      id: 1,
      img:'../assets/New folder/1221.jpg',
    },
    {
      id: 2,
      img: '../assets/New folder/abde1-01.jpeg',
    },
    {
      id: 3,
      img: '../assets/New folder/anju1-01.jpeg',
    },
    {
        id: 4,
        img: '../assets/New folder/chamika1-01.jpeg',
      },
    {
      id: 5,
      img:'../assets/New folder/chandi-01.jpeg',
    },
    {
      id: 6,
      img:'../assets/New folder/harry+_Potter1-02.jpeg',
    },
    {
      id: 7,
      img: '../assets/New folder/m2-02-01.jpeg',
    },
    {
      id: 8,
      img: '../assets/New folder/masterd-02-01.jpeg',
    },
    {
      id: 9,
      img: '../assets/New folder/RaviJay-03.jpeg',
    },
    {
      id: 10,
      img:'../assets/New folder/rock-01.jpeg',
    },
    {
        id: 11,
        img:'../assets/New folder/shanu-02.jpeg',
      },
      {
        id: 12,
        img:'../assets/New folder/shehani-03.jpeg',
      },
      {
        id: 13,
        img:'../assets/New folder/uma.jpg',
      },
      {
        id: 14,
        img:'../assets/New folder/waniya3.jpg',
      },
      {
        id: 15,
        img:'../assets/New folder/wenupa1.jpg',
      },
      {
        id: 16,
        img:'../assets/New folder/willsmith-01-01.jpeg',
      },
      {
        id: 17,
        img:'../assets/New folder/yankee1-01.jpeg',
      },
      {
        id: 18,
        img:'../assets/New folder/Yuki-01.jpeg',
      },
      {
        id: 19,
        img:'../assets/New folder/sachith-02.jpeg',
      },
      {
        id: 20,
        img:'../assets/New folder/linuka-02.jpeg',
      },
      {
        id: 21,
        img:'../assets/New folder/mashi-01.jpeg',
      },
  ]
  const [model,setModel] = useState(false);
  const [tempimgSrc ,setTempimgSrc]= useState('');
  const getImg= (img) =>{
    setTempimgSrc(img);
    setModel(true);
  }
    return (
      <>
      < div className={model? "model open" : "model" }>
        <img className='modelimage' src={tempimgSrc}/>
        <img className='close' src=".\assets\close.png" onClick={()=> setModel(false)}/>
      </div>
      <div className="gallery">
        {data.map((item,index)=>{
          return(
            <div className="pics" key={index} onClick={()=> getImg(item.img)}>
              <img src={item.img} style={{width: '100%'}}/>
            </div>
          )
        })}
      </div>
      </>
    )
}

export default ImageGallery