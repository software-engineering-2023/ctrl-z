import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './view-account-transactions.css'

const ViewAccountTransactions = (props) => {
  return (
    <div className="view-account-transactions-container">
      <Helmet>
        <title>ViewAccountTransactions - Pure Favorable Fish</title>
        <meta
          property="og:title"
          content="ViewAccountTransactions - Pure Favorable Fish"
        />
      </Helmet>
      <div className="view-account-transactions-container1">
        <span className="view-account-transactions-text">
          <span className="Content">1. Internal Transfer</span>
          <br className="Content"></br>
          <span>
            29/5/2023 05:23 : Amount of 500.0 EGP transfered to #Account Number 
          </span>
          <br></br>
        </span>
        <span className="view-account-transactions-text05">
          <span className="view-account-transactions-text06">
            2. Domestic Transfer
          </span>
          <br></br>
          <span>
            25/5/2023 12:02 : Amount of 6030.0 EGP transfered from #Account
            Number
          </span>
          <br></br>
        </span>
        <h1 className="view-account-transactions-text10">
          Account Transactions
        </h1>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fHRyYW5zYWN0aW9uc3xlbnwwfHx8fDE2ODUyNzg4MTJ8MA&amp;ixlib=rb-4.0.3&amp;w=1600"
        className="view-account-transactions-image"
      />
      <div className="view-account-transactions-container2">
        <Link to="/report" className="view-account-transactions-navlink button">
          Report Technical Issues
        </Link>
        <Link to="/profile" className="view-account-transactions-navlink1">
          <svg
            viewBox="0 0 1024 1024"
            className="view-account-transactions-icon"
          >
            <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
          </svg>
        </Link>
        <div className="view-account-transactions-container3">
          <span className="view-account-transactions-text11">
            <span className="view-account-transactions-text12">CtrlZ</span>
            <br className="view-account-transactions-text13"></br>
            <span className="view-account-transactions-text14">Bank</span>
            <br></br>
          </span>
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className="view-account-transactions-icon2"
          >
            <path d="M920.571 554.857c0 19.429-8 37.714-21.143 51.429l-42.857 42.857c-13.714 13.714-32.571 21.714-52 21.714s-38.286-8-51.429-21.714l-168-167.429v402.286c0 41.143-34.286 66.857-73.143 66.857h-73.143c-38.857 0-73.143-25.714-73.143-66.857v-402.286l-168 167.429c-13.143 13.714-32 21.714-51.429 21.714s-38.286-8-51.429-21.714l-42.857-42.857c-13.714-13.714-21.714-32-21.714-51.429s8-38.286 21.714-52l372-372c13.143-13.714 32-21.143 51.429-21.143s38.286 7.429 52 21.143l372 372c13.143 13.714 21.143 32.571 21.143 52z"></path>
          </svg>
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className="view-account-transactions-icon4"
          >
            <path d="M920.571 475.429c0 19.429-8 38.286-21.143 51.429l-372 372.571c-13.714 13.143-32.571 21.143-52 21.143s-38.286-8-51.429-21.143l-372-372.571c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-52l42.286-42.857c13.714-13.143 32.571-21.143 52-21.143s38.286 8 51.429 21.143l168 168v-402.286c0-40 33.143-73.143 73.143-73.143h73.143c40 0 73.143 33.143 73.143 73.143v402.286l168-168c13.143-13.143 32-21.143 51.429-21.143s38.286 8 52 21.143l42.857 42.857c13.143 13.714 21.143 32.571 21.143 52z"></path>
          </svg>
        </div>
        <Link
          to="/notifications"
          className="view-account-transactions-navlink2"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="view-account-transactions-icon6"
          >
            <path d="M768 682l86 86v42h-684v-42l86-86v-212q0-100 51-174t141-96v-30q0-26 18-45t46-19 46 19 18 45v30q90 22 141 96t51 174v212zM512 938q-36 0-61-24t-25-60h172q0 34-26 59t-60 25z"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}


