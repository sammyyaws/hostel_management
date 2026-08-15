import React from "react";
import RoomCard from "../components/UIComponents/RoomCard";

const rooms = [
  {
    title: "3-Bed Room",
    price: "GH₵ 3,500",
    period: "/ academic year",
    features: ["High-Speed WiFi", "Wardrobe", "Study Table", "Private Bath"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOL6BALdS3uaSUABqbVASqyyOQ-sf0O5t-F_t0ZpbaK6BnPAbiiloEONXzF_dA_4ZF3WjFBmud8P_puBygQOZEvuzd0TShk8drFTbM_8PzJfq1WEyarIzCaCeOhTCC7kxjWO6lYEs8lSDQMQHZB-TLcSqvAR69E6t-bkJbQh-ory4ubnHh7g3Xj_J5t2psUwElQi1pqe7j-grB2LMeGCTVaVTeENTFIM21jtJyQHzOJZbbZHXFsY3WWQ",
    badge: "Available",
    badgeVariant: "success",
  },
  {
    title: "2-Bed Room",
    price: "GH₵ 5,200",
    period: "/ year",
    features: ["WiFi Included", "Mini Fridge", "En-suite Bath"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmlseTx3p5EAj2-mahZlBbwlZS74h1fjhQASnUExiQV0f1gdV7gcnZuo96fqcLLUSeD7hOvObPuSC5sq1lwLa_IHEH_2OWv7CJdaijWXsz49d6VaYhnoOCLfZBGHc1tv2KbrneY825oCAEBHPtNsGjgQi3DzutdK9NHbXr7WTVFdaL6DbEodo-r-KLGJYhkp8J1mQNlz1DU6W8y5rfASgX29gFVhIEs_lvJCe43qkmAGivLqKWDkAbyg",
    badge: "Waitlist Only",
    badgeVariant: "danger",
  },
  {
    title: "Single Executive",
    price: "GH₵ 8,000",
    period: "/ year",
    features: ["Air Conditioned", "Smart TV", "Weekly Cleaning"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHnvVde1Nsf2jZ5jmb0AV-dZsTv-1VCX7eJPhV6FR7YwIkg8QNgfeebDdqyUXmyMtMiesCL6U8Q81USu_MZJotoaXsriGqSlVwY084YRtzmQD7QVAzTqy6ZQVGRNlGDEZDVZIXi9VSJFpRFzD9nY_FYa3hVAENCuqfO3QHAnAfYp4MqWiv4qFPC61f987UF9xQY5inhtqJmntgdtmqDuG4mHg51kRH5Dak7jmf4Q6SB-p9YKmok3s7Ug",
    badge: "Few Left",
    badgeVariant: "info",
  },
];

export default function RoomsPage() {
  return (
    <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-container-padding max-w-7xl mx-auto w-full">
      <div className="mb-12 text-center md:text-left">
        <h1 className="font-headline-lg text-headline-lg text-primary mb-4">Available Accommodations</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Explore our range of comfortable, secure, and fully equipped rooms designed for student life.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {rooms.map((r) => (
          <div key={r.title} className="mb-6 md:mb-0 px-2 md:px-0">
            <RoomCard
              title={r.title}
              price={r.price}
              period={r.period}
              features={r.features}
              image={r.image}
              badge={r.badge}
              badgeVariant={r.badgeVariant as any}
            />
          </div>
        ))}

        <div className="md:col-span-3 bg-primary-container text-on-primary-container rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="font-headline-sm text-headline-sm mb-2">Need help choosing?</h3>
            <p className="font-body-md text-body-md opacity-90">Our housing advisors are available to help you find the perfect room for your needs and budget.</p>
          </div>
          <button className="whitespace-nowrap bg-on-primary-container text-primary-container hover:bg-primary-fixed px-6 py-3 rounded-lg font-label-md text-label-md transition-colors">Contact Advisor</button>
        </div>
      </div>
    </main>
  );
}
