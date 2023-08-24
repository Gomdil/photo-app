"use client"
import Heart from "@/components/icons/Heart";
import { CldImage } from "next-cloudinary";

import setMark from "./actions";
import { useTransition } from "react";
import { SearchResult } from "./page";
import FullHeart from "@/components/icons/Full-Heart";

const ImageBox = (props: any & SearchResult) => {

    const [trans , startTrans ] = useTransition();
    const isFov = props.imagesData.tags.includes('favorite')

    return (  
        <div className="relative">
            <CldImage {...props} src={props.imagesData.public_id}/>   

            {isFov ? 
                <FullHeart onClick={()=>{
                    startTrans(()=>{
                        setMark(props.imagesData.public_id,true);
                    })                             
                }} 
                className="absolute top-5 right-2 text-red-500 hover:text-white cursor-pointer"
                />
            : 
                <Heart onClick={()=>{
                    startTrans(()=>{
                        setMark(props.imagesData.public_id,false);
                    })                
                }} 
                className="absolute top-5 right-2 hover:text-red-500 cursor-pointer"
                />
            }
            


            
        </div>            
    );
}
 
export default ImageBox;