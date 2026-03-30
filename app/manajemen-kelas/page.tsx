"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Data Rombel berdasarkan dokumen PKM PEKA 
const CLASS_DATA = [
    { id: 1, name: "Kelas 1", students: 2, obstacles: "Autisme (Q)", teacher: "Bu Sri Handayani", color: "border-[#4DA6FF]" },
    { id: 2, name: "Kelas 2", students: 3, obstacles: "Tunarungu (B), Autisme (Q), Hiperaktif (H)", teacher: "Pak Triyono", color: "border-[#70B870]" },
    { id: 3, name: "Kelas 3A", students: 4, obstacles: "Autisme (Q), Tunagrahita Ringan (C)", teacher: "Bu Fisabillah", color: "border-[#FFD700]" },
    { id: 4, name: "Kelas 3B", students: 3, obstacles: "Tunagrahita Sedang (C1), Autisme (Q), Tunadaksa Ringan (D)", teacher: "Bu Putri Rahmadani", color: "border-[#FF8370]" },
    { id: 5, name: "Kelas 6", students: 2, obstacles: "Tunagrahita Sedang (C1)", teacher: "Bu Sri Handayani", color: "border-[#4DA6FF]" },
];

const NAV_ITEMS = [
    { id: "siswa", label: "Manajemen Siswa", href: "/manajemen-siswa", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg> },
    { id: "kelas", label: "Manajemen Kelas", href: "/manajemen-kelas", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg> },
    { id: "misi", label: "Pustaka Misi", href: "/misi", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg> },
    { id: "laporan", label: "Laporan", href: "/laporan", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> },
    { id: "forum", label: "Forum Diskusi", href: "/forum", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg> },
    { id: "pengaturan", label: "Pengaturan", href: "/pengaturan", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg> },
];

export default function ManajemenKelas() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-[#F0F4FA] font-sans text-slate-800">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0F172A] transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-8 border-b border-white/5">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#4DA6FF] to-[#70B870] rounded-xl flex items-center justify-center font-bold text-white shadow-lg">P</div>
                        <div>
                            <h1 className="text-white font-bold text-xl tracking-tight">PEKA</h1>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest text-center">SLB Mutiara</p>
                        </div>
                    </Link>
                </div>
                <nav className="p-4 space-y-1">
                    <p className="px-4 py-2 text-[10px] font-bold text-white/20 uppercase tracking-wider">Main Menu</p>
                    {NAV_ITEMS.map((item) => (
                        <Link key={item.id} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${pathname === item.href ? "bg-[#4DA6FF]/20 text-[#4DA6FF] font-semibold" : "text-white/50 hover:bg-white/5 hover:text-white"}`}>
                            {item.icon} <span className="text-sm">{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-16 bg-white border-b border-slate-200 px-4 lg:px-8 flex items-center justify-between sticky top-0 z-20">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        </button>
                        <h2 className="font-bold text-slate-800 lg:text-lg">Manajemen Kelas</h2>
                    </div>
                    <button className="bg-[#4DA6FF] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md hover:bg-blue-600 transition-all flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                        Tambah Rombel
                    </button>
                </header>

                <main className="flex-1 p-4 lg:p-10">
                    <div className="max-w-[1200px] mx-auto space-y-8">
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Daftar Rombongan Belajar</h3>
                            <p className="text-slate-500 mt-1 text-sm">Kelola pembagian kelas dan pantau klasifikasi hambatan siswa.</p>
                        </section>

                        {/* Class Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {CLASS_DATA.map((cls) => (
                                <div key={cls.id} className={`bg-white p-6 rounded-3xl border-l-8 ${cls.color} shadow-sm hover:shadow-md transition-all flex flex-col group`}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-xl font-extrabold text-slate-900">{cls.name}</h4>
                                            <p className="text-xs font-bold text-[#4DA6FF] uppercase mt-1">{cls.teacher}</p>
                                        </div>
                                        <div className="bg-slate-50 px-3 py-1 rounded-lg text-xs font-bold text-slate-500 border border-slate-100 group-hover:bg-[#4DA6FF] group-hover:text-white transition-colors">
                                            {cls.students} Siswa
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-3">
                                        <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-slate-100">
                                            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Klasifikasi Hambatan </p>
                                            <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-2">{cls.obstacles}</p>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex gap-2">
                                        <Link href={`/manajemen-kelas/${cls.id}`} className="flex-1 py-2.5 bg-slate-50 text-slate-600 text-[11px] font-bold rounded-xl hover:bg-slate-100 text-center transition-all">
                                            Detail Kelas
                                        </Link>
                                        <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:text-red-500 transition-all">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Info Section */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
                            <div className="w-16 h-16 bg-[#F0FFF4] rounded-2xl flex items-center justify-center text-[#70B870] text-2xl shadow-inner">🏫</div>
                            <div className="flex-1 text-center md:text-left">
                                <h4 className="font-bold text-slate-800 text-lg">Statistik Rombel Terintegrasi</h4>
                                <p className="text-slate-500 text-sm mt-1 max-w-xl">
                                    Setiap rincian kelas ini terhubung langsung dengan <strong>Teacher's Dashboard</strong> untuk sinkronisasi misi PEKA-Game orang tua secara real-time.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-black text-[#4DA6FF]">14</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase">Total Siswa </div>
                                </div>
                                <div className="w-[1px] h-10 bg-slate-100"></div>
                                <div className="text-center">
                                    <div className="text-2xl font-black text-[#70B870]">4</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase">Tenaga Pendidik </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Mobile Drawer Overlay */}
            {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"></div>}
        </div>
    );
}