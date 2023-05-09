//layout
import { HeaderOnly } from "../layouts";
//routerConfig
import config from "../config"

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
    { path: config.router.home, component: Home },
    { path: config.router.following, component: Following },
    { path: `${config.router.profile}/:nickname`, component: Information },
    { path: config.router.upload, component: Upload, layout: HeaderOnly },
    { path: config.router.search, component: Search, layout: null },
]
const privativeRouter = [{}];

export { publicRouter, privativeRouter };