import SessionForm from "../components/session";
import IRoute from "../redux/interface/routes";

const routes: IRoute[] = [
    {
        path: '/session',
        name: 'Session',
        component: SessionForm,
        exact: true
    }
];

export default routes;