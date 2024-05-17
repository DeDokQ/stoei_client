import {observer} from "mobx-react-lite";
import {useLocation} from "react-router-dom";
import React, {useState} from "react";
import {editNewBox} from "../../http/OrderApi";
import {Button} from "react-bootstrap";

const editUser = observer(() => {
        const location = useLocation();
        const {user} = location.state;

        const [inputs, setInputs] = useState({
            firstname: `${user.firstname}`,
            lastname: `${user.lastname}`,
            email: `${user.email}`,
            role: `${user.role}`,
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setInputs(prevInputs => ({
                ...prevInputs,
                [name]: value,
            }));
        };

        let handleSubmit = (event) => {
            event.preventDefault();
            // userEdit(inputs, user.id)
            console.log(inputs);

            alert("Всё вроде как збс!")
            // window.location.replace('/');
        }

        return (

            <section
                className="p-5 w-100"
                style={{backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0"}}
            >
                <div className="row">
                    <div className="col-12">
                        <div className="card text-black" style={{borderRadius: "25px"}}>
                            <div className="card-body py-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mt-4">Редактирование пользователя {user.firstname + " " + user.lastname}</p>
                                        <form id="orderForm" onSubmit={handleSubmit}>
                                            <div className="row mt-3">
                                                <div className="col text-left">
                                                    <label htmlFor="first" className="form-label col-form-label-lg">
                                                        ID текста: {user.id}
                                                    </label>
                                                    <div className="row">
                                                        <div className="col text-left">
                                                            <label htmlFor="first" className="form-label">Оглавление
                                                                главы</label>
                                                            <input className="form-control" type="text"
                                                                   name="firstname"
                                                                   value={inputs.firstname}
                                                                   onChange={handleChange}
                                                                   required
                                                            />
                                                        </div>
                                                        <div className="col text-left">
                                                            <label htmlFor="first"
                                                                   className="form-label">Подоглавление</label>
                                                            <input className="form-control" type="text"
                                                                   name="lastname"
                                                                   value={inputs.lastname}
                                                                   onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col text-left">
                                                            <label htmlFor="first" className="form-label">Основной
                                                                текст
                                                            </label>
                                                            <input className="form-control" type="text"
                                                                   name="email"
                                                                   value={inputs.email}
                                                                   onChange={handleChange}
                                                                   required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col text-left">
                                                            <label htmlFor="first"
                                                                   className="form-label">Описание</label>
                                                            <input className="form-control" type="text"
                                                                   name="role"
                                                                   value={inputs.role}
                                                                   onChange={handleChange}
                                                                   required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col text-right actionButtons">
                                                    <Button
                                                        type={"submit"}
                                                        variant="primary"
                                                        size="sm"
                                                    >
                                                        Изменить!
                                                    </Button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )

    }
)

export default editUser