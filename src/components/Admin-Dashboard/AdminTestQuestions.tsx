import TestQuestions from "./sections/TestQuestions"

const AdminTestQuestions = () => {
  return (
    <div className="w-full h-full space-y-4 bg-white rounded-2xl px-4 py-5">
      <h2 className="text-[18px] font-semibold text-[#2D2D2D]">Test Questions Management</h2>
      <TestQuestions />
    </div>
  )
}

export default AdminTestQuestions