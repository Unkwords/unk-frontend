"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-3xl uppercase text-inherit text-sky-400">
            <span className="text-blue-700">Unk</span>
            words
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            underline="hover"
            className="text-lg"
            color="foreground"
            href="/"
          >
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            underline="hover"
            className="text-lg"
            color="foreground"
            href="#"
          >
            Diccionario
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            underline="hover"
            className="text-lg"
            color="foreground"
            href="#"
          >
            Acerca de
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Ingresar</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Registrarse
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full " href="#" size="lg">
            Inicio
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full " href="#" size="lg">
            Diccionario
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full " href="#" size="lg">
            Acerca de
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
export default Navigation;
