
import { Suspense } from "react";
import LoadingPage from "@/components/LoadingPage";
import PageWrap from "./PageWrap";

export default function Home() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <PageWrap></PageWrap>
    </Suspense>
  );
}
