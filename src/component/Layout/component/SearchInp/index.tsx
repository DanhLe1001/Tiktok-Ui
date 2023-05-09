import { useEffect, useRef, useState } from "react";
import Account from "../../../Account";
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from "../../../Popper";
import classNames from "classnames/bind";
import styles from "./searchInpStyle.module.scss"
import { useDebounce } from "../../../../hooks";


const cx = classNames.bind(styles)

function SearchInp() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [showResult, setShowResult] = useState<boolean>(true);

    const debounce = useDebounce(searchValue, 600)

    useEffect(() => {
        //trim() Used to remove all leading and trailing spaces.
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        //encodeURIComponent convert ký tự đặc biệt: = ? & trên API
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
            .then(response => response.json())
            .then(res => setSearchResult(res.data));


    }, [debounce])

    const inputRef = useRef<HTMLInputElement>(null);
    const handleClear = () => {
        setSearchValue("");
        inputRef.current!.focus();
    }
    const handleShow = () => {
        setShowResult(false)
    }

    return (<>
        <HeadlessTippy
            visible={showResult && searchResult.length > 0}
            interactive
            render={(att) => (
                <div className={cx("search-result")} tabIndex={-1} {...att}>
                    <PopperWrapper>
                        <h4 className={cx("search-title")}>Account</h4>

                        {searchResult.map((res: any) =>

                            <Account key={res.id} data={res} />)}

                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleShow}
        >
            <div className={cx("search")}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search" spellCheck={false}
                    onFocus={() => setShowResult(true)} />
                {!!searchValue && <button className={cx("search-clear", "material-icons-outlined")} onClick={handleClear}>clear</button>}
                <button className={cx("search-bnt", "material-icons-outlined")}>search</button>
            </div>
        </HeadlessTippy>
    </>);
}

export default SearchInp;

