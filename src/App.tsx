import { useState, useRef } from 'react';
import {
  Play,
  BatteryCharging
} from 'lucide-react';
import hbtulogo from '../images/hmawbi _logo.png';
import haythi from '../images/haythi.png';
import thawtar from '../images/thawtar.png';
import zml from '../images/zml.png';
import thelthu from '../images/thelthu.png';
import tndmk from '../images/tndmk.JPG';
import shin from '../images/shin.png';
import shein from '../images/shein.png';
import hsu from '../images/hsu.png';
import car from '../images/car.png';
import hha from '../images/hha.png';
import demoVid from '../images/demo_vid.mp4';
import kkk from '../images/kkk.png';



// Custom SVG Icons for Software & Hardware devices
const Esp32CamIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <path d="M7 7h.01M17 7h.01M7 17h.01M17 17h.01" />
  </svg>
);

const MotorDriverIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="8" y="8" width="8" height="8" fill="currentColor" opacity="0.4" />
    <path d="M1 8h3M1 12h3M1 16h3M20 8h3M20 12h3M20 16h3M8 1v3M12 1v3M16 1v3M8 20v3M12 20v3M16 20v3" />
  </svg>
);



const ServoMotorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="9" width="18" height="10" rx="2" />
    <circle cx="8.5" cy="14" r="3" />
    <path d="M8.5 11L14.5 5m0 0l3 3m-3-3l-2.5 2.5" strokeWidth="2.5" />
    <circle cx="17" cy="12" r="1" fill="currentColor" />
  </svg>
);

const DcMotorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="7" />
    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    <path d="M12 1v4M12 19v4M1 12h4M19 12h4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
  </svg>
);

const BuckConverterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const ArduinoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z" />
    <path d="M17.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z" />
    <path d="M5 10.5h3M16 10.5h3M17.5 9v3" />
  </svg>
);

const WebStackIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const PythonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.898 0C5.72 0 6.1 2.686 6.1 2.686l.007 2.784h5.884v.835H3.722S0 5.867 0 12.083c0 6.216 3.243 5.972 3.243 5.972h1.932v-2.73s-.103-3.262 3.21-3.262h5.513s3.076.05 3.076-2.983V3.251S17.472 0 11.898 0zM8.707 1.836a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1zm3.395 22.164c6.178 0 5.798-2.686 5.798-2.686l-.007-2.784h-5.884v-.835h8.267S24 18.133 24 11.917c0-6.216-3.243-5.972-3.243-5.972h-1.932v2.73s.103 3.262-3.21 3.262H10.1s-3.076-.05-3.076 2.983v5.932S6.528 24 12.102 24zm3.191-1.836a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z"/>
  </svg>
);

const PostgresSqlIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.97 2c-3.14 0-5.88 1.42-7.56 3.7-.82-.28-1.75-.17-2.46.36-.88.66-1.28 1.76-1.03 2.82C.36 10.02 0 11.23 0 12.5c0 5.25 4.25 9.5 9.5 9.5 3.32 0 6.27-1.7 8.01-4.29.62.19 1.3.18 1.95-.06 1.06-.39 1.83-1.3 1.97-2.42C22.86 13.8 24 11.53 24 9c0-3.87-5.37-7-12.03-7zm-4.47 5c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25S6.81 7 7.5 7zm4.47 13c-4.14 0-7.5-3.36-7.5-7.5 0-.82.14-1.61.39-2.35.48.51 1.15.85 1.9.85 1.38 0 2.5-1.12 2.5-2.5 0-.25-.04-.49-.11-.72 1.03-.49 2.19-.78 3.42-.78 3.87 0 7 3.13 7 7s-3.13 7-7 7z"/>
  </svg>
);

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const hardwareDevices = [
    {
      name: 'ESP32 CAM module',
      icon: Esp32CamIcon,
      description: 'Rover ၏ ပင်မ Controller အဖြစ် အသုံးပြုပြီး Wi-Fi မှတဆင့် မော်တာများကို ထိန်းချုပ်ခြင်းနှင့် Real-time Video Stream ပေးပို့ခြင်းတို့အတွက် အဓိက အသုံးပြုပါသည်။'
    },
    {
      name: 'L298 Motor Driver',
      icon: MotorDriverIcon,
      description: 'ESP32 CAM မှ ပေးပို့သော Control Signal များကို လက်ခံ၍ DC Motor များ၏ လှည့်ပတ်မှု လမ်းကြောင်းနှင့် အမြန်နှုန်းကို မောင်းနှင်ပေးသည့် H-Bridge Motor Driver ဖြစ်ပါသည်။'
    },
    {
      name: 'Servo Motors',
      icon: ServoMotorIcon,
      description: 'ESP32-CAM Camera ကို လိုအပ်သော ထောင့်ချိုးအတိုင်း အနီးကပ် သို့မဟုတ် အထက်/အောက် တိကျစွာ လှည့်ပတ်ကြည့်ရှုနိုင်စေရန် အသုံးပြုပါသည်။ ဒီ project မှာတော့ အထက်/အောက် vertical tilt servo တလုံးဘဲသုံးထားသည်။'
    },
    {
      name: 'DC Motors',
      icon: DcMotorIcon,
      description: 'Rover ၏ ဘီးများကို အားကောင်းစွာ လှည့်ပတ်မောင်းနှင်၍ ရှေ့၊ နောက်၊ ဘယ်၊ ညာ ချောမွေ့စွာ သွားလာနိုင်စေရန် အသုံးပြုသော Gear Motors မျာဖြစ်ပါသည်။'
    },
    {
      name: 'Li-ion Battery Pack',
      icon: BatteryCharging,
      description: 'Rover စနစ်တစ်ခုလုံး (ESP32-CAM၊ Motor Driver နှင့် Motors များ) လည်ပတ်နိုင်ရန် လိုအပ်သော တည်ငိမ်သည့် လျှပ်စစ်ပါဝါကို သိုလှောင် ထောက်ပံ့ပေးပါသည်။'
    },
    {
      name: 'Buck Converter',
      icon: BuckConverterIcon,
      description: 'Battery Pack မှ ထွက်ရှိသော မြင့်မားသည့် ဗို့အားကို ESP32-CAM နှင့် အခြား Sensitive Electronic Subsystems များအတွက် သင့်လျော်သည့် 5V တည်ငြိမ်ဗို့အားသို့ လျှော့ချပေးပါသည်။'
    },
    {
      name: 'FTDI Programmer',
      icon: MotorDriverIcon,
      description: 'FTDI Programmer သည် ကွန်ပျူတာမှ USB အချက်ပြလှိင်းများကို မိုက်ခရိုကွန်ထရိုလာများ နားလည်သော Serial (UART) ဒေတာအဖြစ် ပြောင်းလဲပေးသည်။'
    }
  ];

  const softwareDevices = [
    {
      name: 'HTML,CSS,JavaScript',
      icon: WebStackIcon,
      description: 'Rover ၏ Web Dashboard Interface ကို ရေးဆွဲတည်ဆောက်ရန်နှင့် Live Video Stream ကို Browser မှတဆင့် ကြည့်ရှု ထိန်းချုပ်နိုင်ရန် အသုံးပြုထားပါသည်။'
    },
    {
      name: 'Python',
      icon: PythonIcon,
      description: 'Rover ၏ Server-side Processing, Data Processing သို့မဟုတ် Image / Video Processing လုပ်ငန်းစဉ်များအတွက် အသုံးပြုထားပါသည်။'
    },
    {
      name: 'Arduino IDE',
      icon: ArduinoIcon,
      description: 'Arduino IDEသည် ESP32-CAM ကို ပရိုဂရမ်ရေးသားပြီး ညွှန်ကြားချက်များ ပေးပို့နိုင်ရန် အသုံးပြုသော IDE တစ်ခုဖြစ်ပါသည်။'
    },
    {
      name: 'Postgres SQL',
      icon: PostgresSqlIcon,
      description: 'Rover ၏ Video များ၊ User metadata များနှင့် Data သိုလှောင်မှုများကို စနစ်တကျ သိမ်းဆည်းရန်နှင့် Backend API နှင့် ချိတ်ဆက် အသုံးပြုနိုင်ရန် PostgreSQL Database ကို အသုံးပြုထားပါသည်။'
    }
  ];

  const teamMembers: TeamMember[] = [
    { id: 1, name: 'Shein Phyo Maung Maung', role: 'Tech Lead', image: shein },
    { id: 2, name: 'Htun Htun Aung', role: 'Backend developer', image: hha },
    { id: 3, name: 'Shin Thant Wai Lin', role: 'Hardware Assembler', image: shin },
    { id: 6, name: 'Haythi Min Soe', role: 'Frontend developer', image: haythi },
    { id: 7, name: 'Zin Moe Lwin', role: 'Hardware Assembler', image: zml },
    { id: 8, name: 'Thel Thu Thu Htun', role: 'Project Designer', image: thelthu },
    { id: 9, name: 'Thawtar Swe Zin', role: 'Project Designer', image: thawtar },
    { id: 10, name: 'Khin Khin Kyaw', role: 'Researcher', image: kkk },
    { id: 4, name: 'Hsu Pyae', role: 'Researcher', image: hsu },
    { id: 5, name: 'Thant Nadi Moe Khin', role: 'Researcher', image: tndmk }
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a0a0c] text-gray-100 flex flex-col items-center justify-start font-sans selection:bg-[#FFD700] selection:text-black">

      {/* Main Content Area */}
      <main className="w-full flex-grow space-y-20 sm:space-y-24 pb-24 flex flex-col items-center">

        {/* ==================== 1. OVERVIEW / HERO SECTION ==================== */}
        <section id="overview" className="w-full relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-20 lg:pb-32 bg-grid-pattern bg-radial-glow border-b border-[#1f1f2a] flex justify-center">
          <div className="w-full max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

              {/* Left Column: Text & Badges */}
              <div className="lg:col-span-4 space-y-6 ml-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FFD700] tracking-tight font-['Orbitron'] leading-tight">
                  <span className="text-[#FFD700] text-glow-yellow">S</span><span className="text-white">mart</span> <br />
                  <span className="text-[#FFD700] text-glow-yellow">S</span><span className="text-white">urveillance</span> <br />
                  <span className="text-[#FFD700] text-glow-yellow">R</span><span className="text-white">over</span>
                </h1>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
                  SSR is a wifi-controlled robot car with a camera available for real time live-streaming and video recording, like a mini moving CCTV.
                </p>
              </div>

              {/* Right Column: Hero Video */}
              <div className="lg:col-span-8 w-full flex flex-col items-center justify-center pt-6 sm:pt-10 lg:pt-14 mt-8 sm:mt-12 lg:mt-16 px-4 sm:px-8 lg:px-4">
                <div className="w-[90%] sm:w-[85%] lg:w-full max-w-xl lg:max-w-2xl mx-auto relative aspect-video rounded-2xl overflow-hidden border-2 border-[#FFD700]/40 shadow-[0_0_35px_rgba(255,215,0,0.2)] bg-[#121218] group">
                  <video
                    ref={videoRef}
                    src={demoVid}
                    controls
                    preload="metadata"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    className="w-full h-full object-cover"
                  />

                  {!isPlaying && (
                    <div
                      onClick={handlePlay}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors z-10 cursor-pointer"
                    >
                      <button className="w-20 h-20 rounded-full bg-[#FFD700] text-black flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_#FFD700]">
                        <Play className="w-8 h-8 fill-black ml-1" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
        <br /><br />

        {/* ==================== 2. ABOUT OUR PROJECT CARD ==================== */}
        <section id="about" className="w-full my-12 sm:my-16 flex justify-center px-4 sm:px-6 lg:px-8">
          <div
            className="w-full max-w-7xl bg-[#13131c] border border-[#252535] hover:border-[#FFD700]/50 rounded-3xl space-y-8 shadow-2xl transition-all duration-300"
            style={{ padding: '3rem 2.5rem' }}
          >
            <div className="border-b border-[#222232] pb-6 pt-2">
              <div className="w-full">
                <h2 className="text-3xl mb-3 sm:text-4xl font-extrabold font-['Orbitron'] text-white text-center">
                  About our project
                </h2>
              </div>
            </div>
            <br />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-12 space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-sans">
                <p>
               ဒီ project မှာ အဓိကကားမောင်းနိုင်ဖိုအတွက် L298N motor driver နှင့် dc motors များကိုသုံးထားပါသည်။ Video recording အတွက်သီးသန့် camera မတပ်ဘဲ camera module ပါပြီးသား ESP32 ကိုဘဲသုံးထားပါသည်။ ကားမောင်းဖိုအတွက် code ကို Arduino IDE မှာ C++ နဲ့ရေးထားပီး virtual controller နဲ့ live stream, video recording လုပ်မည့်web page အတွက်ကို VScode မှာဘဲ html,css,javascriptသုံးပီးရေးထားသည်။ Video များကိုသိမ်းဆည်းဖိုအတွက် Database ကို Postgres SQL သုံးထားပီး ၊ frontend နှင့် database ချိတ်ဆက်မိဖို HTTP API လိုသည့်အတွက် backend ကို Python သုံးပြီးချိတိထားပါသည်။ ကားမောင်းဖိုဆိုလျှင်-
 <br />(1)ESP32 မှ hotspot လွှင့်ထားသော wifi ကိုချိတ်ပါ (Name - Pio) ,wifi passwordကိုရိုက်ပါ
 <br />(2)ဒီ URL link 127.0.01:8000 ကို copy ပြီး browser မှာrunလိုက်ပါ။ web page တခုပေါ်လာပီး Username: ** , Password:**, Car ID:****, ကိုကြိုက်နှစ်သက်ရာထည့်လိုက်ပြီးရင် controller ပါတဲ့ page ရှိရောက်ရှိသွားပြီး ကားကိုထိန်းချုပ်မောင်းနှင်နိုင်ပါပြီ။
                </p>
              </div>

              {/* Project Image - Centered */}
              <div className="lg:col-span-12 w-full flex justify-center items-center pt-4">
                <div className="w-full max-w-2xl bg-[#0b0b10] border border-[#252535] hover:border-[#FFD700]/50 rounded-2xl p-4 shadow-xl transition-all">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-black/60 border border-[#222232] flex items-center justify-center">
                    <img
                      src={car}
                      alt="Smart Surveillance Rover Car"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br /><br />

        {/* ==================== 3. HARDWARE DEVICES SECTION ==================== */}
        <section id="hardware-devices" className="w-full my-12 sm:my-16 flex justify-center px-4 sm:px-6 lg:px-8">
          <div
            className="w-full max-w-7xl bg-[#13131c] border border-[#252535] hover:border-[#FFD700]/50 rounded-3xl shadow-2xl transition-all duration-300"
            style={{ padding: '3rem 2.5rem' }}
          >
            <div className="border-b border-[#222232] pb-8 pt-4 text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Orbitron'] text-white">
                အသုံးပြုထားသော Hardware အပိုင်းများ
              </h2>
            </div>
            <br />
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              style={{ gap: '2rem' }}
            >
              {hardwareDevices.map((device, idx) => {
                const IconComponent = device.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#0b0b10] border border-[#252535] hover:border-[#FFD700]/70 rounded-2xl transition-all duration-300 space-y-5 group hover:-translate-y-1 shadow-xl flex flex-col justify-between"
                    style={{ padding: '2.5rem' }}
                  >
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-[#1e1c10] border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-colors mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-['Orbitron'] text-white group-hover:text-[#FFD700] transition-colors leading-snug">
                        {device.name}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans pt-2">
                        {device.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <br /><br />

        {/* ==================== 4. SOFTWARE DEVICES SECTION ==================== */}
        <section id="software-devices" className="w-full my-12 sm:my-16 flex justify-center px-4 sm:px-6 lg:px-8">
          <div
            className="w-full max-w-7xl bg-[#13131c] border border-[#252535] hover:border-[#FFD700]/50 rounded-3xl shadow-2xl transition-all duration-300"
            style={{ padding: '3rem 2.5rem' }}
          >
            <div className="border-b border-[#222232] pb-8 pt-4 text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Orbitron'] text-white">
                အသုံးပြုထားသော Software များ
              </h2>
            </div>
            <br />
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              style={{ gap: '2rem' }}
            >
              {softwareDevices.map((device, idx) => {
                const IconComponent = device.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#0b0b10] border border-[#252535] hover:border-[#FFD700]/70 rounded-2xl transition-all duration-300 space-y-5 group hover:-translate-y-1 shadow-xl flex flex-col justify-between"
                    style={{ padding: '2.5rem' }}
                  >
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-[#1e1c10] border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-colors mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-['Orbitron'] text-white group-hover:text-[#FFD700] transition-colors leading-snug">
                        {device.name}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans pt-2">
                        {device.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <br /><br />

        {/* ==================== 5. OUR TEAM MEMBERS SECTION ==================== */}
        <section id="team" className="w-full my-12 sm:my-16 flex justify-center px-4 sm:px-6 lg:px-8">
          <div
            className="w-full max-w-7xl bg-[#13131c] border border-[#252535] hover:border-[#FFD700]/50 rounded-3xl shadow-2xl transition-all duration-300"
            style={{ padding: '3rem 2.5rem' }}
          >
            <div className="border-b border-[#222232] pb-8 pt-4 text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Orbitron'] text-white">
                Our Team Members
              </h2>
            </div>
            <br />

            
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
              style={{ gap: '2rem' }}
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-[#0b0b10] border border-[#252535] hover:border-[#FFD700]/70 rounded-2xl p-5 flex flex-col items-center text-center space-y-4 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
                  style={{ gap: '7px' }}
                >
                  {/* Team Member Image */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-[#181824] border-2 border-[#FFD700]/60 group-hover:border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.15)] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] flex items-center justify-center transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                     
                    />
                  </div>

                  {/* Member Name & Role */}
                  <div className="space-y-1"  style={{ marginBottom: '14px' }}>
                    <h3 className="text-base font-bold font-['Orbitron'] text-white group-hover:text-[#FFD700] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#FFD700] font-mono">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <br />
      {/* ==================== FOOTER ==================== */}
      <footer className="w-full border-t border-[#1f1f2a] bg-[#0b0b10] pt-8 pb-16 sm:pb-20 px-4 flex justify-center items-center">
        <div className="max-w-7xl w-full flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          


          {/* 3 khu */}
          <div className='flex flex-col justify-center items-center mt-[10px] gap-[8px]'>

            {/* TUHMB Logo */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center  overflow-hidden rounded-xl mt-4">
            <img src={hbtulogo} alt="TUHMB Logo" className="w-full h-full object-contain" />
          </div>

          {/* Footer Text */}
          <div className='flex flex-col justify-center items-center'>
            <div className="text-gray-300 text-sm sm:text-base font-sans tracking-wide">
            Project by <span className="text-[#FFD700] font-semibold font-['Orbitron']">Group-3 (4-BE IT) </span> | Technological University Hmawbi (TUHMB)
          </div>
          <div className="text-gray-300 text-sm sm:text-base font-sans tracking-wide flex justify-center">
           Contact Us - <span className="text-[#FFD700] font-semibold font-['Orbitron']">09972579229</span> 
          </div>
          </div>

          </div>
          

        </div>
      </footer>

    </div>
  );
}


