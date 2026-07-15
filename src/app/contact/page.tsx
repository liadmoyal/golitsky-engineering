import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[var(--color-navy)] py-20 md:py-28 border-b border-[var(--color-navy-light)]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-[var(--color-accent)] font-semibold text-sm mb-4 tracking-wide">
            יצירת קשר
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            דברו איתנו
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--color-slate-light)] text-lg md:text-xl">
            המשרד שלנו זמין לכל שאלה, התייעצות או תיאום פגישה.
          </p>
        </div>
      </section>
      
      <ContactForm />
    </div>
  );
}
