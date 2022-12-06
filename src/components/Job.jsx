import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoriteAction } from './../redux/action';

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const array = useSelector((state) => state.favorite.content);

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1}>
        <Button
          className="mb-1"
          onClick={() => {
            dispatch(addToFavoriteAction(data));
          }}
        >
          <FaHeart />
        </Button>
        <Button
          onClick={() => {
            dispatch({
              type: "REMOVE_FROM_FAVORITE",
              payload: data._id
            });
          }}
        >
          <FaRegHeart />
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
