const Intro = () => {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-6 md:py-12 lg:py-18">
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        Unlimited Free Image Compressor
      </h1>
      <span className="max-w-[750px] text-center text-lg sm:text-xl">
        We deliver unmatched efficiency{" "}
        <span className="font-semibold underline">
         , without storing a single file.
        </span>{" "}
        Experience lightning-fast compression, all in one place.
      </span>
    </section>
  );
};

export default Intro;
