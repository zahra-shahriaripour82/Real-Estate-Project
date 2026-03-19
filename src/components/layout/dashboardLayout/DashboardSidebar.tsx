import styles from "@/layout/dashboardLayout/DashboardSidebar.module.css";
import LogoutButton from "@/module/logoutbtn/LogoutButton";
import { CgProfile } from "react-icons/cg";

import Link from "next/link";

type Props = {
  children: React.ReactNode;
  email: string;
};

function DashboardSidbar({ children, email }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        {/* its for svg */}
        <p>{email}</p>
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
