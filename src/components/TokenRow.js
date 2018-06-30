import React from 'react';
import {ShapeEnum, SizeEnum} from '../constants/enums';

const TableRow = (props) => {
    const token = props.token;
    const shape = props.shape;
    return (
        <tr>
            <td className="token-image">
                <div className={"token medium " + ShapeEnum.properties[shape].name}>
                    <img alt={token.name} src={token.url}/> {token.enumeration && <div className="number">#</div>}
                </div>
            </td>
            <td className="token-name">
                <label className="mobile">Name:</label>
                <input
                    className="form-control"
                    type="text"
                    onChange={(event) => props.onUpdateTokenName(token, event.target.value)}
                    defaultValue={token.name}
                    name="name"/>
            </td>
            <td>
                <div className="token-size">
                    <label className="mobile">Size:</label>
                    <select
                        className="form-control"
                        value={SizeEnum.properties[token.size].value}
                        onChange={(event) => props.onUpdateSize(token, event.target.value)}>
                        <option value="0">Tiny (0.75x0.75 in)</option>
                        <option value="1">Small (1x1 in)</option>
                        <option value="2">Medium (1x1 in)</option>
                        <option value="3">Large (1.5x1.5 in)</option>
                        <option value="4">Large (2x2 in)</option>
                        <option value="5">Huge (3x3 in)</option>
                        <option value="6">Gargantuan (4x4 in)</option>
                    </select>
                </div>
            </td>
            <td className="token-qty">
                <label className="mobile">Quantity:</label>
                <input
                    className="form-control"
                    type="number"
                    onChange={(event) => props.onUpdateTokenQuantity(token, event.target.value)}
                    name="quantity"
                    defaultValue={token.quantity}
                    min="1"/>
            </td>
            <td className="token-showEnumeration">
                <label className="mobile">Show Enum.:</label>

                <div className="btn-group btn-group-toggle" data-toggle="buttons">

                    <label
                        className={token.enumeration === false
                        ? "btn btn-primary active"
                        : "btn btn-primary"}>
                        <input
                            onClick={() => {
                            props.onUpdateTokenEnumeration(token, false)
                        }}
                            type="checkbox"/>
                        <i className="far fa-eye-slash"></i>
                    </label>
                    <label
                        className={token.enumeration === true
                        ? "btn btn-primary active"
                        : "btn btn-primary"}>
                        <input
                            onClick={() => {
                            props.onUpdateTokenEnumeration(token, true)
                        }}
                            type="checkbox"/>
                        <i className="far fa-eye"></i>
                    </label>
                </div>
            </td>
            <td className="token-startFrom">
                <label className="mobile">Enum. start:</label>
                <input
                    className="form-control"
                    type="number"
                    disabled={token.enumeration
                    ? ""
                    : "disabled"}
                    onChange={(event) => props.onUpdateTokenStartFrom(token, event.target.value)}
                    name="startFrom"
                    defaultValue={token.startFrom}
                    min="1"/>
            </td>
            <td className="delete">
                <label className="mobile">Actions:</label>
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                    if (window.confirm('Are you sure you wish to remove ' + token.name + '?')) 
                        props.onRemoveToken(token)
                }}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    )
}

export {TableRow};