import classNames from 'classnames/bind';
import Header from "../component/Header/Header";
import { Sidebar } from "../component/Sidebar";
import styles from "./defaultLayoutStyle.module.scss"
import { ReactNode } from 'react';

const cx = classNames.bind(styles)

interface IDefaultLayoutProps {
    children: ReactNode;
}

function DefaultLayout({ children }: IDefaultLayoutProps): JSX.Element {
    return (
        <div className={cx('warper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx("content")}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;