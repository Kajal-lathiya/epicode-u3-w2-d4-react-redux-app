import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";

const Favourites = () => {
  const array = useSelector((state) => state.favorite.favorite.content);
  return (
      <Container>
        <h1>Favorite Jobs</h1>
      <Row>
        <Col>
          {array.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default Favourites;
