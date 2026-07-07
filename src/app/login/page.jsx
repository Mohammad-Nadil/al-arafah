export default function LoginPage() {
  return (
    <div className="flex  pt-20 items-center justify-center bg-neutral-100 dark:bg-neutral-950">
      <form className="bg-white dark:bg-neutral-900 p-8 rounded-2xl w-96 border border-neutral-200 dark:border-neutral-800">
        <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-neutral-50 dark:bg-neutral-800 border"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-lg bg-neutral-50 dark:bg-neutral-800 border"
        />
        <a href="/admin" className="w-full  bg-primary text-white p-3 px-6 rounded-lg font-bold text-right">
          Login
        </a>
      </form>
    </div>
  );
}
