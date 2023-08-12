import React from "react";
import "./Dashboard.scss";
import { MdChevronRight, MdOutlineCalendarMonth } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { Data, salesData, weeklyData } from "../../Dummies/ChartData";
import TopCategories from "../../Components/Topcategories/TopCategories";

const Dashboard = () => {
  const data = Data;
  const sales = salesData;
  const weekly = weeklyData;

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

              <p>
                <GoArrowUp /> 16.93%
              </p>
            </div>
            <div className="weekly-vals">
              <div>
                <div className="amount">1480</div>
                <p>This Week</p>
              </div>

              <p>
                <GoArrowDown /> 4.43%
              </p>
            </div>
          </div>

          <div className="stud-chart">
            <ResponsiveContainer width="100%" height={130}>
              <BarChart width={900} height={1300} data={data}>
                <Tooltip wrapperStyle={{ width: "80px" }} />
                <Bar dataKey="uv" fill="#8884d8" barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="total-sales">
          <div className="head">Total Sales</div>

          <div className="figures">
            <div className="amount">$9,532.67</div>

            <div className="amount-action">
              <div>
                <GoArrowUp /> <p>4.12%</p>
              </div>

              <p>vs. last month</p>
            </div>
          </div>

          <div className="chart">
            <ResponsiveContainer width="100%" height={80}>
              <AreaChart
                margin={{ left: 0, right: 0, bottom: 0 }}
                width={400}
                height={80}
                data={sales}
              >
                <Area type="" dataKey="uv" stroke="#8884d8" />
                <Tooltip wrapperStyle={{ width: 80 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="total-sales">
          <div className="head">This week so far</div>

          <div className="figures">
            <div className="amount">$2,132.67</div>

            <div className="amount-action">
              <div>
                <GoArrowUp /> <p>7.12%</p>
              </div>

              <p>vs. last week</p>
            </div>
          </div>

          <div className="chart">
            <ResponsiveContainer width="100%" height={80}>
              <AreaChart
                margin={{ left: 0, right: 0, bottom: 0 }}
                width={400}
                height={80}
                data={data}
               
              >
                <Area type="" dataKey="uv" stroke="#0f097d" />
                <Tooltip wrapperStyle={{ width: 80 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <TopCategories/>
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
    </div>
  );
};

export default Dashboard;
