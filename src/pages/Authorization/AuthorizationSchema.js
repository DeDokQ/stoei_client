import * as Yup from "yup";

Yup.setLocale({
    string: {
        email: 'Вы неправильно указали почту!',
        min: 'Пароль должен содержать минимум ${min} символов',
        max: 'Пароль должен содержать минимум ${max} символов',
    }
});

export const authorizationSchema = Yup.object(
    {
        email: Yup.string().email().required("Поле 'Почта' обязательно для заполнения!"),
        password: Yup.string().min(4).max(36).required("Пожалуйста, введите пароль!"),
    });