
"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ProgressLink } from '@/components/progress-link';
import { Search, User, Settings, LogOut, PanelLeft, Paintbrush, LayoutTemplate } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export function AdminHeader() {
    const pathname = usePathname();
    const breadcrumbParts = pathname.split('/').filter(p => p && p !== 'admin');
    const currentPage = breadcrumbParts[0] ? capitalize(breadcrumbParts[0]) : 'Dashboard';
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    
    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
             <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="sm:hidden">
                        <PanelLeft className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                    <SheetHeader>
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="grid gap-6 text-lg font-medium">
                        <ProgressLink
                            href="/"
                            onClick={() => setIsSheetOpen(false)}
                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                            >
                            <Paintbrush className="h-5 w-5 transition-all group-hover:scale-110" />
                            <span className="sr-only">Canvas & Palette</span>
                        </ProgressLink>
                         <ProgressLink
                            href="/admin"
                            onClick={() => setIsSheetOpen(false)}
                            className={pathname === "/admin" ? "font-bold text-foreground" : "text-muted-foreground hover:text-foreground"}
                        >
                            Dashboard
                        </ProgressLink>
                         <ProgressLink
                            href="/admin/orders"
                            onClick={() => setIsSheetOpen(false)}
                            className={pathname.startsWith("/admin/orders") ? "font-bold text-foreground" : "text-muted-foreground hover:text-foreground"}
                        >
                            Orders
                        </ProgressLink>
                         <ProgressLink
                            href="/admin/products"
                            onClick={() => setIsSheetOpen(false)}
                            className={pathname.startsWith("/admin/products") ? "font-bold text-foreground" : "text-muted-foreground hover:text-foreground"}
                        >
                            Products
                        </ProgressLink>
                         <ProgressLink
                             href="/admin/customers"
                             onClick={() => setIsSheetOpen(false)}
                             className={pathname.startsWith("/admin/customers") ? "font-bold text-foreground" : "text-muted-foreground hover:text-foreground"}
                        >
                            Customers
                        </ProgressLink>
                         <ProgressLink
                             href="/admin/promocodes"
                             onClick={() => setIsSheetOpen(false)}
                             className={pathname.startsWith("/admin/promocodes") ? "font-bold text-foreground" : "text-muted-foreground hover:text-foreground"}
                        >
                            Promocodes
                        </ProgressLink>
                        <ProgressLink
                            href="/admin/reviews"
                            onClick={() => setIsSheetOpen(false)}
                            className={pathname.startsWith("/admin/reviews") ? "font-bold text-foreground" : "text-muted-foreground hover:text-foreground"}
                        >
                            Reviews & Q&A
                        </ProgressLink>
                        <ProgressLink
                             href="/admin/hero"
                             onClick={() => setIsSheetOpen(false)}
                             className={pathname.startsWith("/admin/hero") ? "font-bold text-foreground" : "text-muted-foreground hover:text-foreground"}
                        >
                            Hero Section
                        </ProgressLink>
                        <ProgressLink
                             href="/admin/settings"
                             onClick={() => setIsSheetOpen(false)}
                             className={pathname.startsWith("/admin/settings") ? "font-bold text-foreground" : "text-muted-foreground hover:text-foreground"}
                        >
                            Settings
                        </ProgressLink>
                    </nav>
                </SheetContent>
            </Sheet>
            
            <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbPage>{currentPage}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                />
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="overflow-hidden rounded-full"
                    >
                        <Avatar className="h-9 w-9">
                            <AvatarImage src="https://placehold.co/40x40.png" alt="Admin" data-ai-hint="person face" />
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <ProgressLink href="/admin/settings" className="flex items-center w-full">
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                        </ProgressLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Logout</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
}
