import { Link, Outlet } from 'react-router-dom';
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss"
import config from "../../config";
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as SidebarWrapper } from "../Popper"
import { Button } from "../Button";

const cx = classNames.bind(styles)

function AccountItem() {

    return (
        <div>
            <HeadlessTippy
                interactive
                offset={[-8, 0]}
                delay={[500, 0]}
                render={(att) => (
                    <div className={cx("account-show")} tabIndex={-1} {...att}>
                        <SidebarWrapper>
                            <div className={cx("account-item")}>
                                <div className={cx("account-show-top")}>
                                    <img className={cx("account-show-avatar")} src="https://images.unsplash.com/photo-1682981287022-cc7cd2e2b488?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="avt" />
                                    <Button primary>Follow</Button>
                                </div>
                                <div className={cx("account-show-infor")}>
                                    <p className={cx("account-show-name")}>
                                        <span>hello word</span>
                                        <span className={cx("material-icons-outlined", "check")} >
                                            check_circle
                                        </span>
                                    </p>
                                    <p className={cx("account-show-userName")}>hello word</p>
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

                <Link to={`${config.router.profile}/@`} className={cx("wrapper")}>
                    <img className={cx("avatar")} src="https://images.unsplash.com/photo-1682981287022-cc7cd2e2b488?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="avt" />
                    <div className={cx("infor")}>
                        <p className={cx("name")}>
                            <span>hello word</span>
                            <span className={cx("material-icons-outlined", "check")} >
                                check_circle
                            </span>
                        </p>
                        <p className={cx("userName")}>hello word</p>
                    </div>
                </Link>
            </HeadlessTippy>
        </div>
    );
}
export default AccountItem;