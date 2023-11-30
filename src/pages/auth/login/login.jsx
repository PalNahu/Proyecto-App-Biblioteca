
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../global.css';
import './login.css';
import { Button, Checkbox, Chip, Divider, Input } from '@nextui-org/react';
import { useForm } from '../../../hooks/useForm';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../../store/auth/thunks';
import { useMediaQuery } from '@react-hook/media-query';
import { EyeFilledIcon } from './EyeFilledIcon';
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

export const Login = () => {

  const isMediumScreen = useMediaQuery('(max-width: 1024px)');

  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm({
    email: '',
    password: ''
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword(formState));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const [isVisible, setInvisible] = React.useState(false);
  const toggleVisibility = () => setInvisible(!isVisible);

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="container p-20 dark:bg-black/20">
          <div className="flex flex-row flex-wrap justify-center ">
            <div className="lg:basis-6/12 md:basis-12/12 flex flex-col justify-center md:px-8 sm:p-0">

              <h1 className='text-2xl font-bold dark:text-white'>Iniciar Sesión</h1>
              <br></br>
              <h3 className='text-base font-medium dark:text-white'>
                Te damos la bienvenida nuevamente.
              </h3>
            </div>

            {
              (!isMediumScreen)
                ? (
                  <div className="basis-1/12 col-sm-0 d-flex justify-center">
                    <Divider orientation="vertical" className="h-96" />
                  </div>
                )
                : null

            }
            <div className="lg:basis-5/12 md:basis-12/12 container-form">

              <div className='text-left'>
                <Input
                  className='form-component dark:text-white'
                  type="email"
                  label="Email"
                  variant='bordered'
                  placeholder='Ingrese su email'
                  name="email"
                  value={email}
                  onChange={onInputChange}
                />
                {/*//TODO: ver contraseña */}
                <Input
                  className='form-component dark:text-white'
                  type={isVisible ? "text" : "password"}
                  label="Contraseña"
                  variant='bordered'
                  placeholder='Ingrese su contraseña'
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  endContent={<button className='focus: outline-none' type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>}
                   description="Nunca compartiremos sus datos con nadie."

                />

                <Checkbox className='mt-2' defaultSelected>Recordar sesión</Checkbox>

                <div className='form-component text-center'>
                  <Chip
                    style={{
                      display: !!!errorMessage ? 'none' : '',
                    }}
                    variant="flat"
                    color="danger"
                  >
                    {errorMessage}
                  </Chip>
                </div>

                <div className="row">

                  <div className="col-md-6">
                    <Button
                      color="primary"
                      variant="ghost"
                      className='button-submit'
                      type='submit'
                      isDisabled={isAuthenticating}
                    >
                      Iniciar sesión
                    </Button>
                  </div>

                  <div className="col-md-6">
                    <Button
                      color="primary"
                      variant="ghost"
                      className='button-submit'
                      onClick={onGoogleSignIn}
                      isDisabled={isAuthenticating}
                    >
                      Google
                    </Button>
                  </div>

                </div>
                <div className='mt-3 dark:text-white'>
                  ¿Usuario nuevo?
                  <Button size="sm" color="primary" variant="light" >
                    <Link
                      to="/auth/register"
                    >
                      Registrate aqui
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </form>
    </>
  )
}
