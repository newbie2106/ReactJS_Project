"use client"

import * as React from "react"
import {
  Airplay,
  ChartBarStacked,
  FileText,
  MessageSquareMore,
  Newspaper,
  Package,
  Search,
  TicketPercent,
  UsersRound,
} from "lucide-react"


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"

const data = {
  user: {
    name: "Trịnh Tông Hiệp",
    email: "hiep@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Static Content",
      url: "#",
      icon: Airplay,
      isActive: true,

    },
    {
      title: "Accounts",
      url: "#",
      icon: UsersRound,
      items: [
        {
          title: "Account Admin Management",
          url: "#",
        },
        {
          title: "Account Doula Management",
          url: "#",
        },
        {
          title: "Account Client Management",
          url: "#",
        },
      ],

    },
    {
      title: "Article",
      url: "#",
      icon: MessageSquareMore,

    },
    {
      title: "PD Session",
      url: "#",
      icon: Newspaper,

    },
    {
      title: "Category",
      url: "#",
      icon: ChartBarStacked,

    },
    {
      title: "Subscriptions",
      url: "#",
      icon: Package,

    },
    {
      title: "Voucher",
      url: "#",
      icon: TicketPercent,

    },
    {
      title: "Help Documents",
      url: "#",
      icon: FileText,

    },
    {
      title: "Search Settings",
      url: "#",
      icon: Search,

    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="p-0">
        
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="p-0">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
