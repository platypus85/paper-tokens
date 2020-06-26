import React from "react";
import { TableRow } from "./TableRow";

const Table = (props) => {
  return (
    <div>
      <div className={props.tokens.length > 0 ? "content-main" : "hidden"}>
        <table className="table table-striped" id="tokens-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Count Start</th>
              <th>Count</th>
              <th>Monster Tent</th>
              <th>Token</th>
              <th>Paper Pawn</th>
              <th>Delete</th>
            </tr>
            <tr id="bulk-selection">
              <th colSpan="5">Bulk Selection</th>
              <th>
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                >
                  <label className="btn btn-primary">
                    <input
                      onClick={() => {
                        props.onUpdateAllTokensCountVisibility(false);
                      }}
                      type="checkbox"
                    />
                    <i className="fas fa-list-ol"></i>
                  </label>
                  <label className="btn btn-success">
                    <input
                      onClick={() => {
                        props.onUpdateAllTokensCountVisibility(true);
                      }}
                      type="checkbox"
                    />
                    <i className="fas fa-list-ol"></i>
                  </label>
                </div>
              </th>
              <th>
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                >
                  <label className="btn btn-primary">
                    <input
                      onClick={() => {
                        props.onUpdateAllTokenTentsVisibility(false);
                      }}
                      type="checkbox"
                    />
                    <i className="far fa-map"></i>
                  </label>
                  <label className="btn btn-success">
                    <input
                      onClick={() => {
                        props.onUpdateAllTokenTentsVisibility(true);
                      }}
                      type="checkbox"
                    />
                    <i className="far fa-map"></i>
                  </label>
                </div>
              </th>
              <th>
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                >
                  <label className="btn btn-primary">
                    <input
                      onClick={() => {
                        props.onUpdateAllTokensVisibility(false);
                      }}
                      type="checkbox"
                    />
                    <i className="fas fa-user-circle"></i>
                  </label>
                  <label className="btn btn-success">
                    <input
                      onClick={() => {
                        props.onUpdateAllTokensVisibility(true);
                      }}
                      type="checkbox"
                    />
                    <i className="fas fa-user-circle"></i>
                  </label>
                </div>
              </th>
              <th>
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                >
                  <label className="btn btn-primary">
                    <input
                      onClick={() => {
                        props.onUpdateAllPawnsVisibility(false);
                      }}
                      type="checkbox"
                    />
                    <i className="fas fa-chess-pawn"></i>
                  </label>
                  <label className="btn btn-success">
                    <input
                      onClick={() => {
                        props.onUpdateAllPawnsVisibility(true);
                      }}
                      type="checkbox"
                    />
                    <i className="fas fa-chess-pawn"></i>
                  </label>
                </div>
              </th>
              <th>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you wish to remove all the tokens?"
                      )
                    )
                      props.onRemoveAllTokens();
                  }}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </th>
            </tr>
          </thead>
          <tfoot></tfoot>
          <tbody>
            {props.tokens.map((token, i) => (
              <TableRow
                key={token.id}
                token={token}
                shape={props.shape}
                onUpdateTokenName={props.onUpdateTokenName}
                onUpdateTokenSize={props.onUpdateTokenSize}
                onUpdateTokenQuantity={props.onUpdateTokenQuantity}
                onUpdateTokenCount={props.onUpdateTokenCount}
                onUpdateTokenTentVisibility={props.onUpdateTokenTentVisibility}
                onUpdateTokenVisibility={props.onUpdateTokenVisibility}
                onUpdatePawnVisibility={props.onUpdatePawnVisibility}
                onUpdateTokenCountStart={props.onUpdateTokenCountStart}
                onRemoveToken={props.onRemoveToken}
                onDownloadToken={props.onDownloadToken}
              />
            ))}
          </tbody>
        </table>
        {props.tokens.length > 0 && (
          <div id="table-actions-container">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              id="print-all"
              onClick={() => {
                window.print();
              }}
            >
              <i className="fas fa-print"></i>
              &nbsp;Print
            </button>
            <p>
              *In order to fit Large and Huge paper minis in a A4 page, I
              suggest to customise the margins when you print the PDF (5mm
              margins should be enough)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export { Table };
