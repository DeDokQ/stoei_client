import React from 'react';
import './UserTable.css';
import Button from "react-bootstrap/Button";
import {useLocation, useNavigate} from "react-router-dom"; // Создайте файл UserTable.css для стилей

function UserTable({ users }) {
    const navigate = useNavigate();
    return (
        <div className="table-container">
            <table className="user-table">
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Почта</th>
                    <th>Роль</th>
                    <th>Пароль</th>
                    <th>Редактировать</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>{user.password}</td>
                        <td><Button variant="primary" onClick={() => {
                            navigate(`/admin/users/edit/${user.id}`, {state: {user}})
                        }}>
                            Редактировать
                        </Button>

                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;