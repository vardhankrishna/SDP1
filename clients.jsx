import React from "react";

const Clients = () => {
  return (
    <div className="clients">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="client">
              <h1>3</h1>
              <p>Awesome Employees</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>15</h1>
              <p>Approvals</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>1</h1>
              <p>Satisfied Clients</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>0</h1>
              <p>Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
