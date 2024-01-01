const AboutMe = () => {
  return (
    <section className="mt-8 shadow-lg bg-black bg-opacity-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center w-full p-4 space-y-4 rounded-md lg:h-full lg:p-8    text-gray-100">
          <h1 className="text-3xl lg:text-6xl mb-5 pl-6 underline">About Me</h1>
          <img
            src="https://i.ibb.co/ch9MY6M/4480087.jpg"
            alt=""
            className="w-20 h-20 rounded-full  bg-gray-500"
          />
          <h1 className="text-2xl lg:text-4xl mb-5 pl-6">
            <span className="text-orange-500">Al Mamun Talukder</span>
          </h1>
          <blockquote className="max-w-lg text-lg italic font-medium text-center">
            &quot;MERN Stack Web Developer&quot;
          </blockquote>
          <p className="text-justify lg:p-5">
            I am a mern stack web developer with a vast array of knowledge in
            front-end languages, responsive frameworks, databases and best code
            practices. I have Knowledge of efficiently coding websites and
            applications using modern JavaScript, React.JS, Express.js, Node.js,
            MongoDB, HTML, CSS, Bootstrap, jQuery etc. In addition to my
            knowledge base, I actively seek out new technologies and stay
            up-to-date on industry trends and advancements. Besides these, I am
            a little bit knowledge about laravel, sql data, c#. I am motivated
            and versatile individual, always eager to take on new challenges.
            With a passion for learning I am dedicated to delivering
            high-quality results. With a positive attitude and a growth mindset,
            I am ready to make a meaningful contribution and achieve great
            things.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
