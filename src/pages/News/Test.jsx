// import React, {useState} from 'react'
// import './order.css'
// import {Box, colors} from "@mui/material";
// import {Button} from "react-bootstrap";
//
// const isAuthenticated = () => {
//     if (localStorage.getItem("token")) {
//         return true;
//     }
//     return false;
// }
//
// const App = () => {
//     const [formValues, setFormValues] = useState([
//         {
//             length: "", height: "",
//             width: "", weight: "",
//             CargoName: ""
//         }
//     ])
//     if (isAuthenticated()) {
//
//         let numHandleChange = (i, e) => {
//             let newFormValues = [...formValues];
//             newFormValues[i][e.target.name] = e.target.value.replace(/\D/g, "");
//             setFormValues(newFormValues);
//         };
//
//         let handleChange = (i, e) => {
//             let newFormValues = [...formValues];
//             newFormValues[i][e.target.name] = e.target.value;
//             setFormValues(newFormValues);
//         }
//
//         let addFormFields = () => {
//             if (formValues.length < 5) {
//                 setFormValues([...formValues, {
//                     length: "", height: "",
//                     width: "", weight: "",
//                     CargoName: ""
//                 }])
//             } else {
//                 alert("Максимальное кол-во груза не может превышать 5...")
//             }
//
//         }
//
//         // let getValuesLenght = () => {
//         //     console.log(formValues.length);
//         //     return formValues.length;
//         // }
//
//         let removeFormFields = (i) => {
//             let newFormValues = [...formValues];
//             newFormValues.splice(i, 1);
//             setFormValues(newFormValues)
//         }
//
//         let handleSubmit = (event) => {
//             let departure_point = document.getElementById("departure_point").value;
//             let delivery_point = document.getElementById("delivery_point").value;
//             let sup_info = document.getElementById("sup_info").value;
//
//             event.preventDefault();
//             console.log(JSON.stringify(formValues));
//             console.log(departure_point + delivery_point + sup_info)
//
//             alert('Вы больше НИКОГДА НЕ УВИДИТЕ СВОЙ ГРУЗ... То есть, ой, мы его доставим!!!');
//
//             // window.location.replace('/');
//         }
//
//         return (
//
//             <section
//                 className="p-5 w-100"
//                 style={{backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0"}}
//             >
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="card text-black" style={{borderRadius: "25px"}}>
//                             <div className="card-body py-md-5">
//                                 <div className="row justify-content-center">
//                                     <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
//                                         <p className="text-center h1 fw-bold mb-5 mt-4">Форма оформления груза</p>
//
//                                         <form id="orderForm" onSubmit={handleSubmit}>
//                                             <div className="row mt-3">
//                                                 <div className="col text-left">
//                                                     <label htmlFor="first" className="form-label col-form-label-lg">
//                                                         Начальная точка
//                                                     </label>
//                                                     <input className="form-control" type="text" id={"departure_point"}
//                                                            placeholder={"Минск..."}
//                                                            name="departure_point"/>
//                                                 </div>
//                                                 <div className="col text-left">
//                                                     <label htmlFor="first" className="form-label col-form-label-lg">
//                                                         Конечная точка
//                                                     </label>
//                                                     <input className="form-control" type="text" id={"delivery_point"}
//                                                            placeholder={"Москва..."}
//                                                            name="delivery_point"/>
//                                                 </div>
//                                             </div>
//                                             <div className="col text-left">
//                                                 <label htmlFor="first" className="form-label col-form-label-lg-sm">
//                                                     Доп информация...
//                                                 </label>
//                                                 <input className="form-control" type="text" id={"sup_info"}
//                                                        placeholder={". . ."}
//                                                        name="sup_info"/>
//                                             </div>
//                                             <div className="row mt-3">
//                                                 <div className="col text-left">
//                                                     {formValues.map((element, index) => (
//                                                         <div key={index}>
//                                                             <div className="container">
//                                                                 <div className="section-divider">
//                                                                     <span>Ваш отправляемый груз</span>
//                                                                 </div>
//                                                             </div>
//                                                             <div className="row">
//                                                                 <div className="col text-left">
//                                                                     <label htmlFor="first" className="form-label">Что за
//                                                                         груз?</label>
//                                                                     <input className="form-control" type="text"
//                                                                            name="CargoName"
//                                                                            value={element.CargoName || ""}
//                                                                            onChange={e => handleChange(index, e)}/>
//                                                                 </div>
//                                                                 <div className="col text-left">
//                                                                     <label htmlFor="first"
//                                                                            className="form-label">Вес</label>
//                                                                     <input className="form-control" type="text"
//                                                                            name="weight"
//                                                                            value={element.weight || ""}
//                                                                            onChange={e => numHandleChange(index, e)}/>
//                                                                 </div>
//                                                             </div>
//
//                                                             <div className="row">
//                                                                 <div className="col text-left">
//                                                                     <label htmlFor="first"
//                                                                            className="form-label">Длина</label>
//                                                                     <input className="form-control" type="text"
//                                                                            name="length"
//                                                                            value={element.length || ""}
//                                                                            onChange={e => numHandleChange(index, e)}/>
//                                                                 </div>
//
//                                                                 <div className="col text-left">
//                                                                     <label htmlFor="first"
//                                                                            className="form-label">Ширина</label>
//                                                                     <input className="form-control" type="text"
//                                                                            name="width"
//                                                                            value={element.width || ""}
//                                                                            onChange={e => numHandleChange(index, e)}/>
//                                                                 </div>
//
//                                                                 <div className="col text-left">
//                                                                     <label htmlFor="first"
//                                                                            className="form-label">Высота</label>
//                                                                     <input className="form-control" type="text"
//                                                                            name="height"
//                                                                            value={element.height || ""}
//                                                                            onChange={e => numHandleChange(index, e)}/>
//                                                                 </div>
//                                                             </div>
//                                                             {
//                                                                 index ?
//                                                                     <div>
//                                                                         <button type="button"
//                                                                                 className="button-section btn btn-danger btn-rounded"
//                                                                                 onClick={() => removeFormFields(index)}>Remove
//                                                                         </button>
//                                                                     </div>
//                                                                     : null
//                                                             }
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                             <div className="row mt-3">
//                                                 <div className="col text-right actionButtons">
//                                                     <Button
//                                                         onClick={() => addFormFields()}
//                                                         variant="secondary"
//                                                         size="sm"
//                                                     >
//                                                         Add
//                                                     </Button>
//
//                                                     <Button
//                                                         type={"submit"}
//                                                         variant="primary"
//                                                         size="sm"
//                                                     >
//                                                         Submit
//                                                     </Button>
//                                                 </div>
//                                             </div>
//                                         </form>
//
//                                     </div>
//                                     {/*<div*/}
//                                     {/*    className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">*/}
//                                     {/*    <img*/}
//                                     {/*        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"*/}
//                                     {/*        className="img-fluid"*/}
//                                     {/*        alt=""*/}
//                                     {/*    />*/}
//                                     {/*</div>*/}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         )
//     } else {
//         window.location.replace("/")
//     }
// }
//
// export default App