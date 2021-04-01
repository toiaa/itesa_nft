import React, { useEffect } from "react";
//React-router-dom
import { Route, Switch } from "react-router-dom";
//Components
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import NavBar from "./NavBar";
import Creators from "./Creators";
import Artwork from "./Artwork";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import NewArtwork from "./NewArtwork";
import ResetPassword from "./ResetPassword";
import ResetPasswordConfirmation from "./ResetPasswordConfirmation";
//utils
import { AuthFunctions } from "../utils/firebase/authEmail";
import { useRecoilValue } from "recoil";
import { userAtom } from "../state/atoms";

const App = () => {
  const { isUser } = AuthFunctions();
  const user = useRecoilValue(userAtom);

  useEffect(() => isUser(), []);

  useEffect(() => {
    console.log("test");
  }, [user]);

  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/login"} component={Login} />
        <Route path={"/register"} component={Register} />
        <Route exact path={"/creators"} component={Creators} />
        <Route
          path={"/creators/:id"}
          render={({ match }) => <Profile match={match} />}
        />
        <Route path={"/artwork/create"} component={NewArtwork} />
        <Route
          path={"/artwork/:id"}
          render={({ match }) => <Artwork id={match.params.id} />}
        />
        <Route exact path={"/me"} component={Profile} />
        <Route exact path={"/me/edit"} component={EditProfile} />
        <Route exact path={"/reset"} component={ResetPassword} />
        <Route exact path={"/reset/confirmation"} component={ResetPasswordConfirmation} />
      </Switch>
      <NavBar />
    </div>
  );
};

export default App;
