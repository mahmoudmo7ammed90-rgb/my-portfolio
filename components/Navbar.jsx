import Link from 'next/link';

export default function Navbar() {
  return (
  <nav className="w-full p-4 bg-white/10 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/20">
  <div className="flex justify-around items-center text-white font-bold text-lg">
    <Link href="/" className="hover:text-teal-200 transition-all border-b-2 border-transparent hover:border-teal-200 pb-1">الرئيسية</Link>
    <Link href="/works" className="hover:text-teal-200 transition-all border-b-2 border-transparent hover:border-teal-200 pb-1">أعمالي</Link>
  </div>
</nav>
  );
}