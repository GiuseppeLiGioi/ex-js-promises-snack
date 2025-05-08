/*🏆 Snack 1
Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

*/

const getPostTitle = id => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
          fetch(`https://dummyjson.com/posts/${id}`) 
          .then(response => response.json())
          .then(obj => resolve(obj))
          .catch(reject)
        }, 2000)
    })
}

getPostTitle(1)
.then(obj => console.log(obj.title))
.catch(error => console.error(error))


/*
🎯 Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post. 
Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.
*/

//funzione per recuperare l'intero post

const getAllPost = id => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
          fetch(`https://dummyjson.com/posts/${id}`) 
          .then(response => response.json())
          .then(obj => resolve(obj))
          .catch(reject)
        }, 2000)
    })
}



getAllPost(3)
.then(obj => console.log(obj))
.catch(error => console.error(error))




////funzione per recuperare l'intero post ed aggiungere l'autore

const getPostandAuthor = id => {
  return new Promise ((resolve, reject) => {
      setTimeout(() => {
        fetch(`https://dummyjson.com/posts/${id}`) 
        .then(response => response.json())
        .then(objPost => {
          fetch(`https://dummyjson.com/users/${objPost.userId}`)
          .then(response => response.json()) 
          .then(objUser => {
            const risultato = {...objPost, autore: objUser}
            resolve(risultato)
          })

        })
        .catch(reject)
      }, 2000)
  })
}


getPostandAuthor(1)
.then(risultato => console.log(risultato))
.catch(error => console.error(error))