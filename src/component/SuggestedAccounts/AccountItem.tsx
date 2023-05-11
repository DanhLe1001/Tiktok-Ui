import { Link } from 'react-router-dom';
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss"
import config from "../../config";
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as SidebarWrapper } from "../Popper"
import { Button } from "../Button";
import { IUserData } from '../Account/Account';

const cx = classNames.bind(styles)

interface IAccountData {
    check: boolean;
    data: IUserData[];
}

function AccountItem({ check, data }: IAccountData) {

    return (
        <>
            {
                check ? data.map(item => (
                    <div key={item.id}>
                        <HeadlessTippy
                            interactive
                            offset={[-8, 0]}
                            delay={[500, 0]}
                            render={(att) => (
                                <div className={cx("account-show")} tabIndex={-1} {...att}>
                                    <SidebarWrapper>
                                        <div className={cx("account-item")}>
                                            <div className={cx("account-show-top")}>
                                                <img className={cx("account-show-avatar")} src={item.avatar} alt={item.full_name} />
                                                <Button primary>Follow</Button>
                                            </div>
                                            <div className={cx("account-show-infor")}>
                                                <p className={cx("account-show-name")}>
                                                    <span>{item.full_name}</span>
                                                    <span className={cx("material-icons-outlined", "check")} >
                                                        check_circle
                                                    </span>
                                                </p>
                                                <p className={cx("account-show-userName")}>{item.nickname}</p>
                                            </div>
                                            <div className={cx("account-show-bottom")}>
                                                <span className={cx("account-show-bottom-number")}>6.7M</span>
                                                <span className={cx("account-show-bottom-title")}>Follower</span>
                                                <span className={cx("account-show-bottom-number")}>42.9M</span>
                                                <span className={cx("account-show-bottom-title")}>Likes</span>
                                            </div>
                                        </div>
                                    </SidebarWrapper>
                                </div>
                            )}
                            placement="bottom-start">
                            <Link to={`${config.router.profile}/@${item.nickname}`} className={cx("wrapper")}>
                                <img className={cx("avatar")} src={item.avatar} alt="avt" />
                                <div className={cx("infor")}>
                                    <p className={cx("name")}>
                                        <span>{item.full_name}</span>
                                        <span className={cx("material-icons-outlined", "check")} >
                                            check_circle
                                        </span>
                                    </p>
                                    <p className={cx("userName")}>{item.nickname}</p>
                                </div>
                            </Link>
                        </HeadlessTippy>
                    </div>
                )
                ) : data.map(item => (
                    <Link key={item.id} to={`${config.router.profile}/@${item.nickname}`} className={cx("wrapper")}>
                        <img className={cx("avatar")} src={item.avatar} alt="avt" />
                        <div className={cx("infor")}>
                            <p className={cx("name")}>
                                <span>{item.full_name}</span>
                                <span className={cx("material-icons-outlined", "check")} >
                                    check_circle
                                </span>
                            </p>
                            <p className={cx("userName")}>{item.nickname}</p>
                        </div>
                    </Link>
                ))
            }
        </>
    );
}

export default AccountItem;