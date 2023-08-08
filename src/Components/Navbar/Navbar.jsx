import React, { useState, useRef, useEffect } from "react";
import "../Navbar/Navbar.scss";
import Logo from "../../assets/LogoImage/logo-dark.png";
import { HiBars3 } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa";
import { GoSearch, GoSignOut } from "react-icons/go";
import { IoIosNotificationsOutline, IoIosSend, IoMdSend } from "react-icons/io";
import Countries from "../../Dummies/Countries";
import Selected from "../../assets/Countries/english.png";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { BsActivity } from "react-icons/bs";

const Navbar = () => {
  const ref = useRef(null);
  const profileref = useRef(null);
  const Flags = Countries;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [anchorEl, setAnchorEL] = useState(null);
  const [modal, setModal] = useState(false);
  const [profilemodal, setProfileModal] = useState(false);

  const handleClick = (e) => {
    setOpen(!open);
    setAnchorEL(e.target);
  };

  const handleToggleModal = () => {
    setModal(!modal);
  };

  const handleProfileModal = () => {
    setProfileModal(!profilemodal);
  };

  //creates reference to the dropdown menu
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setModal(false);
    }
  };

  const handleClickOutsideModal = (e) => {
    if (profileref.current && !profileref.current.contains(e.target)) {
      setProfileModal(false);
    }
  };

  //adds and removes event listeners for the dropdown menu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutsideModal);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="container">
        <div className="mobile-view-logo">
          <HiBars3 className="icon"/> <img src={Logo} alt="" />
        </div>

        <div className="right-widget">
          <div className="search-bar-nav">
            <p>
              <GoSearch className="icon" />
            </p>
            <input type="text" placeholder="search anything" />
          </div>

          <div className="aside">
            <div className="widgets">
              <div className="countries">
                <div className="selected">
                  <IconButton onClick={handleClick}>
                    <Avatar
                      src={selected ? selected : Selected}
                      alt="profile png"
                      sx={{ width: "25px", height: "25px" }}
                    />
                  </IconButton>
                </div>

                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClick={handleClick}
                  sx={{ width: "1000px", marginTop: "10px" }}
                >
                  {Flags &&
                    Flags.map((flag, id) => (
                      <MenuItem
                        key={id}
                        onClick={() => setSelected(flag.image)}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <img width={30} src={flag.image} alt="" />
                        <p style={{ fontSize: "13px" }}>{flag.name}</p>
                      </MenuItem>
                    ))}
                </Menu>
              </div>

              <div className="notifications" ref={ref}>
                <div className="notification">
                  <IconButton onClick={handleToggleModal}>
                    <IoIosNotificationsOutline />
                  </IconButton>
                  <div />
                </div>

                {modal && (
                  <div className="notif">
                    <div className="notif-head">
                      <p>Notifications</p> <div>Mark All As Read</div>
                    </div>

                    <div className="content">
                      <div className="content-info">
                        <div className="deposit">
                          <IoIosSend className="icon" />
                          <div>
                            <div className="cont">
                              You have requested to Withdraw
                            </div>
                            <div className="time">2 Hrs ago</div>
                          </div>
                        </div>

                        <div className="request">
                          <IoIosSend className="icon" />
                          <div>
                            <div className="cont">
                              You have requested to Withdraw
                            </div>
                            <div className="time">2 Hrs ago</div>
                          </div>
                        </div>

                        <div className="deposit">
                          <IoIosSend className="icon" />
                          <div>
                            <div className="cont">
                              You have requested to Withdraw
                            </div>
                            <div className="time">2 Hrs ago</div>
                          </div>
                        </div>

                        <div className="request">
                          <IoIosSend className="icon" />
                          <div>
                            <div className="cont">
                              You have requested to Withdraw
                            </div>
                            <div className="time">2 Hrs ago</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="footer">View All</div>
                  </div>
                )}
              </div>
            </div>

            <div className="profile" ref={profileref}>
              <div className="cont" onClick={handleProfileModal}>
                <div>
                  <Avatar
                    sx={{
                      backgroundColor: "rgb(111, 95, 190)",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </div>
                <div className="profile-summary">
                  <div>Adminstrator</div>
                  <p>
                    Collins Ox Tom <FaAngleDown />
                  </p>
                </div>
              </div>

              {profilemodal && (
                <div className="profile-content">
                  <div className="contain">
                    <div>
                      <Avatar
                        sx={{
                          backgroundColor: "rgb(111, 95, 190)",
                          width: "45px",
                          height: "45px",
                        }}
                      />
                    </div>
                    <div className="profile-summary">
                      <div>Collins Ox Tom</div>
                      <p>collinsolads@gmail.com</p>
                    </div>
                  </div>

                  <div className="middle-sect">
                    <div className="v-prof">
                      <AiOutlineUser className="icon" /> View Profile
                    </div>

                    <div className="account-set">
                      <AiOutlineSetting className="icon" /> Account Setting
                    </div>

                    <div className="activity">
                      <BsActivity className="icon" /> Login Activity
                    </div>
                  </div>

                  <div className="logout">
                    <GoSignOut /> Sign Out
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
