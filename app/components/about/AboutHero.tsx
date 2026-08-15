import React from "react";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-container-padding py-12 gap-6">
      <div className="w-full md:w-1/2 flex flex-col gap-6 z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary">
          Beyond Just a Place to Stay
        </h1>

        <p className="text-lg md:text-xl text-on-surface-variant max-w-lg">
          Providing a focused, community-driven environment tailored for
          student success and wellbeing.
        </p>

        <div>
          <a
            className="inline-block bg-secondary-container text-on-secondary-container font-label-md text-label-md px-6 py-3 rounded shadow-sm hover:shadow transition-shadow"
            href="#"
          >
            Discover TYB
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[300px] md:h-full absolute md:relative inset-0 md:inset-auto opacity-20 md:opacity-100 pointer-events-none md:pointer-events-auto rounded-xl overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida/AP1WRLtafZ3zRvXAeYiorox6IU0qN0lX2LVjSEDGhH9CqnNJWZadnySUusUUcoRRV3ah5Za3oAusOxplunbELRjsRe0VLh01FQHIy-6N3fVxk_ccKPvQXNIk6M3w6w-1zC-G7dl-nSPn6RxazEMW-xSDB2rSqSIrYn-V0I5gjaWxoGykJAth8sOUWfuCDMHSUrlaWxgdI9NHNG5_T-SZzaw28jdiw9NXqwcJyFsIpkT0-5NXGgAc29rvUIfvQf0F"
          alt="TYB Hostel lively common area"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}