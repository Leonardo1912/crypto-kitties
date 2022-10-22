import React from 'react';
import "./CatsList.scss";
import {useSelector} from "react-redux";
import CatItem from "../CatItem/CatItem";

const CatsList = () => {

    const cats = useSelector(state => state.catsPage.cats)

    return (
        <div className="cats">
            {cats.map(cat => <CatItem key={cat.id} cat={cat}/>)}
        </div>)
};

export default CatsList;