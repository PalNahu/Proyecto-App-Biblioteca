
import './shared-navbar.css';
import React, { useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Avatar, Tooltip, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../../store/auth/thunks';
import { SharedToggleDarkmode } from '../toggle-darkmode/shared-toggle-darkmode';
import { useMediaQuery } from '@react-hook/media-query';
import { clearBooks } from '../../../store/book/bookSlice';

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
    {
      path: '/reserves',
      description: 'Mis Reservas'
    }
  ];

  const { status, displayName, photoUrl } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 840px)'); 
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    if(location.pathname.includes('/auth') || location.pathname === '/'){
      dispatch(clearBooks());
    }
  }, [location.pathname])
  

  const onLogout = () => {
    dispatch(startLogout());
    navigate('/auth/login');
  }

  return (

    <Navbar className='container-navbar dark:text-white' shouldHideOnScroll>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />

      <NavbarBrand >
        <p className="font-bold text-inherit">APP BIBLIOTECA</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          listItem.map((item, index) => (
            <NavbarItem
              isActive={location.pathname === item.path}
              key={index} >
              <Link
                style={{ 'color': location.pathname != item.path ? 'inherit' : '#0d6efd' }}
                to={item.path}>
                {item.description}
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      {
        (!isMobile)
          ? (
            <NavbarContent justify="end">
              {
                (status === 'not-authenticated')
                  ? (
                    <NavbarItem>
                      <Button as={Link} color="primary" to="/auth/login" variant="flat">
                        Iniciar Sesión
                      </Button>

                    </NavbarItem>
                  ) : (
                    <>
                      <NavbarItem>
                        <Tooltip content={displayName}className='dark:text-white'>
                          <Avatar src={photoUrl} />
                        </Tooltip>
                      </NavbarItem>
                      <NavbarItem >
                        <Button as={Link} color="primary" to="/auth/login" variant="flat" onClick={() => onLogout()} >
                          Cerrar sesión
                        </Button>
                      </NavbarItem>
                    </>
                  )
              }

              <SharedToggleDarkmode>
              </SharedToggleDarkmode>

            </NavbarContent>

          )
          : (
            <SharedToggleDarkmode>
            </SharedToggleDarkmode>
          )
      }


      <NavbarMenu className='pt-12 rounded'>

        {listItem.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              // color={(currentNavbar === item.path) ? 'primary' : null}
              className="w-full dark:text-white"
              to={item.path}
              onClick={() => handleClickButtonNavbar(item.path)}
            >
              {item.description}
            </Link>
          </NavbarMenuItem>
        ))}

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
                  <Tooltip content={displayName} >
                    <Avatar src={photoUrl} />
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

      </NavbarMenu>


    </Navbar >
  )
}