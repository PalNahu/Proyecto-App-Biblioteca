import { Button, Checkbox, Divider, Input } from '@nextui-org/react'
import { SharedNavbar } from '../../components/shared/navbar/shared-navbar'
import '../global.css'
import './login.css'

import React from 'react'

export const Login = () => {
    return (
        <>
            <SharedNavbar></SharedNavbar>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 container-form">
                            <h1 className='text-right text-2xl font-bold'> Iniciar Sesión</h1>
                            <br></br>
                            <h3 className='text-right text-base font-medium'>
                                Te damos la bienvenida nuevamente.
                            </h3>
                    </div>
                    <div className="col-md-1 col-sm-0 d-flex justify-center">
                        <Divider orientation="vertical" className="h-96" />
                    </div>
                    <div className="col-md-5 col-sm-12 container-form text-left">
                            <Input className='form-component' type="email" label="Email" placeholder='Ingrese su email' />
                            <Input className='form-component' type="password" label="Contraseña" placeholder='Ingrese su contraseña' />
                            <Checkbox className='mt-2' defaultSelected>Recordar sesión</Checkbox>
                            <Button color="primary" variant="ghost" className='button-submit'>
                                Iniciar sesion
                            </Button> 
                    </div>
                </div>
            </div>
        </>
    )
}
