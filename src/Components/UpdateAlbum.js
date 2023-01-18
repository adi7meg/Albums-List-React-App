import React, { useState } from 'react'
import '../App.css';

const UpdateAlbum = ({title, userId, id, deleteAlbum, updateAlbum}) => {

    const [isUpdateAlbum, setIsUpdateAlbum] = useState(false);


    const handleUpdate = () => {
        setIsUpdateAlbum(!isUpdateAlbum);
      };
    
      const handleDelete = () => {
        console.log("deleted", deleteAlbum(id))
        deleteAlbum(id);
      };
    
      const handleOnUpdateSubmit = (e) => {
        e.preventDefault();
        updateAlbum(id, e.target.title.value, e.target.userId.value);
        setIsUpdateAlbum(!isUpdateAlbum);
      };


  return (
    <div className='showAlbums'>  


{isUpdateAlbum ? (
        <form onSubmit={handleOnUpdateSubmit}>
          <input placeholder="Name" name="userId" defaultValue={userId} />
          <input placeholder="Email" name="title" defaultValue={title} />
          <button onSubmit={handleOnUpdateSubmit}>Save</button>
        </form>
      ) : (
        <div>
          <ul>
            <li>{userId} {title}</li>
            <div>
            <button onClick={handleUpdate}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
          </ul>
          
        </div>
      )}
        
    </div>
  )
}

export default UpdateAlbum