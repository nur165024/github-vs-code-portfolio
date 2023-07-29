const AboutPage = () => {
  return (
    <>
      <h3>I am a professional Full Stack web Application
        developer. I have been professionally working in this
        field for 1 year. During that year, I have worked with Javascript,
        ES6, React JS, Redux, NodeJs, Express Js, Mongodb, Mongoose, Rest API, NPM,
        Bootstrap 5, Tailwind CSS, CSS 3 HTML 5 & many
      more.At present, I want to improve myself as a developer by working in a progressive software company that provide sufficient scopes to enhance & utilize my existing skills.</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
