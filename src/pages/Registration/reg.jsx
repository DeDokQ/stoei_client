import React from "react";
import {Formik, useFormik} from "formik";
import "./registration.css";
import {Button} from "react-bootstrap";
import {registrationSchema} from "./RegistrationSchema";
import {registration} from "../../http/UserApi";
import {redirect} from "react-router-dom";
import {observer} from "mobx-react-lite";

const handleReset = (resetForm) => {
    resetForm();
};

const isAuthenticated = () => {
    if (localStorage.getItem("token")) {
        return true;
    }
    return false;
}

const SignUp = observer(() => {
        if (!isAuthenticated()) {
            return (
                <Formik
                    initialValues={{
                        firstname: '',
                        lastname: '',
                        email: '',
                        password: '',
                        repassword: '',
                    }}
                    validationSchema={registrationSchema}
                    onSubmit={(values, {setSubmitting}) => {

                        try {
                            let data = registration(values.firstname, values.lastname, values.email, values.password)

                            data.then((result) => {
                                if (result == "Пользователь существует!") {
                                    alert(result)
                                } else {
                                    window.location.replace("/")
                                }
                            }).catch(console.error)

                        } catch (e) {
                            alert(e)
                        }
                    }}
                >
                    {formik => (
                        <div>
                            <section
                                class="p-5 w-100"
                                style={{backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0"}}
                            >
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card text-black" style={{borderRadius: "25px"}}>
                                            <div class="card-body p-md-5">
                                                <div class="row justify-content-center">
                                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                                        <p class="text-center h1 fw-bold mb-5 mt-4">Регистрация</p>
                                                        <form onSubmit={formik.handleSubmit}>
                                                            <div className="row">
                                                                <div className="col text-left">
                                                                    <label htmlFor="first" className="form-label">
                                                                        Имя
                                                                    </label>
                                                                    <input
                                                                        id="firstname"
                                                                        name="firstname"
                                                                        className="form-control"
                                                                        value={formik.values.firstname}
                                                                        onChange={formik.handleChange}
                                                                        onBlur={formik.handleBlur}
                                                                    />
                                                                    {formik.errors.firstname && formik.touched.firstname ? (
                                                                        <small className="text-danger mt-1">
                                                                            {formik.errors.firstname}
                                                                        </small>
                                                                    ) : null}
                                                                </div>
                                                                <div className="col text-left">
                                                                    <label htmlFor="last`" className="form-label">
                                                                        Фамилия
                                                                    </label>
                                                                    <input
                                                                        id="lastname"
                                                                        name="lastname"
                                                                        className="form-control"
                                                                        value={formik.values.lastname}
                                                                        onChange={formik.handleChange}
                                                                        onBlur={formik.handleBlur}
                                                                    />
                                                                    {formik.errors.lastname && formik.touched.lastname ? (
                                                                        <small className="text-danger mt-1">
                                                                            {formik.errors.lastname}
                                                                        </small>
                                                                    ) : null}
                                                                </div>
                                                            </div>
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
                                                                <div className="col text-left">
                                                                    <label htmlFor="first" className="form-label">
                                                                        Подтвердите пароль
                                                                    </label>
                                                                    <input
                                                                        id="repassword"
                                                                        name="repassword"
                                                                        className="form-control"
                                                                        value={formik.values.repassword}
                                                                        onChange={formik.handleChange}
                                                                        onBlur={formik.handleBlur}
                                                                        type="password"
                                                                    />
                                                                    {formik.errors.repassword && formik.touched.repassword ? (
                                                                        <small className="text-danger mt-1">
                                                                            {formik.errors.repassword}
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
                                                                        Зарегестрироваться
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3">
                                                                <br/>
                                                                <div className="col text-right">
                                                                    Уже имеете аккаунт? <a href="/authorization">Войти в
                                                                    аккаунт.</a>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div
                                                        class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                                        <img
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                            class="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )
                    }
                </Formik>
            );
        }
        else {
            window.location.replace("/")
        }
    }
)

export default SignUp;