import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import styles from "./headerStyle.module.scss"
import { Link } from "react-router-dom";

import { Wrapper as PopperWrapper } from "../../../Popper";
import Button from "../../../Button";
import images from "../../../../assets/images";
import Account from "../../../Account";
import Menu from "../../../Popper/Menu";
const cx = classNames.bind(styles)

export interface ILanguage {
    code: string;
    title: string;
}

export interface IChildrenLanguage {
    title: string;
    data?: ILanguage[];
}

export interface IMenuItem {
    icon: JSX.Element;
    title: string;
    to?: string;
    separate?: boolean;
    children?: IChildrenLanguage;
}



function Header() {
    const [searchResult, setSearchResult] = useState<number[]>([])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 0);
    // }, [])

    //handle logic here
    const handleMenuChange = (change: any) => {
        console.log(change);
    }

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
                    <img src={images.logo} alt="logo tiktok" />
                </div>

                <HeadlessTippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(att) => (
                        <div className={cx("search-result")} tabIndex={-1} {...att}>
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>Account</h4>
                                <Account />
                                <Account />
                                <Account />
                                <Account />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx("search")}>
                        <input placeholder="Search" spellCheck={false} />
                        <button className={cx("search-clear", "material-icons-outlined")}>clear</button>
                        <button className={cx("search-bnt", "material-icons-outlined")}>search</button>
                    </div>
                </HeadlessTippy>

                <div className={cx("action")}>
                    <Button text >+ Upload</Button>
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
                                <Button primary >Log in</Button>
                            </>
                        )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEM} onChange={handleMenuChange}>
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