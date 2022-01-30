export const getStaticProps = async () => {
  const res = await fetch("https://www.zesty.io/-/gql/platform_section.json");
  const faqs = await res.json();

  return {
    props: {
      faqs,
    },
  };
};

export default function AboutList({ props }) {
  return (
    <div>
      <p>My About Lis</p>
    </div>
  );
}
