import './globals.css'

export const metadata = {
  title: 'معرض أعمالي - إسراء نبوي',
  description: 'بورتفوليو خاص بأعمال الجرافيك والتصميم',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}