// --- package.json ---
{
  "name": "medreach",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "@reduxjs/toolkit": "^2.2.2",
    "@supabase/supabase-js": "^2.40.0",
    "next": "14.1.4",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-redux": "^9.1.0",
    "tailwindcss": "^3.4.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.14",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.27",
    "typescript": "^5.3.3"
  }
}

// --- tailwind.config.js ---
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: []
}

// --- postcss.config.js ---
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// --- next.config.js ---
module.exports = {
  reactStrictMode: true,
  images: { domains: [] },
}

// --- .env.local ---
// SupabaseのURL/Keyを設定
NEXT_PUBLIC_SUPABASE_URL=ここにSupabaseのURL
NEXT_PUBLIC_SUPABASE_KEY=ここにSupabaseのanonキー

// --- src/styles/globals.css ---
@tailwind base;
@tailwind components;
@tailwind utilities;

body { background: #f4f7fa; font-family: sans-serif; }

// --- src/utils/apiClient.ts ---
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
)

// --- src/utils/authGuard.ts ---
import { useEffect, useState } from "react";
import { supabase } from "./apiClient";

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => { listener?.subscription?.unsubscribe(); }
  }, []);
  function logout() {
    supabase.auth.signOut();
    setUser(null);
  }
  return { user, logout };
}

// --- src/features/store.ts ---
import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./articlesSlice";
export const store = configureStore({ reducer: { articles: articlesReducer } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// --- src/features/articlesSlice.ts ---
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../utils/apiClient";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const { data, error } = await supabase.from("articles").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return data;
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default articlesSlice.reducer;

// --- src/components/Header.tsx ---
import Link from "next/link";
import { useAuth } from "../utils/authGuard";

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="bg-blue-900 text-white px-4 py-3 flex justify-between">
      <Link href="/" className="font-bold text-xl">MedReach</Link>
      <nav className="flex gap-6 items-center">
        <Link href="/articles">記事</Link>
        <Link href="/jobs">求人</Link>
        <Link href="/transfers">譲渡</Link>
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={logout} className="ml-2 bg-white text-blue-900 px-2 py-1 rounded">ログアウト</button>
          </>
        ) : (
          <Link href="/login" className="bg-white text-blue-900 px-2 py-1 rounded">ログイン</Link>
        )}
        {user?.role === "admin" && <Link href="/admin" className="font-bold">管理</Link>}
      </nav>
    </header>
  );
}

// --- src/components/Footer.tsx ---
export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center py-6 mt-12">
      &copy; 2025 MedReach
    </footer>
  );
}

// --- src/components/ArticleCard.tsx ---
import Link from "next/link";
export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="text-lg font-bold">{article.title}</h3>
      <p className="text-gray-600">{article.summary}</p>
      <Link href={`/articles/${article.id}`} className="text-blue-700">続きを読む</Link>
    </div>
  );
}

// --- src/components/JobCard.tsx ---
import Link from "next/link";
export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="text-lg font-bold">{job.title}</h3>
      <p>{job.description}</p>
      <Link href={`/jobs/${job.id}`} className="text-blue-700">詳細</Link>
    </div>
  );
}

// --- src/components/TransferCard.tsx ---
import Link from "next/link";
export default function TransferCard({ transfer }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="text-lg font-bold">{transfer.title}</h3>
      <p>{transfer.summary}</p>
      <Link href={`/transfers/${transfer.id}`} className="text-blue-700">詳細</Link>
    </div>
  );
}

// --- src/components/AdminSidebar.tsx ---
import Link from "next/link";
export default function AdminSidebar() {
  return (
    <aside className="w-48 min-h-screen bg-blue-900 text-white flex flex-col p-4">
      <Link href="/admin" className="mb-4 font-bold">ダッシュボード</Link>
      <Link href="/admin/articles" className="mb-2">記事管理</Link>
      <Link href="/admin/jobs" className="mb-2">求人管理</Link>
      <Link href="/admin/transfers" className="mb-2">譲渡管理</Link>
      <Link href="/admin/users">ユーザー管理</Link>
    </aside>
  );
}

// --- src/app/page.tsx ---
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-8">MedReachへようこそ</h1>
        <p>医療従事者のための情報・求人・譲渡ポータル</p>
      </main>
      <Footer />
    </>
  );
}

// --- src/app/login/page.tsx ---
'use client'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { supabase } from "../../utils/apiClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setErr(error.message);
    else router.push("/");
  }

  return (
    <>
      <Header />
      <main className="container mx-auto py-10 max-w-md">
        <h1 className="text-2xl font-bold mb-6">ログイン</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full border p-2 rounded" value={email} onChange={e => setEmail(e.target.value)} placeholder="メール" required />
          <input className="w-full border p-2 rounded" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="パスワード" required />
          <button className="w-full bg-blue-900 text-white py-2 rounded" type="submit">ログイン</button>
          {err && <div className="text-red-600">{err}</div>}
        </form>
      </main>
      <Footer />
    </>
  );
}

