import React from 'react'
import '../App.css';

const AddAlbum = ({createAlbums}) => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        createAlbums(e.target.title.value, e.target.userId.value);
        e.target.title.value = "";
        e.target.userId.value = "";
      };

  return (
    <div className='addAlbums'><form onSubmit={handleOnSubmit}>
    <h3>Add User</h3>
    <input placeholder="Title" name="title" />
    <input placeholder="User Id" name="userId" />
    <button onSubmit={handleOnSubmit}>Add Album</button>
    <hr />
  </form>
</div>
  )
}

export default AddAlbum