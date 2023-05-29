import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './view-credit-card.css'

const ViewCreditCard = (props) => {
  return (
    <div className="view-credit-card-container">
      <Helmet>
        <title>ViewCreditCard - Pure Favorable Fish</title>
        <meta
          property="og:title"
          content="ViewCreditCard - Pure Favorable Fish"
        />
      </Helmet>
      <div className="view-credit-card-container1">
        <ul className="view-credit-card-ul list">
          <li className="list-item">
            <span>Card Owner Name: </span>
          </li>
          <li className="view-credit-card-li1 list-item">
            <span>
              <span>Card Number: XXXX XXXX XXXX XXXX</span>
              <br></br>
            </span>
          </li>
          <li className="list-item">
            <span>CVV: XXX</span>
          </li>
          <li className="list-item">
            <span>Card Type: Credit</span>
          </li>
          <li className="list-item">
            <span>Issue Date: DD/MM/YYYY</span>
          </li>
          <li className="list-item">
            <span>Expiry Date: DD/MM/YYYY</span>
          </li>
          <li className="list-item">
            <span>Card Bill: 0.00 EGP</span>
          </li>
          <li className="list-item">
            <span>Card Limit: 0.00 EGP</span>
          </li>
          <li className="list-item">
            <span>Currency: Egyptian Pound</span>
          </li>
        </ul>
        <Link
          to="/view-card-transactions"
          className="view-credit-card-navlink button"
        >
          <span>
            <span className="Content">View Transactions</span>
            <br className="content1"></br>
          </span>
        </Link>
      </div>
      <h1 className="view-credit-card-text14">Credit Card Details</h1>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNyZWRpdCUyMGNhcmR8ZW58MHx8fHwxNjg1MjA1MTcwfDA&amp;ixlib=rb-4.0.3&amp;w=1600"
        className="view-credit-card-image"
      />
      <div className="view-credit-card-container2">
        <button type="submit" className="view-credit-card-button button">
          <span className="view-credit-card-text15">
            <span className="Content">Redeem Points</span>
            <br className="content1"></br>
          </span>
        </button>
        <button type="submit" className="view-credit-card-button1 button">
          <span className="view-credit-card-text18">
            <span className="Content">Pay Bill</span>
            <br className="content1"></br>
          </span>
        </button>
        <input
          type="text"
          placeholder="Enter the amount"
          className="view-credit-card-textinput input"
        />
        <span className="view-credit-card-text21 Content">Card Points: 0</span>
        <span className="view-credit-card-text22">
          <span className="Content">Card Bill: 0.00 EGP</span>
          <br></br>
        </span>
        <select className="view-credit-card-select">
          <option value="Option 1" selected>
            Partial Payment
          </option>
          <option value="Option 2">Full Payment</option>
        </select>
      </div>
      <div className="view-credit-card-container3">
        <Link to="/report" className="view-credit-card-navlink1 button">
          Report Technical Issues
        </Link>
        <Link to="/profile" className="view-credit-card-navlink2">
          <svg viewBox="0 0 1024 1024" className="view-credit-card-icon">
            <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
          </svg>
        </Link>
        <Link to="/notifications" className="view-credit-card-navlink3">
          <svg viewBox="0 0 1024 1024" className="view-credit-card-icon2">
            <path d="M768 682l86 86v42h-684v-42l86-86v-212q0-100 51-174t141-96v-30q0-26 18-45t46-19 46 19 18 45v30q90 22 141 96t51 174v212zM512 938q-36 0-61-24t-25-60h172q0 34-26 59t-60 25z"></path>
          </svg>
        </Link>
        <div className="view-credit-card-container4">
          <span className="view-credit-card-text25">
            <span className="view-credit-card-text26">CtrlZ</span>
            <br className="view-credit-card-text27"></br>
            <span className="view-credit-card-text28">Bank</span>
            <br></br>
          </span>
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className="view-credit-card-icon4"
          >
            <path d="M920.571 554.857c0 19.429-8 37.714-21.143 51.429l-42.857 42.857c-13.714 13.714-32.571 21.714-52 21.714s-38.286-8-51.429-21.714l-168-167.429v402.286c0 41.143-34.286 66.857-73.143 66.857h-73.143c-38.857 0-73.143-25.714-73.143-66.857v-402.286l-168 167.429c-13.143 13.714-32 21.714-51.429 21.714s-38.286-8-51.429-21.714l-42.857-42.857c-13.714-13.714-21.714-32-21.714-51.429s8-38.286 21.714-52l372-372c13.143-13.714 32-21.143 51.429-21.143s38.286 7.429 52 21.143l372 372c13.143 13.714 21.143 32.571 21.143 52z"></path>
          </svg>
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className="view-credit-card-icon6"
          >
            <path d="M920.571 475.429c0 19.429-8 38.286-21.143 51.429l-372 372.571c-13.714 13.143-32.571 21.143-52 21.143s-38.286-8-51.429-21.143l-372-372.571c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-52l42.286-42.857c13.714-13.143 32.571-21.143 52-21.143s38.286 8 51.429 21.143l168 168v-402.286c0-40 33.143-73.143 73.143-73.143h73.143c40 0 73.143 33.143 73.143 73.143v402.286l168-168c13.143-13.143 32-21.143 51.429-21.143s38.286 8 52 21.143l42.857 42.857c13.143 13.714 21.143 32.571 21.143 52z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}


