"use client"

import { useState } from "react";

type profileDataType={
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

 export default  function AddProfilePage() {
      const [profileData, setProfileData] = useState<profileDataType>({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  return (
    <div>AddProfilePage</div>
  )
}

// export default AddProfilePage