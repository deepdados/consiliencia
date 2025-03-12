import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className=\"min-h-screen flex flex-col\" style={{ background: 'linear-gradient(135deg, #0d0d0d 30%, #1a1a1a 100%)' }}>
      {/* Navbar */}
      <header className=\"sticky top-0 z-10 bg-black bg-opacity-70 px-4 py-3 flex justify-between items-center shadow-md\">
        <Link href=\"/\">
          <a className=\"text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-all\">
            Escola de Estudos da Complexidade
          </a>
        </Link>
        <nav className=\"flex space-x-4\">
          <Link href=\"/cursos\"><a className=\"hover:text-cyan-200\">Cursos</a></Link>
          <Link href=\"/sobre\"><a className=\"hover:text-cyan-200\">Sobre</a></Link>
          <Link href=\"/contato\"><a className=\"hover:text-cyan-200\">Contato</a></Link>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main className=\"flex-1 p-4 md:p-8\">
        {children}
      </main>

      {/* Rodapé */}
      <footer className=\"bg-black bg-opacity-80 text-center text-sm text-gray-400 p-4\">
        © {new Date().getFullYear()} Escola de Estudos da Complexidade. Todos os direitos reservados.
      </footer>
    </div>
  )
}
