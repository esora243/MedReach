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
        /* CSSカスタムプロパティを定義し、一貫したデザインを維持 */
        :root {
            --primary-blue: #1a346e; /* サイト全体の基調となる濃い青 */
            --secondary-blue: #2c5282; /* 専門的で信頼感のある中間の青 */
            --accent-teal: #0d9488; /* アクセントに使う落ち着いたティールグリーン */
            --light-gray: #f9fafb; /* 背景用の非常に薄いグレー */
            --medium-gray: #e0e7ff; /* カードのボーダーなどに使う薄い青みがかったグレー */
            --dark-gray-text: #1f2937; /* 見出し用の濃いグレー */
            --medium-gray-text: #4b5563; /* 本文用の標準グレー */
            --header-gradient-start: #1d4ed8; /* ヘッダーグラデーションの開始色 */
            --header-gradient-end: #3b82f6; /* ヘッダーグラデーションの終了色 */
            --button-gradient-start: #3b82f6; /* ボタングラデーションの開始色 */
            --button-gradient-end: #1e3a8a; /* ボタングラデーションの終了色 */
            --underline-gradient-start: #6ee7b7; /* 下線グラデーションの開始色 */
            --underline-gradient-end: var(--accent-teal); /* 下線グラデーションの終了色 */
        }

        /* 全体的なスタイル設定 */
        body {
            font-family: 'Inter', 'Noto Sans JP', sans-serif;
            background-color: var(--light-gray);
            color: var(--medium-gray-text);
            line-height: 1.7;
            background-image: linear-gradient(to bottom, var(--light-gray) 0%, #edf2f7 100%);
            background-attachment: fixed;
        }

        .container {
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        /* ヘッダーのスタイル - グラデーションと透かし画像を適用 */
        .header-bg {
            background-image: linear-gradient(to right, var(--header-gradient-start), var(--header-gradient-end));
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            position: relative;
            overflow: hidden;
        }

        .header-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('画像 (1).jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 0.2; /* 透かしの透明度 */
        }

        /* フッターのスタイル - グラデーションと透かし画像を適用 */
        .footer-bg {
            background-color: #1f2937;
            box-shadow: inset 0 4px 15px rgba(0, 0, 0, 0.2);
            position: relative;
            overflow: hidden;
        }

        .footer-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('画像 (2).jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 0.2; /* 透かしの透明度 */
        }

        /* ナビゲーションリンクのスタイル */
        .nav-link {
            transition: all 0.3s ease-in-out;
            position: relative;
            padding-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #e0f2fe;
        }

        .nav-link:hover {
            transform: translateY(-3px);
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
            background-image: linear-gradient(to right, var(--underline-gradient-start), var(--underline-gradient-end));
            border-radius: 9999px;
            transition: width 0.3s ease-in-out;
        }

        .nav-link.active::after {
            width: 100%;
        }

        /* カードのスタイル - 統一感のあるシャドウと丸み */
        .card {
            background-color: #ffffff;
            border-radius: 1.25rem;
            box-shadow: 0 8px 20px -5px rgba(0, 0, 0, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            border: 1px solid var(--medium-gray);
        }

        .card:hover {
            transform: translateY(-12px);
            box-shadow: 0 20px 30px -8px rgba(0, 0, 0, 0.2), 0 8px 12px -4px rgba(0, 0, 0, 0.12);
        }

        /* プライマリーボタンのスタイル - グラデーションとアニメーション */
        .button-primary {
            background-image: linear-gradient(to right, var(--button-gradient-start), var(--button-gradient-end));
            color: #ffffff;
            padding: 0.9rem 2rem;
            border-radius: 0.75rem;
            font-weight: 700;
            transition: background-position 0.4s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
            background-size: 200% auto;
        }

        .button-primary:hover {
            background-position: right center;
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        /* 記事リストのスタイル */
        .article-item {
            border-left: 5px solid var(--accent-teal);
            padding-left: 1.2rem;
            margin-bottom: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
        }

        .article-item a {
            flex-grow: 1;
            color: var(--dark-gray-text);
            font-weight: 700;
            font-size: 1.125rem;
            line-height: 1.4;
            cursor: pointer;
        }

        .article-item a:hover {
            color: var(--secondary-blue);
            text-decoration: underline;
            text-underline-offset: 4px;
        }

        .article-summary {
            font-size: 0.95rem;
            color: var(--medium-gray-text);
            line-height: 1.5;
        }

        /* セクションタイトルのスタイル */
        .section-title {
            color: var(--primary-blue);
            font-size: 2.75rem;
            font-weight: 800;
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 90px;
            height: 4px;
            background-image: linear-gradient(to right, var(--underline-gradient-start), var(--underline-gradient-end));
            border-radius: 9999px;
        }

        /* SVGアイコンのスタイル */
        .icon-small {
            width: 1.35rem;
            height: 1.35rem;
            fill: none;
            stroke: currentColor;
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

        /* 画像のスタイル */
        .feature-image {
            width: 100%;
            height: auto;
            border-radius: 1.25rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            margin-bottom: 2.5rem;
            object-fit: cover;
        }

        /* 厚生労働省リンクのカードスタイル */
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
            flex-grow: 1;
        }

        .mhlw-category-card ul {
            list-style: none;
            padding: 0;
            margin: 0;
            border-top: 1px solid var(--medium-gray);
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

        /* タブ切り替え時のアニメーション */
        .content-section {
            display: none;
            animation: fadeIn 0.5s ease-out;
        }

        .content-section.active {
            display: block;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* チャットボットのスタイル */
        #chatbot-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 350px;
            max-width: 90%;
            height: 500px;
            background-color: white;
            border-radius: 1.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
        }

        #chatbot-container.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        #chatbot-header {
            background-image: linear-gradient(to right, var(--header-gradient-start), var(--header-gradient-end));
            color: white;
            padding: 1rem 1.5rem;
            border-top-left-radius: 1.5rem;
            border-top-right-radius: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        #chatbot-messages {
            flex-grow: 1;
            padding: 1.5rem;
            overflow-y: auto;
            border-bottom: 1px solid var(--medium-gray);
        }

        .chatbot-message {
            margin-bottom: 1rem;
            display: flex;
            align-items: flex-start;
        }

        .chatbot-message.bot .message-bubble {
            background-color: var(--medium-gray);
            border-radius: 1.25rem 1.25rem 1.25rem 0;
            padding: 0.75rem 1rem;
            color: var(--dark-gray-text);
        }

        .chatbot-message.user {
            justify-content: flex-end;
        }

        .chatbot-message.user .message-bubble {
            background-color: var(--primary-blue);
            color: white;
            border-radius: 1.25rem 1.25rem 0 1.25rem;
            padding: 0.75rem 1rem;
        }

        #chatbot-input-container {
            padding: 1rem 1.5rem;
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }

        #chatbot-input {
            flex-grow: 1;
            border: 1px solid var(--medium-gray);
            border-radius: 0.75rem;
            padding: 0.5rem 1rem;
        }

        #chatbot-toggle-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background-image: linear-gradient(to right, #60a5fa, #3b82f6);
            color: white;
            border-radius: 9999px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 1000;
            transition: transform 0.2s;
        }

        #chatbot-toggle-btn:hover {
            transform: scale(1.1);
        }

        /* 管理者パネルのスタイル */
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
            background-image: linear-gradient(to right, #ef4444, #dc2626);
        }

        .admin-button.delete:hover {
            background-position: right center;
            transform: translateY(-2px);
        }

        /* 記事詳細モーダルのスタイル */
        .article-modal-content {
            max-width: 800px;
            margin: auto;
            padding: 2rem;
            background-color: white;
            border-radius: 1rem;
        }
        .article-modal-content h3 {
            font-size: 2rem;
            font-weight: bold;
            color: var(--primary-blue);
            margin-bottom: 1rem;
        }
        .article-modal-content p {
            line-height: 1.8;
            color: var(--dark-gray-text);
        }
        .article-modal-content .author-info {
            font-style: italic;
            color: var(--medium-gray-text);
            margin-top: 1rem;
            border-top: 1px solid var(--medium-gray);
            padding-top: 1rem;
        }
    </style>
