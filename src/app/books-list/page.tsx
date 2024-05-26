// pages/about.tsx
"use client";
import { NextPage } from "next";
import Head from "next/head";
import { BOOKS_LIST, BOOKS_LIST_COLUMNS } from "./list.constants";
import { useMemo, useState } from "react";

const BooksList = () => {
  const [sortBy, setSortBy] = useState<string>();

  const SORTED_BOOKS_LIST = useMemo(() => {
    return BOOKS_LIST;
    // return BOOKS_LIST.sort((a, b) => {
    //   if (!sortBy) return 0;

    //   if (a && b && a[sortBy] < b[sortBy]) {
    //     return -1;
    //   }
    //   if (a && b && a[sortBy] > b[sortBy]) {
    //     return 1;
    //   }
    //   return 0;
    // });
  }, []);

  return (
    <div className="relative h-screen w-screen">
      <div className="z-0 list-bg absolute top-0 left-0 w-screen h-screen" />
      <div className="p-10 absolute top-0  z-10 h-screen w-screen  overflow-x-scroll">
        <div className="shadow-sm max-w-[1100px] m-auto ">
          <h1 className="font-medium text-[26px] mb-4">
            Books that Inspire Young Minds
          </h1>
          <table className="bg-white">
            <thead>
              <tr className="divide-x">
                {BOOKS_LIST_COLUMNS.map((column, idx) => (
                  <th
                    key={idx}
                    className="text-xs whitespace-nowrap border-b font-medium px-4 py-2 pr-8 text-slate-500  text-left"
                    onClick={() => setSortBy(column.key)}
                  >
                    {column?.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SORTED_BOOKS_LIST.map((book, idx) => (
                <tr key={idx} className="hover:bg-cyan-50 text-sm divide-x">
                  <td className=" border-b border-slate-100  px-4 py-1 text-slate-500">
                    {book?.name}
                  </td>
                  <td className="border-b border-slate-100  px-4 py-1 text-slate-500 ">
                    {book?.ageFrom}
                  </td>
                  <td className="border-b border-slate-100  px-4 py-1 text-slate-500 ">
                    {book?.ageTo}
                  </td>
                  <td className="border-b border-slate-100  px-4 py-1 text-slate-500 ">
                    {book?.Topic}
                  </td>
                  <td className="border-b border-slate-100  px-4 py-1 text-slate-500 ">
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
