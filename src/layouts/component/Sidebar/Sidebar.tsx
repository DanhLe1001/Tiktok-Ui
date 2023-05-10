import classNames from 'classnames/bind';
import styles from "./sidebarStyle.module.scss"
import Menu, { MenuItem } from './Menu';
import config from '../../../config';
import { IMenuItemSidebar } from './Menu/MenuItem';
import SuggestedAccounts from '../../../component/SuggestedAccounts/SuggestedAccounts';
import * as searchService from '../../../services/searchService';

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

let labelSuggest = "Suggested accounts";
let labelFollowing = "Following accounts";


const res: any = fetch("https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less")
    .then(response => JSON.stringify(response))
    .then(res => res)

console.log(res);



function Sidebar() {
    return (
        <aside className={cx("sidebar-warper")}>
            <Menu >
                {MenuItemValue.map((item, index) => (
                    <MenuItem key={index} title={item.title} to={item.to} icon={item.icon} />
                ))}
            </Menu>
            <SuggestedAccounts label={labelSuggest} />
            <SuggestedAccounts label={labelFollowing} />
        </aside >
    );
}

export default Sidebar;