/** @format */

import { useContext } from "react";
import UserContextAp from "../Contexts/UserContext";

function Profile() {
  const { user } = useContext(UserContextAp);

  if (!user) return <div>Please Login ❌</div>;
  return <div>Welcome {user} to the Profile page ✔️</div>;
}

export default Profile;
