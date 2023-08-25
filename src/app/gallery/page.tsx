import { CldImage } from "next-cloudinary";
import UploadBotton from "./upload-button";
import cloudinary from 'cloudinary'
import ImageBox from "../../components/ImageBox";
import ImagesGrid from "@/components/images-grid";
import GalleryGrid from "./gallery-grid";


export type SearchResult = {
    public_id:string;  
    tags : string[];  
}

const GalleryPage = async () => {

    const results = (await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at','desc')
    .with_field('tags')
    .max_results(30)
    .execute()) as {resources : SearchResult[]};

    //console.log(results);
  

    return ( 
        <div>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Gallery</h1>                
                    <UploadBotton/>
                </div>
                <div>
                    <GalleryGrid
                        images = {results.resources}
                    />                    
                </div>
            </div>
        </div>

       
     );
}
 
export default GalleryPage;