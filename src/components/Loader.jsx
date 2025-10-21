import Lottie from "lottie-react";
import animationData from "../lottie/Loader.json"

export default function Loader() {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className="bg-black h-screen "
    />
  );
}
