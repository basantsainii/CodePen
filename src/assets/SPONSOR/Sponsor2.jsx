import React from 'react'
import Button from '../Header/Button'

function Sponsor2() {
  return (
    <>
      <div className=" mx-1 sm:mx-8 p-4  bg-[#262830] mt-16 mb-4 relative rounded-md">
              <a href="/" className="md:flex gap-5">
                <div className=" py-3">
                <img src="https://static4.buysellads.net/uu/7/154829/1729110983-AWS_Marketplace_Q3-2024_Seller-Prime_Program_MPObservability_FINAL_600x400.png" alt="AWS"></img>
                </div>
                <div className="text-gray-400 text-sm py-4">
                  <h1 className="text-lg font-bold text-white ">
                    AWS Marketplace
                  </h1>
                  <p>For every application or workload, monitoring and observability is critical for reliability and delivering better customer experiences. Browse free technical guidance for AWS observability use cases and access top observability platforms using your AWS account.</p>
                  <div> <br />
                <a href="/" ><Button name="Get Started" className="px-4 hover:bg-green-600 py-3 bg-green-500 text-black rounded-sm"></Button></a>
              </div>
              </div>
              </a>
              
              <a
                href="/"
                className="absolute top-1 md:top-2 right-2 text-[0.75rem] text-gray-500 hover:text-gray-300 [text-shadow:_0_1px_0_black]"
              >
                SPONSOR
              </a>
            </div>
    </>
  )
}

export default Sponsor2
