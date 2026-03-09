import img1920WDefault from "figma:asset/4eebdd601c1a469ded14781a69827d9cd4367b62.png";
import imgDelhiveryProjectInterface from "figma:asset/8feb5467e21bf116abf48f8baabdc7c0f0c01b81.png";
import imgRosterRevampInterface from "figma:asset/07efa5bc3ee578f48ab159b1a3b04b779771c1e6.png";
import imgJeganathanProfilePhoto from "figma:asset/27a131bbfd9af23b021851070228ff3084074bb5.png";

function DivNavLinks() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.nav-links">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold gap-[34px] items-start leading-[0] pb-px pt-[4px] px-[15px] relative text-[#333] text-[12px] tracking-[1px] w-full whitespace-nowrap">
        <button className="cursor-pointer flex flex-col justify-center relative shrink-0 text-left">
          <p className="leading-[normal]">HOME</p>
        </button>
        <button className="cursor-pointer flex flex-col justify-center relative shrink-0 text-left">
          <p className="leading-[normal]">WORKS</p>
        </button>
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[normal]">ABOUT ME</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[normal]">CONNECT</p>
        </div>
      </div>
    </div>
  );
}

function NavNavContainer() {
  return (
    <div className="absolute backdrop-blur-[5px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-start left-[755.12px] px-[21px] py-[11px] rounded-[30px] top-[20px] w-[394.77px]" data-name="nav.nav-container">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <DivNavLinks />
    </div>
  );
}

function DivTickerItem() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] relative self-stretch shrink-0" data-name="div.ticker__item">
      <div className="flex flex-col font-['Pretendard_Variable:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="leading-[normal]">CRIME ZONE + CRIME ZONE + CRIME ZONE + CRIME ZONE + CRIME ZONE +</p>
      </div>
    </div>
  );
}

function DivTickerItem1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] relative self-stretch shrink-0" data-name="div.ticker__item">
      <div className="flex flex-col font-['Pretendard_Variable:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="leading-[normal]">CRIME ZONE + CRIME ZONE + CRIME ZONE + CRIME ZONE + CRIME ZONE +</p>
      </div>
    </div>
  );
}

function DivTicker() {
  return (
    <div className="h-[29px] relative shrink-0 w-full" data-name="div.ticker">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <DivTickerItem />
        <DivTickerItem1 />
      </div>
    </div>
  );
}

function DivTickerWrap() {
  return (
    <div className="absolute bg-[#ffd700] left-0 right-0 top-[951px]" data-name="div.ticker-wrap">
      <div className="content-stretch flex flex-col items-start overflow-clip py-[14px] relative rounded-[inherit] w-full">
        <DivTicker />
      </div>
      <div aria-hidden="true" className="absolute border-b-4 border-black border-solid border-t-4 inset-0 pointer-events-none" />
    </div>
  );
}

function H2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#656561] text-[18.7px] w-full">
        <p className="leading-[normal]">Improving the Delhivery intracity checkout experience</p>
      </div>
    </div>
  );
}

function DivStat() {
  return (
    <div className="content-stretch flex font-['Pretendard_Variable:Regular',sans-serif] font-normal gap-[4.01px] items-start leading-[0] relative shrink-0 text-[#656561] text-[16px] w-full whitespace-nowrap" data-name="div.stat">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal]">16% → 8%</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal]">Reduction in cancellations(Expected)</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[16px] w-full">
        <p className="leading-[normal]">Under NDA. Lets connect to discuss 👀 🤫</p>
      </div>
    </div>
  );
}

function DivWorkInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="div.work-info">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">DELHIVERY</p>
      </div>
      <H2 />
      <DivStat />
      <P />
    </div>
  );
}

function DelhiveryProjectInterface() {
  return (
    <div className="aspect-[520/611.5999755859375] relative rounded-[10px] shrink-0 w-full" data-name="Delhivery Project Interface">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDelhiveryProjectInterface} />
      </div>
    </div>
  );
}

function DivWorkImage() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="div.work-image">
      <DelhiveryProjectInterface />
    </div>
  );
}

function DivWorkCard() {
  return (
    <div className="bg-white content-stretch flex gap-[40px] h-[691.09px] items-start justify-center opacity-91 pb-[39.49px] pt-[40px] px-[40px] relative rounded-[20px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)] shrink-0 w-[1160px]" data-name="div.work-card">
      <DivWorkInfo />
      <DivWorkImage />
    </div>
  );
}

function H3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#656561] text-[18.7px] w-full">
        <p className="leading-[normal]">Roster Revamp: From Chaos to Control!</p>
      </div>
    </div>
  );
}

function P1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#656561] text-[16px] w-full">
        <p className="mb-0">Improved our “Roster” product to achieve market standards by</p>
        <p>{`improving overall UI & UX`}</p>
      </div>
    </div>
  );
}

function DivStat1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.stat">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[16px] w-full">
        <p className="leading-[normal]">8+ New client acquired</p>
      </div>
    </div>
  );
}

function DivStat2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.stat">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[16px] w-full">
        <p className="leading-[normal]">86% Reduced support tickets</p>
      </div>
    </div>
  );
}

