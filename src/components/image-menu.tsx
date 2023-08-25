"use client"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,    
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Menu from "./icons/menu"
import { AddToAlbum } from "./add-to-album"
import { SearchResult } from "@/app/gallery/page"
import { useState } from "react"


  
  export function ImageMune({image}:{image:SearchResult;}) {
    const [open,setOpen] = useState(false);
    return (
        <div className="absolute top-2 right-2">
        <DropdownMenu open={open} onOpenChange={setOpen} >
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="w-8 h-8 p-0">
                    <Menu/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-70"> 
                <DropdownMenuItem asChild className="flex justify-between" >                    
                    <AddToAlbum image={image} onClose={()=>{setOpen(false)}}/>                   
                </DropdownMenuItem>                    
            </DropdownMenuContent>
        </DropdownMenu>
        </div>      
    )
  }
  