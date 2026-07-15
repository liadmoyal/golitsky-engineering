import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy-mid)] text-white pt-16 pb-8 border-t border-[var(--color-slate-dark)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex flex-col items-start group inline-block">
              <span className="text-2xl font-bold tracking-tight text-white group-hover:text-[var(--color-accent)] transition-colors">
                גדליה אוליצקי
              </span>
              <span className="text-sm font-medium text-[var(--color-slate-light)] uppercase tracking-wider">
                הנדסה בע"מ
              </span>
            </Link>
            <p className="text-[var(--color-slate-light)] text-sm leading-relaxed mt-2 max-w-sm">
              משרדנו מתמחה במתן פתרונות ושירותים הנדסיים בתחום ניהול, ביצוע ואיכות פרוייקטי תשתיות תחבורה, וסקירות גשרים ומבני דרך ברמה הגבוהה ביותר.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white mb-2">קישורים מהירים</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/info" className="text-[var(--color-slate-light)] hover:text-[var(--color-accent)] transition-colors text-sm">
                  אודות החברה
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[var(--color-slate-light)] hover:text-[var(--color-accent)] transition-colors text-sm">
                  פרוייקטים נבחרים
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-[var(--color-slate-light)] hover:text-[var(--color-accent)] transition-colors text-sm">
                  מחקר ופיתוח
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--color-slate-light)] hover:text-[var(--color-accent)] transition-colors text-sm">
                  צרו קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white mb-2">פרטי התקשרות</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)] shrink-0 mt-0.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-[var(--color-slate-light)] text-sm leading-relaxed">
                  הסורג 2<br />
                  ירושלים 9414502
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)] shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:office@golitsky.com" className="text-[var(--color-slate-light)] hover:text-[var(--color-accent)] transition-colors text-sm">
                  office@golitsky.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)] shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <div className="flex flex-col text-[var(--color-slate-light)] text-sm">
                  <a href="tel:02-6515114" className="hover:text-[var(--color-accent)] transition-colors">02-6515114</a>
                  <a href="tel:050-8221662" className="hover:text-[var(--color-accent)] transition-colors">050-8221662</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[var(--color-slate-dark)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-slate-light)] text-xs text-center md:text-right">
            © {new Date().getFullYear()} גדליה אוליצקי הנדסה בע"מ Gdalia Olitsky Engineering LTD. כל הזכויות שמורות.
          </p>
          <div className="text-[var(--color-slate-light)] text-xs font-mono opacity-50 hover:opacity-100 transition-opacity cursor-default">
            Built with Next.js
          </div>
        </div>
      </div>
    </footer>
  );
}
