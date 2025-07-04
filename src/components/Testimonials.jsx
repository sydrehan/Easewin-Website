// src/components/Testimonials.jsx

const testimonials = [
  { quote: "Easewin found me the best teammates I've ever had!", author: "ProGamer_X" },
  { quote: "The stat tracking is insane. I've improved so much.", author: "Viper" },
  { quote: "Finally, a non-toxic place to compete.", author: "Serenity" },
  { quote: "Won my first tournament here. The feeling is unreal!", author: "Raptor_1" },
  { quote: "Seamless, beautiful, and functional. 10/10.", author: "GameDevJess" },
  { quote: "A must-have app for any serious gamer.", author: "IGN Review" },
];

const Testimonials = () => {
  // Duplicate the array to create a seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold font-display text-center mb-12">
          What Players Are Saying
        </h2>

        {/* This container adds the fade-out gradient overlay */}
        <div className="relative w-full overflow-hidden
                        [--gap:1rem] 
                        [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">

          {/* This container has the group-hover logic to pause the animation */}
          <div className="group flex flex-nowrap gap-[--gap] animate-marquee
                          hover:[animation-play-state:paused]">
                {duplicatedTestimonials.map((testimonial, index) => (
                    <div 
                      key={index} 
                      className="flex-shrink-0 w-80 bg-card-bg p-6 rounded-2xl border border-white/10
                                 transition-transform duration-300 transform hover:scale-105"
                    >
                        <p className="text-lg italic text-light-gray">"{testimonial.quote}"</p>
                        <p className="mt-4 font-bold text-brand-purple-light">- {testimonial.author}</p>
                    </div>
                ))}
          </div>

        </div>
    </section>
  );
};

export default Testimonials;