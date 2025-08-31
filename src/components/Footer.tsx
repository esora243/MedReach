export default function Footer() {
  return (
    <footer className="footer-bg text-white py-8 md:py-10 mt-16">
      <div className="container text-center text-sm">
        <p>&copy; 2025 MedReach. All rights reserved.</p>
        <p className="mt-2 text-gray-400">医師の専門性とキャリアを力強くサポートするプラットフォーム</p>
        <div className="mt-6 flex justify-center space-x-6 text-gray-300">
          <a href="#" className="hover:text-white transition-colors duration-200">サイトマップ</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors duration-200">プライバシーポリシー</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors duration-200">利用規約</a>
        </div>
      </div>
    </footer>
  )
}