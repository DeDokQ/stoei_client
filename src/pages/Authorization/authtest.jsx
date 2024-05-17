import React from 'react';
import {Formik} from 'formik';
import {authorizationSchema} from "./AuthorizationSchema";
import "../Authorization/authorization.css";
import {login} from "../../http/UserApi";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {OffcanvasExample} from "../Navbar";
import {redirect} from "react-router-dom";


const handleReset = (resetForm) => {
    resetForm();
};

const isAuthenticated = () => {
    if (localStorage.getItem("token")) {
        return true;
    }
    return false;
}

const SignInForm = observer(() => {
        if (!isAuthenticated()) {
            return (
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={authorizationSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        try {
                            let data = login(values.email, values.password)

                            data.then((result) => {
                                if (result == "Ошибка логина или пароля") {
                                    alert(result)
                                } else {
                                    window.location.replace("/")
                                }
                            }).catch(console.error)

                        } catch (e) {
                            alert(e)
                        }

                        // setTimeout(() => {
                        //     alert(JSON.stringify(values, null, 2));
                        //     setSubmitting(false);
                        // }, 200);
                    }}
                >
                    {formik => (

                        <section
                            className="p-5 w-100"
                            style={{backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0"}}
                        >
                            <div className="row">
                                <div className="col-12">
                                    <div className="card text-black" style={{borderRadius: "25px"}}>
                                        <div className="card-body p-md-5">
                                            <div className="row justify-content-center">
                                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                                    <p className="text-center h1 fw-bold mb-5 mt-4">Авторизация</p>

                                                    <form onSubmit={formik.handleSubmit}>
                                                        <div className="row mt-3">
                                                            <div className="col text-left">
                                                                <label htmlFor="first" className="form-label">
                                                                    Почта
                                                                </label>

                                                                <input
                                                                    id="email"
                                                                    name="email"
                                                                    className="form-control"
                                                                    value={formik.values.email}
                                                                    onChange={formik.handleChange}
                                                                    onBlur={formik.handleBlur}
                                                                />
                                                                {formik.errors.email && formik.touched.email ? (
                                                                    <small className="text-danger mt-1">
                                                                        {formik.errors.email}
                                                                    </small>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3">
                                                            <div className="col text-left">
                                                                <label htmlFor="first" className="form-label">
                                                                    Пароль
                                                                </label>
                                                                <input
                                                                    id="password"
                                                                    name="password"
                                                                    className="form-control"
                                                                    value={formik.values.password}
                                                                    onChange={formik.handleChange}
                                                                    onBlur={formik.handleBlur}
                                                                    type="password"
                                                                />
                                                                {formik.errors.password && formik.touched.password ? (
                                                                    <small className="text-danger mt-1">
                                                                        {formik.errors.password}
                                                                    </small>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3">
                                                            <div className="col text-right actionButtons">
                                                                <Button
                                                                    onClick={handleReset.bind(null, formik.resetForm)}
                                                                    variant="secondary"
                                                                    size="sm"
                                                                >
                                                                    Отчистить
                                                                </Button>

                                                                <Button
                                                                    type={"submit"}
                                                                    variant="primary"
                                                                    size="sm"
                                                                >
                                                                    Авторизоваться
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3">
                                                            <br/>
                                                            <div className="col text-right">
                                                                Нету аккаунта? <a href="/registration">Создать аккаунт.</a>
                                                            </div>
                                                        </div>
                                                    </form>

                                                </div>
                                                <div
                                                    className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                                    <img
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    )
                    }
                </Formik>
            );
        } else {
            window.location.replace("/")
        }
    }
)
export default SignInForm;