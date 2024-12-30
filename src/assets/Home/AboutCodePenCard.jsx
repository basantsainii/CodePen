import React from "react";
import Button from "../Header/Button";
function AboutCodePenCard() {
  return (
    <>
      <div className="flex lg:flex-row flex-col px-4 justify-center gap-4 relative">
        {/* box 1 */}
        <div className="bg-[#2C303A] relative z-10 my-12 lg:w-[32%] w-full p-6 rounded-xl">
          <div className="w-[60px] h-[60px] relative rounded-md mb-5 -mt-16 bg-black p-3">
            <img
              className=""
              src="https://cpwebassets.codepen.io/assets/packs/icon-build-0f21c66ed03bfb36c597636d27ca621e.svg"
              alt="Icon of conveyer belt with boxes on it."
            ></img>
          </div>
          <h2 className="text-white text-2xl mb-3">Build & Test</h2>
          <p className="text-[#c7c9d3] mb-4 text-[15px]">
            Get work done quicker by building out entire projects or isolating
            code to test features and animations. Want to keep it all under
            wraps? <a href=""><span className="text-blue-400">Upgrade to a <span className="bg-yellow-400 rounded-sm text-black px-1 py-1 font-bold text-[10px]">PRO</span> account</span></a> to keep your work private.
          </p>
          <a href="/">
            {" "}
            <Button
              name="Try the Editor"
              className="p-3 rounded-sm bg-[#444857] hover:bg-gray-400"
            ></Button>
          </a>
        </div>
        {/* box 2 */}
        <div className="bg-[#2C303A] relative z-20 my-12 lg:w-[32%] w-full p-6 rounded-xl">
          <div className="w-[60px] h-[60px] rounded-md mb-5 -mt-16 bg-black p-3">
          <img src="https://cpwebassets.codepen.io/assets/packs/icon-learn-b1311620e99cea826f259aa2f7750940.svg" alt="Icon of Map"></img>
          </div>
          <h2 className="text-white text-2xl mb-3">Learn & Discover</h2>
          <p className="text-[#c7c9d3] mb-4 text-[15px]">
          Want to upgrade your skills and get noticed? Participating in CodePen Challenges is a great way to try something new. We frequently feature these Pens on our homepage and across social media!
          </p>
          <a href="/">
            {" "}
            <Button
              name="Join this Week's Challenge"
              className="p-3 rounded-sm bg-[#444857] hover:bg-gray-400"
            ></Button>
          </a>
        </div>
        {/* box 3 */}
        <div className="bg-[#2C303A] relative z-20 my-12 lg:w-[32%] w-full p-6 rounded-xl">
          <div className="w-[60px] h-[60px] relative rounded-md mb-5 -mt-16 bg-black p-3">
          <img className="" src="https://cpwebassets.codepen.io/assets/packs/icon-share-910c683bbac21bf41fcf9aab64ebc957.svg" alt="Icon of Globe"></img>
          </div>
          <h2 className="text-white text-2xl mb-3">Share Your Work</h2>
          <p className="text-[#c7c9d3] mb-4 text-[15px]">
          Become a part of the most active front-end community in the world by sharing work. Presenting at a conference? Show your code directly in the browser with <a href="/" className="text-blue-400">Presentation Mode</a>.
          </p>
          <a href="/">
            {" "}
            <Button
              name="Explore Trending"
              className="p-3 rounded-sm bg-[#444857] hover:bg-gray-400"
            ></Button>
          </a>
        </div>
        {/* theme images */}
        <div className="absolute bottom-0 -left-32 w-[40%]">
          <img src="https://cpwebassets.codepen.io/assets/packs/lines-4-4ea88270d73b7f6eaaa69e91aed97ddf.svg" alt="" classname=""></img>
        </div>
      </div>
    </>
  );
}
export default AboutCodePenCard;