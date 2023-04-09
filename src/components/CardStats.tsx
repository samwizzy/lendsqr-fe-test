import React from "react";
import { stats } from "../config/stats";

function CardStats() {
  return (
    <section className="grid grid-cols-4 gap-x-6 gap-y-4">
      {stats.map((item) => (
        <figure key={item.title} className="card col-span-4 sm:col-span-1">
          <div className="p-6">
            <img src={item.icon} width="48px" className="block mb-4" alt="" />
            <span className="block font-normal text-sm uppercase my-4">{item.title}</span>
            <span className="text-xl font-bold">{item.amount}</span>
          </div>
        </figure>
      ))}
    </section>
  );
}

export default CardStats;
