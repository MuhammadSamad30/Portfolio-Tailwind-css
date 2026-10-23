import Link from "next/link";

const ThankYou = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="glass relative max-w-lg overflow-hidden rounded-[2rem] p-8 text-center sm:p-12">
        
        <div className="relative z-10">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#ff7048]/15">
            <i className="bx bx-check text-5xl text-[#ff8968]"></i>
          </div>
          <h1 className="mb-4 text-4xl font-black">Message <span className="text-[#ff8968]">sent!</span></h1>
          <p className="text-slate-400 text-lg mb-8">
            Thank you for reaching out. I have received your message and will get back to you as soon as possible.
          </p>
          <Link
            href="/"
            className="accent-button"
          >
            <i className="bx bx-home text-xl"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
