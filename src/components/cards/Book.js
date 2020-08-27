import React, { useState } from 'react';

const Book = ({bookData}) => {   
    let [image, setImage] = useState('');

    function onCall(){
        if(bookData.volumeInfo.imageLinks){
            setImage(bookData.volumeInfo.imageLinks.thumbnail);
        }
        
    }
   return(
      <div className="book">
          <button onClick={onCall}>YOLO</button>
          <img src={image} />
      </div>
   )
}



export default Book;