import React from "react";

const Highlight = () => {
  return (
    <section className="w-full bg-black rounded-t-4xl mt-10">

      {/* Heading */}
      <div className="max-w-full sticky top-5 max-h-auto mx-auto border rounded-t-4xl pb-15 bg-[#FAF9F6] px-6 ">
        <h1 className="text-3xl font-bold text-center pt-6 lg:text-6xl lg:pt-10 lg:text-left">
          Get the highlights.
        </h1>
      </div>

      {/* Card 1 */}
      <div className="-mt-6 border-white sticky top-7 bg-black rounded-t-4xl py-16 lg:py-20">
        <div className="max-w-full mx-auto px-6 flex flex-col lg:flex-row items-center justify-around gap-12">

          <img
            src="Images/highlight-1.0.jpg"
            alt="Apple M5 Pro performance"
            className="w-full h-60 lg:w-[35vw] lg:h-[30vw] rounded-4xl object-cover"
          />

          <div className="flex flex-col items-center lg:items-start gap-8 max-w-2xl text-center lg:text-left">
            <h2 className="font-bold text-lg lg:text-[3vw] leading-tight bg-linear-to-r from-white to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">
              The Apple M5 Pro delivers pro-level performance with remarkable efficiency.
            </h2>

            <h2 className="font-bold text-lg py-2 lg:text-[3vw] leading-tight bg-linear-to-r from-white to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">
              The M5 Max maximized for speed, memory bandwidth, and graphics power.
            </h2>
          </div>

        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-black rounded-t-4xl sticky top-7 text-white py-16 lg:pt-5">
        <div className="max-w-full mx-auto px-6 lg:pb-4 text-center">

          <h2 className="font-bold p-2 text-xl lg:pt-7 lg:max-w-full lg:text-5xl max-w-3xl mx-auto bg-linear-to-r from-white to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">
            Longest battery life ever in a Mac. Up to 24 hours. Hit the road.
          </h2>

          <div className="mt-10  ">
            <video
              src="Videos/highlight-2.0.mp4"
              className="w-[76vw] lg:h-[36vw] lg:-mt-20  object-cover rounded-4xl"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="MacBook battery highlight video"
              />
          </div>

        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white sticky border rounded-t-4xl py-16 lg:py-10">
        <div className="max-w-full mx-auto text-center">

          <h2 className="font-bold text-xl lg:px-2 lg:text-[2vw] lg:max-w-full leading-tight max-w-4xl mx-auto">
            Live Activities and the Phone app. Stay in touch without touching your phone.
          </h2>

          <div
            className="mt-10 w-full h-[70vw] lg:h-[40vw] rounded-4xl bg-cover bg-center"
            style={{ backgroundImage: "url('Images/highlights-3.0.jpg')" }}
          />

        </div>
      </div>

    // </section>
  );
};

export default Highlight;

