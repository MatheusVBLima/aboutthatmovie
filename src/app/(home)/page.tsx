import Image from "next/image";
export default function Home() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-8 space-y-4 text-center md:flex-row">
          <div className="space-y-2">
            <h1 className="bg-gradient-to-tl from-orange-500 to-orange-700 bg-clip-text text-4xl font-bold tracking-tighter text-transparent lg:text-5xl">
              Discover the best of cinema
            </h1>
            <p className="max-w-[600px] font-semibold md:text-xl">
              Top-rated movies, now playing, popular, and upcoming releases
            </p>
          </div>
          <Image
            alt="Hero"
            className="aspect-video overflow-hidden rounded-xl"
            height="500"
            src="/hero.jpg"
            width="800"
          />
        </div>
      </div>
    </section>
  );
}
