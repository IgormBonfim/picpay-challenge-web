import NavigationSection from "@/app/dashboard/components/sidebar/navigationSection";
import UserSection from "@/app/dashboard/components/sidebar/userSection";
import Logo from "@/components/logo";

export default function Sidebar() {  
  return (
    <aside className="sticky h-screen top-0 max-w-64 flex flex-col bg-zinc-900 rounded-e-xl">
      <div className="border-b-2 border-zinc-800">
        <div className="flex flex-col items-center m-5 p-4">
          <Logo size="small"/>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between">
        <NavigationSection/>
        <UserSection/>
      </div>
    </aside>
  );
}