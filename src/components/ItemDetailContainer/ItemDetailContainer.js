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

    // const getItem = (id)=>{
    //     return new Promise((resolve, reject)=>{
    //         const item = data.find(item=>item.id === parseInt(id));
    //         resolve(item)
    //     })
    // }

    // useEffect(()=>{
    //     const getProducto = async()=>{
    //         const producto = await getItem(productId);
    //         console.log('producto', producto)
    //         setItem(producto);
    //     }
    //     getProducto();
    // },[productId])
    useEffect(()=>{
        const getProducto = async()=>{
            //creamos la referencia del producto
            const queryRef = doc(db,"items",productId);
            //hacemos la solicitud
            const response = await getDoc(queryRef);
            // console.log(response.data())
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
            <p style={{width:"100%", color: "white"}}>Detalle del producto</p>
            <ItemDetail item={item}/>
        </div>
    )
}