import React from "react";
import { v4 as uuidv4 } from 'uuid';

export default function MovieData({ data }) {
  const keys = Object.keys(data);

  let rows = [];
  for (let i = 0; i < 15; i++) {
    let vals = Object.values(data[keys[i]]);
    rows.push(vals);
  }

  const transposedList = rows[0].map((_, colIndex) => {
    return rows.map((row) => row[colIndex]);
  });

  console.log(transposedList);

  return (
    <div className="table-responsive mt-5 mx-auto" style={{ width: "90%",margin:"2rem"}}>
      <h1 className="mb-5 text-center">Movie List</h1>
      <table className="table table-striped-columns">
        <thead>
          <tr>
            {
            keys.map((th) => (
              <th key={uuidv4()}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transposedList.map((r) => (
            <tr key={uuidv4()}>
              {r.map((td)=>(
                <td key={uuidv4()}>{td}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
