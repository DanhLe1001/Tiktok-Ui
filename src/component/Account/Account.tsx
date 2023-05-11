import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./account.module.scss"
import config from "../../config";

const cx = classNames.bind(styles)
export interface IUserData {
    id: number,
    first_name?: string,
    last_name?: string,
    full_name: string,
    nickname: string,
    avatar: string,
    bio?: string,
    tick?: boolean,
    followings_count?: number,
    followers_count?: number,
    likes_count?: number,
    website_url?: string,
    facebook_url?: string,
    youtube_url?: string,
    twitter_url?: string,
    instagram_url?: string,
}

interface IData {
    data: IUserData
}

function Account({ data }: IData) {
    return (
        <Link to={`${config.router.profile}/@${data.nickname}`} className={cx("wrapper")}>
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