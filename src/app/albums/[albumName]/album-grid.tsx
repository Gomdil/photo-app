"use client"
import ImageBox from "../../../components/ImageBox";
import ImagesGrid from "@/components/images-grid";
import { SearchResult } from "../../gallery/page";

const AlbumGrid = ({images} : {images:SearchResult[]}) => {
    return ( 
        <ImagesGrid 
            images = {images}
            getImage={(imageData:SearchResult)=>{
            return <ImageBox
                    key={imageData.public_id}
                    imageData={imageData}
                    alt="an images "
                    width="400"
                    height="300" />;
        }}
        />
     );
}
 
export default AlbumGrid;