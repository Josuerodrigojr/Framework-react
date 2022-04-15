import { Col } from "react-bootstrap";

export const CustomCol = ({ align, children }) => (
  <Col className={`justify-content-md-${align}`}>
    {children}
  </Col>
);
