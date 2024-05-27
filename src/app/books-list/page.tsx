// pages/about.tsx
"use client";
import { NextPage } from "next";
import Head from "next/head";
import { BOOKS_LIST, BOOKS_LIST_COLUMNS } from "./list.constants";
import { useMemo, useState } from "react";

const BooksList = () => {
  const [sortBy, setSortBy] = useState({ key: "", type: "" });

  const SORTED_BOOKS_LIST = useMemo(() => {
    return BOOKS_LIST.sort((a: any, b: any) => {
      if (!sortBy.key) return 0;

      const valueA = a && a[sortBy.key];
      const valueB = b && b[sortBy.key];

      if (valueA < valueB) {
        return sortBy.type === "asc" ? -1 : 1;
      } else {
        return sortBy.type === "asc" ? 1 : -1;
      }
    });
  }, [sortBy]);

  const handleSort = (selectedColumn: string) => {
    if (selectedColumn !== sortBy.key) {
      setSortBy({ key: selectedColumn, type: "asc" });
    } else if (selectedColumn === sortBy.key && sortBy.type === "asc") {
      const type = sortBy.type === "asc" ? "desc" : "asc";
      setSortBy({ key: selectedColumn, type });
    } else {
      setSortBy({ key: "", type: "" });
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <div className="z-0 list-bg absolute top-0 left-0 w-screen h-screen" />
      <div className="p-4 md:p-10 absolute top-0 z-10 h-screen w-screen overflow-x-scroll">
        <div className="shadow-sm max-w-[1100px] m-auto text-sm">
          <h1 className="font-medium  text-lg md:text-[26px] mb-4">
            Books that Inspire Young Minds
          </h1>
          <table className="bg-white ">
            <thead>
              <tr className="divide-x">
                {BOOKS_LIST_COLUMNS.map((column, idx) => (
                  <th
                    key={idx}
                    className="text-[8px] leading-[10px] md:text-sm whitespace-nowrap border-b font-medium px-1 md:px-4 py-2 text-slate-500  text-left"
                    onClick={() => handleSort(column.key)}
                  >
                    {column?.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SORTED_BOOKS_LIST.map((book, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-cyan-50 text-[8px] leading-[10px] md:text-sm divide-x"
                >
                  <td className=" border-b border-slate-100 px-1 md:px-4 py-1 text-slate-500">
                    {book?.name}
                  </td>
                  <td className="border-b border-slate-100  px-1 md:px-4 py-1 text-slate-500 ">
                    {book?.ageFrom}
                  </td>
                  <td className="border-b border-slate-100  px-1 md:px-4 py-1 text-slate-500 ">
                    {book?.ageTo}
                  </td>
                  <td className="border-b border-slate-100  px-1 md:px-4 py-1 text-slate-500 ">
                    {book?.Topic}
                  </td>
                  <td className="border-b border-slate-100  px-1 md:px-4 py-1 text-slate-500 ">
                    {book?.Author}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BooksList;
