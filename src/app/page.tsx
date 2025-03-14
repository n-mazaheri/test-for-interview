"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function getObjects() {
      try {
        setLoading(true);
        setError(null);
        setData(null);
        let temp = await axios.get("https://api.restful-api.dev/objects");
        setData(temp.data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    }
    getObjects();
  }, []);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {data && data.map((item: any) => <div key={item.id}>{item.name}</div>)}
      {error && <div>There is an error getting data from api</div>}
    </div>
  );
}
