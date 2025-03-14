"use client";
import axios from "axios";
import { useState } from "react";
export default function Test() {
  const [data, setData] = useState({name:"", email:""});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  async function sendData() {
    setLoading(true);
    setError(null);
    try {
      const temp = await axios.post("http://interview-test-backend-production.up.railway.app/api/users", data);
      console.log(temp.data);
      setLoading(false);
    } catch (e) {
      setError("error");
      console.log(e);
      setLoading(false);
    }
  }

  return (
    <div>
      <div>
        <span>Name:</span>
        <input
          type="text"
          className="border border-black rounded p-2"
          onChange={(e) => {
            setData({...data,name:e.target.value});
          }}
          value={data.name ?? ""}
        />
      </div>
      <div>
        <span>Email:</span>
        <input
          type="email"
          className="border border-black rounded p-2"
          onChange={(e) => {
            setData({...data,email:e.target.value});
          }}
          value={data.email ?? ""}
        />
      </div>
      <div>
        <button className="border border-black text-black rounded p-2" onClick={sendData}>
          {loading? "..." :"Add User"}
        </button>
      </div>
      {error && <div className="text-color-red">There is error adding user</div>}
    </div>
  );
}
