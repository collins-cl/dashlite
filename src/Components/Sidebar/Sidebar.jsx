import React, { useState } from "react";
import Logo from "../../assets/LogoImage/logo-small.png";
import "../Sidebar/Sidebar.scss";
import { HiBars3, HiUser } from "react-icons/hi2";
import {
  MdBook,
  MdDashboard,
  MdKeyboardArrowDown,
  MdMessage,
  MdOutlineTab,
  MdReceipt,
  MdSettings,
} from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { FaUserCog } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { SiPowerapps, SiSourcegraph } from "react-icons/si";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <div className={open ? "sidebar-open" : "sidebar"}>
      <div className="sidebar-head">
        <div className="logo">
          <SiSourcegraph className="img" />
          <p>
            .cole<span>dev</span>
          </p>
        </div>

        <div className="hamburger">
          <IconButton onClick={toggleOpen}>
            <HiBars3 color="black" />
          </IconButton>
        </div>
      </div>

      <div className="sidebar-li">
        <div className="sidebar-rel">
          <li>
            <Link>
              <MdDashboard className="icons" /> <p>Dashboard</p>
            </Link>
          </li>

          <li>
            <Accordion className="accordion">
              <AccordionSummary
                id="accordion-summary"
                expandIcon={<MdKeyboardArrowDown />}
              >
                <MdBook className="icons" /> <p>Courses</p>
              </AccordionSummary>
              <AccordionDetails className="accordion-details">
                <Link>Categories</Link>
                <Link>Course List</Link>
              </AccordionDetails>
            </Accordion>
          </li>

          <li>
            <Accordion className="accordion">
              <AccordionSummary
                id="accordion-summary"
                expandIcon={<MdKeyboardArrowDown />}
              >
                <HiUser className="icons" /> <p>Instructors</p>
              </AccordionSummary>
              <AccordionDetails className="accordion-details">
                <Link>Categories</Link>
                <Link>Course List</Link>
              </AccordionDetails>
            </Accordion>
          </li>

          <li>
            <Link>
              <ImUsers className="icons" /> <p>Students</p>
            </Link>
          </li>

          <li>
            <Accordion className="accordion">
              <AccordionSummary
                id="accordion-summary"
                expandIcon={<MdKeyboardArrowDown />}
              >
                <MdOutlineTab className="icons" /> <p>Enrollment</p>
              </AccordionSummary>
              <AccordionDetails className="accordion-details">
                <Link>Categories</Link>
                <Link>Course List</Link>
              </AccordionDetails>
            </Accordion>
          </li>

          <li>
            <Link>
              <MdMessage className="icons" /> <p>Messages</p>
            </Link>
          </li>

          <li>
            <Link>
              <FaUserCog className="icons" /> <p>Admin Profile</p>
            </Link>
          </li>

          <li>
            <Accordion className="accordion">
              <AccordionSummary
                id="accordion-summary"
                expandIcon={<MdKeyboardArrowDown />}
              >
                <MdReceipt className="icons" /> <p>Invoice</p>
              </AccordionSummary>
              <AccordionDetails className="accordion-details">
                <Link>Categories</Link>
                <Link>Course List</Link>
              </AccordionDetails>
            </Accordion>
          </li>

          <li>
            <Link>
              <MdSettings className="icons" /> <p>Settings</p>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
