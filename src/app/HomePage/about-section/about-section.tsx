import { FaArrowRight, FaInfoCircle } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <div className="relative min-w-[320px] max-w-[2000px] bg-gradient-to-br from-[#f3e8ff] via-white to-[#e0e7ff] py-12 sm:py-16 lg:py-24 shadow-xl rounded-3xl overflow-hidden">
      
      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-0 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Single Image Column */}
          <div className="flex items-center justify-center relative">
            <img 
              src="/images/careerprofile.png" 
              alt="Team members" 
              className="w-full max-w-[500px] h-auto object-cover rounded-2xl shadow-2xl border-4 border-white animate-float"
            />
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#5b35b5] via-[#7c3aed] to-[#5b35b5] bg-clip-text text-transparent drop-shadow-md">
              We're just getting started
            </h2>
            <p className="text-[#464647] text-base sm:text-lg lg:text-xl leading-relaxed">
              Codekrafter is growing fast, and we are always looking for passionate, dynamic, and talented individuals to join our distributed team all around the world.
            </p>
            <p className="text-[#464647] text-base sm:text-lg lg:text-xl leading-relaxed">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 px-7 py-3 rounded-full bg-[#5b35b5] text-white font-semibold text-base shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-[#7c3aed] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#5b35b5]">
                <FaArrowRight className="text-lg" />
                Read our principles
              </button>
              <button className="flex items-center gap-2 px-7 py-3 rounded-full border-2 border-[#5b35b5] text-[#5b35b5] font-semibold text-base bg-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-[#f3e8ff] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#5b35b5]">
                <FaInfoCircle className="text-lg" />
                About us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}