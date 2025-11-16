
import styles from "@/module/textlist/TextList.module.css"
import { ProfileDataType } from '../../../utils/types/Types';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineLibraryAdd } from 'react-icons/md';


type TextListInputProps={
title:string,
type:"rules" | "amenities",
 profileData: ProfileDataType;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileDataType>>;
}



function TextList({title,type,profileData,setProfileData}:TextListInputProps) {

  const changeHandler=(e: React.ChangeEvent<HTMLInputElement>,index:number)=>{
    const {value}=e.target
     const list = [...profileData[type]];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });

  }
const deleteHandler=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>,index:number)=>{

    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });

}



    const addHandler=( e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        
       setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
    
       
}

   console.log(profileData);




  return (
    <div className={styles.container}>
    <p>{title}</p>
      {profileData[type].map((i, index) => (
        <div className={styles.card} key={index}>
          <input
            type="text"
            value={i}
            onChange={(e) => changeHandler(e,index)}
          />
          <button onClick={() => deleteHandler(index)}>
            حذف
            <AiOutlineDelete />
          </button>
        </div>
      ))}
        <button onClick={addHandler}>
        افزودن
        <MdOutlineLibraryAdd />
      </button>
    </div>
  )
}

export default TextList