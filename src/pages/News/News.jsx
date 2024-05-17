import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {exportMyNews} from "../../getMyOrders";
import {useEffect, useState} from "react";
import {getId, getRole} from "../../http/UserApi";
import MainItem from "../MainItem";


export default function DataTable() {
    const [news, setNews] = useState([]);
    const [newsEmpty, setNewsEmpty] = useState("");

    useEffect(() => {
        let NewsArray = exportMyNews()
        NewsArray.then(result => {
            setNewsEmpty(result)
        })

        if(newsEmpty === "Пусто"){
            setNewsEmpty("Пусто");
        } else {
            setNewsEmpty("Есть");
            NewsArray.then((result) => {
                setNews(result);
            });
        }
    }, []);

    return (
        <div>
            {newsEmpty === "Пусто" ?
                <div>
                    <h1>Новостей пока нету</h1>
                </div>
                :
                <>
                    {news.map((nevs, index) => (
                        <div key={index} style={{margin: 'auto', textAlign: 'center'}}>
                            <MainItem nevs={nevs}/>
                        </div>
                    ))}
                </>
            }
        </div>
    );
}