import User from "../../../../server/models/user.model";
import { useAuth0 } from "@auth0/auth0-react";

const saveUser = async (user) => {
    const { Workinguser, isAuthenticated } = useAuth0();
    const email = Workinguser.email;
    return await new Promise(async (resolve, reject) => {
      if (err) {
        reject(err);
      } else {
        newUser = new User({
            email
        })
        resolve(RecipeExchange.insert(newUser));
      }
    });
  };

  export default {saveUser};