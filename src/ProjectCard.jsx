import React from "react";

export default function ProjectCard({ data }) {
  console.log(data.title);

  return (
    <div className="grid grid-cols-11 gap-5">
      <div className="col-span-3 border-1 border-gray-500 hover:border-orange-200 transition duration-300 mt-2 w-1/1 h-30">
        <a href="">
          <img src={new URL(`./assets/${data.image}`, import.meta.url).href}
          alt={data.title} className="w-1/1 h-1/1 object-cover relative transition-all duration-300 ease-in-out hover:-translate-y-2 hover:translate-x-2" />
        </a>
      </div>
      <div className="col-span-8">
        <span>
          <p className="leading-6.5"><a href="" className="text-xl underline underline-offset-4 hover:decoration-orange-200 hover:text-white">{data.title}</a>&ensp;{data.desc}</p>
        </span>
        {data.tools.length > 0 &&
          <div className="mt-2 flex gap-3 text-sm items-center">
            {data.tools.map((tool, index) => {
              return index === data.tools.length - 1 ? <span>{tool}</span> : <><span>{tool}</span><span className="h-1 w-1 bg-gray-400"></span></>
            })}
          </div>
        }

      </div>
    </div>
  )
}