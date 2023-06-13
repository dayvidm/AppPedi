import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="bg-gray-200">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <div className="text-gray-800 font-bold text-xl">Pedido Inteligente</div>
            <div>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/products">
                     <span className="text-gray-800 hover:text-gray-600">Conheça o Produto</span>
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                  <span className="text-gray-800 hover:text-gray-600">Login</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
}