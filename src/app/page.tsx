"use client"
import Image from 'next/image'
import { CldUploadButton ,CldImage } from 'next-cloudinary';
import { useState } from 'react';


export type UploadResult ={
  info : {
    public_id : string
  },
  event : 'success',
};

export default function Home() {
  const [imageId , setImageId] = useState("wrayeht2ys0kjerdvkas");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton 
        onUpload={(result:UploadResult)=>{
          return setImageId(result.info.public_id);
        }}

        uploadPreset="ylobabg3" 
      />
    </main>
  )
}

 
