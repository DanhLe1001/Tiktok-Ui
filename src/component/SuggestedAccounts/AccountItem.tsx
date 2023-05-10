import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss"
import config from "../../config";
import HeadlessTippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <HeadlessTippy
            interactive
            delay={[0, 500]}
            render={(att) => (
                <div className={cx("search-result")} tabIndex={-1} {...att}>
                    <h3>hello</h3>
                </div>
            )}

            placement="bottom-start">
            <Link to={config.router.profile} className={cx("wrapper")}>
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
    );
}
export default AccountItem;