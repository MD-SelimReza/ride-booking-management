import { MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <section className="py-4 sticky top-0 z-50">
      <div className="max-w-[1440px] w-full mx-auto px-5">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <svg
              width="45"
              height="35"
              viewBox="0 0 50 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43 31L31 40H5L7 35L12 31H29L32 35L40 11L45 7H50L43 31ZM43 5L38 9H21L18 5L10 29L5 33H0L7 9L19 0H45L43 5ZM24 13H35L29 31L26 27H15L21 9L24 13Z"
                fill="#297AFF"
              ></path>
            </svg>
            <span className="text-2xl font-semibold tracking-tighter">
              Ridesphere
            </span>
          </Link>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={navigationMenuTriggerStyle()}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/how-it-works"
                  className={navigationMenuTriggerStyle()}
                >
                  How it works
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/pricing"
                  className={navigationMenuTriggerStyle()}
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className={navigationMenuTriggerStyle()}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="outline">Sign in</Button>
            <Button>Start for free</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link to="/" className="flex items-center gap-2">
                    <svg
                      width="30"
                      height="25"
                      viewBox="0 0 50 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M43 31L31 40H5L7 35L12 31H29L32 35L40 11L45 7H50L43 31ZM43 5L38 9H21L18 5L10 29L5 33H0L7 9L19 0H45L43 5ZM24 13H35L29 31L26 27H15L21 9L24 13Z"
                        fill="#297AFF"
                      ></path>
                    </svg>
                    <span className="text-lg font-semibold tracking-tighter">
                      Ridesphere
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  <Link to="/" className="font-medium">
                    Home
                  </Link>
                  <Link to="/about" className="font-medium">
                    About
                  </Link>
                  <Link to="/how-it-works" className="font-medium">
                    How it works
                  </Link>
                  <Link to="/pricing" className="font-medium">
                    Pricing
                  </Link>
                  <Link to="/contact" className="font-medium">
                    Contact
                  </Link>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline">Sign in</Button>
                  <Button>Start for free</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
