import { features } from "../constants/index.tsx";

const Features = () => {
  return (
    <div className="px-10 md:px-15 lg:px-20 py-10" id="features">
      <h4 className=" rounded-lg text-orange-500 bg-neutral-900 text-center w-fit mx-auto mt-10 b">Feature</h4>
      <div>
        <h1 className="text-2xl sm:text-4xl lg:text-6xl tracking-wide text-center pt-8">
          Easily build <span className="bg-gradient-to-r from-orange-500 to bg-orange-700 text-transparent bg-clip-text">your code</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full mt-6 lg:mt-10">
        {features?.map((feature, index) => (
          <div className="mt-4 flex gap-5" key={index}>
            <div className="rounded-full h-10 w-10 flex justify-center items-center text-orange-700">
              {feature?.icon}
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl tracking-wider">{feature?.text}</h2>
              <p className="text-md text-neutral-500">{feature?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features;
