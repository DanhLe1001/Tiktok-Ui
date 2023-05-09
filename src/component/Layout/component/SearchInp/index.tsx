import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import HeadlessTippy from '@tippyjs/react/headless';

import Account from "../../../Account";
import { Wrapper as PopperWrapper } from "../../../Popper";
import styles from "./searchInpStyle.module.scss"
import { useDebounce } from "../../../../hooks";
import *as  searchService from "../../../../apiService/searchService";

const cx = classNames.bind(styles)

function SearchInp() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [showResult, setShowResult] = useState<boolean>(true);

    const debounce = useDebounce(searchValue, 600);


    useEffect(() => {
        //encodeURIComponent convert ký tự đặc biệt: = ? & trên API
        //trim() Used to remove all leading and trailing spaces.
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchAPI = async () => {
            const res: any = await searchService.searchService(debounce);
            setSearchResult(res.data);
        }
        fetchAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

