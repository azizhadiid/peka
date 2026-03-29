"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Data Diskusi Mockup berdasarkan nama siswa riil
const FORUM_THREADS = [
    { id: 1, student: "Andira Nasya", parent: "Mama Andira", lastMessage: "Bagaimana perkembangan Andira di sekolah hari ini, Bu?", time: "10:30 AM", unread: true, category: "Tata" },
    { id: 2, student: "Edward Bancin", parent: "Papa Edward", lastMessage: "Edward tadi pagi sempat tantrum sebelum berangkat.", time: "09:15 AM", unread: false, category: "Nalar" },
    { id: 3, student: "Ayura Fitria", parent: "Ibu Ayura", lastMessage: "Misi Loka Rasa sudah kami coba praktikkan di rumah.", time: "Kemarin", unread: false, category: "Loka" },
    { id: 4, student: "Gebi Erlina", parent: "Mama Gebi", lastMessage: "Terima kasih infonya Bu, nanti saya pantau di PEKA-Game.", time: "Kemarin", unread: false, category: "Arsa" },
];

const NAV_ITEMS = [
    { id: "siswa", label: "Manajemen Siswa", href: "/manajemen-siswa", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg> },
    { id: "kelas", label: "Manajemen Kelas", href: "/manajemen-kelas", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg> },
    { id: "misi", label: "Pustaka Misi", href: "/misi", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg> },
    { id: "laporan", label: "Laporan", href: "/laporan", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> },
    { id: "forum", label: "Forum Diskusi", href: "/forum", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg> },
    { id: "pengaturan", label: "Pengaturan", href: "/pengaturan", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg> },
];

export default function ForumPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeChat, setActiveChat] = useState(FORUM_THREADS[0]);
    const pathname = usePathname();

    return (
        <div className="flex h-screen bg-[#F0F4FA] font-sans text-slate-800 overflow-hidden">
            {/* Sidebar Navigasi Utama */}
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

            {/* Konten Forum: Sidebar Chat & Chat Window */}
            <main className="flex-1 flex flex-col min-w-0">
                <header className="h-16 bg-white border-b border-slate-200 px-4 lg:px-8 flex items-center justify-between sticky top-0 z-20 shrink-0">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        </button>
                        <h2 className="font-bold text-slate-800 lg:text-lg tracking-tight uppercase text-xs tracking-[0.2em]">Forum Komunikasi Sekolah-Rumah</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold text-[#70B870] bg-green-50 px-2 py-1 rounded-md uppercase tracking-wider">Online</span>
                    </div>
                </header>

                <div className="flex-1 flex overflow-hidden">
                    {/* List Chat (Kiri) */}
                    <div className="w-full sm:w-80 bg-white border-r border-slate-200 flex flex-col shrink-0">
                        <div className="p-4 border-b border-slate-100">
                            <input type="text" placeholder="Cari percakapan..." className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#4DA6FF] transition-all" />
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {FORUM_THREADS.map((chat) => (
                                <div
                                    key={chat.id}
                                    onClick={() => setActiveChat(chat)}
                                    className={`p-4 flex items-center gap-4 cursor-pointer transition-colors border-b border-slate-50 ${activeChat.id === chat.id ? "bg-blue-50/50" : "hover:bg-slate-50"}`}
                                >
                                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-white font-bold text-xs shrink-0 ${chat.category === 'Tata' ? 'bg-[#4DA6FF]' : chat.category === 'Nalar' ? 'bg-[#FF8370]' : 'bg-[#70B870]'}`}>
                                        {chat.student.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-0.5">
                                            <p className="text-sm font-bold text-slate-800 truncate">{chat.parent}</p>
                                            <span className="text-[9px] text-slate-400 font-medium uppercase">{chat.time}</span>
                                        </div>
                                        <p className={`text-xs truncate ${chat.unread ? "text-slate-900 font-bold" : "text-slate-500"}`}>{chat.lastMessage}</p>
                                    </div>
                                    {chat.unread && <div className="w-2 h-2 bg-[#4DA6FF] rounded-full shrink-0 shadow-[0_0_8px_rgba(77,166,255,0.6)]"></div>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chat Window (Kanan) */}
                    <div className="hidden sm:flex flex-1 flex flex-col bg-slate-50/50">
                        {/* Chat Header */}
                        <div className="p-6 bg-white border-b border-slate-200 flex items-center justify-between shadow-sm relative z-10">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-sm ${activeChat.category === 'Tata' ? 'bg-[#4DA6FF]' : activeChat.category === 'Nalar' ? 'bg-[#FF8370]' : 'bg-[#70B870]'}`}>
                                    {activeChat.student.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-800 text-lg tracking-tight">{activeChat.parent}</h4>
                                    <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Siswa: {activeChat.student} · Dimensi {activeChat.category}</p>
                                </div>
                            </div>
                            <Link href={`/manajemen-siswa/profil/${activeChat.id}`} className="text-[10px] font-black text-[#4DA6FF] uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-xl hover:bg-[#4DA6FF] hover:text-white transition-all">Lihat PPI</Link>
                        </div>

                        {/* Chat Messages Area */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-8 flex flex-col items-center">
                            <div className="w-full max-w-[800px] flex flex-col gap-8">
                                {/* Pesan Masuk */}
                                <div className="flex items-start gap-4 max-w-[80%]">
                                    <div className="w-8 h-8 rounded-lg bg-slate-200 shrink-0"></div>
                                    <div className="bg-white p-5 rounded-3xl rounded-tl-none shadow-sm border border-slate-100 text-sm leading-relaxed text-slate-700">
                                        {activeChat.lastMessage}
                                    </div>
                                </div>

                                {/* Divider Hari */}
                                <div className="flex items-center gap-4 py-4">
                                    <div className="flex-1 h-[1px] bg-slate-200"></div>
                                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">Hari Ini</span>
                                    <div className="flex-1 h-[1px] bg-slate-200"></div>
                                </div>

                                {/* Pesan Keluar (Guru) */}
                                <div className="flex items-start gap-4 max-w-[80%] self-end flex-row-reverse">
                                    <div className="w-8 h-8 rounded-lg bg-[#4DA6FF] shrink-0 flex items-center justify-center text-[10px] font-bold text-white uppercase">BW</div>
                                    <div className="bg-[#4DA6FF] p-5 rounded-3xl rounded-tr-none shadow-lg shadow-blue-500/10 text-sm leading-relaxed text-white font-medium">
                                        Halo Bapak/Ibu, benar sekali. Tadi {activeChat.student.split(' ')[0]} sudah mulai menunjukkan progres yang baik di sekolah. Mari kita sinergi untuk misi di rumah ya!
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chat Input */}
                        <div className="p-6 bg-white border-t border-slate-200">
                            <div className="max-w-[800px] mx-auto flex items-center gap-4">
                                <button className="p-3 text-slate-300 hover:text-slate-500 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                                </button>
                                <input type="text" placeholder="Tulis balasan profesional untuk wali murid..." className="flex-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl text-sm outline-none focus:ring-2 focus:ring-[#4DA6FF] transition-all" />
                                <button className="p-4 bg-[#4DA6FF] text-white rounded-2xl hover:bg-blue-600 shadow-lg shadow-blue-500/20 transition-all">
                                    <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Mobile Overlay */}
            {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"></div>}
        </div>
    );
}