import classNames from 'classnames/bind';
import styles from "./sidebarStyle.module.scss"
import Menu, { MenuItem } from './Menu';
import config from '../../../config';
import { IMenuItemSidebar } from './Menu/MenuItem';
import SuggestedAccounts from '../../../component/SuggestedAccounts';
import { IUserData } from '../../../component/Account/Account';

const cx = classNames.bind(styles);

const MenuItemValue: IMenuItemSidebar[] = [{
    title: "For you",
    to: config.router.home,
    icon: <span className={cx("material-icons-outlined")}>home</span>,
},
{
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

const dataSuggestAcc: IUserData[] =
    [
        {
            id: 1,
            first_name: "Đào Lê",
            last_name: "Phương Hoa",
            full_name: "Đào Lê Phương Hoa",
            nickname: "hoaahanassii",
            avatar: "https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg",
            bio: "✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !",
            tick: true,
            followings_count: 1,
            followers_count: 60,
            likes_count: 1000,
            website_url: "https://fullstack.edu.vn/",
            facebook_url: "",
            youtube_url: "",
            twitter_url: "",
            instagram_url: "",
        },
        {
            id: 4765,
            first_name: "nguyen1w",
            last_name: "phuc31112",
            full_name: "nguyen1w phuc31112",
            nickname: "hoangphuc01975",
            avatar: "https://files.fullstack.edu.vn/f8-tiktok/users/4765/63e222af65973.jpg",
            bio: "toi la dev44",
            tick: false,
            followings_count: 16,
            followers_count: 5,
            likes_count: 20,
            website_url: "https://fullstack.edu.vn/",
            facebook_url: "",
            youtube_url: "",
            twitter_url: "",
            instagram_url: "",
        },
        {
            id: 4472,
            first_name: "Hoàng",
            last_name: "Hải",
            full_name: "Hoàng Hải",
            nickname: "hai77",
            avatar: "https://files.fullstack.edu.vn/f8-tiktok/users/4472/63ddd5b1bd082.jpg",
            bio: "Tiktok của Hải <3",
            tick: false,
            followings_count: 7,
            followers_count: 3,
            likes_count: 7,
            website_url: "https://fullstack.edu.vn/",
            facebook_url: "",
            youtube_url: "",
            twitter_url: "",
            instagram_url: "",
        }, {
            id: 112,
            first_name: "Lý",
            last_name: "Bính",
            full_name: "Lý Bính",
            nickname: "nhok20102003",
            avatar: "https://files.fullstack.edu.vn/f8-tiktok/users/112/63034bbec74d6.jpg",
            bio: "✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !",
            tick: false,
            followings_count: 2,
            followers_count: 2,
            likes_count: 0,
            website_url: "https://fullstack.edu.vn/",
            facebook_url: "",
            youtube_url: "",
            twitter_url: "",
            instagram_url: "",
        }]

function Sidebar() {
    return (
        <aside className={cx("sidebar-warper")}>
            <Menu >
                {MenuItemValue.map((item) => (
                    <MenuItem key={item.to} title={item.title} to={item.to} icon={item.icon} />
                ))}
            </Menu>
            <SuggestedAccounts check label={labelSuggest} data={dataSuggestAcc} />
            <SuggestedAccounts check={false} label={labelFollowing} data={dataSuggestAcc} />
        </aside >
    );
}

export default Sidebar;