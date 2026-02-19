"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const filterButtons = [
  { id: 1, text: " All", filter: "all" },
  { id: 2, text: "1-3", filter: "small" },
  { id: 3, text: "4-7", filter: "medium" },
  { id: 4, text: "8-12", filter: "large" },
];

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="flex border border-primary-800">
      {filterButtons.map((btn) => (
        <Button
          key={btn.id}
          filter={btn.filter}
          activeFilter={activeFilter}
          handleFilter={handleFilter}
        >
          {btn.text}
        </Button>
      ))}
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`${activeFilter === filter ? "bg-primary-900" : ""} px-5 py-2 hover:bg-primary-700`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
