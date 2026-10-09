

function Header() {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
                <a
                    href="/"
                    className="text-2xl font-extrabold tracking-tight text-blue-600"
                >
                    LojaBrinquedos
                </a>

                <nav
                    aria-label="Navegação principal"
                    className="flex flex-wrap justify-center gap-6"
                >
                    <a
                        href="/"
                        className="font-medium text-gray-700 transition hover:text-blue-600"
                    >
                        Início
                    </a>

                    <a
                        href="/sobre"
                        className="font-medium text-gray-700 transition hover:text-blue-600"
                    >
                        Sobre
                    </a>

                    <a
                        href="/contato"
                        className="font-medium text-gray-700 transition hover:text-blue-600"
                    >
                        Contato
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;