"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Data Misi berdasarkan Program PEKA [cite: 119, 136-159]
const MISSION_CATEGORIES = [
    { id: "tata", label: "Tata", color: "bg-[#4DA6FF]", lightColor: "bg-blue-50", text: "text-[#4DA6FF]", mascot: "Gajah", desc: "Disiplin & Tanggung Jawab" },
    { id: "nalar", label: "Nalar", color: "bg-[#FF8370]", lightColor: "bg-red-50", text: "text-[#FF8370]", mascot: "Kura-kura", desc: "Regulasi Emosi" },
    { id: "arsa", label: "Arsa", color: "bg-[#FFD700]", lightColor: "bg-yellow-50", text: "text-[#FFD700]", mascot: "Luwak Madu", desc: "Keberanian & Percaya Diri" },
    { id: "loka", label: "Loka", color: "bg-[#70B870]", lightColor: "bg-green-50", text: "text-[#70B870]", mascot: "Burung Enggang", desc: "Empati & Sosial" },
];

const MISSIONS = [
    { id: 1, category: "tata", title: "Tata Arunika", phase: "Knowing", icon: "🐘", target: "Mengenal konsep disiplin melalui cerita." },
    { id: 2, category: "tata", title: "Tata Prakarsa", phase: "Feeling", icon: "🐘", target: "Latihan merapikan barang pribadi." },
    { id: 3, category: "nalar", title: "Nalar Buana", phase: "Knowing", icon: "🐢", target: "Mengenali emosi melalui emoji." },
    { id: 4, category: "arsa", title: "Arsa Nyala", phase: "Feeling", icon: "🦡", target: "Latihan menyapa teman dengan berani." },
    { id: 5, category: "loka", title: "Loka Harmoni", phase: "Action", icon: "🐦", target: "Pembiasaan membantu teman di sekolah." },
    { id: 6, category: "tata", title: "Tata Adikara", phase: "Action", icon: "🐘", target: "Pembiasaan perilaku mandiri konsisten." },
];

const NAV_ITEMS = [
    { id: "siswa", label: "Manajemen Siswa", href: "/manajemen-siswa", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg> },
    { id: "kelas", label: "Manajemen Kelas", href: "/manajemen-kelas", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg> },
    { id: "misi", label: "Pustaka Misi", href: "/misi", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg> },
    { id: "laporan", label: "Laporan", href: "/laporan", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> },
    { id: "forum", label: "Forum Diskusi", href: "/forum", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg> },
    { id: "pengaturan", label: "Pengaturan", href: "/pengaturan", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg> },
];

