import { Link, Routes, Route, Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import SendMessageForm from './sendMessageForm';
import {
    faSliders, faPlus, faPlusSquare, faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import StartChat from "./StartChat";
import MessageList from "./MessageList";
import ContactsList from "./ContactsList";
import { Row, Col, Container, Button, Modal, ModalFooter, ModalHeader, ModalBody, Input } from "reactstrap";
import './Contact.css';
import { useState } from "react";

const Contact = () => {
    const [modalAddContact, setModalAddContact] = useState(false);
    const toggleModalAddContact = () => setModalAddContact(!modalAddContact);
    const [modalAddGroup, setModalAddGroup] = useState(false);
    const toggleModalAddGroup = () => setModalAddGroup(!modalAddGroup);
    console.log(modalAddContact);
    return (
        <div>
            <Modal className="Modal" isOpen={modalAddContact} toggle={toggleModalAddContact}>
                <ModalHeader isOpen={modalAddContact} toggle={toggleModalAddContact}>Add New Contact</ModalHeader>
                <ModalBody>
                    <div className="d-flex">
                        <Input
                            id="searchUserInput"
                            name="searchUserInput"
                            onChange={function noRefCheck() { }}
                            type="text"
                            placeholder="Search user"
                            className="searchUserInput"></Input>
                        <Button className="btn-search" color="transparent" >
                            <FontAwesomeIcon className="iconN" icon={faMagnifyingGlass} />
                        </Button>
                    </div>
                </ModalBody>
                <ModalFooter></ModalFooter>
            </Modal>
            <Modal className="Modal" isOpen={modalAddGroup} toggle={toggleModalAddGroup}>
                <ModalHeader isOpen={modalAddGroup} toggle={toggleModalAddGroup}>Add New Group</ModalHeader>
                <ModalBody>
                    <div className="d-flex">
                        <Input
                            id="addGroupInput"
                            name="addGroupInput"
                            onChange={function noRefCheck() { }}
                            type="text"
                            placeholder="Group name"
                            className="addGroupInput"></Input>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="transparent" className="btn-add"  >
                        <strong>Add</strong>
                    </Button>
                </ModalFooter>
            </Modal>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="icons">
                            <Button color="transparent" onClick={() => setModalAddContact(!modalAddContact)}>
                                <FontAwesomeIcon className="iconN" icon={faPlus} />
                            </Button>
                            <Button color="transparent" onClick={() => setModalAddGroup(!modalAddGroup)}>
                                <FontAwesomeIcon className="iconN" icon={faPlusSquare} />
                            </Button>

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