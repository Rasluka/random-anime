import { changeTabTitle } from "../utils/changeTabTitle";

export default function AboutThis() {
  changeTabTitle("About Me");
  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 px-4 pt-4">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg hover:scale-110"
          src={process.env.PUBLIC_URL + "/me.jpeg"}
          alt="me"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Jorge Obando
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Full Stack Developer
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
            href="https://www.linkedin.com/in/jorge-obando-044a43142/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            <img
              src={process.env.PUBLIC_URL + "/linkedin.svg"}
              className="mr-2 -ml-1 w-5 h-5"
              alt="me"
            />
            Linkedin
          </a>
          <a
            href="https://github.com/Rasluka"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            <img
              src={process.env.PUBLIC_URL + "/github.svg"}
              className="mr-2 -ml-1 w-5 h-5"
              alt="me"
            />
            GitHub
          </a>
        </div>

        <div className="w-3/6">
          <p className="text-center text-lg my-3">About Me</p>

          <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
            Hello, my name is <span className="font-bold">Jorge Obando</span>, I
            am a 28 years old Web Developer from Nicaragua. I started doing code
            back in 2015 when I started studying Computer Engineering at{" "}
            <span className="font-bold">
              Universidad Politecnica de Nicaragua (now UNP)
            </span>{" "}
            where I started learning the basic of{" "}
            <span className="font-bold">Algorithms</span> and{" "}
            <span className="font-bold">Data Structures</span> and then I got to
            code on <span className="font-bold">C</span> and{" "}
            <span className="font-bold">Java</span> and I learned the basic of{" "}
            <span className="font-bold">SQL</span>.
          </p>

          <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
            I am currently working for a US company as a{" "}
            <span className="font-bold">Full Stack Developer</span> using
            <span className="font-bold"> React.js</span> ,{" "}
            <span className="font-bold"> Bootstrap 4/5</span>,{" "}
            <span className="font-bold"> .NET</span> and{" "}
            <span className="font-bold">MS SQL</span>. I'm in charge of creating
            new components, fixing bugs and creating responsive components for
            the bussines website. I also work on SQL and .NET to create procs,
            services and endpoints to be connected with the front-end.
          </p>

          <p className="font-light text-gray-500 dark:text-gray-400">
            I created this project using the next technologies:
          </p>

          <div className="flex items-center justify-center my-4">
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <img
                src={process.env.PUBLIC_URL + "/react.svg"}
                className="mx-5 w-10 h-10 hover:scale-110"
                alt="react-icon"
              />
            </a>

            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img
                src={process.env.PUBLIC_URL + "/tailwind-css.svg"}
                className="mx-5 w-15 h-10 hover:scale-110"
                alt="tailwind-icon"
              />
            </a>

            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/typescript.svg"}
                className="mx-5 w-10 h-10  hover:scale-110"
                alt="ts-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
