import React from "react";
import { Link } from "react-router-dom";

function sidebar() {
  return (
    <div>
      <div className="p-3 text-bg-dark" style={{ height: "100vh" }}>
        <span className="text-right fs-4">Dashboard</span>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to={"/logic-gates"} className="nav-link bg-primary text-white">
              <b>Logic Gates</b>
            </Link>
          </li>
          <br />
          <li>
            <Link to={"/truth-table"} className="nav-link bg-light text-dark">
              <b>Truth Tables</b>
            </Link>
          </li>
          <br />
          <li>
            <Link to={"/and"} className="nav-link bg-success text-white">
              <b>AND</b>
            </Link>
          </li>
          <br />
          <li>
            <Link to={"/or"} className="nav-link bg-warning text-dark">
              <b>OR</b>
            </Link>
          </li>
          <br />
          <li>
            <Link to={"/not"} className="nav-link bg-danger text-white">
              <b>NOT</b>
            </Link>
          </li>
          <br />
          <li>
            <Link to={"/nand"} className="nav-link bg-black text-white">
              <b>NAND</b>
            </Link>
          </li>
          <br />
          <li>
            <Link to={"/nor"} className="nav-link bg-info text-white">
              <b>NOR</b>
            </Link>
          </li>
          <br />
          <li>
            <Link
              to={"/xor"}
              className="nav-link text-white"
              style={{ backgroundColor: "brown" }}
            >
              <b>XOR</b>
            </Link>
          </li>
          <br />
          <li>
            <Link to={"/xnor"} className="nav-link bg-secondary text-white">
              <b>XNOR</b>
            </Link>
          </li>
        </ul>
      </div>
      ;
    </div>
  );
}

export default sidebar;
