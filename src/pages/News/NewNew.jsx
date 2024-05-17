import React, {useState} from 'react'
import './order.css'
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {addNew, addOrder} from "../../http/OrderApi";

const isAuthenticated = () => {
    if (localStorage.getItem("role") === "ADMIN") {
        return true;
    }
    return false;
}

const App = observer(() => {

    if (isAuthenticated()) {
        const [formValues, setFormValues] = useState([
            {
                title: "", sub_title: "",
                main_text: "", description: "",
                under: ""
            }
        ])


            let handleChange = (i, e) => {
                let newFormValues = [...formValues];
                newFormValues[i][e.target.name] = e.target.value;
                setFormValues(newFormValues);
            }

            let addFormFields = () => {
                if (formValues.length < 5) {
                    setFormValues([...formValues, {
                        title: "", sub_title: "",
                        main_text: "", description: "",
                        under: ""
                    }])
                } else {
                    alert("Максимальное кол-во груза не может превышать 5...")
                }

            }

            let removeFormFields = (i) => {
                let newFormValues = [...formValues];
                newFormValues.splice(i, 1);
                setFormValues(newFormValues)
            }

            function formatDate(date) {
                let month = date.getMonth() + 1;
                let day = date.getDate();
                let year = date.getFullYear();
                return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
            }

            let handleSubmit = (event) => {
                let titleNew = document.getElementById("titleNew").value;
                let descriptionNew = document.getElementById("descriptionNew").value;
                let underNew = document.getElementById("underNew").value;
                let check = 0


                let today_temp = new Date();
                let nextDate_temp = new Date(today_temp);
                nextDate_temp.setDate(nextDate_temp.getDate() + 7);

                let uploadDate = formatDate(today_temp)
                let endEvent = formatDate(nextDate_temp);


                formValues.map((element, index) => {

                    // console.log("CargoName in html " + element.CargoName)
                    console.log(element.title.length)
                    if (element.title.length < 6 ||
                        element.main_text.length < 6 ||
                        element.description.length < 6 ||
                        titleNew.length < 6
                    ) {
                        check = 1
                    }
                })

                if (check !== 0) {
                    alert("Уважемый пользователь!\n" +
                        "Длина, ширина, высота и вес должны быть равны минимум 1.\n" +
                        "Пункт отправки и пункт назначения должны быть указаны обязательно \n" +
                        "Если выше перечисленные подсказки не дали результата, обратитесь к специалисту.")
                } else {
                    event.preventDefault();
                    addNew(formValues, titleNew,
                        descriptionNew, underNew,
                        uploadDate, endEvent, localStorage.getItem("id"))
                    alert('Вы больше НИКОГДА НЕ УВИДИТЕ СВОЙ ГРУЗ... То есть, ой, мы его доставим!!!');
                    window.location.replace('/');
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
                                            <p className="text-center h1 fw-bold mb-5 mt-4">Создание новости</p>

                                            <form id="orderForm" onSubmit={handleSubmit}>
                                                <div className="row mt-3">
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
                                                        <input className="form-control" type="text"
                                                               id={"descriptionNew"}
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
                                                        {formValues.map((element, index) => (
                                                            <div key={index}>
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
                                                                               value={element.title || ""}
                                                                               onChange={e => handleChange(index, e)}
                                                                               required
                                                                        />
                                                                    </div>
                                                                    <div className="col text-left">
                                                                        <label htmlFor="first"
                                                                               className="form-label">Подоглавление</label>
                                                                        <input className="form-control" type="text"
                                                                               name="sub_title"
                                                                               value={element.sub_title || ""}
                                                                               onChange={e => handleChange(index, e)}
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
                                                                               value={element.main_text || ""}
                                                                               onChange={e => handleChange(index, e)}
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
                                                                               value={element.description || ""}
                                                                               onChange={e => handleChange(index, e)}
                                                                               required
                                                                        />
                                                                    </div>
                                                                    <div className="col text-left">
                                                                        <label htmlFor="first"
                                                                               className="form-label">Низ</label>
                                                                        <input className="form-control" type="text"
                                                                               name="under"
                                                                               value={element.under || ""}
                                                                               onChange={e => handleChange(index, e)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                {
                                                                    index ?
                                                                        <div>
                                                                            <button type="button"
                                                                                    className="button-section btn btn-danger btn-rounded"
                                                                                    onClick={() => removeFormFields(index)}>Remove
                                                                            </button>
                                                                        </div>
                                                                        : null
                                                                }
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col text-right actionButtons">
                                                        <Button
                                                            onClick={() => addFormFields()}
                                                            variant="secondary"
                                                            size="sm"
                                                        >
                                                            Add
                                                        </Button>

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
        } else {
            window.location.replace('/')
        }

    }
)

export default App