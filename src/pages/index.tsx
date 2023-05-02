import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import InnerHTML from 'dangerously-set-html-content'
import Image from 'next/image'

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
        <h2>
          A Discussion on Testing
        </h2>
        <div className="text">
          Testing for lead exposure in Chicago has shown inconsistencies across different communities. A strong correlation was found between the testing rate and the rate of children with elevated lead levels. This suggests that some communities may be underreporting cases, while others might be overreporting. These discrepancies in testing can result in inaccurate data and an incomplete understanding of the true scope of the lead crisis in the city.
        </div>
        <div className="text">
          One possible explanation for over testing in certain communities could be a higher reliance on government healthcare programs, which often require children under the age of 5 to be tested for lead exposure. In contrast, other health insurance plans might not mandate such testing, leading to underreporting in communities with fewer individuals relying on government healthcare.
        </div>
        <div className="text">
          An ideal alternative to the current testing methodology would be random sampling within each community. This approach would ensure a more representative sample and help to identify the true prevalence of elevated lead levels in children across different communities. It would also provide a more accurate picture of the lead crisis in Chicago, which is crucial for designing effective interventions and allocating resources appropriately.
        </div>
        <div className="text">
          The Illinois Lead Program 2020 Annual Surveillance Report reveals that Black or African American children are disproportionately affected by lead exposure. Despite a low testing rate of 21%, they still accounted for 30% of the cases with blood lead levels (BLLs) greater than the testing rate. In comparison, other racial categories showed more consistency between testing rates and the percentage of children with elevated BLLs (EBLs) ≥ 5 µg/dL.
        </div>
        <div className="text">
          The report also highlights the disparity in lead exposure among different racial groups. For instance, 3.4% of the 36,721 Black or African American children tested had confirmed EBLs ≥ 5 µg/dL, while the percentages for White and Hispanic children were 2.9% and 1.9%, respectively.
        </div>
        <div className="text">
          Furthermore, the data shows a higher prevalence of elevated BLLs among Medicaid recipients compared to non-recipients. Approximately 65% of all children tested in 2020 were Medical Assistance Program recipients. Among them, 3.0% had lead levels ≥ 5 µg/dL, compared to 2.3% for non-recipients. In fact, 71% of all children with confirmed BLLs ≥ 5 µg/dL were enrolled in Medicaid, while only 29% were not.
        </div>
        <div className="text">
          The Illinois Department of Public Health (IDPH) designates areas of the state as high-risk or low-risk for lead exposure based on housing data and family economic status. Illinois law mandates blood lead testing for all children aged 6 or younger residing in high-risk areas, while children in low-risk areas are required to be evaluated for lead exposure. Notably, approximately 37% of Illinois children with EBLs ≥ 5 µg/dL reside in high-risk areas.
        </div>
        <div className="text">
          These findings emphasize the need for more equitable testing and intervention strategies to protect vulnerable populations from the harmful effects of lead exposure. Addressing these disparities is essential for ensuring the health and well-being of all children, regardless of their race or socioeconomic background.
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
          Communities at risk tend to be near one another.
        </h2>
        <div className="text">
          This heat map demonstrates the number of cases per community. The southwest communities, West Englewood and Englewood have the highest percentage cases of lead poisoning within children under the age of 6.
        </div>
        <div className="text">
          Overtime, testing habits and demographics have changed. These are important considerations.
        </div>
        <div className="heatmap-headers">
          <h2>2017</h2>
          <h2>2018</h2>
          <h2>2019</h2>
        </div>
        <div className="heatmap-graphs">
          <Image
            className="heatmap"
            src="/chicago3.png"
            width={383}
            height={450}
            alt="Heat Map Image"
          />
          <Image
            className="heatmap"
            src="/chicago2.png"
            width={383}
            height={450}
            alt="Heat Map Image"
          />
          <Image
            className="heatmap"
            src="/chicago1.png"
            width={383}
            height={450}
            alt="Heat Map Image"
          />
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
        <h2>Lead percent poisoning compared to hardship, life expectancy and average income per community</h2>
        <div className="text">
          The size of the dot on plot indicates the average income of the community
        </div>
        <div className="scatter-plots">
          <InnerHTML html={graphs.graph_hardship}></InnerHTML>
          <InnerHTML html={graphs.graph_life}></InnerHTML>
        </div>
      </Box>
      <Box>
        <div className="text">
          The lead crisis in Chicago is real, and not just an infrastructure problem, but instead a social and health crisis. The impacts of lead on the populations of Chicago will have repercussions for years to come.
        </div>
      </Box>
      <Box>
        <div>
          <h2>The Team</h2>
          <img src="team_pic.jpg" alt="Italian Trulli"
            width="650" 
            height="500"
            ></img>
        </div>
      </Box>
    </div>
    

  );
}