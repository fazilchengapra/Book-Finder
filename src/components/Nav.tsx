const Nav = () => {
  return (
    <nav className="py-10 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold">
          <span className="text-primary">BK </span>
          <span className="text-secondary">Store</span>
        </h1>
      </div>
      <div>
        <button className="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-xl">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Nav;
