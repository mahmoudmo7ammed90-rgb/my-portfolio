import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-32 px-4 text-center" dir="rtl">
        <div className="bg-white/10 p-12 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
            مرحباً بك في معرض أعمالي
          </h1>
          <p className="text-2xl font-bold text-teal-100 mb-4">
            إعداد الطالبة: <span className="text-white underline decoration-teal-400">فاطمة خالد </span>
          </p>
          <p className="text-lg text-teal-50/80 font-medium">
            كلية التربية النوعية - جامعة عين شمس
          </p>
        </div>
      </div>
    </main>
  );
}