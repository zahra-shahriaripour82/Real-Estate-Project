import DashboardCart from "@/module/dashboardcart/DashboardCart";
import styles from "@/template/myprofile/MyProfilesPage.module.css";
import {ProfilesProps } from "@/utils/types/Types";





function MyProfilesPage({profiles}:ProfilesProps) {
    console.log(profiles)
  return (
    <div> {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
      )}
      {profiles.map((profile)=>(<DashboardCart key={profile._id} data={JSON.parse(JSON.stringify(profile))} />))}
      </div>
  )
}

export default MyProfilesPage