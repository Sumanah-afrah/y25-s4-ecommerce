import React from 'react'
import '../App.css'

function Feedback() {

  const[email, setEmail] = React.useState('')
  const[rating, setRating] = React.useState(5)
  const[comments, setComments] = React.useState('')

  function handleChange(event) {
    const {name, value} = event.target
      if (name === "email") {
      setEmail(value);
    } else if (name === "rating") {
      setRating(value);
    } else if (name === "comments") {
      setComments(value);
    }
  }

  function handleSubmit() {
    alert('Feedback submitted successfully! email: ' + email + ', rating: ' + rating + ', comments: ' + comments);
    setEmail('');
    setRating(5);
    setComments('');
  }
  
    console.log(email, rating, comments);
  
    

  return (
    <div className="main-content common">
      <table className='border border-black-300 shadow-xl rounded-lg '>
        <tr>
       <td  className='p-[2vw]' colSpan={2}>
        <h1 className= "text-center font-bold underline"> 
            Feedback Form!  
            
  </h1>
  </td>
  </tr>

  <tr>
    <td className='p-[2vw]'>
      <label htmlFor = "email">Email:</label>
      </td>
    <td className="p-[2vw] text-left">
      <input  onChange={(event)=>{handleChange(event)}} className='border border-black-500 rounded-md px-4 py-2 text-center focus:outline-none focus:border-black-600 focus:ring-1 shadow-lg ' type="text" id="email" name="email" value={email} />
      </td>
  </tr>
  <td>
    <label htmlFor = "rating">Rating:</label>
    
  </td>
  <td className="p-[2vw] text-left">
    <select onChange={(event)=>{handleChange(event)}}className='border border-black-500 rounded-md px-4 py-2 text-center focus:outline-none focus:border-black-600 focus:ring-1 shadow-lg ' id="rating" name="rating">
      <option value= "5" >Excellent</option>
      <option value="4"> Very Good</option>
      <option value="3">Good</option>
      <option value="2">Average </option>
      <option value="1">Poor</option>
    </select>
  </td>

  <tr >
    <td className='p-[2vw]'>
      <label htmlFor = "comments">Comments:</label>
    </td>
    <td className="p-[2vw] text-left">
      <textarea onChange={(event)=>{handleChange(event)}} className='border border-black-500 rounded-md px-4 py-2 text-center focus:outline-none focus:border-black-600 focus:ring-1 shadow-lg ' id="comments" name="comments" rows="4" cols="50"> </textarea>
    </td>
  </tr>
  <tr>
    <td className='p-[2vw]' colSpan={2} style={{"textAlign": "center"}}>
      <button onClick={handleSubmit} className='bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl transition duration-900' >Submit Feedback</button>
      
    </td>
  </tr>


  </table>
    </div>
  )
}

export default Feedback
