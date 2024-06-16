import { FaGithub, FaMoon, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoLanguageOutline } from "react-icons/io5";
import { MdEmail } from 'react-icons/md';



function App() {
  return (
    <>
      <header className="bg-black">
        <nav className="flex justify-around items-center py-9">
          <div className="text-neutral-400 text-xl items-center">
            <a href="#">
              <IoLanguageOutline className="w-8 h-8 hover:text-white" />
            </a>
          </div>
          <div className="text-neutral-400 flex gap-5 text-xl">
            <a
              className="hover:text-white border-b-4 border-transparent hover:border-blue-800 duration-300 transition-colors"
              href=""
            >
              About
            </a>
            <a
              className="hover:text-white border-b-4 border-transparent hover:border-blue-800 duration-300 transition-colors"
              href=""
            >
              Projects
            </a>
            <a
              className="hover:text-white border-b-4 border-transparent hover:border-blue-800 duration-300 transition-colors"
              href=""
            >
              Resume
            </a>
            <a
              className="hover:text-white border-b-4 border-transparent hover:border-blue-800 duration-300 transition-colors"
              href=""
            >
              Contact
            </a>
          </div>

          <div className="text-neutral-400 text-xl flex items-center gap-3">
            <a href="">
              <FaGithub className="w-7 h-7 hover:text-white" />
            </a>
            <a href="">
              <FaMoon className="w-6 h-6 hover:text-white" />
            </a>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2  justify-items-center mx-20 py-10">
          <div className="my-10">
            <h1 className="text-white font-bold text-6xl">
              Front End & <br />{" "}
              <span className="text-blue-800"> UX/UI Developer </span>
            </h1>
            <div className="h-1 w-44 bg-blue-800 my-4"></div>
            <p className="text-neutral-400 font-semibold text-lg">
              Hi, my name is Jhonatan Espinosa, based in Mexico City. <br />{" "}
              Welcome to my Portafolio.
            </p>
            <div className="mt-14">
              <a
                href="#"
                className="bg-blue-800 text-white px-7 py-2 text-xl rounded-lg hover:bg-blue-900"
              >
                About Me
              </a>
            </div>

            <div className="text-white my-16 flex gap-6 items-center">
              <a href="" className="border-b-4 border-transparent hover:border-blue-800 duration-300 transition-colors my-0">
              <FaLinkedin className="w-6 h-6 my-11"/>
              </a>
              <a href="" className="border-b-4 border-transparent hover:border-blue-800 duration-300 transition-colors my-0">
              <FaInstagram className="w-6 h-6 my-11"/>
              </a>
              <a href="" className="border-b-4 border-transparent hover:border-blue-800 duration-300 transition-colors my-0">
              <FaWhatsapp className="w-6 h-6 my-11"/>
              </a>
              <a href="" className="border-b-4 border-transparent hover:border-blue-800 duration-300 transition-colors my-0">
              <MdEmail className="w-6 h-6 my-11"/>
              </a>
              <div className="h-[0.5px] w-8 bg-white my-4"></div>
              <p className="uppercase text-xl my-11 w-">Share</p>
            </div>
          </div>


          <div className="relative">
            <div>
              <div className="blob">
                <img
                  className="absolute top-0 left-auto transform -translate-x-1/2 w-60 h-60 animate-spin-slow"
                  src="../Remove-bg.ai_1718508847540.png"
                  alt="world"
                />
              </div>
            </div>
          </div>


        </div>
















      </header>
    </>
  );
}

export default App;
