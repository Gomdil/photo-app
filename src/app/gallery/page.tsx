import { CldImage } from "next-cloudinary";
import UploadBotton from "./upload-button";
import cloudinary from 'cloudinary'
import ImageBox from "./ImageBox";


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
                    <div className="grid grid-cols-4 gap-4">
                    {results.resources.map((result)=>(
                    <ImageBox 
                        path="/gallery"
                        key={result.public_id}                        
                        imagesData={result}
                        alt="an images "
                        width="400"
                        height="300"
                    />
                    ))}
                    </div>
                </div>
            </div>
        </div>

       
     );
}
 
export default GalleryPage;