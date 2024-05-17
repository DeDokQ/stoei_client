import register from "./pages/Registration/reg"
import auth from './pages/Authorization/authtest'
import newNew from './pages/News/NewNew'
import News from './pages/News/News'
import mainPage from './pages/main'
import NewPage from "./pages/News/NewPages";
import editNew from "./pages/News/editNew";
import editNewText from "./pages/News/editNewText";
import test from "./public/mainPage/test"
import profile from './pages/Profile/MyProfile'
import usersPage from './pages/Admin/usersPage'
import userEditor from './pages/Admin/editUser'
export const authRoutes = [
    {
        path: '/news/newNew',
        Component: newNew
    },
    {
        path: '/news/edit/:id',
        Component: editNew
    },
    {
        path: '/news/editText/:id',
        Component: editNewText
    },
    {
        path: '/admin/users',
        Component: usersPage
    },
    {
        path: '/admin/users/edit/:id',
        Component: userEditor
    }
]
export const publicRoutes = [
    {
        path: '/registration',
        Component: register
    },
    {
        path: '/authorization',
        Component: auth
    },
    {
        path: '/news/News',
        Component: News
    },
    {
        path: '/news/:id',
        Component: NewPage
    },
    {
        path: '/',
        Component: test
    },
    {
        path: '/profile',
        Component: profile
    }

]