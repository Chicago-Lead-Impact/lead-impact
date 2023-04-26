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

export default function App() {
  return (
    <div className="App">
      <Box>
        <h1>
          Impacts of Lead in Chicago Neighborhoods
        </h1>
        <div className="text">
          Using data science to learn more about how lead impacts Chicago communities in 2021.
        </div>
        <div className="down-arrow"></div>
      </Box>
      <Box>
        <h2>
          Lead is contaminating Chicago homes, and hurting families.
        </h2>
        <div className="text">
          In 2014, the Flint Michigan water crisis gained national attention due to the high levels of lead found in the drinking water, and visibly contaminated water coming out of the taps. The nationally recognized crisis initiated a push for water testing, and led to blood testing in high risk communities.
        </div>
        <div className="text">
          Chicago&apos;s historically required lead pipes to connect homes to the city&apos;s water system up until 1986, which was decades after most cities had banned them due to lead&apos;s severe toxicity and developmental concerns.
        </div>
        <div className="text">
          Lead drinking water can contribute <span className="highlight-text">40 to 60 percent</span> of an infant&apos;s lead exposure. Lead exposure has been linked to lower IQ levels, behavioral disorders, and violence in adulthood. Examining the current impacts of lead on communities in Chicago is important to understanding resource distribution in the city, and seeing
        </div>
        <div className="text"></div>
        <h2>
          About the data
        </h2>
        <div className="text">
          We gathered our data from the Chicago Health Atlas. We are interested in data regarding children ages 1 to 5 years old with a blood lead level greater than 6 μg/dL. Lead exposure primarily comes from lead paint, but also drinking water.
        </div>
        <div className="text">
          It is important to remember that <span className="highlight-text">there is no acceptable level of lead in the blood</span>, but due to changes in reporting standards overtime, we are only reporting blood lead levels greater than 6 μg/dL.
        </div>
      </Box>
      <Box>
        <h2>
          Lead levels in most and least impacted communities over time.
        </h2>
        <div className="row-graphs">
          <InnerHTML html={graphs.graph_top10communities}></InnerHTML>
          <InnerHTML html={graphs.graph_low10communities}></InnerHTML>
        </div>
      </Box>
      <Box>
        <h2>
          Communities with less resources are more likely to feel the impacts of lead poisoning.
        </h2>
        <div className="text">
          As lead levels rise, preschool enrollment rates drop.
          This says that the distribution of resources in these communities are unequal.
          Children are not getting the same opportunities and are at higher risk in these areas.
        </div>
      </Box>
      <Box>
        <div className="text">
          The lead crisis in Chicago is real, and not just an infrastructure problem, but instead a social and health crisis. The impacts of lead on the populations of Chicago will have repercussions for years to come.
        </div>
      </Box>
    </div>
  );
}