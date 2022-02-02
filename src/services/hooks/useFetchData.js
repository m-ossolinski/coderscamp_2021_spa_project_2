import { useState, useEffect } from "react";

export const useFetchData = (getAPI, messageError) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await getAPI();
      return res;
    } catch (err) {
      throw new Error(messageError);
    }
  };

  useEffect(async () => {
    const data = await getData();
    setData(data);
  }, []);

  return [data];
};
