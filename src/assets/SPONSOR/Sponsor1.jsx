import React from 'react'

function Sponsor1() {
  return (
    <>
      <div className="p-2 sm:p-4 bg-[#262830] mt-16 mb-4 relative">
              <a href="/" className="flex gap-3 sm:gap-5">
                <div className="w-60">
                  <img
                    src="https://static4.buysellads.net/uu/7/154829/1729105669-aws-marketplace-logo.png"
                    alt="aws"
                  />
                </div>
                <div className="text-gray-400 text-sm ">
                  <strong className="text-lg font-bold text-white ">
                    AWS Marketplace
                  </strong>
                  <br />
                  Improve site reliability, identify route causes, and deliver
                  better customer experiences on AWS.
                </div>
              </a>
              <a
                href="/"
                className="absolute top-2 right-2 text-[0.75rem] text-gray-500 hover:text-gray-300 [text-shadow:_0_1px_0_black]"
              >
                SPONSOR
              </a>
            </div>
    </>
  )
}

export default Sponsor1
