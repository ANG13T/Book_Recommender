import React, { useState } from 'react';

import '../../styles/Book.css';

const Book = ({bookData}) => {   
    let [image, setImage] = useState('');

   return(
      <div className="book">
          <a href={bookData.volumeInfo.infoLink} target="_blank">
             <img src={bookData.volumeInfo.imageLinks.thumbnail} />
          </a>
      </div>
   )
}



export default Book;