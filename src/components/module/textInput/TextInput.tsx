import {  TextInputProps } from "@/utils/types/Types";
import styles from "@/module/textInput/TextInput.module.css"
import {p2e }from "@/utils/replaceNumber";




function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}: TextInputProps) {
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };

  return (
    <div className={styles.container}>
      <p>{title}</p>
      {textarea ? (
        <textarea
          name={name}
          value={profileData[name] as string}
          onChange={changeHandler}
        />
      ) : (
        <input
          type="text"
          name={name}
          value={profileData[name] as string}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}

export default TextInput;
