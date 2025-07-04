import { Footer } from './Footer'

const Home = () => {
  return (
    <div>
    <div className="text-white min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-indigo-500">Open Auth</h1>
        <p className="text-lg mt-4 text-gray-300">
          A unified authentication platform for all <span className="text-indigo-400">Open Nova</span> services.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/login"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Login
        </a>
        <a
          href="/register"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Register
        </a>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        <p>
          Securely manage access across all products: Open Docs, Open UI and more.
        </p>
      </div>
</div>
      <Footer />
    </div>
  )
}

export default Home
