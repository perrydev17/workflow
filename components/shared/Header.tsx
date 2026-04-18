"use client";

import React from 'react';
import { SunIcon, MoonIcon, LogOutIcon } from 'lucide-react';
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from '@/lib/utils';


const Header = () => {
  const { theme, setTheme }  = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="border-b border-border">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="relative rounded-full size-8" 
          onClick={() => setTheme(isDark ? "light":"dark")}>
            <SunIcon className={cn("absolute h-5 w-5", isDark ? "scale-100": "scale-0")}/>
            <MoonIcon className={cn("absolute h-5 w-5", isDark ? "scale-0": "scale-100")}/>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="size-8 shrink-0 rounded-full">
                <AvatarImage src="">
                  <AvatarFallback className="rounded-full"></AvatarFallback>
                </AvatarImage>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <LogOutIcon className="h-4 w-4"/>
                <p>Logout</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
      </div>
    </div>
  )
}

export default Header