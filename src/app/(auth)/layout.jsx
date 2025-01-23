export default function AuthLayout({ children }) {
    return (
      <div className="min-h-screen bg-gradient-to-l from-blue-600 to-purple-600 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          {children}
        </div>
      </div>
    );
  }