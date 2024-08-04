import PageWrap from "./PageWrap";
import { Suspense } from "react";
import LoadingPage from "@/components/LoadingPage";

export default function Home() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <PageWrap></PageWrap>
    </Suspense>
  );
}
