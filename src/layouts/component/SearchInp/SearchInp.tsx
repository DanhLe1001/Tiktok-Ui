import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from "../../../component/Popper";
import styles from "./searchInpStyle.module.scss"
import { Account } from "../../../component/Account";
import { useDebounce } from "../../../hooks";
import * as searchService from "../../../services/searchService";
import config from '../../../config';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function SearchInp() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [showResult, setShowResult] = useState<boolean>(false);

    const debounceValue = useDebounce(searchValue, 600);

    useEffect(() => {
        //encodeURIComponent convert ký tự đặc biệt: = ? & trên API
        //trim() Used to remove all leading and trailing spaces.
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchAPI = async () => {
            const res: any = await searchService.searchService(debounceValue);
            setSearchResult(res.data);
        }
        fetchAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceValue])

    const inputRef = useRef<HTMLInputElement>(null);
    const handleClear = () => {
        setSearchValue("");
        inputRef.current!.focus();
    }

    const handleShow = () => {
        setShowResult(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const searchValue: string = e.target.value;
        if (!searchValue.startsWith(" ") || searchValue.trim()) {
            setSearchValue(searchValue);
        }
    }


    return (<>
        {/* tag around the reference element solves this by creating a new parentNode context. Specifying `appendTo: document.b */}
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                // appendTo={() => document.body}
                render={(att) => (
                    <div className={cx("search-result")} tabIndex={-1} {...att}>
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>Account</h4>
                            <div className={cx("search-result-scroll")}>
                                {searchResult.map((res: any) =>

                                    <Account key={res.id} data={res} />)}
                            </div>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleShow}
            >
                <div className={cx("search")}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={handleChange}
                        placeholder="Search" spellCheck={false}
                        onFocus={() => setShowResult(true)} />
                    {!!searchValue && <button className={cx("search-clear", "material-icons-outlined")} onClick={handleClear}>clear</button>}
                    <Link to={config.router.search} className={cx("xx")}>
                        <button className={cx("search-bnt", "material-icons-outlined")} onMouseDown={(e) => e.preventDefault()}>search</button>
                    </Link>
                </div>
            </HeadlessTippy>
        </div>
    </>);
}

export default SearchInp;

