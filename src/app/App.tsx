import img1920WDefault from "figma:asset/4eebdd601c1a469ded14781a69827d9cd4367b62.png";
import imgDelhiveryProjectInterface from "figma:asset/8feb5467e21bf116abf48f8baabdc7c0f0c01b81.png";
import imgRosterRevampInterface from "figma:asset/07efa5bc3ee578f48ab159b1a3b04b779771c1e6.png";
import imgJeganathanProfilePhoto from "figma:asset/27a131bbfd9af23b021851070228ff3084074bb5.png";

export default function App() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen" style={{ backgroundImage: `url('${img1920WDefault}'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)` }}>
      {/* Navigation */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 backdrop-blur-[5px] bg-[rgba(255,255,255,0.8)] rounded-[30px] px-[21px] py-[11px] border border-[#ddd]">
        <div className="flex gap-[34px] items-center font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold text-[12px] tracking-[1px] text-[#333]">
          <button onClick={() => handleScroll('home')} className="cursor-pointer hover:opacity-70 transition-opacity">
            HOME
          </button>
          <button onClick={() => handleScroll('works')} className="cursor-pointer hover:opacity-70 transition-opacity">
            WORKS
          </button>
          <button onClick={() => handleScroll('about')} className="cursor-pointer hover:opacity-70 transition-opacity">
            ABOUT ME
          </button>
          <button onClick={() => handleScroll('connect')} className="cursor-pointer hover:opacity-70 transition-opacity">
            CONNECT
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-[165px] pb-[62px]">
        <div className="max-w-[800px] w-full flex flex-col items-center relative">
          {/* Height Lines */}
          <div className="absolute inset-0 flex flex-col justify-between opacity-50 pointer-events-none">
            {[177, 177, 172, 172, 168, 168, 164, 164, 160, 160, 156, 156, 152, 152, 148, 148, 144, 144, 140, 140, 136, 136, 132, 132, 128, 128, 124, 124, 120, 120, 116, 116].map((height, index) => (
              <div key={index} className="border-b border-[#ccc] px-5 pb-[3px] pt-[2px]">
                <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[14px] text-[#656561]">{height}</p>
              </div>
            ))}
          </div>

          {/* Profile Photo */}
          <div className="relative w-[500px] h-[551px] mb-[-48px] z-10">
            <img alt="Jeganathan Profile" className="w-full h-full object-cover" src={imgJeganathanProfilePhoto} />
          </div>

          {/* ID Plate */}
          <div className="relative -mb-[48px] z-10">
            <div className="-rotate-1 bg-[#111] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.3)] px-[40px] py-[20px]">
              <div className="w-[287px]">
                <div className="border-b border-[#444] pb-[6px] text-center">
                  <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[12px] tracking-[3px] text-white">CHARGE</p>
                </div>
                <h1 className="mt-[30px] font-['Pretendard_Variable:Bold',sans-serif] font-bold text-[40px] tracking-[2px] text-white text-center">
                  JEGANATHAN
                </h1>
                <h2 className="mt-[18px] font-['Pretendard_Variable:Bold',sans-serif] font-bold text-[18px] text-white text-center opacity-80">
                  PRODUCT DESIGNER
                </h2>
                <div className="mt-[21px] border-b border-[#444] pb-[6px] text-center">
                  <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[12px] tracking-[3px] text-white">DESIGN CRIMES</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Tags */}
          <div className="absolute top-[29%] left-[10%] -rotate-5 z-20">
            <div className="bg-[#fd5f0f] px-5 py-3 shadow-lg hover:scale-105 transition-transform cursor-pointer">
              <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold text-[24px] text-white whitespace-nowrap">이력서 보기</p>
            </div>
          </div>

          <div className="absolute top-[35%] right-[10%] rotate-5 z-20">
            <div className="bg-[#fd5f0f] px-5 py-3 shadow-lg hover:scale-105 transition-transform cursor-pointer">
              <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold text-[12px] text-white whitespace-nowrap">WORK HISTORY 📄</p>
            </div>
          </div>

          {/* Crime Zone Banner */}
          <div className="absolute top-[35%] left-0 right-0 rotate-2 z-0">
            <div className="bg-[#ffd700] border-t-4 border-b-4 border-black py-[14px] overflow-hidden">
              <div className="flex whitespace-nowrap animate-scroll">
                <p className="font-['Pretendard_Variable:Black',sans-serif] font-black text-[24px] text-black px-8">
                  LET'S DO CRIMES TOGETHER 🔥 LET'S DO CRIMES TOGETHER 🔥 LET'S DO CRIMES TOGETHER 🔥 LET'S DO CRIMES TOGETHER 🔥
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crime Zone Ticker */}
      <div className="bg-[#ffd700] border-t-4 border-b-4 border-black py-[14px] overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          {[...Array(6)].map((_, i) => (
            <p key={i} className="font-['Pretendard_Variable:Black',sans-serif] font-black text-[24px] text-black px-8">
              CRIME ZONE + CRIME ZONE + CRIME ZONE + CRIME ZONE + CRIME ZONE +
            </p>
          ))}
        </div>
      </div>

      {/* Works Section */}
      <section id="works" className="max-w-[1200px] mx-auto px-5 py-20">
        <div className="space-y-32">
          {/* Work Card 1 - Delhivery */}
          <div className="bg-white rounded-[20px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)] p-10 flex gap-10 hover:shadow-[0px_10px_30px_0px_rgba(0,0,0,0.1)] transition-shadow">
            <div className="flex-1">
              <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[16px] text-[#656561] mb-2">
                03/14/2021
              </p>
              <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[16px] text-[#656561] mb-4">
                DELHIVERY
              </p>
              <h3 className="font-['Pretendard_Variable:Bold',sans-serif] font-bold text-[18.7px] text-[#656561] mb-4">
                Improving the Delhivery intracity checkout experience
              </h3>
              <div className="flex gap-1 mb-4">
                <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[16px] text-[#656561]">
                  16% → 8%
                </p>
                <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[16px] text-[#656561]">
                  Reduction in cancellations(Expected)
                </p>
              </div>
              <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[16px] text-[#656561]">
                Under NDA. Lets connect to discuss 👀 🤫
              </p>
            </div>
            <div className="flex-1">
              <img 
                src={imgDelhiveryProjectInterface} 
                alt="Delhivery Project Interface" 
                className="w-full rounded-[10px]"
              />
            </div>
          </div>

          {/* Work Card 2 - Roster Revamp */}
          <div className="bg-white rounded-[20px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)] p-10 flex gap-10 hover:shadow-[0px_10px_30px_0px_rgba(0,0,0,0.1)] transition-shadow">
            <div className="flex-1">
              <h3 className="font-['Pretendard_Variable:Bold',sans-serif] font-bold text-[18.7px] text-[#656561] mb-4">
                Roster Revamp: From Chaos to Control!
              </h3>
              <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[16px] text-[#656561] mb-4">
                Improved our "Roster" product to achieve market standards by<br />
                improving overall UI & UX
              </p>
              <div className="space-y-2">
                <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[16px] text-[#656561]">
                  8+ New client acquired
                </p>
                <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[16px] text-[#656561]">
                  86% Reduced support tickets
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src={imgRosterRevampInterface} 
                alt="Roster Revamp Interface" 
                className="w-full rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Petty Cases Ticker */}
      <div className="bg-[#ffd700] border-t-4 border-b-4 border-black py-[14px] overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          {[...Array(6)].map((_, i) => (
            <p key={i} className="font-['Pretendard_Variable:Black',sans-serif] font-black text-[24px] text-black px-8">
              PETTY CASES + PETTY CASES + PETTY CASES + PETTY CASES + PETTY CASES +
            </p>
          ))}
        </div>
      </div>

      {/* About & Connect Sections (placeholders) */}
      <section id="about" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-['Pretendard_Variable:Bold',sans-serif] font-bold text-[48px] text-[#333] mb-4">About Me</h2>
          <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[18px] text-[#656561] max-w-2xl mx-auto">
            A passionate product designer creating innovative solutions and committing design crimes along the way.
          </p>
        </div>
      </section>

      <section id="connect" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-['Pretendard_Variable:Bold',sans-serif] font-bold text-[48px] text-[#333] mb-8">Let's Connect</h2>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#fd5f0f] text-white font-['Pretendard_Variable:Bold',sans-serif] font-bold px-8 py-4 rounded-lg hover:bg-[#e55509] transition-colors">
              Email Me
            </button>
            <button className="bg-[#111] text-white font-['Pretendard_Variable:Bold',sans-serif] font-bold px-8 py-4 rounded-lg hover:bg-[#333] transition-colors">
              LinkedIn
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
