import Image from "next/image";

export default function AboutGrid({ ...other }) {
  return (
    <div
      className="grid max-w-[250px] grid-cols-[auto,1fr] rounded-lg border-0.5 md:max-w-[455px]"
      {...other}
    >
      <div className="grid grid-rows-[1fr,auto]">
        <div className="text-mixed writing-vertical-lr mx-auto w-3 rotate-180 whitespace-nowrap py-2 text-center font-heading text-2xs lowercase leading-0.8 md:text-xs">
          Creative studio
        </div>
        <div className="group border-t-0.5 p-2 md:p-2.5 md:px-2 md:pt-1.5">
          <Image
            src="/svg/lamb.svg"
            alt=""
            width={22}
            height={18}
            priority
            className="group-hover:hidden"
          />
          <Image
            src="/svg/lamb-primary.svg"
            alt=""
            width={22}
            height={18}
            priority
            className="hidden group-hover:block"
          />
        </div>
      </div>
      <div className="grid grid-rows-[auto,1fr]">
        <div className="flex items-center justify-center gap-3.5 border-l-0.5 px-1 pb-2 pt-1.5 text-center text-2xs font-bold leading-0.9 tracking-2 md:grid md:grid-cols-[1fr,auto,1fr,auto,1fr] md:gap-12 md:px-4 md:pb-2.5 md:pt-2.5 md:text-base">
          <div>Innovate</div>
          <Image
            src="/svg/arrow-right-small.svg"
            width="10"
            height="10"
            className="text-primary-500"
          />
          <div>Elevate</div>
          <Image
            src="/svg/arrow-right-small.svg"
            width="10"
            height="10"
            className="text-primary-500"
          />
          <div>Captivate</div>
        </div>
        <div className="flex">
          <div className="flex items-center border-l-0.5 border-t-0.5 px-4.5 font-heading text-base lowercase leading-1.1 md:text-2xl">
            We create corporate excellence with creative brilliance
          </div>
          <div className="hidden justify-center gap-2.5 border-l-0.5 border-t-0.5 px-5 py-3.5 md:flex md:flex-col md:items-center">
            <a
              href="#services"
              className="group grid h-[56px] w-[34px] items-center justify-center rounded-full border-0.5 py-3 transition-colors hover:border-transparent hover:bg-primary-500"
            >
              <span className="-translate-y-[70%] transition-all duration-500 ease-out group-hover:translate-y-[70%]">
                <Image src="/svg/arrow-mouse-down.svg" width="18" height="18" />
              </span>
              <span className="sr-only">Scroll down</span>
            </a>
            <div className="text-center text-base font-bold leading-0.9 tracking-2">
              Scroll down
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
