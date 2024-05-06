import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {OffcanvasBody, OffcanvasTitle, OffcanvasToggling, Spinner} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {redirect} from "react-router-dom";
import {getId, getName, getRole} from "../http/UserApi";
import {Row} from "primereact/row";
import {useEffect, useState} from "react";
import * as React from "react";

const exit = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("name")
    localStorage.removeItem("id")
}

const getUserName = () => {
    let token = localStorage.getItem("token")
    let data = getName(token)

    return data
}

const getUserId = () => {
    let token = localStorage.getItem("token")
    let data = getId(token)

    return data
}

const getUserRole = () => {
    let token = localStorage.getItem("token")
    let data = getRole(token)

    return data
}

const OffcanvasExample = observer(() => {

        if (localStorage.getItem("token")) {
            const [loading, setLoading] = useState(true)
            useEffect(() => {
                    setTimeout(() => {
                        getUserName().then(dataName => {
                            localStorage.setItem("name", dataName)
                        }).finally(() => setLoading(false))

                        getUserId().then(dataId => {
                            localStorage.setItem("id", dataId)
                        }).finally(() => setLoading(false))

                        getUserRole().then(dataRole => {
                            localStorage.setItem("role", dataRole)
                        }).finally(() => setLoading(false))

                    }, 1000)

                },
                [])

            if (loading) {
                return <Spinner animation={"grow"}/>
            }
        }

        return (
            <>
                {[false].map((expand) => (
                    <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                        <Container fluid>
                            <Navbar.Brand href="/">Точка IT</Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Точка IT
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                {
                                    localStorage.getItem("token") ?
                                        <div>
                                            <OffcanvasToggling className="ps-md-5">
                                                <Nav.Item className="ps-md-5">
                                                    <Row>
                                                        <i>Авторизованы как </i> <b>{localStorage.getItem("name")}</b>
                                                    </Row>
                                                </Nav.Item>
                                            </OffcanvasToggling>
                                            <Offcanvas.Body>
                                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                                    {localStorage.getItem("role") === "ADMIN" ?
                                                        <Nav.Link href="/adminPage" className={"text-center fw-bold"}>Админ панель</Nav.Link>
                                                        :
                                                        <div>

                                                        </div>
                                                    }
                                                    <Nav.Link href="#action1">Профиль</Nav.Link>
                                                    <Nav.Link href="#action2">Все поставщики</Nav.Link>
                                                    <NavDropdown
                                                        title="Действия"
                                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                                    >
                                                        <NavDropdown.Item href="/orders/newOrder">Отправить
                                                            груз</NavDropdown.Item>
                                                        <NavDropdown.Item href="/orders/myOrders">Мои
                                                            отправки</NavDropdown.Item>
                                                        <NavDropdown.Divider/>
                                                        <NavDropdown.Item href="/authorization" onClick={exit}>
                                                            Выйти с аккаунта
                                                        </NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav>
                                            </Offcanvas.Body>
                                        </div>
                                        :
                                        <div>
                                            <Offcanvas.Body>
                                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                                    <NavDropdown
                                                        title="Действия"
                                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                                    >
                                                        <NavDropdown.Item href="/authorization">
                                                            Авторизоваться
                                                        </NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav>
                                            </Offcanvas.Body>
                                        </div>
                                }

                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </>
        );
    }
)


export default OffcanvasExample;