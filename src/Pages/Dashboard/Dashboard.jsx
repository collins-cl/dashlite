import React from "react";
import "./Dashboard.scss";
import { MdChevronRight, MdOutlineCalendarMonth } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";

const Dashboard = () => {
  return (
    <div className="Dashboard-page">
      <div className="dashboard-head">
        <div className="title">
          <div className="head">Dashboard</div>

          <p>Welcome to Learning Management Dashboard</p>
        </div>

        <div className="options">
          <div className="days">
            <MdOutlineCalendarMonth />
            <p> Last 30 Days</p>
            <MdChevronRight />
          </div>

          <div className="reports">
            <LiaFileInvoiceSolid />
            <p> Reports</p>
          </div>
        </div>
      </div>

      <div className="contents">
        <div className="stud-enrol">
          <div className="head">
            <div>
              <h4>Students Enrollment</h4>
              <p>In the last 30 days, enrollment of students</p>
            </div>

            <div className="tooltip">?</div>
          </div>

          <div className="values">
            <div className="monthly-vals">
              <div>
                <div className="amount">5390</div>
                <p>This Month</p>
              </div>

              <p>16.93%</p>
            </div>
            <div className="weekly-vals">
              <div>
                <div className="amount">1480</div>
                <p>This Weekl</p>
              </div>

              <p>4.43%</p>
            </div>
          </div>
        </div>
      </div>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
      <p>kdksj kdksj</p>
    </div>
  );
};

export default Dashboard;
