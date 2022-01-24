import { motion } from "framer-motion";

type SwapAnimationWrapperProps = {
    key: string;
}

export const SwapAnimationWrapper: React.FC<SwapAnimationWrapperProps> = ({ children, key }) => {
  return (
    <motion.div
      key={key}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      {children}
    </motion.div>
  );
};


export const ShowAnimationWrapper: React.FC<SwapAnimationWrapperProps> = ({ children, key }) => {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
