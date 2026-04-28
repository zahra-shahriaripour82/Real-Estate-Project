export type ProfileDataType = {
  title: string;
  description: string;
  location: string;
  phone: string;
  price: string;
  realState: string;
  constructionDate: Date;
  category: string;
  rules: string[];
  amenities: string[];
};

export interface TextInputProps {
  title: string;
  name: keyof ProfileDataType;
  profileData: ProfileDataType;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileDataType>>;
  textarea?: boolean;
}

export interface ProfileProps {
  data: {
    _id: string;
    title: string;
    description: string;
    location: string;
    phone: string;
    realState: string;
    price: number;
    constructionDate: string;
    category: string;
    amenities: string[];
    rules: string[];
    userId: string;
    published: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

export type ProfilesProps = {
  profiles: [
    {
      _id: string;
      title: string;
      description: string;
      location: string;
      phone: string;
      realState: string;
      price: number;
      constructionDate: string;
      category: string;
      amenities: string[];
      rules: string[];
      userId: string;
      published: boolean;
      createdAt: string;
      updatedAt: string;
      __v: number;
    },
  ];
};

export type ProfileWithoutUserIdProps = {
  
  data: Omit<ProfileProps["data"], "userId">;
};
// interface for categorycard componet
export interface categorycardProps {
  name: string;
  title: string;
}
