import React from 'react'
import cookies from 'js-cookie' 
import { Link , useNavigate } from 'react-router-dom';

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChange(event) {
    const {name, value} = event.target

    if(name === "email") {
      setEmail(value);
    } else if(name === "password") {
      setPassword(value);
    }
  }

  function handleSubmit(event) {
    var Flag = 0;
   
if(cookies.get('users')) {
  const existingUsers = JSON.parse(cookies.get('users'))
  existingUsers.map ((user) => {
    if(user.email === email && user.password === password) {
      Flag = 1;
      cookies.set('user' , JSON.stringify({email: email, password: password}))
      navigate('/products')
    } 
  })
  if(Flag === 1) {
    alert(`Signin successful! Email: ${email} Password: ${password}`)
  } else {
    alert('Signin failed!')
  }

}
else {
  alert(' Signup First ! ')
}
  }

  return (
    <div className="main-content common">
      <table className='border border-black-300 shadow-xl rounded-lg '>
        <tr>
       <td  className='p-[2vw]' colSpan={2}>
        <h1 className= "text-center font-bold underline"> 
            Sign In 
            
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

  <tr >
    <td className='p-[2vw]'>
      <label htmlFor = "password">Password:</label>
    </td>
    <td className="p-[2vw] text-left">
      <input  onChange={(event)=>{handleChange(event)}} className='border border-black-500 rounded-md px-4 py-2 text-center focus:outline-none focus:border-black-600 focus:ring-1 shadow-lg ' type="password" id="password" name="password" value={password} />
    </td>
  </tr>
  <tr>
    <td className='p-[2vw]' colSpan={2} style={{"textAlign": "center"}}>
      <button onClick={handleSubmit} className='bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl transition duration-900' >Sign In</button>
      
    </td>
  </tr>


  </table>
    </div>
  )
}

export default Signin
