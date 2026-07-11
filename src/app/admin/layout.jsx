import { Suspense } from "react";
import {
  MdDashboard,
  MdPeople,
  MdBook,
  MdReceipt,
  MdNotifications,
  MdMail,
  MdSettings,
  MdEditNote,
} from "react-icons/md";

const navItems = [
  { name: "Dashboard", icon: <MdDashboard />, path: "/admin" },
  { name: "Students", icon: <MdPeople />, path: "/admin/students" },
  { name: "Staffs", icon: <MdPeople />, path: "/admin/staffs" },
  { name: "Results", icon: <MdBook />, path: "/admin/results" },
  { name: "Fees", icon: <MdReceipt />, path: "/admin/fees" },
  { name: "Notices", icon: <MdNotifications />, path: "/admin/notices" },
  { name: "Mail", icon: <MdMail />, path: "/admin/mail" },
  { name: "Content", icon: <MdEditNote />, path: "/admin/content" },
  { name: "Settings", icon: <MdSettings />, path: "/admin/settings" },
];

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row  bg-background font-serif max-w-[1920px] mx-auto">
      {/* aside এ 'h-screen' এবং 'sticky top-0' দিন */}
      <aside className="w-full md:w-auto 2xl:w-64 bg-background border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-800 p-4 md:h-[50vh] lg:h-screen xl:h-[65vh] md:sticky md:top-20 z-40">
        <h1 className="hidden md:block text-xl font-black text-primary mb-6 px-4">
          AdminPanel
        </h1>

        <nav className="flex md:flex-col justify-start gap-1 overflow-x-auto md:overflow-y-auto md:pb-0 scrollbar-hide ">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="flex flex-col md:flex-row items-center gap-2 px-3 md:px-4 md:py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-all shrink-0"
            >
              <span className="text-xl md:text-lg">{item.icon}</span>
              <span className="text-[10px] md:text-sm font-medium whitespace-nowrap">
                {item.name}
              </span>
            </a>
          ))}
        </nav>
      </aside>
      <main className="flex-1 px-2 py-4 md:p-6 overflow-y-auto bg-background">
        <Suspense> {children}</Suspense>
      </main>
    </div>
  );
}
