import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import {useEffect} from "react";
import {usePuterStore} from "~/lib/puter";
import {useNavigate} from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Resumind | Auth' },
    { name: 'description', content: 'Log into your account' },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  // const [resumes, setResumes] = useState<Resume[]>([]);
  // const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    {/*{window.puter.ai.chat()}*/}

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Application& Resume Rating</h1>
        <h2>Review your submissions and check Ai-powered feedback</h2>
      </div>
    </section>

    {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
    )}

  </main>
}
