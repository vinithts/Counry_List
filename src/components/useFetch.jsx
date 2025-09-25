import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = ({ data, loading, error }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios(url);
        setData(response.data);
      } catch (error) {
        setError(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