function DivStats() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.stats">
      <DivStat1 />
      <DivStat2 />
    </div>
  );
}

function DivWorkInfo1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="div.work-info">
      <H3 />
      <P1 />
      <DivStats />
    </div>
  );
}

function RosterRevampInterface() {
  return (
    <div className="aspect-[520/390] relative rounded-[10px] shrink-0 w-full" data-name="Roster Revamp Interface">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRosterRevampInterface} />
      </div>
    </div>
  );
}

function DivWorkImage1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="div.work-image">
      <RosterRevampInterface />
    </div>
  );
}

function DivWorkCard1() {
  return (
    <div className="bg-white content-stretch flex gap-[40px] h-[470px] items-start justify-center opacity-31 p-[40px] relative rounded-[20px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)] shrink-0 w-[1160px]" data-name="div.work-card">
      <DivWorkInfo1 />
      <DivWorkImage1 />
    </div>
  );
}

function SectionWorks() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[129.84px] items-start left-1/2 max-w-[1200px] pb-[115.57px] pt-[54.59px] px-[20px] top-[1058px]" data-name="section#works">
      <DivWorkCard />
      <DivWorkCard1 />
    </div>
  );
}

function DivTickerItem2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] relative self-stretch shrink-0" data-name="div.ticker__item">
      <div className="flex flex-col font-['Pretendard_Variable:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="leading-[normal]">PETTY CASES + PETTY CASES + PETTY CASES + PETTY CASES + PETTY CASES +</p>
      </div>
    </div>
  );
}

function DivTickerItem3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] relative self-stretch shrink-0" data-name="div.ticker__item">
      <div className="flex flex-col font-['Pretendard_Variable:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="leading-[normal]">PETTY CASES + PETTY CASES + PETTY CASES + PETTY CASES + PETTY CASES +</p>
      </div>
    </div>
  );
}

function DivTicker1() {
  return (
    <div className="h-[29px] relative shrink-0 w-[2033.88px]" data-name="div.ticker">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <DivTickerItem2 />
        <DivTickerItem3 />
      </div>
    </div>
  );
}

function DivTickerWrap1() {
  return (
    <div className="absolute bg-[#ffd700] left-0 right-0 top-[2577.59px]" data-name="div.ticker-wrap">
      <div className="content-stretch flex flex-col items-start overflow-clip py-[14px] relative rounded-[inherit] w-full">
        <DivTicker1 />
      </div>
      <div aria-hidden="true" className="absolute border-b-4 border-black border-solid border-t-4 inset-0 pointer-events-none" />
    </div>
  );
}

function Span() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">177</p>
        </div>
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">177</p>
        </div>
      </div>
    </div>
  );
}

function Span2() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">172</p>
        </div>
      </div>
    </div>
  );
}

function Span3() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">172</p>
        </div>
      </div>
    </div>
  );
}

function Span4() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">168</p>
        </div>
      </div>
    </div>
  );
}

function Span5() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">168</p>
        </div>
      </div>
    </div>
  );
}

function Span6() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">164</p>
        </div>
      </div>
    </div>
  );
}

function Span7() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">164</p>
        </div>
      </div>
    </div>
  );
}

function Span8() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">160</p>
        </div>
      </div>
    </div>
  );
}

function Span9() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">160</p>
        </div>
      </div>
    </div>
  );
}

function Span10() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">156</p>
        </div>
      </div>
    </div>
  );
}

function Span11() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">156</p>
        </div>
      </div>
    </div>
  );
}

function Span12() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">152</p>
        </div>
      </div>
    </div>
  );
}

function Span13() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">152</p>
        </div>
      </div>
    </div>
  );
}

function Span14() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">148</p>
        </div>
      </div>
    </div>
  );
}

function Span15() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">148</p>
        </div>
      </div>
    </div>
  );
}

function Span16() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">144</p>
        </div>
      </div>
    </div>
  );
}

function Span17() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">144</p>
        </div>
      </div>
    </div>
  );
}

function Span18() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">140</p>
        </div>
      </div>
    </div>
  );
}

function Span19() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">140</p>
        </div>
      </div>
    </div>
  );
}

function Span20() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">136</p>
        </div>
      </div>
    </div>
  );
}

function Span21() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">136</p>
        </div>
      </div>
    </div>
  );
}

function Span22() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">132</p>
        </div>
      </div>
    </div>
  );
}

function Span23() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">132</p>
        </div>
      </div>
    </div>
  );
}

function Span24() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">128</p>
        </div>
      </div>
    </div>
  );
}

function Span25() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">128</p>
        </div>
      </div>
    </div>
  );
}

function Span26() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">124</p>
        </div>
      </div>
    </div>
  );
}

function Span27() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">124</p>
        </div>
      </div>
    </div>
  );
}

function Span28() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">120</p>
        </div>
      </div>
    </div>
  );
}

function Span29() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">120</p>
        </div>
      </div>
    </div>
  );
}

function Span30() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">116</p>
        </div>
      </div>
    </div>
  );
}

function Span31() {
  return (
    <div className="relative shrink-0 w-full" data-name="span">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[20px] relative w-full">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#656561] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">116</p>
        </div>
      </div>
    </div>
  );
}

