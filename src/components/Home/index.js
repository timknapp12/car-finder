import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 4rem;
  flex-direction: column;
  background: ${(props) => props.theme.mainBackground};
  height: 100vh;
`;

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
  return <Wrapper>{children}</Wrapper>;
};

export default Home;
