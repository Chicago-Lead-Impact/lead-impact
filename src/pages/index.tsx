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
        Lead is hurting Chicago.
        </h2>
        <div className="text">
        In 2014, the Flint Michigan water crisis gained national attention due to the high levels of lead found in the drinking water, and visibly contaminated water coming out of the taps. The nationally recognized crisis initiated a push for water testing, and led to blood testing in high risk communities.
Chicago's historically required lead pipes to connect homes to the city's water system up until 1986, which was decades after most cities had banned them due to lead's severe toxicity and developmental concerns.
Lead drinking water can contribute 40 to 60 percent of an infant's lead exposure. Lead exposure has been linked to lower IQ levels, behavioral disorders, and violence in adulthood. Examining the current impacts of lead on communities in Chicago is important to understanding resource distribution in the city, and seeing 
        </div>
      </Box>
      <Box>
        <h2>
        Lead Testing & Our Data
        </h2>
        <div className="text">
        There is no acceptable level of lead in the blood.

We are primarily interested in data regarding children ages 1 to 5 years old with a blood lead level greater than 6 μg/dL. Lead exposure primarily comes from lead paint, but also drinking water.

        </div>
      </Box>
      <Box>
        <h2>
        Impacted Communities
        </h2>
        <div className="text">
        This heat map demonstrates the number of cases per community. The southwest communities, West Englewood and Englewood have the highest percentage cases of lead poisoning within children under the age of 6. 
        {/* <InnerHTML html={graphs.graph_allcommunities}></InnerHTML> */}
        {/* <InnerHTML html={graphs.graph_allcommunities}></InnerHTML> */}
        {/* <InnerHTML html={graphs.graph_allcommunities}></InnerHTML> */}
        </div>
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