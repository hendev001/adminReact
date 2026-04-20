/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'

 const button = () => {
  const [count, setCount] = useState(0);
     

    useEffect(() => {
     console.log("Hello");
     
    }, []);


  return (
    <div>button</div>
  )
}


export default button;