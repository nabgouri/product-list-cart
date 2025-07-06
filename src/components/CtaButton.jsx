export default function CtaButton({ children, ...rest }) {
  return (
    <button
      {...rest}
      className="text-base font-semibold text-white text-center cursor-pointer  bg-red py-4 w-full rounded-[999px] before:content-[''] before:w-full before:h-14 before:absolute relative before:inset-0 before:rounded-[999px] before:-z-20 z-10  hover:before:bg-[rgba(0,0,0,0.25)] before:block"
    >
      {children}
    </button>
  );
}
