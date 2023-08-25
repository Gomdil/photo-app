import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import FolderIcon from "./icons/folder"
import { useState } from "react"
import { SearchResult } from "@/app/gallery/page"
import CreateFolder from "./action"

export function  AddToAlbum({
  image , onClose
}:{
  image:SearchResult;  
  onClose:()=>void; 
}) {

  const [albumName , setAlbumName] = useState("");
  const [open , setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(newOpenState)=>{
      setOpen(newOpenState);
      if(!newOpenState){
        onClose();
      }      
    }}>
      <DialogTrigger asChild className="w-70">
        <Button variant="ghost">
            <FolderIcon />
            <span>앨범 추가</span> 
        </Button>        
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>앨범 추가</DialogTitle>
          <DialogDescription>
            사진을 저장할 앨범을 추가하세요.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              앨범명
            </Label>
            <Input 
            onChange={(e)=>{setAlbumName(e.currentTarget.value)}}
            id="albumname" value={albumName} className="col-span-3" 
            />
          </div>          
        </div>
        <DialogFooter>
          <Button 
            onClick={async ()=>{
                onClose();
                setOpen(false);
                await CreateFolder(image , albumName)
            }}
            type="submit"
          >
            추가하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
