import classNames from "classnames/bind";
import styles from './popper.module.scss'
import { ReactNode } from "react";

const cx = classNames.bind(styles);
interface IWrapper {
    children: ReactNode
}

function Wrapper({ children }: IWrapper) {
    return <div className={cx("wrapper")}>{children}</div>;
}

export default Wrapper;