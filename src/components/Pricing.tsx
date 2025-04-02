import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"

const Pricing = () => {
  return (
    <div className="py-10 px-4 lg:px-10 ">
      <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl p-10 tracking-wider">Pricing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          pricingOptions?.map((item, index) => (
            <div className="  w-full flex gap-3 flex-col p-2" key={index}>
              <div className="p-10 border rounded-xl  border-neutral-500 ">
                <h2 className="text-4xl lg:text-5xl mb-8">
                  {item.title}
                  {item.title === "Pro" && (<span className="bg-gradient-to-r from-orange-500 to-orange-800 mb-4 ml-2
                  bg-clip-text text-transparent text-xl">
                    (Most Popular)
                  </span>)}
                </h2>
                <div className="flex items-center">
                  <h2 className="text-4xl lg:text-5xl mt-6 mr-2">{item.price}</h2>
                  <span className="tracking-tight text-neutral-500 mt-10">/month</span>
                </div>
                {
                  item.features?.map((feature, index) => (
                    <div className="flex gap-2 mt-8" key={index}>
                      <CheckCircle2 />
                      <p>{feature}</p>
                    </div>
                  ))
                }
                <div className="">
                  <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20
                  tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Pricing