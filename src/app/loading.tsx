export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        {/* Ring Animation */}
        <div className="w-12 h-12 rounded-full border-4 border-gray-200 dark:border-gray-700 border-t-black dark:border-t-white animate-spin" />
        
        {/* Loading Text */}
        <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
          Loading...
        </div>
      </div>
    </div>
  );
} 