import classNames from "classnames/bind";

import AccountItem from "./AccountItem";
import styles from "./SuggestedAccounts.module.scss"

const cx = classNames.bind(styles)
interface IProp {
    label: string;
}

function SuggestedAccounts({ label }: IProp) {
    return (
        <>
            <p className={cx("suggest-label")}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <span className={cx("suggest-seeAll")}>See all</span>
        </>
    );
}

export default SuggestedAccounts;