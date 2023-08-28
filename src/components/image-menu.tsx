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
import Link from "next/link"


  
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
                <DropdownMenuItem asChild className="flex justify-between" >      
                    <Button asChild variant="ghost">                      
                        <Link href={`/edit?publicid=${encodeURIComponent(image.public_id)}`} className="flex justify-between cursor-pointer">                                                
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                            이미지 수정
                        </Link>
                    </Button>
                </DropdownMenuItem>                 
            </DropdownMenuContent>
        </DropdownMenu>
        </div>      
    )
  }
  