import React from "react";
import { Pagination } from "./style";

export default function Paginate(props) {
    const { onClick, dataInfo } = props;
    const paginate = [];
    for (let i = 1; i <= dataInfo.last_page; i++) {
        const li = (
            <li key={i}>
                <button
                    onClick={e => onClick(e, i)}
                    className={dataInfo.current_page === i ? "active" : ""}
                    disabled={dataInfo.current_page === i ? true : false}
                >
                    {i}
                </button>
            </li>
        );
        paginate.push(li);
    }
    return (
        <Pagination>
            <li>
                <button
                    onClick={e => onClick(e, 1)}
                    disabled={!dataInfo.prev_page_url}
                >
                    First Page
                </button>
            </li>
            {paginate}
            <li>
                <button
                    onClick={e => onClick(e, dataInfo.last_page)}
                    disabled={!dataInfo.next_page_url}
                >
                    Last Page
                </button>
            </li>
        </Pagination>
    );
}
