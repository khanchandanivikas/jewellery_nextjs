import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, db } from "../config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { addUser } from "../store/reducers/authReducers";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import Button from "./Button";

const FacebookLogin = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      await setDoc(doc(db, "users", response.user.uid), {
        uid: response.user.uid,
        name: response.user.displayName,
        email: response.user.email,
        auth: "facebook",
      });
      dispatch(
        addUser({
          id: response.user.uid,
          name: response.user.displayName,
          email: response.user.email,
          token: response.user.accessToken,
        })
      );
      router.push("/");
      toast.success("Authentication successful");
    } catch (error) {
      console.log(error);
      toast.error("Authentication error. Please check the datas");
    }
  };

  return (
    <div>
      <p>
        Continue with: <Button onClick={handleSubmit} text="Google" />
      </p>
      <p>Or</p>
      <Toaster />
    </div>
  );
};

export default FacebookLogin;
