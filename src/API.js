export class PostsAPI {
   fetchPosts = () => {
     return new Promise(function(resolve,reject) {
       const url = "https://dummyjson.com/products"
       const options = {
               method: 'GET',
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
               },
             }
       fetch(url, options)
         .then((res) => {return res.json()})
         .then((response) => {
           resolve(response)
         })
         .catch(error => console.log(error))
     })
   }
 }
 