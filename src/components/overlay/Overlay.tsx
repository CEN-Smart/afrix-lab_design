type OverlayProps = {
  section: string;
  children: React.ReactNode;
  className?: string;
};

export default function Overlay({
  section,
  children,
  className,
}: OverlayProps) {
  return (
    <section
      className={` border border-white/[.32]  bg-black/80 backdrop-filter backdrop-blur-[16px] rounded-[32px] h-fit lg:h-[874px] max-w-[1320px] mx-auto pt-20 pb-10 lg:pt-40  relative ${className}`}
    >
      <h5 className='absolute top-10 left-8 lg:left-20 text-[#9E9E9E]'>
        {section}
      </h5>
      <div className='w-[95%]  md:w-[90%] mx-auto flex items-center justify-center  px-1 md:p-0'>
        {children}
      </div>
    </section>
  );
}
