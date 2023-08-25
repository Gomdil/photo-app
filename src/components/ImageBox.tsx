"use client"
import Heart from "@/components/icons/Heart";
import { CldImage, CldImageProps } from "next-cloudinary";

import setMark from "../app/gallery/actions";
import { useState, useTransition } from "react";
import { SearchResult } from "../app/gallery/page";
import FullHeart from "@/components/icons/Full-Heart";
import { ImageMune } from "./image-menu";

const ImageBox = (
    props : {
        imageData : SearchResult;
        onUnheart?: (unheartedResource : SearchResult) => void;        
    } & Omit<CldImageProps , "src">
) => {

    const [trans , startTrans ] = useTransition();    

    const {imageData , onUnheart} = props;



    const [isFavorties , setIsFavorties] = useState(
        props.imageData.tags.includes('favorite')
    );

    return (  
        <div className="relative">
            <CldImage {...props} src={props.imageData.public_id}/>   

            {isFavorties ? 
                <FullHeart onClick={()=>{
                    onUnheart?.(imageData)
                    setIsFavorties(false)
                    startTrans(()=>{
                        setMark(props.imageData.public_id,true);
                    })                             
                }} 
                className="absolute top-5 left-2 text-red-500 hover:text-white cursor-pointer"
                />
            : 
                <Heart onClick={()=>{
                    setIsFavorties(true)
                    startTrans(()=>{
                        setMark(props.imageData.public_id,false);
                    })                
                }} 
                className="absolute top-5 left-2 hover:text-red-500 cursor-pointer"
                />
            }
            

            <ImageMune image={imageData}/>
            
        </div>            
    );
}
 
export default ImageBox;