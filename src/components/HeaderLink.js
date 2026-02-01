import { twMerge } from "tailwind-merge";

export default function HeaderLink({ children, icon, className, href, hasBlob = true }) {
  return (
    <a
      href={href}
      className={twMerge(
        "group flex items-center gap-2 transition-transform",
        className,
      )}
    >
      {hasBlob && 
        <span className="h-3 w-3 rounded-full border border-solid border-primary-500 group-hover:bg-primary-500 transition-colors" />
      }
      {icon}
      <span className="grid overflow-hidden h-4">
        <span className="text-lg leading-0.8 group-hover:-translate-y-[130%] transition-transform duration-200">{children}</span>
        <span className="text-lg leading-0.8 group-hover:-translate-y-full transition-transform duration-200" aria-hidden>{children}</span>
      </span>
    </a>
  );
}
