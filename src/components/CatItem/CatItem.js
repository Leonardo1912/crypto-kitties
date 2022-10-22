import React from 'react';
import "./CatItem.scss";

const CatItem = ({cat}) => {
    return (
        <div  className="cat">
            <img src={cat.image_url} alt=""/>
            <div className="description">
                <div className="main-info">
                    <div className="name">{cat.name}</div>
                    <div className="category">{cat.category}</div>
                </div>
                <div className="price">{cat.price}</div>
            </div>
        </div>
    );
};

export default CatItem;