import { testimonials } from "../constants"
const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center my-10 lg:my-20 ">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {
          testimonials?.map((item, index) => (
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2" key={index}>
              <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                <p>
                  <q>{item.text}</q>
                </p>
                <div className="flex mt-8 items-start">
                  <img
                    src={item.image}
                    alt={item.user}
                    className="h-12 w-12 rounded-full border border-neutral-300"
                  />
                  <div className="ml-10 ">
                    <h6 className="text-lg tracking-wide font-medium">{item.user}</h6>
                    <span className="text-sm font-normal italic text-neutral-600">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimonials