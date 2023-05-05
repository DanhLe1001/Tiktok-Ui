import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';


import { Wrapper as PopperWrapper } from '../../Popper';
import styles from "./menu.module.scss"
import { IMenuItem } from '../../Layout/component/Header';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

const cx = classNames.bind(styles)

interface IMenu {
    children: any;
    items: IMenuItem[];
    onChange?: any;
}


function Menu({ children, items, onChange }: IMenu) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1];

    const renderItems = () => {

        return current.data.map((i: any, index) => {
            const isParent = !!i.children;
            return <MenuItem key={index} data={i} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, i.children])
                }
                else {
                    onChange(i)
                }
            }} />
        })
    }

    return (
        <Tippy
            onHide={() => setHistory((prev => prev.slice(0, 1)))}
            delay={[0, 600]}
            offset={[12, 8]}
            interactive
            placement="bottom-end"
            render={(att) => (
                <div className={cx("menu-list")} tabIndex={-1} {...att}>
                    <PopperWrapper>
                        {history.length > 1 && <HeaderMenu title='Language' onBack={() => (
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        )}></HeaderMenu>}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>);
}

export default Menu;