import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-between border-t-2 bg-background px-6 pt-4 lg:px-10">
      <div>
        <p>Developed by Nayark</p>
        <p>Contact: matheus.lima@ccc.ufcg.edu.br</p>
      </div>
      <p>
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
