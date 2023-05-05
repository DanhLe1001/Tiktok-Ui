import Button from "../../Button";
import { IMenuItem } from "../../Layout/component/Header";
import classNames from "classnames/bind";
import styles from "./menu.module.scss"

const cx = classNames.bind(styles)

interface IData {
    data: IMenuItem
}

function MenuItem({ data }: IData) {
    return (<Button className={cx("menu-item")} leftIcon={data.icon} to={data.to}>{data.title}</Button>);
}

export default MenuItem;