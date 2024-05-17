import React, {useEffect, useState} from 'react';
import UserTable from './usersTable';
import {exportMyOrders} from "../../getMyOrders";
import {getAllUsers} from "../../http/UserApi";
import {getAllNews} from "../../http/OrderApi"; // Путь к вашему компоненту UserTable

function App() {

    const [users, setUsers] = useState([]);

    const exportMyUsers = async () => {
        let data = await getAllUsers();
        let result = await data.json();

        if (result.length === 0) {
            console.log("ПИЗДА");
            return "Пусто"
        } else {
            console.log("res ", result);
            console.log("YT ПИЗДА");
            return result;
        }

    }

    useEffect(() => {
        let NewsArray = exportMyUsers()
        NewsArray.then(result => {
            console.log("!>!>!>!> ", result)
            setUsers(result)
        })
    }, []);

    // const users = [
    //     { id: 1, firstName: 'Иван', lastName: 'Иванов', email: 'ivan@example.com', role: 'Пользователь' },
    //     { id: 2, firstName: 'Петр', lastName: 'Петров', email: 'petr@example.com', role: 'Администратор' },
    //     // Другие пользователи...
    // ];

    return (
        <div>
            <h1>Таблица пользователей</h1>
            <UserTable users={users} />
        </div>
    );
}

export default App;