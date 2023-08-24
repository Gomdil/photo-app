"use server"
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
import { resolve } from "path";
const setMark = async (
    publicId:string ,
    ismark : boolean
) => {

    if (ismark) {
        console.log('삭제',publicId)
        await cloudinary.v2.uploader.remove_tag('favorite',[publicId]);
    }else{
        console.log('추가',publicId)
        await cloudinary.v2.uploader.add_tag('favorite',[publicId]);
    }   
   await new Promise((resolve)=> setTimeout(resolve,500));
   revalidatePath('/gallery');
   
}
 
export default setMark;