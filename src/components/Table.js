import React from 'react';
import {TableRow} from './TokenRow';

const Table = (props) => {
    return (
        <div>
            <div
                className={props.tokens.length > 0
                ? "content-main"
                : "hidden"}>
                <table className="table table-striped" id="tokens-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Show Enumeration</th>
                            <th>Enumeration Start</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot></tfoot>
                    <tbody>
                        {props
                            .tokens
                            .map((token, i) => (<TableRow
                                key={token.id}
                                token={token}
                                shape={props.shape}
                                onUpdateTokenName={props.onUpdateTokenName}
                                onUpdateSize={props.onUpdateSize}
                                onUpdateTokenQuantity={props.onUpdateTokenQuantity}
                                onUpdateTokenEnumeration={props.onUpdateTokenEnumeration}
                                onUpdateTokenStartFrom={props.onUpdateTokenStartFrom}
                                onRemoveToken={props.onRemoveToken}/>))}
                    </tbody>
                </table>
                {props.tokens.length > 0 && <div id="table-actions-container">
                    <button
                        type="button"
                        className="btn btn-lg"
                        id="remove-all"
                        onClick={() => {
                        if (window.confirm('Are you sure you wish to remove all the tokens?')) 
                            props.onRemoveAllTokens()
                    }}>
                        Remove All
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        id="print-all"
                        onClick={() => {
                        window.print()
                    }}>
                        <i className="fas fa-print"></i>
                        &nbsp;Print
                    </button>
                </div>}
            </div>
        </div>
    )
}

export {Table};