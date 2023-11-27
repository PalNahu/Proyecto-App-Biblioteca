
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import '../../global.css'
import './login.css'
import { Button, Checkbox, Chip, CircularProgress, Divider, Input } from '@nextui-org/react'
import { useForm } from '../../../hooks/useForm'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../../store/auth/thunks'

export const Login = () => {

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
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  }

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 container-form">

              <h1 className='text-right text-2xl font-bold'>Iniciar Sesión</h1>
              <br></br>
              <h3 className='text-right text-base font-medium'>
                Te damos la bienvenida nuevamente.
              </h3>
            </div>
            <div className="col-md-1 col-sm-0 d-flex justify-center">
              <Divider orientation="vertical" className="h-96" />
            </div>
            <div className="col-md-5 col-sm-12 container-form">

              <div className='text-left'>
                <Input
                  className='form-component'
                  type="email"
                  label="Email"
                  variant='bordered'
                  placeholder='Ingrese su email'
                  name="email"
                  value={email}
                  onChange={onInputChange}
                />
                <Input
                  className='form-component'
                  type="password"
                  label="Contraseña"
                  variant='bordered'
                  placeholder='Ingrese su contraseña'
                  name="password"
                  value={password}
                  onChange={onInputChange}
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
                <div className='mt-3'>
                  Usuario nuevo?
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
