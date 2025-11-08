
import { authOptions } from "@/api/auth/[...nextauth]/route";
import SignupPage from "@/template/authForm/SignupPage"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";



 async function SignUp() {
   const session = await getServerSession(authOptions );
  if (session) redirect("/");
  return (
    <SignupPage/>
  )
}

export default SignUp