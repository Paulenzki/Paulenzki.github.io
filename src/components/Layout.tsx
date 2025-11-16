import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto p-4  bg-white">
        {children}
      </div>
      <Footer />
    </div>
  );
}
