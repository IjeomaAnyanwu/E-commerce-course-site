import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import loadingGIF from "../../images/loading.gif";

export default function Loading({path = 'login'}) {
  //state
  const [count, setCount] = useState(3);

  //hooks
  const navigate = useNavigate();
  const location = useLocation()



  useEffect(() => {
    const Interval = setInterval(() => {
      setCount((curr) => --curr);
    }, 1000);

    // redirect once count is equal to 0

    count === 0 && navigate(`/${path}`, {
      state: location.pathname
    });
    //cleanup

    return () => clearInterval(Interval);
  }, [count]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <img src={loadingGIF} alt="loading" style={{ width: "300px" }} />
    </div>
  );
}
