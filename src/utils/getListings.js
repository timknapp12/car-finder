import axios from "axios";

const getListings = async () => {
  try {
    const response = await axios.get("/api/listings");
    const results = await response.json();
    return results;
  } catch (err) {
    console.log("there was an error:", err);
  }
};

export default getListings;
