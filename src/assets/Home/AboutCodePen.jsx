import React from "react";
import Sponsor1 from "../SPONSOR/Sponsor1";
 
function AboutCodePen() {
  return (
    <>
      <div className="mt-2 px-2 md:px-4 py-6 pb-12  mb-6 relative z-40">
        <svg
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.3"
          viewBox="0 0 138 26"
          xmlns="http://www.w3.org/2000/svg"
          title="CodePen"
          className="w-52 m-auto block lg:hidden "
        >
          <path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path>
        </svg>

        <div className="flex flex-wrap-reverse  lg:flex-nowrap gap-4 align-middle justify-between ">
          {/* left div */}
          <div className=" w-full lg:w-1/2  p-2 mt-10 lg:mt-1 relative z-10">
            <div className=" flex">
              <span>
                <svg
                  viewBox="0 0 100 100"
                  className="w-14 hidden lg:block mr-2 fill-white"
                  aria-hidden="true"
                >
                  <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4zm-8.6 0v20L27.1 44.8 12 34.8zM8.6 42.8 19.3 50 8.6 57.2zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50zm4.3 27.5v-20l18.6-12.5 15 10.1zm37.1-30.5L80.7 50l10.8-7.2z"></path>
                </svg>
              </span>
              <span className="font-bold text-center lg:text-start text-2xl sm:text-3xl md:text-4xl text-white">
                The best place to build, test, and discover front-end code.
              </span>
            </div>
            <p className="text-sm sm:text-lg my-5 text-center lg:text-start text-slate-300">
              CodePen is a{" "}
              <span className="text-white">social development environment</span>{" "}
              for front-end designers and developers. Build and deploy a
              website, show off your work, build test cases to learn and debug,
              and find inspiration.
            </p>
            <p className="lg:text-start text-center">
              <a
                className="p-2 px-4 text-sm rounded hover:text-white bg-green-500 hover:bg-green-600 "
                href="/"
              >
                Sign Up For Free
              </a>
            </p>
            <Sponsor1></Sponsor1>
          </div>
          {/* right div */}
          <div className=" lg:w-1/2 w-full lg:p-5 p-10 relative">
            <div className="w-[100%] lg:h-[90%] text-sm h-[300px] lg:ml-auto bg-[#464A54] rounded-xl relative">
              {/* box1 */}
              <div className="w-[300px] p-2 bg-[#1D1E22] rounded-lg h-[140px] absolute lg:-top-6 top-6 lg:right-6 -left-6">
                <header className="text-gray-300 font-bold w-full flex justify-between">
                  {" "}
                  <p>
                    <i className="fa-solid fa-gear text-gray-500"></i> HTML{" "}
                  </p>
                  <i class="fa-solid fa-angle-down text-gray-500 "></i>
                </header>
                <div className="text-white">
                  <code>
                    <span class="text-yellow-600">&lt;div </span> 
                    <span class="text-yellow-300">class</span><span>=</span>
                    <span class="text-green-400">"rect"</span>
                    <span class="text-yellow-600">&gt;&lt;/div&gt;</span></code></div>
              </div>
              {/* box2 */}
              <div className="w-[300px] p-2 bg-[#1D1E22] rounded-lg h-[140px] absolute top-32 -right-6">
                <header className="text-gray-300 font-bold w-full flex justify-between">
                  {" "}
                  <p>
                    <i className="fa-solid fa-gear text-gray-500"></i> SCSS{" "}
                  </p>
                  <i class="fa-solid fa-angle-down text-gray-500 "></i>
                </header>
                <div className="text-white">
                <p class=""><span class="text-yellow-300">.rect</span> <span>{"{"}</span></p>
                <p class=""><span class="pl-6 text-pink-300">background</span><span>:</span> <span class="text-yellow-300">linear-gradient</span>{"("}</p>
                <p class=""><span class="pl-12 text-yellow-600">-119deg</span>,</p>
                <p class=""><span class="pl-12 text-yellow-300">$gray</span> <span class="text-yellow-600">0%</span>,</p>
                <p class=""><span class="pl-12 text-yellow-300">$dark-gray</span> <span class="text-yellow-600">100%</span>{")"}; {"}"}</p></div>
                
              </div>
              {/* box3 */}
              <div className="w-[300px] p-2 bg-[#1D1E22] rounded-lg h-[140px] absolute lg:top-72 xl:top-76 top-44 md:right-[20%] xl:right-[20%] right-[10%]">
                <header className="text-gray-300 font-bold w-full flex justify-between">
                  {" "}
                  <p>
                    <i className="fa-solid fa-gear text-gray-500"></i> JS{" "}
                  </p>
                  <i class="fa-solid fa-angle-down text-gray-500"></i>
                  
                </header>
                <div className="text-white">
                <span class="text-yellow-300">var</span> <span class="text-blue-400">colors</span> =
                [<span class="text-green-500">"#74B087"</span>,<span class="text-green-500">"#DE7300"</span>,<span class="text-green-500">"#74B087"</span>];
                <br /><br /><br />
                <span class="text-yellow-300">function</span> <span class="text-blue-400">animate</span>{"() {}"};
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* decor image */}
      <img
          src="https://cpwebassets.codepen.io/assets/packs/lines-2-4e66616a5ef291c3566a7ddfe1ffaaa8.svg"
          alt=""
          className="w-[420px] lg:-mt-16 sm:-mt-[600px] md:-mt-[600px] -mt-[550px] ml-auto absolute -right-20  z-0"
        ></img>
    </>
  );
}

export default AboutCodePen;
