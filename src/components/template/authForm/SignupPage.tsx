  import { useForm, SubmitHandler } from "react-hook-form"
import style from "../authForm/SignUpPage.module.css"
import Link from "next/link"



type Inputs = {
  email: string
  password: string
  rePassword:string
}

function SignupPage() {

 const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()


const submitHandler =()=>{

}

  return (
    <div className={style.form}>
      <h4>فرم ثبت نام</h4>
      <form onSubmit={handleSubmit(submitHandler)}>
        <label>ایمیل :</label>
        <input type="text"  {...register("email",{ required: true })} />
        <label>رمز عبور :</label> 
        <input type="password" {...register("password",{required:true})} />
         <label> تکرار رمز  عبور :</label> 
        <input type="password" {...register("rePassword",{required:true})}  />
        <button>ثبت نام</button>
      </form>
       <p>
        حساب کاربری دارید؟
        <Link href="/signin">ورود</Link>
      </p>
    </div>
  )
}

export default SignupPage