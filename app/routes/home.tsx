import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from "~/constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Resumind" },
        { name: "description", content: "Smart feedback" },
    ];
}

export default function Home() {
    const { auth } = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to login if user is NOT authenticated
        if (!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated, navigate]);

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar />

            <section className="main-section">
                <div className="page-heading">
                    <h1>Track your Applications & Resume ratings</h1>
                    <h2>Review your Submissions and check the AI powered feedback.</h2>
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
    );
}
