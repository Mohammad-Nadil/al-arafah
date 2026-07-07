import {
  MdPeople,
  MdBook,
  MdReceipt,
  MdNotifications,
  MdAdd,
  MdEdit,
} from "react-icons/md";

const stats = [
  {
    name: "Total Students",
    value: "1,284",
    icon: <MdPeople />,
    color: "bg-blue-500",
  },
  {
    name: "Total Staffs",
    value: "56",
    icon: <MdPeople />,
    color: "bg-emerald-500",
  },
  {
    name: "Pending Fees",
    value: "৳ 45,200",
    icon: <MdReceipt />,
    color: "bg-amber-500",
  },
  {
    name: "Active Notices",
    value: "12",
    icon: <MdNotifications />,
    color: "bg-rose-500",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <p className="text-neutral-500">
          Welcome back, Super Admin. Here is what is happening today.
        </p>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm"
          >
            <div
              className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center text-white text-2xl mb-4`}
            >
              {stat.icon}
            </div>
            <h3 className="text-neutral-500 text-sm font-medium">
              {stat.name}
            </h3>
            <p className="text-2xl font-black mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className=" p-4 sm:p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <h3 className="font-bold mb-4">Quick Actions</h3>
          <div className="flex justify-between sm:justify-start text-sm sm:text-base gap-4">
              <button className="flex  items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90">
                <MdAdd className="hidden xs:block"/> Add Student
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg">
                <MdEdit className="hidden xs:block" /> Post Notice
              </button>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <h3 className="font-bold mb-4">System Alerts</h3>
          <p className="text-sm text-neutral-500 italic">
            No critical alerts for today.
          </p>
        </div>
      </div>
    </div>
  );
}
