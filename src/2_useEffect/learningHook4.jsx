import React, { useEffect, useState } from "react";

export default function Learning4_useEffect() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/users");
      const result = await response.json();
      console.log(result);
      setData(result.users);
    }

    fetchData();
  }, []); // Runs only once on mount

  return (
    <div>
      {data
        ? data.map((user) => <li key={user.id}>{user.firstName}</li>)
        : "Loading..."}
    </div>
  );
}
