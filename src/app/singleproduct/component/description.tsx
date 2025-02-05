import React from 'react'
import Image from 'next/image'

const Details = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <br />
     <hr />
     <hr /><br /><br />
      <div>
        <div className="flex flex-col md:flex-row justify-center text-center mb-4 space-y-4 md:space-y-0 md:space-x-10 lg:space-x-20 w-full">
          <h2 className="text-[24px] font-medium">Description</h2>
          <h2 className="text-[24px] font-normal text-[#9F9F9F]">Additional Information</h2>
          <h2 className="text-[24px] font-normal text-[#9F9F9F]">Reviews</h2>
        </div>
        <div className='mt-8 md:mt-14 text-center'>
          <p className='font-normal text-[16px] text-[#9F9F9F] max-w-3xl mx-auto'>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="flex justify-center">
            <Image
              src="/Group 107.png"
              alt="Sofa Front View"
              width={600}
              height={200}
              className="rounded-lg shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/Group 107.png"
              alt="Sofa Side View"
              width={600}
              height={200}
              className="rounded-lg shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
