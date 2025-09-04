import student from "../assets/student.png";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="mt-2 lg:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 m-auto w-full">
        {/* Left side content */}
        <div className="order-2 lg:order-none flex flex-col gap-6 col-span-5 w-full">
          <div className="text-title-sm lg:text-title font-bold leading-snug">
            <h1 className="inline text-primary">Discover your next</h1>
            <h1 className="inline text-secondary"> read</h1>
          </div>

          <p className="text-body text-gray-500">
            Books are the simplest way to expand your thinking beyond the
            classroom. Read more, and you’ll discover ideas that shape your
            future.
          </p>

          {/* Search box */}
          <SearchBar />
        </div>

        {/* Right side image */}
        <div className="order-1 lg:order-none col-span-7 flex justify-center lg:justify-center">
          <img
            src={student}
            alt="Student"
            className="h-80 lg:h-96 object-scale-down top-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
