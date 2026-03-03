import React from 'react'
import '../App.css'

function ShowProduct({result}) {

  function addCart(pt) {
    
    
    
    let cart = JSON.parse(localStorage.getItem("cart") || "[]")
    cart.push(pt)
    localStorage.setItem("cart", JSON.stringify(cart))
    alert("Total items : " + cart.length)
  }
  
  return (
    <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "40px" }}>
      {result.map((pt)=>{
        return (
          <div className="card">
            <center>
             <h4> {pt.title.substring(0, 20)}... </h4>
             <img 
               src={pt.images && pt.images.length > 0 && pt.images[0] ? pt.images[0] : 'https://via.placeholder.com/300x300?text=No+Image'} 
               alt="product" 
               onError={e => e.target.src = 'https://via.placeholder.com/300x300?text=No+Image'}
             />
              <p> ₹{pt.price} </p>
              <button onClick = {() => addCart(pt)} className='bg-yellow-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50'>Add to Cart</button>
            </center>
          </div>
        )
      })}
    </div>
  )
}

export default ShowProduct
