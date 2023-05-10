import classNames from 'classnames/bind';
import styles from "./sidebarStyle.module.scss"

const cx = classNames.bind(styles)
function Sidebar() {
    return (
        <aside className={cx("warper")}>
            <h2>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;