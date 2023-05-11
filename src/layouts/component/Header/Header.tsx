import classNames from "classnames/bind";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from "./headerStyle.module.scss"
import { Link } from "react-router-dom";

import config from "../../../config";
import { SearchInp } from "../SearchInp";
import images from "../../../assets/images";
import Button from "../../../component/Button/Button";
import Menu from "../../../component/Popper/Menu/Menu";

const cx = classNames.bind(styles)

export interface ILanguage {
    code: string;
    title: string;
}

export interface IChildrenLanguage {
    title: string;
    data: ILanguage[];
}

export interface IMenuItem {
    icon?: JSX.Element | undefined;
    title?: string;
    to?: string | undefined;
    separate?: boolean;
    children?: IChildrenLanguage;
}

function Header() {

    //handle login
    const currentUser = true;


    const MENU_ITEM: IMenuItem[] = [{
        icon: <span className={cx("material-icons-outlined")}>language</span>,
        title: "English",
        children: {
            title: 'language',
            data: [
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vn",
                    title: "Viet Nam",
                },
                {
                    code: "en1",
                    title: "English1",
                },
                {
                    code: "vn1",
                    title: "Viet Nam1",
                },
                {
                    code: "en2",
                    title: "English2",
                },
                {
                    code: "vn2",
                    title: "Viet Nam2",
                },
                {
                    code: "en3",
                    title: "English3",
                },
                {
                    code: "vn3",
                    title: "Viet Nam3",
                },
                {
                    code: "en4",
                    title: "English4",
                },
                {
                    code: "vn4",
                    title: "Viet Nam4",
                },
                {
                    code: "en5",
                    title: "English5",
                },
                {
                    code: "vn5",
                    title: "Viet Nam5",
                },
                {
                    code: "vn6",
                    title: "Viet Nam6",
                },
                {
                    code: "en6",
                    title: "English6",
                },
                {
                    code: "vn7",
                    title: "Viet Nam7",
                },
                {
                    code: "en7",
                    title: "English7",
                },
                {
                    code: "vn8",
                    title: "Viet Nam8",
                },
            ]
        }
    },
    {
        icon: <span className={cx("material-icons-outlined")}>help_outline</span>,
        title: "Feedback and help",
        to: "/feedback"
    },
    {
        icon: <span className={cx("material-icons-outlined")}>keyboard</span>,
        title: "Keyboard shortcuts",
        to: "/keyboard"

    }]

    const USER_MENU: IMenuItem[] = [{

        icon: <span className={cx("material-icons-outlined")}>account_circle</span>,
        title: "View Profile",
        to: "/Profile"

    }, {

        icon: <span className={cx("material-icons-outlined")}>currency_exchange</span>,
        title: "Get Coins",
        to: "/Coins"

    }, {

        icon: <span className={cx("material-icons-outlined")}>settings</span>,
        title: "Setting",
        to: "/settings"

    },
    ...MENU_ITEM,
    {

        icon: <span className={cx("material-icons-outlined")}>logout</span>,
        title: "Log out",
        to: "/logout",
        separate: true

    }]

    return (
        <div className={cx('warper')}>
            <div className={cx('inner')}>
                <div className={cx("logo")}>
                    <Link to={config.router.home}> <img src={images.logo} alt="logo tiktok" /></Link>
                </div>
                <SearchInp />

                <div className={cx("action")}>
                    <Link to={config.router.upload}><Button text >+ Upload</Button></Link>
                    {currentUser ?
                        (
                            <>
                                <Tippy trigger="click" content="Messages" >
                                    <button className={cx("material-icons-outlined", "send")}> send</button>
                                </Tippy>


                                <Tippy content="notifications">
                                    <button className={cx("material-icons-outlined", "notification")}> notifications</button>
                                </Tippy>
                            </>
                        )
                        : (
                            <>
                                <Button primary to={config.router.home} >Log in</Button>
                            </>
                        )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEM} >
                        {currentUser ? (
                            <img className={cx("user-avatar")} src="https://images.unsplash.com/photo-1683115763606-43dd57a47712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="User avatar" />
                        ) : (
                            <div className={cx("more-bnt")}>
                                <span className={cx("material-icons-outlined")}>
                                    menu
                                </span>
                            </div>
                        )}
                    </Menu>

                </div>
            </div >
        </div >
    )
}

export default Header;