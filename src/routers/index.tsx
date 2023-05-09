//layout
import { HeaderOnly } from "../component/Layout"
//routerConfig
import routerConfig from "../config/routers"

import Home from '../page/Home';
import Following from '../page/Following';
import Information from '../page/Information';
import Upload from '../page/Upload';
import Search from '../page/Search';

interface IPublicRouter {
    path: string;
    component: React.ComponentType<any>;
    layout?: React.ComponentType<any> | null;
}

const publicRouter: IPublicRouter[] = [
    { path: routerConfig.home, component: Home },
    { path: routerConfig.following, component: Following },
    { path: `${routerConfig.profile}/:nickname`, component: Information },
    { path: routerConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routerConfig.search, component: Search, layout: null },
]
const privativeRouter = [{}];

export { publicRouter, privativeRouter };