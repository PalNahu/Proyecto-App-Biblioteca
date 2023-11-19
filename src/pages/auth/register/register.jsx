
import React from 'react'
import  './register.css'
import '../../global.css'
import { SharedNavbar } from '../../../components/shared/navbar/shared-navbar'
import { Button, Input } from '@nextui-org/react'

export const Register = () => {
  return (
    <>
     
        <div className=" container d-flex justify-center align-center">
          <div>
            <h1 className='text-2xl'>Regístrate</h1>

            <Input className='form-component' type="text" label="Nombre" />
            <Input className='form-component' type="email" label="Email" />
            <Input className='form-component' type="password" label="Contraseña" />
            <Input className='form-component' type="password" label="Confirmar contraseña" />

            <Button color="primary" variant="ghost" className='mt-3 w-80'>
              Registrarse
            </Button> 
          </div>

        </div>
      
    </>
  )
}
