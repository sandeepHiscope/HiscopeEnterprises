
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Career = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
            Careers at Hiscope
          </h1>
          <div className="prose max-w-none dark:prose-invert">
            <p className="text-lg mb-4">
              Content for the Career page will be coming soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Career;
