import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full p-5 bg-white/5 backdrop-blur-lg sticky top-0 z-50 border-b border-white/10 shadow-xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <div className="flex gap-10 text-white font-bold text-lg">
          <Link href="/" className="hover:text-teal-300 transition-all hover:scale-110">الرئيسية</Link>
          <Link href="/works" className="hover:text-teal-300 transition-all hover:scale-110">أعمالي</Link>
        </div>
        <div className="text-white font-black text-xl tracking-tighter">MY PORTFOLIO</div>
      </div>
    </nav>
  );
}