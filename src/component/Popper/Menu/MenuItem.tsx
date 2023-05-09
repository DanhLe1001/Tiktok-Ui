import classNames from "classnames/bind";
import Button from "../../Button";
import styles from "./menu.module.scss"
import { IMenuItem } from "../../../layouts/component/Header";

const cx = classNames.bind(styles)

interface IData {
    data: IMenuItem
    onClick?: any
}

function MenuItem({ data, onClick }: IData) {

    return (<Button className={cx("menu-item", { separate: data.separate })} leftIcon={data.icon} to={data.to} onClick={onClick}>{data.title}</Button>);
}

export default MenuItem;