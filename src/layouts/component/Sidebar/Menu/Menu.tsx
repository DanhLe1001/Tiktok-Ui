import classNames from 'classnames/bind';
import styles from "./menuStyle.module.scss"
import { ReactNode } from 'react';
const cx = classNames.bind(styles);

interface IMenuProps {
    children: ReactNode;
}

function Menu({ children }: IMenuProps) {
    return (
        <span className={cx("Menu-warper")}>{children}</span>
    );
}

export default Menu;