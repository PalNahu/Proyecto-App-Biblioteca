import './shared-navbar.css';
import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Avatar, Tooltip } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../../store/auth/thunks';

export const SharedNavbar = () => {

  //TODO: Arreglar estado de navbar

  const { status, displayName, photoUrl } = useSelector(state => state.auth);
  const dispatch = useDispatch();

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

  const onLogin = (path) => {
    setCurrentNavbar(path);
  }

  const onLogout = () => {
    dispatch(startLogout());
    navigate('/auth/login');
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

        {
          (status === 'not-authenticated')
            ? (
              <NavbarItem>
                <Button as={Link} color="primary" to="/auth/login" variant="flat" onClick={() => onLogin('')}>
                  Iniciar Sesión
                </Button>

              </NavbarItem>
            ) : (
              <>
                <NavbarItem>
                  <Tooltip content={displayName}>
                    <Avatar src={(!!!photoUrl) ? "" : photoUrl} />
                  </Tooltip>
                </NavbarItem>
                <NavbarItem>
                  <Button as={Link} color="primary" to="/auth/login" variant="flat" onClick={() => onLogout()}>
                    Cerrar sesión
                  </Button>
                </NavbarItem>
              </>
            )
        }

      </NavbarContent>

    </Navbar>
  )
}
