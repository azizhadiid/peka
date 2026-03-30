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

export default function LaporanPage() {
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

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-16 bg-white border-b border-slate-200 px-4 lg:px-8 flex items-center justify-between sticky top-0 z-20">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        </button>
                        <h2 className="font-bold text-slate-800 lg:text-lg tracking-tight">Monitoring & Laporan</h2>
                    </div>
                    <button className="bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-xs font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                        Cetak Laporan Berkala
                    </button>
                </header>

                <main className="flex-1 p-4 lg:p-10 flex flex-col items-center">
                    <div className="w-full max-w-[1200px] space-y-10">
                        {/* Page Title */}
                        <section>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight text-center sm:text-left">Dashboard Visual Evaluasi</h3>
                            <p className="text-slate-500 text-sm mt-1 text-center sm:text-left text-balance">
                                Analisis capaian kemandirian siswa berdasarkan tiga domain evaluasi PEKA: Knowing, Feeling, dan Action.
                            </p>
                        </section>

                        {/* Evaluation Domain Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: "Knowing", val: "82%", desc: "Pemahaman konsep self-regulation", color: "text-[#4DA6FF]", bg: "bg-blue-50" },
                                { label: "Feeling", val: "75%", desc: "Respons emosional & ketertarikan", color: "text-[#FF8370]", bg: "bg-red-50" },
                                { label: "Action", val: "68%", desc: "Konsistensi perilaku mandiri riil", color: "text-[#70B870]", bg: "bg-green-50" },
                            ].map((domain, i) => (
                                <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-all">
                                    <div className={`w-16 h-16 ${domain.bg} ${domain.color} rounded-2xl flex items-center justify-center text-2xl font-black mb-4 shadow-inner group-hover:scale-110 transition-transform`}>{domain.label.charAt(0)}</div>
                                    <h4 className="text-3xl font-black text-slate-900">{domain.val}</h4>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 italic">{domain.label} Project</p>
                                    <div className="w-full h-[1px] bg-slate-100 my-4"></div>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed italic">"{domain.desc}" </p>
                                </div>
                            ))}
                        </div>

                        {/* Detailed Progress Table */}
                        <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                            <div className="p-8 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <h4 className="font-black text-slate-800 uppercase text-xs tracking-widest">Laporan Kemajuan Per Siswa</h4>
                                <div className="flex gap-2">
                                    <select className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-600 outline-none focus:ring-2 focus:ring-[#4DA6FF]">
                                        <option>Semua Rombel</option>
                                        <option>Kelas 2</option>
                                        <option>Kelas 3A</option>
                                    </select>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50/50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                            <th className="px-8 py-5">Nama Siswa</th>
                                            <th className="px-6 py-5">Misi Terakhir</th>
                                            <th className="px-6 py-5 text-center">Knowing</th>
                                            <th className="px-6 py-5 text-center">Feeling</th>
                                            <th className="px-6 py-5 text-center">Action</th>
                                            <th className="px-8 py-5 text-right">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {[
                                            { name: "Andira Nasya", mission: "Tata Arunika", k: 90, f: 85, a: 70, status: "Meningkat" },
                                            { name: "Ayura Fitria", mission: "Loka Rasa", k: 80, f: 90, a: 85, status: "Stabil" },
                                            { name: "Edward Bancin", mission: "Nalar Cakra", k: 70, f: 65, a: 50, status: "Perlu Bimbingan" },
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                <td className="px-8 py-5 font-bold text-slate-800 text-sm">{row.name}</td>
                                                <td className="px-6 py-5 text-xs text-slate-500 italic">Selesai {row.mission}</td>
                                                <td className="px-6 py-5">
                                                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden max-w-[80px] mx-auto">
                                                        <div style={{ width: `${row.k}%` }} className="bg-[#4DA6FF] h-full"></div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden max-w-[80px] mx-auto">
                                                        <div style={{ width: `${row.f}%` }} className="bg-[#FF8370] h-full"></div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden max-w-[80px] mx-auto">
                                                        <div style={{ width: `${row.a}%` }} className="bg-[#70B870] h-full"></div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-5 text-right">
                                                    <span className={`text-[9px] font-black uppercase px-2.5 py-1 rounded-lg ${row.status === "Perlu Bimbingan" ? "bg-red-50 text-red-500" : "bg-green-50 text-green-500"}`}>
                                                        {row.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Analytical Insight */}
                        <div className="bg-[#0F172A] p-10 rounded-[40px] text-white flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
                            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-br from-[#4DA6FF]/20 to-[#70B870]/20 rounded-full blur-3xl"></div>
                            <div className="text-5xl lg:text-6xl flex items-center justify-center bg-white/5 w-24 h-24 rounded-3xl backdrop-blur-sm border border-white/10 shrink-0">📈</div>
                            <div className="space-y-4 relative z-10">
                                <h4 className="text-xl font-bold italic tracking-tight">"Capaian otonomi anak terbukti melonjak drastis dari 42% menjadi 82% ketika intervensi difasilitasi media terstruktur."</h4>
                                <p className="text-white/40 text-xs font-medium uppercase tracking-widest leading-relaxed">
                                    Data ini menunjukkan pentingnya sinkronisasi Teacher’s Dashboard dengan PEKA-Game untuk mengukur objektivitas pembentukan self-regulation.
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