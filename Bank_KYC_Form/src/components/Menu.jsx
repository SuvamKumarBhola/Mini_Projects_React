const Menu = () => {
    <div className="sticky top-0 right-0 flex flex-col h-screen gap-20 p-6 pt-10 text-white bg-dark font-primary">
        <div className="flex items-center brand">
            <img
                src=""
                alt="Suvam's Bank logo"
                className="w-20"
            />
            <h1 className="ml-8 text-2xl font-bold">Suvam Bank limited</h1>
        </div>

        <div className="menus">
            <button
                type="button"
                id="user-action-submit"
                className="flex items-center w-full gap-2 p-4 font-bold text-left transition ease-in rounded-md bg-primary"
            >
                <Verify />
                Verify KYC
            </button>
        </div>
    </div>
}

export default Menu;