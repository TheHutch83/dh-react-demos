import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const { country } = useParams();

  if (country === "en") {
    return <p>Please call 019120304040</p>;
  }

  if (country === "usa") {
    return <p>Please call 555 123 1456</p>;
  }

  return <div>Contact page</div>;
};

export default Contact;
