export default function AboutSection() {
  return (
    <div className="min-w-[320px] max-w-[2000px] bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Single Image Column */}
          <div className="flex items-center justify-center">
            <img 
              src="/images/careerprofile.png" 
              alt="Team members" 
              className="w-full max-w-[500px] h-auto object-cover rounded-lg animate-float"
            />
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5b35b5]">
              Were just getting started
            </h2>
            <p className="text-[#464647] text-sm sm:text-base">
              Codekrafter is growing fast, and we are always looking for passionate, dynamic, and talented individuals to join our distributed team all around the world.
            </p>
            <p className="text-[#464647] text-sm sm:text-base">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-2.5 rounded-full bg-[#5b35b5] text-white transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                Read our principles
              </button>
              <button className="px-6 py-2.5 rounded-full border-2 border-[#5b35b5] text-[#5b35b5] transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                About us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}