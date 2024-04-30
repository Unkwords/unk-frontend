"use client";
import { Inter } from "next/font/google";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      maxWidth="2xl"
      isBlurred
      isBordered
      onMenuOpenChange={setIsMenuOpen}
    >
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

      <NavbarContent className="hidden sm:flex gap-7" justify="center">
        <NavbarItem>
          <Link
            className="text-lg hover:text-blue-700"
            color="foreground"
            href="/"
          >
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-lg  hover:text-blue-700"
            color="foreground"
            href="/diccionario"
          >
            Diccionario
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-lg  hover:text-blue-700"
            color="foreground"
            href="#"
          >
            Comunidad
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-lg  hover:text-blue-700"
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
          <Link className="w-full " href="#">
            Inicio
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full " href="#">
            Diccionario
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full " href="#">
            Acerca de
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
export default Navigation;
