import Button from "../../Button";
import { IMenuItem } from "../../Layout/component/Header";
import classNames from "classnames/bind";
import styles from "./menu.module.scss"

const cx = classNames.bind(styles)

interface IData {
    data: IMenuItem
    onClick?: any
}

function MenuItem({ data, onClick }: IData) {

    return (<Button className={cx("menu-item", { separate: data.separate })} leftIcon={data.icon} to={data.to} onClick={onClick}>{data.title}</Button>);
}

export default MenuItem;