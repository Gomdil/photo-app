import UploadBotton from "../../gallery/upload-button";
import cloudinary from 'cloudinary'
import AlbumGrid from "./album-grid";
import ForceRefresh from "@/components/force-refresh";

export type SearchResult = {
    public_id:string;  
    tags : string[];  
}

const GalleryPage = async ({params} : {params : {albumName:string}}) => {

    const {albumName} = params;

    const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by('created_at','desc')
    .with_field('tags')
    .max_results(30)
    .execute()) as {resources : SearchResult[]};

    //console.log(results); 

    return ( 
        <div>
            <ForceRefresh/>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Gallery {albumName}</h1>                
                    <UploadBotton/>
                </div>
                <div>
                    <AlbumGrid
                        images = {results.resources}
                    />                    
                </div>
            </div>
        </div>

       
     );
}
 
export default GalleryPage;