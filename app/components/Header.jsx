export const Header = () => {
  return (
    <header className="my-8 z-20 h-20 flex items-center justify-between page-padding">
      <figure>
        <img
          src="/images/logo/KVS-logo.png"
          alt="logo"
          className="h-20 z-10 rounded-md"
        />
      </figure>

      <nav>
        <ul className="hidden gap-4 md:flex font-bold text-white">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* hamburgerbar: */}
        <div className="md:hidden">
          <button>
            <img src="/images/navigation/hamburgerBar.svg" alt="" />
          </button>
        </div>
      </nav>
    </header>
  );
};
