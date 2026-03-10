import { useForm } from "react-hook-form";

function FormDemo(){

    const {register, handleSubmit, formState:{errors}} = useForm();

    //form submission
    const submitForm = (obj)=>{
        console.log(obj)
    }

    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="mb-3">
                    <input type="text" {...register("username",{required: true, minLength: 3})} placeholder="Username" className="border-2"/>
                    {errors.username?.type==='required' && <p className="text-red-500">Username required</p>}
                    {errors.username?.type==='minLength' && <p className="text-red-500">minLength should be 3</p>}
                </div>
                <div className="mb-3">
                    <input type="email" {...register("email",{required:true})} placeholder="Email" className="border-2" />
                </div>
                <button type="submit" className="bg-blue-400 p-3 text-lime-100">Login</button>
            </form>
        </div>
    )
}

export default FormDemo;