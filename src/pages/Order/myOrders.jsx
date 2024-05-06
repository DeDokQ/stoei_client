import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {exportMyOrders} from "../../getMyOrders";
import {useEffect, useState} from "react";
import {getId, getRole} from "../../http/UserApi";

const columns = [
    { field: 'cargoId', headerName: 'cargoId', width: 70 },
    { field: 'orderId', headerName: 'orderId', width: 70 },
    { field: 'departurePoint', headerName: 'departurePoint', width: 130 },
    { field: 'deliveryPoint', headerName: 'deliveryPoint', width: 130 },
    { field: 'dispatchDate', headerName: 'dispatchDate', width: 130 },
    { field: 'deliveryDate', headerName: 'deliveryDate', width: 130 },
    { field: 'supInformation', headerName: 'supInformation', width: 130 },
    { field: 'cargoName', headerName: 'cargoName', width: 130 },
    { field: 'length', headerName: 'length', width: 130 },
    { field: 'height', headerName: 'height', width: 130 },
    { field: 'width', headerName: 'width', width: 130 },
    { field: 'weight', headerName: 'weight', width: 130 },
    { field: 'totalPrice', headerName: 'totalPrice', width: 130 },
    { field: 'status', headerName: 'status', width: 130 },
];

export default function DataTable() {
    let [myList, setMyList] = useState([]);
    useEffect( () => {
        const fetchData = async () => {
            const data = await exportMyOrders()
            setMyList(data)
        };
        fetchData();
    }, []);

    return (
        <div style={{height: 400, width: '100%'}}>
            {localStorage.getItem("role") === "USER" ?
                    <div>
                        <p className="text-center h3 fw-bold mb-5 mt-4">ПИЗДА</p>
                    </div>
                :
                <div>
                    <p className="text-center h3 fw-bold mb-5 mt-4">НЕ ПИЗДА</p>
                </div>
            }

            <p className="text-center h3 fw-bold mb-5 mt-4">Информация об отправленном грузе</p>
            <DataGrid
                rows={myList}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {pageSize: 5},
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}