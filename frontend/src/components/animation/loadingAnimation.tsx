import Lottie from "lottie-react";
import assets from "@/assets/assetsManager";

const LoadingAnimation = () => {
  return (
    <div>
      <Lottie animationData={assets.animation.LoadingAnimation} />;
    </div>
  );
};

export default LoadingAnimation;
