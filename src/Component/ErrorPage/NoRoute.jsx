import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

const NoRoute = () => {
    const [NavM, setNavM] = useState(false);

    let authUser = localStorage.getItem("user");
    authUser = JSON.parse(authUser);
    console.log(authUser);

    useEffect(() => {
        if (authUser) {
          if (authUser.status == true) {
            setNavM(authUser.status)
          }
        }
      }, [authUser])
  return (
    <div>
        <h1>Page Not Found</h1>
        {NavM ? " no" : <NavLink to='/signin'>Go To Login Page</NavLink>}
        
    </div>
  )
}

export default NoRoute