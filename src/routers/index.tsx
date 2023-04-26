//layout
import { HeaderOnly } from "../component/Layout"

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
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/information", component: Information },
    { path: "/upload", component: Upload, layout: HeaderOnly },
    { path: "/search", component: Search, layout: null },
]
const privativeRouter = [{}];

export { publicRouter, privativeRouter };