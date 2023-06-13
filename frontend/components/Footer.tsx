import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-4 text-center">
      <div className="container mx-auto">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/about">
                <span className="text-gray-800 hover:text-gray-600">Sobre</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="text-gray-800 hover:text-gray-600">Contato</span>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <span className="text-gray-800 hover:text-gray-600">Termos de Uso</span>
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-gray-800 mt-2">
          &copy; {new Date().getFullYear()} Pedido Inteligente. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
