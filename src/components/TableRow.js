import React from "react";
import { ShapeEnum, SizeEnum } from "../constants/Enums";
import { uuidByString } from "./Utils";

const TableRow = (props) => {
  const token = props.token;
  const shape = props.shape;
  return (
    <tr>
      <td className={"token-image " + (token.showToken ? " " : "greyscale")}>
        <div
          id={uuidByString(token.url)}
          className={"token medium " + ShapeEnum.properties[shape].name}
        >
          <img alt={token.name} src={token.url} />{" "}
          {token.count && <div className="number">#</div>}
        </div>
      </td>
      <td className="token-name">
        <label className="mobile">Name:</label>
        <input
          className="form-control"
          type="text"
          onChange={(event) =>
            props.onUpdateTokenName(token, event.target.value)
          }
          defaultValue={token.name}
          name="name"
        />
      </td>
      <td>
        <div className="token-size">
          <label className="mobile">Size:</label>
          <select
            className="form-control"
            value={SizeEnum.properties[token.size].value}
            onChange={(event) =>
              props.onUpdateTokenSize(token, event.target.value)
            }
          >
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
          onChange={(event) =>
            props.onUpdateTokenQuantity(token, event.target.value)
          }
          name="quantity"
          defaultValue={token.quantity}
          min="1"
          max="99"
          maxLength="2"
        />
      </td>
      <td className="token-startFrom">
        <label className="mobile">Count Start:</label>
        <input
          className="form-control"
          type="number"
          disabled={token.count ? "" : "disabled"}
          onChange={(event) =>
            props.onUpdateTokenCountStart(token, event.target.value)
          }
          name="startFrom"
          defaultValue={token.startFrom || 1}
          min="1"
        />
      </td>
      <td className="token-showCount">
        <label className="mobile">Count:</label>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label
            className={
              token.count === false
                ? "btn btn-primary active"
                : "btn btn-primary"
            }
          >
            <input
              onClick={() => {
                props.onUpdateTokenCount(token, false);
              }}
              type="checkbox"
            />
            <i className="fas fa-list-ol"></i>
          </label>
          <label
            className={
              token.count === true
                ? "btn btn-success active"
                : "btn btn-success"
            }
          >
            <input
              onClick={() => {
                props.onUpdateTokenCount(token, true);
              }}
              type="checkbox"
            />
            <i className="fas fa-list-ol"></i>
          </label>
        </div>
      </td>
      <td className="token-showTent">
        <label className="mobile">Monster Tents:</label>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label
            className={
              token.showTent === false
                ? "btn btn-primary active"
                : "btn btn-primary"
            }
          >
            <input
              onClick={() => {
                props.onUpdateTokenTentVisibility(token, false);
              }}
              type="checkbox"
            />
            <i className="far fa-map"></i>
          </label>
          <label
            className={
              token.showTent === true
                ? "btn btn-success active"
                : "btn btn-success"
            }
          >
            <input
              onClick={() => {
                props.onUpdateTokenTentVisibility(token, true);
              }}
              type="checkbox"
            />
            <i className="far fa-map"></i>
          </label>
        </div>
      </td>
      <td className="token-showTokens">
        <label className="mobile">Token:</label>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label
            className={
              token.showToken === false
                ? "btn btn-primary active"
                : "btn btn-primary"
            }
          >
            <input
              onClick={() => {
                props.onUpdateTokenVisibility(token, false);
              }}
              type="checkbox"
            />
            <i className="fas fa-user-circle"></i>
          </label>
          <label
            className={
              token.showToken === true
                ? "btn btn-success active"
                : "btn btn-success"
            }
          >
            <input
              onClick={() => {
                props.onUpdateTokenVisibility(token, true);
              }}
              type="checkbox"
            />
            <i className="fas fa-user-circle"></i>
          </label>
        </div>
      </td>
      <td className="token-showPawns">
        <label className="mobile">Paper Pawn:</label>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label
            className={
              token.showPawn === false
                ? "btn btn-primary active"
                : "btn btn-primary"
            }
          >
            <input
              onClick={() => {
                props.onUpdatePawnVisibility(token, false);
              }}
              type="checkbox"
            />
            <i className="fas fa-chess-pawn"></i>
          </label>
          <label
            className={
              token.showPawn === true
                ? "btn btn-success active"
                : "btn btn-success"
            }
          >
            <input
              onClick={() => {
                props.onUpdatePawnVisibility(token, true);
              }}
              type="checkbox"
            />
            <i className="fas fa-chess-pawn"></i>
          </label>
        </div>
      </td>
      <td className="delete">
        <label className="mobile">Delete:</label>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            if (
              window.confirm(
                "Are you sure you wish to remove " + token.name + "?"
              )
            )
              props.onRemoveToken(token);
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export { TableRow };
