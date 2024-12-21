import React from 'react'

const Details = () => {
  return (
    <div>
      <br />
      <hr />
      <br />
      <br />
      <div>
        <div className="flex  justify-center text-center mb-4 space-x-20 pl-72">
          <h2 className="text-[24px] font-medium w-[136px] h-[36px]">Description</h2>
          <h2 className="text-[24px] font-normal w-[269px] h-[36px] text-[#9F9F9F]">Additional Information</h2>
          <h2 className="text-[24px] font-normal w-[138px] h-[36px] text-[#9F9F9F]">Reviews</h2>
        </div>
        <div className='mt-14'>
        <p className='font-normal text-[16px] text-[#9F9F9F] w-[1026px] h-[174px] ml-72 '>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          <br />
          <br />
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8  ">
      
      <div className=" rounded-lg p-4 flex justify-center w-[1239px] h-[348px] absolute left-52">
      <div>
        <img
          src="/Group 107.png" 
          alt="Sofa Front View"
          className="rounded-lg shadow-md w-[605px] h-[348px]"
        />
      </div>

      <div className=" rounded-lg p-4 flex justify-center -mt-4">
        <img
          src="/Group 107.png" 
          alt="Sofa Side View"
          className="rounded-lg shadow-md w-[605px] h-[348px]"
        />
      </div>
    </div>
    </div>
        </div>
        </div>
  )
}

export default Details
