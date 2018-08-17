import React from 'react';
import {ShapeEnum} from '../constants/Enums';

const Shape = (props) => {
    return (
        <div
            id="shape-selector"
            className={props.tokens.length > 0
            ? "show"
            : "hide"}>
            <span>Select a shape for the tokens:&nbsp;&nbsp;</span>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label
                    className={props.shape === ShapeEnum.SQUARE
                    ? "btn btn-primary active"
                    : "btn btn-primary"}>
                    <input
                        onClick={() => {
                        props.onUpdateShape(ShapeEnum.SQUARE)
                    }}
                        type="checkbox"/>
                    <i className="far fa-square"></i>
                </label>
                <label
                    className={props.shape === ShapeEnum.ROUND
                    ? "btn btn-primary active"
                    : "btn btn-primary"}>
                    <input
                        onClick={() => {
                        props.onUpdateShape(ShapeEnum.ROUND)
                    }}
                        type="checkbox"/>
                    <i className="far fa-circle"></i>
                </label>
            </div>
        </div>
    )
}

export {Shape};