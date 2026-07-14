const Menu = () => {
  return (
    <div className="sticky top-0 right-0 flex flex-col h-screen gap-16 p-6 pt-10 text-white bg-dark font-primary border-r border-white/10">
      <div className="flex items-center gap-4 brand">
        <img
          src=""
          alt="Suvam's Bank logo"
          className="object-contain w-12 h-12 rounded-full bg-white/5 ring-1 ring-white/10"
        />
        <h1 className="text-xl font-bold tracking-tight leading-tight">
          Suvam Bank
          <span className="block text-sm font-medium text-white/50">Limited</span>
        </h1>
      </div>

      <nav className="flex flex-col gap-2 menus">
        <button
          type="button"
          id="user-action-submit"
          className="flex items-center w-full gap-3 p-4 font-semibold text-left transition-all duration-150 ease-in shadow-sm rounded-xl bg-primary hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          <Verify className="w-5 h-5 shrink-0" />
          <span>Verify KYC</span>
        </button>
      </nav>
    </div>
  );
};

export default Menu;
