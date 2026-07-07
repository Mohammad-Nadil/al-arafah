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
    // 'min-h-screen' যোগ করুন যাতে পুরো স্ক্রিন দখল করে
    <div className="flex flex-col md:flex-row min-h-screen bg-neutral-50 dark:bg-neutral-950 font-serif max-w-[1920px] mx-auto">
      {/* aside এ 'h-screen' এবং 'sticky top-0' দিন */}
      <aside className="w-full md:w-auto xl:w-64 bg-white dark:bg-neutral-900 border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-800 p-4 md:h-screen md:sticky md:top-20 z-40">
        <h1 className="hidden md:block text-xl font-black text-primary mb-6 px-4">
          AdminPanel
        </h1>

        {/* এখানে overflow-y-auto যোগ করুন যাতে মেনু লম্বা হলেও সমস্যা না হয় */}
        <nav className="flex md:flex-col justify-start gap-1 overflow-x-auto md:overflow-y-auto md:pb-0 scrollbar-hide md:h-[calc(100vh-100px)]">
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

      {/* মেইন কন্টেন্ট যেন পুরো স্ক্রিন পায় */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
