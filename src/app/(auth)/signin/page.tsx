import { authOptions } from "@/api/auth/[...nextauth]/route";
import SigninPage from "@/template/authForm/SigninPage"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function page() {
     const session = await getServerSession(authOptions );
  if (session) redirect("/");
  return (
    <SigninPage/>
  )
}

export default page