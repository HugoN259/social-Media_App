import Image from "next/image";
import Postfeed from "@/components/Postfeed";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";
import SignUpPrompt from "@/components/SignUpPrompt";
import CommentModal from "@/components/modals/CommentModal";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <div className="text-[#0f1419] min-h-screen
      max-w[1440px] mx-auto flex
     justify-center">
      <Sidebar />
      <Postfeed />
      <Widgets />

      </div>


      <CommentModal />
      <SignUpPrompt />
      <LoadingScreen />
    </>
  );
}
