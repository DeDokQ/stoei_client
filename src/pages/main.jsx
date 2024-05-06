import {observer} from "mobx-react-lite";
import Player from '../components/Player'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./Navbar";
import AppRouter from "../components/AppRouter";
import '../App.css'
import {exportMyOrders} from "../getMyOrders";
import {Col, Row, Card} from 'react-bootstrap'
import MainItem from './MainItem'
import React, { useState, useEffect } from 'react';

const OffcanvasExample = observer(() => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        exportMyOrders().then((result) => {
            console.log(result);
            setOrders(result);
        });
    }, []);

    return (
        <Row>
            {orders.map((nevs, index) => (
                <MainItem key={index} nevs={nevs} />
            ))}
            <div>
                <p>
                    dsadas
                </p>
            </div>
        </Row>
    );
});

export default OffcanvasExample;