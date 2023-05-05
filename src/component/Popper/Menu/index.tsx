import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';


import { Wrapper as PopperWrapper } from '../../Popper';
import styles from "./menu.module.scss"
import { IMenuItem } from '../../Layout/component/Header';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles)

interface IMenu {
    children: any;
    items: IMenuItem[]
}

function Menu({ children, items }: IMenu) {
    const renderItems = () => {
        return items.map((i, index) => {
            return <MenuItem key={index} data={i} />
        }
        )
    }

    return (
        <Tippy
            // visible
            interactive
            placement="bottom-end"
            render={(att) => (
                <div className={cx("menu-list")} tabIndex={-1} {...att}>
                    <PopperWrapper>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>);
}

export default Menu;