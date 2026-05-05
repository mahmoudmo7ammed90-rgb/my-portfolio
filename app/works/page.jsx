import Navbar from '../../components/Navbar';

export default function WorksPage() {
  return (
    <main dir="rtl" className="min-h-screen">
      <Navbar />
      <div className="p-10">
        <h1 className="text-3xl font-bold text-center mb-10 text-white">معرض أعمالي الفنية</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* كارت مشروع 1 - فوتوشوب */}
          <div className="border rounded-xl overflow-hidden shadow-2xl bg-white transition-transform hover:scale-105 duration-300">
            <div className="h-64 w-full bg-gray-100">
              <img 
                src="/photoshop_poster.jpg" 
                alt="تصميم فوتوشوب" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 text-right">
              <h2 className="font-bold text-xl mb-2 text-teal-800">تصميم بوستر إعلاني</h2>
              <p className="text-gray-600 leading-relaxed">
                تم التصميم باستخدام Adobe Photoshop. يركز العمل على دمج الألوان وتنسيق العناصر البصرية بشكل احترافي.
              </p>
            </div>
          </div>

          {/* كارت مشروع 2 - إليستريتور */}
          <div className="border rounded-xl overflow-hidden shadow-2xl bg-white transition-transform hover:scale-105 duration-300">
            <div className="h-64 w-full bg-gray-100">
              <img 
                src="/illustrator_logo.png" 
                alt="تصميم إليستريتور" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 text-right">
              <h2 className="font-bold text-xl mb-2 text-teal-800">تصميم شعار (Logo)</h2>
              <p className="text-gray-600 leading-relaxed">
                رسم شعار فيكتور احترافي باستخدام Adobe Illustrator، مع مراعاة القواعد الهندسية للتصميم.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}