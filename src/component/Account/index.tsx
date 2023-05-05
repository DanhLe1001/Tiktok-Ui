import classNames from "classnames/bind";
import styles from "./account.module.scss"

const cx = classNames.bind(styles)

function Account() {
    return (
        <div className={cx("wrapper")}>
            <img className={cx("avatar")} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/122b95d1cd9bd6f885598a039dc6b74d~c5_100x100.jpeg?x-expires=1683356400&x-signature=eunG0x4vYGYEoNb2fcKBmB%2BsC5Y%3D" alt="avt" />
            <div className={cx("infor")}>
                <p className={cx("name")}>
                    <span>Nguyen Van A</span>
                    <span className={cx("material-icons-outlined", "check")} >
                        check_circle
                    </span>
                </p>
                <p className={cx("userName")}>nguyenvana</p>
            </div>
        </div>
    )
}

export default Account;