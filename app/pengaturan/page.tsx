"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
    { id: "siswa", label: "Manajemen Siswa", href: "/manajemen-siswa", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg> },
    { id: "kelas", label: "Manajemen Kelas", href: "/manajemen-kelas", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg> },
    { id: "misi", label: "Pustaka Misi", href: "/misi", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg> },
    { id: "laporan", label: "Laporan", href: "/laporan", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> },
    { id: "forum", label: "Forum Diskusi", href: "/forum", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg> },
    { id: "pengaturan", label: "Pengaturan", href: "/pengaturan", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg> },
];

export default function PengaturanPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

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
                <header className="h-16 bg-white border-b border-slate-200 px-4 lg:px-8 flex items-center justify-between sticky top-0 z-20 shrink-0">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        </button>
                        <h2 className="font-bold text-slate-800 lg:text-lg tracking-tight uppercase text-xs tracking-widest">Pusat Kendali Akun & Sistem</h2>
                    </div>
                </header>

                <main className="flex-1 p-4 lg:p-10 flex flex-col items-center overflow-y-auto">
                    <div className="w-full max-w-[1000px] space-y-10">
                        {/* Profile Section */}
                        <section className="bg-white rounded-[40px] p-8 lg:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#4DA6FF]/5 to-[#70B870]/5 rounded-full -mr-32 -mt-32"></div>

                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                                <div className="relative group">
                                    <div className="w-32 h-32 rounded-[40px] bg-gradient-to-br from-[#4DA6FF] to-[#70B870] flex items-center justify-center text-white text-4xl font-black shadow-xl group-hover:rotate-6 transition-transform">BW</div>
                                    <button className="absolute -bottom-2 -right-2 p-3 bg-white border border-slate-100 rounded-2xl shadow-lg text-slate-400 hover:text-[#4DA6FF] transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </button>
                                </div>
                                <div className="flex-1 space-y-4 text-center md:text-left">
                                    <div>
                                        <h3 className="text-3xl font-black text-slate-900 tracking-tight">Bu Widya Andriani</h3>
                                        <p className="text-[#4DA6FF] font-bold text-sm uppercase tracking-widest mt-1">Tenaga Pendidik · SLB Mutiara Jambi</p>
                                    </div>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold text-slate-400 uppercase tracking-tighter">
                                        <span className="bg-slate-50 px-4 py-2 rounded-xl">ID: PEKA-2026-001</span>
                                        <span className="bg-slate-50 px-4 py-2 rounded-xl">S1 Pendidikan Biologi</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Tutorial Section */}
                            <section className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-50 text-[#4DA6FF] rounded-2xl flex items-center justify-center text-xl shadow-inner">📖</div>
                                    <h4 className="font-black text-slate-800 uppercase text-xs tracking-widest">Panduan & Tutorial</h4>
                                </div>
                                <div className="space-y-3">
                                    {["Cara Mengaktifkan Misi", "Sinkronisasi Dashboard Guru", "Membaca Grafik Self-Regulation"].map((item, i) => (
                                        <button key={i} className="w-full p-4 bg-slate-50 rounded-2xl flex items-center justify-between group hover:bg-[#4DA6FF] transition-all">
                                            <span className="text-xs font-bold text-slate-600 group-hover:text-white transition-colors">{item}</span>
                                            <svg className="w-4 h-4 text-slate-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                        </button>
                                    ))}
                                </div>
                            </section>

                            {/* Help Center Section */}
                            <section className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-50 text-[#70B870] rounded-2xl flex items-center justify-center text-xl shadow-inner">🆘</div>
                                    <h4 className="font-black text-slate-800 uppercase text-xs tracking-widest">Pusat Bantuan</h4>
                                </div>
                                <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-slate-100">
                                    <p className="text-xs text-slate-500 leading-relaxed font-medium italic">
                                        "Jika terjadi kendala pada sinkronisasi data PEKA-Game orang tua, silakan hubungi tim IT PKM PEKA melalui jalur koordinasi resmi."
                                    </p>
                                </div>
                                <button className="w-full py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-black/10">
                                    Hubungi Admin PEKA
                                </button>
                            </section>
                        </div>

                        {/* Logout / Dangerous Area */}
                        <div className="pt-10 flex justify-center border-t border-slate-200">
                            <button className="flex items-center gap-3 px-8 py-4 bg-red-50 text-red-500 rounded-[24px] text-xs font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all shadow-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                Keluar dari Dashboard
                            </button>
                        </div>
                    </div>
                </main>
            </div>

            {/* Mobile Overlay */}
            {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"></div>}
        </div>
    );
}