import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24 home-bg" />
      <div className="bg-text rounded-tl-3xl rounded-br-3xl">
        <div className="mb-32 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left rounded-tl-md">
          <div className="text-center rounded-lg border border-transparent px-5 py-10 transition-colors ">
            <h1 className="font-medium text-[40px] ">
              Books that Inspire Young Minds
            </h1>
            <Link href="/books-list">
              <h2 className="group font-medium py-1 px-4 mt-4  inline-block mb-3 bg-[#4eac56] cursor-pointer">
                Check List{" "}
                <span className=" inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
