'use client'

// components/Sidebar.tsx
import Link from "next/link"
import { Home, Settings, Folder, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { redirect } from "next/navigation"


type SidebarProps = {
    isOpen: boolean
    onClose: () => void // 👈 add onClose prop
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const { theme, setTheme, resolvedTheme, systemTheme } = useTheme()

    useEffect(() => { console.log(systemTheme, theme) })

    return (
        <aside
            className={cn(
                "fixed top-0 left-0 z-40 h-screen w-64 bg-white shadow-lg border-r p-4 transition-transform duration-300 ease-in-out",
                isOpen ? "translate-x-0" : "-translate-x-full",  'dark:bg-gray-900'
            )}
        >
            <div className="flex justify-end mb-4">
                <Button variant="ghost" onClick={onClose} size="icon">
                    <X className="h-5 w-5" />
                </Button>
            </div>
            <nav className="flex flex-col">
                <div onClick={() => { onClose(); redirect('/'); }} className="flex cursor-pointer items-center gap-2 py-2 px-1 dark:text-white text-gray-700 dark:hover:text-black hover:text-black hover:opacity-80 transition hover:bg-blue-100">
                    <Image
                        src="/images/btn/home_btn.png"
                        alt="Menu"
                        width={30}
                        height={30}
                        className="transition mr-[1rem]"
                    />
                    Home
                </div>
                <div onClick={() => { onClose(); setTheme(resolvedTheme === "dark" ? "light" : "dark") }} className="flex cursor-pointer items-center gap-2 py-2 px-1 text-gray-700 dark:text-white dark:hover:text-black hover:text-black hover:opacity-80 transition hover:bg-blue-100">
                    <Image
                        src="/images/btn/colormode_btn.png"
                        alt="Menu"
                        width={30}
                        height={30}
                        className="hover:opacity-80 transition mr-[1rem]"
                    />
                    Change Theme
                </div>
            </nav>
        </aside>
    )
}
