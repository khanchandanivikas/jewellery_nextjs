import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, db } from "../config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import Button from "./Button";

const FacebookLogin = () => {
  const handleSubmit = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      console.log(response.user);
      await setDoc(doc(db, "users", response.user.uid), {
        uid: response.user.uid,
        name: response.user.displayName,
        email: response.user.email,
        auth: "facebook"
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>
        Continue with <Button onClick={handleSubmit} text="Google" />
      </p>
      <p>Or</p>
    </div>
  );
};

export default FacebookLogin;
