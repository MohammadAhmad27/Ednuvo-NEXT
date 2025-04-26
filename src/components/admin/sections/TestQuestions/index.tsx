import { testQuestionsData, testQuestionsOptions } from "@/app/admin/content";
import MUIAutoComplete from "@/components/ui/AutoComplete";
import AddQuestionDialog from "@/components/ui/Dialogs/AddQuestionDialog";
import TestQuestionsTable from "@/components/ui/Tables/TestQuestionsTable";
import type { TestQuestions as TestQuestionsType } from "@/interfaces/Admin";
import Image from "next/image";
import { useState } from "react";

const TestQuestions = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [testQuestions, setTestQuestions] =
    useState<TestQuestionsType[]>(testQuestionsData);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const serviceCategories = Array.from(
    new Set(testQuestions?.map((q) => q?.serviceCategory))
  );

  const handleAddQuestion = (newQuestion: TestQuestionsType) => {
    setTestQuestions((prev) => [...prev, newQuestion]);
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
        <>
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
                  className="flex-1 outline-none text-[14px] placeholder:text-[14px] placeholder:font-normal placeholder:text-darkgray"
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
                  onClick={() => setIsModalOpen(true)}
                  className="w-max text-nowrap flex items-center gap-2 text-[14px] font-medium text-white pl-[13px] pr-4 py-2 bg-primary rounded-full"
                >
                  <Image
                    src="/admin/add.svg"
                    alt="add-icon"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                  Add Question
                </button>
              </div>
            </div>
            {/* Card Component */}
            <div className="flex-1 overflow-auto border border-[#DDE1F0] rounded-xl shadow-searchshadow">
              <TestQuestionsTable data={filteredData} />
            </div>
          </div>
          <AddQuestionDialog
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            onAddQuestion={handleAddQuestion}
            serviceCategories={
              serviceCategories.length
                ? serviceCategories
                : ["Plumber", "Electrician", "Carpenter"]
            }
          />
        </>
      ) : (
        <>
          <NoTestQuestions />
        </>
      )}
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
