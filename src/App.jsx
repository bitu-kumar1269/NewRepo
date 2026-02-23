import useUsers from "./hooks/useUsers";
import { Toaster } from "react-hot-toast";

export default function App() {
  const { users, isLoading } = useUsers();

  return (
    <div style={{ padding: 40 }}>
      <Toaster position="top-right" />

      <h1>Axios Instance Demo</h1>
      <h3>User List</h3>

      {isLoading ? (
        // <p>Loading users...</p>
        <ul>
        {[...Array(6)].map((_, index) => (
          <li
            key={index}
            className="skeleton"
            style={{
              height: 20,
              marginBottom: 12,
              borderRadius: 20
            }}
          ></li>
        ))}
      </ul>

      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}