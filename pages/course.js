import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  createContext,
  useContext,
  lazy,
  Suspense,
} from "react";
import Head from "next/head";
import Banner from "../components/CoursePage/Banner/Banner";
import NavBarMain from "../components/NavBarMain/NavBarMain";
import Ratings from "../components/CoursePage/Ratings/Ratings";
import Instructor from "../components/CoursePage/Instructor/Instructor";
import NavCourse from "../components/CoursePage/NavCourse/NavCourse";
import Curriculam from "../components/CoursePage/Curriculam/Curriculam";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import toggleContext from "../context/context";

function course() {
  const { width } = useWindowSize();
  const [showMenu, setshowMenu] = useState(false);
  const value = { showMenu, setshowMenu };

  // const content = useContext(toggleContext);

  const handleOnClose = () => {
    setshowMenu(false);
    // console.log("rohit");
  };

  return (
    <div>
      <Head>
        <title>
          Online Certification Training | Corporate Training - Mindmajix
        </title>
        <link rel="icon" href="/images/fav.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <BurgerMenu
        right
        isOpen={showMenu}
        onClose={handleOnClose}
        outerContainerId={"body-container"}
      />

      <div style={{ width: "100%" }}>
        <toggleContext.Provider value={value}>
          <NavBarMain />
        </toggleContext.Provider>
        <Banner />
        <Ratings />
        <Instructor />
        <NavCourse />
        <Curriculam />
        <ContactForm />
        <Footer />
      </div>

      {/* <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.js</code>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={styles.card}
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h3>Deploy &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
    </main> */}

      {/* <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </a>
    </footer> */}
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default course;
