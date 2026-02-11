import Image from "next/image";
import Button from "./Button";

const mail = "hi@burninglamb.eu";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[var(--bg-footer)]"
    >
      <div className="mx-auto max-w-[var(--max-width)] px-4 md:px-[30px]">
        <div className="md:flex justify-between items-end">
          <div>
            <h2
          className="mb-6 font-heading text-6xl lowercase md:mb-16"
        >
          Got some questions?
        </h2>
        <div className="mb-10">
          <a
            className="text-5xl font-semibold leading-0.9 underline text-primary-500 hover:text-white md:text-9xl"
            href={`mailto:${mail}`}
          >
            {mail}
          </a>
        </div>
        <div className="flex flex-wrap gap-2 mb-10">
          <Button
            className="group flex items-center gap-2 px-5 md:px-12"
            href="https://t.me/burning_lamb"
            isAlwaysSmall
          >
            <Image
              alt=""
              src="/svg/telegram-outlined.svg"
              width="13"
              height="13"
              className="group-hover:hidden"
            />
            <Image
              alt=""
              src="/svg/telegram-filled.svg"
              width="13"
              height="13"
              className="hidden group-hover:block"
            />{" "}
            <span className="mt-[3px] flex">
              <span className="sr-only">Telegram </span>
              @Burning_lamb
            </span>
          </Button>
          <Button
            className="group flex items-center gap-2 px-5 md:px-12"
            href="https://www.instagram.com/burning.lamb/"
            isAlwaysSmall
          >
            <Image
              alt=""
              src="/svg/instagram-outlined.svg"
              width="12"
              height="12"
              className="group-hover:hidden"
            />
            <Image
              alt=""
              src="/svg/instagram-filled.svg"
              width="12"
              height="12"
              className="hidden group-hover:block"
            />{" "}
            <span className="mt-[3px] flex">
              Instagram
            </span>
          </Button>
          <Button
            className="group flex items-center gap-2 px-5 md:px-12"
            href="https://dribbble.com/burninglamb"
            isAlwaysSmall
          >
            <Image
              alt=""
              src="/svg/instagram-outlined.svg"
              width="12"
              height="12"
              className="group-hover:hidden"
            />
            <Image
              alt=""
              src="/svg/instagram-filled.svg"
              width="12"
              height="12"
              className="hidden group-hover:block"
            />{" "}
            <span className="mt-[3px] flex">
              Dribbble
            </span>
          </Button>
        </div>
          </div>
          <div className="logo logo-main mb-5" />
        </div>
        <div className="flex flex-col justify-between md:flex-row md:items-end border-t-0.5 border-gray-500 pt-5 mb-5">
          <p className="text-sm uppercase leading-1.2 tracking-8 opacity-40">
            © {new Date().getFullYear()} Burning lamb — Digital Agency
          </p>
          <p className="grid md:grid-cols-2 md:gap-8 leading-1.2 opacity-40 mb-0">
            <span>Tax ID: 2122164924</span>
            <span>Business ID: 56035136</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
