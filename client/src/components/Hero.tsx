// Using attached image
const profileImage = "/profile.png";

export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-gray-900">
              ANDILE MHLANGA
            </h1>
            <p className="text-xl text-gray-600 mb-8">Full-Stack Developer</p>
          </div>
          <div className="relative">
            <div className="relative w-full aspect-square bg-gray-100 grid-overlay rounded-lg overflow-hidden">
              <img 
                src={profileImage} 
                alt="Andile Mhlanga - Full-Stack Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}