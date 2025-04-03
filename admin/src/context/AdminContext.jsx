import { createContext, useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { products } from "../../../frontend/src/assets/assets/frontend_assets/assets";
export const AdminContext = createContext();

const AdminContextProvider = (props) =>{
    const navigate = useNavigate();
    
    const value ={
        navigate,
        products
    }
    return(
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}
export default AdminContextProvider;