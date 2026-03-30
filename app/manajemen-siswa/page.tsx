"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Data Siswa Riil dari Dokumen PKM PEKA [cite: 207]
const STUDENT_DATA = [
    { id: 1, name: "Andira Nasya Azzahra", gender: "P", class: "Kelas 2", type: "Tunarungu (B)", color: "#4DA6FF" },
    { id: 2, name: "Ayura Fitria Bella", gender: "P", class: "Kelas 2", type: "Autis (Q)", color: "#70B870" },
    { id: 3, name: "Edward Bancin", gender: "L", class: "Kelas 3A", type: "Autis (Q)", color: "#FFD700" },
    { id: 4, name: "Gebi Erlina Batuara", gender: "P", class: "Kelas 1", type: "Autis (Q)", color: "#FF8370" },
    { id: 5, name: "Julia Fitriani Iskandar", gender: "P", class: "Kelas 2", type: "Hiperaktif (H)", color: "#4DA6FF" },
    { id: 6, name: "M. Al-Ikhlas", gender: "L", class: "Kelas 3A", type: "Autis (Q)", color: "#70B870" },
    { id: 7, name: "Martua Sinaga", gender: "L", class: "Kelas 3A", type: "Tuna Grahita Ringan (C)", color: "#FFD700" },
    { id: 8, name: "Melva Zefania", gender: "P", class: "Kelas 6", type: "Tuna Grahita Sedang (C1)", color: "#FF8370" },
    { id: 9, name: "Muhammad Hardika", gender: "L", class: "Kelas 1", type: "Autis (Q)", color: "#4DA6FF" },
    { id: 10, name: "Nadhira Thafana", gender: "P", class: "Kelas 3B", type: "Tuna Grahita Sedang (C1)", color: "#70B870" },
];

const NAV_ITEMS = [
    { id: "siswa", label: "Manajemen Siswa", href: "/manajemen-siswa", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg> },
    { id: "kelas", label: "Manajemen Kelas", href: "/manajemen-kelas", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg> },
    { id: "misi", label: "Pustaka Misi", href: "/misi", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg> },
    { id: "laporan", label: "Laporan", href: "/laporan", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> },
    { id: "forum", label: "Forum Diskusi", href: "/forum", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg> },
    { id: "pengaturan", label: "Pengaturan", href: "/pengaturan", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg> },
];

export default function ManajemenSiswa() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-[#F0F4FA] font-sans text-slate-800">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0F172A] transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-8 border-b border-white/5">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#4DA6FF] to-[#70B870] rounded-xl flex items-center justify-center font-bold text-white">P</div>
                        <div>
                            <h1 className="text-white font-bold text-xl tracking-tight">PEKA</h1>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest">Teacher Panel</p>
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

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="h-16 bg-white border-b border-slate-200 px-4 lg:px-8 flex items-center justify-between sticky top-0 z-20">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        </button>
                        <h2 className="font-bold text-slate-800 lg:text-lg tracking-tight">Data Manajemen Siswa</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <input type="text" placeholder="Cari siswa..." className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#4DA6FF] transition-all outline-none w-64" />
                            <svg className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <button className="bg-[#4DA6FF] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-blue-600 transition-all flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                            Tambah Siswa
                        </button>
                    </div>
                </header>

                {/* Centered Table Container */}
                <main className="flex-1 p-4 lg:p-10">
                    <div className="max-w-[1200px] mx-auto">
                        {/* Table Stats Summary */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Populasi</p>
                                <h3 className="text-3xl font-black text-slate-900 mt-1">14 <span className="text-sm font-medium text-slate-400 italic">Siswa</span></h3>
                            </div>
                            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Klasifikasi Terbanyak</p>
                                <h3 className="text-3xl font-black text-[#4DA6FF] mt-1">Autis <span className="text-sm font-medium text-slate-400 italic">(46.7%) </span></h3>
                            </div>
                            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status Data</p>
                                <h3 className="text-3xl font-black text-[#70B870] mt-1">Updated</h3>
                            </div>
                        </div>

                        {/* Main Table */}
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                                            <th className="px-8 py-5">Nama Siswa</th>
                                            <th className="px-6 py-5">Rombel</th>
                                            <th className="px-6 py-5">Hambatan</th>
                                            <th className="px-6 py-5">Jenis Kelamin</th>
                                            <th className="px-8 py-5 text-right">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {STUDENT_DATA.map((student) => (
                                            <tr key={student.id} className="hover:bg-slate-50/50 transition-colors group">
                                                <td className="px-8 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-xs shadow-sm" style={{ backgroundColor: student.color }}>
                                                            {student.name.charAt(0)}
                                                        </div>
                                                        <span className="text-sm font-bold text-slate-800 tracking-tight">{student.name}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-500 uppercase">{student.class}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-xs text-slate-600 font-medium">{student.type}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-xs font-bold text-slate-400 tracking-widest">{student.gender === "L" ? "Laki-laki" : "Perempuan"}</span>
                                                </td>
                                                <td className="px-8 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Link href={`/manajemen-siswa/profil/${student.id}`} className="p-2.5 bg-slate-50 text-[#4DA6FF] rounded-xl hover:bg-[#4DA6FF] hover:text-white transition-all shadow-sm">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                        </Link>
                                                        <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:text-red-500 transition-all shadow-sm">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                                <span>Menampilkan 10 dari 14 Siswa </span>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg opacity-50 cursor-not-allowed">Prev</button>
                                    <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-[#4DA6FF] hover:text-[#4DA6FF] transition-all">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Mobile Overlay */}
            {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"></div>}
        </div>
    );
}