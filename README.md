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
            --button-gradient-end: #1e3a8a; /* デープブルー for button end */
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
        
        /* 記事詳細ページのアイコン調整 */
        .article-modal-content .icon-medium {
            width: 1.5rem;
            height: 1.5rem;
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
        .mhlw-category-card .feature-image {
            box-shadow: none;
            border-radius: 0.75rem;
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
        /* ブログの折りたたみアイコンのスタイル調整 */
        .year-header, .month-header {
            display: flex;
            align-items: center;
            cursor: pointer;
        }
        .year-header svg, .month-header svg {
            transition: transform 0.3s ease-in-out;
        }
        .year-header.collapsed svg, .month-header.collapsed svg {
            transform: rotate(0deg);
        }
        .year-header.expanded svg, .month-header.expanded svg {
            transform: rotate(90deg);
        }
    </style>
</head>
<body class="antialiased">
    <!-- ヘッダー -->
    <div class="header-bg text-white py-6 md:py-8 shadow-lg">
        <div class="container flex flex-col md:flex-row items-center justify-between relative z-10">
            <a href="#home" class="flex items-center gap-2 mb-4 md:mb-0 text-3xl md:text-4xl font-extrabold text-white no-underline">
                <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                MedReach
            </a>
            <nav>
                <ul class="flex flex-wrap justify-center space-x-4 md:space-x-8 text-lg md:text-xl font-semibold">
                    <li><a href="#home" class="nav-link active">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        ホーム
                    </a></li>
                    <li><a href="#blog" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M16 16h-2"/></svg>
                        ドクターズブログ
                    </a></li>
                    <li><a href="#job-postings" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                        求人情報
                    </a></li>
                    <li><a href="#clinic-transfer" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hospital"><path d="M12 6V2H2v10a4 4 0 0 0 4 4h10v6h4V6Z"/><path d="M12 18h.01"/><path d="M12 12h.01"/></svg>
                        クリニック譲渡
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
                <a href="#blog" class="button-primary page-link">
                    <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    最新記事を見る
                </a>
            </div>
        </section>

        <!-- ドクターズブログセクション -->
        <section id="blog" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">ドクターズブログ：現場の知見と未来への提言</h2>
            <p class="text-md text-medium-gray-text text-center mb-10 max-w-3xl mx-auto">
                現役医師や医療専門家が執筆するコラム・解説記事です。日々の診療のヒントからキャリア、最新医療トレンドまで、多岐にわたるテーマを深く掘り下げます。
            </p>
            <div id="blogGrid" class="space-y-8">
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
                <img id="modalImage" src="" alt="[記事画像]" class="w-full h-auto rounded-lg mb-4 hidden">
                <p id="modalBody" class="text-base text-dark-gray-text leading-relaxed"></p>
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
                    <button class="chatbot-quick-reply-btn bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">ブログ記事について</button>
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
                <div class="mt-4">
                    <label for="newArticleImage" class="block text-dark-gray-text font-semibold mb-2">画像ファイル名 (例: 画像 (1).jpg)</label>
                    <input type="text" id="newArticleImage" class="admin-input" placeholder="画像ファイル名">
                </div>
                <button id="addArticleBtn" class="admin-button mt-4">記事を追加</button>
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
        let currentArticles = [[
    {
        "year": 2019,
        "month": 0,
        "title": "医師の働き方改革：QOL向上のための実践的アプローチ",
        "summary": "長時間労働の是正から、ワークライフバランスの実現に向けた具体的な施策と、医療機関での導入事例を解説します。",
        "image": "画像 (3).jpg"
    },
    {
        "year": 2019,
        "month": 0,
        "title": "AIを活用した画像診断の最前線：臨床現場への影響と課題",
        "summary": "AIがどのように画像診断を革新しているか、その精度向上、診断時間の短縮、そして今後の倫理的課題について深掘りします。",
        "image": "画像 (4).jpg"
    },
    {
        "year": 2019,
        "month": 0,
        "title": "地域医療における医師の役割：過疎地医療の現状と未来",
        "summary": "高齢化と人口減少が進む地域での医療提供の現状、医師に求められる多岐にわたる役割、そして持続可能な地域医療の構築策を考察します。",
        "image": "画像 (5).jpg"
    },
    {
        "year": 2019,
        "month": 1,
        "title": "最新の感染症対策ガイドライン：病院での実践と注意点",
        "summary": "新型感染症の脅威が増す中、病院での標準的な感染症対策、隔離プロトコル、医療従事者の安全確保策を詳述します。",
        "image": "画像 (6).jpg"
    },
    {
        "year": 2019,
        "month": 1,
        "title": "開業医が知っておくべき税務知識：節税と経理のポイント",
        "summary": "開業医にとって不可欠な税務知識。医療法人化のメリット・デメリット、節税対策、日々の経理処理の効率化について解説します。",
        "image": "画像 (7).jpg"
    },
    {
        "year": 2019,
        "month": 1,
        "title": "医療過誤を防ぐためのチーム医療：コミュニケーションの重要性",
        "summary": "医療現場でのヒューマンエラーを最小限に抑えるためのチーム内コミュニケーションの強化、安全文化の醸成について事例を交えて紹介します。",
        "image": "画像 (8).jpg"
    },
    {
        "year": 2019,
        "month": 2,
        "title": "ジェネリック医薬品の現状と課題：処方と患者指導のポイント",
        "summary": "ジェネリック医薬品の普及状況、品質と安全性に関する議論、医師が患者へ説明する際のポイント、経済的側面について考察します。",
        "image": "画像 (9).jpg"
    },
    {
        "year": 2019,
        "month": 2,
        "title": "若手医師のためのキャリアプランニング：専門医取得から独立まで",
        "summary": "キャリアの選択肢が多様化する中で、若手医師が自身の専門性を確立し、理想のキャリアパスを描くためのロードマップを提案します。",
        "image": "画像 (10).jpg"
    },
    {
        "year": 2019,
        "month": 2,
        "title": "オンライン診療の導入事例と法的側面：メリット・デメリット",
        "summary": "オンライン診療の全国的な導入が進む中、成功事例、導入時の法的留意点、そして患者と医師双方にとっての利点と課題を検証します。",
        "image": "画像 (11).jpg"
    },
    {
        "year": 2019,
        "month": 3,
        "title": "患者エンゲージメントを高めるコミュニケーション術：信頼関係の構築",
        "summary": "患者が治療に積極的に参加するための、医師からの効果的な情報提供、共感的な傾聴、相互理解を深めるコミュニケーション手法を習得します。",
        "image": "画像 (12).jpg"
    },
    {
        "year": 2019,
        "month": 3,
        "title": "先進医療技術の倫理的側面：ゲノム編集と生命倫理",
        "summary": "急速に進歩する再生医療やゲノム編集技術が提起する倫理的問題、社会的な合意形成の必要性、医師の果たすべき役割について議論します。",
        "image": "画像 (13).jpg"
    },
    {
        "year": 2019,
        "month": 3,
        "title": "医師のためのメンタルヘルスケア：バーンアウト予防とストレス管理",
        "summary": "多忙な医療現場で心身の健康を保つためのメンタルヘルス対策。ストレス兆候の早期発見、自己ケア、専門家サポートの活用法を紹介します。",
        "image": "画像 (14).jpg"
    },
    {
        "year": 2019,
        "month": 4,
        "title": "働き方改革関連法が医療現場に与える影響と対応策",
        "summary": "2019年4月施行の働き方改革関連法が、医師の労働環境にどのような影響をもたらすか、具体的な対応策と課題を解説します。",
        "image": "画像 (15).jpg"
    },
    {
        "year": 2019,
        "month": 4,
        "title": "海外の成功事例に学ぶ：チーム医療を支えるテクノロジー",
        "summary": "欧米の先進的な医療機関がどのようにテクノロジーを活用し、チーム医療を効率化しているか、その成功事例を検証します。",
        "image": "画像 (16).jpg"
    },
    {
        "year": 2019,
        "month": 4,
        "title": "医療機器の進化と安全性評価：AI搭載デバイスの未来",
        "summary": "診断・治療を革新する医療機器の最新技術。AIを搭載したデバイスの安全性評価、規制のあり方、そして医療現場への導入プロセスを詳述します。",
        "image": "画像 (17).jpg"
    },
    {
        "year": 2019,
        "month": 5,
        "title": "地域医療連携推進法人の現状と課題：持続可能な医療提供体制へ",
        "summary": "地域医療連携推進法人制度が地域医療にどう貢献しているか、そのメリット・デメリット、そして課題を考察します。",
        "image": "画像 (18).jpg"
    },
    {
        "year": 2019,
        "month": 5,
        "title": "タスク・シフト/シェアの推進：医師の負担軽減と業務効率化",
        "summary": "看護師や薬剤師へのタスク・シフト/シェアが、医師の過重労働をどう軽減し、医療現場全体の業務効率を向上させるかについて解説します。",
        "image": "画像 (19).jpg"
    },
    {
        "year": 2019,
        "month": 5,
        "title": "医療M&Aの動向：クリニックの事業承継と経営戦略",
        "summary": "クリニックの事業承継手段として注目される医療M&A。その動向、メリット・デメリット、成功のためのポイントを解説します。",
        "image": "画像 (20).jpg"
    },
    {
        "year": 2019,
        "month": 6,
        "title": "医療従事者のハラスメント対策：働きやすい職場環境のために",
        "summary": "医療現場におけるハラスメントの実態と、それを防止するための具体的な対策。組織の意識改革、相談窓口の設置、被害者支援の重要性を提言します。",
        "image": "画像 (21).jpg"
    },
    {
        "year": 2019,
        "month": 6,
        "title": "医師の副業・兼業：働き方の多様化と注意すべき点",
        "summary": "医師の副業・兼業が広がる中、どのような仕事があるか、また法務・税務面で注意すべきポイントについて解説します。",
        "image": "画像 (22).jpg"
    },
    {
        "year": 2019,
        "month": 6,
        "title": "医療AIの倫理的ガイドラインと運用：安全で公正な利用のために",
        "summary": "医療AIの急速な発展に伴い、その倫理的な運用が重要視されています。AIの公平性、透明性、責任の所在に関するガイドラインとその実践について解説します。",
        "image": "画像 (23).jpg"
    },
    {
        "year": 2019,
        "month": 7,
        "title": "国際医療協力の最前線：日本の医師が果たす役割",
        "summary": "国際的な医療支援活動の現状、日本の医師が持つ専門性と知見がどう活かされているか、そして今後の課題について考察します。",
        "image": "画像 (24).jpg"
    },
    {
        "year": 2019,
        "month": 7,
        "title": "メディカルツーリズムの現状と課題：日本の医療が世界に貢献するために",
        "summary": "訪日外国人を対象としたメディカルツーリズムの動向。日本の医療が持つ強み、そして受け入れ体制整備における課題を検証します。",
        "image": "画像 (25).jpg"
    },
    {
        "year": 2019,
        "month": 7,
        "title": "医師のためのメンタルフィットネス：バーンアウト予防の新たなアプローチ",
        "summary": "多忙な医療現場で心身の健康を保つための、バーンアウト予防に特化した実践的なメンタルフィットネス手法を紹介します。",
        "image": "画像 (26).jpg"
    },
    {
        "year": 2019,
        "month": 8,
        "title": "医学部入試の公正性問題：その背景と今後の展望",
        "summary": "医学部入試における不正入試問題が社会問題となる中、その背景にある構造的な課題と、公正な入試制度の構築に向けた議論をまとめます。",
        "image": "画像 (3).jpg"
    },
    {
        "year": 2019,
        "month": 8,
        "title": "女性医師のキャリア形成支援：働きやすい環境づくりの提言",
        "summary": "出産や育児とキャリアの両立に悩む女性医師を支援するための施策。柔軟な勤務形態、復職支援、キャリアアップの機会提供について考察します。",
        "image": "画像 (4).jpg"
    },
    {
        "year": 2019,
        "month": 8,
        "title": "在宅医療の最新動向：多職種連携とICT活用",
        "summary": "超高齢社会における在宅医療の役割。医師、看護師、介護士などが連携し、ICTを活用して質の高いケアを提供するための動向を追います。",
        "image": "画像 (5).jpg"
    },
    {
        "year": 2019,
        "month": 9,
        "title": "医薬品開発の最新トレンド：再生医療と遺伝子治療",
        "summary": "医薬品開発の最前線で進む、再生医療や遺伝子治療の動向。難病治療への期待と、安全性確保に向けた課題について解説します。",
        "image": "画像 (6).jpg"
    },
    {
        "year": 2019,
        "month": 9,
        "title": "医学部教育改革の現状と課題：AI時代に求められる医師像",
        "summary": "AIの進化が医学教育に与える影響と、次世代の医師に求められる能力。知識偏重からの脱却と、倫理観の醸成について議論します。",
        "image": "画像 (7).jpg"
    },
    {
        "year": 2019,
        "month": 9,
        "title": "患者中心の医療提供体制：Shared Decision Makingの実践",
        "summary": "患者の価値観や意向を尊重し、医療者が情報を提供しながら共に治療方針を決定するShared Decision Making (SDM)の理念と実践について解説します。",
        "image": "画像 (8).jpg"
    },
    {
        "year": 2019,
        "month": 10,
        "title": "医療費抑制と効率化のバランス：持続可能な医療制度へ",
        "summary": "増大する医療費への対応として、医療の効率化と質の維持をどう両立させるか。予防医療の推進、適正な診療報酬制度のあり方を議論します。",
        "image": "画像 (9).jpg"
    },
    {
        "year": 2019,
        "month": 10,
        "title": "災害医療における連携体制：平時からの備えと訓練",
        "summary": "いつ起こるかわからない災害時にも機能する救急医療体制の構築。平時からの訓練、情報共有体制、医療物資の備蓄の重要性を解説します。",
        "image": "画像 (10).jpg"
    },
    {
        "year": 2019,
        "month": 10,
        "title": "プレシジョン・メディシンの実践例：個別化医療の最前線",
        "summary": "患者一人ひとりの遺伝子情報や病態に応じた最適な治療を提供するプレシジョン・メディシン。がん治療や難病治療での具体的な実践例を紹介します。",
        "image": "画像 (11).jpg"
    },
    {
        "year": 2019,
        "month": 11,
        "title": "医療におけるブロックチェーン技術の可能性：電子カルテの未来",
        "summary": "ブロックチェーン技術が医療にもたらす変革。電子カルテの安全性向上、患者データの共有、医療費精算の効率化について考察します。",
        "image": "画像 (12).jpg"
    },
    {
        "year": 2019,
        "month": 11,
        "title": "精神科医療における新しいアプローチ：デジタル治療とAI",
        "summary": "精神疾患の診断と治療における最新の進歩。デジタル治療アプリ、AIによるカウンセリング支援、個別化された治療計画の可能性を探ります。",
        "image": "画像 (13).jpg"
    },
    {
        "year": 2019,
        "month": 11,
        "title": "医療訴訟リスクマネジメント：トラブルを未然に防ぐために",
        "summary": "医療訴訟のリスクを軽減するための実践的な対策。インフォームドコンセントの徹底、診療記録の正確性、組織的なリスク管理体制の構築を解説します。",
        "image": "画像 (14).jpg"
    },
    {
        "year": 2020,
        "month": 0,
        "title": "COVID-19：初期対応と感染拡大の抑制策の検証",
        "summary": "未知のウイルスに対し、各国の初期対応がどうであったか、感染拡大を抑制するために講じられた具体的な施策とその効果を分析します。",
        "image": "画像 (15).jpg"
    },
    {
        "year": 2020,
        "month": 0,
        "title": "テレワークとオンライン診療の急拡大：コロナ禍が変えた医療の形",
        "summary": "COVID-19パンデミックが加速させたオンライン診療とテレワーク導入。その利便性と課題、今後の定着について掘り下げます。",
        "image": "画像 (16).jpg"
    },
    {
        "year": 2020,
        "month": 0,
        "title": "医療従事者の精神的負担とサポート体制：パンデミックの影で",
        "summary": "最前線で奮闘する医療従事者が直面した精神的ストレスの実態と、彼らを支えるために国内外で構築されたサポートプログラムを紹介します。",
        "image": "画像 (17).jpg"
    },
    {
        "year": 2020,
        "month": 1,
        "title": "パンデミック下の医療体制強化策：病床確保と人材配置",
        "summary": "予期せぬ医療需要の急増に対し、政府や医療機関がどのように病床を確保し、医療人材を最適に配置したか、その課題と教訓を検証します。",
        "image": "画像 (18).jpg"
    },
    {
        "year": 2020,
        "month": 1,
        "title": "COVID-19ワクチン開発の進捗と期待：最新研究レビュー",
        "summary": "世界中で進められたCOVID-19ワクチンの開発競争。様々なタイプのワクチンのメカニズム、臨床試験データ、そして今後の展望を概説します。",
        "image": "画像 (19).jpg"
    },
    {
        "year": 2020,
        "month": 1,
        "title": "医療機関におけるBCP（事業継続計画）：パンデミックからの教訓",
        "summary": "災害や感染症流行時に医療機能を維持するためのBCPの重要性。コロナ禍で明らかになった課題と、今後のBCP策定・見直しのポイントを解説します。",
        "image": "画像 (20).jpg"
    },
    {
        "year": 2020,
        "month": 2,
        "title": "新しい生活様式と医療の未来：感染症時代の健康管理",
        "summary": "マスク着用、手洗い、ソーシャルディスタンスなど、新しい生活様式が常態化する中で、医療がどのように変化し、人々の健康管理に貢献していくかを探ります。",
        "image": "画像 (3).jpg"
    },
    {
        "year": 2020,
        "month": 2,
        "title": "遠隔医療技術の可能性と課題：地域格差解消への貢献",
        "summary": "遠隔医療技術が持つ、医療過疎地域の課題解決への可能性と、技術的・法的な課題、そして普及に向けたロードマップについて考察します。",
        "image": "画像 (4).jpg"
    },
    {
        "year": 2020,
        "month": 2,
        "title": "グローバルな感染症対策協力：国際機関の役割と日本の貢献",
        "summary": "国境を越える感染症に対し、WHOをはじめとする国際機関が果たす役割、そして日本が国際社会にどのように貢献してきたかをレビューします。",
        "image": "画像 (5).jpg"
    },
    {
        "year": 2020,
        "month": 3,
        "title": "医療現場におけるデジタル化の推進：電子カルテからAIまで",
        "summary": "デジタル技術が医療現場にもたらす変革。電子カルテの普及、AIによる診断支援、そしてIoTデバイスを活用した遠隔モニタリングの動向を追います。",
        "image": "画像 (6).jpg"
    },
    {
        "year": 2020,
        "month": 3,
        "title": "COVID-19と併存疾患管理：慢性疾患患者への影響と治療戦略",
        "summary": "COVID-19が慢性疾患を持つ患者に与えた影響、およびパンデミック下での適切な疾患管理戦略、治療プロトコルの調整について議論します。",
        "image": "画像 (7).jpg"
    },
    {
        "year": 2020,
        "month": 3,
        "title": "地域医療連携の新たな形：ポストコロナ時代の医療供給体制",
        "summary": "感染症流行を経て、地域医療連携の重要性が再認識されています。病院と診療所、介護施設が連携し、住民を支える新たな医療供給体制の構築を探ります。",
        "image": "画像 (8).jpg"
    },
    {
        "year": 2020,
        "month": 4,
        "title": "パンデミック後の医療提供体制：課題と展望",
        "summary": "COVID-19収束後、医療現場が直面するであろう新たな課題と、持続可能な医療提供体制の構築に向けた展望を考察します。",
        "image": "画像 (9).jpg"
    },
    {
        "year": 2020,
        "month": 4,
        "title": "オンラインでの医学教育：メリット、課題、そして未来",
        "summary": "コロナ禍で急速に普及したオンラインでの医学教育。その利点、技術的・教育的課題、そして今後の展望を検証します。",
        "image": "画像 (10).jpg"
    },
    {
        "year": 2020,
        "month": 4,
        "title": "医療従事者のウェルビーイング向上：バーンアウト対策の組織的アプローチ",
        "summary": "医療従事者の心身の健康と幸福感を高めるための、組織的な支援策とメンタルヘルスプログラムについて議論します。",
        "image": "画像 (11).jpg"
    },
    {
        "year": 2020,
        "month": 5,
        "title": "医療機器の新たな潮流：遠隔モニタリングとIoT",
        "summary": "遠隔モニタリング技術やIoTデバイスが、慢性疾患管理や在宅医療にどのように貢献しているか、その最新動向を追います。",
        "image": "画像 (12).jpg"
    },
    {
        "year": 2020,
        "month": 5,
        "title": "災害医療における連携体制：大規模災害への備えと訓練",
        "summary": "大規模災害発生時にも医療機能を迅速に展開するための、平時からの訓練、情報共有体制、医療物資の備蓄の重要性を解説します。",
        "image": "画像 (13).jpg"
    },
    {
        "year": 2020,
        "month": 5,
        "title": "医薬品の迅速承認制度：患者アクセス改善への貢献",
        "summary": "難病や希少疾患に対する新しい治療薬が患者に届くまでの承認プロセスを迅速化する制度について、その意義と課題を詳述します。",
        "image": "画像 (14).jpg"
    },
    {
        "year": 2020,
        "month": 6,
        "title": "日本の医療制度の課題：医療費増大と持続可能性",
        "summary": "増大する医療費への対応として、医療の効率化と質の維持をどう両立させるか。予防医療の推進、適正な診療報酬制度のあり方を議論します。",
        "image": "画像 (15).jpg"
    },
    {
        "year": 2020,
        "month": 6,
        "title": "小児医療の課題と支援策：少子化と医療提供体制",
        "summary": "少子化が進む中での小児医療の課題。専門医の育成、夜間・休日の診療体制、医療的ケア児への支援など、包括的な対策を検討します。",
        "image": "画像 (16).jpg"
    },
    {
        "year": 2020,
        "month": 6,
        "title": "女性医師のキャリア形成支援：働きやすい職場環境づくり",
        "summary": "出産や育児とキャリアの両立に悩む女性医師を支援するための施策。柔軟な勤務形態、復職支援、キャリアアップの機会提供について考察します。",
        "image": "画像 (17).jpg"
    },
    {
        "year": 2020,
        "month": 7,
        "title": "グローバルヘルス課題への貢献：日本の医療技術と知見",
        "summary": "世界が直面する感染症、貧困、格差といったグローバルヘルス課題に対し、日本の医療技術や公衆衛生の知見がどのように貢献できるかを考察します。",
        "image": "画像 (18).jpg"
    },
    {
        "year": 2020,
        "month": 7,
        "title": "医師の燃え尽き症候群対策：ウェルビーイングを保つために",
        "summary": "医師の心身の健康を守るための燃え尽き症候群対策。早期の兆候認識、ストレスコーピング、ピアサポート、組織的な介入の重要性を議論します。",
        "image": "画像 (19).jpg"
    },
    {
        "year": 2020,
        "month": 7,
        "title": "最新のがん治療薬と副作用管理：患者QOLの向上",
        "summary": "免疫チェックポイント阻害剤や分子標的薬など、最新のがん治療薬のメカニズムと効果。副作用の早期発見と管理、患者のQOL向上への取り組みを詳述します。",
        "image": "画像 (20).jpg"
    },
    {
        "year": 2020,
        "month": 8,
        "title": "医療DXによる診療効率の向上：スマートホスピタルの実現",
        "summary": "デジタル技術を活用し、医療機関の業務効率を最大化する医療DX。スマートホスピタルの事例、AIによる業務支援、データ連携のメリットを解説します。",
        "image": "画像 (3).jpg"
    },
    {
        "year": 2020,
        "month": 8,
        "title": "デジタルセラピューティクスの可能性：疾患治療への新たな選択肢",
        "summary": "ソフトウェアやアプリが疾患の治療効果を持つデジタルセラピューティクス。その作用機序、臨床効果、規制の現状、そして今後の普及に向けた課題を探ります。",
        "image": "画像 (4).jpg"
    },
    {
        "year": 2020,
        "month": 8,
        "title": "ロボット支援手術の拡大とトレーニング：外科医のスキル向上",
        "summary": "ダヴィンチなどの手術支援ロボットが外科手術にもたらす変革。導入のメリット、外科医の専門トレーニング、そして今後の技術革新について紹介します。",
        "image": "画像 (5).jpg"
    },
    {
        "year": 2020,
        "month": 9,
        "title": "再生医療の臨床応用と展望：幹細胞治療の最新研究",
        "summary": "iPS細胞やES細胞を用いた再生医療が臨床現場にどう応用されているか、最新の研究動向、そして今後の疾患治療への可能性を探ります。",
        "image": "画像 (6).jpg"
    },
    {
        "year": 2020,
        "month": 9,
        "title": "ゲノム医療の発展と個別化医療：がん治療への応用",
        "summary": "個人の遺伝子情報に基づいたゲノム医療が、がん治療をはじめとする様々な疾患治療にどう貢献しているか、その最新の知見と課題を解説します。",
        "image": "画像 (7).jpg"
    },
    {
        "year": 2020,
        "month": 9,
        "title": "医療機関のサイバーセキュリティ対策：情報漏洩リスクと防御",
        "summary": "電子カルテの普及に伴い増大するサイバー攻撃のリスク。医療機関が取るべきセキュリティ対策、個人情報保護の重要性、緊急時の対応を詳述します。",
        "image": "画像 (8).jpg"
    },
    {
        "year": 2020,
        "month": 10,
        "title": "地域包括ケアシステムの深化：住民の健康を支える",
        "summary": "住まい、医療、介護、予防、生活支援が一体的に提供される地域包括ケアシステム。その深化に向けた課題と、医師の関わり方について考察します。",
        "image": "画像 (9).jpg"
    },
    {
        "year": 2020,
        "month": 10,
        "title": "予防医療と健康寿命の延伸：医師の新たな役割",
        "summary": "疾病の治療だけでなく、予防に重点を置く予防医療の重要性。医師が患者の健康寿命延伸にどう貢献できるか、その具体的なアプローチを紹介します。",
        "image": "画像 (10).jpg"
    },
    {
        "year": 2020,
        "month": 10,
        "title": "新しい治療薬の承認プロセスと迅速化：患者アクセスへの貢献",
        "summary": "難病や希少疾患に対する新しい治療薬が患者に届くまでの承認プロセス。迅速承認制度の活用、開発コスト、そしてアクセス改善策を詳述します。",
        "image": "画像 (11).jpg"
    },
    {
        "year": 2020,
        "month": 11,
        "title": "医療データの利活用とプライバシー保護：バランスの取れた制度設計",
        "summary": "医療データのビッグデータを疾病研究や新薬開発に活かす一方で、患者のプライバシー保護をどう両立させるか。倫理的・法的な課題と制度設計を議論します。",
        "image": "画像 (12).jpg"
    },
    {
        "year": 2020,
        "month": 11,
        "title": "地域医療の持続可能性を探る：財源と人材の確保",
        "summary": "地域医療を将来にわたって維持していくための課題。安定的な財源確保、若手医師の誘致、地域連携の強化策について多角的に考察します。",
        "image": "画像 (13).jpg"
    },
    {
        "year": 2020,
        "month": 11,
        "title": "救急医療体制の強化：災害時対応と日常医療の確保",
        "summary": "いつ起こるかわからない災害時にも機能する救急医療体制の構築。日常的な救急患者対応の効率化、ドクターヘリの活用、広域連携の重要性を紹介します。",
        "image": "画像 (14).jpg"
    },
    {
        "year": 2021,
        "month": 0,
        "title": "COVID-19ワクチン接種プログラムの進展と副反応の実態",
        "summary": "ワクチン接種が本格化する中、接種率の向上策、期待される集団免疫、そして懸念される副反応や長期的な安全性に関する最新情報を解説します。",
        "image": "画像 (15).jpg"
    },
    {
        "year": 2021,
        "month": 0,
        "title": "「ロングCOVID」の病態と治療アプローチ：新たな医療課題",
        "summary": "COVID-19回復後も続く様々な症状（ロングCOVID）について、その複雑な病態生理、診断基準、そして多岐にわたる治療アプローチを紹介します。",
        "image": "画像 (16).jpg"
    },
    {
        "year": 2021,
        "month": 0,
        "title": "医療DX推進のためのデータ活用：匿名加工情報とPBR",
        "summary": "医療DXの基盤となる医療データの利活用。匿名加工情報を用いた研究、患者ベースド・レジストリ（PBR）の構築と意義について掘り下げます。",
        "image": "画像 (17).jpg"
    },
    {
        "year": 2021,
        "month": 1,
        "title": "ウィズコロナ時代の外来診療：感染対策と患者安心への工夫",
        "summary": "感染リスクを最小限に抑えつつ、患者が安心して受診できる外来診療のあり方。動線分離、換気対策、オンライン問診の活用などを紹介します。",
        "image": "画像 (18).jpg"
    },
    {
        "year": 2021,
        "month": 1,
        "title": "医療資源の最適配分と公平性：パンデミック下での意思決定",
        "summary": "限られた医療資源をどのように配分するかという倫理的・実践的課題。トリアージの原則、公平なアクセスの確保、医療者の負担軽減策について議論します。",
        "image": "画像 (19).jpg"
    },
    {
        "year": 2021,
        "month": 1,
        "title": "パンデミックがもたらした医療教育の変化：オンライン化とシミュレーション",
        "summary": "COVID-19が医療教育に与えた影響。オンライン講義への移行、バーチャルリアリティを活用したシミュレーション教育の導入事例を検証します。",
        "image": "画像 (20).jpg"
    },
    {
        "year": 2021,
        "month": 2,
        "title": "電子カルテシステムの最新動向：クラウド化と連携強化",
        "summary": "進化する電子カルテシステム。クラウドベースのEHRのメリット、他システムとの連携強化、そしてデータ共有の未来について概説します。",
        "image": "画像 (3).jpg"
    },
    {
        "year": 2021,
        "month": 2,
        "title": "ポストコロナにおける医療の課題：医療費増大と持続可能性",
        "summary": "パンデミック後の医療現場が直面する課題。累積する医療費の増大、医療提供体制の維持、そして持続可能な医療システムの構築に向けた提言をします。",
        "image": "画像 (4).jpg"
    },
    {
        "year": 2021,
        "month": 2,
        "title": "感染症流行と医療経済：パンデミックが変えた医療費構造",
        "summary": "感染症流行が医療経済に与えた具体的な影響。医療費の変動、新たな支出項目、そして保険制度への影響について経済学的視点から分析します。",
        "image": "画像 (5).jpg"
    },
    {
        "year": 2021,
        "month": 3,
        "title": "新しい治療薬の承認プロセスと迅速化：患者アクセスへの貢献",
        "summary": "難病や希少疾患に対する新しい治療薬が患者に届くまでの承認プロセス。迅速承認制度の活用、開発コスト、そしてアクセス改善策を詳述します。",
        "image": "画像 (6).jpg"
    },
    {
        "year": 2021,
        "month": 3,
        "title": "医療従事者のスキルアップと研修：変化するニーズへの対応",
        "summary": "医療技術の進歩や社会情勢の変化に対応するための医療従事者の継続的な学習。最新の研修プログラム、リカレント教育の重要性について考察します。",
        "image": "画像 (7).jpg"
    },
    {
        "year": 2021,
        "month": 3,
        "title": "患者中心の医療提供体制：Shared Decision Makingの推進",
        "summary": "患者の価値観や意向を尊重し、医療者が情報を提供しながら共に治療方針を決定するShared Decision Making (SDM)の理念と実践について解説します。",
        "image": "画像 (8).jpg"
    },
    {
        "year": 2021,
        "month": 4,
        "title": "DX時代の医療経営：データドリブンな意思決定の重要性",
        "summary": "デジタル化が加速する中、医療経営におけるデータ分析の重要性が増しています。データに基づいた効率的な意思決定について解説します。",
        "image": "画像 (9).jpg"
    },
    {
        "year": 2021,
        "month": 4,
        "title": "遺伝子診断の進歩と倫理的課題：がんや難病の未来",
        "summary": "遺伝子診断技術が急速に進化する中で、がんや難病の診断・治療にどう応用されているか、そして倫理的課題について深掘りします。",
        "image": "画像 (10).jpg"
    },
    {
        "year": 2021,
        "month": 4,
        "title": "オンライン診療の診療報酬改定：最新情報と経営への影響",
        "summary": "オンライン診療の診療報酬改定に関する最新情報をまとめ、医療機関の経営にどのような影響があるかを解説します。",
        "image": "画像 (11).jpg"
    },
    {
        "year": 2021,
        "month": 5,
        "title": "医療機器の安全性評価：新たな規制と国際動向",
        "summary": "AIを搭載した医療機器など、新たな技術の安全性評価に関する規制の変更点と、国際的な動向について解説します。",
        "image": "画像 (12).jpg"
    },
    {
        "year": 2021,
        "month": 5,
        "title": "地域医療構想の現状と展望：病床機能分化の行方",
        "summary": "地域医療構想が目指す病床機能分化の現状と課題。今後の医療提供体制がどう変化していくかを考察します。",
        "image": "画像 (13).jpg"
    },
    {
        "year": 2021,
        "month": 5,
        "title": "医療従事者のメンタルヘルス：ピアサポートと組織的ケア",
        "summary": "医療従事者のストレス対策として、ピアサポートの重要性と、組織が取り組むべきメンタルヘルスケアについて議論します。",
        "image": "画像 (14).jpg"
    },
    {
        "year": 2021,
        "month": 6,
        "title": "医師のキャリアパス多様化：開業医から産業医まで",
        "summary": "臨床以外の選択肢も豊富です。研究、公衆衛生、産業医、そして起業。あなたの可能性を広げる多様なキャリアパスを解説します。",
        "image": "画像 (15).jpg"
    },
    {
        "year": 2021,
        "month": 6,
        "title": "AI医療の現状と未来：医師が知っておくべきこと",
        "summary": "診断支援から新薬開発まで、急速に進化するAI医療。その可能性と課題、医師に求められる役割について深く考察します。",
        "image": "画像 (16).jpg"
    },
    {
        "year": 2021,
        "month": 6,
        "title": "ストレス社会を生き抜く：医師のためのメンタルヘルス術",
        "summary": "多忙な医療現場で働く医師のメンタルヘルスは非常に重要です。ストレス管理、リフレッシュ法、専門機関の活用についてご紹介します。",
        "image": "画像 (17).jpg"
    },
    {
        "year": 2021,
        "month": 7,
        "title": "地域医療の最前線：医師のやりがいと挑戦",
        "summary": "過疎地域での医療提供は多くの困難を伴いますが、その中で見つけるやりがいや、地域住民との深い繋がりについて探ります。",
        "image": "画像 (18).jpg"
    },
    {
        "year": 2021,
        "month": 7,
        "title": "医薬品開発の最新トレンド：再生医療と遺伝子治療",
        "summary": "医薬品開発の最前線で進む、再生医療や遺伝子治療の動向。難病治療への期待と、安全性確保に向けた課題について解説します。",
        "image": "画像 (19).jpg"
    },
    {
        "year": 2021,
        "month": 7,
        "title": "医学部教育改革の現状と課題：AI時代に求められる医師像",
        "summary": "AIの進化が医学教育に与える影響と、次世代の医師に求められる能力。知識偏重からの脱却と、倫理観の醸成について議論します。",
        "image": "画像 (20).jpg"
    },
    {
        "year": 2021,
        "month": 8,
        "title": "医療費抑制と効率化のバランス：持続可能な医療制度へ",
        "summary": "増大する医療費への対応として、医療の効率化と質の維持をどう両立させるか。予防医療の推進、適正な診療報酬制度のあり方を議論します。",
        "image": "画像 (3).jpg"
    },
    {
        "year": 2021,
        "month": 8,
        "title": "災害医療における連携体制：平時からの備えと訓練",
        "summary": "いつ起こるかわからない災害時にも機能する救急医療体制の構築。平時からの訓練、情報共有体制、医療物資の備蓄の重要性を解説します。",
        "image": "画像 (4).jpg"
    },
    {
        "year": 2021,
        "month": 8,
        "title": "プレシジョン・メディシンの実践例：個別化医療の最前線",
        "summary": "患者一人ひとりの遺伝子情報や病態に応じた最適な治療を提供するプレシジョン・メディシン。がん治療や難病治療での具体的な実践例を紹介します。",
        "image": "画像 (5).jpg"
    },
    {
        "year": 2021,
        "month": 9,
        "title": "医療におけるブロックチェーン技術の可能性：電子カルテの未来",
        "summary": "ブロックチェーン技術が医療にもたらす変革。電子カルテの安全性向上、患者データの共有、医療費精算の効率化について考察します。",
        "image": "画像 (6).jpg"
    },
    {
        "year": 2021,
        "month": 9,
        "title": "精神科医療における新しいアプローチ：デジタル治療とAI",
        "summary": "精神疾患の診断と治療における最新の進歩。デジタル治療アプリ、AIによるカウンセリング支援、個別化された治療計画の可能性を探ります。",
        "image": "画像 (7).jpg"
    },
    {
        "year": 2021,
        "month": 9,
        "title": "医療訴訟リスクマネジメント：トラブルを未然に防ぐために",
        "summary": "医療訴訟のリスクを軽減するための実践的な対策。インフォームドコンセントの徹底、診療記録の正確性、組織的なリスク管理体制の構築を解説します。",
        "image": "画像 (8).jpg"
    },
    {
        "year": 2021,
        "month": 10,
        "title": "国際医療協力の最前線：日本の医師が果たす役割",
        "summary": "国際的な医療支援活動の現状、日本の医師が持つ専門性と知見がどう活かされているか、そして今後の課題について考察します。",
        "image": "画像 (9).jpg"
    },
    {
        "year": 2021,
        "month": 10,
        "title": "メディカルツーリズムの現状と課題：日本の医療が世界に貢献するために",
        "summary": "訪日外国人を対象としたメディカルツーリズムの動向。日本の医療が持つ強み、そして受け入れ体制整備における課題を検証します。",
        "image": "画像 (10).jpg"
    },
    {
        "year": 2021,
        "month": 10,
        "title": "医師のためのメンタルフィットネス：バーンアウト予防の新たなアプローチ",
        "summary": "多忙な医療現場で心身の健康を保つための、バーンアウト予防に特化した実践的なメンタルフィットネス手法を紹介します。",
        "image": "画像 (11).jpg"
    },
    {
        "year": 2021,
        "month": 11,
        "title": "医学部入試の公正性問題：その背景と今後の展望",
        "summary": "医学部入試における不正入試問題が社会問題となる中、その背景にある構造的な課題と、公正な入試制度の構築に向けた議論をまとめます。",
        "image": "画像 (12).jpg"
    },
    {
        "year": 2021,
        "month": 11,
        "title": "女性医師のキャリア形成支援：働きやすい環境づくりの提言",
        "summary": "出産や育児とキャリアの両立に悩む女性医師を支援するための施策。柔軟な勤務形態、復職支援、キャリアアップの機会提供について考察します。",
        "image": "画像 (13).jpg"
    },
    {
        "year": 2021,
        "month": 11,
        "title": "在宅医療の最新動向：多職種連携とICT活用",
        "summary": "超高齢社会における在宅医療の役割。医師、看護師、介護士などが連携し、ICTを活用して質の高いケアを提供するための動向を追います。",
        "image": "画像 (14).jpg"
    },
    {
        "year": 2022,
        "month": 0,
        "title": "医療従事者の働き方改革：2024年問題への対応",
        "summary": "2024年に本格的に適用される医師の働き方改革。時間外労働の上限規制とその影響、そして医療機関がとるべき対応策について解説します。",
        "image": "画像 (15).jpg"
    },
    {
        "year": 2022,
        "month": 0,
        "title": "AI医療の最新研究：診断精度向上と新薬開発への応用",
        "summary": "AIが医療分野にもたらす最新の進歩。画像診断の精度向上、新薬開発プロセスの効率化、そして今後の展望について解説します。",
        "image": "画像 (16).jpg"
    },
    {
        "year": 2022,
        "month": 0,
        "title": "地域医療連携の新たな形：情報共有とデータ活用",
        "summary": "地域医療連携を円滑にするための情報共有のあり方。電子カルテの連携やデータ活用がもたらす効果と課題について考察します。",
        "image": "画像 (17).jpg"
    },
    {
        "year": 2022,
        "month": 1,
        "title": "オンライン診療の普及と課題：患者の利便性と医師の負担",
        "summary": "オンライン診療が広く普及する中、患者の利便性向上と、医師が直面する新たな課題について議論します。",
        "image": "画像 (18).jpg"
    },
    {
        "year": 2022,
        "month": 1,
        "title": "医療M&Aの成功事例：円滑な事業承継のポイント",
        "summary": "クリニックの事業承継手段として注目される医療M&A。その成功事例を分析し、円滑な承継を実現するためのポイントを解説します。",
        "image": "画像 (19).jpg"
    },
    {
        "year": 2022,
        "month": 1,
        "title": "医療訴訟リスクマネジメント：患者との信頼関係構築",
        "summary": "医療訴訟を未然に防ぐために、患者との信頼関係をどう構築するか。インフォームドコンセントの徹底とコミュニケーション術について解説します。",
        "image": "画像 (20).jpg"
    },
    {
        "year": 2022,
        "month": 2,
        "title": "再生医療の臨床応用と展望：iPS細胞研究の進展",
        "summary": "iPS細胞を用いた再生医療が臨床現場にどう応用されているか、最新の研究動向、そして今後の疾患治療への可能性を探ります。",
        "image": "画像 (3).jpg"
    },
    {
        "year": 2022,
        "month": 2,
        "title": "ゲノム医療の発展と個別化医療：がん治療への応用",
        "summary": "個人の遺伝子情報に基づいたゲノム医療が、がん治療をはじめとする様々な疾患治療にどう貢献しているか、その最新の知見と課題を解説します。",
        "image": "画像 (4).jpg"
    },
    {
        "year": 2022,
        "month": 2,
        "title": "医療機関のサイバーセキュリティ対策：情報漏洩リスクと防御",
        "summary": "電子カルテの普及に伴い増大するサイバー攻撃のリスク。医療機関が取るべきセキュリティ対策、個人情報保護の重要性、緊急時の対応を詳述します。",
        "image": "画像 (5).jpg"
    },
    {
        "year": 2022,
        "month": 3,
        "title": "医師のキャリアパス多様化：研究医から公衆衛生医まで",
        "summary": "臨床以外の選択肢も豊富です。研究、公衆衛生、産業医、そして起業。あなたの可能性を広げる多様なキャリアパスを解説します。",
        "image": "画像 (6).jpg"
    },
    {
        "year": 2022,
        "month": 3,
        "title": "デジタルセラピューティクスの可能性：疾患治療への新たな選択肢",
        "summary": "ソフトウェアやアプリが疾患の治療効果を持つデジタルセラピューティクス。その作用機序、臨床効果、規制の現状、そして今後の普及に向けた課題を探ります。",
        "image": "画像 (7).jpg"
    },
    {
        "year": 2022,
        "month": 3,
        "title": "ロボット支援手術の拡大とトレーニング：外科医のスキル向上",
        "summary": "ダヴィンチなどの手術支援ロボットが外科手術にもたらす変革。導入のメリット、外科医の専門トレーニング、そして今後の技術革新について紹介します。",
        "image": "画像 (8).jpg"
    },
    {
        "year": 2022,
        "month": 4,
        "title": "地域包括ケアシステムの深化：住民の健康を支える",
        "summary": "住まい、医療、介護、予防、生活支援が一体的に提供される地域包括ケアシステム。その深化に向けた課題と、医師の関わり方について考察します。",
        "image": "画像 (9).jpg"
    },
    {
        "year": 2022,
        "month": 4,
        "title": "予防医療と健康寿命の延伸：医師の新たな役割",
        "summary": "疾病の治療だけでなく、予防に重点を置く予防医療の重要性。医師が患者の健康寿命延伸にどう貢献できるか、その具体的なアプローチを紹介します。",
        "image": "画像 (10).jpg"
    },
    {
        "year": 2022,
        "month": 4,
        "title": "新しい治療薬の承認プロセスと迅速化：患者アクセスへの貢献",
        "summary": "難病や希少疾患に対する新しい治療薬が患者に届くまでの承認プロセス。迅速承認制度の活用、開発コスト、そしてアクセス改善策を詳述します。",
        "image": "画像 (11).jpg"
    },
    {
        "year": 2022,
        "month": 5,
        "title": "医療データの利活用とプライバシー保護：バランスの取れた制度設計",
        "summary": "医療データのビッグデータを疾病研究や新薬開発に活かす一方で、患者のプライバシー保護をどう両立させるか。倫理的・法的な課題と制度設計を議論します。",
        "image": "画像 (12).jpg"
    },
    {
        "year": 2022,
        "month": 5,
        "title": "地域医療の持続可能性を探る：財源と人材の確保",
        "summary": "地域医療を将来にわたって維持していくための課題。安定的な財源確保、若手医師の誘致、地域連携の強化策について多角的に考察します。",
        "image": "画像 (13).jpg"
    },
    {
        "year": 2022,
        "month": 5,
        "title": "救急医療体制の強化：災害時対応と日常医療の確保",
        "summary": "いつ起こるかわからない災害時にも機能する救急医療体制の構築。日常的な救急患者対応の効率化、ドクターヘリの活用、広域連携の重要性を紹介します。",
        "image": "画像 (14).jpg"
    },
    {
        "year": 2022,
        "month": 6,
        "title": "国際医療協力の最前線：日本の医師が果たす役割",
        "summary": "国際的な医療支援活動の現状、日本の医師が持つ専門性と知見がどう活かされているか、そして今後の課題について考察します。",
        "image": "画像 (15).jpg"
    },
    {
        "year": 2022,
        "month": 6,
        "title": "メディカルツーリズムの現状と課題：日本の医療が世界に貢献するために",
        "summary": "訪日外国人を対象としたメディカルツーリズムの動向。日本の医療が持つ強み、そして受け入れ体制整備における課題を検証します。",
        "image": "画像 (16).jpg"
    },
    {
        "year": 2022,
        "month": 6,
        "title": "医師のためのメンタルフィットネス：バーンアウト予防の新たなアプローチ",
        "summary": "多忙な医療現場で心身の健康を保つための、バーンアウト予防に特化した実践的なメンタルフィットネス手法を紹介します。",
        "image": "画像 (17).jpg"
    },
    {
        "year": 2022,
        "month": 7,
        "title": "医学部入試の公正性問題：その背景と今後の展望",
        "summary": "医学部入試における不正入試問題が社会問題となる中、その背景にある構造的な課題と、公正な入試制度の構築に向けた議論をまとめます。",
        "image": "画像 (18).jpg"
    },
    {
        "year": 2022,
        "month": 7,
        "title": "女性医師のキャリア形成支援：働きやすい環境づくりの提言",
        "summary": "出産や育児とキャリアの両立に悩む女性医師を支援するための施策。柔軟な勤務形態、復職支援、キャリアアップの機会提供について考察します。",
        "image": "画像 (19).jpg"
    },
    {
        "year": 2022,
        "month": 7,
        "title": "在宅医療の最新動向：多職種連携とICT活用",
        "summary": "超高齢社会における在宅医療の役割。医師、看護師、介護士などが連携し、ICTを活用して質の高いケアを提供するための動向を追います。",
        "image": "画像 (20).jpg"
    },
    {
        "year": 2022,
        "month": 8,
        "title": "医療従事者の働き方改革：2024年問題への対応",
        "summary": "2024年に本格的に適用される医師の働き方改革。時間外労働の上限規制とその影響、そして医療機関がとるべき対応策について解説します。",
        "image": "画像 (3).jpg"
    },
    {
        "year": 2022,
        "month": 8,
        "title": "AI医療の最新研究：診断精度向上と新薬開発への応用",
        "summary": "AIが医療分野にもたらす最新の進歩。画像診断の精度向上、新薬開発プロセスの効率化、そして今後の展望について解説します。",
        "image": "画像 (4).jpg"
    },
    {
        "year": 2022,
        "month": 8,
        "title": "地域医療連携の新たな形：情報共有とデータ活用",
        "summary": "地域医療連携を円滑にするための情報共有のあり方。電子カルテの連携やデータ活用がもたらす効果と課題について考察します。",
        "image": "画像 (5).jpg"
    },
    {
        "year": 2022,
        "month": 9,
        "title": "オンライン診療の普及と課題：患者の利便性と医師の負担",
        "summary": "オンライン診療が広く普及する中、患者の利便性向上と、医師が直面する新たな課題について議論します。",
        "image": "画像 (6).jpg"
    },
    {
        "year": 2022,
        "month": 9,
        "title": "医療M&Aの成功事例：円滑な事業承継のポイント",
        "summary": "クリニックの事業承継手段として注目される医療M&A。その成功事例を分析し、円滑な承継を実現するためのポイントを解説します。",
        "image": "画像 (7).jpg"
    },
    {
        "year": 2022,
        "month": 9,
        "title": "医療訴訟リスクマネジメント：患者との信頼関係構築",
        "summary": "医療訴訟を未然に防ぐために、患者との信頼関係をどう構築するか。インフォームドコンセントの徹底とコミュニケーション術について解説します。",
        "image": "画像 (8).jpg"
    },
    {
        "year": 2022,
        "month": 10,
        "title": "再生医療の臨床応用と展望：iPS細胞研究の進展",
        "summary": "iPS細胞を用いた再生医療が臨床現場にどう応用されているか、最新の研究動向、そして今後の疾患治療への可能性を探ります。",
        "image": "画像 (9).jpg"
    },
    {
        "year": 2022,
        "month": 10,
        "title": "ゲノム医療の発展と個別化医療：がん治療への応用",
        "summary": "個人の遺伝子情報に基づいたゲノム医療が、がん治療をはじめとする様々な疾患治療にどう貢献しているか、その最新の知見と課題を解説します。",
        "image": "画像 (10).jpg"
    },
    {
        "year": 2022,
        "month": 10,
        "title": "医療機関のサイバーセキュリティ対策：情報漏洩リスクと防御",
        "summary": "電子カルテの普及に伴い増大するサイバー攻撃のリスク。医療機関が取るべきセキュリティ対策、個人情報保護の重要性、緊急時の対応を詳述します。",
        "image": "画像 (11).jpg"
    },
    {
        "year": 2022,
        "month": 11,
        "title": "医師のキャリアパス多様化：研究医から公衆衛生医まで",
        "summary": "臨床以外の選択肢も豊富です。研究、公衆衛生、産業医、そして起業。あなたの可能性を広げる多様なキャリアパスを解説します。",
        "image": "画像 (12).jpg"
    },
    {
        "year": 2022,
        "month": 11,
        "title": "デジタルセラピューティクスの可能性：疾患治療への新たな選択肢",
        "summary": "ソフトウェアやアプリが疾患の治療効果を持つデジタルセラピューティクス。その作用機序、臨床効果、規制の現状、そして今後の普及に向けた課題を探ります。",
        "image": "画像 (13).jpg"
    },
    {
        "year": 2022,
        "month": 11,
        "title": "ロボット支援手術の拡大とトレーニング：外科医のスキル向上",
        "summary": "ダヴィンチなどの手術支援ロボットが外科手術にもたらす変革。導入のメリット、外科医の専門トレーニング、そして今後の技術革新について紹介します。",
        "image": "画像 (14).jpg"
    },
    {
        "year": 2023,
        "month": 0,
        "title": "地域包括ケアシステムの深化：住民の健康を支える",
        "summary": "住まい、医療、介護、予防、生活支援が一体的に提供される地域包括ケアシステム。その深化に向けた課題と、医師の関わり方について考察します。",
        "image": "画像 (15).jpg"
    },
    {
        "year": 2023,
        "month": 0,
        "title": "予防医療と健康寿命の延伸：医師の新たな役割",
        "summary": "疾病の治療だけでなく、予防に重点を置く予防医療の重要性。医師が患者の健康寿命延伸にどう貢献できるか、その具体的なアプローチを紹介します。",
        "image": "画像 (16).jpg"
    },
    {
        "year": 2023,
        "month": 0,
        "title": "新しい治療薬の承認プロセスと迅速化：患者アクセスへの貢献",
        "summary": "難病や希少疾患に対する新しい治療薬が患者に届くまでの承認プロセス。迅速承認制度の活用、開発コスト、そしてアクセス改善策を詳述します。",
        "image": "画像 (17).jpg"
    },
    {
        "year": 2023,
        "month": 1,
        "title": "医療データの利活用とプライバシー保護：バランスの取れた制度設計",
        "summary": "医療データのビッグデータを疾病研究や新薬開発に活かす一方で、患者のプライバシー保護をどう両立させるか。倫理的・法的な課題と制度設計を議論します。",
        "image": "画像 (18).jpg"
    },
    {
        "year": 2023,
        "month": 1,
        "title": "地域医療の持続可能性を探る：財源と人材の確保",
        "summary": "地域医療を将来にわたって維持していくための課題。安定的な財源確保、若手医師の誘致、地域連携の強化策について多角的に考察します。",
        "image": "画像 (19).jpg"
    },
    {
        "year": 2023,
        "month": 1,
        "title": "救急医療体制の強化：災害時対応と日常医療の確保",
        "summary": "いつ起こるかわからない災害時にも機能する救急医療体制の構築。日常的な救急患者対応の効率化、ドクターヘリの活用、広域連携の重要性を紹介します。",
        "image": "画像 (20).jpg"
    },
    {
        "year": 2023,
        "month": 2,
        "title": "国際医療協力の最前線：日本の医師が果たす役割",
        "summary": "国際的な医療支援活動の現状、日本の医師が持つ専門性と知見がどう活かされているか、そして今後の課題について考察します。",
        "image": "画像 (3).jpg"
    },
    {
        "year": 2023,
        "month": 2,
        "title": "メディカルツーリズムの現状と課題：日本の医療が世界に貢献するために",
        "summary": "訪日外国人を対象としたメディカルツーリズムの動向。日本の医療が持つ強み、そして受け入れ体制整備における課題を検証します。",
        "image": "画像 (4).jpg"
    },
    {
        "year": 2023,
        "month": 2,
        "title": "医師のためのメンタルフィットネス：バーンアウト予防の新たなアプローチ",
        "summary": "多忙な医療現場で心身の健康を保つための、バーンアウト予防に特化した実践的なメンタルフィットネス手法を紹介します。",
        "image": "画像 (5).jpg"
    },
    {
        "year": 2023,
        "month": 3,
        "title": "医学部入試の公正性問題：その背景と今後の展望",
        "summary": "医学部入試における不正入試問題が社会問題となる中、その背景にある構造的な課題と、公正な入試制度の構築に向けた議論をまとめます。",
        "image": "画像 (6).jpg"
    },
    {
        "year": 2023,
        "month": 3,
        "title": "女性医師のキャリア形成支援：働きやすい環境づくりの提言",
        "summary": "出産や育児とキャリアの両立に悩む女性医師を支援するための施策。柔軟な勤務形態、復職支援、キャリアアップの機会提供について考察します。",
        "image": "画像 (7).jpg"
    },
    {
        "year": 2023,
        "month": 3,
        "title": "在宅医療の最新動向：多職種連携とICT活用",
        "summary": "超高齢社会における在宅医療の役割。医師、看護師、介護士などが連携し、ICTを活用して質の高いケアを提供するための動向を追います。",
        "image": "画像 (8).jpg"
    },
    {
        "year": 2023,
        "month": 4,
        "title": "医療従事者の働き方改革：2024年問題への対応",
        "summary": "2024年に本格的に適用される医師の働き方改革。時間外労働の上限規制とその影響、そして医療機関がとるべき対応策について解説します。",
        "image": "画像 (9).jpg"
    },
    {
        "year": 2023,
        "month": 4,
        "title": "AI医療の最新研究：診断精度向上と新薬開発への応用",
        "summary": "AIが医療分野にもたらす最新の進歩。画像診断の精度向上、新薬開発プロセスの効率化、そして今後の展望について解説します。",
        "image": "画像 (10).jpg"
    },
    {
        "year": 2023,
        "month": 4,
        "title": "地域医療連携の新たな形：情報共有とデータ活用",
        "summary": "地域医療連携を円滑にするための情報共有のあり方。電子カルテの連携やデータ活用がもたらす効果と課題について考察します。",
        "image": "画像 (11).jpg"
    },
    {
        "year": 2023,
        "month": 5,
        "title": "オンライン診療の普及と課題：患者の利便性と医師の負担",
        "summary": "オンライン診療が広く普及する中、患者の利便性向上と、医師が直面する新たな課題について議論します。",
        "image": "画像 (12).jpg"
    },
    {
        "year": 2023,
        "month": 5,
        "title": "医療M&Aの成功事例：円滑な事業承継のポイント",
        "summary": "クリニックの事業承継手段として注目される医療M&A。その成功事例を分析し、円滑な承継を実現するためのポイントを解説します。",
        "image": "画像 (13).jpg"
    },
    {
        "year": 2023,
        "month": 5,
        "title": "医療訴訟リスクマネジメント：患者との信頼関係構築",
        "summary": "医療訴訟を未然に防ぐために、患者との信頼関係をどう構築するか。インフォームドコンセントの徹底とコミュニケーション術について解説します。",
        "image": "画像 (14).jpg"
    },
    {
        "year": 2023,
        "month": 6,
        "title": "再生医療の臨床応用と展望：iPS細胞研究の進展",
        "summary": "iPS細胞を用いた再生医療が臨床現場にどう応用されているか、最新の研究動向、そして今後の疾患治療への可能性を探ります。",
        "image": "画像 (15).jpg"
    },
    {
        "year": 2023,
        "month": 6,
        "title": "ゲノム医療の発展と個別化医療：がん治療への応用",
        "summary": "個人の遺伝子情報に基づいたゲノム医療が、がん治療をはじめとする様々な疾患治療にどう貢献しているか、その最新の知見と課題を解説します。",
        "image": "画像 (16).jpg"
    },
    {
        "year": 2023,
        "month": 6,
        "title": "医療機関のサイバーセキュリティ対策：情報漏洩リスクと防御",
        "summary": "電子カルテの普及に伴い増大するサイバー攻撃のリスク。医療機関が取るべきセキュリティ対策、個人情報保護の重要性、緊急時の対応を詳述します。",
        "image": "画像 (17).jpg"
    },
    {
        "year": 2023,
        "month": 7,
        "title": "医師のキャリアパス多様化：研究医から公衆衛生医まで",
        "summary": "臨床以外の選択肢も豊富です。研究、公衆衛生、産業医、そして起業。あなたの可能性を広げる多様なキャリアパスを解説します。",
        "image": "画像 (18).jpg"
    },
    {
        "year": 2023,
        "month": 7,
        "title": "デジタルセラピューティクスの可能性：疾患治療への新たな選択肢",
        "summary": "ソフトウェアやアプリが疾患の治療効果を持つデジタルセラピューティクス。その作用機序、臨床効果、規制の現状、そして今後の普及に向けた課題を探ります。",
        "image": "画像 (19).jpg"
    },
    {
        "year": 2023,
        "month": 7,
        "title": "ロボット支援手術の拡大とトレーニング：外科医のスキル向上",
        "summary": "ダヴィンチなどの手術支援ロボットが外科手術にもたらす変革。導入のメリット、外科医の専門トレーニング、そして今後の技術革新について紹介します。",
        "image": "画像 (20).jpg"
    },
    {
        "year": 2023,
        "month": 8,
        "title": "地域包括ケアシステムの深化：住民の健康を支える",
        "summary": "住まい、医療、介護、予防、生活支援が一体的に提供される地域包括ケアシステム。その深化に向けた課題と、医師の関わり方について考察します。",
        "image": "画像 (3).jpg"
    },
    {
        "year": 2023,
        "month": 8,
        "title": "予防医療と健康寿命の延伸：医師の新たな役割",
        "summary": "疾病の治療だけでなく、予防に重点を置く予防医療の重要性。医師が患者の健康寿命延伸にどう貢献できるか、その具体的なアプローチを紹介します。",
        "image": "画像 (4).jpg"
    },
    {
        "year": 2023,
        "month": 8,
        "title": "新しい治療薬の承認プロセスと迅速化：患者アクセスへの貢献",
        "summary": "難病や希少疾患に対する新しい治療薬が患者に届くまでの承認プロセス。迅速承認制度の活用、開発コスト、そしてアクセス改善策を詳述します。",
        "image": "画像 (5).jpg"
    },
    {
        "year": 2023,
        "month": 9,
        "title": "医療データの利活用とプライバシー保護：バランスの取れた制度設計",
        "summary": "医療データのビッグデータを疾病研究や新薬開発に活かす一方で、患者のプライバシー保護をどう両立させるか。倫理的・法的な課題と制度設計を議論します。",
        "image": "画像 (6).jpg"
    },
    {
        "year": 2023,
        "month": 9,
        "title": "地域医療の持続可能性を探る：財源と人材の確保",
        "summary": "地域医療を将来にわたって維持していくための課題。安定的な財源確保、若手医師の誘致、地域連携の強化策について多角的に考察します。",
        "image": "画像 (7).jpg"
    },
    {
        "year": 2023,
        "month": 9,
        "title": "救急医療体制の強化：災害時対応と日常医療の確保",
        "summary": "いつ起こるかわからない災害時にも機能する救急医療体制の構築。日常的な救急患者対応の効率化、ドクターヘリの活用、広域連携の重要性を紹介します。",
        "image": "画像 (8).jpg"
    },
    {
        "year": 2023,
        "month": 10,
        "title": "国際医療協力の最前線：日本の医師が果たす役割",
        "summary": "国際的な医療支援活動の現状、日本の医師が持つ専門性と知見がどう活かされているか、そして今後の課題について考察します。",
        "image": "画像 (9).jpg"
    },
    {
        "year": 2023,
        "month": 10,
        "title": "メディカルツーリズムの現状と課題：日本の医療が世界に貢献するために",
        "summary": "訪日外国人を対象としたメディカルツーリズムの動向。日本の医療が持つ強み、そして受け入れ体制整備における課題を検証します。",
        "image": "画像 (10).jpg"
    },
    {
        "year": 2023,
        "month": 10,
        "title": "医師のためのメンタルフィットネス：バーンアウト予防の新たなアプローチ",
        "summary": "多忙な医療現場で心身の健康を保つための、バーンアウト予防に特化した実践的なメンタルフィットネス手法を紹介します。",
        "image": "画像 (11).jpg"
    },
    {
        "year": 2023,
        "month": 11,
        "title": "医学部入試の公正性問題：その背景と今後の展望",
        "summary": "医学部入試における不正入試問題が社会問題となる中、その背景にある構造的な課題と、公正な入試制度の構築に向けた議論をまとめます。",
        "image": "画像 (12).jpg"
    },
    {
        "year": 2023,
        "month": 11,
        "title": "女性医師のキャリア形成支援：働きやすい環境づくりの提言",
        "summary": "出産や育児とキャリアの両立に悩む女性医師を支援するための施策。柔軟な勤務形態、復職支援、キャリアアップの機会提供について考察します。",
        "image": "画像 (13).jpg"
    },
    {
        "year": 2023,
        "month": 11,
        "title": "在宅医療の最新動向：多職種連携とICT活用",
        "summary": "超高齢社会における在宅医療の役割。医師、看護師、介護士などが連携し、ICTを活用して質の高いケアを提供するための動向を追います。",
        "image": "画像 (14).jpg"
    },
    {
        "year": 2024,
        "month": 0,
        "title": "医療従事者の働き方改革：2024年問題への対応",
        "summary": "2024年に本格的に適用される医師の働き方改革。時間外労働の上限規制とその影響、そして医療機関がとるべき対応策について解説します。",
        "image": "画像 (15).jpg"
    },
    {
        "year": 2024,
        "month": 0,
        "title": "AI医療の最新研究：診断精度向上と新薬開発への応用",
        "summary": "AIが医療分野にもたらす最新の進歩。画像診断の精度向上、新薬開発プロセスの効率化、そして今後の展望について解説します。",
        "image": "画像 (16).jpg"
    },
    {
        "year": 2024,
        "month": 0,
        "title": "地域医療連携の新たな形：情報共有とデータ活用",
        "summary": "地域医療連携を円滑にするための情報共有のあり方。電子カルテの連携やデータ活用がもたらす効果と課題について考察します。",
        "image": "画像 (17).jpg"
    },
    {
        "year": 2024,
        "month": 1,
        "title": "オンライン診療の普及と課題：患者の利便性と医師の負担",
        "summary": "オンライン診療が広く普及する中、患者の利便性向上と、医師が直面する新たな課題について議論します。",
        "image": "画像 (18).jpg"
    },
    {
        "year": 2024,
        "month": 1,
        "title": "医療M&Aの成功事例：円滑な事業承継のポイント",
        "summary": "クリニックの事業承継手段として注目される医療M&A。その成功事例を分析し、円滑な承継を実現するためのポイントを解説します。",
        "image": "画像 (19).jpg"
    },
    {
        "year": 2024,
        "month": 1,
        "title": "医療訴訟リスクマネジメント：患者との信頼関係構築",
        "summary": "医療訴訟を未然に防ぐために、患者との信頼関係をどう構築するか。インフォームドコンセントの徹底とコミュニケーション術について解説します。",
        "image": "画像 (20).jpg"
    },
    {
        "year": 2024,
        "month": 2,
        "title": "再生医療の臨床応用と展望：iPS細胞研究の進展",
        "summary": "iPS細胞を用いた再生医療が臨床現場にどう応用されているか、最新の研究動向、そして今後の疾患治療への可能性を探ります。",
        "image": "画像 (3).jpg"
    },
    {
        "year": 2024,
        "month": 2,
        "title": "ゲノム医療の発展と個別化医療：がん治療への応用",
        "summary": "個人の遺伝子情報に基づいたゲノム医療が、がん治療をはじめとする様々な疾患治療にどう貢献しているか、その最新の知見と課題を解説します。",
        "image": "画像 (4).jpg"
    },
    {
        "year": 2024,
        "month": 2,
        "title": "医療機関のサイバーセキュリティ対策：情報漏洩リスクと防御",
        "summary": "電子カルテの普及に伴い増大するサイバー攻撃のリスク。医療機関が取るべきセキュリティ対策、個人情報保護の重要性、緊急時の対応を詳述します。",
        "image": "画像 (5).jpg"
    },
    {
        "year": 2024,
        "month": 3,
        "title": "医師のキャリアパス多様化：研究医から公衆衛生医まで",
        "summary": "臨床以外の選択肢も豊富です。研究、公衆衛生、産業医、そして起業。あなたの可能性を広げる多様なキャリアパスを解説します。",
        "image": "画像 (6).jpg"
    },
    {
        "year": 2024,
        "month": 3,
        "title": "デジタルセラピューティクスの可能性：疾患治療への新たな選択肢",
        "summary": "ソフトウェアやアプリが疾患の治療効果を持つデジタルセラピューティクス。その作用機序、臨床効果、規制の現状、そして今後の普及に向けた課題を探ります。",
        "image": "画像 (7).jpg"
    },
    {
        "year": 2024,
        "month": 3,
        "title": "ロボット支援手術の拡大とトレーニング：外科医のスキル向上",
        "summary": "ダヴィンチなどの手術支援ロボットが外科手術にもたらす変革。導入のメリット、外科医の専門トレーニング、そして今後の技術革新について紹介します。",
        "image": "画像 (8).jpg"
    },
    {
        "year": 2024,
        "month": 4,
        "title": "地域包括ケアシステムの深化：住民の健康を支える",
        "summary": "住まい、医療、介護、予防、生活支援が一体的に提供される地域包括ケアシステム。その深化に向けた課題と、医師の関わり方について考察します。",
        "image": "画像 (9).jpg"
    },
    {
        "year": 2024,
        "month": 4,
        "title": "予防医療と健康寿命の延伸：医師の新たな役割",
        "summary": "疾病の治療だけでなく、予防に重点を置く予防医療の重要性。医師が患者の健康寿命延伸にどう貢献できるか、その具体的なアプローチを紹介します。",
        "image": "画像 (10).jpg"
    },
    {
        "year": 2024,
        "month": 4,
        "title": "新しい治療薬の承認プロセスと迅速化：患者アクセスへの貢献",
        "summary": "難病や希少疾患に対する新しい治療薬が患者に届くまでの承認プロセス。迅速承認制度の活用、開発コスト、そしてアクセス改善策を詳述します。",
        "image": "画像 (11).jpg"
    },
    {
        "year": 2024,
        "month": 5,
        "title": "医療データの利活用とプライバシー保護：バランスの取れた制度設計",
        "summary": "医療データのビッグデータを疾病研究や新薬開発に活かす一方で、患者のプライバシー保護をどう両立させるか。倫理的・法的な課題と制度設計を議論します。",
        "image": "画像 (12).jpg"
    },
    {
        "year": 2024,
        "month": 5,
        "title": "地域医療の持続可能性を探る：財源と人材の確保",
        "summary": "地域医療を将来にわたって維持していくための課題。安定的な財源確保、若手医師の誘致、地域連携の強化策について多角的に考察します。",
        "image": "画像 (13).jpg"
    },
    {
        "year": 2024,
        "month": 5,
        "title": "救急医療体制の強化：災害時対応と日常医療の確保",
        "summary": "いつ起こるかわからない災害時にも機能する救急医療体制の構築。日常的な救急患者対応の効率化、ドクターヘリの活用、広域連携の重要性を紹介します。",
        "image": "画像 (14).jpg"
    },
    {
        "year": 2024,
        "month": 6,
        "title": "国際医療協力の最前線：日本の医師が果たす役割",
        "summary": "国際的な医療支援活動の現状、日本の医師が持つ専門性と知見がどう活かされているか、そして今後の課題について考察します。",
        "image": "画像 (15).jpg"
    },
    {
        "year": 2024,
        "month": 6,
        "title": "メディカルツーリズムの現状と課題：日本の医療が世界に貢献するために",
        "summary": "訪日外国人を対象としたメディカルツーリズムの動向。日本の医療が持つ強み、そして受け入れ体制整備における課題を検証します。",
        "image": "画像 (16).jpg"
    },
    {
        "year": 2024,
        "month": 6,
        "title": "医師のためのメンタルフィットネス：バーンアウト予防の新たなアプローチ",
        "summary": "多忙な医療現場で心身の健康を保つための、バーンアウト予防に特化した実践的なメンタルフィットネス手法を紹介します。",
        "image": "画像 (17).jpg"
    },
    {
        "year": 2024,
        "month": 7,
        "title": "医学部入試の公正性問題：その背景と今後の展望",
        "summary": "医学部入試における不正入試問題が社会問題となる中、その背景にある構造的な課題と、公正な入試制度の構築に向けた議論をまとめます。",
        "image": "画像 (18).jpg"
    },
    {
        "year": 2024,
        "month": 7,
        "title": "女性医師のキャリア形成支援：働きやすい環境づくりの提言",
        "summary": "出産や育児とキャリアの両立に悩む女性医師を支援するための施策。柔軟な勤務形態、復職支援、キャリアアップの機会提供について考察します。",
        "image": "画像 (19).jpg"
    },
    {
        "year": 2024,
        "month": 7,
        "title": "在宅医療の最新動向：多職種連携とICT活用",
        "summary": "超高齢社会における在宅医療の役割。医師、看護師、介護士などが連携し、ICTを活用して質の高いケアを提供するための動向を追います。",
        "image": "画像 (20).jpg"
    }
]
];

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

        async function addArticle(title, summary, image) {
            if (!db || !isAdmin) return;
            try {
                await addDoc(collection(db, ARTICLES_COLLECTION_PATH), {
                    title,
                    summary,
                    image,
                    timestamp: serverTimestamp(),
                    year: new Date().getFullYear(),
                    month: new Date().getMonth()
                });
                document.getElementById('newArticleTitle').value = '';
                document.getElementById('newArticleSummary').value = '';
                document.getElementById('newArticleImage').value = '';
                console.log("記事が正常に追加されました。");
            } catch (error) {
                console.error("記事の追加エラー:", error);
            }
        }

        async function updateArticle(id, title, summary, image) {
            if (!db || !isAdmin) return;
            try {
                const articleRef = doc(db, ARTICLES_COLLECTION_PATH, id);
                await updateDoc(articleRef, { title, summary, image });
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
            const blogGrid = document.getElementById('blogGrid');
            if (!blogGrid) {
                console.error('blogGrid要素が見つかりません。');
                return;
            }
        
            blogGrid.innerHTML = '';

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
                const yearBlock = document.createElement('div');
                yearBlock.className = 'bg-white rounded-xl shadow-lg p-6 mb-8';
                
                const yearHeader = document.createElement('h3');
                yearHeader.className = 'text-2xl font-bold text-primary-blue year-header collapsed flex items-center gap-2 mb-4 cursor-pointer';
                yearHeader.innerHTML = `<svg class="icon-medium transform transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg><span>${year}年</span>`;
                yearBlock.appendChild(yearHeader);
                
                const monthsContainer = document.createElement('div');
                monthsContainer.className = 'months-container space-y-4 hidden';
                
                const sortedMonths = Object.keys(articlesByYearMonth[year]).sort((a, b) => b - a);
                sortedMonths.forEach(month => {
                    const monthBlock = document.createElement('div');
                    monthBlock.className = 'bg-gray-50 rounded-lg shadow-sm p-4';
                    
                    const monthHeader = document.createElement('h4');
                    monthHeader.className = 'text-xl font-semibold text-secondary-blue month-header collapsed flex items-center gap-2 mb-4 cursor-pointer';
                    monthHeader.innerHTML = `<svg class="icon-small transform transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg><span>${parseInt(month) + 1}月</span>`;
                    monthBlock.appendChild(monthHeader);
                    
                    const articlesContainer = document.createElement('div');
                    articlesContainer.className = 'articles-container space-y-4 hidden';

                    articlesByYearMonth[year][month].forEach(article => {
                        const articleElement = document.createElement('div');
                        articleElement.className = 'card p-6';
                        articleElement.innerHTML = `
                            <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">${article.title}</h3>
                            <p class="text-medium-gray-text mb-4 text-sm">${article.summary}</p>
                            ${article.image ? `<img src="${article.image}" alt="[ブログ記事のイメージ]" class="w-full h-auto rounded-lg mb-4">` : ''}
                            <a href="#" class="button-primary inline-block text-center read-more-link" data-title="${article.title}" data-summary="${article.summary}" data-image="${article.image}">
                                <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                続きを読む
                            </a>
                        `;
                        articlesContainer.appendChild(articleElement);
                    });
                    
                    monthBlock.appendChild(articlesContainer);
                    monthsContainer.appendChild(monthBlock);

                    monthHeader.addEventListener('click', () => {
                        const icon = monthHeader.querySelector('svg');
                        articlesContainer.classList.toggle('hidden');
                        monthHeader.classList.toggle('collapsed');
                        monthHeader.classList.toggle('expanded');
                    });
                });
                
                yearBlock.appendChild(monthsContainer);
                blogGrid.appendChild(yearBlock);

                yearHeader.addEventListener('click', () => {
                    const icon = yearHeader.querySelector('svg');
                    monthsContainer.classList.toggle('hidden');
                    yearHeader.classList.toggle('collapsed');
                    yearHeader.classList.toggle('expanded');
                });
            });
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
                        <label for="editArticleImage-${article.id}" class="block text-dark-gray-text font-semibold mb-2 mt-4">画像ファイル名</label>
                        <input type="text" id="editArticleImage-${article.id}" class="edit-image-input admin-input" value="${article.image || ''}">
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
                    const newImage = parent.querySelector('.edit-image-input').value;
                    updateArticle(id, newTitle, newSummary, newImage);
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
            const image = document.getElementById('newArticleImage').value;
            if (title && summary) {
                addArticle(title, summary, image);
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
        const modalBody = document.getElementById('modalBody');
        const modalImage = document.getElementById('modalImage');
        const closeArticleModalBtn = document.getElementById('closeArticleModalBtn');
        const closeArticleModalBtnBottom = document.getElementById('closeArticleModalBtnBottom');
        
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('read-more-link')) {
                e.preventDefault();
                const title = e.target.dataset.title;
                const summary = e.target.dataset.summary;
                const image = e.target.dataset.image;

                modalTitle.textContent = title;
                modalBody.innerHTML = `
                    <p class="text-base font-semibold mb-4 text-primary-blue">記事概要:</p>
                    <p>${summary}</p>
                    <div class="mt-6">
                        <h4 class="text-xl font-bold text-primary-blue mb-2">詳細コンテンツ</h4>
                        <p class="text-sm leading-relaxed">
                            当サイトでは、記事の詳細コンテンツを随時追加しています。
                            以下は、この記事に関するより専門的な内容の一部です。
                        </p>
                        <ul class="list-disc list-inside mt-4 text-sm leading-relaxed text-dark-gray-text">
                            <li>最新の研究動向と臨床応用への展望</li>
                            <li>関連法規やガイドラインの変更点</li>
                            <li>現場での具体的な実践事例と課題</li>
                            <li>専門家によるQ&Aセッション</li>
                            <li>将来的な医療技術の進化予測</li>
                        </ul>
                        <div class="mt-6 text-center text-gray-500">
                            <p>--- ここまでが詳細コンテンツのプレビューです ---</p>
                        </div>
                    </div>
                    <div class="author-info">
                        <p>執筆者：MedReach編集部</p>
                    </div>
                `;
                if (image) {
                    modalImage.src = image;
                    modalImage.classList.remove('hidden');
                } else {
                    modalImage.classList.add('hidden');
                }

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
                'サービス内容': '弊社のサービスは、ブログ、求人情報、クリニック譲渡、厚生労働省リンク集など、医師の皆様の多岐にわたるニーズに対応しています。',
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
                '記事': '記事・情報に関するご質問ですね。本サイトの「ドクターズブログ」で記事をご覧いただけます。特定のテーマやキーワードでの検索は、今後実装予定です。',
                '情報': '医療情報に関するご質問ですね。当サイトでは、最新の医療トレンドや国が発表する重要な情報を分かりやすくまとめています。',
                'ニュース': '医療ニュースに関するご質問ですね。当サイトの「ドクターズブログ」では、最新の医療ニュースを専門的な視点で解説しています。',
                '記事の探し方': '記事の探し方についてですね。ブログページでは最新の記事をご覧いただけます。過去記事は管理者パネルから追加・編集可能です。',
                '古い記事': '古い記事も管理者パネルに保存されています。',
                '新しい記事': '新しい記事は管理者パネルから追加され、ブログに表示されます。',
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

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        const targetElement = document.querySelector(href);
                        if (targetElement) {
                            targetElement.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });

            initializeFirebase();
        });
    </script>
</body>
</html>
