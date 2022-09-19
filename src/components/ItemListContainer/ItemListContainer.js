/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import './ItemListContainer.css';
import { data } from "../baseDatos/mock-data";
import { ItemList } from "../ItemList/ItemList";
import {useParams} from 'react-router-dom';

export const ItemListContainer = ()=>{
    const {categoryId} = useParams();
    console.log('categoryId',categoryId)
    const [productos, setProductos] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })

    useEffect(()=>{
        promesa.then(resultado=>{
            if(categoryId){
                const newProducts = resultado.filter(item=>item.categoria === categoryId);
                setProductos(newProducts)
            } else{
                setProductos(resultado)
            }
        })
    },[categoryId])

    return(
        <div className="item-list-container">
            <h2>Productos</h2>
            <ItemList items={productos}/>
        </div>
    )
}