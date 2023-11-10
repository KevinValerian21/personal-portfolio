import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TextCenter } from 'react-bootstrap-icons'; // Check if this is the correct import for TextCenter
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

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
        <h3 style={{ color: 'black', textAlign: 'center' }}>
          DETAIL INFORMASI TANPA FETCHING
        </h3>
        <br></br>
        <Table
          striped
          bordered
          hover
          variant="dark"
          style={{ background: 'lightgray' }}
        >
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
                      : typeof value === 'object'
                      ? JSON.stringify(value)
                      : value}
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

        <h3 style={{ color: 'black', textAlign: 'center' }}>
          DETAIL INFORMASI DENGAN FETCHING
        </h3>
        <br></br>
        <Table
          striped
          bordered
          hover
          variant="dark"
          style={{ background: 'lightgray' }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>Field</th>
              <th style={{ textAlign: 'center' }}>Value</th>
            </tr>
          </thead>
          <tbody>
            {props.selectedUserDetails ? (
              Object.entries(props.selectedUserDetails).map(
                ([key, value]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>
                      {key === 'address'
                        ? getAddressAsString(value)
                        : key === 'company'
                        ? getCompanyAsString(value)
                        : typeof value === 'object'
                        ? JSON.stringify(value)
                        : value}
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td colSpan="2">No user details available.</td>
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

function ModalsPart2(props) {

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
        <Modal.Title id="contained-modal-title-vcenter" style={{ color: 'black', textAlign: 'center' }}>
          User Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 style={{ color: 'black', textAlign: 'center' }}>
          DETAIL INFORMASI DENGAN SEARCH BY ID
        </h3>
        <br></br>
        <Table
          striped
          bordered
          hover
          variant="dark"
          style={{ background: 'lightgray' }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>Field</th>
              <th style={{ textAlign: 'center' }}>Value</th>
            </tr>
          </thead>
          <tbody>
            {props.selectedDetailsbyID ? (
              Object.entries(props.selectedDetailsbyID).map(([key, value]) => {
                return (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>
                      {key === 'address'
                        ? getAddressAsString(value)
                        : key === 'company'
                        ? getCompanyAsString(value)
                        : typeof value === 'object'
                        ? JSON.stringify(value)
                        : value}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="2">No user details available.</td>
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

function ModalsPart3(props) {
  const { searchUserId } = props;

  // // Check if searchUserId is less than or equal to 0 or greater than the length of users
  // const isInvalidSearch = searchUserId <= 0 || searchUserId > users.length;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{ color: 'black', textAlign: 'center' }}>
          User Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 style={{ color: 'black', textAlign: 'center' }}>
          DETAIL INFORMASI DENGAN SEARCH BY ID
        </h3>
        <br></br>
        <Table
          striped
          bordered
          hover
          variant="dark"
          style={{ background: 'lightgray' }}
        >
          <tbody>
                <tr>
                  <td colSpan="2" style={{ textAlign: 'center' }}>ID {searchUserId} is not available.</td>
                </tr>
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
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);
  const [selectedUD_2,   setSelectedUD_2  ] = useState(null);

  const [showAlert, setShowAlert] = useState(false);
  const [showAllData, setShowAllData] = useState(false);
  const [searchUserId, setSearchUserId] = useState(0); // State untuk menyimpan ID pencarian
  const [showSearchInput, setShowSearchInput] = useState(false); // State untuk menampilkan/hide input pencarian
  const [showSearchModal, setShowSearchModal] = useState(false); // State untuk menampilkan/hide modal pencarian


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

  const displayedUsers = showAllData ? users : users.slice(0, 5);
  
  
  const handleSearchById = () => {
  // Check if searchUserId is less than or equal to 0 or greater than the length of users
  if (searchUserId <= 0 || searchUserId > users.length) {
    // Show a modal with a specific message
    setSelectedUserDetails(null); // Clear any existing user details
    setModalShow3(true);
    setShowAlert(true);
    return;
  }

    // Fetch user details when the button is clicked
    fetch(`https://jsonplaceholder.typicode.com/users/${searchUserId}`)
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse the JSON response
        } else {
          throw new Error('User not found');
        }
      })
      .then((data) => {
        setSelectedUserDetails(data);
        setModalShow(true);
        setShowAlert(false); // Sembunyikan alert jika sebelumnya muncul

      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
        // Tampilkan alert atau pesan error sesuai kebutuhan
        setShowAlert(true);
      });
  };

  const handleSearchModal = () => {
    setShowSearchModal(true);
  };
  const handleCloseSearchModal = () => {
    setShowSearchModal(false);
  };


  return (
    <section className="banner" id="home">
      <Container>
        <Col>
          <Row size={6} sm={6} md={6} className="d-flex justify-content-end">
            <Button
              size="sm"
              variant="success"
              className="mr-2"
              onClick={() => setShowAllData(!showAllData)}
            >
              {showAllData ? 'Show 5 Data' : 'Show All Data'}
            </Button>

            <Button
              size="sm"
              variant="success"
              onClick={handleSearchModal} // Menampilkan modal pencarian
            >
              SEARCH BY ID
            </Button>
            {showSearchInput && (
              <Col xs={4} sm={4} md={2} className="mr-2">
                <input
                  type="number"
                  placeholder="Enter User ID"
                  value={searchUserId}
                  onChange={(e) => setSearchUserId(e.target.value)}
                />
              </Col>
            )}
            {showSearchInput && (
              <Button
                size="sm"
                variant="success"
                onClick={handleSearchById}
              >
                SEARCH
              </Button>
            )}
          </Row>
        </Col>
        <br />

        <Col id="layar">
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Table
                striped
                bordered
                hover
                variant="dark"
                style={{ background: 'lightgray' }}
              >
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
                    displayedUsers.map((user, index) => (
                      <tr key={user.id}>
                        <td style={{ textAlign: 'center' }}>{index + 1}</td>
                        <td style={{ textAlign: 'left' }}>{user.name}</td>
                        <td style={{ textAlign: 'left' }}>{user.email}</td>
                        <td style={{ textAlign: 'left' }}>{user.website}</td>
                        <td
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0px 80',
                          }}
                        >
                          <Button
                            size="sm"
                            variant="success"
                            onClick={() => {
                              setSelectedUserId(user.id);

                              // Fetch user details when the button is clicked
                              fetch(
                                `https://jsonplaceholder.typicode.com/users/${user.id}`
                              )
                                .then((response) => {
                                  if (response.ok) {
                                    return response.json(); // Parse the JSON response
                                  } else {
                                    throw new Error(
                                      'Network response was not ok'
                                    );
                                  }
                                })
                                .then((data) => {
                                  setSelectedUserDetails(data);
                                  setModalShow(true);
                                })
                                .catch((error) =>
                                  console.error(
                                    'Error fetching user details:',
                                    error
                                  )
                                );
                            }}
                          >
                            Detail
                          </Button>
                          <MyVerticallyCenteredModal
                            users={users}
                            userId={selectedUserId}
                            selectedUserDetails={selectedUserDetails}
                            show={modalShow}
                            onHide={() => {
                              setModalShow(false);
                              setShowSearchInput(false); // Menyembunyikan input setelah menutup modal
                            }}
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
        <Modal show={showSearchModal} onHide={handleCloseSearchModal} centered>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: 'black', textAlign: 'center' }}>Search By ID</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label style={{ color: 'black'}}>Enter User ID:</label>
            <input
              type="number"
              placeholder="Enter User ID"
              style={{ textAlign: 'center' }}
              value={searchUserId}
              onChange={(e) => setSearchUserId(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseSearchModal}>
              Close
            </Button>
            <Button variant="primary"  onClick={() => {

            // Fetch user details when the button is clicked
            fetch(
              `https://jsonplaceholder.typicode.com/users/${searchUserId}`
            )
              .then((response) => {
                if (response.ok) {
                  return response.json(); // Parse the JSON response
                } else {
                  setModalShow3(true);
                  throw new Error(
                    'Network response was not ok'
                  );
                }
              })
              .then((data) => {
                setSelectedUD_2(data);
                setModalShow2(true);
              })
              .catch((error) =>
                console.error(
                  'Error fetching user details:',
                  error
                )
              );
            }}>                  
              Search
            </Button>
          </Modal.Footer>
          {/* Conditionally render ModalsPart2 */}
          {selectedUD_2 && (
            <ModalsPart2
              users={users}
              // userId={selectedUserId}
              selectedDetailsbyID={selectedUD_2}
              show={modalShow2}
              onHide={() => {
                setModalShow2(false);
                setShowSearchInput(false); // Menyembunyikan input setelah menutup modal
              }}
            />
          )}
        </Modal>
        <ModalsPart3
              searchUserId={searchUserId}
              show={modalShow3}
              onHide={() => {
                setModalShow3(false);
                setShowSearchInput(false); // Menyembunyikan input setelah menutup modal
              }}
            />
      </Container>
    </section>
  );
};

