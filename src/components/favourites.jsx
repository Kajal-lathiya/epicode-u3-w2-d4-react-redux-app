import { useSelector } from "react-redux";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import Job from "./Job";

const Favourites = () => {
  const array = useSelector((state) => state.favorite.content);
  console.log('state.favorite-->', array);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Remote Jobs Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favourites">Favourites</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="mt-2">
        <h1>Favorite Jobs</h1>
        <Row>
          <Col>
            {array.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Favourites;
