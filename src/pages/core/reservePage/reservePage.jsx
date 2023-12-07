import './ReservePage.css'
import '../../global.css';
import React, { useEffect } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue, CircularProgress } from "@nextui-org/react";

import { EyeIcon } from './icons/EyeIcon';
import { DeleteIcon } from './icons/DeleteIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getListReserves } from '../../../store/bibliotech/thunks';
import { useNavigate } from 'react-router-dom';

export const ReservePage = () => {

  const { isSaving, reserves } = useSelector(state => state.bibliotech);
  const { uid } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(!isSaving){
      dispatch(getListReserves(uid));
    }

  }, [isSaving, uid]);

  const deleteReservation = ($event) => {
    console.log($event);
  }


  if (isSaving) {
    return <CircularProgress className='mt-24' aria-label="Loading..." />
  }

  return (
    <>
      <Table aria-label>
        <TableHeader>
          <TableColumn align="start">
            <div className="text-center dark:text-white">
              Nombre de Libro
            </div>
          </TableColumn>
          <TableColumn align="start">
            <div className="text-center dark:text-white">
              Fecha de reserva
            </div>
          </TableColumn>
          <TableColumn align="start">
            <div className="text-center dark:text-white">
              Estado
            </div>
          </TableColumn>
          <TableColumn align="start">
            <div className="text-center dark:text-white">
              Acciones
            </div>
          </TableColumn>

        </TableHeader>

        <TableBody items={reserves} emptyContent={"No se hicieron reservas aún.."}>

          {
            reserves.map((reserve, index) => (
              <TableRow className='dark:text-white' key={index}>
                <TableCell>{reserve.volumeInfo.title}</TableCell>
                <TableCell>{reserve.dateReservation}</TableCell>
                <TableCell>
                  <Chip className="capitalize" color="success" size="sm" variant="flat">
                    Activo
                  </Chip>
                </TableCell>
                <TableCell>
                  <div className="relative flex items-center justify-center gap-2">
                    <Tooltip color="danger" content="Devolver el libro">
                      <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <DeleteIcon onClick={() => deleteReservation(reserve)}/>
                      </span>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            ))

          }

        </TableBody>
      </Table >
    </>
  );
}

