

import React, { useMemo, useState } from 'react'
import './register.css'
import '../../global.css'
import { Button, Chip, CircularProgress, Input } from '@nextui-org/react'
import { useForm } from '../../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../../store/auth/thunks'

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener un @.'],
  password: [(value) => value.length >= 6, 'La contraseña debe de tener más 6 digitos.'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const Register = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className=" container d-flex justify-center align-center">

          <div>
            <h1 className='text-2xl'>Regístrate</h1>

            <Input
              className='form-component'
              type="text"
              label="Nombre"
              variant='bordered'
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              isInvalid={!!displayNameValid && formSubmitted}
              errorMessage={(formSubmitted) ? displayNameValid : ''}
            />
            <Input
              className='form-component'
              type="email"
              label="Email"
              variant='bordered'
              name="email"
              value={email}
              onChange={onInputChange}
              isInvalid={!!emailValid && formSubmitted}
              errorMessage={(formSubmitted) ? emailValid : ''}
            />
            <Input
              className='form-component'
              type="password"
              label="Contraseña"
              variant='bordered'
              name="password"
              value={password}
              onChange={onInputChange}
              isInvalid={!!passwordValid && formSubmitted}
              errorMessage={(formSubmitted) ? passwordValid : ''}
            />

            {/* <Input
              className='form-component'
              type="password"
              label="Confirmar contraseña" 
            /> */}

            <div className='form-component'>
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

            <Button
              color="primary"
              variant="ghost"
              className='mt-3 w-80'
              type='submit'
              isDisabled={isCheckingAuthentication}
            >
              Registrarse
            </Button>

          </div>



        </div>
      </form>

    </>
  )
}
