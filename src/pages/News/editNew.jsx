import {observer} from "mobx-react-lite";
import React, {useState} from "react";
import {addNew} from "../../http/OrderApi";
import {Button} from "react-bootstrap";
import {useLocation} from "react-router-dom";

const editNew = observer(() => {
        const location = useLocation();
        const {nevs} = location.state;

        let handleSubmit = (event) => {
            let titleNew = document.getElementById("titleNew").value;
            let descriptionNew = document.getElementById("descriptionNew").value;
            let underNew = document.getElementById("underNew").value;
            let check = 0


            let today_temp = new Date();
            let nextDate_temp = new Date(today_temp);
            nextDate_temp.setDate(nextDate_temp.getDate() + 7);


            if (check !== 0) {
                alert("Уважемый пользователь!\n" +
                    "Длина, ширина, высота и вес должны быть равны минимум 1.\n" +
                    "Пункт отправки и пункт назначения должны быть указаны обязательно \n" +
                    "Если выше перечисленные подсказки не дали результата, обратитесь к специалисту.")
            } else {
                event.preventDefault();
                // addNew(formValues, titleNew,
                //     descriptionNew, underNew,
                //     uploadDate, endEvent, localStorage.getItem("id"))
                // alert('Вы больше НИКОГДА НЕ УВИДИТЕ СВОЙ ГРУЗ... То есть, ой, мы его доставим!!!');
                // window.location.replace('/');
            }
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
                                                        ID текста
                                                    </label>
                                                    <input className="form-control" type="text" id={"textID"}
                                                           placeholder={"ID"}
                                                           name="titleNew"
                                                           required
                                                    />
                                                </div>
                                                <div className="col text-left">
                                                    <label htmlFor="first" className="form-label col-form-label-lg">
                                                        Оглавление
                                                    </label>
                                                    <input className="form-control" type="text" id={"titleNew"}
                                                           placeholder={"Название Вашей новости"}
                                                           name="titleNew"
                                                           required
                                                    />
                                                </div>
                                                <div className="col text-left">
                                                    <label htmlFor="first" className="form-label col-form-label-lg">
                                                        Подоглавление
                                                    </label>
                                                    <input className="form-control" type="text" id={"descriptionNew"}
                                                           placeholder={"Текст под новостью"}
                                                           name="descriptionNew"/>
                                                </div>
                                            </div>
                                            <div className="col text-left">
                                                <label htmlFor="first" className="form-label col-form-label-lg-sm">
                                                    Презентация
                                                </label>
                                                <input className="form-control" type="text" id={"underNew"}
                                                       placeholder={". . ."}
                                                       name="underNew"/>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col text-left">
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
                                                                   required
                                                            />
                                                        </div>
                                                        <div className="col text-left">
                                                            <label htmlFor="first"
                                                                   className="form-label">Подоглавление</label>
                                                            <input className="form-control" type="text"
                                                                   name="sub_title"
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
                                                                   required
                                                            />
                                                        </div>
                                                        <div className="col text-left">
                                                            <label htmlFor="first"
                                                                   className="form-label">Низ</label>
                                                            <input className="form-control" type="text"
                                                                   name="under"
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
                                                        Submit
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