import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants/index.tsx";
import CodeImage from "..//assets/code.jpg";

const WorkFLow = () => {
  return (
    <div>
      <h1 className="text-3xl sm:text-3xl lg:text-5xl text-center py-10">Accelerate your
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">  coding workflow</span>
      </h1>
      <div className="flex flex-wrap justify-center w-full">
        <div className="px-4 w-full md:w-1/2">
          <img src={CodeImage} alt="code-imgae" />
        </div>
        <div className="p-4 ">
          {
            checklistItems?.map((item, index) => (
              <div className="mt-4 flex gap-5" key={index}>
                <div className="rounded-full h-10 w-10 flex justify-center items-center text-green-500">
                  <CheckCircle2 />
                </div>
                <div className="flex flex-col gap-4 max-w-[300px]">
                  <h2 className="text-xl tracking-wider">{item?.title}</h2>
                  <p className="text-md text-neutral-500">{item?.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default WorkFLow