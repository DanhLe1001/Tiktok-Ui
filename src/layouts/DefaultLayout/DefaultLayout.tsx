import classNames from 'classnames/bind';
import Header from "../component/Header/Header";
import { Sidebar } from "../component/Sidebar";
import styles from "./defaultLayoutStyle.module.scss"
import { Outlet } from 'react-router-dom';

const cx = classNames.bind(styles)

function DefaultLayout(): JSX.Element {
    return (
        <div className={cx('warper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx("content")}>
                    <Outlet />
                </div>

            </div>
        </div>
    );
}

export default DefaultLayout;