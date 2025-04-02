import video1 from "../../public/assets/video1.mp4";
import video2 from "../../public/assets/video2.mp4";
const Hero = () => {
    return (
        <div className="mt-10 mx-10 sm:mx-30 lg:mx-40">
            <div className="flex flex-col text-center justify-center items-center ">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    VirtaulR build tools <span className="bg-gradient-to-r from-orange-500
                     to-orange-800 text-transparent bg-clip-text">
                        for developers  </span>
                </h1>
                <p className="text-lg text-center mt-10 text-neutral-500 max-w-4xl">
                    Empowe your creativity and bring your VR app ideas to life with our intutive developement tools.
                    get started today and turn your imagination into immersive reality.
                </p>


            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 my-10">
                <a href="#" className="py-2 px-3 rounded-md  bg-gradient-to-r from-orange-500 to-orange-800">Start for free</a>
                <a href="#" className="border rounded-md py-2 px-3">Documentation</a>
            </div>
            <div className="flex flex-1 flex-col md:flex-row  mt-10 gap-3 justify-center items-center">
                <video src={video1} autoPlay muted loop className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400" >
                    Your browser doesn't support the video
                </video>
                <video src={video2} autoPlay muted loop className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400" >
                    Your browser doesn't support the video
                </video>
            </div>
        </div>
    )
}

export default Hero;