function DivHeightLines() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_1.25px_0] items-start justify-between opacity-50" data-name="div.height-lines">
      <Span />
      <Span1 />
      <Span2 />
      <Span3 />
      <Span4 />
      <Span5 />
      <Span6 />
      <Span7 />
      <Span8 />
      <Span9 />
      <Span10 />
      <Span11 />
      <Span12 />
      <Span13 />
      <Span14 />
      <Span15 />
      <Span16 />
      <Span17 />
      <Span18 />
      <Span19 />
      <Span20 />
      <Span21 />
      <Span22 />
      <Span23 />
      <Span24 />
      <Span25 />
      <Span26 />
      <Span27 />
      <Span28 />
      <Span29 />
      <Span30 />
      <Span31 />
    </div>
  );
}

function JeganathanProfilePhoto() {
  return (
    <div className="h-[551.06px] max-w-[500px] mb-[-48.668px] relative shrink-0 w-[500px]" data-name="Jeganathan Profile Photo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgJeganathanProfilePhoto} />
      </div>
    </div>
  );
}

function SpanCharge() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pb-[6px] right-0 top-0" data-name="span.charge">
      <div aria-hidden="true" className="absolute border-[#444] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[3px] whitespace-nowrap">
        <p className="leading-[normal]">CHARGE</p>
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-[-0.01px] top-[30px]" data-name="h1">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-center text-white tracking-[2px] whitespace-nowrap">
        <p className="leading-[normal]">JEGANATHAN</p>
      </div>
    </div>
  );
}

function H1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 opacity-80 right-0 top-[88px]" data-name="h2">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">PRODUCT DESIGNER</p>
      </div>
    </div>
  );
}

function SpanCrimes() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pb-[6px] right-[-0.01px] top-[109.01px]" data-name="span.crimes">
      <div aria-hidden="true" className="absolute border-[#444] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[3px] whitespace-nowrap">
        <p className="leading-[normal]">DESIGN CRIMES</p>
      </div>
    </div>
  );
}

function DivPlateContent() {
  return (
    <div className="h-[129px] relative shrink-0 w-[287.794px]" data-name="div.plate-content">
      <SpanCharge />
      <H />
      <H1 />
      <SpanCrimes />
    </div>
  );
}

function DivIdPlate() {
  return (
    <div className="bg-[#111] content-stretch flex flex-col items-start px-[40px] py-[20px] relative shadow-[0px_10px_30px_0px_rgba(0,0,0,0.3)]" data-name="div.id-plate">
      <DivPlateContent />
    </div>
  );
}

function DivIdPlateCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-48.668px] pl-[214.65px] pr-[214.657px] relative shrink-0 w-[800px]" data-name="div.id-plate:css-transform">
      <div className="flex h-[175.392px] items-center justify-center relative shrink-0 w-[370.687px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "84" } as React.CSSProperties}>
        <div className="-rotate-1 flex-none">
          <DivIdPlate />
        </div>
      </div>
    </div>
  );
}

function AFloatingTag() {
  return (
    <div className="bg-[#fd5f0f] content-stretch flex flex-col items-start pb-[9.998px] pt-[11.999px] px-[20px] relative size-full" data-name="a.floating-tag">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] left-[52.52px] text-[24px] text-white top-[18.15px] whitespace-nowrap">
        <p className="leading-[normal]">이력서 보기</p>
      </div>
    </div>
  );
}

function AFloatingTag1() {
  return (
    <div className="bg-[#fd5f0f] content-stretch flex flex-col items-start pb-[9.994px] pt-[12.003px] px-[20px] relative size-full" data-name="a.floating-tag">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[normal]">WORK HISTORY 📄</p>
      </div>
    </div>
  );
}

function DivMugshotContainer() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[800px] pb-[48.668px] relative shrink-0 w-[800px]" data-name="div.mugshot-container">
      <DivHeightLines />
      <JeganathanProfilePhoto />
      <DivIdPlateCssTransform />
      <div className="absolute flex inset-[29.71%_61.84%_62.06%_9.86%] items-center justify-center">
        <div className="-rotate-5 flex-none h-[36px] w-[224.17px]">
          <AFloatingTag />
        </div>
      </div>
      <div className="absolute flex inset-[34.67%_9.84%_58.1%_71.47%] items-center justify-center">
        <div className="flex-none h-[36px] rotate-5 w-[146.92px]">
          <AFloatingTag1 />
        </div>
      </div>
    </div>
  );
}

function SectionHome() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 min-h-[901px] pb-[62.276px] pt-[165.47px] right-0 top-0" data-name="section#home">
      <DivMugshotContainer />
    </div>
  );
}

export default function Component1920WDefault() {
  return (
    <div className="bg-size-[4683.715667724609px_2634.590063095093px,auto_auto,auto_auto] bg-top-left relative size-full" data-name="1920w default" style={{ backgroundImage: `url('${img1920WDefault}'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)` }}>
      <NavNavContainer />
      <DivTickerWrap />
      <SectionWorks />
      <DivTickerWrap1 />
      <SectionHome />
    </div>
  );
}