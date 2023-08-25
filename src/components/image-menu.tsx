"use client"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Menu from "./icons/menu"
import FolderIcon from "./icons/folder"
  
  export function ImageMune() {
    return (
        <div className="absolute top-2 right-2">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="w-8 h-8 p-0">
                    <Menu/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-30"> 
                <DropdownMenuItem className="flex justify-between">
                    <FolderIcon />
                    <span>앨범 추가</span>                    
                </DropdownMenuItem>
                    
            </DropdownMenuContent>
        </DropdownMenu>
        </div>      
    )
  }
  