//layout
import { HeaderOnly } from "../layouts";
//routerConfig
import config from "../config"

import Home from '../page/Home/Home';
import Following from '../page/Following/Following';
import Information from '../page/Information/Information';
import Live from "../page/Live/Live";

interface IPublicRouter {
    path: string;
    component: JSX.Element;
    type?: 'single' | 'dashboard';
}

const publicRouter: IPublicRouter[] = [
    { path: config.router.home, component: <Home /> },
    { path: config.router.following, component: <Following /> },
    { path: config.router.live, component: <Live /> },
    { path: `${config.router.profile}/:nickname`, component: <Information /> },
]
const privativeRouter = [{}];

export { publicRouter, privativeRouter };