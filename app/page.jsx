import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center dark:text-white">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="gray_gradient"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center dark:text-[#ededed]">
        Promtopia is an open-source AI Prompting tool for modern world to discover, create and share creative prompts 
      </p>

      <Feed />
    </section>
  );
};

export default Home;
