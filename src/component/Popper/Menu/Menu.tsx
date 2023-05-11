import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '..';
import styles from "./menu.module.scss"
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
import { IMenuItem } from '../../../layouts/component/Header/Header';

const cx = classNames.bind(styles)

interface IMenu {
    children: JSX.Element;
    items: IMenuItem[];
}

function Menu({ children, items }: IMenu) {
    const [history, setHistory] = useState<{ data: IMenuItem[], title?: string }[]>([{ data: items }])

    const current = history[history.length - 1];

    const renderItems = () => {

        return current.data?.map((i: IMenuItem) => {
            const isParent = !!i.children;
            return <MenuItem key={i.title} data={i} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, i.children!])
                }
            }} />
        })
    }

    const renderResult = (att: object) => (
        <div className={cx("menu-list")} tabIndex={-1} {...att}>
            <PopperWrapper>
                {history.length > 1 && <HeaderMenu title={current.title!} onBack={() => {
                    const resetValueMenu = history.slice(0, history.length - 1);
                    setHistory(resetValueMenu);
                }
                }></HeaderMenu>}
                <div className={cx("menu-scrollable")}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    )

    return (
        <Tippy
            //onHide set value again after it hide (return to first page) reset menu
            onHide={() => setHistory((prev => prev.slice(0, 1)))}
            delay={[0, 500]}
            offset={[12, 8]}
            hideOnClick={false}
            interactive
            placement="bottom-end"
            render={renderResult}
        >
            {children}
        </Tippy>);
}

export default Menu;