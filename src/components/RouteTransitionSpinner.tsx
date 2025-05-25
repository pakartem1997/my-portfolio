import { Spinner } from "react-bootstrap";

export const RouteTransitionSpinner = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Spinner animation="border" role="status"/>
    </div>
  );
};
