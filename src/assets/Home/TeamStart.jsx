import React from 'react'
import Button from '../Header/Button'


function TeamStart() {
  return (
    <>
      <div className='mx-1 sm:mx-8 p-4 rounded-md text-white text-center content-center bg-[#1E1F26]'>
        <h1 className="text-2xl py-3 font-bold">Bring the Whole Team
        </h1>
        <p className="text-[0.85rem] pb-10 md:w-[50%] mx-auto text-gray-300 ">Each team and team member gets all the features of a PRO membership. That means the Team can do things like upload Assets, use features like Collab Mode, Professor Mode, Presentation Mode, and Live View, and apply custom CSS to Posts, Profiles, and Embeds.</p>
        <Button name="Start a Team" className="py-2 px-3 bg-green-500 hover:bg-green-600 text-black rounded-sm"></Button>
        <p className="py-5 font-bold text-[1.1rem]">Loved by hundreds of teams, including:
        </p>
        <div className="flex flex-wrap p-4 gap-5 justify-center align-middle">
        <div className='content-center'><img src="https://cpwebassets.codepen.io/assets/packs/airbnb-cb44d3434e60956b120c2cfd2afa9a23.png" alt="Airbnb" width="68px"></img></div>
        <div className='content-center'><img src="https://cpwebassets.codepen.io/assets/packs/grubhub-f05150a98afe6175f221f4bc75ac3372.png" alt="Grubhub" width="149px"></img></div>
        <div className='content-center'><img src="https://cpwebassets.codepen.io/assets/packs/square-e4a6fa8c30a53180c593a11aeb1618c2.png" alt="Square" width="71px"></img></div>
        <div className='content-center'><img src="https://cpwebassets.codepen.io/assets/packs/netflix-8b4f0b76ad5ccaa1b6326267be6c396f.png" alt="Netflix" width="125px"></img></div>
        <div className='content-center'><img src="https://cpwebassets.codepen.io/assets/packs/adobe-0d9fee1af16f2db73270e52fbdcf4fe8.png" alt="Adobe" width="72px"></img></div>
        <div className='content-center'><img src="https://cpwebassets.codepen.io/assets/packs/salesforce-63204abcda6bd196c6a6da3bb4911510.png" alt="Salesfoce" width="137px"></img></div>
        <div className='content-center'><img src="https://cpwebassets.codepen.io/assets/packs/microsoft-0859118499110df3a66f00a999a53a40.png" alt="Microsoft" width="209px"></img></div>
        <div className='content-center'><img src="https://cpwebassets.codepen.io/assets/packs/lyft-87acc577a28f7c5fbafbed09b543dd91.png" alt="Lyft" width="70px"></img></div>
        <div className='content-center'><img src="https://cpwebassets.codepen.io/assets/packs/ibm-c6d225a3817a57e66f67fdcb18d1fe04.png" alt="IBM" width="121px"></img></div>
        </div>
      </div>
    </>
  )
}

export default TeamStart