// --- src/app/signup/page.tsx ---
'use client'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { supabase } from "../../utils/apiClient";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setErr(error.message);
    else router.push("/login");
  }

  return (
    <>
      <Header />
      <main className="container mx-auto py-10 max-w-md">
        <h1 className="text-2xl font-bold mb-6">新規登録</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full border p-2 rounded" value={email} onChange={e => setEmail(e.target.value)} placeholder="メール" required />
          <input className="w-full border p-2 rounded" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="パスワード" required />
          <button className="w-full bg-blue-900 text-white py-2 rounded" type="submit">登録</button>
          {err && <div className="text-red-600">{err}</div>}
        </form>
      </main>
      <Footer />
    </>
  );
}

// --- src/app/articles/page.tsx ---
'use client'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleCard from "../../components/ArticleCard";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/apiClient";

export default function ArticleListPage() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    supabase.from("articles").select("*").order("created_at", { ascending: false }).then(({ data }) => setArticles(data ?? []));
  }, []);
  return (
    <>
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">記事一覧</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map(a => <ArticleCard key={a.id} article={a} />)}
        </div>
      </main>
      <Footer />
    </>
  );
}

// --- src/app/jobs/page.tsx ---
'use client'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JobCard from "../../components/JobCard";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/apiClient";

export default function JobListPage() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    supabase.from("jobs").select("*").order("created_at", { ascending: false }).then(({ data }) => setJobs(data ?? []));
  }, []);
  return (
    <>
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">求人一覧</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map(j => <JobCard key={j.id} job={j} />)}
        </div>
      </main>
      <Footer />
    </>
  );
}

// --- src/app/transfers/page.tsx ---
'use client'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TransferCard from "../../components/TransferCard";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/apiClient";

export default function TransferListPage() {
  const [transfers, setTransfers] = useState([]);
  useEffect(() => {
    supabase.from("transfers").select("*").order("created_at", { ascending: false }).then(({ data }) => setTransfers(data ?? []));
  }, []);
  return (
    <>
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">クリニック譲渡一覧</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transfers.map(t => <TransferCard key={t.id} transfer={t} />)}
        </div>
      </main>
      <Footer />
    </>
  );
}

// --- src/app/admin/page.tsx ---
import AdminSidebar from "../../components/AdminSidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AdminDashboard() {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-10">
        <Header />
        <h1 className="text-2xl font-bold mb-8">管理ダッシュボード</h1>
        <ul className="grid md:grid-cols-3 gap-8">
          <li className="bg-white rounded shadow p-6">記事管理</li>
          <li className="bg-white rounded shadow p-6">求人管理</li>
          <li className="bg-white rounded shadow p-6">譲渡管理</li>
        </ul>
        <Footer />
      </main>
    </div>
  );
}

// --- src/app/admin/articles/page.tsx ---
import AdminSidebar from "../../../components/AdminSidebar";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function AdminArticlesPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 bg-gray-50">
        <Header />
        <main className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-6">記事管理</h1>
        </main>
        <Footer />
      </div>
    </div>
  );
}

// --- src/app/admin/jobs/page.tsx ---
import AdminSidebar from "../../../components/AdminSidebar";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function AdminJobsPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 bg-gray-50">
        <Header />
        <main className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-6">求人管理</h1>
        </main>
        <Footer />
      </div>
    </div>
  );
}

// --- src/app/admin/transfers/page.tsx ---
import AdminSidebar from "../../../components/AdminSidebar";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function AdminTransfersPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 bg-gray-50">
        <Header />
        <main className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-6">クリニック譲渡管理</h1>
        </main>
        <Footer />
      </div>
    </div>
  );
}

// --- src/app/admin/users/page.tsx ---
import AdminSidebar from "../../../components/AdminSidebar";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function AdminUsersPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 bg-gray-50">
        <Header />
        <main className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-6">ユーザー管理</h1>
        </main>
        <Footer />
      </div>
    </div>
  );
}

// --- supabase_tables.sql ---
create table articles (
  id uuid primary key default uuid_generate_v4(),
  title text,
  summary text,
  body text,
  created_at timestamp default now()
);

create table jobs (
  id uuid primary key default uuid_generate_v4(),
  title text,
  description text,
  created_at timestamp default now()
);

create table transfers (
  id uuid primary key default uuid_generate_v4(),
  title text,
  summary text,
  created_at timestamp default now()
);
