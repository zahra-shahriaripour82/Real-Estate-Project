 export type ProfileDataType={
    title:string,
    description:string,
    location:string,
    phone:string,
     price:string,
    realState: string,
    constructionDate: Date,
    category: string,
    rules: string[],
    amenities:string[],
}

 export interface TextInputProps {
  title: string;
  name: keyof ProfileDataType;
  profileData: ProfileDataType;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileDataType>>;
  textarea?: boolean;

}

