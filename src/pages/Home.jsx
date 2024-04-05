import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div >
      
      <ul>
        <li>
          <Link to="/homepage">HomePage</Link>
        </li>
        <li>
          <Link to="/mensection">MenSection</Link>
        </li>
        <li>
          <Link to="/productview">Productview</Link>
        </li>
        <li>
          <Link to="/whishlist">Whishlist</Link>
        </li>
        <li>
          <Link to="/cartlist">Cartlist</Link>
        </li>
        <li>
          <Link to="/chakoutsection">Chakoutsection</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
