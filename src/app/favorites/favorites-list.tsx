"use client"
import ImageBox from "@/components/ImageBox";
import { SearchResult } from "../gallery/page";
import { useEffect, useState } from "react";
import ImagesGrid from "@/components/images-grid";
const FavoritesList = ({
    initialResorces
}:{
    initialResorces:SearchResult[]
}) => {

    const [resources , setResources] = useState(initialResorces)

    useEffect(()=>{
        setResources(initialResorces)
    },[initialResorces])

    return (             
    <ImagesGrid images = {resources}
        getImage={(imageData : SearchResult) => {
            return (
                <ImageBox                 
                    key={imageData.public_id}                        
                    imageData={imageData}
                    alt="an images "
                    width="400"
                    height="300"
                    onUnheart={(unHeartResorces)=>{
                        setResources((currentResources)=>
                            currentResources.filter(
                                (resource) => resource.public_id !== unHeartResorces.public_id
                            )
                        );
                    }}
                />
            )
        }
        }
    />  
             
        );
}
 
export default FavoritesList;
