import { SearchBar } from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img src="hero.png" className="h-8 sm:h-10 w-auto cursor-pointer"/>
          <img src="pic.png" className="h-10 sm:h-14 w-auto"/>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
          Internship
          <br />
          Task
        </h1>
      </div>
      <SearchBar/>
    </div>
  );
}
