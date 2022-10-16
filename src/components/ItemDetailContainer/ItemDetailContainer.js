import { useState, useEffect } from "react";
import './ItemDetailContainer';
// import { data } from "../baseDatos/mock-data";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {db} from '../../utils/firebase'

export const ItemDetailContainer = ()=>{
    const {productId} = useParams();
    const [item, setItem] = useState({});

    useEffect(()=>{
        const getProducto = async()=>{
            
            const queryRef = doc(db,"items",productId);
         
            const response = await getDoc(queryRef);
          
            const newItem = {
                id: response.id,
                ...response.data(),
            }
            console.log(newItem);
            setItem(newItem)
        }
        getProducto();
    },[productId])
    console.log('item:', item)
    
    return(
        <div className="item-detail-container">
            
            <ItemDetail item={item}/>
        </div>
    )
}