"use client";

import React from 'react'
import { WorkflowIcon, Settings } from 'lucide-react';
import { Sidebar, SidebarHeader, SidebarMenu, SidebarTrigger, SidebarContent, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import SidebarLogo from "@/components/shared/AppLogo";
import { usePathname, useRouter } from 'next/navigation';

const CustomSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    {
      title: "Workflows",
      url: "/workflow",
      icon: WorkflowIcon
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings
    }
  ];

  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row items-center justify-between px-4">
        <SidebarLogo />
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                isActive = {pathname === item.url}
                onClick={() => router.push(`/${item.url}`)}
                className="data-[active=true]:bg-primary/10 hover:bg-primary/10"
              >
                <item.icon/>
                <p className="font-medium">{item.title}</p>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

export default CustomSidebar