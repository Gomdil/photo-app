"use client"
import { CldImage } from "next-cloudinary";
const ImageBox = (props: any) => {
    return (         
        <CldImage        
        {...props}
        />        
    );
}
 
export default ImageBox;