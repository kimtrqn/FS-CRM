import SessionForm from "../components/session";
import Home from "../home";
import IRoute from "../redux/interface/routes";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        exact: true
    },
    {
        path: '/login',
        name: 'Login',
        component: SessionForm,
        exact: true
    },
    {
        path: '/signup',
        name: 'Signup',
        component: SessionForm,
        exact: true
    },

]

export default routes;