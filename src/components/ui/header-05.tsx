/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import { useState, useEffect, ReactNode } from "react";
import {
  ArrowUpRightIcon,
  TrendingUpIcon,
  ShieldIcon,
  TargetIcon,
  SearchIcon,
  SparklesIcon,
  UserIcon,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Equal } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import WealthBuddyLogo from "@/components/WealthBuddyLogo";

interface HeaderProps {
  onAuthClick?: () => void;
}

const Header = ({ onAuthClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 h-12 flex justify-center w-full bg-background border-b border-border z-50">
      <div className="w-full max-w-7xl flex justify-center gap-6">
        <div className="flex w-full items-center justify-between">
          <a
            href="/"
            aria-label="home"
            className="flex gap-2 px-6 whitespace-nowrap items-center"
          >
            <WealthBuddyLogo size={28} className="text-foreground" />
            <span className="text-foreground font-bold text-lg hidden sm:inline">
              WealthBuddy
            </span>
          </a>

          <Menus />
          <Sheet>
            <div className="flex items-center px-2 gap-2">
              <Search />
              <button
                className="h-9 w-9 text-foreground hover:text-foreground/80 relative"
                onClick={onAuthClick}
                aria-label="Account"
              >
                <UserIcon className="h-4 w-4" />
              </button>
              <SheetTrigger asChild>
                <button
                  className="h-9 w-9 text-foreground hover:text-foreground/80 lg:hidden"
                  aria-label="Menu"
                >
                  <Equal className="h-5 w-5" />
                </button>
              </SheetTrigger>
            </div>
            <SheetContent
              side="right"
              className="w-[300px] bg-foreground/90 backdrop-blur-lg border-muted-foreground p-0"
            >
              <PhoneMenu onAuthClick={onAuthClick} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export function Search() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <>
      <button className="" onClick={() => setOpen(true)} aria-label="Search">
        <span className="flex grow items-center">
          <SearchIcon
            className="text-foreground hover:text-foreground/80 -ms-1 me-3"
            size={16}
            aria-hidden="true"
          />
        </span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search features, pricing, or help..." />
        <CommandList>
          <CommandEmpty>No matches found.</CommandEmpty>
          <CommandGroup heading="Quick Actions">
            <CommandItem onSelect={() => window.location.href = "#features"}>
              <TrendingUpIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>View Features</span>
            </CommandItem>
            <CommandItem onSelect={() => window.location.href = "#pricing"}>
              <TargetIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Check Pricing</span>
            </CommandItem>
            <CommandItem onSelect={() => window.location.href = "#how-it-works"}>
              <SparklesIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>How It Works</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navigate">
            <CommandItem onSelect={() => window.location.href = "/"}>
              <ArrowUpRightIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Go to Home</span>
            </CommandItem>
            <CommandItem onSelect={() => window.location.href = "/dashboard"}>
              <ArrowUpRightIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Go to Dashboard</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Help">
            <CommandItem>
              <ShieldIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Security & Privacy</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

interface ChildrenProps {
  children: ReactNode;
}
// Navigation Menu Components
const NavigationMenu: React.FC<ChildrenProps> = ({ children }) => (
  <nav className="relative z-50 flex items-center justify-center">
    {children}
  </nav>
);
const NavigationMenuList: React.FC<ChildrenProps> = ({ children }) => (
  <ul className="flex items-center justify-center space-x-1 list-none">
    {children}
  </ul>
);
interface NavigationMenuItemProps extends ChildrenProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({
  children,
  onMouseEnter,
  onMouseLeave,
}) => (
  <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    {children}
  </li>
);
interface NavigationMenuTriggerProps extends ChildrenProps {
  isActive?: boolean;
}
const NavigationMenuTrigger: React.FC<NavigationMenuTriggerProps> = ({
  children,
  isActive = false,
}) => (
  <button
    className={`inline-flex h-10 items-center justify-center px-4 py-2 text-xs transition-colors focus:outline-none ${
      isActive ? "text-foreground" : "text-foreground/80 hover:text-foreground"
    }`}
  >
    {children}
  </button>
);
interface NavigationMenuContentProps extends ChildrenProps {
  isOpen?: boolean;
}
const NavigationMenuContent: React.FC<NavigationMenuContentProps> = ({
  children,
  isOpen = false,
}) => {
  const [visible, setVisible] = useState(isOpen);
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const timeout = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);
  if (!visible) return null;
  return (
    <div
      className={`fixed left-0 right-0 top-12 z-40 w-screen bg-background border-b border-border
        transform transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
      `}
    >
      <div className="w-full max-w-7xl mx-auto px-8 py-12">{children}</div>
    </div>
  );
};

interface PhoneMenuProps {
  onAuthClick?: () => void;
}

const PhoneMenu = ({ onAuthClick }: PhoneMenuProps) => {
  const mainNav = [
    {
      title: "Features",
      href: "#features",
    },
    {
      title: "How It Works",
      href: "#how-it-works",
    },
    {
      title: "Pricing",
      href: "#pricing",
    },
    {
      title: "About",
      href: "#about",
    },
  ];
  return (
    <nav className="flex flex-col py-6">
      {mainNav.map((item) => (
        <div key={item.title} className="border-b border-white/10">
          <a
            href={item.href}
            className="w-full block px-6 py-3 text-left text-white text-sm hover:bg-white/5 transition-colors"
          >
            {item.title}
          </a>
        </div>
      ))}
      <div className="px-6 py-4 space-y-2">
        <button
          onClick={onAuthClick}
          className="w-full px-4 py-2 text-sm text-white border border-white/20 rounded-md hover:bg-white/5 transition-colors"
        >
          Login
        </button>
        <button
          onClick={onAuthClick}
          className="w-full px-4 py-2 text-sm bg-white text-foreground rounded-md hover:bg-white/90 transition-colors"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export function Menus() {
  type MenuName =
    | "features"
    | "solutions"
    | "resources"
    | "company"
    | null;
  const [activeMenu, setActiveMenu] = useState<MenuName>(null);
  const handleMouseEnter = (menuName: MenuName) => setActiveMenu(menuName);
  const handleMouseLeave = () => setActiveMenu(null);
  return (
    <div className="hidden md:block">
      <NavigationMenu>
        <NavigationMenuList>
          {/* Features */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("features")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "features"}>
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "features"}>
              <ul className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
                <li>
                  <a href="#features" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-primary text-foreground">
                      Smart Portfolio
                    </div>
                    <p className="text-sm text-muted-foreground">
                      AI-driven portfolio optimization
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#features" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-primary text-foreground">
                      Goal Planning
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Personalized financial goals
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#features" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-primary text-foreground">
                      Security
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Bank-grade encryption
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#features" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-primary text-foreground">
                      Analytics
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Real-time market insights
                    </p>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Solutions */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "solutions"}>
              Solutions
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "solutions"}>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <li>
                  <a href="#how-it-works" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-primary text-foreground">
                      For Beginners
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Start your investment journey
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-primary text-foreground">
                      For Professionals
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Advanced tools & strategies
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-primary text-foreground">
                      For Families
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Secure your family's future
                    </p>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Resources */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "resources"}>
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "resources"}>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <li>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-primary text-foreground">
                      Blog
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Investment tips & insights
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-primary text-foreground">
                      Help Center
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Get support & answers
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-primary text-foreground">
                      Guides
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Learn about investing
                    </p>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Company */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "company"}>
              Company
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "company"}>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <li>
                  <a href="#about" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-primary text-foreground">
                      About Us
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Our mission & team
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-primary text-foreground">
                      Careers
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Join our team
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-primary text-foreground">
                      Contact
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Get in touch
                    </p>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Pricing */}
          <NavigationMenuItem>
            <a href="#pricing">
              <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export { Header };