import { createContext, useContext , useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import {BaseUrl} from '../utils/BaseUrl'
import axios from 'axios'
import ShowLoading from "../utils/ShowLoading";
export const AdminContext = createContext();


const AdminContextProvider = (props) =>{
    const [products,setProducts] = useState([]);
    const [loading,setLoading ] = useState(true);
    useEffect(()=>{

        axios.get((`${BaseUrl}/products`)).then((res)=>{
            setProducts(res.data.data)
            setLoading(false);
        }).catch((error)=>{
                console.error(error);
                setLoading(false)
        });
        
    },[])

    const addProducts = (newProducts) =>{
        if(newProducts){
            setProducts(prev => [...prev,newProducts]);
        }
    }
    const navigate = useNavigate();
    
    const value ={
        navigate,
        products,
        addProducts
    }
    if (loading) return <ShowLoading/>
    return(
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}
export default AdminContextProvider;