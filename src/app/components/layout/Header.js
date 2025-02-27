import Link from "next/link"

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link className="text-primary text-2xl font-Didact_Gothic underline" href="/">
          NORTHEAST <br/> HAO'S CANTEEN
        </Link>
        
      </nav>
      <nav className="flex items-center gap-6 text-gray-500 font-semibold">
        <Link href={'/'}>Home</Link>
        <Link href={'/Menu'}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        <Link href="/login" className="bg-primary rounded-full text-white px-8 py-2">Login</Link>
      </nav>
    </header>
  );
}