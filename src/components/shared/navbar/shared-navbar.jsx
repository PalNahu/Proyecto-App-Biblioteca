
import './shared-navbar.css';
import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Avatar, Tooltip } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../../store/auth/thunks';

export const SharedNavbar = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    const body = document.querySelector("body");
    const root = document.querySelector("#root");
    const html = document.querySelector("html");
  
    const footer = document.querySelector(".footer");

    if (theme === "dark") {
      body.classList.add("dark");
      body.style.backgroundColor = "#000";
      root.classList.add("dark");
      root.style.backgroundColor = "#000";
      footer.classList.add("dark");
      footer.style.backgroundColor = "#000";
      html.classList.add("dark");
      html.style.backgroundColor = "#000";

    } else {
      body.classList.remove("dark");
      body.style.backgroundColor = "#fff";
      root.classList.remove("dark");
      root.style.backgroundColor = "#fff";
      footer.classList.remove("dark");
      footer.style.backgroundColor = "#fff";
      html.classList.remove("dark");
      html.style.backgroundColor = "#fff";
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };


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
    <Navbar className='container-navbar dark:text-white' shouldHideOnScroll>
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
        <button 
    title="Toggle Theme" 
    onclick="theme()"
    class="
        w-12 
        h-6 
        rounded-full 
        p-1 
        bg-gray-400 
        dark:bg-gray-600 
        relative 
        transition-colors 
        duration-500 
        ease-in
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-700 
        dark:focus:ring-blue-600 
        focus:border-transparent
      " onClick={handleChangeTheme}>
      <div id="toggle"
        class="
            rounded-full 
            w-4 
            h-4 
            bg-blue-600 
            dark:bg-blue-500 
            relative 
            ml-0 
            dark:ml-6 
            pointer-events-none 
            transition-all 
            duration-300 
            ease-out
        " >
      </div>
</button>Dark mode
        </NavbarContent>

    </Navbar>
  )
}