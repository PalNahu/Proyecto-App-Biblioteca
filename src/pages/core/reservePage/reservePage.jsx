import './ReservePage.css'
import '../../global.css';
import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
import { columns, libros } from "./data";

const statusColorMap = {
    activo: "success",
    paused: "danger",
    vacation: "warning",
};

export const ReservePage = () => {
    const renderCell = React.useCallback((libros, columnKey) => {
        const cellValue = libros[columnKey];

        switch (columnKey) {
    
            case "fechaReserva":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
                    </div>
                );
            case "Estado":
                return (
                    <Chip className="capitalize" color={statusColorMap[libros.Estado]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Detalles del libro">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Devolver el libro">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        <>
            <Table aria-label>
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                            <div className="text-center dark:text-white">
                                {column.name}
                            </div>
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={libros}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => (
                                <TableCell className="text-center dark:text-white">
                                    {columnKey === "actions" ? (
                                        <div className="flex justify-center">
                                            {renderCell(item, columnKey)}
                                        </div>
                                    ) : (
                                        renderCell(item, columnKey)
                                    )}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    );
}

