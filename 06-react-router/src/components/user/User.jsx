import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="bg-orange-700 text-white p-3 text-3xl">
      User : {userId}{" "}
    </div>
  );
}

export default User;
