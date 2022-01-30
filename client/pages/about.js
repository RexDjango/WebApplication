import styles from "../styles/About.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://www.zesty.io/-/gql/about.json");
  const data = await res.json();

  return {
    props: {
      content: data,
    },
  };
};

export default function about({ content }) {
  return (
    <>
      {content.map((aboutItem, index) => (
        <main className={styles.aboutBg} key={index}>
          <div
            className={styles.Banner}
            style={{ backgroundImage: `url(${aboutItem.hero_image})` }}
          >
            <div className={styles.pageTitle}>
              <h1 className="text-center">{aboutItem.title}</h1>
              <p></p>
              <h4
                className="text-center"
                dangerouslySetInnerHTML={{ __html: aboutItem.hero_content }}
              ></h4>
            </div>
          </div>
          <div className="container myaboutpageContent">
            <div
              dangerouslySetInnerHTML={{ __html: aboutItem.page_content }}
            ></div>
          </div>
        </main>
      ))}
    </>
  );
}
