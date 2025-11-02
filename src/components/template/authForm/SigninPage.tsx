"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import style from "../authForm/SignUpPage.module.css"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react";
import Loader from "@/module/Loader"
import toast from "react-hot-toast"
import { useState } from "react"
import Link from 'next/link'

type Inputs = {
  email: string
  password: string
  ali:string
 
}

function SigninPage() {
     const [loading, setLoading] = useState<boolean>(false);
      const router = useRouter();
     const {
        register,
        handleSubmit,
       
        formState: { errors },
      } = useForm<Inputs>()


const submitHandler : SubmitHandler<Inputs>= async ({email,password})=>{
 setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
}

  return (
      <div className={style.form}>
      <h4>فرم ورود</h4>
      <form onSubmit={handleSubmit(submitHandler)}>
         <label>ایمیل :</label>
        {errors.email && <span className={style.error}>ایمیل معتبر وارد کنید</span>}
        <input type="text"  {...register("email",{ required: true })} />
        <label>رمز عبور :</label> 
           {errors.password && <span className={style.error}>رمز عبور اشتباه است</span>}
        <input type="password" {...register("password",{required:true})} />
        
        {loading ? (
          <Loader />
        ) : (
          <button type="submit" >
            ثبت نام
          </button>
        )}
      </form>
      <p>
        حساب کاربری ندارید؟
        <Link href="/signup">ثبت نام</Link>
      </p>
      
    </div>
  )
}

export default SigninPage