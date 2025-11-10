import styles from "@/layout/dashboardLayout/DashboardSidebar.module.css";
import LogoutButton from "@/module/logoutbtn/LogoutButton";
import { CgProfile } from "react-icons/cg";

import Link from "next/link";

function DashboardSidbar({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        {/* <p>{email}</p> */}
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت آگهی</Link>
        <LogoutButton />
      </div>

      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSidbar;
