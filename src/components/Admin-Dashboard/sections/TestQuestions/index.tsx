import { testQuestionsData, testQuestionsOptions } from "@/app/admin/content";
import MUIAutoComplete from "@/components/ui/AutoComplete";
import AddQuestionDialog from "@/components/ui/Dialogs/AddQuestionDialog";
import DeleteDialog from "@/components/ui/Dialogs/DeleteDialog";
import EditQuestionDialog from "@/components/ui/Dialogs/EditQuestionDialog";
import TestQuestionsTable from "@/components/ui/Tables/TestQuestionsTable";
import type { TestQuestions as TestQuestionsType } from "@/interfaces/Admin";
import Image from "next/image";
import { useState } from "react";

const TestQuestions = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
  const [questionToDelete, setQuestionToDelete] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] =
    useState<TestQuestionsType | null>(null);
  const [testQuestions, setTestQuestions] =
    useState<TestQuestionsType[]>(testQuestionsData);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const serviceCategories = Array.from(
    new Set(testQuestions?.map((q) => q?.serviceCategory))
  );

  // Add Question
  const handleAddQuestion = (newQuestion: TestQuestionsType) => {
    const nextId =
      testQuestions?.length > 0
        ? Math.max(...testQuestions?.map((q) => q.id)) + 1
        : 1;

    const questionWithId = {
      ...newQuestion,
      id: nextId,
    };
    setTestQuestions((prev) => [...prev, questionWithId]);
  };

  // Edit Question
  const handleEditQuestion = (editedQuestion: TestQuestionsType) => {
    setTestQuestions((prev) =>
      prev?.map((q) => (q?.id === editedQuestion?.id ? editedQuestion : q))
    );
  };

  const handleEditClick = (question: TestQuestionsType) => {
    setCurrentQuestion(question);
    setIsEditModalOpen(true);
  };

  // Delete Quetion
  const handleDeleteInitiate = (question: string) => {
    setQuestionToDelete(question);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (questionToDelete) {
      setTestQuestions((prev) =>
        prev?.filter((q) => q?.question !== questionToDelete)
      );
    }
    setIsDeleteDialogOpen(false);
    setQuestionToDelete(null);
  };

  const handleDeleteCancel = () => {
    setIsDeleteDialogOpen(false);
    setQuestionToDelete(null);
  };

  const filteredData = testQuestions?.filter(
    (question) =>
      question?.serviceCategory
        ?.toLowerCase()
        .includes(searchTerm?.toLowerCase()) ||
      question?.question?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  return (
    <>
      {testQuestions && testQuestions?.length ? (
        <div className="w-full h-[calc(100vh-200px)] flex flex-col gap-6">
          <div className="flex justify-between items-center gap-2">
            {/* Search bar */}
            <div className="w-1/2 flex items-center gap-2 px-4 py-2 rounded-full border border-[#DDE1F0] shadow-searchshadow">
              <Image
                src="/service-requester-dashboard/search.svg"
                alt="search-icon"
                width={20}
                height={20}
                className="object-cover"
              />
              <input
                type="text"
                placeholder="Search by category"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 outline-none text-[14px] font-normal text-lightblack placeholder:text-[14px] placeholder:font-normal placeholder:text-darkgray"
              />
            </div>
            <div className="w-1/2 flex justify-end items-center gap-2">
              <div className="xl:w-1/4 lg:w-2/5 w-1/2">
                <MUIAutoComplete
                  options={testQuestionsOptions}
                  label="Search by"
                  width="100%"
                  variant="green"
                  onChange={(e: any) => console.log(e.target.value)}
                />
              </div>
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="w-max text-nowrap flex items-center gap-2 text-[14px] font-medium text-white pl-[13px] pr-4 py-2 bg-primary rounded-full"
              >
                <Image
                  src="/admin/add.svg"
                  alt="add-icon"
                  width={20}
                  height={20}
                  className="object-cover"
                />
                Add New Question
              </button>
            </div>
          </div>
          {/* Table */}
          <div className="flex-1 overflow-auto border border-[#DDE1F0] rounded-xl shadow-searchshadow">
            <TestQuestionsTable
              data={filteredData}
              onDelete={handleDeleteInitiate}
              onEdit={handleEditClick}
            />
          </div>
        </div>
      ) : (
        <>
          <NoTestQuestions />
        </>
      )}
      <AddQuestionDialog
        isModalOpen={isAddModalOpen}
        setIsModalOpen={setIsAddModalOpen}
        onAddQuestion={handleAddQuestion}
        serviceCategories={
          serviceCategories.length
            ? serviceCategories
            : ["Plumber", "Electrician", "Carpenter"]
        }
      />
      <EditQuestionDialog
        isModalOpen={isEditModalOpen}
        setIsModalOpen={setIsEditModalOpen}
        onEditQuestion={handleEditQuestion}
        serviceCategories={
          serviceCategories.length
            ? serviceCategories
            : ["Plumber", "Electrician", "Carpenter"]
        }
        questionData={currentQuestion}
      />
      <DeleteDialog
        open={isDeleteDialogOpen}
        title="Are You Sure?"
        description="Are you sure you want to delete this question?"
        onCancel={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        confirmText="Delete"
        cancelText="Cancel"
      />
    </>
  );
};

function NoTestQuestions() {
  return (
    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
      <Image
        src="/service-requester-dashboard/noactivejobs.svg"
        alt="no-active-jobs"
        width={200}
        height={200}
        className="object-cover"
      />
      <h3 className="text-[24px] font-medium text-black leading-tight mt-2">
        No Test Question!
      </h3>
      <p className="text-[16px] font-medium text-darkgray">
        No test question at the moment
      </p>
    </div>
  );
}

export default TestQuestions;
