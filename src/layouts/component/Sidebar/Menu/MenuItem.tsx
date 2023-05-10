import classNames from 'classnames/bind';
import styles from "./menuStyle.module.scss"
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles)

export interface IMenuItemSidebar {
    title: string;
    to: string;
    icon?: JSX.Element;
}

function MenuItem({ title, to, icon }: IMenuItemSidebar) {
    return (
        <>
            <NavLink to={to} className={(nav) => cx("MenuItem-wrapper", { active: nav.isActive })}>
                <span className={cx("MenuItem-icon")}>{icon}</span>
                <span className={cx("menuItem-title")}>{title}</span>
            </NavLink>
        </>
    );
}

export default MenuItem;