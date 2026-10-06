import { useState } from 'react';
import {
  Cpu,
  Zap,
  Camera,
  Upload,
  Play,
  User
} from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
}

export default function App() {
  // Placeholders for 2 project pictures
  const [picture1, setPicture1] = useState<string>('/car1.png');
  const [picture2, setPicture2] = useState<string>('/car2.png');

  // Hero Video Placeholder state
  const [heroVideo, setHeroVideo] = useState<string | null>(null);

  // Team Member Photos state
  const [teamPhotos, setTeamPhotos] = useState<Record<number, string>>({});

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, pictureNum: 1 | 2) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (pictureNum === 1) setPicture1(url);
      else setPicture2(url);
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setHeroVideo(URL.createObjectURL(file));
    }
  };

  const handleTeamPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setTeamPhotos((prev) => ({ ...prev, [id]: url }));
    }
  };

  const hardwareDevices = [
    {
      name: 'ESP32 CAM module',
      icon: Cpu,
      description: 'Rover ၏ ပင်မ Controller အဖြစ် အသုံးပြုပြီး Wi-Fi မှတဆင့် မော်တာများကို ထိန်းချုပ်ခြင်းနှင့် Real-time Video Stream ပေးပို့ခြင်းတို့အတွက် အဓိက အသုံးပြုပါသည်။'
    },
    {
      name: 'L298 Motor Driver',
      icon: Cpu,
      description: 'ESP32 CAM မှ ပေးပို့သော Control Signal များကို လက်ခံ၍ DC Motor များ၏ လှည့်ပတ်မှု လမ်းကြောင်းနှင့် အမြန်နှုန်းကို မောင်းနှင်ပေးသည့် H-Bridge Motor Driver ဖြစ်ပါသည်။'
    },
    {
      name: 'Servo Motors',
      icon: Cpu,
      description: 'ESP32-CAM Camera ကို လိုအပ်သော ထောင့်ချိုးအတိုင်း အနီးကပ် သို့မဟုတ် ဘယ်/ညာ၊ အထက်/အောက် တိကျစွာ လှည့်ပတ်ကြည့်ရှုနိုင်စေရန် အသုံးပြုပါသည်။'
    },
    {
      name: 'DC Motors',
      icon: Cpu,
      description: 'Rover ၏ ဘီးများကို အားကောင်းစွာ လှည့်ပတ်မောင်းနှင်၍ ရှေ့၊ နောက်၊ ဘယ်၊ ညာ ချောမွေ့စွာ သွားလာနိုင်စေရန် အသုံးပြုသော Gear Motors မျာဖြစ်ပါသည်။'
    },
    {
      name: 'Li-ion Battery Pack',
      icon: Zap,
      description: 'Rover စနစ်တစ်ခုလုံး (ESP32-CAM၊ Motor Driver နှင့် Motors များ) လည်ပတ်နိုင်ရန် လိုအပ်သော တည်ငြိမ်သည့် လျှပ်စစ်ပါဝါကို သိုလှောင် ထောက်ပံ့ပေးပါသည်။'
    },
    {
      name: 'Buck Converter',
      icon: Zap,
      description: 'Battery Pack မှ ထွက်ရှိသော မြင့်မားသည့် ဗို့အားကို ESP32-CAM နှင့် အခြား Sensitive Electronic Subsystems များအတွက် သင့်လျော်သည့် 5V တည်ငြိမ်ဗို့အားသို့ လျှော့ချပေးပါသည်။'
    },
    {
      name: 'Arduino IDE(C++)',
      icon: Cpu,
      description: 'Arduino IDEသည် ESP32-CAM ကို ပရိုဂရမ်ရေးသားပြီး ညွှန်ကြားချက်များ ပေးပို့နိုင်ရန် အသုံးပြုသော IDE တစ်ခုဖြစ်ပါသည်။'
    },
    {
      name: 'HTML, CSS, JavaScript',
      icon: Zap,
      description: 'Rover ၏ Web Dashboard Interface ကို ရေးဆွဲတည်ဆောက်ရန်နှင့် Live Video Stream ကို Browser မှတဆင့် ကြည့်ရှု ထိန်းချုပ်နိုင်ရန် အသုံးပြုထားပါသည်။'
    },
    {
      name: 'Python',
      icon: Zap,
      description: 'Rover ၏ Server-side Processing, Data Processing သို့မဟုတ် Image / Video Processing လုပ်ငန်းစဉ်များအတွက် အသုံးပြုထားပါသည်။'
    }
  ];

  const teamMembers: TeamMember[] = [
    { id: 1, name: 'Shein Phyo Maung Maung', role: 'Hardware Assembler' },
    { id: 2, name: 'Htun Htun Aung', role: 'Software developer' },
    { id: 3, name: 'Shin Thant Wai Lin', role: 'Hardware Assembler' },
    { id: 4, name: 'Hsu Pyae', role: 'Researcher' },
    { id: 5, name: 'Thant Nadi Moe Khin', role: 'Researcher' },
    { id: 6, name: 'Haythi Min Soe', role: 'Software developer' },
    { id: 7, name: 'Zin Moe Lwin', role: 'Software developer' },
    { id: 8, name: 'Thel Thu Thu Htun', role: 'Software developer' },
    { id: 9, name: 'Thawtar Swe Zin', role: 'Designer' },
    { id: 10, name: 'Khin Khin Kyaw', role: 'Designer' }
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a0a0c] text-gray-100 flex flex-col items-center justify-start font-sans selection:bg-[#FFD700] selection:text-black">

      {/* Main Content Area */}
      <main className="w-full flex-grow space-y-20 sm:space-y-24 pb-24 flex flex-col items-center">

        {/* ==================== 1. OVERVIEW / HERO SECTION ==================== */}
        <section id="overview" className="w-full relative overflow-hidden pt-12 pb-20 bg-grid-pattern bg-radial-glow border-b border-[#1f1f2a] flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Left Column: Text & Badges */}
              <div className="lg:col-span-4 space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Orbitron'] leading-tight">
                  <span className="text-[#FFD700] text-glow-yellow">S</span>mart <br />
                  <span className="text-[#FFD700] text-glow-yellow">S</span>urveillance <br />
                  <span className="text-[#FFD700] text-glow-yellow">R</span>over
                </h1>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
                  SSR is a wifi-controlled robot car with a camera available for real time live-streaming, like a mini moving CCTV.
                </p>
              </div>

              {/* Right Column: Hero Video Placeholder with expanded width (lg:col-span-8) */}
              <div className="lg:col-span-8 relative my-8 sm:my-12">
                <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-[#FFD700]/40 shadow-[0_0_35px_rgba(255,215,0,0.2)] bg-[#121218] group flex flex-col items-center justify-center">
                  {heroVideo ? (
                    <video src={heroVideo} controls className="w-full h-full object-cover" />
                  ) : (
                    <>
                      {/* Video Background Image */}
                      <img
                        src="/robot_car_action.png"
                        alt="Video Demo Thumbnail"
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Center Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors z-10">
                        <label className="cursor-pointer w-20 h-20 rounded-full bg-[#FFD700] text-black flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_#FFD700]">
                          <Play className="w-8 h-8 fill-black ml-1" />
                          <input
                            type="file"
                            accept="video/*"
                            className="hidden"
                            onChange={handleVideoUpload}
                          />
                        </label>
                      </div>
                    </>
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
                  Smart Surveillance Rover သည် Wi-Fi ဖြင့် အဝေးမှထိန်းချုပ်နိုင်ပြီး Real-time Video Streaming ပြုလုပ်နိုင်သော Mobile Surveillance System ဖြစ်သည်။ ESP32-CAM ကို အသုံးပြု၍ Live Video ကြည့်ရှုနိုင်ပြီး L298N Motor Driver နှင့် TT Gear Motors ၄ လုံး ဖြင့် Rover ၏ ရှေ့၊ နောက်၊ ဘယ်၊ ညာ လှုပ်ရှားမှုများကို ထိန်းချုပ်နိုင်သည်။
                </p>
              </div>

              {/* Picture Placeholders */}
              <div className="lg:col-span-12 space-y-4 pt-4">
                <div
                  className="grid grid-cols-1 md:grid-cols-2"
                  style={{ gap: '2rem' }}
                >
                  {/* Placeholder 1 */}
                  <div
                    className="bg-[#0b0b10] border-2 border-dashed border-[#FFD700]/40 hover:border-[#FFD700] rounded-2xl space-y-4 transition-all group"
                    style={{ padding: '1.5rem' }}
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-black/60 border border-[#222232] flex flex-col items-center justify-center group/img">
                      {picture1 ? (
                        <>
                          <img src={picture1} alt="Project Placeholder 1" className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-3">
                            <label className="cursor-pointer bg-[#FFD700] text-black text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 hover:bg-[#ffe033] shadow-lg">
                              <Upload className="w-4 h-4" />
                              <span>Replace Image</span>
                              <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 1)} />
                            </label>
                          </div>
                        </>
                      ) : (
                        <label className="cursor-pointer flex flex-col items-center justify-center p-6 text-center text-gray-400 hover:text-[#FFD700] transition-colors">
                          <Camera className="w-10 h-10 mb-2 text-[#FFD700] animate-bounce" />
                          <span className="text-xs font-mono font-bold text-white">Click to Upload Picture 1</span>
                          <span className="text-[11px] text-gray-500 mt-1">Recommended size: 1920x1080 (PNG, JPG)</span>
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 1)} />
                        </label>
                      )}
                    </div>
                  </div>

{/* Placeholder 1 */}
                  <div
                    className="bg-[#0b0b10] border-2 border-dashed border-[#FFD700]/40 hover:border-[#FFD700] rounded-2xl space-y-4 transition-all group"
                    style={{ padding: '1.5rem' }}
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-black/60 border border-[#222232] flex flex-col items-center justify-center group/img">
                      {picture1 ? (
                        <>
                          <img src={picture1} alt="Project Placeholder 1" className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-3">
                            <label className="cursor-pointer bg-[#FFD700] text-black text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 hover:bg-[#ffe033] shadow-lg">
                              <Upload className="w-4 h-4" />
                              <span>Replace Image</span>
                              <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 1)} />
                            </label>
                          </div>
                        </>
                      ) : (
                        <label className="cursor-pointer flex flex-col items-center justify-center p-6 text-center text-gray-400 hover:text-[#FFD700] transition-colors">
                          <Camera className="w-10 h-10 mb-2 text-[#FFD700] animate-bounce" />
                          <span className="text-xs font-mono font-bold text-white">Click to Upload Picture 1</span>
                          <span className="text-[11px] text-gray-500 mt-1">Recommended size: 1920x1080 (PNG, JPG)</span>
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 1)} />
                        </label>
                      )}
                    </div>
                  </div>

                  {/* Placeholder 1 */}
                  <div
                    className="bg-[#0b0b10] border-2 border-dashed border-[#FFD700]/40 hover:border-[#FFD700] rounded-2xl space-y-4 transition-all group"
                    style={{ padding: '1.5rem' }}
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-black/60 border border-[#222232] flex flex-col items-center justify-center group/img">
                      {picture1 ? (
                        <>
                          <img src={picture1} alt="Project Placeholder 1" className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-3">
                            <label className="cursor-pointer bg-[#FFD700] text-black text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 hover:bg-[#ffe033] shadow-lg">
                              <Upload className="w-4 h-4" />
                              <span>Replace Image</span>
                              <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 1)} />
                            </label>
                          </div>
                        </>
                      ) : (
                        <label className="cursor-pointer flex flex-col items-center justify-center p-6 text-center text-gray-400 hover:text-[#FFD700] transition-colors">
                          <Camera className="w-10 h-10 mb-2 text-[#FFD700] animate-bounce" />
                          <span className="text-xs font-mono font-bold text-white">Click to Upload Picture 1</span>
                          <span className="text-[11px] text-gray-500 mt-1">Recommended size: 1920x1080 (PNG, JPG)</span>
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 1)} />
                        </label>
                      )}
                    </div>
                  </div>
                  
                  {/* Placeholder 2 */}
                  <div
                    className="bg-[#0b0b10] border-2 border-dashed border-[#FFD700]/40 hover:border-[#FFD700] rounded-2xl space-y-4 transition-all group"
                    style={{ padding: '1.5rem' }}
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-black/60 border border-[#222232] flex flex-col items-center justify-center group/img">
                      {picture2 ? (
                        <>
                          <img src={picture2} alt="Project Placeholder 2" className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-3">
                            <label className="cursor-pointer bg-[#FFD700] text-black text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 hover:bg-[#ffe033] shadow-lg">
                              <Upload className="w-4 h-4" />
                              <span>Replace Image</span>
                              <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 2)} />
                            </label>
                          </div>
                        </>
                      ) : (
                        <label className="cursor-pointer flex flex-col items-center justify-center p-6 text-center text-gray-400 hover:text-[#FFD700] transition-colors">
                          <Camera className="w-10 h-10 mb-2 text-[#FFD700] animate-bounce" />
                          <span className="text-xs font-mono font-bold text-white">Click to Upload Picture 2</span>
                          <span className="text-[11px] text-gray-500 mt-1">Recommended size: 1920x1080 (PNG, JPG)</span>
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 2)} />
                        </label>
                      )}
                    </div>
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
                အသုံးပြုထားသော Hardware & software အပိုင်းများ
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

        {/* ==================== 4. OUR TEAM MEMBERS SECTION ==================== */}
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
              style={{ gap: '1.5rem' }}
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-[#0b0b10] border border-[#252535] hover:border-[#FFD700]/70 rounded-2xl p-5 flex flex-col items-center text-center space-y-4 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
                >
                  {/* Image Placeholder */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-black/60 border-2 border-dashed border-[#FFD700]/40 group-hover:border-[#FFD700] flex items-center justify-center transition-all group/avatar">
                    {teamPhotos[member.id] ? (
                      <img
                        src={teamPhotos[member.id]}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover/avatar:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-500 group-hover:text-[#FFD700] transition-colors">
                        <User className="w-10 h-10 mb-1 text-[#FFD700]" />
                        <span className="text-[10px] font-mono">Photo</span>
                      </div>
                    )}

                    {/* Hover Upload Overlay */}
                    <label className="absolute inset-0 bg-black/60 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                      <Upload className="w-5 h-5 text-[#FFD700]" />
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleTeamPhotoUpload(e, member.id)}
                      />
                    </label>
                  </div>

                  {/* Member Name & Role */}
                  <div className="space-y-1">
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

    </div>
  );
}
