import React from "react";
import { useParams, useLocation, useSearchParams} from "react-router-dom";

const Users = () => {



  let [searchParams , setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get('price'));
  console.log(searchParams.get('sort'));

  const { fname, lname } = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="our">
        <br></br>
        <h1>
          Hello , {fname} - {lname} ! 👋
        </h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h3>Current Path is : {location.pathname}</h3>

       
      </div>
    </>
  );
};

export default Users;
