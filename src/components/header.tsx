import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col w-full justify-center items-start gap-y-2">
      <h1 className="-translate-x-2 text-[9.5vw] tracking-tighter leading-[10vw] font-bold md:text-[8vw] lg:text-[8.2vw] xl:text-[9vw]">
        no more boring avatars
      </h1>
      <p className="text-body text-neutral-300 md:text-lead text-xl">
        The best free stock and royalty free avatars. Powered by{" "}
        <span className="text-accent">AI</span> everywhere.
        <span className="text-neutral-400 pl-2">
          Scroll{" "}
        </span>
        <ChevronDown className="inline text-neutral-400 animate-bounce" />
      </p>
    </div>
  );
}

export default Header
