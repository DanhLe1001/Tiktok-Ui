import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import styles from "./headerStyle.module.scss"
import { Link } from "react-router-dom";

import { Wrapper as PopperWrapper } from "../../../Popper";
import Button from "../../../Button";
import images from "../../../../assets/images";
import Account from "../../../Account";
import Menu from "../../../Popper/Menu";
const cx = classNames.bind(styles)

export interface IMenuItem {
    icon: JSX.Element;
    title: string;
    to?: string;
}
function Header() {
    const [searchResult, setSearchResult] = useState<number[]>([])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 0);
    // }, [])
    const MENU_ITEM: IMenuItem[] = [{
        icon: <span className={cx("material-icons-outlined")}>language</span>,
        title: "English"
    },
    {
        icon: <span className={cx("material-icons-outlined")}>help_outline</span>,
        title: "Feedback and help",
        to: "/feedback"
    },
    {
        icon: <span className={cx("material-icons-outlined")}>keyboard</span>,
        title: "Keyboard shortcuts"
    }]

    return (
        <div className={cx('warper')}>
            <div className={cx('inner')}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="logo tiktok" />
                </div>
                <Tippy
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
                        <button className={cx("search-clear", "material-icons-outlined")}>
                            clear
                        </button>

                        <button className={cx("search-bnt", "material-icons-outlined")}>
                            search
                        </button>
                    </div>
                </Tippy>
                <div className="action">
                    <Button text >+ Upload</Button>
                    <Button primary >Log in</Button>
                    {/* <Button rounded className={cx("custom-getApp")} >Get app</Button> */}

                    <Menu
                        items={MENU_ITEM}
                    >
                        <div className={cx("more-bnt")}>
                            <span className={cx("material-icons-outlined")}>
                                menu
                            </span>
                        </div>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Header;