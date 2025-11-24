// GitHubUsers.jsx
import React, { useState, useEffect } from "react";
//useState lets you manage component-level state (like text input, loading, etc.).
//useEffect lets you run code on component mount or when a value changes (e.g., API calls).
export default function GitHubUsers() {
  const [query, setQuery] = useState("");//query holds the value typed by the user in the search box
  const [debouncedQuery, setDebouncedQuery] = useState("");//debouncedQuery is used to delay API requests until the user stops typing
  const [users, setUsers] = useState([]);//users will store the fetched GitHub user list from the API
  const [loading, setLoading] = useState(false);//loading tracks whether data is being fetched
  const [error, setError] = useState("");//error stores any error messages (e.g., if the API fails).

//think debouncedquery is api call
  //debounce; delay API call until 500ms after typing stops
  useEffect(() => {
    const timer = setTimeout(() => {
//After 500ms, debouncedQuery is updated with query.
      setDebouncedQuery(query);
    }, 500);
// If the user types again before 500ms, the previous timer is cleared
    return () => clearTimeout(timer);
  }, [query]);

  // Fetch GitHub users when debouncedQuery changes
  //This useEffect runs every time debouncedQuery changes
  //it shows if user has not typed anything or erase typed so dont make API CALL and clears the user list from previos search 
  useEffect(() => {
    if (!debouncedQuery) {//debouncedquery is empty means input box is empty
      setUsers([]);
      return;
    }
//fetchUsers function is used to call the GitHub API.
    const fetchUsers = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`https://api.github.com/search/users?q=${debouncedQuery}`);//Calls GitHub’s search users API using the value from debouncedQuery[input value]
        if (!res.ok) throw new Error("Failed to fetch GitHub users.");
        const data = await res.json();//Converts the response into JSON[human readable]
 //data.items is the array of users returned by GitHub
 //If data.items is defined and valid → setUsers(data.items)
// If data.items is undefined, null, or falsy → setUsers([]) (empty array)
 setUsers(data.items || []);
      } 

      catch (err) {
        setError(err.message);
      }  
      
      finally {
        setLoading(false);
      }
    };
//Calls the fetchUsers() function when debouncedQuery changes
    fetchUsers();
  }, [debouncedQuery]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">🔍 GitHub User Search</h2>
      <input
        type="text"
        placeholder="Type a username..."
        className="border px-4 py-2 rounded w-full mb-4"
        value={query}
        //onChange will run everytime you type so e.target.value is changing value whenenver we type
        onChange={(e) => setQuery(e.target.value)}
      />
{/*If loading is true, show a loading message */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {/*If not loading, no error, and no users found (but a search was made), display "No users found". */}
      {!loading && !error && users.length === 0 && debouncedQuery && <p>No users found.</p>}
{/*For each user Loops over the users array using map:
Shows their avatar image.
used key here because github api gives id to each user link.
Displays a clickable link to their GitHub profile. */}
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="flex items-center gap-4">
            <img src={user.avatar_url} alt={user.login} className="w-10 h-10 rounded-full" />
            <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-600 underline">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
//user.html_url is the GitHub profile link returned from the API.
//target="_blank Opens the link in a new browser tab instead of the current one."
//rel="noreferrer" to maintain security