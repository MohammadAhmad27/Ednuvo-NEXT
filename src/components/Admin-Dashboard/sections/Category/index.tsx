import { useState } from "react";
import { categoryData as initialData } from "@/app/admin/content";
import Image from "next/image";
import CategoryTable from "@/components/ui/Tables/CategoryTable";
import type { Category } from "@/interfaces/Admin";
import AddCategoryDialog from "@/components/ui/Dialogs/AddCategoryDialog";

const Category = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [categoryData, setCategoryData] = useState<Category[]>(initialData);

  const handleAddCategory = (newCategory: {
    category: string;
    subcategory: { id: number; name: string }[];
  }) => {
    const newId = categoryData[categoryData?.length - 1]?.id + 1 || 1;
    const formattedCategory: Category = {
      id: newId,
      category: newCategory?.category,
      subcategory: newCategory?.subcategory?.map((sub, index) => ({
        id: index + 1,
        name: sub.name,
      })),
    };
    setCategoryData((prev) => [...prev, formattedCategory]);
  };
  return (
    <>
      {categoryData && categoryData?.length ? (
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
                className="flex-1 outline-none text-[14px] font-normal text-lightblack placeholder:text-[14px] placeholder:font-normal placeholder:text-darkgray"
              />
            </div>
            <div className="flex justify-end items-center gap-2">
              <button
                className="w-max text-nowrap flex items-center gap-2 text-[14px] font-medium text-white pl-[13px] pr-4 py-2 bg-primary rounded-full"
                onClick={() => setIsAddModalOpen(true)}
              >
                <Image
                  src="/admin/add.svg"
                  alt="add-icon"
                  width={20}
                  height={20}
                  className="object-cover"
                />
                Add Category
              </button>
            </div>
          </div>
          {/* Table */}
          <div className="flex-1 overflow-auto border border-[#DDE1F0] rounded-xl shadow-searchshadow">
            <CategoryTable data={categoryData} />
          </div>
        </div>
      ) : (
        <>
          <NoCategory />
        </>
      )}
      <AddCategoryDialog
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddCategory={handleAddCategory}
      />
    </>
  );
};

function NoCategory() {
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
        No Category!
      </h3>
      <p className="text-[16px] font-medium text-darkgray">
        No category or subcategory at the moment
      </p>
    </div>
  );
}

export default Category;
