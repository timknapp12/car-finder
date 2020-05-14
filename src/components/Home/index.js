import React, { useEffect, useState } from "react";
// import axios from "axios";

const Home = ({ children }) => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const getListings = async () => {
      try {
        const response = await fetch("/api/listings", { method: "GET" });
        const results = response.ok ? await response.json() : [];
        return setListings(results);
      } catch (err) {
        console.log(err);
      }
    };
    getListings();
    return () => {
      setListings([]);
    };
  }, []);
  console.log("listings", listings);
  return <div>{children}</div>;
};

export default Home;
