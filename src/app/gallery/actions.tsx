"use server"
import cloudinary from "cloudinary";
const setMark = async (
    publicId:string ,
    ismark : boolean,
) => {

    if (ismark) {
        console.log('삭제',publicId)
        await cloudinary.v2.uploader.remove_tag('favorite',[publicId]);
    }else{
        console.log('추가',publicId)
        await cloudinary.v2.uploader.add_tag('favorite',[publicId]);
    }     
   
}
 
export default setMark;