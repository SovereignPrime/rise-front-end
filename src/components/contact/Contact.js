import { Link, Routes, Route, Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import SendMessageForm from './sendMessageForm';
import {
    faSliders, faPlus
} from "@fortawesome/free-solid-svg-icons";
import MessageList from "./MessageList";
import ContactsList from "./ContactsList";
import { Row, Col } from "reactstrap";
import './Contact.css';

const Contact = () => {
    return (
        <div>

            <div className="icons">
                <FontAwesomeIcon className="iconN" icon={faPlus} />
            </div>
            <Row>
                <Col md={6}>
                    <h3>Contact list</h3>
                    <ContactsList />
                </Col>
                <Col md={6}>
                    <MessageList />
                </Col>
            </Row>
            <Row>
                <SendMessageForm />
            </Row>
        </div>
    );
};

export default Contact;