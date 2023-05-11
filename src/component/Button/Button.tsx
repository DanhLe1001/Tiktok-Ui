import classNames from "classnames/bind";
import styles from "./button.module.scss";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

interface IButton {
    children?: ReactNode;
    to?: string;
    href?: string;
    primary?: boolean;
    outline?: boolean;
    rounded?: boolean;
    text?: boolean;
    target?: string;
    small?: boolean;
    lager?: boolean;
    disable?: boolean;
    className?: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    onClick?: () => void | undefined;
}

function Button({ children, to, href, primary, rounded, outline, text, onClick, target, small, lager, className, leftIcon, rightIcon, disable }: IButton) {

    let Comp: "button" | typeof Link | "a" = "button";

    const props: any = {
        onClick,
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = "a";
    }

    // remove the listeners when bnt is disabled
    // if (disable) {
    //     delete props.onClick;

    //     Object.keys(props).forEach(key => {
    //         if (key.startsWith("on") && typeof props[key] === "function") {
    //             delete props[key];
    //         }
    //     })
    // }

    const classes = cx("wrapper", {
        [className!]: className, primary, outline, rounded, text, small, lager, leftIcon, rightIcon
    });
    return (
        <Comp className={classes}  {...props} target={target} >
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}

        </Comp>
    );
}

export default Button;