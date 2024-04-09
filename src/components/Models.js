import React from "react";
import notificationlogo from'../asset/notification.png'
import profilelogo from'../asset/profilelogo.png'


const Models = () => {
  return (
    <div className="model">
      <div className="  row ps-4">
        <div className="col model-heading">
          <h2>Model Dashboard</h2>
        </div>
        <div className="col model-search-box">
          <input type="search" />
          <img src={notificationlogo} alt='logo'/>
          <img src={profilelogo} alt='logo'/>

        </div>
      </div>

      <div className="Model-Table">
        <div className="row ">
            <div className="col model-table-heading-c1">
            <h5>Models</h5>
            <p>Tab1</p>
            <p>Tab2</p>
            </div>
            <div className="col model-table-heading-c2">
            <p>+New Model</p>
            <p>Selected</p>
            <p>Sort by</p>
            </div>

        </div>
        <div className="table-content"> 
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Models;
