import classNames from 'classnames/bind';
import Header from "../component/Header";
import Sidebar from "./Sidebar";
import styles from "./defaultLayoutStyle.module.scss"

const cx = classNames.bind(styles)

function DefaultLayout({ children }: any) {
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