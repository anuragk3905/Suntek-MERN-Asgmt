import { useState } from "react";
import { useForm } from "react-hook-form";

function FormProject(){
    const {register, handleSubmit, setError, formState:{errors}} = useForm();
    let [users, setUser] = useState([])
    
        //form submission
        
        const submitForm = (obj)=>{
            let year = parseInt(obj.dob.slice(0,4))
            if(year<2020){
                setError("dob",{
                    type: "manual",
                    message: "Year should be after 2020"
                })
            }
            else setUser([...users,obj])
        }
        console.log(users)
    
        return(
            <div>
                <h1>User Registration Form</h1>
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className="mb-3">
                        <input type="text" {...register("firstname",{required: true, minLength: 4, maxLength: 6})} placeholder="Enter First Name" className="border-2"/>
                        {errors.firstname?.type==='required' && <p className="text-red-500">First name required</p>}
                        {errors.firstname?.type==='minLength' && <p className="text-red-500">minLength should be 4</p>}
                        {errors.firstname?.type==='maxLength' && <p className="text-red-500">maxLength should be 6</p>}
                    </div>

                    <div className="mb-3">
                        <input type="text" {...register("lastname",{required: true, minLength: 4, maxLength: 6})} placeholder="Enter Last Name" className="border-2"/>
                        {errors.lastname?.type==='required' && <p className="text-red-500">Last name required</p>}
                        {errors.lastname?.type==='minLength' && <p className="text-red-500">minLength should be 4</p>}
                        {errors.lastname?.type==='maxLength' && <p className="text-red-500">maxLength should be 6</p>}
                    </div>

                    <div className="mb-3">
                        <input type="email" {...register("email",{required: true})} placeholder="Enter Email" className="border-2" />
                        {errors.email?.type==='required' && <p className="text-red-500">Email required</p>}
                    </div>

                    <div className="mb-3">
                        <input type="date" {...register("dob",{required: true})} placeholder="Enter Date of Birth" className="border-2" />
                        {errors.dob?.type==='required' && <p className="text-red-500">Date of birth required</p>}
                        {errors.dob?.type==='manual' && <p className="text-red-500">{errors.dob.message}</p>}
                    </div>

                    <button type="submit" className="bg-blue-400 p-3 text-lime-100">Add New User</button>
                </form>
                <br />
                <h1>List of Users</h1>
                <table className="w-full border-2 border-collapse bg-pink-200">
                    <thead>
                        <tr>
                            <th className="border-2">First Name</th>
                            <th className="border-2">Last Name</th>
                            <th className="border-2">Email</th>
                            <th className="border-2">Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(userObj=><tr>
                                <td className="border-2">{userObj.firstname}</td>
                                <td className="border-2">{userObj.lastname}</td>
                                <td className="border-2">{userObj.email}</td>
                                <td className="border-2">{userObj.dob}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        )
}

export default FormProject;