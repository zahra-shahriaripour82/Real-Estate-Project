  "use client"

import { useForm, SubmitHandler } from "react-hook-form"
import style from "../authForm/SignUpPage.module.css"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import Link from "next/link"







type Inputs = {
  email: string
  password: string
  rePassword:string
}

function SignupPage() {
  const router = useRouter();
 const {
    register,
    handleSubmit,
   watch,
    formState: { errors },
  } = useForm<Inputs>()

 const password = watch('password');

const submitHandler:SubmitHandler<Inputs> =async ({email,password})=>{
  
  const res= await fetch("/api/auth/signup",{
    method:"POST",
    body:JSON.stringify({email,password}),
    headers:{ "Content-Type": "application/json" }
  });

  const data= await res.json()
if (res.status === 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
  };




  return (
    <div className={style.form}>
      <h4>فرم ثبت نام</h4>
      <form onSubmit={handleSubmit(submitHandler)}>
        <label>ایمیل :</label>
        {errors.email && <span className={style.error}>ایمیل الزامی است</span>}
        <input type="text"  {...register("email",{ required: true })} />
        <label>رمز عبور :</label> 
           {errors.password && <span className={style.error}>رمز عبور الزامی است</span>}
        <input type="password" {...register("password",{required:true})} />
         <label> تکرار رمز  عبور :</label> 
          {errors.rePassword && <span className={style.error}>{errors.rePassword.message}</span>}
        <input type="password" {...register("rePassword",{required:"تکرار رمز عبور الزامی است",   validate: value => value ===password  || 'رمز عبور و تکرار آن مطابقت ندارند'})}  />
        
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