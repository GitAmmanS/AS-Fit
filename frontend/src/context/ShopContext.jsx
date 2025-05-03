import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {BaseUrl} from '../utils/BaseUrl'
import axios from 'axios'
import LoadingScreen from "../utils/LoadingScreen";
export const ShopContext = createContext();

const ShopContextProvider = (props) =>{
    const currency = 'Rs';
    const delivery_fee = 150;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [placeOrderForm,setPlaceOrderForm] = useState({
        firstName:'',
        lastName:'',
        country:'',
        emailAddress:'',
        street:'',
        city:'',
        zipCode:0,
        phone:'',
        paymentMethod:'cod',
        totalAmount:0
    });
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get((`${BaseUrl}/products`)).then((response)=>{
            setProducts(response.data.data)
            setLoading(false)
        }).catch((error)=>{
            console.log(error.message);
            setLoading(false)

        })
    },[])

    
    const addToCart = async (itemId,size) =>{

        let cartData = structuredClone(cartItems); // copy of cart items
        if(!size){
            toast.error('Select Product Size');
            return;
        }
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1
            }
            else{
                cartData[itemId][size] = 1 ;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] =1;
        }
        setCartItems(cartData)
    }
    const getCartCount = () =>{
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                if(cartItems[items][item]>0){
                    totalCount+=cartItems[items][item];
                }
            }
                catch(error){

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId , size , quantity) =>{
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData);
    }
    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])
    const Orders = async() =>{
        const response = await axios.get(`${BaseUrl}/order/`);
        if(response){
            return response.data.data
        }
    } 
    const getCartAmount = () =>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items);
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0 ){
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                }catch(error){

                }
            
        }
    }
    return totalAmount;
    }
    const postOrder = async () => {
        try {
         
          const response = await axios.post(`${BaseUrl}/order/post`, { placeOrderForm, cartItems });
          return response.data.data;
          
        } catch (error) {
          console.log(error.message);
          return null;  
        }
      };
      
    const value = {
        products , 
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        placeOrderForm,
        setPlaceOrderForm,
        postOrder,
        setCartItems,
        Orders
    }
    if (loading) return <LoadingScreen/>
    return (
        
        <ShopContext.Provider value={value} >
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider