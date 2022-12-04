import React, { useEffect, useState } from "react";

const TableData = () => {
  const [tableItem, setTableItem] = useState([]);

  useEffect(() => {
    fetch("https://test.nexisltd.com/test", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTableItem(data));
  }, []);

  return <div>I didn't find the access token, so couldn't finish this.</div>;
};

export default TableData;
