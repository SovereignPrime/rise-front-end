import { Link, Routes, Route, Outlet, useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import MakePayment from "../marketplace/nirvanaPages/MakePayment";
import RequestPayment from "../marketplace/nirvanaPages/RequestPayment";
import CompletedTransactions from "../marketplace/nirvanaPages/CompletedTransactions";
import CancelledTransactions from "../marketplace/nirvanaPages/CancelledTransactions";
import NirvanaNotifications from "../marketplace/nirvanaPages/NirvanaNotifications";
import FulfilledPayments from "../marketplace/nirvanaPages/FulfilledPayments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

// Nirvana/Payment Pages will live here.

const Nirvana = () => {
  // Return & JSX - My game plan here to make any of the submenus collapsable using the CSS/SASS partial. Note from Kevin W: To anyone reading this note please ensure to have the SASS/SCSS pre-processor installed and that you have WATCH SASS active on VS code for the CSS to be rendered correctly. Please reach out to me on sykpe if you need a hand with this.
  return (
    <Container class="container-fluid p-0">
      <Row>
        <div className="nirvanaLanding">
          {/* This is where the nav links for Nirvana info, wallet and transactions will live */}
          <Col className="col-4 mx-0 px-0 border-end">
            <nav className="nirvanaNav">
              <div className="walletBalance">
                <h5>Wallet Balance: $500.50</h5>
                <h6>100,000 Karma </h6>
              </div>
                <ul>
                  <li>Payments</li>
                  <ul className="paymentNav" class="list-group-flush">
                    <button
                      type="button"
                      class="list-group-item list-group-item-action"
                    >
                      <li>
                        {" "}
                        <Link to="RequestPayment">
                          <FontAwesomeIcon
                            className="icon"
                            icon={faCreditCard}
                          />
                          Request a Payment
                        </Link>
                      </li>
                    </button>
                    <button
                      type="button"
                      class="list-group-item list-group-item-action"
                    >
                      <li>
                        {" "}
                        <Link to="MakePayment">
                          <FontAwesomeIcon
                            className="icon"
                            icon={faCreditCard}
                          />
                          Make a Payment
                        </Link>
                      </li>
                    </button>
                  </ul>
                  <li>Transaction</li>
                  <ul className="transactionNav" class="list-group-flush">
                    <button
                      type="button"
                      class="list-group-item list-group-item-action"
                    >
                      <li>
                        {" "}
                        <Link to="CompletedTransactions">
                          Completed Transactions
                        </Link>
                      </li>
                    </button>
                    <button
                      type="button"
                      class="list-group-item list-group-item-action"
                    >
                      <li>
                        {" "}
                        <Link to="CancelledTransactions">
                          Cancelled Transactions
                        </Link>
                      </li>
                    </button>
                  </ul>
                  {/* As per Figma, no submenu options for Notification */}
                  <ul class="list-group-flush">
                    <button
                      type="button"
                      class="list-group-item list-group-item-action"
                    >
                      <li>
                        <Link to="NirvanaNotifications">Notification</Link>
                      </li>
                    </button>
                    {/* As per Figma, no submenu options for Fullfilled Payments */}
                    <button
                      type="button"
                      class="list-group-item list-group-item-action"
                    >
                      <li>
                        <Link to="FulfilledPayments">Fulfilled Payments</Link>
                      </li>
                    </button>
                  </ul>
                </ul>
            </nav>
          </Col>
          <Routes>
            <Route
              path="MakePayment/*"
              element={
                <div>
                  <MakePayment />
                </div>
              }
            />
            <Route
              path="RequestPayment/*"
              element={
                <div>
                  <RequestPayment />
                </div>
              }
            />
            <Route
              path="CompletedTransactions/*"
              element={
                <div>
                  <CompletedTransactions />
                </div>
              }
            />
            <Route
              path="CancelledTransactions/*"
              element={
                <div>
                  <CancelledTransactions />
                </div>
              }
            />
            <Route
              path="NirvanaNotifications/*"
              element={
                <div>
                  <NirvanaNotifications />
                </div>
              }
            />
            <Route
              path="FulfilledPayments/*"
              element={
                <div>
                  <FulfilledPayments />
                </div>
              }
            />
          </Routes>
        </div>
      </Row>
    </Container>
  );
};

export default Nirvana;
