import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="bg-blue-600 text-white py-4 shadow">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-semibold">Mi Sitio Web</h1>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:underline">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="min-h-screen bg-gray-50 px-4 py-8">{children}</main>
    </>
  );
}
