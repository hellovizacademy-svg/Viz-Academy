import { Play } from 'lucide-react';
import workspaceEditor from '../assets/workspace_editor.png';

const Hero = () => {
  return (
    <section className="min-h-screen bg-viz-black flex items-center pt-[80px] overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column */}
        <div className="text-white z-10 animate-fade-up">
          <p className="text-viz-orange font-bold text-sm tracking-widest uppercase mb-6">
            Learn. Create. Inspire.
          </p>
          <h1 className="text-[36px] md:text-[48px] lg:text-[72px] font-extrabold leading-[1.1] mb-8">
            MASTER CREATIVE SKILLS.<br />
            SHAPE <span className="text-viz-orange text-glow">YOUR FUTURE.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
            Industry-focused courses in Design, Video Editing, Motion Graphics and more. 
            Learn from experts and build real-world projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-viz-orange text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-[1.03] hover:box-glow w-full sm:w-auto text-center">
              Explore Courses →
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2 w-full sm:w-auto">
              <Play className="w-5 h-5" />
              Watch Intro
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative z-10 animate-fade-up delay-200">
          {/* Abstract Polygon Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-viz-orange/20 rounded-full blur-[2px] -z-10 animate-pulse"></div>
          <div className="absolute top-1/4 -right-10 w-64 h-64 bg-viz-orange/20 rounded-full blur-[80px] -z-10"></div>
          
          {/* Main Image Card */}
          <div className="relative rounded-[24px] overflow-hidden box-glow border border-white/10 group">
            <img 
              src={workspaceEditor} 
              alt="Creative Workspace" 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                <Play className="w-8 h-8 text-viz-orange ml-1 fill-viz-orange" />
              </button>
            </div>

            {/* Floating Icons */}
            <div className="absolute top-8 left-8 bg-blue-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-blue-500/50 text-blue-200 font-bold text-sm animate-[bounce_3s_infinite]">Pr</div>
            <div className="absolute bottom-12 right-8 bg-blue-600/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-blue-400/50 text-blue-100 font-bold text-sm animate-[bounce_4s_infinite]">Ps</div>
            <div className="absolute bottom-8 left-12 bg-purple-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-purple-500/50 text-purple-200 font-bold text-sm animate-[bounce_3.5s_infinite]">Ae</div>
            <div className="absolute top-12 right-12 bg-orange-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-orange-500/50 text-orange-200 font-bold text-sm animate-[bounce_4.5s_infinite]">Ai</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
