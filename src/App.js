
import { useEffect, useState } from 'react';
import './App.css';
import AddAlbum from './Components/AddAlbum';
import UpdateAlbum from './Components/UpdateAlbum';
import Header from './Components/Header';

function App() {

  const [showAlbums, setShowAlbums] = useState([]);

  useEffect(()=>{
    getAlbums();
   
  },[])
  
   

  // Getting Album data From api  (Read)
   
  const getAlbums = async() => {
    const api = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await api.json();
    setShowAlbums(data);
  }
  



  // create function of album (Create)

  const createAlbums = async (title,userId) => {
    const api =  await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        userId: userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const data = await api.json();
    setShowAlbums((prevData)=> [...prevData, data])
    // console.log('created',data)
  }



// Delete Album (delete)

const deleteAlbum = async (id) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE"
  })
    .then((response) => {
      if (response.status !== 200) {
        return;
      } else {
        setShowAlbums(
          showAlbums.filter((album) => {
            return album.id !== id;
          })
        );
      }
    })
    .catch((error) => console.log(error));
};







// update the album function (Update)

const updateAlbum = async (id, title, userId) => {
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: title,
      userId: userId
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => {
      if (response.status !== 200) {
        return;
      } else {
        return response.json();
      }
    })
    .then((data) => {
      // setShowAlbums((prevData) => [...prevData, data]);
      const update = showAlbums.map((album) => {
        if (album.id === id) {
          album.title = title;
          album.userId = userId;
        }

        return album;
      });

      setShowAlbums((showAlbums) => update);
    })
    .catch((error) => console.log(error));
};



  return (

    <>

    <Header/>
    <div className="App">
     <AddAlbum  createAlbums={createAlbums} />
    
      {showAlbums.map((albums)=>(

       <UpdateAlbum  
          id={albums.id}
          key={albums.id}
          title={albums.title}
          userId={albums.userId}
          updateAlbum={updateAlbum}
          deleteAlbum={deleteAlbum}
       />
      ))}

  
      
    </div>
    </>
  );
}

export default App;
