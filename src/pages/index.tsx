import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import InnerHTML from 'dangerously-set-html-content'

const graphs = (await import('../../public/graphs')).graphs

const boxVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.6, } },
  hidden: { opacity: 0, scale: 0.9 },
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


// const Graph1 = () => {
//   const data = [
//     { x: 0, y: 8 },
//     { x: 1, y: 5 },
//     { x: 2, y: 4 },
//     { x: 3, y: 9 },
//     { x: 4, y: 1 },
//     { x: 5, y: 7 },
//     { x: 6, y: 6 },
//     { x: 7, y: 3 },
//     { x: 8, y: 2 },
//     { x: 9, y: 0 }
//   ];
//   return (
//     <div className="graphs">
//       <XYPlot height={200} width={200}>
//         <VerticalBarSeries barWidth={1} data={data}/>
//       </XYPlot>
//       <XYPlot height={200} width={200}>
//         <LineSeries data={data} />
//       </XYPlot>
//       <XYPlot height={200} width={200}>
//         <MarkSeries data={data} />
//       </XYPlot>
//     </div>
//   );
// }

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
          <InnerHTML html={graphs.graph_allcommunities}></InnerHTML>
          <InnerHTML html={graphs.graph_top10communities}></InnerHTML>
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