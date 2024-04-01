import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-4 border-t-2 bg-background  px-6 py-4 md:flex-row md:justify-between lg:px-10">
      <div className="space-y-4 text-center md:text-left">
        <p className="font-semibold">Developed by Nayark</p>
        <p className="font-semibold">Contact: matheus.lima@ccc.ufcg.edu.br</p>
      </div>
      <p className="font-semibold">
        Api used:{" "}
        <Link
          href={"https://developer.themoviedb.org/docs/getting-started"}
          className="text-blue-500"
        >
          TMDB
        </Link>
      </p>
    </footer>
  );
}
