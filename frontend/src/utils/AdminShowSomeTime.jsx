import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
const AdminShowSomeTime = ({children}) => {
    const [showNavBar, setShowNavBar] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/adminPanel' || location.pathname === '/login' || location.pathname === '/adminPanel/addItems' || location.pathname === '/adminPanel/listItems' || location.pathname === '/adminPanel/orders') {
            setShowNavBar(false);
        }
        else {
            setShowNavBar(true);
        }
    }, [location])
  return (
    <div>
        {showNavBar && children}
    </div>
  )
}

export default AdminShowSomeTime