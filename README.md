<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MedReach | 医師・医療従事者のための総合情報サイト</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Sans+JP:wght@400;700;800&display=swap" rel="stylesheet">
    <style>
        /* Define a richer color palette and consistent styling */
        :root {
            --primary-blue: #1a346e; /* Even Deeper Blue */
            --secondary-blue: #2c5282; /* Professional Blue */
            --accent-teal: #0d9488; /* Darker, more grounded Teal */
            --light-gray: #f9fafb; /* Very Light Gray */
            --medium-gray: #e0e7ff; /* Lighter Blue-ish Gray for subtle borders */
            --dark-gray-text: #1f2937; /* Very Dark Gray */
            --medium-gray-text: #4b5563; /* Medium Gray */
            --header-gradient-start: #1d4ed8; /* Original Darker Blue */
            --header-gradient-end: #3b82f6; /* Original Lighter Blue */
            --button-gradient-start: #3b82f6; /* Lighter Blue for button start */
            --button-gradient-end: #1e3a8a; /* Deeper Blue for button end */
            --underline-gradient-start: #6ee7b7; /* Light Green for underline start */
            --underline-gradient-end: var(--accent-teal); /* Darker Teal for underline end */
        }

        body {
            font-family: 'Inter', 'Noto Sans JP', sans-serif;
            background-color: var(--light-gray);
            color: var(--medium-gray-text);
            line-height: 1.7; /* Enhanced line height for readability */
            /* Subtle gradient for overall background to add depth */
            background-image: linear-gradient(to bottom, var(--light-gray) 0%, #edf2f7 100%); /* From light gray to slightly cooler light gray */
            background-attachment: fixed; /* Ensures gradient covers full height */
        }
        .container {
            max-width: 1280px; /* Slightly wider container for more content */
            margin-left: auto;
            margin-right: auto;
            padding-left: 1rem;
            padding-right: 1rem;
        }
        .header-bg {
            background-image: linear-gradient(to right, var(--header-gradient-start), var(--header-gradient-end));
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* More prominent shadow for header */
            position: relative; /* For the watermark */
        }
        .header-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('画像(1).jpg');
            background-size: 200px;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 0.1; /* Subtle watermark effect */
        }
        .footer-bg {
            background-color: #1f2937;
            box-shadow: inset 0 4px 15px rgba(0, 0, 0, 0.2);
            position: relative; /* For the watermark */
        }
        .footer-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('画像(2).jpg');
            background-size: 200px;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 0.1; /* Subtle watermark effect */
        }

        .nav-link {
            transition: all 0.3s ease-in-out;
            position: relative;
            padding-bottom: 10px; /* More space for underline effect */
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #e0f2fe; /* Light blue for nav text */
        }
        .nav-link:hover {
            transform: translateY(-3px); /* More pronounced lift effect */
            color: #ffffff;
        }
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 3px;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            background-image: linear-gradient(to right, var(--underline-gradient-start), var(--underline-gradient-end)); /* Gradient for underline */
            border-radius: 9999px; /* rounded-full */
            transition: width 0.3s ease-in-out;
        }
        .nav-link.active::after {
            width: 100%;
        }
        .card {
            background-color: #ffffff;
            border-radius: 1.25rem; /* rounded-2xl, slightly more rounded */
            box-shadow: 0 8px 20px -5px rgba(0, 0, 0, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.08); /* Softer, deeper shadow */
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            border: 1px solid var(--medium-gray); /* Subtle border */
        }
        .card:hover {
            transform: translateY(-12px); /* Even more pronounced lift */
            box-shadow: 0 20px 30px -8px rgba(0, 0, 0, 0.2), 0 8px 12px -4px rgba(0, 0, 0, 0.12); /* Stronger shadow on hover */
        }
        .button-primary {
            background-image: linear-gradient(to right, var(--button-gradient-start), var(--button-gradient-end)); /* Gradient button */
            color: #ffffff;
            padding: 0.9rem 2rem; /* Slightly larger buttons */
            border-radius: 0.75rem; /* rounded-xl */
            font-weight: 700; /* font-bold */
            transition: background-position 0.4s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem; /* Slightly more space for icon */
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* More prominent shadow */
            background-size: 200% auto; /* For hover gradient animation */
        }
        .button-primary:hover {
            background-position: right center; /* Shifts gradient on hover */
            transform: translateY(-5px); /* More pronounced lift */
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Stronger shadow on hover */
        }
        .article-item {
            border-left: 5px solid var(--accent-teal); /* Accent color, thicker border */
            padding-left: 1.2rem;
            margin-bottom: 1.5rem; /* More spacing */
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
        }
        .article-item a {
            flex-grow: 1;
            color: var(--dark-gray-text);
            font-weight: 700;
            font-size: 1.125rem; /* Slightly larger title */
            line-height: 1.4;
        }
        .article-item a:hover {
            color: var(--secondary-blue);
            text-decoration: underline;
            text-underline-offset: 4px;
        }
        .article-summary {
            font-size: 0.95rem; /* Slightly larger summary text */
            color: var(--medium-gray-text);
            line-height: 1.5;
        }
        .section-title {
            color: var(--primary-blue);
            font-size: 2.75rem; /* Even larger section titles */
            font-weight: 800; /* Extra bold */
            text-align: center;
            margin-bottom: 3rem; /* More space */
            position: relative;
        }
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 90px; /* Slightly wider underline */
            height: 4px;
            background-image: linear-gradient(to right, var(--underline-gradient-start), var(--underline-gradient-end)); /* Gradient for underline */
            border-radius: 9999px;
        }

        /* SVG Icon styling - using Lucide-like icons for clarity */
        .icon-small {
            width: 1.35rem; /* Slightly larger icons */
            height: 1.35rem;
            fill: none; /* No fill by default */
            stroke: currentColor; /* Use current text color for stroke */
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            flex-shrink: 0;
        }
        .icon-medium {
            width: 1.65rem;
            height: 1.65rem;
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            flex-shrink: 0;
        }
        .icon-large {
            width: 2rem;
            height: 2rem;
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            flex-shrink: 0;
        }

        /* Image styling */
        .feature-image {
            width: 100%;
            height: auto;
            border-radius: 1.25rem; /* Rounded corners for images */
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2); /* Deeper shadow for main images */
            margin-bottom: 2.5rem;
            object-fit: cover;
        }
        /* MHLW Links specific styling */
        .mhlw-category-card {
            display: flex;
            flex-direction: column;
            padding: 1.5rem;
        }
        .mhlw-category-card h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-blue);
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        .mhlw-category-card p {
            font-size: 0.95rem;
            line-height: 1.6;
            color: var(--medium-gray-text);
            margin-bottom: 1.25rem;
            flex-grow: 1; /* Allows description to take available space */
        }
        .mhlw-category-card ul {
            list-style: none;
            padding: 0;
            margin: 0;
            border-top: 1px solid var(--medium-gray); /* Separator line */
            padding-top: 1rem;
        }
        .mhlw-category-card li {
            margin-bottom: 0.75rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .mhlw-category-card li a {
            color: var(--secondary-blue);
            font-weight: 600;
            text-decoration: none;
            transition: color 0.2s ease-in-out, text-decoration 0.2s ease-in-out;
        }
        .mhlw-category-card li a:hover {
            color: var(--primary-blue);
            text-decoration: underline;
        }

        /* Hidden by default for tab-like navigation */
        .content-section {
            display: none;
            animation: fadeIn 0.5s ease-out; /* Fade in animation for content sections */
        }
        .content-section.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Admin Panel Specific Styles */
        .admin-panel-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        }
        .admin-panel-overlay.active {
            opacity: 1;
            visibility: visible;
        }
        .admin-panel-content {
            background-color: #ffffff;
            border-radius: 1.5rem;
            padding: 2.5rem;
            width: 90%;
            max-width: 1000px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
            transform: scale(0.95);
            transition: transform 0.3s ease-in-out;
        }
        .admin-panel-overlay.active .admin-panel-content {
            transform: scale(1);
        }
        .admin-input {
            border: 1px solid var(--medium-gray);
            border-radius: 0.5rem;
            padding: 0.75rem 1rem;
            width: 100%;
            font-size: 1rem;
            margin-bottom: 1rem;
        }
        .admin-button {
            background-image: linear-gradient(to right, #60a5fa, #3b82f6);
            color: white;
            padding: 0.6rem 1.2rem;
            border-radius: 0.5rem;
            font-weight: 600;
            transition: background-position 0.3s ease-in-out, transform 0.2s ease-in-out;
            background-size: 200% auto;
        }
        .admin-button:hover {
            background-position: right center;
            transform: translateY(-2px);
        }
        .admin-button.delete {
            background-image: linear-gradient(to right, #ef4444, #dc2626); /* Red gradient for delete */
        }
        .admin-button.delete:hover {
            background-position: right center;
            transform: translateY(-2px);
        }
    </style>
</head>
<body class="antialiased">
    <div class="header-bg text-white py-6 md:py-8 shadow-lg">
        <div class="container flex flex-col md:flex-row items-center justify-between relative z-10">
            <h1 class="text-3xl md:text-4xl font-extrabold mb-4 md:mb-0">MedReach</h1>
            <nav>
                <ul class="flex flex-wrap justify-center space-x-4 md:space-x-8 text-lg md:text-xl font-semibold">
                    <li><a href="#home" class="nav-link active">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        ホーム
                    </a></li>
                    <li><a href="#article-history" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v6h6"/><path d="M10 12H8"/><path d="M16 16H8"/><path d="M16 12H12"/></svg>
                        記事アーカイブ
                    </a></li>
                    <li><a href="#job-postings" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                        求人情報
                    </a></li>
                    <li><a href="#clinic-transfer" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hospital"><path d="M12 6V2H2v10a4 4 0 0 0 4 4h10v6h4V6Z"/><path d="M12 18h.01"/><path d="M12 12h.01"/></svg>
                        クリニック譲渡
                    </a></li>
                    <li><a href="#blog" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M16 16h-2"/></svg>
                        ドクターズブログ
                    </a></li>
                    <li><a href="#mhlw-links" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3.5-3.5a4 4 0 0 0-6.74-6.74l1.24-1.24a7.5 7.5 0 0 1-.12 10.62ZM14 11a5 5 0 0 0-7.54-.54l-3.5 3.5a4 4 0 0 0 6.74 6.74l-1.24 1.24a7.5 7.5 0 0 1 .12-10.62Z"/></svg>
                        厚生労働省
                    </a></li>
                </ul>
            </nav>
            <button id="adminLoginBtn" class="ml-4 px-4 py-2 bg-white text-primary-blue rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200">管理者ログイン</button>
            <button id="adminPanelBtn" class="ml-4 px-4 py-2 bg-accent-teal text-white rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 hidden">管理者パネル</button>
        </div>
    </div>

    <main class="container py-8 md:py-12">
        <!-- ホームセクション -->
        <section id="home" class="content-section active mb-12 md:mb-16 bg-white p-8 rounded-xl shadow-lg text-center">
            <h2 class="section-title">MedReach：医師の知的好奇心とキャリアの次なる一歩を繋ぐ</h2>
            <img src="画像(3).jpg" alt="[医療研究のイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
            <p class="text-xl text-dark-gray-text max-w-3xl mx-auto leading-relaxed mb-6">
                先生方の「知りたい」に真摯に寄り添い、日々の診療に役立つ専門記事、キャリアの選択肢を広げる求人・譲渡情報、そして国の重要な公式発表まで、必要な情報を迷いなく手に入れられるよう、本プラットフォームは設計されております。
            </p>
            <p class="text-lg text-medium-gray-text max-w-3xl mx-auto leading-relaxed">
                2019年以来、毎月3本の厳選記事で、先生方の専門知識とキャリアを力強く後押ししています。
            </p>
            <div class="text-center mt-10">
                <a href="#article-history" class="button-primary page-link">
                    <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    最新記事を見る
                </a>
            </div>
        </section>

        <!-- 記事・情報履歴セクション -->
        <section id="article-history" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">記事アーカイブ：2019年からの医療トレンドを深掘り</h2>
            <img src="画像(4).jpg" alt="[医療記事のアーカイブイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
            <p class="text-md text-medium-gray-text text-center mb-10 max-w-3xl mx-auto">
                2019年より毎月3本、医療界の重要な動きを捉えた記事を公開しています。各年の主要テーマと記事概要で、最新トレンドを効率的にキャッチしてください。
            </p>
            <div id="articleGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Articles will be dynamically loaded here by JavaScript -->
            </div>
        </section>

        <!-- 求人情報セクション -->
        <section id="job-postings" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">求人情報：あなたの専門性を活かす次なるステージへ</h2>
            <img src="画像(5).jpg" alt="[求職活動のイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
            <p class="text-md text-medium-gray-text text-center mb-10 max-w-3xl mx-auto">
                専門分野や働き方のニーズに応える、医師向けの厳選求人情報です。ビズリーチやマイナビドクターのような質の高い情報提供を目指し、先生方の理想の職場探しをMedReachがサポートします。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">外科医募集（都内総合病院）</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        緊急オペ対応可能な外科医を募集。専門医資格優遇。最先端の手術設備と充実した研修制度が魅力です。
                    </p>
                    <ul class="text-sm text-gray-500 list-disc list-inside mb-4 space-y-1">
                        <li>勤務地: 東京都23区内</li>
                        <li>年収: 1,500万円〜2,500万円</li>
                        <li>待遇: 住宅手当、学会参加費補助、週休2日制</li>
                    </ul>
                    <img src="画像(6).jpg" alt="[都内総合病院のイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://doctor.mynavi.jp/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">内科クリニック院長候補（地方都市）</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        地域医療に貢献したい内科医を求む。将来的な開業支援も可能で、地域に密着した医療を提供できます。
                    </p>
                    <ul class="text-sm text-gray-500 list-disc list-inside mb-4 space-y-1">
                        <li>勤務地: 静岡県静岡市</li>
                        <li>年収: 1,800万円〜3,000万円</li>
                        <li>待遇: 車通勤可、退職金制度あり、開業支援制度</li>
                    </ul>
                    <img src="画像(7).jpg" alt="[地方クリニックのイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.bizreach.jp/career-change/medical/doctor/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">産業医（大手企業専属）</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        従業員の健康管理・メンタルヘルスケアに従事する産業医を募集。ワークライフバランスを重視した働き方が可能です。
                    </p>
                    <ul class="text-sm text-gray-500 list-disc list-inside mb-4 space-y-1">
                        <li>勤務地: 大阪府大阪市</li>
                        <li>年収: 1,200万円〜1,800万円</li>
                        <li>待遇: 完全週休二日制、福利厚生充実、研修制度</li>
                    </ul>
                    <img src="画像(8).jpg" alt="[大手企業のイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.dr-summit.jp/column/industrial_physician/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">健診センター医師（パート・非常勤）</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        健康診断や人間ドックの診察・読影業務。柔軟なシフト対応が可能で、子育て中の方にも働きやすい環境です。
                    </p>
                    <ul class="text-sm text-gray-500 list-disc list-inside mb-4 space-y-1">
                        <li>勤務地: 愛知県名古屋市</li>
                        <li>時給: 10,000円〜15,000円</li>
                        <li>待遇: 交通費支給、扶養内勤務応相談、午前のみ勤務可</li>
                    </ul>
                    <img src="画像(9).jpg" alt="[健診センターのイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.m3.com/doctor/job/parttime/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
            </div>
            <div class="text-center mt-12">
                <a href="https://www.dr-summit.jp/" target="_blank" class="button-primary">
                    <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    さらに多くの求人情報を見る
                </a>
            </div>
        </section>

        <!-- クリニック譲渡情報セクション -->
        <section id="clinic-transfer" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">クリニック譲渡：理想の医療を叶える、新たな開業の選択肢</h2>
            <img src="画像(10).jpg" alt="[クリニック譲渡のイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
            <p class="text-md text-medium-gray-text text-center mb-10 max-w-3xl mx-auto">
                開業を検討中の先生方、新たな挑戦をお考えの方へ。質の高いクリニック譲渡案件を厳選し、スムーズな事業承継を支援します。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">内科クリニック（東京都世田谷区）</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        駅徒歩5分の好立地。地域に根ざした内科クリニックで、長年の実績と安定した患者数を維持。院長引退のため譲渡希望です。
                    </p>
                    <ul class="text-sm text-gray-500 list-disc list-inside mb-4 space-y-1">
                        <li>勤務地: 東京都世田谷区</li>
                        <li>診療科目: 内科、小児科</li>
                        <li>譲渡価格: 5,000万円</li>
                        <li>特記事項: 既存患者基盤あり、スタッフ引き継ぎ可</li>
                    </ul>
                    <img src="画像(11).jpg" alt="[世田谷区のクリニック外観]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.medius.co.jp/transfer/clinic/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">眼科クリニック（大阪府吹田市）</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        最新設備が整った清潔な眼科クリニック。駅直結でアクセス良好。事業拡大のため譲渡を検討しています。
                    </p>
                    <ul class="text-sm text-gray-500 list-disc list-inside mb-4 space-y-1">
                        <li>勤務地: 大阪府吹田市</li>
                        <li>診療科目: 眼科</li>
                        <li>譲渡価格: 7,500万円</li>
                        <li>特記事項: 最新のレーザー治療器導入済、駅直結</li>
                    </ul>
                    <img src="画像(12).jpg" alt="[吹田市の眼科クリニック]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.japan-med.co.jp/clinic-transfer/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">皮膚科・美容皮膚科（名古屋市栄）</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        商業地域に位置し、美容医療ニーズが高いクリニック。経験豊富なスタッフが在籍し、すぐに運営を開始できます。
                    </p>
                    <ul class="text-sm text-gray-500 list-disc list-inside mb-4 space-y-1">
                        <li>勤務地: 愛知県名古屋市栄</li>
                        <li>診療科目: 皮膚科、美容皮膚科</li>
                        <li>譲渡価格: 9,000万円</li>
                        <li>特記事項: 美容機器一式、集客ノウハウ提供、駅近</li>
                    </ul>
                    <img src="画像(13).jpg" alt="[名古屋市の美容皮膚科]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.iryokai.co.jp/consulting/transfer/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">整形外科クリニック（福岡市中央区）</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        スポーツ外傷対応の整形外科クリニック。地域住民からの信頼も厚く、院長の健康問題で早期譲渡希望。
                    </p>
                    <ul class="text-sm text-gray-500 list-disc list-inside mb-4 space-y-1">
                        <li>勤務地: 福岡市中央区</li>
                        <li>診療科目: 整形外科、リハビリテーション科</li>
                        <li>譲渡価格: 6,000万円</li>
                        <li>特記事項: 理学療法士常勤、駐車場完備</li>
                    </ul>
                    <img src="画像(14).jpg" alt="[福岡市の整形外科]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.dr-summit.jp/column/clinic_transfer/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
            </div>
            <div class="text-center mt-12">
                <a href="https://www.clinic-m.jp/joto/" target="_blank" class="button-primary">
                    <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    さらに多くの譲渡情報を見る
                </a>
            </div>
        </section>

        <!-- ブログセクション -->
        <section id="blog" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">ドクターズブログ：現場の知見と未来への提言</h2>
            <img src="画像(15).jpg" alt="[医療ブログのイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
            <p class="text-md text-medium-gray-text text-center mb-10 max-w-3xl mx-auto">
                現役医師や医療専門家が執筆するコラム・解説記事です。日々の診療のヒントからキャリア、最新医療トレンドまで、多岐にわたるテーマを深く掘り下げます。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">医師のキャリアパス多様化：開業医から産業医まで</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        臨床以外の選択肢も豊富です。研究、公衆衛生、産業医、そして起業。あなたの可能性を広げる多様なキャリアパスを解説します。
                    </p>
                    <img src="画像(16).jpg" alt="[多様なキャリアパスのイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <a href="#" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        続きを読む
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">AI医療の現状と未来：医師が知っておくべきこと</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        診断支援から新薬開発まで、急速に進化するAI医療。その可能性と課題、医師に求められる役割について深く考察します。
                    </p>
                    <img src="画像(17).jpg" alt="[AI医療のイラスト]" class="w-full h-auto rounded-lg mb-4">
                    <a href="#" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        続きを読む
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">ストレス社会を生き抜く：医師のためのメンタルヘルス術</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        多忙な医療現場で働く医師のメンタルヘルスは非常に重要です。ストレス管理、リフレッシュ法、専門機関の活用についてご紹介します。
                    </p>
                    <img src="画像(18).jpg" alt="[メンタルヘルスケアのイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <a href="#" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        続きを読む
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">地域医療の最前線：医師のやりがいと挑戦</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        過疎地域での医療提供は多くの困難を伴いますが、その中で見つけるやりがいや、地域住民との深い繋がりについて探ります。
                    </p>
                    <img src="画像(19).jpg" alt="[地域医療の様子]" class="w-full h-auto rounded-lg mb-4">
                    <a href="#" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        続きを読む
                    </a>
                </div>
            </div>
            <div class="text-center mt-12">
                <a href="https://www.medley.life/news/" target="_blank" class="button-primary">
                    <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    さらに多くのブログ記事を見る
                </a>
            </div>
        </section>

        <!-- 厚生労働省リンクセクション -->
        <section id="mhlw-links" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">厚生労働省：医師が知るべき制度・ガイドライン一覧</h2>
            <p class="text-md text-medium-gray-text text-center mb-10 max-w-3xl mx-auto">
                医師の皆様に不可欠な厚生労働省の公式情報を、テーマ別に整理しました。必要な制度やガイドラインへ迷わずアクセスいただけます。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- カテゴリ1: 医師資格・免許・研修 -->
                <div class="card mhlw-category-card">
                    <h3 class="mb-4"><svg class="icon-large text-secondary-blue" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5M2 10v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6"/><path d="M6 10v6"/><path d="M18 10v6"/><path d="M12 2v3"/></svg>医師資格・免許・研修</h3>
                    <img src="画像(20).jpg" alt="[医師免許のイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <p>医師免許の取得・更新手続き、専門医制度、各種研修制度など、医師としてのキャリア形成に欠かせない情報です。</p>
                    <ul>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/ishimensetsu/index.html" target="_blank">医師免許関係情報</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/kensyu/index.html" target="_blank">医師臨床研修制度</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/senmoni/index.html" target="_blank">専門医制度について</a></li>
                    </ul>
                </div>
                <!-- カテゴリ2: 医療法規・倫理・安全 -->
                <div class="card mhlw-category-card">
                    <h3 class="mb-4"><svg class="icon-large text-secondary-blue" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scale"><path d="m16 16 3-3V9l-3 3"/><path d="M21 16V9l-3 3"/><path d="M21 16H9a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h5"/><path d="M16 16H4a2 2 0 0 1-2-2V3a1 1 0 0 1 1-1h12a2 2 0 0 1 2 2v10"/></svg>医療法規・倫理・安全</h3>
                    <img src="画像(21).jpg" alt="[医療法規に関する文書のイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <p>医療法、医師法、医療安全、医療倫理に関する最新の法令やガイドラインなど、診療の遵守事項を確認できます。</p>
                    <ul>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/hourei/index.html" target="_blank">医療法関係通知</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/iryou_anzen/index.html" target="_blank">医療安全対策</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/shingi/shingi-kousei_261545.html" target="_blank">医療倫理に関する指針</a></li>
                    </ul>
                </div>
                <!-- カテゴリ3: 診療報酬・医療制度 -->
                <div class="card mhlw-category-card">
                    <h3 class="mb-4"><svg class="icon-large text-secondary-blue" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-yen"><path d="M12 1v22"/><path d="M17 7H7M17 17H7"/></svg>診療報酬・医療制度</h3>
                    <img src="画像(22).jpg" alt="[診療報酬に関するグラフのイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <p>診療報酬改定情報、保険制度、地域医療構想など、医療経営や国の医療政策に関わる重要な情報をご確認いただけます。</p>
                    <ul>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryouhoken/index.html" target="_blank">診療報酬改定について</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryouhoken/kokuho/index.html" target="_blank">国民健康保険・後期高齢者医療</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/iryou_keikaku/index.html" target="_blank">地域医療構想</a></li>
                    </ul>
                </div>
                <!-- カテゴリ4: 感染症対策・公衆衛生 -->
                <div class="card mhlw-category-card">
                    <h3 class="mb-4"><svg class="icon-large text-secondary-blue" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-virus"><path d="M10 2c.5 0 1 .5 1 1v2"/><path d="M14 2c-.5 0-1 .5-1 1v2"/><path d="M15 13v-2c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v2"/><path d="M12 9v6"/><path d="M16 15v2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2"/><path d="M11 22c.5 0 1-.5 1-1v-2"/><path d="M13 22c-.5 0-1-.5-1-1v-2"/><path d="M22 12h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2"/><path d="M20 16c0 1.1.9 2 2 2h2"/><path d="M2 12h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H2"/><path d="M4 8c0-1.1-.9-2-2-2H0"/></svg>感染症対策・公衆衛生</h3>
                    <img src="画像(23).jpg" alt="[感染症対策のイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <p>新型コロナウイルス感染症をはじめとする各種感染症の情報、予防接種、公衆衛生関連の最新動向を把握できます。</p>
                    <ul>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/bunya/kenkou/kekkaku-kansenshou04/index.html" target="_blank">感染症情報全般</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou04/inful_04.html" target="_blank">新型インフルエンザ対策</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/vaccine_index.html" target="_blank">予防接種情報</a></li>
                    </ul>
                </div>
                <!-- カテゴリ5: 働き方改革・労働環境 -->
                <div class="card mhlw-category-card">
                    <h3 class="mb-4"><svg class="icon-large text-secondary-blue" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-cog"><circle cx="12" cy="7" r="4"/><path d="M12 15v2"/><path d="M16 19h-8"/><path d="M17.6 17.6a2 2 0 0 0-2.8 0l-1.4 1.4a2 2 0 0 0 0 2.8l1.4 1.4a2 2 0 0 0 2.8 0l1.4-1.4a2 2 0 0 0 0-2.8z"/><path d="M2 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>働き方改革・労働環境</h3>
                    <img src="画像(24).jpg" alt="[ワークライフバランスのイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <p>医師の労働時間短縮、タスクシフト、女性医師支援など、より良い労働環境を実現するための国の取り組みをご紹介します。</p>
                    <ul>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/ishihou/index.html" target="_blank">医師の働き方改革</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/zyosei_sien/index.html" target="_blank">女性医師等に対する支援</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/chiikihenzai/index.html" target="_blank">医師の地域偏在対策</a></li>
                    </ul>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer-bg text-white py-8 md:py-10 mt-16">
        <div class="container text-center text-sm relative z-10">
            <p>&copy; 2023 MedReach. All rights reserved.</p>
            <p class="mt-2 text-gray-400">医師の専門性とキャリアを力強くサポートするプラットフォーム</p>
            <div class="mt-6 flex justify-center space-x-6 text-gray-300">
                <a href="#" class="hover:text-white transition-colors duration-200">サイトマップ</a>
                <span class="text-gray-600">|</span>
                <a href="#" class="hover:text-white transition-colors duration-200">プライバシーポリシー</a>
                <span class="text-gray-600">|</span>
                <a href="#" class="hover:text-white transition-colors duration-200">利用規約</a>
            </div>
        </div>
    </footer>

    <!-- Admin Login Modal -->
    <div id="adminLoginModal" class="admin-panel-overlay">
        <div class="admin-panel-content text-center">
            <h3 class="text-2xl font-bold text-primary-blue mb-6">管理者ログイン</h3>
            <input type="password" id="adminPasswordInput" class="admin-input" placeholder="パスワードを入力してください">
            <p id="adminLoginError" class="text-red-500 text-sm mb-4 hidden">パスワードが間違っています。</p>
            <div class="flex justify-center space-x-4">
                <button id="loginSubmitBtn" class="admin-button">ログイン</button>
                <button id="loginCancelBtn" class="admin-button delete">キャンセル</button>
            </div>
        </div>
    </div>

    <!-- Admin Panel Modal -->
    <div id="adminPanelModal" class="admin-panel-overlay">
        <div class="admin-panel-content">
            <h3 class="text-2xl font-bold text-primary-blue mb-6">記事管理パネル</h3>

            <!-- Add New Article Form -->
            <div class="mb-8 p-6 border border-medium-gray rounded-xl shadow-sm">
                <h4 class="text-xl font-semibold text-dark-gray-text mb-4">新規記事の追加</h4>
                <input type="text" id="newArticleTitle" class="admin-input" placeholder="記事タイトル">
                <textarea id="newArticleSummary" class="admin-input h-24 resize-y" placeholder="記事概要"></textarea>
                <button id="addArticleBtn" class="admin-button">記事を追加</button>
            </div>

            <!-- Existing Articles List -->
            <div class="mb-8">
                <h4 class="text-xl font-semibold text-dark-gray-text mb-4">既存記事の編集・削除</h4>
                <div id="adminArticleList" class="space-y-4">
                    <!-- Articles will be loaded here by JS -->
                </div>
            </div>

            <div class="flex justify-end">
                <button id="closeAdminPanelBtn" class="admin-button delete">パネルを閉じる</button>
            </div>
        </div>
    </div>

    <script type="module">
        // Firebase SDKs
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
        import { getFirestore, collection, query, orderBy, getDocs, addDoc, setDoc, updateDoc, deleteDoc, doc, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

        // Global Firebase variables
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
        const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
        const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

        let app;
        let db;
        let auth;
        let userId = 'anonymous'; // Default to anonymous
        let isAdmin = false; // Admin status

        // --- Firebase Initialization and Authentication ---
        async function initializeFirebase() {
            try {
                app = initializeApp(firebaseConfig);
                db = getFirestore(app);
                auth = getAuth(app);

                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        userId = user.uid;
                        console.log("Firebase authenticated. User ID:", userId);
                        // Load articles after authentication
                        loadArticles();
                    } else {
                        console.log("No user signed in. Attempting anonymous sign-in.");
                        try {
                            if (initialAuthToken) {
                                await signInWithCustomToken(auth, initialAuthToken);
                            } else {
                                await signInAnonymously(auth);
                            }
                        } catch (error) {
                            console.error("Firebase anonymous sign-in failed:", error);
                        }
                    }
                });
            } catch (error) {
                console.error("Firebase initialization failed:", error);
            }
        }

        // --- Article Data Management (Firestore) ---
        const ARTICLES_COLLECTION_PATH = `/artifacts/${appId}/public/data/doctor_reach_articles`;

        let currentArticles = []; // Store articles fetched from Firestore

        async function loadArticles() {
            if (!db) {
                console.warn("Firestore not initialized.");
                return;
            }

            const q = query(collection(db, ARTICLES_COLLECTION_PATH), orderBy('timestamp', 'desc'));

            onSnapshot(q, (snapshot) => {
                const fetchedArticles = [];
                snapshot.forEach((doc) => {
                    fetchedArticles.push({ id: doc.id, ...doc.data() });
                });
                currentArticles = fetchedArticles; // Update global article list
                renderArticles(); // Re-render articles in main view
                if (isAdmin) {
                    renderAdminArticleList(); // Re-render articles in admin panel if open
                }
                console.log("Articles loaded/updated from Firestore.");
            }, (error) => {
                console.error("Error fetching articles:", error);
            });
        }

        async function addArticle(title, summary) {
            if (!db || !isAdmin) return;
            try {
                await addDoc(collection(db, ARTICLES_COLLECTION_PATH), {
                    title,
                    summary,
                    timestamp: serverTimestamp(), // Use server timestamp for consistent ordering
                    year: new Date().getFullYear(),
                    month: new Date().getMonth() // 0-indexed
                });
                document.getElementById('newArticleTitle').value = '';
                document.getElementById('newArticleSummary').value = '';
                console.log("Article added successfully.");
            } catch (error) {
                console.error("Error adding article:", error);
            }
        }

        async function updateArticle(id, title, summary) {
            if (!db || !isAdmin) return;
            try {
                const articleRef = doc(db, ARTICLES_COLLECTION_PATH, id);
                await updateDoc(articleRef, { title, summary });
                console.log("Article updated successfully.");
            } catch (error) {
                console.error("Error updating article:", error);
            }
        }

        async function deleteArticle(id) {
            if (!db || !isAdmin) return;
            try {
                const articleRef = doc(db, ARTICLES_COLLECTION_PATH, id);
                await deleteDoc(articleRef);
                console.log("Article deleted successfully.");
            } catch (error) {
                console.error("Error deleting article:", error);
            }
        }

        // --- UI Rendering Functions ---
        function renderArticles() {
            const articleGrid = document.getElementById('articleGrid');
            if (!articleGrid) return;

            let articleContent = '';
            let imageCounter = 3; // Start from 画像(3).jpg for article cards

            const articlesByYearMonth = {};
            currentArticles.forEach(article => {
                const year = article.year;
                const month = article.month; // 0-indexed
                if (!articlesByYearMonth[year]) articlesByYearMonth[year] = {};
                if (!articlesByYearMonth[year][month]) articlesByYearMonth[year][month] = [];
                articlesByYearMonth[year][month].push(article);
            });

            const sortedYears = Object.keys(articlesByYearMonth).sort((a, b) => b - a); // Descending year

            sortedYears.forEach(year => {
                const sortedMonths = Object.keys(articlesByYearMonth[year]).sort((a, b) => b - a); // Descending month
                sortedMonths.forEach(month => {
                    const monthNames = [
                        "1月", "2月", "3月", "4月", "5月", "6月",
                        "7月", "8月", "9月", "10月", "11月", "12月"
                    ];
                    const monthName = monthNames[month];
                    const articlesForMonth = articlesByYearMonth[year][month];

                    // Ensure we display up to 3 articles per month for consistency
                    const displayArticles = articlesForMonth.slice(0, 3);

                    articleContent += `
                        <div class="card p-6">
                            <h3 class="text-xl font-semibold mb-4 text-primary-blue">${year}年 ${monthName}</h3>
                            ${(year == new Date().getFullYear() && (month == 0 || month == 3 || month == 6 || month == 8)) ? `<img src="画像(${imageCounter++}).jpg" alt="[医療トレンドのイメージ]" class="w-full h-auto rounded-lg mb-4">` : ''}
                            <ul class="space-y-4">
                                ${displayArticles.map(article => `
                                    <li class="article-item">
                                        <a href="#" class="text-dark-gray-text hover:text-secondary-blue font-bold">${article.title}</a>
                                        <p class="article-summary">${article.summary}</p>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    `;
                });
            });
            articleGrid.innerHTML = articleContent;
        }

        function renderAdminArticleList() {
            const adminArticleList = document.getElementById('adminArticleList');
            if (!adminArticleList) return;

            adminArticleList.innerHTML = ''; // Clear existing list

            currentArticles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.className = 'p-4 border border-medium-gray rounded-lg bg-white shadow-sm mb-3';
                articleElement.innerHTML = `
                    <div class="flex justify-between items-center mb-2">
                        <h5 class="text-lg font-semibold text-dark-gray-text">${article.title}</h5>
                        <div>
                            <button data-id="${article.id}" class="edit-article-btn admin-button mr-2">編集</button>
                            <button data-id="${article.id}" class="delete-article-btn admin-button delete">削除</button>
                        </div>
                    </div>
                    <p class="text-sm text-medium-gray-text mb-2">${article.summary}</p>
                    <div class="edit-form hidden mt-4">
                        <input type="text" class="edit-title-input admin-input" value="${article.title}">
                        <textarea class="edit-summary-input admin-input h-20 resize-y">${article.summary}</textarea>
                        <button data-id="${article.id}" class="save-edit-btn admin-button mr-2">保存</button>
                        <button class="cancel-edit-btn admin-button delete">キャンセル</button>
                    </div>
                `;
                adminArticleList.appendChild(articleElement);
            });

            // Add event listeners for edit/delete/save/cancel buttons in admin panel
            adminArticleList.querySelectorAll('.edit-article-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const parent = e.target.closest('.p-4');
                    parent.querySelector('.edit-form').classList.remove('hidden');
                    e.target.classList.add('hidden'); // Hide edit button
                });
            });

            adminArticleList.querySelectorAll('.cancel-edit-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const parent = e.target.closest('.p-4');
                    parent.querySelector('.edit-form').classList.add('hidden');
                    parent.querySelector('.edit-article-btn').classList.remove('hidden'); // Show edit button
                });
            });

            adminArticleList.querySelectorAll('.save-edit-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    const parent = e.target.closest('.p-4');
                    const newTitle = parent.querySelector('.edit-title-input').value;
                    const newSummary = parent.querySelector('.edit-summary-input').value;
                    updateArticle(id, newTitle, newSummary);
                    parent.querySelector('.edit-form').classList.add('hidden');
                    parent.querySelector('.edit-article-btn').classList.remove('hidden');
                });
            });

            adminArticleList.querySelectorAll('.delete-article-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    if (confirm('この記事を削除してもよろしいですか？')) { // Using confirm for simplicity in admin panel
                        const id = e.target.dataset.id;
                        deleteArticle(id);
                    }
                });
            });
        }


        // --- Admin Login/Panel Logic ---
        const adminLoginBtn = document.getElementById('adminLoginBtn');
        const adminPanelBtn = document.getElementById('adminPanelBtn');
        const adminLoginModal = document.getElementById('adminLoginModal');
        const adminPasswordInput = document.getElementById('adminPasswordInput');
        const adminLoginError = document.getElementById('adminLoginError');
        const loginSubmitBtn = document.getElementById('loginSubmitBtn');
        const loginCancelBtn = document.getElementById('loginCancelBtn');
        const adminPanelModal = document.getElementById('adminPanelModal');
        const closeAdminPanelBtn = document.getElementById('closeAdminPanelBtn');
        const addArticleBtn = document.getElementById('addArticleBtn');

        adminLoginBtn.addEventListener('click', () => {
            adminLoginModal.classList.add('active');
            adminPasswordInput.value = '';
            adminLoginError.classList.add('hidden');
        });

        loginSubmitBtn.addEventListener('click', () => {
            const password = adminPasswordInput.value;
            if (password === 'esora243') { // Admin password check
                isAdmin = true;
                adminLoginModal.classList.remove('active');
                adminLoginBtn.classList.add('hidden');
                adminPanelBtn.classList.remove('hidden');
                renderAdminArticleList(); // Load articles into admin panel
            } else {
                adminLoginError.classList.remove('hidden');
            }
        });

        loginCancelBtn.addEventListener('click', () => {
            adminLoginModal.classList.remove('active');
        });

        adminPanelBtn.addEventListener('click', () => {
            if (isAdmin) {
                adminPanelModal.classList.add('active');
                renderAdminArticleList(); // Ensure list is fresh when opening panel
            }
        });

        closeAdminPanelBtn.addEventListener('click', () => {
            adminPanelModal.classList.remove('active');
        });

        addArticleBtn.addEventListener('click', () => {
            const title = document.getElementById('newArticleTitle').value;
            const summary = document.getElementById('newArticleSummary').value;
            if (title && summary) {
                addArticle(title, summary);
            } else {
                alert('記事タイトルと概要を入力してください。'); // Simple alert for admin input validation
            }
        });


        // --- General UI Logic ---
        // Tab-like navigation functionality
        document.querySelectorAll('nav .nav-link').forEach(navLink => {
            navLink.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent default anchor link behavior

                const targetId = this.getAttribute('href'); // Get target section ID, e.g., "#home"
                const targetSection = document.querySelector(targetId);

                // Hide all content sections
                document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.remove('active');
                });

                // Show the target section
                if (targetSection) {
                    targetSection.classList.add('active');
                }

                // Update active class for navigation links
                document.querySelectorAll('nav .nav-link').forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // For internal page links (e.g., "最新記事を見る" button on Home)
        document.querySelectorAll('.page-link').forEach(pageLink => {
            pageLink.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                const targetNavLink = document.querySelector(`nav .nav-link[href="${targetId}"]`);

                // Hide all content sections
                document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.remove('active');
                });

                // Show the target section
                if (targetSection) {
                    targetSection.classList.add('active');
                    targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section when coming from another section.
                }

                // Update active class for navigation links
                document.querySelectorAll('nav .nav-link').forEach(link => link.classList.remove('active'));
                if (targetNavLink) {
                    targetNavLink.classList.add('active');
                }
            });
        });

        // Set initial active class for home section and its nav link on page load
        document.addEventListener('DOMContentLoaded', () => {
            // Find the #home section and make it active
            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.classList.add('active');
            }

            // Find the #home nav link and make it active
            const homeNavLink = document.querySelector('nav .nav-link[href="#home"]');
            if (homeNavLink) {
                homeNavLink.classList.add('active');
            }

            // Smooth scrolling to anchor links within the *currently active tab*
            document.querySelectorAll('.content-section a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Initialize Firebase
            initializeFirebase();
        });
    </script>
</body>
</html>
