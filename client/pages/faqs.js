import { useState } from "react";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://www.zesty.io/-/gql/platform_section.json?_limit=5"
  );
  const data = await res.json();

  return {
    props: {
      content: data,
    },
  };
};

export default function faqs({ content }) {
  const [myshow, setMyShow] = useState(0);

  const handleExpand = (e, index) => {
    e.preventDefault();
    setMyShow(index);
  };

  return (
    <main className="container myfaqs">
      <h1>FAQ'S</h1>
      <p>
        This guide creates a FAQ&nbsp;expand/collapse javascript question and
        answer set up&nbsp;whereby when another question is expanded&nbsp;the
        current open answer is&nbsp;collapsed. So only one is expanded at any
        point. In the example below click to see how it works.
      </p>
      <p>
        I have changed it to better work&nbsp;in the WordPress post editor
        &ndash; but can be used in any CMS or web application.
      </p>
      <h3>Example 1 &ndash; FAQs</h3>
      <p></p>
      {content.map((Item, index) => {
        return (
          index < 5 && (
            <div className="accordion" id="accordionExample" key={index}>
              <div className="accordion-item">
                <h2 className="accordion-header" id={"heading" + index}>
                  <button
                    className={
                      index == 0
                        ? "accordion-button collapsed"
                        : "accordion-button"
                    }
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse" + index}
                    aria-expanded={index == myshow ? true : false}
                    aria-controls={"collapse" + index}
                    onClick={(e) => handleExpand(e, index)}
                  >
                    {Item.title}
                  </button>
                </h2>
                <div
                  id={"collapse" + index}
                  className={
                    index == myshow
                      ? "accordion-collapse collapse show"
                      : "accordion-collapse collapse"
                  }
                  aria-labelledby={"heading" + index}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div
                      dangerouslySetInnerHTML={{ __html: Item.text_content }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )
        );
      })}
    </main>
  );
}
