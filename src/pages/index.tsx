import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.6,} },
  hidden: { opacity: 0, scale: 0.9},
};

const Box = ({ children }: any) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariants}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Box>
        <h1>
          Impacts of Lead in Chicago Neighborhoods
        </h1>
        <div className="links">
          <a href="">learn</a>
          <a href="">explore</a>
          <a href="">advocate</a>
        </div>
      </Box>
      <Box>
        <h2>
          Important Data and Important Text
        </h2>
        <div className="text">
          When we have a lot of text, and a lot of data, we want to let it shine. This screen demonstrates what that may look like. Here is an interactive graph that we want users to focus on, with a lot of text.
        </div>
      </Box>
      <Box>
        <h2>
          Big Comparisons make a Big Difference
        </h2>
        <div className="text">
          A smaller piece of text, and a lot more graphs to view and interact with make a big difference.
        </div>
      </Box>
      <Box>
        <h2>
          Here is a short blurb of text.
        </h2>
        <div className="text">
          Geographical data is very important to this topic. We can make a big impact by helping people visualize the communities impacted. An interactive aspect to this is important, and integral to understanding the problem at hand.
        </div>
      </Box>
      <Box>
        <div className="text">
          We will wrap up with some important message about advocacy and the impacts of our research. We will direct users to next steps right away.
        </div>
      </Box>
    </div>
  );
}