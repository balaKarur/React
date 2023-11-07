import React, { ReactElement, useState } from 'react'

export const Registration = () => {
  const onGenderUpdate = (event:React.ChangeEvent<HTMLSelectElement>) =>{
    setGender(event.target.value);
  }
  const onRegistration = (event:React.ChangeEvent) => {
    alert(userName +" , "+gender +" , "+password);
    event.preventDefault();
  }
  const [gender, setGender] = useState("male");
  const [userName,setUserName] = useState("");
  const [password,setPassword] =useState("");
  return (
    <div>
        <div className='title'>SignUp Registration</div>
        <form onSubmit={onRegistration}>
          <div className="row">
            <label htmlFor="">UserName</label>
             <input value={userName} onChange={(event) => setUserName(event.target.value)}></input> 
          </div>
          <div className="row">
            <label htmlFor="">Password</label>
            <input type='password' value={password} onChange={(event) => setPassword(event.target.value)}></input>
          </div>
          <div className="row">
            <label htmlFor="">Age</label>
            <input type='number'></input>
          </div>
          <div className="row">
            <label htmlFor="">Gender</label>
            <select value={gender} onChange={onGenderUpdate}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <button type='submit'>Register</button>
          </div>
        </form>
    </div>
   
  )
}
