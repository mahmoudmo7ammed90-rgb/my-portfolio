import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-32 px-4" dir="rtl">
        <div className="bg-black/20 p-10 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl text-center">
          <h1 className="text-5xl font-black text-white mb-6 drop-shadow-lg">
            مرحباً بك في معرض أعمالي
          </h1>
          <p className="text-2xl font-bold text-orange-200 drop-shadow-md">
            إعداد الطالبة: <span className="text-white">فاطمة خالد </span>
          </p>
          <p className="mt-4 text-teal-50 font-medium">
            كلية التربية النوعية - جامعة عين شمس
          </p>
        </div>
      </div>
    </main>
  );
}