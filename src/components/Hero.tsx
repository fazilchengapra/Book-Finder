const Hero = () => {
  return (
    <div className="mt-2 lg:mt-16">
      <div>
        <div className="lg:grid grid-cols-12">
          <div className="flex flex-col gap-2 col-span-4">
            <div className="text-title-sm lg:text-title font-bold">
              <h1 className="inline text-primary">Discover your next</h1>
              <h1 className="inline text-secondary"> read</h1>
            </div>
            <div className="col-span-8">
              <p className="text-body text-primary">
                Books are the simplest way to expand your thinking beyond the
                classroom. Read more, and you’ll discover ideas that shape your
                future.
              </p>
            </div>
            <div>
              <div className="max-w-md mx-auto">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white"
                    placeholder="Book title or author"
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-secondary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
