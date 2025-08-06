

export default function LoadingPage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <div className="w-12 h-12 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Loading results... */}
        <div className="text-lg text-gray-700">Loading Results ...</div>
      </div>
    );
}