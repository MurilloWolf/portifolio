import React from 'react';
import { AppProps } from 'next/app';

export default function Decks({ pageProps }: AppProps) {
  const reactIconUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png';
  return (
    <div>
      <h1>Decks</h1>
      <section>
        <div className="bg-pink-700  w-screen h-80 max-h-1/3 flex justify-center items-center ">
          <div className="form-control sm:max-w-xl w-72 sm:w-full">
            <label className="label">
              <span className="label-text text-start">O que você vai estudar hoje?</span>
            </label>
            <input type="text" placeholder="Front-end..." className="input input-ghost w-full max-w-xs md:max-w-xl" />
          </div>
        </div>

        <div className="flex  overflow-x-scroll p-5 justify-start sm:justify-center h-48 sm:h-max md:h-max items-center flex-nowrap  md:overflow-x-hidden">
          <div className=" sm:grid m-0 flex justify-around h-32  sm:gap-8 gap-5 sm:grid-cols-2 md:grid-cols-3 md:h-max sm:h-max  ">
            <div className="snap-center bg-slate-500 h-40 w-64 min-w-max justify-evenly items-center rounded-md flex flex-1 ">
              <div className="avatar w-12 h-12">
                <img src={reactIconUrl} alt="tech" />
              </div>
              Wolf
            </div>
            <div className="snap-center bg-slate-500 h-40 w-64 rounded-md flex justify-evenly items-center ">
              <div className="avatar w-12 h-12">
                <img src={reactIconUrl} alt="tech" />
              </div>
              JS
            </div>
            <div className="snap-center bg-slate-500 h-40 w-64 rounded-md flex justify-evenly items-center ">
              <div className="avatar w-12 h-12">
                <img src={reactIconUrl} alt="tech" />
              </div>
              JS
            </div>
            <div className="snap-center bg-slate-500 h-40 w-64 rounded-md flex justify-evenly items-center ">
              <div className="avatar w-12 h-12">
                <img src={reactIconUrl} alt="tech" />
              </div>
              JS
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
