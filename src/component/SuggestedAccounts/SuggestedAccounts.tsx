import classNames from "classnames/bind";

import styles from "./SuggestedAccounts.module.scss"
import { IUserData } from "../Account/Account";
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles)
interface IProp {
    check: boolean;
    label: string;
    data: IUserData[];
}

function SuggestedAccounts({ check, label, data }: IProp) {
    return (
        <>
            <p className={cx("suggest-label")}>{label}</p>
            <AccountItem check={check} data={data} />
            <span className={cx("suggest-seeAll")}>See all</span>
        </>
    );
}

export default SuggestedAccounts;