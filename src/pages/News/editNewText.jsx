import {observer} from "mobx-react-lite";
import React, {useState} from "react";
import {addNew, editNewBox} from "../../http/OrderApi";
import {Button} from "react-bootstrap";
import {useLocation} from "react-router-dom";

const editNew = observer(() => {
        const location = useLocation();
        const {newssub} = location.state;

        const [inputs, setInputs] = useState({
            title: `${newssub.title}`,
            sub_title: `${newssub.sub_title}`,
            main_text: `${newssub.main_text}`,
            description: `${newssub.description}`,
            under: `${newssub.under}`,
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
            editNewBox(inputs, newssub.id)
            console.log(inputs);

            alert("Всё вроде как збс!")
            window.location.replace('/');
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
                                        <p className="text-center h1 fw-bold mb-5 mt-4">Редактирование текста новости</p>
                                        <form id="orderForm" onSubmit={handleSubmit}>
                                            <div className="row mt-3">
                                                <div className="col text-left">
                                                    <label htmlFor="first" className="form-label col-form-label-lg">
                                                        ID текста: {newssub.id}
                                                    </label>
                                                    <div className="container">
                                                        <div className="section-divider">
                                                            <span>Текст к новости </span>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col text-left">
                                                            <label htmlFor="first" className="form-label">Оглавление
                                                                главы</label>
                                                            <input className="form-control" type="text"
                                                                   name="title"
                                                                   value={inputs.title}
                                                                   onChange={handleChange}
                                                                   required
                                                            />
                                                        </div>
                                                        <div className="col text-left">
                                                            <label htmlFor="first"
                                                                   className="form-label">Подоглавление</label>
                                                            <input className="form-control" type="text"
                                                                   name="sub_title"
                                                                   value={inputs.sub_title}
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
                                                                   name="main_text"
                                                                   value={inputs.main_text}
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
                                                                   name="description"
                                                                   value={inputs.description}
                                                                   onChange={handleChange}
                                                                   required
                                                            />
                                                        </div>
                                                        <div className="col text-left">
                                                            <label htmlFor="first"
                                                                   className="form-label">Низ</label>
                                                            <input className="form-control" type="text"
                                                                   name="under"
                                                                   value={inputs.under}
                                                                   onChange={handleChange}
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

export default editNew