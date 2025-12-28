import Link from "next/link";
import { LogOut, Moon, Settings, SquareMenu, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex p-4 items-center justify-between">
      {/* Left Side */}
      collaps button
      {/* Right Side */}
      <div className="flex items-center gap-4 ">
        <Link href="/">Dashboard</Link>
        <Moon />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings /> Setting
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <SquareMenu />
              {/* sr-only sirf blind logo ke liye  */}
              <span className="sr-only">open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>menu item 1</DropdownMenuItem>
            <DropdownMenuItem>menu item 2</DropdownMenuItem>
            <DropdownMenuItem>menu item 3</DropdownMenuItem>
            <DropdownMenuItem>menu item 4</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
