"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
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

    const [padingPrompt , setPadingPrompt] = useState("")
    const [prompt , setPrompt] = useState("")

    return ( 
        <div>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">수정/{publicid}</h1>                                    
                </div>

                <div className="flex gap-4
                ">
                <Button variant="secondary" onClick={()=>{setTransformation(undefined)}}>초기화</Button>
                <div className="flex flex-col gap-2 ">
                    <Button variant="secondary" onClick={()=>{
                        setTransformation("generative-fill");
                        setPrompt(padingPrompt);
                    }}>색상 채우기</Button>
                    <Label htmlFor="prompt">Prompt</Label>
                    <Input id="prompt" value={padingPrompt} onChange={e=>setPadingPrompt(e.currentTarget.value)}/>
                </div>
                <Button variant="secondary" onClick={()=>{setTransformation("blur")}}>blur</Button>
                <Button variant="secondary" onClick={()=>{setTransformation("grayscale")}}>흑백</Button>
                <Button variant="secondary" onClick={()=>{setTransformation("Pixelate")}}>모자이크</Button>
                <Button variant="secondary" onClick={()=>{setTransformation("Trim")}}>배경지우기</Button>                

                </div>
                <div className="grid grid-cols-2 gap-12">
                <CldImage src={publicid} width="400" height="300" alt="test"/>

                {tansformation === 'generative-fill' && (
                    <CldImage src={publicid} width="1800" height="1200" alt="test" fillBackground={
                        {
                            prompt ,
                        }
                    } crop="pad"/>
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