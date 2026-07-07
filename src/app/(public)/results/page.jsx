"use client";
import { useEffect, useState } from "react";
import ResultSearch from "@/components/layout/result/ResultSearch";
import ResultDisplay from "@/components/layout/result/ResultDisplay";
import ResultSkeleton from "@/components/layout/result/ResultSkeleton";
import { dummyResult } from "@/../temp/dummyResult";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/public/Container";
import Button from "@/components/ui/Button";

export default function ResultsPage() {
  const { lang } = useLanguage();

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = (roll, examType) => {
    setLoading(true);
    setResult(null);
    setError("");

    setTimeout(() => {
      const found = dummyResult.find(
        (item) => item.roll === parseInt(roll) && item.examType === examType,
      );

      if (found) setResult(found);
      else
        setError(
          lang === "en" ? "No result found." : "কোনো ফলাফল পাওয়া যায়নি।",
        );
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (result) {
      window.dispatchEvent(new Event("resize"));
    }
  }, [result]);

  return (
    <main className=" w-full overflow-visible py-10 md:py-16 ">
      <Container>
        <SectionHeader title={lang === "en" ? "Results" : "ফলাফল"} />
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-75 w-full">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-neutral-500 font-medium">
              {lang === "en" ? "Loading..." : "লোড হচ্ছে..."}
            </p>
          </div>
        ) : result ? (
          <>
            <ResultDisplay data={result} />
            <div className="mt-8 flex justify-center">
              <Button
                label={lang === "en" ? "Search Another" : "নতুন করে খুঁজুন"}
                onClick={() => setResult(null)}
                bgColor="transparent"
                textColor="#017a54"
                borderColor="#017a54"
                flairColor="#017a54"
                size="md"
                className="hover:text-white"
              />
            </div>
          </>
        ) : (
          <ResultSearch onSearch={handleSearch} />
        )}
        {error && <p className="text-center text-red-500 mt-10">{error}</p>}
      </Container>
    </main>
  );
}