export default function PustakaMisi() {
    const [filter, setFilter] = useState("all");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    const filteredMissions = filter === "all" ? MISSIONS : MISSIONS.filter(m => m.category === filter);

    return (
        <div className="flex min-h-screen bg-[#F0F4FA] font-sans text-slate-800">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0F172A] lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-8 border-b border-white/5">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#4DA6FF] to-[#70B870] rounded-xl flex items-center justify-center font-bold text-white shadow-lg">P</div>
                        <div className="text-white font-bold text-xl tracking-tight leading-none">PEKA<br /><span className="text-[10px] text-white/40 uppercase tracking-widest font-normal">Teacher Panel</span></div>
                    </Link>
                </div>
                <nav className="p-4 space-y-1">
                    {NAV_ITEMS.map((item) => (
                        <Link key={item.id} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${pathname === item.href ? "bg-[#4DA6FF]/20 text-[#4DA6FF] font-semibold" : "text-white/50 hover:bg-white/5 hover:text-white"}`}>
                            {item.icon} <span className="text-sm">{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-16 bg-white border-b border-slate-200 px-4 lg:px-8 flex items-center justify-between sticky top-0 z-20">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        </button>
                        <h2 className="font-bold text-slate-800 lg:text-lg tracking-tight">Pustaka Misi Karakter</h2>
                    </div>
                    <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                        Buat Misi Baru
                    </button>
                </header>

                <main className="flex-1 p-4 lg:p-10 flex flex-col items-center">
                    <div className="w-full max-w-[1200px] space-y-10">
                        {/* Mission Tabs / Filter */}
                        <section className="flex flex-col gap-6">
                            <div>
                                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Katalog Misi PEKA</h3>
                                <p className="text-slate-500 text-sm mt-1">Pilih dimensi karakter untuk melihat daftar misi spesifik.</p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <button onClick={() => setFilter("all")} className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${filter === "all" ? "bg-slate-900 text-white shadow-lg" : "bg-white text-slate-400 border border-slate-200 hover:border-slate-300"}`}>Semua Misi</button>
                                {MISSION_CATEGORIES.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setFilter(cat.id)}
                                        className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${filter === cat.id ? `${cat.color} text-white shadow-lg shadow-${cat.id}/20` : "bg-white text-slate-400 border border-slate-200"}`}
                                    >
                                        <div className={`w-2 h-2 rounded-full ${filter === cat.id ? "bg-white" : cat.color}`}></div>
                                        Dimensi {cat.label}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* Missions Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredMissions.map((mission) => {
                                const config = MISSION_CATEGORIES.find(c => c.id === mission.category)!;
                                return (
                                    <div key={mission.id} className="bg-white rounded-[32px] p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                                        <div className={`absolute top-0 right-0 w-32 h-32 ${config.lightColor} rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform`}></div>

                                        <div className="relative z-10">
                                            <div className={`w-14 h-14 ${config.lightColor} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner`}>
                                                {mission.icon}
                                            </div>

                                            <div className="mb-6">
                                                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${config.text} ${config.lightColor}`}>
                                                    {mission.phase} Project [cite: 119]
                                                </span>
                                                <h4 className="text-xl font-black text-slate-900 mt-2 tracking-tight group-hover:text-[#4DA6FF] transition-colors">{mission.title}</h4>
                                                <p className="text-slate-400 text-xs font-bold mt-1 uppercase tracking-tighter">Mascot: {config.mascot}</p>
                                            </div>

                                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
                                                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1">Target Pembelajaran</p>
                                                <p className="text-xs text-slate-600 font-medium leading-relaxed italic line-clamp-2">"{mission.target}"</p>
                                            </div>

                                            <div className="flex gap-2">
                                                <button className={`flex-1 py-3 rounded-xl text-[11px] font-bold text-white shadow-md transition-all hover:brightness-110 ${config.color}`}>
                                                    Tugaskan Misi
                                                </button>
                                                <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-100 hover:text-slate-600 transition-all border border-slate-100">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Dimensi Info Card */}
                        <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-10">
                            <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
                                <div className="w-16 h-16 bg-[#4DA6FF] rounded-2xl rotate-3 shadow-lg flex items-center justify-center text-white font-bold">Tata</div>
                                <div className="w-16 h-16 bg-[#FF8370] rounded-2xl -rotate-6 shadow-lg flex items-center justify-center text-white font-bold">Nalar</div>
                                <div className="w-16 h-16 bg-[#FFD700] rounded-2xl -rotate-3 shadow-lg flex items-center justify-center text-white font-bold">Arsa</div>
                                <div className="w-16 h-16 bg-[#70B870] rounded-2xl rotate-6 shadow-lg flex items-center justify-center text-white font-bold">Loka</div>
                            </div>
                            <div className="flex-1 space-y-2">
                                <h4 className="text-lg font-black text-slate-800">Metode Mission-Based Learning [cite: 106, 109]</h4>
                                <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                                    Setiap misi dirancang untuk menjamin kontinuitas habituasi dari sekolah ke rumah. Orang tua bertindak sebagai pendamping utama untuk memastikan setiap target karakter tercapai melalui aplikasi <strong>PEKA-Game</strong>[cite: 110, 113].
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Mobile Overlay */}
            {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"></div>}
        </div>
    );
}