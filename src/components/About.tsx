import { Lightbulb, Rocket, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-viz-orange" />,
      title: "Learn from Experts",
      desc: "Industry professionals with real experience."
    },
    {
      icon: <Rocket className="w-8 h-8 text-viz-orange" />,
      title: "Hands-on Projects",
      desc: "Portfolio-ready practical projects step by step."
    },
    {
      icon: <Award className="w-8 h-8 text-viz-orange" />,
      title: "Career Growth",
      desc: "Upgrade your skills and get hired."
    },
    {
      icon: <Users className="w-8 h-8 text-viz-orange" />,
      title: "Vibrant Community",
      desc: "Connect, collaborate and grow together."
    }
  ];

  return (
    <section id="about" className="py-section bg-white">
      <div className="max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column */}
        <div className="animate-fade-up">
          <p className="text-viz-orange font-bold text-sm tracking-widest uppercase mb-4">
            About Us
          </p>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.2] mb-6">
            Education that <br />
            empowers <span className="text-viz-orange">creators.</span>
          </h2>
          <p className="text-viz-gray text-lg max-w-md leading-relaxed">
            At Viz Academy, we believe creativity can shape the future. 
            Our mission is to provide world-class education that empowers anyone to learn, create, and grow.
          </p>
        </div>

        {/* Right Column - Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 animate-fade-up delay-200">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-viz-orange/10 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:bg-viz-orange/20">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-viz-black mb-2">{feature.title}</h3>
                <p className="text-viz-gray text-base">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
