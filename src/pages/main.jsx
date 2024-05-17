import {observer} from "mobx-react-lite";
import '../App.css'
import {exportMyOrders} from "../getMyOrders";
import MainItem from './MainItem'
import React, {useState, useEffect} from 'react';
import {boolean} from "yup";
import Nav from "react-bootstrap/Nav";


const OffcanvasExample = observer(() => {
    // const [news, setNews] = useState([]);
    // const [newsEmpty, setNewsEmpty] = useState("");
    //
    // useEffect(() => {
    //     let NewsArray = exportMyOrders()
    //     NewsArray.then(result => {
    //         setNewsEmpty(result)
    //     })
    //
    //     if(newsEmpty === "Пусто"){
    //         console.log("!@#!@#!@#");
    //         setNewsEmpty("Пусто");
    //     } else {
    //         console.log("23213123123123");
    //         setNewsEmpty("Есть");
    //         NewsArray.then((result) => {
    //             setNews(result);
    //         });
    //     }
    // }, []);

    return (
        <div>
           test
        </div>
    );
});

export default OffcanvasExample;