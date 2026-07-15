import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { Star, Quote, X } from "lucide-react";

// Small multi-color Google "G" icon (inline SVG) — used to show these are
// Google-style reviews, no external asset needed.
const GoogleIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3C33.8 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
    />
    <path
      fill="#FF3D00"
      d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 7.1 29.5 5 24 5c-7.5 0-14 4.2-17.7 9.7z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.3 0 10.1-2 13.7-5.3l-6.3-5.3C29.4 35.4 26.8 36.3 24 36.3c-5.2 0-9.7-3.5-11.3-8.3l-6.5 5C9.9 39.6 16.4 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3c-1 2.8-2.9 5.2-5.4 6.8l6.3 5.3C39.9 37.5 44 31.5 44 24c0-1.3-.1-2.7-.4-3.5z"
    />
  </svg>
);

// Given a name, produces a nice consistent-colored initials avatar.
// No real photos needed — safe, fast, and looks clean.
const getAvatarUrl = (name) => {
  const colors = ["143D28", "D4AF37", "6B4226", "3C6E47", "8A6D3B"];
  const bg = colors[name.length % colors.length];
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=${bg}&color=fff&bold=true&size=128`;
};

const initialReviews = [
  {
    name: "Priya Patil",
    review:
      "Our wedding was beautifully organized. The lawn decoration, food and hospitality were simply outstanding.",
    rating: 5,
  },
  {
    name: "Rahul Deshmukh",
    review:
      "One of the best resorts in Latur. Rain dance and swimming pool were amazing for our family outing.",
    rating: 5,
  },
  {
    name: "Sneha Kulkarni",
    review: "Highly recommended for destination weddings and corporate events.",
    rating: 5,
  },
  {
    name: "Akshay Pawar",
    review: "The bonfire experience and luxury rooms exceeded our expectations.",
    rating: 4,
  },
  {
    name: "Vaibhav Joshi",
    review:
      "Very spacious parking and beautiful surroundings beside the Majara River.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !reviewText.trim()) return;

    const newReview = {
      name: name.trim(),
      review: reviewText.trim(),
      rating,
    };

    // New review goes on top so it's immediately visible
    setReviews((prev) => [newReview, ...prev]);

    // Reset form
    setName("");
    setReviewText("");
    setRating(5);
    setShowForm(false);
  };

  return (
    <section className="py-15 bg-[#FAF7F2]" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#143D28] mt-4">
            What Our Guests Say
          </h2>
 <p className="mt-3 text-gray-600">
             Trusted by hundreds of happy guests.
            Based on {reviews.length}+ Happy Guest Experiences
          </p>
         
        </div>

        {/* Rating */}
        <div className="flex flex-col items-center mt-10">
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-[#143D28]/10">
            <GoogleIcon size={22} />
            <h3 className="text-3xl font-bold text-[#D4AF37]">
              {avgRating.toFixed(1)} / 5
            </h3>
          </div>
           
         
        </div>

       
        {/* Slider */}
        <div className="mt-16">
          <Swiper
            key={reviews.length}
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={reviews.length > 3}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={`${item.name}-${index}`}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative bg-white rounded-[30px] shadow-2xl p-8 h-[340px]
                  flex flex-col justify-between border border-transparent
                  hover:border-[#D4AF37]/40 transition-all duration-300"
                >
                  {/* Decorative quote mark */}
                  <Quote
                    size={60}
                    className="absolute top-6 right-6 text-[#D4AF37]/10"
                    fill="#D4AF37"
                  />

                  {/* Stars */}
                  <div className="relative flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={18}
                        fill={item.rating >= star ? "#D4AF37" : "none"}
                        color="#D4AF37"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="relative text-gray-600 leading-8 mt-5 line-clamp-5">
                    "{item.review}"
                  </p>

                  {/* User */}
                  <div className="relative mt-6 flex items-center gap-4">
                    <img
                      src={getAvatarUrl(item.name)}
                      alt={item.name}
                      className="w-12 h-12 rounded-full ring-2 ring-[#D4AF37]/40 object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-[#143D28]">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 text-sm flex items-center gap-1">
                        <GoogleIcon size={13} /> Verified Guest
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>




 {/* Write a review CTA */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowForm((v) => !v)}
            className="group relative overflow-hidden rounded-full bg-[#143D28] px-7 py-3
            font-semibold text-white shadow-lg shadow-[#143D28]/20
            transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {showForm ? "Cancel" : "Write a Review"}
          </button>
        </div>

        {/* Review form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <form
                onSubmit={handleSubmit}
                className="mt-8 max-w-xl mx-auto bg-white rounded-3xl shadow-xl border border-[#143D28]/10 p-8"
              >
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-[#143D28] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Anjali Sharma"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3
                    focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-semibold text-[#143D28] mb-2">
                    Your Rating
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          size={26}
                          fill={(hoverRating || rating) >= star ? "#D4AF37" : "none"}
                          color="#D4AF37"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-[#143D28] mb-2">
                    Your Review
                  </label>
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Tell us about your experience..."
                    rows={4}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 resize-none
                    focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#D4AF37] px-6 py-3 font-semibold
                  text-[#143D28] shadow-lg shadow-[#D4AF37]/30 transition-all
                  duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  Submit Review
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Testimonials;