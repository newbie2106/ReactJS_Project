import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "./app-sidebar";



interface Props {
    children?: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
    return (

        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}  
