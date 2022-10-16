import { useEffect, useState } from "react";
import './ItemListContainer.css';
import { ItemList } from "../ItemList/ItemList";
import {useParams} from 'react-router-dom';
import {db} from '../../utils/firebase'
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = ()=>{
    const {categoryId} = useParams();
    console.log('categoryId',categoryId)
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
       
        const queryRef = !categoryId ? collection(db, "items") : query(collection(db, "items"),where("categoria","==",categoryId));
        getDocs(queryRef).then(response=>{
            const resultados = response.docs.map(doc=>{
                
                const newItem ={
                    id:doc.id,
                    ...doc.data(),
                }
                return newItem
            });
            console.log(resultados)
            setProductos(resultados);
        })
    },[categoryId])

    return(
        <div className="item-list-container">
            <h1 className="titulo">Productos</h1>
            <ItemList items={productos}/>
        </div>
    )
}