"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Konfigurasi Navigasi berdasarkan Sitemap Guru
const NAV_ITEMS = [
  { id: "siswa", label: "Manajemen Siswa", href: "/manajemen-siswa", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg> },
  { id: "kelas", label: "Manajemen Kelas", href: "/manajemen-kelas", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg> },
  { id: "misi", label: "Pustaka Misi", href: "/misi", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg> },
  { id: "laporan", label: "Laporan", href: "/laporan", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> },
  { id: "forum", label: "Forum Diskusi", href: "/forum", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg> },
  { id: "pengaturan", label: "Pengaturan", href: "/pengaturan", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg> },
];

const ACTIVITIES = [
  { student: "Andira Nasya", mission: "Tata Arunika", time: "5m ago", avatar: "AN", color: "bg-[#4DA6FF]" },
  { student: "Ayura Fitria", mission: "Loka Rasa", time: "12m ago", avatar: "AF", color: "bg-[#70B870]" },
  { student: "Edward Bancin", mission: "Nalar Cakra", time: "28m ago", avatar: "EB", color: "bg-[#FF8370]" },
  { student: "Gebi Erlina", mission: "Arsa Nyala", time: "1h ago", avatar: "GE", color: "bg-[#FFD700]" },
];

export default function PekaDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname(); // Untuk mendeteksi halaman aktif secara otomatis

  return (
    <div className="flex min-h-screen bg-[#F0F4FA] font-sans text-slate-800">
      {/* Sidebar - Fix: Sticky agar tidak scroll hilang */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0F172A] transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-8 border-b border-white/5">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-linier-to-br from-[#4DA6FF] to-[#70B870] rounded-xl flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-105 transition-transform">P</div>
            <div>
              <h1 className="text-white font-bold text-xl tracking-tight">PEKA</h1>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">Teacher Panel</p>
            </div>
          </Link>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto">
          <p className="px-4 py-2 text-[10px] font-bold text-white/20 uppercase tracking-wider">Main Menu</p>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${pathname === item.href ? "bg-[#4DA6FF]/20 text-[#4DA6FF] font-semibold" : "text-white/50 hover:bg-white/5 hover:text-white"}`}
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-6 border-t border-white/5 bg-[#0F172A]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#4DA6FF] flex items-center justify-center text-white font-bold text-xs">BW</div>
            <div className="overflow-hidden">
              <p className="text-white text-sm font-semibold truncate">Bu Widya</p>
              <p className="text-white/40 text-[10px] truncate">SLB Mutiara Jambi [cite: 75]</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 px-4 lg:px-8 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
            <h2 className="font-bold text-slate-800 lg:text-lg">Beranda Dashboard</h2>
          </div>

          <div className="flex items-center gap-3 lg:gap-6">
            <div className="hidden sm:block px-3 py-1.5 bg-[#F1F5F9] rounded-lg text-[11px] font-bold text-[#4DA6FF]">Semester Genap 2026</div>
            <div className="w-9 h-9 rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center font-bold text-[#4DA6FF]">BW</div>
          </div>
        </header>

        {/* Centered Content Container */}
        <main className="flex-1 p-4 lg:p-10">
          <div className="max-w-300 mx-auto space-y-8">
            {/* Hero Greeting */}
            <section>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">Selamat pagi, Bu Widya! 👋</h3>
              <p className="text-slate-500 mt-1 text-sm lg:text-base">Pantau progres kemandirian 14 siswa SLB Mutiara Jambi hari ini[cite: 30, 73].</p>
            </section>

            {/* Grid Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Total Siswa", val: "14", color: "text-[#4DA6FF]", bg: "bg-blue-50", icon: "S" },
                { label: "Misi Selesai", val: "128", color: "text-[#70B870]", bg: "bg-green-50", icon: "M" },
                { label: "Indeks Mandiri", val: "85%", color: "text-[#FFD700]", bg: "bg-yellow-50", icon: "I" },
                { label: "Laporan Baru", val: "04", color: "text-[#FF8370]", bg: "bg-red-50", icon: "L" },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center font-black mb-4`}>{stat.icon}</div>
                  <div>
                    <p className="text-4xl font-extrabold text-slate-900 tracking-tighter">{stat.val}</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Visuals Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Chart Section - Visualisasi 4 Dimensi PEKA [cite: 47, 133] */}
              <div className="lg:col-span-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                  <h4 className="font-bold text-slate-800 uppercase text-xs tracking-widest">
                    Aktivitas Mingguan (Self-Regulation)
                  </h4>
                  {/* Legend Warna Sesuai Dimensi  */}
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#4DA6FF]"></div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Tata</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF8370]"></div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Nalar</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFD700]"></div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Arsa</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#70B870]"></div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Loka</span>
                    </div>
                  </div>
                </div>

                {/* Grafik Bar yang Menampilkan 4 Dimensi per Minggu [cite: 106, 161] */}
                <div className="h-64 w-full flex items-end justify-around gap-2 px-2 border-b border-slate-100 pb-1">
                  {[
                    { week: "W1", vals: [40, 55, 30, 70] },
                    { week: "W2", vals: [60, 45, 80, 50] },
                    { week: "W3", vals: [75, 90, 40, 85] },
                    { week: "W4", vals: [90, 65, 70, 95] },
                  ].map((data, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center group">
                      <div className="w-full flex items-end justify-center gap-1 px-1 h-56">
                        {/* Tata - Blue [cite: 137] */}
                        <div
                          style={{ height: `${data.vals[0]}%` }}
                          className="w-full max-w-2 bg-[#4DA6FF] rounded-t-sm transition-all duration-700 hover:brightness-110"
                          title={`Tata: ${data.vals[0]}%`}
                        ></div>
                        {/* Nalar - Coral [cite: 143] */}
                        <div
                          style={{ height: `${data.vals[1]}%` }}
                          className="w-full max-w-2 bg-[#FF8370] rounded-t-sm transition-all duration-700 hover:brightness-110"
                          title={`Nalar: ${data.vals[1]}%`}
                        ></div>
                        {/* Arsa - Yellow [cite: 149] */}
                        <div
                          style={{ height: `${data.vals[2]}%` }}
                          className="w-full max-w-2 bg-[#FFD700] rounded-t-sm transition-all duration-700 hover:brightness-110"
                          title={`Arsa: ${data.vals[2]}%`}
                        ></div>
                        {/* Loka - Green [cite: 155] */}
                        <div
                          style={{ height: `${data.vals[3]}%` }}
                          className="w-full max-w-2 bg-[#70B870] rounded-t-sm transition-all duration-700 hover:brightness-110"
                          title={`Loka: ${data.vals[3]}%`}
                        ></div>
                      </div>
                      <span className="mt-4 text-[10px] font-bold text-slate-300 uppercase tracking-tighter">
                        {data.week}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-[10px] text-slate-400 italic text-center">
                  * Data berdasarkan rata-rata poin habituasi harian di sekolah dan rumah [cite: 98, 115]
                </p>
              </div>

              {/* Activity Section */}
              <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
                <h4 className="font-bold text-slate-800 uppercase text-xs tracking-widest mb-6">Aktivitas Terbaru [cite: 109, 113]</h4>
                <div className="space-y-6 flex-1">
                  {ACTIVITIES.map((act, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className={`w-10 h-10 rounded-2xl ${act.color} text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-black/5`}>
                        {act.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-800 truncate group-hover:text-[#4DA6FF] transition-colors">
                          {act.student}
                        </p>
                        <p className="text-[11px] text-slate-400 truncate">
                          Misi: <span className="font-bold">{act.mission}</span> [cite: 106]
                        </p>
                      </div>
                      <span className="text-[9px] font-medium text-slate-300 whitespace-nowrap">{act.time}</span>
                    </div>
                  ))}
                </div>
                <Link href="/laporan" className="mt-8 w-full py-3 bg-slate-50 text-[#4DA6FF] text-xs font-bold rounded-xl hover:bg-[#4DA6FF] hover:text-white transition-all text-center">
                  Lihat Semua
                </Link>
              </div>
            </div>

            {/* Bottom Insight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#4DA6FF] p-8 rounded-3xl text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-2">Tips Hari Ini 💡 [cite: 137]</h4>
                  <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                    Gunakan karakter <strong>Gajah</strong> untuk menanamkan disiplin (Tata) melalui Activity of Daily Living hari ini.
                  </p>
                </div>
                <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-800">Dokumen PPI Siswa [cite: 68]</h4>
                  <p className="text-slate-400 text-xs mt-1">Cetak laporan Program Pembelajaran Individual.</p>
                </div>
                <button className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-[#70B870] transition-colors shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Drawer Overlay */}
      {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"></div>}
    </div>
  );
}