import React from "react";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import NoticeList from "@/components/layout/notices/NoticeList";

export const metadata = {
  title: "Notice Board - Al-Arafah Islamic International School & College",
  description:
    "Stay updated with latest academic notices, exam routines, and school announcements.",
};

export default function NoticePage() {
  return (
    <main className="w-full min-h-screen py-16 bg-background text-foreground">
      <Container>
        <SectionHeader
          badge="NOTICE BOARD"
          title="Latest Announcements"
          center={true}
        />
        <NoticeList />
      </Container>
    </main>
  );
}
