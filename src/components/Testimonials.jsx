// src/components/Testimonials.jsx
// This is the full component with debugging console.log messages
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Star } from 'lucide-react';

const sampleTestimonials = [
  { id: 'gp:AOqpTOHYaQc70-lV50C2zK9IeTjV_E', userName: 'Ayush Rajawat', score: 5, text: 'This is an amazing and horror survival escape game which is totally free. The best part is the design of this app and amazing features of the horror house and the graphics are too realistic to get scared and very attractive sound to keep engaged with game. Highly recommend it' },
  { id: 'gp:AOqpTOF-1Xy7lK_Q08-oN0mR0uK7IuU', userName: 'Ansh Sharma', score: 5, text: 'I never expected such high quality graphics and immersive storyline. Genuinely surprised. Must try.' },
  { id: 'gp:AOqpTOGfL9S_yJ7f5H1a8lTzR2dJc1A', userName: 'Harsh Vijayvargiya', score:5, text: 'The Best horror game ever made for android devices 🔥 The game looks soo realistic in terms of visuals as well as horror jump-scares... Would highly recommend to all my friends!! Good work keep it up' },
  { id: 'gp:AOqpTOEUzU_uJ5lI8b6d0cO5S9B', userName: 'Harendra Prajapati', score: 5, text: 'This is the great survival horror game on mobile with great story line, I highly recommended to all download and enjoy the best escape game. Awesome design and features and graphics are too realistic.' },
  { id: 'gp:AOqpTOFaU9qC2qW5rA1qFzR0fS6C', userName: 'Bhanu Pratap Singh Chouhan', score: 5, text: 'Just one word- MASTERPIECE!! Such an amazing story line up along with such beautiful and smooth controls, best story game i played since a long long time on playstore' },
  { id: 'gp:AOqpTOG_x8w1J4wL9pU3lE2uB7wQ', userName: 'Prince Singh', score: 5, text: 'The atmosphere in this game is top-notch. It really keeps you on the edge of your seat. One of the best horror experiences on mobile.' },
  { id: 'gp:AOqpTOFn5eY6n7D1aK3cT7lF9gR_wU', userName: 'Nikhil Vyas', score: 5, text: 'Nice story. Keep me hooked up for many days' },
  { id: 'gp:AOqpTOEAx2y6z3cM8mD5gP9uV1kF8', userName: 'Jatin Sain', score: 5, text: 'Awesome graphics with such a great and mysterious storyline. Highly recommend to everyone.!' },
];

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            console.log("Attempting to fetch reviews..."); // <-- DEBUGGING
            const appId = 'com.easewin.wordhunt';
            const apiUrl = `/googleplay/store/getreviews?id=${appId}&hl=en&showAllReviews=true&sort=1&num=50`;

            try {
                const response = await axios.get(apiUrl);
                console.log("SUCCESS: Received a response from the proxy!", response); // <-- DEBUGGING

                const reviewsData = JSON.parse(response.data.substring(4));
                const rawReviews = reviewsData[0][2];
                
                if (rawReviews && rawReviews.length > 0) {
                    const goodReviews = rawReviews
                        .map(r => ({ id: r[0], userName: r[1][0], text: r[4], score: r[2] }))
                        .filter(r => r.score >= 4 && r.text && r.text.length > 10);
                    
                    console.log(`Found ${goodReviews.length} good reviews.`); // <-- DEBUGGING
                    setReviews(goodReviews.sort(() => 0.5 - Math.random()).slice(0, 8));
                } else {
                    console.log("No raw reviews found in response. Using samples."); // <-- DEBUGGING
                    setReviews(sampleTestimonials);
                }
            } catch (error) {
                console.error("CRITICAL ERROR fetching reviews. Using fallback data.", error); // <-- DEBUGGING
                setReviews(sampleTestimonials);
            }
        };
        fetchReviews();
    }, []);

    const displayReviews = (reviews.length > 0 ? reviews : sampleTestimonials);
    const duplicatedTestimonials = [...displayReviews, ...displayReviews];

    return (
        <section id="testimonials" className="py-20 overflow-hidden bg-card-bg">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-12 text-white">
                What Our Players Are Saying
            </h2>
            <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-marquee group-hover:pause-animation whitespace-nowrap">
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <div key={`${testimonial.id}-${index}-a`} className="mx-4 w-80 lg:w-96 flex-shrink-0 bg-dark-bg p-6 rounded-2xl border border-white/10 shadow-lg">
                            <div className="flex items-center mb-3">
                                {[...Array(5)].map((_, i) => <Star key={i} size={18} className={i < testimonial.score ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'} />)}
                            </div>
                            <p className="text-lg text-light-gray italic">"{testimonial.text}"</p>
                            <p className="mt-4 text-right font-bold text-brand-purple-light">- {testimonial.userName}</p>
                        </div>
                    ))}
                </div>
                <div className="absolute top-0 flex animate-marquee group-hover:pause-animation whitespace-nowrap">
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <div key={`${testimonial.id}-${index}-b`} className="mx-4 w-80 lg:w-96 flex-shrink-0 bg-dark-bg p-6 rounded-2xl border border-white/10 shadow-lg">
                           <div className="flex items-center mb-3">
                                {[...Array(5)].map((_, i) => <Star key={i} size={18} className={i < testimonial.score ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'} />)}
                            </div>
                            <p className="text-lg text-light-gray italic">"{testimonial.text}"</p>
                            <p className="mt-4 text-right font-bold text-brand-purple-light">- {testimonial.userName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Testimonials;