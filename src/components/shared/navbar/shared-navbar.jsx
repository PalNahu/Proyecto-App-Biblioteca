import './shared-navbar.css';
import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Link } from 'react-router-dom';

export const SharedNavbar = () => {

  const listItem = [
    {
      path: '/',
      description: 'Inicio'
    },
    {
      path: '/search',
      description: 'Reserva tus libros'
    },
  ]

  const [currentNavbar, setCurrentNavbar] = useState("/");

  const handleClickButtonNavbar = (path) => {
    setCurrentNavbar(path);
  }

  return (
    <Navbar className='container-navbar' shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">APP BIBLIOTECA</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          listItem.map((item, index) => (
            <NavbarItem
              isActive={currentNavbar == item.path}

              key={index} >
              <Link
                style={{ 'color': currentNavbar != item.path ? 'inherit' : '#0d6efd' }}
                to={item.path}
                onClick={() => handleClickButtonNavbar(item.path)}>
                {item.description}
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" to="/login" variant="flat" onClick={() => handleClickButtonNavbar('')}>
            Iniciar Sesión
          </Button>
        </NavbarItem>
      </NavbarContent>

    </Navbar>
  )
}
