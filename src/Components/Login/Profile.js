import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthentificated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Logout... </div>;
  }

  return (
    isAuthentificated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>
          <b>E-mail </b>
          {user.email}
        </p>
      </div>
    )
  );
};
