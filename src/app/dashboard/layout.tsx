import DashboardSidbar from "@/layout/dashboardLayout/DashboardSidebar"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"


 async function DahshboardLayout({children}:{children:React.ReactNode}) {
  const session = await getServerSession(authOptions)
  if(!session) redirect("/signin")
  return (
    <DashboardSidbar>{children}</DashboardSidbar>
  )
}

export default DahshboardLayout