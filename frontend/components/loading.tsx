const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-950 text-white">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      <div className="ml-4 text-2xl">Loading...</div>
    </div>
    )
}

export default Loading