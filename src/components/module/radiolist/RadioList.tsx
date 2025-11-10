import styles from "@/module/radiolist/RadioList.module.css";
import { ProfileDataType } from "@/utils/types/Types";
import { type } from "../../../../.next/types/routes";

type RadioListProps = {
  profileData: ProfileDataType;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileDataType>>;
};

function RadioList({ profileData, setProfileData }: RadioListProps) {
  const { category } = profileData;
  const changeHandler=(e: React.ChangeEvent<HTMLInputElement>)=>{
const {name,value}=e.target
setProfileData({...profileData,[name]:value})
  }
  
  return (
    <div className={styles.container}>
      <p>دسته بندی</p>
      <div className={styles.main}>
        <div>
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            name="category"
            id="villa"
            value="villa"
            checked={category === "villa"}
            onChange={changeHandler}
          />
        </div>
         <div>
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            name="category"
            value="apartment"
            id="apartment"
            checked={category === "apartment"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            name="category"
            value="store"
            id="store"
            checked={category === "store"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            name="category"
            value="office"
            id="office"
            checked={category === "office"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;
