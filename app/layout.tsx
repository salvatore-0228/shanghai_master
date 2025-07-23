
"use client"

import type React from "react"
import { Inter } from "next/font/google"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const [fade, setFade] = useState(true);
  const [currentPath, setCurrentPath] = useState(pathname);
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen((prev) => !prev)
  const closeSidebar = () => setSidebarOpen(false)

  // Next.js App Router: usePathname hook
  let nextPathname = "";
  try {
    nextPathname = require('next/navigation').usePathname?.() || pathname;
  } catch { }

  useEffect(() => {
    if (currentPath !== nextPathname) {
      setFade(false);
      const timeout = setTimeout(() => {
        setCurrentPath(nextPathname);
        setFade(true);
      }, 300); // duration matches transition
      return () => clearTimeout(timeout);
    }
  }, [nextPathname, currentPath]);

  return (
    <html lang="en" className="h-full w-full" suppressHydrationWarning >
      <body className={`${inter.className} h-full w-full overflow-hidden`}>
        {/* Menu Image Button (Only visible when sidebar is closed & on mobile) */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {!sidebarOpen && (
            <div className="absolute left-[1rem] bottom-0 z-50">
              <button onClick={toggleSidebar} className="focus:outline-none">
                <Image
                  src="/images/btn/side_btn.png"
                  alt="Menu"
                  width={35}
                  height={35}
                  className="hover:opacity-80 transition"
                />
              </button>
            </div>
          )}
          {/* Sidebar */}
          <Sidebar isOpen={sidebarOpen} onClose={() => { setSidebarOpen(false) }} />
          <div
            className={`h-screen w-screen overflow-hidden bg-background text-foreground transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
          >
            {children}
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
