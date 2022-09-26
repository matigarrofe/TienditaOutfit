// import React, {useContext, useEffect} from 'react';
// import {db} from '../../utils/firebase'
// import {doc,getDoc, collection, getDocs, query, where  } from 'firebase/firestore'


// export const ItemCollection = () => {

//   useEffect(()=> {
//     const getData = async() => {
//     const queryRef = query(collection(db,'items'),where('categoria','==','sacos'))
//     const response = await getDocs(queryRef)
//     console.log(response)
//     const productos = response.docs.map(doc => {
//       const newProduct = {
//         ...doc.data(),
//         id: doc.id
//         }
//         return newProduct
//     })
//     console.log(productos)
//     }
//     getData()
//   },[])
  
  
  
  
//   return (
//     <div>
//       ContactoPage
//     </div>
//   )
// }



// //Sin filtro
// // useEffect(()=> {
// //   const getData = async() => {
// //   const query = query(collection(db,'items'))
// //   const response = await getDocs(query)
// //   console.log(response)
// //   const productos = response.docs.map(doc => {
// //     const newProduct = {
// //       ...doc.data(),
// //       id: doc.id
// //       }
// //       return newProduct
// //   })
// //   console.log(productos)
// //   }
// //   getData()
// // },[])
