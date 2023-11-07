import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

export const Content_PraktekPages = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use fetch to make a GET request to the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse the JSON response
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then((data) => {
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
        <h3>Read data API From: <br></br>https://jsonplaceholder.typicode.com/users</h3><br></br>
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
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
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
}
