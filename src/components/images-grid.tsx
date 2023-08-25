"use client"
import ImageBox from "@/components/ImageBox";
import { SearchResult } from "@/app/gallery/page";
import { ReactNode } from "react";

const ImagesGrid = ({images , getImage}:{images:SearchResult[],getImage:(imageData:SearchResult)=>ReactNode}) => {
    const maxColumns = 4;

    const getColumns = (colsIndex:number) =>{
        return images.filter(
            (resource,idx)=>idx % maxColumns === colsIndex
        );
    }

    return ( 
        <div className="grid grid-cols-4 gap-4">
            {[
                getColumns(0),
                getColumns(1),
                getColumns(2),
                getColumns(3),
            ].map((columns,idx)=>(
                <div key={idx} className="flex flex-col gap-4">
                    {columns.map(getImage)}
                </div>
            ))}
        </div>
     );
}
 
export default ImagesGrid;