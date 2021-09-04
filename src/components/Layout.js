import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from '../api/express'

export default function Layout({ children }) {
  const history = useHistory();
  
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const getTodos = async (token) => {
        try {
          const res = await API.token(token);
          
        } catch (err) {
          console.log(err)
          console.log(history)
          history.push("/login");
        }
      };
      getTodos(token);
    }
  });
    
    return (
      <>
           {children} 
        </>
  )
}
