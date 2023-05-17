import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share Prompts, Daily
      <br className="max-md:hidden" />
      <span className="blue_gradient text-center">
        {" "}
        To boost your productivity
      </span>
    </h1>
    <p className="desc text-center">
      Promptify is an AI prompting platform for the modern world that allows
      users to explore, create, and share creative ideas.
    </p>

    <Feed />
  </section>
);

export default Home;
