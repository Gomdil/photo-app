"use client"
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

const EditPage = ({searchParams:{publicid}}:{
    searchParams : {
        publicid : string 
    }
}) => {   
    const [tansformation , setTransformation] = useState<
        undefined|"generative-fill"|"blur"
        |"grayscale" | "Pixelate" | "Trim"
    >();
    return ( 
        <div>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">수정/{publicid}</h1>                                    
                </div>

                <div className="flex gap-4
                ">
                <Button variant="secondary" onClick={()=>{setTransformation(undefined)}}>초기화</Button>
                <Button variant="secondary" onClick={()=>{setTransformation("generative-fill")}}>색상 채우기</Button>
                <Button variant="secondary" onClick={()=>{setTransformation("blur")}}>blur</Button>
                <Button variant="secondary" onClick={()=>{setTransformation("grayscale")}}>흑백</Button>
                <Button variant="secondary" onClick={()=>{setTransformation("Pixelate")}}>모자이크</Button>
                <Button variant="secondary" onClick={()=>{setTransformation("Trim")}}>배경지우기</Button>                

                </div>
                <div className="grid grid-cols-2 gap-12">
                <CldImage src={publicid} width="300" height="200" alt="test"/>

                {tansformation === 'generative-fill' && (
                    <CldImage src={publicid} width="300" height="200" alt="test" fillBackground crop="pad"/>
                )}

                {tansformation === 'blur' && (
                    <CldImage src={publicid} width="300" height="200" alt="test" blur="1200"/>
                )}

                {tansformation === 'grayscale' && (
                    <CldImage src={publicid} width="300" height="200" alt="test" grayscale/>
                )}

                
                {tansformation === 'Pixelate' && (
                    <CldImage src={publicid} width="300" height="200" alt="test" pixelate/>
                )}

                {tansformation === 'Trim' && (
                    <CldImage src={publicid} width="300" height="200" alt="test" removeBackground trim/>
                )}





                </div>
                
            </div>
        </div>
     );
} 
export default EditPage;