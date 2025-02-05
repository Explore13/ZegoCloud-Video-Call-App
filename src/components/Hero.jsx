import { useState } from "react";
import videoChat from "../assets/videochat.png";
function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

function Hero() {
  const [input, setInput] = useState("");

  const submitHandler = () => {
    if (!input) {
      window.location.href = `/room/${randomID(5)}`;
    }
    window.location.href = `/room/${input}`;
  };
  return (
    <div className="bg-gray-50">
      <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                  Meet with your Family or Friends
                </h1>
                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                  Start a free conference call with your friends, family or team
                  members. No sign up required.
                </p>

                <div className="mt-8 sm:mt-10">
                  <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      name=""
                      id=""
                      placeholder="Enter Room ID"
                      className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                      required
                    />
                    <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2 ">
                      <button
                        onClick={submitHandler}
                        className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-lg focus:outline-none focus:bg-blue-700 font-pj hover:bg-gray-800 hover:cursor-pointer"
                      >
                        Join/Create Room
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img className="w-full sm:scale-150" src={videoChat} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
