import React, { useEffect, useState } from 'react'
import '../App.css'
import Template from './Template'
import ShowProduct from './ShowProduct'
import cookies from 'js-cookie'

function Product() {

  const [result, setResult] = useState(null)

  function fetchProduct() {

    if(localStorage.getItem("cache")){
      console.log("from cache", localStorage.getItem("cache"))
      setResult(JSON.parse(localStorage.getItem("cache")))
      return;
    }
//https://fakestoreapi.com/products
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res=>res.json())
      .then(json=>{
        setResult(json)
        localStorage.setItem("cache", JSON.stringify(json));
        console.log(json)
      })
  }

  //if(!result)
  //fetchProduct();


  useEffect(()=>{
    fetchProduct();
  }, [])
   

  if(!result)
  return (
    <div className="main-content common">
      <p> <b> <i><u>Welcome! {JSON.parse(cookies.get('user')||'{"email":"Guest"}').email }!</u></i></b></p>
      <Template />
    </div>
  )
  else
  return (
    <div className="main-content common">
      <p> <b> <i><u>Welcome! {JSON.parse(cookies.get('user') ||'{"email":"Guest"}').email  }!</u></i></b></p>
      <ShowProduct result={result} />
    </div>
  )
}

export default Product
