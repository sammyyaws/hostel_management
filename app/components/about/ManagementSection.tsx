import React from "react";

const management = [
  {
    name: "Sarah Jenkins",
    role: "Warden",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBi6DWwZrLTDZeLlTo9Z4598dICFywbW7rnMREtjvTr4xF4j46dqZ-zOidPJGKHidvQFLz36Tj6l-mCGsO8revy9o64oLqXewvobi3elscL-xKZK6qtfvj0H7uf6ApTAwsyScE6RRlW0aLTZ0e1kK6PJb0kqwr6k3feEdBiCjlRznK4GHluLD6cla83Cu5kjnAxTe-umem0MEMpcOHJfE4Kk1K80N2DTxetkJKS5ICy_Gp0AcD7DOE7vw",
  },
  {
    name: "David Chen",
    role: "Facilities Director",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmtGGBTNlGJhQbHLGSnfV2uRJzZhaCU2AF6Wwq2s7CYlZFP_qHok-XxfaFwvOy484VIJNGTdG1x2z5sWNJI-nTW2pvoZ3Qqokd07wXwBoILYUY95M22qLoUrbU3F10DW18_GTsewJEaIsyHUZkuOaR0NtkTxEtkFx1aNsC_MdNfUMXdpqR8swMnRf3fIIxZpZcRWExTtrRHYyxPqkgXVVIDJquxx7pnTYeqzPhMDmpzjj9BJ2nETIp0A",
  },
  {
    name: "Amina Patel",
    role: "Student Experience",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsVP1UbJvinSpXb8MccAPOW3IlT0bCM4kHT15GV4UpETYS-Ll94mEC7K64dkUzykT92EqwBtYE__bvkT3VWOEzPk0yfRH_-fq0A1t2qiLHAiTLpqvq457Le9FcJkSISDFLow_y3dAzgnx8dryqnkn6g3wZES0Wk0KNAvVQKptQ9UGQSuGFCeph60e_bP_aLMciIbBk_AYcnN6WDsBMIlXhSz444Ztjy_nhpIdgTfGy30_aIEFpug9zHA",
  },
];

export default function ManagementSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-container-padding py-16 bg-surface-container-lowest">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-headline-md text-headline-md text-primary mb-12">
          Meet the Management
        </h2>

        <div className="flex flex-wrap justify-center gap-12">
          {management.map((person) => (
            <div
              key={person.name}
              className="flex flex-col items-center gap-4 w-48"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary-container p-1">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                  {person.name}
                </h4>

                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}