import React, {FC} from 'react';
import user from "./Paginator.module.css";


const Paginator:FC<PaginatorType> = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.slice(0, 50).map(p => {
            return (
                <span
                    key={p}
                    className={currentPage === p ? user.selectedPage : ''}
                    onClick={() => {
                        onPageChanged(p)
                    }}
                >
                                {p + ' '}
                            </span>
            )
        })}
    </div>
};

export default Paginator;


export type PaginatorType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}