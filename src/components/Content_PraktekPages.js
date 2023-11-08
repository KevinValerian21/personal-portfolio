import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { TextCenter } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {
  const user = props.users.find((u) => u.id === props.userId);

    // Function untuk menggabungkan nilai dari field "address" menjadi satu kalimat
    const getAddressAsString = (address) => {
      return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
    };
    // Function untuk menggabungkan nilai dari field "company" menjadi satu kalimat
    const getCompanyAsString = (company) => {
      return `${company.name}, ${company.catchPhrase}, ${company.bs}`;
    };


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          User Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 style={{ color: 'black', textAlign: 'center' }}>DETAIL INFORMASI</h3><br></br>
        <Table striped bordered hover variant="dark" style={{ background: 'lightgray' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>Field</th>
              <th style={{ textAlign: 'center' }}>Value</th>
            </tr>
          </thead>
          <tbody>
            {user ? (
              Object.entries(user).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>
                    {key === 'address'
                      ? getAddressAsString(value)
                      : key === 'company'
                      ? getCompanyAsString(value)
                      : typeof value === 'object' ? JSON.stringify(value) : value}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No user data available.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}




export const Content_PraktekPages = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);


  useEffect(() => {
    // Use fetch to make a GET request to the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // console.log(response)
        if (response.ok) {
          return response.json(); // Parse the JSON response
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then((data) => {
        // console.log(data)

        // Update the state with the fetched data
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        setError(error);
        setIsLoading(false);
      });
  }, []); // The empty array ensures that this effect runs only once on component mount.



  return (
    <section className="banner" id="home">
      <Container>
        {/* ... */}
        <Col id="layar">
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Table striped bordered hover variant="dark" style={{ background: 'lightgray' }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan="4">Loading...</td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td colSpan="4">Error: {error.message}</td>
                    </tr>
                  ) : (
                    users.map((user, index) => (
                      <tr key={user.id}>
                        <td style={{ textAlign: 'center' }}>{index + 1}</td>
                        <td style={{ textAlign: 'left' }}>{user.name}</td>
                        <td style={{ textAlign: 'left' }}>{user.email}</td>
                        <td style={{ textAlign: 'left' }}>{user.website}</td>
                        <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0px 80' }}>
                          <Button 
                            size="sm"
                            variant="success"
                            onClick={() => {
                              setSelectedUserId(user.id);
                              setModalShow(true);
                            }}
                          >
                            Detail
                          </Button>
                          <MyVerticallyCenteredModal
                            users={users}
                            userId={selectedUserId}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Container>
    </section>
  );
};