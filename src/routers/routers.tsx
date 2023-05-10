//layout
import { HeaderOnly } from "../layouts";
//routerConfig
import config from "../config"

import Home from '../page/Home/Home';
import Following from '../page/Following/Following';
import Information from '../page/Information/Information';
import Upload from '../page/Upload/Upload';
import Search from '../page/Search/Search';

interface IPublicRouter {
    path: string;
    component: React.ComponentType<any>;
    layout?: React.ComponentType<any> | null;
}

const publicRouter: IPublicRouter[] = [
    { path: config.router.home, component: Home },
    { path: config.router.following, component: Following },
    { path: `${config.router.profile}/:nickname`, component: Information },
    { path: config.router.upload, component: Upload, layout: HeaderOnly },
    { path: config.router.search, component: Search, layout: null },
]
const privativeRouter = [{}];

export { publicRouter, privativeRouter };