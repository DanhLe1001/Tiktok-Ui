import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./account.module.scss"
import routerConfig from "../../config/routers";

const cx = classNames.bind(styles)

function Account({ data }: any) {
    return (
        <Link to={`${routerConfig.profile}/@${data.nickname}`} className={cx("wrapper")}>
            <img className={cx("avatar")} src={data.avatar} alt="avt" />
            <div className={cx("infor")}>
                <p className={cx("name")}>
                    <span>{data.full_name}</span>
                    {data.tick && <span className={cx("material-icons-outlined", "check")} >
                        check_circle
                    </span>}
                </p>
                <p className={cx("userName")}>{data.nickname}</p>
            </div>
        </Link>
    )
}

export default Account;