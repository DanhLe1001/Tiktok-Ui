import classNames from 'classnames/bind';
import styles from "./sidebarStyle.module.scss"
import Menu, { MenuItem } from './Menu';
import config from '../../../config';
import { IMenuItemSidebar } from './Menu/MenuItem';

const cx = classNames.bind(styles);

const MenuItemValue: IMenuItemSidebar[] = [{
    title: "For you",
    to: config.router.home,
    icon: <span className={cx("material-icons-outlined")}>home</span>,
}, {
    title: "Following",
    to: config.router.following,
    icon: <span className={cx("material-icons-outlined")}>group</span>,
},
{
    title: "LIVE",
    to: config.router.live,
    icon: <span className={cx("material-icons-outlined")}>video_call</span>,
}]

function Sidebar() {
    return (
        <aside className={cx("sidebar-warper")}>
            <Menu >
                {MenuItemValue.map((item, index) => (
                    <MenuItem key={index} title={item.title} to={item.to} icon={item.icon} />
                ))}
            </Menu>
        </aside >
    );
}

export default Sidebar;