import { useState } from "react";
import { Container, Row, Col, Form, Navbar, Nav } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction } from "../redux/action";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  const redux = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const jobs = redux.jobs;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsAction(query));
  };

  return (
    <>
       <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Remote Jobs Search</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href='/favourites'>Favourites</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    <Container>   
      <Row>
        <Col xs={10} className="mx-auto my-3">
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
      </Container>
    </>
  );
};

export default MainSearch;
