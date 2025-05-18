"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {  Link, Moon,  Sun,  X } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"

function Footerdemo() {
  const { darkMode,toggleDarkMode } = useTheme();
  // const [isChatOpen, setIsChatOpen] = React.useState(false)

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  

  return (
    <footer className={`w-[100%] relative border-t ${darkMode?"bg-black/24":"bg-gray-900/6"} text-foreground transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <Image src="/images/logo_icon.png" alt="Trainer.ai Logo" className="w-10 h-10 rounded-lg"  
              width={40}
              height={40}
              
              />
              <span className={`text-2xl font-bold tracking-tight ${darkMode? "text-white/90":"text-gray-700"} `}>trainer.ai</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Your AI-powered fitness companion.<br />
              <span className="text-orange-500 font-semibold">Smarter workouts. Real results. 🚀</span>
            </p>
          </div>
       
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block transition-colors hover:text-primary">
                Home
              </Link>
              <a href="/download" className="block transition-colors hover:text-primary">
                Dowloads
              </a>
              {/* <a href="#" className="block transition-colors hover:text-primary">
                Services
              </a> */}
              {/* <a href="#" className="block transition-colors hover:text-primary">
                Products
              </a> */}
              {/* <a href="#" className="block transition-colors hover:text-primary">
                Contact
              </a> */}
            </nav>
          </div>

          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Etah, Uttar Pradesh</p>
              <p>New Sanjay Nagar</p>
              <p className="">Topmate: <a className="hover:text-[#FE5126] hover:underline " href="https://topmate.io/yaviral17" target="_blank">yaviral17</a> </p>
              <p className="">Email: <a className="hover:text-[#FE5126] hover:underline " href="mailto:yaviralatwork@gmail.com">yaviralatwork@gmail.com</a></p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              {/* <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider> */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://x.com/sudo_yavi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="icon" className="rounded-full">
                        <X className="h-4 w-4" />
                        <span className="sr-only">X</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on X</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://linkedin.com/in/yaviral17"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="icon" className="rounded-full">
                        <LinkedInLogoIcon className="h-4 w-4" />
                        <span className="sr-only">X</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on X</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://instagram.com/sudo_yavi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="icon" className="rounded-full">
                        <InstagramLogoIcon className="h-4 w-4" />
                        <span className="sr-only">X</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on X</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
             
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={toggleDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Trainer. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }