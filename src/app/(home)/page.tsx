import Image from "next/image";
export default function Home() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
      <div className=" px-4 md:px-6">
        <div className="flex items-center justify-center gap-8 space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter lg:text-5xl/none">
              Discover the best of cinema
            </h1>
            <p className="max-w-[600px] md:text-xl">
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
