import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { homePage, trackOrderPage } from "../../../../../configs/datas/links";
import {
  serverBaseURL,
  serverPostQuote,
} from "../../../../../configs/datas/server";

import "../../../../../css/quote3.css";

import Modal from "../../Modals/Modal";

function Index() {
  let { model } = useParams();
  // console.log(model);

  const [isModal, setIsModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFormSubmited, setIsFormSubmited] = useState(false);

  const [formData, setFormData] = useState({
    model: model ? model : null,
    name: "",
    phone: "",
    email: "",
    device: "",
    issue: "",
    detail: "",
  });
  const { name, phone, email, device, issue, detail } = formData;

  const onChane = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post(`${serverBaseURL}${serverPostQuote}`, formData)
      .then((res) => {
        console.log(res);
        setIsFormSubmited(true);
        setIsModal(true);
      })
      .catch((err) => {
        // what now?
        setIsError(true);
        setIsModal(true);
        console.log(err, "SERVER sorunu var");
      });
    // await onModalSubmit(formdata);
    // clearForm();
    // onClose();
  };

  return (
    <>
      <div className="getquote-details">
        <div className="navbar">
          <div className="logo">
            <Link to={homePage}>PhoneSolder</Link>
          </div>
          <ul className="nav">
            <li>
              <Link to={trackOrderPage}>Track Order</Link>
            </li>
            <li>
              <Link className="hero-button" to="quote.html">
                Get Quote
              </Link>
            </li>
          </ul>
        </div>

        <section className="repair">
          <h1>GET QUOTE FOR REPAIR</h1>
          <form onSubmit={(e) => onSubmit(e)} className="repair-form">
            <div className="form-left">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => onChane(e)}
                  value={name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  onChange={(e) => onChane(e)}
                  value={phone}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => onChane(e)}
                  value={email}
                />
              </div>
            </div>
            <div className="form-right">
              <div className="form-group">
                <label htmlFor="device">Device</label>
                <input
                  type="text"
                  placeholder="E.g: Samsung galaxy s8"
                  name="device"
                  id="device"
                  onChange={(e) => onChane(e)}
                  value={device}
                />
              </div>
              <div className="form-group">
                <label htmlFor="issue">Issue</label>
                <input
                  type="text"
                  placeholder="E.g: Doesn't charge"
                  name="issue"
                  id="issue"
                  onChange={(e) => onChane(e)}
                  value={issue}
                />
              </div>
              <div className="form-group">
                <label htmlFor="detail">Issue Details</label>
                <textarea
                  name="detail"
                  placeholder="E.g: Charging port doesn't work at all."
                  id="detail"
                  cols="30"
                  rows="6"
                  onChange={(e) => onChane(e)}
                  value={detail}
                ></textarea>
              </div>
              <div className="form-button">
                <input
                  type="submit"
                  value="Submit"
                  onSubmit={(e) => onSubmit(e)}
                />
              </div>
            </div>
          </form>
        </section>
      </div>

      <Modal isModal={isModal} onModalClose={() => setIsModal(false)}>
        {/* onModalClose []clear the form / []Redirect to user */}
        {/* if Error maybe not clear the form and wait for user re-try again ?? */}
        {isError ? <h1>Error</h1> : <h1>No Error</h1>}
      </Modal>
    </>
  );
}

export default Index;
