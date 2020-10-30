import User from "../models/user.model";
import { useAuth0 } from "@auth0/auth0-react";

const saveUser = async (user) => {
    const { user, isAuthenticated } = useAuth0();
    const email = user.email;
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

  export {saveUser};