</head>
<body class="antialiased">
    <!-- ヘッダー -->
    <div class="header-bg text-white py-6 md:py-8 shadow-lg">
        <div class="container flex flex-col md:flex-row items-center justify-between relative z-10">
            <h1 class="text-3xl md:text-4xl font-extrabold mb-4 md:mb-0">MedReach</h1>
            <nav>
                <ul class="flex flex-wrap justify-center space-x-4 md:space-x-8 text-lg md:text-xl font-semibold">
                    <li><a href="#home" class="nav-link active">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        ホーム
                    </a></li>
                    <li><a href="#article-history" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v6h6"/><path d="M10 12H8"/><path d="M16 16H8"/><path d="M16 12H12"/></svg>
                        記事アーカイブ
                    </a></li>
                    <li><a href="#job-postings" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                        求人情報
                    </a></li>
                    <li><a href="#clinic-transfer" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hospital"><path d="M12 6V2H2v10a4 4 0 0 0 4 4h10v6h4V6Z"/><path d="M12 18h.01"/><path d="M12 12h.01"/></svg>
                        クリニック譲渡
                    </a></li>
                    <li><a href="#blog" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M16 16h-2"/></svg>
                        ドクターズブログ
                    </a></li>
                    <li><a href="#company-info" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 8a6 6 0 0 1 6-6v7H6v11"/><path d="M22 2v11a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V2"/><path d="M16 21v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"/></svg>
                        企業情報
                    </a></li>
                    <li><a href="#mhlw-links" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3.5-3.5a4 4 0 0 0-6.74-6.74l1.24-1.24a7.5 7.5 0 0 1-.12 10.62ZM14 11a5 5 0 0 0-7.54-.54l-3.5 3.5a4 4 0 0 0 6.74 6.74l-1.24 1.24a7.5 7.5 0 0 1 .12-10.62Z"/></svg>
                        厚生労働省
                    </a></li>
                </ul>
            </nav>
            <button id="adminLoginBtn" class="ml-4 px-4 py-2 bg-white text-primary-blue rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200">管理者ログイン</button>
            <button id="adminPanelBtn" class="ml-4 px-4 py-2 bg-accent-teal text-white rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 hidden">管理者パネル</button>
        </div>
    </div>

    <!-- メインコンテンツ -->
    <main class="container py-8 md:py-12">
        <!-- ホームセクション -->
        <section id="home" class="content-section active mb-12 md:mb-16 bg-white p-8 rounded-xl shadow-lg text-center">
            <h2 class="section-title">MedReach：医師の知的好奇心とキャリアの次なる一歩を繋ぐ</h2>
            <img src="画像 (3).jpg" alt="[医療研究のイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
            <p class="text-xl text-dark-gray-text max-w-3xl mx-auto leading-relaxed mb-6">
                先生方の「知りたい」に真摯に寄り添い、日々の診療に役立つ専門記事、キャリアの選択肢を広げる求人・譲渡情報、そして国の重要な公式発表まで、必要な情報を迷いなく手に入れられるよう、本プラットフォームは設計されております。
            </p>
            <p class="text-lg text-medium-gray-text max-w-3xl mx-auto leading-relaxed">
                2019年以来、毎月3本の厳選記事で、先生方の専門知識とキャリアを力強く後押ししています。
            </p>
            <div class="text-center mt-10">
                <a href="#article-history" class="button-primary page-link">
                    <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    最新記事を見る
                </a>
            </div>
        </section>

        <!-- 記事アーカイブセクション -->
        <section id="article-history" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">記事アーカイブ：2019年からの医療トレンドを深掘り</h2>
            <img src="画像 (4).jpg" alt="[医療記事のアーカイブイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
            <p class="text-md text-medium-gray-text text-center mb-10 max-w-3xl mx-auto">
                2019年より毎月3本、医療界の重要な動きを捉えた記事を公開しています。各年の主要テーマと記事概要で、最新トレンドを効率的にキャッチしてください。
            </p>
            <div id="articleGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- 記事はJavaScriptによって動的にここにロードされます -->
            </div>
        </section>

        <!-- 記事詳細表示用モーダル -->
        <div id="articleModal" class="admin-panel-overlay">
            <div class="admin-panel-content max-w-2xl text-left">
                <div class="flex justify-between items-center mb-4">
                    <h3 id="modalTitle" class="text-2xl font-bold text-primary-blue">記事タイトル</h3>
                    <button id="closeArticleModalBtn" class="text-gray-500 hover:text-gray-900 text-3xl">&times;</button>
                </div>
                <p id="modalSummary" class="text-base text-dark-gray-text leading-relaxed"></p>
                <div class="mt-8 flex justify-end">
                    <button id="closeArticleModalBtnBottom" class="admin-button delete">閉じる</button>
                </div>
            </div>
        </div>

        <!-- 求人情報セクション -->
        <section id="job-postings" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">求人情報：あなたの専門性を活かす次なるステージへ</h2>
            <img src="画像 (5).jpg" alt="[求職活動のイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
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
                    <img src="画像 (6).jpg" alt="[都内総合病院のイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://doctor.mynavi.jp/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
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
                    <img src="画像 (7).jpg" alt="[地方クリニックのイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.bizreach.jp/career-change/medical/doctor/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
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
                    <img src="画像 (8).jpg" alt="[大手企業のイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.dr-summit.jp/column/industrial_physician/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
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
                    <img src="画像 (9).jpg" alt="[健診センターのイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.m3.com/doctor/job/parttime/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
            </div>
            <div class="text-center mt-12">
                <a href="https://www.dr-summit.jp/" target="_blank" class="button-primary">
                    <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    さらに多くの求人情報を見る
                </a>
            </div>
        </section>

        <!-- クリニック譲渡情報セクション -->
        <section id="clinic-transfer" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">クリニック譲渡：理想の医療を叶える、新たな開業の選択肢</h2>
            <img src="画像 (10).jpg" alt="[クリニック譲渡のイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
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
                    <img src="画像 (11).jpg" alt="[世田谷区のクリニック外観]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.medius.co.jp/transfer/clinic/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
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
                    <img src="画像 (12).jpg" alt="[吹田市の眼科クリニック]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.japan-med.co.jp/clinic-transfer/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
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
                    <img src="画像 (13).jpg" alt="[名古屋市の美容皮膚科]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.iryokai.co.jp/consulting/transfer/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
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
                    <img src="画像 (14).jpg" alt="[福岡市の整形外科]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.dr-summit.jp/column/clinic_transfer/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
            </div>
            <div class="text-center mt-12">
                <a href="https://www.clinic-m.jp/joto/" target="_blank" class="button-primary">
                    <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    さらに多くの譲渡情報を見る
                </a>
            </div>
        </section>

        <!-- ドクターズブログセクション -->
        <section id="blog" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">ドクターズブログ：現場の知見と未来への提言</h2>
            <img src="画像 (15).jpg" alt="[医療ブログのイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
            <p class="text-md text-medium-gray-text text-center mb-10 max-w-3xl mx-auto">
                現役医師や医療専門家が執筆するコラム・解説記事です。日々の診療のヒントからキャリア、最新医療トレンドまで、多岐にわたるテーマを深く掘り下げます。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">医師のキャリアパス多様化：開業医から産業医まで</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        臨床以外の選択肢も豊富です。研究、公衆衛生、産業医、そして起業。あなたの可能性を広げる多様なキャリアパスを解説します。
                    </p>
                    <img src="画像 (16).jpg" alt="[多様なキャリアパスのイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <a href="#" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        続きを読む
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">AI医療の現状と未来：医師が知っておくべきこと</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        診断支援から新薬開発まで、急速に進化するAI医療。その可能性と課題、医師に求められる役割について深く考察します。
                    </p>
                    <img src="画像 (17).jpg" alt="[AI医療のイラスト]" class="w-full h-auto rounded-lg mb-4">
                    <a href="#" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        続きを読む
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">ストレス社会を生き抜く：医師のためのメンタルヘルス術</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        多忙な医療現場で働く医師のメンタルヘルスは非常に重要です。ストレス管理、リフレッシュ法、専門機関の活用についてご紹介します。
                    </p>
                    <img src="画像 (18).jpg" alt="[メンタルヘルスケアのイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <a href="#" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        続きを読む
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">地域医療の最前線：医師のやりがいと挑戦</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        過疎地域での医療提供は多くの困難を伴いますが、その中で見つけるやりがいや、地域住民との深い繋がりについて探ります。
                    </p>
                    <img src="画像 (19).jpg" alt="[地域医療の様子]" class="w-full h-auto rounded-lg mb-4">
                    <a href="#" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        続きを読む
                    </a>
                </div>
            </div>
            <div class="text-center mt-12">
                <a href="https://www.medley.life/news/" target="_blank" class="button-primary">
                    <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    さらに多くのブログ記事を見る
                </a>
            </div>
        </section>

        <!-- 企業情報セクション -->
        <section id="company-info" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">企業情報：クレアメディカル株式会社</h2>
            <img src="画像 (25).jpg" alt="[オフィスビルのイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="card p-6 col-span-1 md:col-span-2">
                    <h3 class="text-xl font-semibold text-primary-blue mb-4">企業概要</h3>
                    <p class="text-medium-gray-text text-sm leading-relaxed">
                        クレアメディカル株式会社は、医療従事者の皆様の専門性とキャリア形成をサポートするため、医療情報の提供、転職・開業支援、そして経営コンサルティングを主軸としたサービスを展開しています。変化の激しい医療業界において、常に最先端の情報と最適なソリューションを提供し、医師の皆様がより良い環境で活躍できる社会の実現に貢献します。
                    </p>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold text-primary-blue mb-4">代表者情報</h3>
                    <p class="text-medium-gray-text text-sm">
                        代表取締役社長：<span class="font-bold">伏見 勇紀</span><br>
                        メールアドレス：<span class="text-secondary-blue font-semibold">creamed@yh.med</span>
                    </p>
                </div>
                <div class="card p-6 col-span-1 md:col-span-3">
                    <h3 class="text-xl font-semibold text-primary-blue mb-4">所在地・アクセスマップ</h3>
                    <p class="text-medium-gray-text text-sm mb-4">
                        〒105-0012<br>
                        東京都港区芝大門２丁目３−１８ 大門ビル<br>
                        <a href="https://maps.app.goo.gl/abcdefg" target="_blank" class="text-secondary-blue hover:text-primary-blue transition-colors duration-200">[Google Mapsで見る]</a>
                    </p>
                    <div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-inner">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5284059085237!2d139.75486517617904!3d35.66318533816654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b90a6e0d9b7%3A0x86e680a6c026e4e0!2z44CSMTA1LTAwMTIg5p2x5Lqs6YO95b-o55Sw5Yy66Iil5aSn5Zmo77yS77yS5LiJ77yS5LiK44Oh44Kj44Ki44Kv44OP44Oz44K_44Or44Kv44O8!5e0!3m2!1sja!2sjp!4v1692224424368!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold text-primary-blue mb-4">プライバシーポリシー</h3>
                    <p class="text-medium-gray-text text-sm">
                        お客様の個人情報の保護を最重要課題と位置づけ、厳格な管理体制のもと、法令に基づいた適切な取り扱いを徹底しております。
                    </p>
                    <div class="text-right mt-4">
                        <a href="#" class="text-secondary-blue hover:text-primary-blue transition-colors duration-200 text-sm font-semibold">詳細を見る</a>
                    </div>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold text-primary-blue mb-4">利用規約</h3>
                    <p class="text-medium-gray-text text-sm">
                        本プラットフォームをご利用いただく上での規約です。当サービスを利用される前に必ずご確認ください。
                    </p>
                    <div class="text-right mt-4">
                        <a href="#" class="text-secondary-blue hover:text-primary-blue transition-colors duration-200 text-sm font-semibold">詳細を見る</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- 厚生労働省リンクセクション -->
        <section id="mhlw-links" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">厚生労働省：医師が知るべき制度・ガイドライン一覧</h2>
            <img src="画像 (26).jpg" alt="[厚生労働省のイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
            <p class="text-md text-medium-gray-text text-center mb-10 max-w-3xl mx-auto">
                医師の皆様に不可欠な厚生労働省の公式情報を、テーマ別に整理しました。必要な制度やガイドラインへ迷わずアクセスいただけます。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- カテゴリ1: 医師資格・免許・研修 -->
                <div class="card mhlw-category-card">
                    <h3 class="mb-4"><svg class="icon-large text-secondary-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5M2 10v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6"/><path d="M6 10v6"/><path d="M18 10v6"/><path d="M12 2v3"/></svg>医師資格・免許・研修</h3>
                    <img src="画像 (20).jpg" alt="[医師免許のイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <p>医師免許の取得・更新手続き、専門医制度、各種研修制度など、医師としてのキャリア形成に欠かせない情報です。</p>
                    <ul>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/ishimensetsu/index.html" target="_blank">医師免許関係情報</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/kensyu/index.html" target="_blank">医師臨床研修制度</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/senmoni/index.html" target="_blank">専門医制度について</a></li>
                    </ul>
                </div>
                <!-- カテゴリ2: 医療法規・倫理・安全 -->
                <div class="card mhlw-category-card">
                    <h3 class="mb-4"><svg class="icon-large text-secondary-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scale"><path d="m16 16 3-3V9l-3 3"/><path d="M21 16V9l-3 3"/><path d="M21 16H9a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h5"/><path d="M16 16H4a2 2 0 0 1-2-2V3a1 1 0 0 1 1-1h12a2 2 0 0 1 2 2v10"/></svg>医療法規・倫理・安全</h3>
                    <img src="画像 (21).jpg" alt="[医療法規に関する文書のイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <p>医療法、医師法、医療安全、医療倫理に関する最新の法令やガイドラインなど、診療の遵守事項を確認できます。</p>
                    <ul>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/hourei/index.html" target="_blank">医療法関係通知</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/iryou_anzen/index.html" target="_blank">医療安全対策</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/shingi/shingi-kousei_261545.html" target="_blank">医療倫理に関する指針</a></li>
                    </ul>
                </div>
                <!-- カテゴリ3: 診療報酬・医療制度 -->
                <div class="card mhlw-category-card">
                    <h3 class="mb-4"><svg class="icon-large text-secondary-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-yen"><path d="M12 1v22"/><path d="M17 7H7M17 17H7"/></svg>診療報酬・医療制度</h3>
                    <img src="画像 (22).jpg" alt="[診療報酬に関するグラフのイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <p>診療報酬改定情報、保険制度、地域医療構想など、医療経営や国の医療政策に関わる重要な情報をご確認いただけます。</p>
                    <ul>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryouhoken/index.html" target="_blank">診療報酬改定について</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryouhoken/kokuho/index.html" target="_blank">国民健康保険・後期高齢者医療</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/iryou_keikaku/index.html" target="_blank">地域医療構想</a></li>
                    </ul>
                </div>
                <!-- カテゴリ4: 感染症対策・公衆衛生 -->
                <div class="card mhlw-category-card">
                    <h3 class="mb-4"><svg class="icon-large text-secondary-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-virus"><path d="M10 2c.5 0 1 .5 1 1v2"/><path d="M14 2c-.5 0-1 .5-1 1v2"/><path d="M15 13v-2c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v2"/><path d="M12 9v6"/><path d="M16 15v2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2"/><path d="M11 22c.5 0 1-.5 1-1v-2"/><path d="M13 22c-.5 0-1-.5-1-1v-2"/><path d="M22 12h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2"/><path d="M20 16c0 1.1.9 2 2 2h2"/><path d="M2 12h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H2"/><path d="M4 8c0-1.1-.9-2-2-2H0"/></svg>感染症対策・公衆衛生</h3>
                    <img src="画像 (23).jpg" alt="[感染症対策のイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <p>新型コロナウイルス感染症をはじめとする各種感染症の情報、予防接種、公衆衛生関連の最新動向を把握できます。</p>
                    <ul>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/bunya/kenkou/kekkaku-kansenshou04/index.html" target="_blank">感染症情報全般</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou04/inful_04.html" target="_blank">新型インフルエンザ対策</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/vaccine_index.html" target="_blank">予防接種情報</a></li>
                    </ul>
                </div>
                <!-- カテゴリ5: 働き方改革・労働環境 -->
                <div class="card mhlw-category-card">
                    <h3 class="mb-4"><svg class="icon-large text-secondary-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-cog"><circle cx="12" cy="7" r="4"/><path d="M12 15v2"/><path d="M16 19h-8"/><path d="M17.6 17.6a2 2 0 0 0-2.8 0l-1.4 1.4a2 2 0 0 0 0 2.8l1.4 1.4a2 2 0 0 0 2.8 0l1.4-1.4a2 2 0 0 0 0-2.8z"/><path d="M2 21v-2a4 4 0 0 1 4-4h4a4 2 0 0 1 4 4v2"/></svg>働き方改革・労働環境</h3>
                    <img src="画像 (24).jpg" alt="[ワークライフバランスのイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <p>医師の労働時間短縮、タスクシフト、女性医師支援など、より良い労働環境を実現するための国の取り組みをご紹介します。</p>
                    <ul>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/ishihou/index.html" target="_blank">医師の働き方改革</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/zyosei_sien/index.html" target="_blank">女性医師等に対する支援</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/chiikihenzai/index.html" target="_blank">医師の地域偏在対策</a></li>
                    </ul>
                </div>
            </div>
        </section>
    </main>

    <!-- フッター -->
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

    <!-- チャットボット切り替えボタン -->
    <div id="chatbot-toggle-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9.3 9.3 0 0 1 4 16.1L2 22l6-2Z"/><path d="M10.5 4A9.45 9.45 0 0 1 20 12.5a9.38 9.38 0 0 1-1.2 4.4L22 22l-6-2a9.43 9.43 0 0 1-5.5-1.5"/></svg>
    </div>

    <!-- チャットボットコンテナ -->
    <div id="chatbot-container">
        <div id="chatbot-header">
            <h4 class="font-bold">MedReachサポート</h4>
            <button id="close-chatbot-btn" class="text-white text-3xl font-bold leading-none">&times;</button>
        </div>
        <div id="chatbot-messages">
            <!-- チャットメッセージはJavaScriptで動的に追加されます -->
            <div class="chatbot-message bot">
                <span class="message-bubble">こんにちは！ご質問があれば、以下から選択いただくか、入力してください。</span>
            </div>
            <div class="chatbot-message bot mt-2">
                <div class="flex flex-col space-y-2">
                    <button class="chatbot-quick-reply-btn bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">求人情報について</button>
                    <button class="chatbot-quick-reply-btn bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">クリニック譲渡について</button>
                    <button class="chatbot-quick-reply-btn bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">企業情報について</button>
                    <button class="chatbot-quick-reply-btn bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">記事・情報について</button>
                    <button class="chatbot-quick-reply-btn bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">パスワードを忘れた</button>
                </div>
            </div>
        </div>
        <div id="chatbot-input-container">
            <input type="text" id="chatbot-input" placeholder="質問を入力してください..." class="flex-grow">
            <button id="chatbot-send-btn" class="bg-primary-blue text-white p-2 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizonal"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M21 12H6"/></svg>
            </button>
        </div>
    </div>


    <!-- 管理者ログインモーダル -->
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

    <!-- 管理者パネルモーダル -->
    <div id="adminPanelModal" class="admin-panel-overlay">
        <div class="admin-panel-content">
            <h3 class="text-2xl font-bold text-primary-blue mb-6">記事管理パネル</h3>

            <!-- 新規記事追加フォーム -->
            <div class="mb-8 p-6 border border-medium-gray rounded-xl shadow-sm">
                <h4 class="text-xl font-semibold text-dark-gray-text mb-4">新規記事の追加</h4>
                <input type="text" id="newArticleTitle" class="admin-input" placeholder="記事タイトル">
                <textarea id="newArticleSummary" class="admin-input h-24 resize-y" placeholder="記事概要"></textarea>
                <button id="addArticleBtn" class="admin-button">記事を追加</button>
            </div>

            <!-- 既存記事リスト -->
            <div class="mb-8">
                <h4 class="text-xl font-semibold text-dark-gray-text mb-4">既存記事の編集・削除</h4>
                <div id="adminArticleList" class="space-y-4">
                    <!-- 記事はJSでここにロードされます -->
                </div>
            </div>

            <div class="flex justify-end">
                <button id="closeAdminPanelBtn" class="admin-button delete">パネルを閉じる</button>
            </div>
        </div>
    </div>

    <script type="module">
        // Firebase SDKのインポート
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
        import { getFirestore, collection, query, orderBy, getDocs, addDoc, setDoc, updateDoc, deleteDoc, doc, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

        // Firebaseのグローバル変数
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
        const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
        const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

        let app;
        let db;
        let auth;
        let userId = 'anonymous'; // 匿名ユーザーID
        let isAdmin = false; // 管理者ステータス

        // --- Firebaseの初期化と認証 ---
        async function initializeFirebase() {
            try {
                app = initializeApp(firebaseConfig);
                db = getFirestore(app);
                auth = getAuth(app);

                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        userId = user.uid;
                        console.log("Firebase認証成功。ユーザーID:", userId);
                        loadArticles();
                    } else {
                        console.log("ユーザーがサインインしていません。匿名サインインを試行します。");
                        try {
                            if (initialAuthToken) {
                                await signInWithCustomToken(auth, initialAuthToken);
                            } else {
                                await signInAnonymously(auth);
                            }
                        } catch (error) {
                            console.error("Firebase匿名サインイン失敗:", error);
                        }
                    }
                });
            } catch (error) {
                console.error("Firebase初期化失敗:", error);
            }
        }

        // --- 記事データ管理 (Firestore) ---
        const ARTICLES_COLLECTION_PATH = `/artifacts/${appId}/public/data/medreach_articles`;
        let currentArticles = [];

        async function loadArticles() {
            if (!db) {
                console.warn("Firestoreが初期化されていません。");
                return;
            }

            const q = query(collection(db, ARTICLES_COLLECTION_PATH), orderBy('timestamp', 'desc'));

            onSnapshot(q, (snapshot) => {
                const fetchedArticles = [];
                snapshot.forEach((doc) => {
                    fetchedArticles.push({ id: doc.id, ...doc.data() });
                });
                currentArticles = fetchedArticles;
                renderArticles();
                if (isAdmin) {
                    renderAdminArticleList();
                }
                console.log("Firestoreから記事がロード/更新されました。");
            }, (error) => {
                console.error("記事の取得エラー:", error);
            });
        }

        async function addArticle(title, summary) {
            if (!db || !isAdmin) return;
            try {
                await addDoc(collection(db, ARTICLES_COLLECTION_PATH), {
                    title,
                    summary,
                    timestamp: serverTimestamp(),
                    year: new Date().getFullYear(),
                    month: new Date().getMonth()
                });
                document.getElementById('newArticleTitle').value = '';
                document.getElementById('newArticleSummary').value = '';
                console.log("記事が正常に追加されました。");
            } catch (error) {
                console.error("記事の追加エラー:", error);
            }
        }

        async function updateArticle(id, title, summary) {
            if (!db || !isAdmin) return;
            try {
                const articleRef = doc(db, ARTICLES_COLLECTION_PATH, id);
                await updateDoc(articleRef, { title, summary });
                console.log("記事が正常に更新されました。");
            } catch (error) {
                console.error("記事の更新エラー:", error);
            }
        }

        async function deleteArticle(id) {
            if (!db || !isAdmin) return;
            try {
                const articleRef = doc(db, ARTICLES_COLLECTION_PATH, id);
                await deleteDoc(articleRef);
                console.log("記事が正常に削除されました。");
            } catch (error) {
                console.error("記事の削除エラー:", error);
            }
        }

        // --- UIレンダリング関数 ---
        function renderArticles() {
            const articleGrid = document.getElementById('articleGrid');
            if (!articleGrid) {
                console.error('articleGrid要素が見つかりません。');
                return;
            }

            let articleContent = '';
            let imageCounter = 5;

            const articlesByYearMonth = {};
            currentArticles.forEach(article => {
                const year = article.year;
                const month = article.month;
                if (!articlesByYearMonth[year]) articlesByYearMonth[year] = {};
                if (!articlesByYearMonth[year][month]) articlesByYearMonth[year][month] = [];
                articlesByYearMonth[year][month].push(article);
            });

            const sortedYears = Object.keys(articlesByYearMonth).sort((a, b) => b - a);

            sortedYears.forEach(year => {
                const sortedMonths = Object.keys(articlesByYearMonth[year]).sort((a, b) => b - a);
                sortedMonths.forEach(month => {
                    const monthNames = [
                        "1月", "2月", "3月", "4月", "5月", "6月",
                        "7月", "8月", "9月", "10月", "11月", "12月"
                    ];
                    const monthName = monthNames[month];
                    const articlesForMonth = articlesByYearMonth[year][month];

                    const displayArticles = articlesForMonth.slice(0, 3);

                    articleContent += `
                        <div class="card p-6">
                            <h3 class="text-xl font-semibold mb-4 text-primary-blue">${year}年 ${monthName}</h3>
                            <img src="画像 (${imageCounter}).jpg" alt="[医療トレンドのイメージ]" class="w-full h-auto rounded-lg mb-4">
                            <ul class="space-y-4">
                                ${displayArticles.map(article => `
                                    <li class="article-item">
                                        <a href="#" class="read-more-link text-dark-gray-text hover:text-secondary-blue font-bold" data-title="${article.title}" data-summary="${article.summary}">${article.title}</a>
                                        <p class="article-summary">${article.summary}</p>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    `;
                    imageCounter = (imageCounter % 20) + 1; // 20枚の画像をループ
                    if (imageCounter === 21) imageCounter = 22; // 画像(21)をスキップ
                });
            });
            articleGrid.innerHTML = articleContent;
        }

        // --- 管理者パネルUI ---
        function renderAdminArticleList() {
            const adminArticleList = document.getElementById('adminArticleList');
            if (!adminArticleList) return;

            adminArticleList.innerHTML = '';

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

            adminArticleList.querySelectorAll('.edit-article-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const parent = e.target.closest('.p-4');
                    parent.querySelector('.edit-form').classList.remove('hidden');
                    e.target.classList.add('hidden');
                });
            });

            adminArticleList.querySelectorAll('.cancel-edit-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const parent = e.target.closest('.p-4');
                    parent.querySelector('.edit-form').classList.add('hidden');
                    parent.querySelector('.edit-article-btn').classList.remove('hidden');
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
                    if (confirm('この記事を削除してもよろしいですか？')) {
                        const id = e.target.dataset.id;
                        deleteArticle(id);
                    }
                });
            });
        }


        // --- 管理者ログイン/パネルロジック ---
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
            if (password === 'esora243') {
                isAdmin = true;
                adminLoginModal.classList.remove('active');
                adminLoginBtn.classList.add('hidden');
                adminPanelBtn.classList.remove('hidden');
                renderAdminArticleList();
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
                renderAdminArticleList();
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
                alert('記事タイトルと概要を入力してください。');
            }
        });


        // --- 一般UIロジック ---
        // タブ切り替え機能
        document.querySelectorAll('nav .nav-link').forEach(navLink => {
            navLink.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.remove('active');
                });
                if (targetSection) {
                    targetSection.classList.add('active');
                }
                document.querySelectorAll('nav .nav-link').forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // ページ内リンク（スムーズスクロール）
        document.querySelectorAll('.page-link').forEach(pageLink => {
            pageLink.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                const targetNavLink = document.querySelector(`nav .nav-link[href="${targetId}"]`);
                document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.remove('active');
                });
                if (targetSection) {
                    targetSection.classList.add('active');
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
                document.querySelectorAll('nav .nav-link').forEach(link => link.classList.remove('active'));
                if (targetNavLink) {
                    targetNavLink.classList.add('active');
                }
            });
        });

        // 記事詳細モーダルロジック
        const articleModal = document.getElementById('articleModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalSummary = document.getElementById('modalSummary');
        const closeArticleModalBtn = document.getElementById('closeArticleModalBtn');
        const closeArticleModalBtnBottom = document.getElementById('closeArticleModalBtnBottom');
        
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('read-more-link')) {
                e.preventDefault();
                const title = e.target.dataset.title;
                const summary = e.target.dataset.summary;
                
                modalTitle.textContent = title;
                modalSummary.innerHTML = `
                    <p class="text-base font-semibold mb-4 text-primary-blue">記事概要:</p>
                    <p>${summary}</p>
                    <div class="mt-6 text-center text-gray-500">
                        <p>--- ここから先は、より詳細な記事コンテンツが続きます ---</p>
                        <p>この先は、記事の全文、図表、参考文献などが表示されるエリアです。</p>
                        <p>現在、コンテンツは準備中です。今しばらくお待ちください。</p>
                    </div>
                `;
                articleModal.classList.add('active');
            }
        });

        closeArticleModalBtn.addEventListener('click', () => {
            articleModal.classList.remove('active');
        });

        closeArticleModalBtnBottom.addEventListener('click', () => {
            articleModal.classList.remove('active');
        });
        
        // チャットボットロジック
        const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
        const chatbotContainer = document.getElementById('chatbot-container');
        const closeChatbotBtn = document.getElementById('close-chatbot-btn');
        const chatbotMessages = document.getElementById('chatbot-messages');
        const chatbotInput = document.getElementById('chatbot-input');
        const chatbotSendBtn = document.getElementById('chatbot-send-btn');
        const quickReplyBtns = document.querySelectorAll('.chatbot-quick-reply-btn');

        chatbotToggleBtn.addEventListener('click', () => {
            chatbotContainer.classList.toggle('active');
        });

        closeChatbotBtn.addEventListener('click', () => {
            chatbotContainer.classList.remove('active');
        });

        function addMessageToChat(sender, message) {
            const messageElement = document.createElement('div');
            messageElement.className = `chatbot-message ${sender}`;
            messageElement.innerHTML = `<span class="message-bubble">${message}</span>`;
            chatbotMessages.appendChild(messageElement);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
        
        function handleChatbotResponse(question) {
            const lowerCaseQuestion = question.toLowerCase();
            let response = '申し訳ありませんが、その質問にはお答えできません。お急ぎの場合は、下記連絡先にお問い合わせください。<br><br>担当者: 伏見 勇紀<br>メール: creamed@yh.med';
            
            // 100個の質問に対応するための広範な応答ロジック
            const responses = {
                // 求人情報に関する質問 (1-20)
                '求人情報': '求人情報に関するご質問ですね。最新の医師求人情報は、本サイトの「求人情報」タブでご確認いただけます。専門のコンサルタントが具体的な条件についてご相談に応じます。',
                '転職': '転職に関するご質問ですね。医師向けの転職サイト「ビズリーチ」や「マイナビドクター」へのリンクを「求人情報」タブに掲載しています。そちらもご参照ください。',
                '年収': '年収に関するご質問ですね。求人情報には年収の目安を記載しておりますが、ご経験やスキルによって変動します。詳細は専門コンサルタントにお問い合わせください。',
                '勤務地': '勤務地に関するご希望はありますか？希望勤務地を教えていただければ、より詳しい情報を提供できます。',
                'キャリア': 'キャリア形成に関するご質問ですね。当サイトのドクターズブログでは、様々なキャリアパスに関する記事を掲載しています。ぜひご一読ください。',
                'コンサルタントに相談': '承知いたしました。専門コンサルタントがご相談を承ります。お問い合わせフォームから詳細をご連絡ください。',
                '非常勤': '非常勤やパートタイムの求人も多数ございます。「求人情報」タブから詳細をご確認ください。',
                '外科医': '外科医向けの求人は常に需要があります。手術内容や勤務体制など、具体的な希望をお知らせください。',
                '内科医': '内科医の院長候補や地方勤務など、幅広い求人がございます。専門分野に合わせてご紹介いたします。',
                '産業医': '産業医の求人は大手企業を中心に人気です。ワークライフバランスを重視した働き方が可能です。',
                '求人詳細': '求人情報の詳細についてですね。各求人カードの「詳細を見る」ボタンから、連携しているサイトの情報をご確認いただけます。',
                '求人の選び方': '求人の選び方についてですね。年収、勤務地、勤務時間、専門分野など、優先順位を明確にすることが重要です。',
                '医師の働き方改革': '医師の働き方改革に関する求人も増えています。週休2日制や残業削減の取り組みがある職場もございます。',
                '健診': '健診センターの医師求人についてですね。パートや非常勤での募集が多く、柔軟な働き方が可能です。',
                '求人応募方法': '求人への応募方法についてですね。各求人情報に記載されている外部サイトにて、直接応募手続きを行ってください。',
                '転職のタイミング': '転職の最適なタイミングは、ご自身のキャリアプランやライフイベントによって異なります。専門コンサルタントにご相談いただくことをお勧めします。',
                '面接対策': '面接対策に関するアドバイスですね。履歴書・職務経歴書の書き方や、面接での受け答え方についてサポートいたします。',
                '地方勤務': '地方勤務の求人についてですね。高待遇の案件や、地域医療に貢献できるやりがいのある案件がございます。',
                '転科': '転科を検討されているのですね。転科支援や研修制度が充実している求人もございます。',
                '女性医師': '女性医師のキャリア支援に力を入れている病院も増えています。育児支援や短時間勤務など、柔軟な働き方についてご相談ください。',

                // クリニック譲渡に関する質問 (21-40)
                'クリニック譲渡': 'クリニック譲渡についてのご質問ですね。先生方のニーズに合った譲渡案件を多数掲載しております。非公開案件もございますので、詳細については専門の担当者にお繋ぎいたします。',
                '開業': '開業支援についてのご質問ですね。当サイトでは、クリニックの譲渡情報を通じて開業をサポートしています。初期費用を抑え、既存の患者基盤を引き継ぐことで、スムーズな開業が可能です。',
                '事業承継': '事業承継に関するご質問ですね。円滑な事業承継を支援するための情報を提供しています。税務や法務に関するご相談も承ります。',
                '譲渡価格': '譲渡価格は、クリニックの規模、設備、立地、収益性などによって異なります。ご希望の条件を教えていただければ、より適切な情報を提供できます。',
                'クリニックを売りたい': '承知いたしました。クリニックの売却に関するご相談を承ります。専門の担当者が秘密厳守でサポートいたしますので、詳細をお問い合わせください。',
                '開業医のメリット': '開業医のメリットについてですね。自分の理想とする医療を追求できること、経営者としてのやりがいがあることなどが挙げられます。',
                '譲渡の流れ': 'クリニック譲渡は、①相談、②案件紹介、③条件交渉、④契約、⑤引継ぎという流れで進みます。各段階で専門家がサポートします。',
                '内科クリニック': '内科クリニックの譲渡案件は、地域に根差した医療を求める先生に人気です。',
                '皮膚科クリニック': '皮膚科・美容皮膚科の譲渡案件は、美容医療の需要が高い地域で特に人気です。',
                '眼科クリニック': '最新設備が整った眼科クリニックの譲渡案件もございます。駅直結など好立地な物件も多いです。',
                '整形外科クリニック': 'スポーツ外傷対応の整形外科クリニックなど、専門性の高い譲渡案件もございます。',
                '譲渡の相談': 'クリニック譲渡のご相談ですね。詳細をお伺いし、最適なサポートを提供しますので、直接ご連絡ください。',
                '事業計画': '事業計画の策定についてですね。融資の相談や、マーケティング戦略など、経営コンサルティングの観点からサポートします。',
                '資金調達': 'クリニック開業や譲渡のための資金調達についてもご相談ください。医療機関向けの融資に詳しい専門家をご紹介できます。',
                'スタッフ': 'スタッフの引き継ぎについてですね。円滑な引き継ぎをサポートし、安定した運営ができるよう支援します。',
                '税理士': '税理士の紹介についてですね。医療専門の税理士と連携しており、節税対策や経理処理についてご相談いただけます。',
                '医療法人化': '医療法人化に関するご質問ですね。医療法人化のメリット・デメリットや、手続きについて解説します。',
                '譲渡のタイミング': '譲渡の最適なタイミングは、院長の年齢やクリニックの経営状況によって異なります。早めの相談をお勧めします。',
                '廃業': '廃業を検討されているのですね。廃業せずに譲渡することで、患者さんやスタッフ、そして経営資産を守ることができます。',
                '譲渡後のサポート': '譲渡後の経営についても、ご希望に応じてコンサルティングサービスを提供しています。',
                
                // 企業情報に関する質問 (41-60)
                '企業情報': '企業情報についてのご質問ですね。本サイトの「企業情報」タブで、弊社クレアメディカル株式会社の会社概要、代表者情報、所在地をご確認いただけます。',
                'クレアメディカル': '弊社、クレアメディカル株式会社は、医師の皆様のキャリアと専門性を支えるための情報提供、転職・開業支援、経営コンサルティングを行っております。',
                '代表取締役': '弊社代表取締役社長は伏見 勇紀でございます。',
                '連絡先': 'お問い合わせ先は、担当者：伏見 勇紀、メールアドレス：creamed@yh.med です。お急ぎの場合はこちらにご連絡ください。',
                '所在地': '弊社の所在地は、東京都港区芝大門２丁目３−１８ 大門ビルです。サイトの「企業情報」タブにアクセスマップも掲載しております。',
                '業務内容': '弊社の主な業務内容は、医師向け医療情報の提供、転職・開業支援、経営コンサルティングです。',
                'プライバシーポリシー': 'プライバシーポリシーは、フッターのリンクからご確認いただけます。お客様の個人情報の保護を最重要課題としております。',
                '利用規約': '利用規約は、フッターのリンクからご確認いただけます。本サイトのご利用前に必ずご確認ください。',
                'サービス内容': '弊社のサービスは、記事アーカイブ、求人情報、クリニック譲渡、ドクターズブログ、厚生労働省リンク集など、医師の皆様の多岐にわたるニーズに対応しています。',
                '設立': '設立年月日についてですね。こちらはサイト運営の都合上、非公開とさせていただいております。',
                '事業規模': '事業規模についてですね。弊社は医療業界に特化した少数精鋭のチームで、先生方一人ひとりに寄り添ったサービスを提供しております。',
                '企業理念': '弊社の企業理念は、「医師の専門性とキャリアを力強くサポートし、より良い医療の未来を創造する」ことです。',
                'アクセス': 'アクセス方法についてですね。JR浜松町駅北口より徒歩約5分、都営地下鉄大門駅より徒歩約3分です。',
                '本社移転': '本社移転に関する情報ですね。最新の所在地は「企業情報」タブをご確認ください。',
                'パートナー': 'パートナー企業についてですね。医療業界の様々な企業と連携し、先生方に幅広い情報とサービスを提供しています。',
                'コンサルティングサービス': '経営コンサルティングサービスについてですね。クリニックの経営改善、集患対策、効率化など、多岐にわたるサポートを提供します。',
                'セミナー': 'セミナー開催についてですね。不定期でキャリア形成や経営に関するセミナーを開催しております。詳細はサイトにて告知します。',
                '採用情報': '弊社の採用情報についてですね。現在、募集は行っておりませんが、将来的に採用活動を行う際はサイトにて告知します。',
                'SNS': 'SNSアカウントについてですね。現在、公式なSNSアカウントは運用しておりません。',
                'メディア掲載': 'メディア掲載実績についてですね。こちらは個別にお問い合わせください。',
                
                // 記事・情報に関する質問 (61-80)
                '記事': '記事・情報に関するご質問ですね。本サイトの「記事アーカイブ」タブにて、2019年以降の過去記事を閲覧いただけます。特定のテーマやキーワードでの検索は、今後実装予定です。',
                '情報': '医療情報に関するご質問ですね。当サイトでは、最新の医療トレンドや国が発表する重要な情報を分かりやすくまとめています。',
                'ニュース': '医療ニュースに関するご質問ですね。当サイトの「記事アーカイブ」や「ドクターズブログ」では、最新の医療ニュースを専門的な視点で解説しています。',
                '記事の探し方': '記事の探し方についてですね。現在はアーカイブページで年別・月別に記事をご覧いただけます。キーワード検索機能は今後実装予定です。',
                '古い記事': '古い記事もすべて「記事アーカイブ」に保存されています。2019年からの記事をすべてご覧いただけます。',
                '新しい記事': '新しい記事は毎月3本程度公開しています。サイトのトップページでお知らせします。',
                '記事のテーマ': '記事のテーマは、働き方改革、AI医療、地域医療、メンタルヘルスなど多岐にわたります。先生方の関心が高いトピックを厳選しています。',
                '記事の投稿者': '記事は、現役医師や医療業界の専門家が執筆しています。専門的で信頼性の高い情報を提供できるよう努めています。',
                '外部サイト': '記事内に外部サイトへのリンクが多数ございます。信頼できる情報源へのアクセスをサポートするためです。',
                '厚生労働省': '厚生労働省のリンク集は、「厚生労働省」タブに専用のセクションがあります。制度やガイドライン別に整理しています。',
                'リンク集': 'リンク集についてですね。「厚生労働省」タブをご覧ください。医師の皆様が業務で必要とする情報を集約しています。',
                '医療法規': '医療法規に関するリンクは、厚生労働省のリンク集にある「医療法規・倫理・安全」のカテゴリーをご参照ください。',
                '診療報酬': '診療報酬改定に関する情報は、厚生労働省のリンク集にある「診療報酬・医療制度」のカテゴリーにあります。',
                '研修制度': '研修制度に関する情報は、「医師資格・免許・研修」のカテゴリーにリンクがあります。',
                '感染症対策': '感染症対策に関する情報は、「感染症対策・公衆衛生」のカテゴリーにリンクがあります。',
                '働き方改革': '医師の働き方改革に関する情報は、「働き方改革・労働環境」のカテゴリーにリンクがあります。',
                '記事の信憑性': '当サイトの記事は、信頼性の高い情報源を基に、専門家が執筆しています。',
                '記事のリクエスト': '記事のリクエストについてですね。ご意見・ご要望は、担当者のメールアドレスまでお送りください。',
                '著作権': '当サイトの記事の著作権は弊社に帰属します。無断転載・複製はご遠慮ください。',
                '記事の内容': '記事の内容に関する詳細なご質問は、担当者のメールアドレスまでご連絡ください。',

                // 管理者向け質問 (81-100)
                'パスワード': '管理者パスワードは「esora243」です。ログインページからご入力ください。',
                '管理者ログイン': '管理者ログインについてですね。ページの右上にある「管理者ログイン」ボタンをクリックし、パスワード「esora243」を入力してください。',
                '記事追加': '管理者として記事を追加するには、管理者パネルにログイン後、新規記事の追加フォームをご利用ください。',
                '記事編集': '管理者パネルでは、既存の記事を編集できます。編集ボタンをクリックして、タイトルと概要を修正してください。',
                '記事削除': '管理者パネルから、不要な記事を削除できます。削除ボタンをクリックして、操作を確定してください。',
                'ログイン方法': '管理者ログインの方法についてですね。パスワード「esora243」を入力することで、記事管理パネルにアクセスできます。',
                '権限': '管理者の権限は、記事の追加、編集、削除のみです。',
                'パスワード変更': 'パスワードの変更は、現状では対応しておりません。',
                '記事の公開': '新規記事を追加すると、すぐにサイトに公開されます。公開前に内容をよくご確認ください。',
                'エラー': '管理者パネルでエラーが発生した場合は、ブラウザの開発者ツールでエラーメッセージを確認してください。',
                '管理者の追加': '管理者の追加は、現状では対応しておりません。',
                'データベース': '記事データはFirebase Firestoreに保存されます。これにより、記事の永続化とリアルタイム更新が可能です。',
                'リアルタイム': '記事の追加・編集・削除は、リアルタイムでサイトに反映されます。',
                '記事ID': '各記事には一意のIDが割り当てられています。編集や削除の際にこのIDが使用されます。',
                'ログインできない': 'パスワードが間違っている可能性があります。「esora243」を正確に入力してください。',
                'ログアウト': '管理者パネルを閉じることで、自動的にログアウトされます。',
                '記事の並び順': '記事は投稿日時が新しい順に表示されます。',
                '管理者向けヘルプ': '管理者向けの詳しい操作方法については、こちらのチャットボットで質問いただくか、直接担当者にお問い合わせください。',
                '管理画面': '管理者画面は、パスワード入力後に表示される「管理者パネル」ボタンからアクセスできます。',
                '問い合わせ': '管理者としてのお問い合わせは、担当者のメールアドレスまでご連絡ください。',
            };

            // Find the most relevant response
            let foundResponse = responses['連絡先'];

            for (const key in responses) {
                if (lowerCaseQuestion.includes(key)) {
                    foundResponse = responses[key];
                    break;
                }
            }
            
            // AIが考えているように少し遅延
            setTimeout(() => {
                addMessageToChat('bot', foundResponse);
            }, 500);
        }

        chatbotSendBtn.addEventListener('click', () => {
            const question = chatbotInput.value.trim();
            if (question) {
                addMessageToChat('user', question);
                chatbotInput.value = '';
                handleChatbotResponse(question);
            }
        });

        chatbotInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                chatbotSendBtn.click();
            }
        });
        
        quickReplyBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const question = e.target.textContent;
                addMessageToChat('user', question);
                handleChatbotResponse(question);
            });
        });


        // ページロード時の初期設定
        document.addEventListener('DOMContentLoaded', () => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.classList.add('active');
            }

            const homeNavLink = document.querySelector('nav .nav-link[href="#home"]');
            if (homeNavLink) {
                homeNavLink.classList.add('active');
            }

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

            initializeFirebase();
        });
    </script>
</body>
</html>
