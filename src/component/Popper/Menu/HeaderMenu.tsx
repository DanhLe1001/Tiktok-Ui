import classNames from 'classnames/bind';
import styles from "./menu.module.scss"

const cx = classNames.bind(styles)

interface IHeaderMenu {
    title: string;
    onBack: () => void;
}
function HeaderMenu({ title, onBack }: IHeaderMenu) {
    return (
        <header className={cx("header")}>
            <button className={cx("material-icons-outlined", "back-bnt")} onClick={onBack}>arrow_back_ios</button>
            <h4 className={cx("header-title")}>{title}</h4>
        </header>
    );
}

export default HeaderMenu;