import React from "react";
import { FaBed, FaShieldAlt, FaBook, FaUsers } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="flex-grow pt-24 pb-12">
      <section className="relative w-full min-h-[60vh] flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-container-padding py-12 gap-6">
        <div className="w-full md:w-1/2 flex flex-col gap-6 z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary">Beyond Just a Place to Stay</h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-lg">Providing a focused, community-driven environment tailored for student success and wellbeing.</p>
          <div>
            <a className="inline-block bg-secondary-container text-on-secondary-container font-label-md text-label-md px-6 py-3 rounded shadow-sm hover:shadow transition-shadow" href="#">Discover TYB</a>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-full absolute md:relative inset-0 md:inset-auto opacity-20 md:opacity-100 pointer-events-none md:pointer-events-auto rounded-xl overflow-hidden">
          <img alt="TYB Hostel lively common area" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLtafZ3zRvXAeYiorox6IU0qN0lX2LVjSEDGhH9CqnNJWZadnySUusUUcoRRV3ah5Za3oAusOxplunbELRjsRe0VLh01FQHIy-6N3fVxk_ccKPvQXNIk6M3w6w-1zC-G7dl-nSPn6RxazEMW-xSDB2rSqSIrYn-V0I5gjaWxoGykJAth8sOUWfuCDMHSUrlaWxgdI9NHNG5_T-SZzaw28jdiw9NXqwcJyFsIpkT0-5NXGgAc29rvUIfvQf0F" />
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-container-padding py-16 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-headline-md text-headline-md text-primary">Our Vision</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">At TYB Hostel, we believe that environment shapes outcome. Our mission is to combine modern, comfortable facilities with a supportive atmosphere designed specifically for academic focus and personal growth. We are more than a residence; we are a foundation for your future.</p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-container-padding py-16 bg-surface-container-low">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-headline-md text-headline-md text-primary text-center mb-12">Why Choose TYB</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-xl p-6 border border-outline-variant shadow-sm flex flex-col gap-4 items-start">
              <FaBed className="text-primary text-3xl" />
              <h3 className="text-xl font-semibold">Modern Living</h3>
              <p className="text-sm text-on-surface-variant">Thoughtfully designed rooms balancing privacy with comfort.</p>
            </div>

            <div className="bg-primary text-on-primary rounded-xl p-6 shadow-sm flex flex-col gap-4 md:col-span-2 items-start">
              <FaShieldAlt className="text-on-primary text-3xl" />
              <h3 className="text-xl font-semibold text-on-primary">Secure Environment</h3>
              <p className="text-sm text-on-primary/90">24/7 security, biometric access, and comprehensive surveillance ensuring peace of mind for residents and parents alike.</p>
            </div>

            <div className="bg-secondary-container text-on-secondary-container rounded-xl p-6 shadow-sm flex flex-col gap-4 md:col-span-2 items-start">
              <FaBook className="text-on-secondary-container text-3xl" />
              <h3 className="text-xl font-semibold text-on-secondary-container">Academic Focus</h3>
              <p className="text-sm text-on-secondary-container/90">Dedicated quiet study zones, high-speed connectivity, and an atmosphere that respects academic dedication.</p>
            </div>

            <div className="bg-surface rounded-xl p-6 border border-outline-variant shadow-sm flex flex-col gap-4 items-start">
              <FaUsers className="text-primary text-3xl" />
              <h3 className="text-xl font-semibold">Vibrant Community</h3>
              <p className="text-sm text-on-surface-variant">Engaging common areas and organized events to build lasting connections.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-container-padding py-16 bg-primary text-on-primary">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-around items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-4xl">hotel</span>
            <span className="font-headline-md text-headline-md">500+</span>
            <span className="font-label-md text-label-md uppercase tracking-wider text-on-primary/80">Beds</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-4xl">verified_user</span>
            <span className="font-headline-md text-headline-md">24/7</span>
            <span className="font-label-md text-label-md uppercase tracking-wider text-on-primary/80">Security</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-4xl">wifi</span>
            <span className="font-headline-md text-headline-md">1Gbps</span>
            <span className="font-label-md text-label-md uppercase tracking-wider text-on-primary/80">High-Speed WiFi</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-4xl">local_cafe</span>
            <span className="font-headline-md text-headline-md">3</span>
            <span className="font-label-md text-label-md uppercase tracking-wider text-on-primary/80">Cafeterias</span>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-container-padding py-16 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-headline-md text-headline-md text-primary mb-12">Meet the Management</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center gap-4 w-48">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary-container p-1">
                <img className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi6DWwZrLTDZeLlTo9Z4598dICFywbW7rnMREtjvTr4xF4j46dqZ-zOidPJGKHidvQFLz36Tj6l-mCGsO8revy9o64oLqXewvobi3elscL-xKZK6qtfvj0H7uf6ApTAwsyScE6RRlW0aLTZ0e1kK6PJb0kqwr6k3feEdBiCjlRznK4GHluLD6cla83Cu5kjnAxTe-umem0MEMpcOHJfE4Kk1K80N2DTxetkJKS5ICy_Gp0AcD7DOE7vw" alt="Sarah Jenkins" />
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">Sarah Jenkins</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Warden</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 w-48">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary-container p-1">
                <img className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmtGGBTNlGJhQbHLGSnfV2uRJzZhaCU2AF6Wwq2s7CYlZFP_qHok-XxfaFwvOy484VIJNGTdG1x2z5sWNJI-nTW2pvoZ3Qqokd07wXwBoILYUY95M22qLoUrbU3F10DW18_GTsewJEaIsyHUZkuOaR0NtkTxEtkFx1aNsC_MdNfUMXdpqR8swMnRf3fIIxZpZcRWExTtrRHYyxPqkgXVVIDJquxx7pnTYeqzPhMDmpzjj9BJ2nETIp0A" alt="David Chen" />
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">David Chen</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Facilities Director</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 w-48">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary-container p-1">
                <img className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsVP1UbJvinSpXb8MccAPOW3IlT0bCM4kHT15GV4UpETYS-Ll94mEC7K64dkUzykT92EqwBtYE__bvkT3VWOEzPk0yfRH_-fq0A1t2qiLHAiTLpqvq457Le9FcJkSISDFLow_y3dAzgnx8dryqnkn6g3wZES0Wk0KNAvVQKptQ9UGQSuGFCeph60e_bP_aLMciIbBk_AYcnN6WDsBMIlXhSz444Ztjy_nhpIdgTfGy30_aIEFpug9zHA" alt="Amina Patel" />
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">Amina Patel</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Student Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-container-padding py-24 bg-surface-container-high text-center">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Ready to join our community?</h2>
        <a className="inline-block bg-secondary-container text-on-secondary-container font-label-md text-label-md px-8 py-4 rounded-full shadow-[0_4px_12px_rgba(0,83,91,0.15)] hover:bg-secondary hover:text-on-secondary transition-all" href="#">View our available rooms</a>
      </section>
    </main>
  );
}
