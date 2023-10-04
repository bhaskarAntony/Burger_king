import React, { useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'

function Create() {
    const URl = 'https://dummyjson.com'
    function update(props) {
        const [user, setUser] = useState[{
            firstname: "", 
            lastname: "",
            email:"",
            phone: ""
        }]
        // const prams = useParams()
        // const navigate = useNavigate()

        const readValue = (e)=>{
            const {name, value} = e.target //e.target => input tag
            setUser({...user, [name]: value})
        }
        const submitHandler = async (e) => {
            e.preventDefault();
            console.log("user", user)
            await axios.patch(`${URL}/users/${params.id}`, user)
            .then(res =>{
                toHaveStyle.success("use details updated successful")
            })
        }
    }
    const deleteuser = async (id) =>{
        if(window.confirm("are you sure wnat to delte this user id = ", id)){
            toHaveStyle.success("successfully deleted");
        }
        else{
            toHaveStyle.warning("delete is terminated");
        }
    }
  return (
    <div className='col-md-6 offset-md-3'>
        <div className="card">
            <div className="card-body">
                <form onSubmit={submitHandler}>
                    <div className="form-group mt-3">
                        <label htmlFor="firstname">firstname</label>
                        <input type="text" name='firstname' placeholder='enter firstname' />
                        <label htmlFor="lastname">lastname</label>
                        <input type="text" name='lastname' placeholder='enter lastname' />
                        <label htmlFor="email">email</label>
                        <input type="text" name='email' placeholder='enter email' />
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" name='phone' placeholder='enter Phone Number' />
                        <button type="submit">update</button>
                    </div>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Create
