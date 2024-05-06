import * as Yup from "yup";

Yup.setLocale({
    string: {
        email: 'Вы неправильно указали почту!',
        min: 'Пароль должен содержать минимум ${min} символов',
        max: 'Пароль должен содержать минимум ${max} символов',
    }
});

export const registrationSchema = Yup.object(
    {
        email: Yup.string().email().required("Поле 'Почта' обязательно для заполнения!"),
        firstname: Yup.string().min(2).max(20).required("Поле 'Имя' обязательно для заполнения!"),
        lastname: Yup.string().min(2).max(20).required("Поле 'Фамилия' обязательно для заполнения!"),
        password: Yup.string().min(4).max(36).required("Пожалуйста, введите пароль!"),
        repassword: Yup.string()
            .required("Вы не подтвердили Ваш пароль!")
            .oneOf([Yup.ref("password"), null], "Пароли должны совпадать!"),
    });

// export default registrationSchema;