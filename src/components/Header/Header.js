import React from 'react';
import "./Header.scss"
import {useDispatch, useSelector} from "react-redux";
import {getSortedCats, setCurrentSort, setDirectionSort} from "../../store/catsReducer";

const Header = () => {

    const sort = ["name", "category", "price"]

    const dispatch = useDispatch()

    const currentSort = useSelector(state => state.catsPage.currentSort)
    const directionSort = useSelector(state => state.catsPage.directionSort)

    const setSort = (name) => {
        if (name === currentSort) {
            dispatch(setDirectionSort(!directionSort))
            dispatch(getSortedCats(name, !directionSort))
        } else {
            dispatch(setCurrentSort(name))
            dispatch(setDirectionSort(true))
            dispatch(getSortedCats(name, true))
        }
    }

    const setClassName = (name) => {
        if(name === currentSort) {
            return directionSort ? "top" : "down"
        }
    }

    return (
        <div className="Header">
            <div className="sort-menu">
                {sort.map(item => <div key={item} onClick={() => setSort(item)} className={`sort-item ${setClassName(item)}`}>
                    {item}
                </div>)}
            </div>
        </div>
    );
};

export default Header;