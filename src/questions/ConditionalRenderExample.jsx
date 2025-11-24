// questions/ConditionalRenderingExample.jsx
import React, { useEffect, useState } from "react";
//useState: to create and manage state.
//useEffect: to run side effects (like fetching data when the component mounts).
export default function ConditionalRenderingExample() {
  const [data, setData] = useState(null);//data will hold the response from the API.Starts as null, meaning no data yet.
  const [isLoading, setIsLoading] = useState(true);// Boolean flag to show "Loading..." while data is being fetched.Starts as true because we begin in a loading state.
  const [error, setError] = useState(null);//Holds any error message if fetch fails.Starts as null, meaning no error yet.
//try-ctach-finally is proper error handling.


  const fetchData = async () => {//A function that fetches data from an API asynchronously[means it can pause ]
  // .we make this function asyncs because we're working with data from an API, which takes time to arrive — and we don’t want to freeze the whole app while waiting for it.
    setIsLoading(true);//When we call fetchData, we show the loading state.
    setError(null);//Clears any previous error before making a new fetch request.
    try {// await keyword pauses execution until the response arrives from the server.
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");// Sends a GET request to a fake API.await waits for the response to come back.
      if (!response.ok) {//If the response status is not 200–299(refers to ok means succesful response), we throw a manual error.
        throw new Error("Fetch failed");//manually throwing error to cath beacuse fetch() onlyythrows eror like network problem
      }
      const result = await response.json();// If the response was successful (ok === true), this line parses the JSON body of the response.
     //await waits for the parsing to complete.
      //result now holds the actual data sent by the API in JavaScript object form.
      setData(result);//new  fetched data 
    } catch (err) {// If any error happens in try block, this catch block runs and sets an error message.
      setError("Failed to fetch data. Please try again.");//error handling 
    } finally {
      setIsLoading(false);//Whether it succeeds or fails, we always end the loading state.
    }
  };

//used in all api calls
  useEffect(() => {//Runs only once (because of []) when the component first mounts.
    fetchData();//Calls fetchData() to start the fetch.
  }, []);

  if (isLoading) return <div>Loading...</div>;//If data is being fetched, show a loading message.//1-use of conditional rendering in this line.

  // If there was an error, show the error message and a retry button
  if (error)//2nd-use of conditional rendering in this line.
    return (
      <div>
        <p className="text-red-500">{error}</p>
        <button onClick={fetchData} className="bg-blue-500 text-white px-4 py-2 rounded mt-2"> {/*Button re-calls fetchData() when clicked. */}
          Try Again
        </button>
      </div>
    );

    
// If there's no loading or error so return will execute and Show the fetched data.JSON.stringify(data, null, 2) prettifies the object.
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">Fetched Data</h2>
      <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(data, null, 2)}</pre> {/*3rd-use of conditional rendering in this line.*/}
    </div>
  );
}
