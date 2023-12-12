import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Container, Row } from "react-bootstrap";

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [showModalC, setShowModalC] = useState(false);
  const [allContacts, setAllContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [onlyEven, setOnlyEven] = useState(false);

  useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/")
      .then((response) => response.json())
      .then((data) => setAllContacts(data?.results))
      .catch((error) => console.error("Error fetching all contacts:", error));
  }, []);

  const openModalA = () => {
    setShowModalA(true);
    setShowModalB(false);
    setShowModalC(false);
  };

  const openModalB = () => {
    setShowModalA(false);
    setShowModalB(true);
    setShowModalC(false);
  };

  const closeModal = () => {
    setShowModalA(false);
    setShowModalB(false);
    setShowModalC(false);
  };

  const openModalC = (contact) => {
    setSelectedContact(contact);
    setShowModalA(false);
    setShowModalB(false);
    setShowModalC(true);
  };

  const handleCheckboxChange = () => {
    setOnlyEven(!onlyEven);
  };

  const renderContacts = (contacts) =>
    contacts
      .filter((contact) => !onlyEven || contact.id % 2 === 0)
      .map((contact) => (
        <div key={contact.id} onClick={() => openModalC(contact)}>
          {contact.phone} ({contact.country.name})
        </div>
      ));

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <Button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={openModalA}
          >
            All Contacts
          </Button>
          <Button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={openModalB}
          >
            US Contacts
          </Button>
        </div>

        <Modal show={showModalA} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>All Contacts</Modal.Title>
          </Modal.Header>
          <Modal.Body>{renderContacts(allContacts)}</Modal.Body>
          <Modal.Footer>
            <Form.Check
              type="checkbox"
              label="Only Even"
              checked={onlyEven}
              onChange={handleCheckboxChange}
            />
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showModalB} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>US Contacts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {renderContacts(
              allContacts.filter(
                (contact) => contact.country.name === "United States"
              )
            )}
          </Modal.Body>
          <Modal.Footer>
            <Form.Check
              type="checkbox"
              label="Only Even"
              checked={onlyEven}
              onChange={handleCheckboxChange}
            />
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showModalC} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Contact Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedContact && (
              <div>
                <p>ID: {selectedContact.id}</p>
                <p>Phone: {selectedContact.phone}</p>
                <p>Country: {selectedContact.country.name}</p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
};

export default Problem2;
