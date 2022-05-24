import { Link, Routes, Route, Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import SendMessageForm from './sendMessageForm';
import {
    faSliders, faPlus, faPlusSquare
} from "@fortawesome/free-solid-svg-icons";
import StartChat from "./StartChat";
import MessageList from "./MessageList";
import ContactsList from "./ContactsList";
import { Row, Col, Container } from "reactstrap";
import './Contact.css';

const Contact = () => {
    return (
        <div>

            <Container>
                <Row>
                    <Col md={6}>
                        <div className="icons">
                            <FontAwesomeIcon className="iconN" icon={faPlus} />
                            <FontAwesomeIcon className="iconN" icon={faPlusSquare} />
                        </div>
                        <Link className="link-dark" to="MessageList/">
                            <ContactsList />
                        </Link>
                    </Col>
                    <Col md={6}>
                        <Routes>
                            <Route
                                exact
                                path="/"
                                element={<StartChat />}
                            />
                            <Route
                                exact
                                path="MessageList/*"
                                element={<MessageList />}
                            />
                        </Routes>
                    </Col>
                </Row>
                <Row>
                    <SendMessageForm />
                </Row>
            </Container>
        </div>
    );
};

export default Contact;