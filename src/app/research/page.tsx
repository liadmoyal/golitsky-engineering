import React from 'react';
import Link from 'next/link';

const publications = [
  {
    title: "מחקר: מחיר הדירה לא צריך לבוא על חשבון איכות החיים",
    publisher: "עיתון גלובס",
    date: "12.9.2016",
    link: "http://www.globes.co.il/news/article.aspx?did=1001151232"
  },
  {
    title: "קפיצה לעתיד: ערי מגורים על גשרים",
    publisher: "Ynet",
    date: "14.3.2018",
    link: "https://www.ynet.co.il/articles/0,7340,L-5165604,00.html"
  }
];

const conferencesAbroad = [
  "54th Annual UTSG Conference 2022 - Edinburgh, Scotland",
  "Transportation Research Board 2019 - Washington DC, USA",
  "Living and Walking in Cities 2017 - Brescia, Italy",
  "European Working Group on Transportation 2017 - Budapest, Hungary",
  "Council on Tall Buildings and Urban Habitat 2017 - Sydney, Australia"
];

const conferencesLocal = [
  "הכנס השנתי של האגודה הישראלית למחקר תחבורה 2018 - תל-אביב",
  "כנס איגוד המתכננים 2018 - ירושלים",
  "כנס איגוד המתכננים 2017 - חיפה",
  "הכנס השנתי השישי לבניה ירוקה 2017 - תל-אביב"
];

export default function ResearchPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[var(--color-navy)] py-20 md:py-28 border-b border-[var(--color-navy-light)]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-[var(--color-accent)] font-semibold text-sm mb-4 tracking-wide">
            מחקר ופיתוח
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            פרסומים והרצאות
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--color-slate-light)] text-lg md:text-xl">
            תרומה אקדמית ומקצועית בתחומי התכנון העירוני, תשתיות תחבורה, ומחקר פורץ דרך בנושא גשרים למגורים.
          </p>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <h2 className="text-3xl font-bold text-[var(--color-navy)]">פרסומים ומאמרים</h2>
          </div>
          
          <div className="grid gap-6">
            {publications.map((pub, idx) => (
              <a 
                key={idx} 
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md hover:border-[var(--color-accent)] transition-all duration-300"
              >
                <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 ${pub.ltr ? "dir-ltr" : ""}`}>
                  <div className="space-y-2 flex-grow">
                    <h3 className={`text-xl font-bold text-[var(--color-navy)] group-hover:text-[var(--color-accent)] transition-colors ${pub.ltr ? "text-left" : "text-right"}`}>
                      {pub.title}
                    </h3>
                    <div className={`flex flex-wrap items-center gap-2 text-sm text-[var(--color-slate-dark)] ${pub.ltr ? "justify-start" : "justify-start"}`}>
                      <span className="font-semibold">{pub.publisher}</span>
                      <span className="w-1 h-1 rounded-full bg-[var(--color-slate-light)]"></span>
                      <span>{pub.date}</span>
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-surface-alt)] group-hover:bg-[var(--color-accent)] group-hover:text-white text-[var(--color-navy)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={pub.ltr ? "" : "-scale-x-100"}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Conferences Section */}
      <section className="py-20 md:py-24 bg-[var(--color-surface-alt)] border-t border-[var(--color-border)]">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v14"/><path d="M22 10v3"/></svg>
            </div>
            <h2 className="text-3xl font-bold text-[var(--color-navy)]">הרצאות בכנסים</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Local Conferences */}
            <div>
              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
                בארץ
              </h3>
              <ul className="flex flex-col">
                {conferencesLocal.map((conf, idx) => (
                  <li key={idx} className="flex items-start gap-3 py-4 border-b border-[var(--color-border)] last:border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)] shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <span className="text-[var(--color-slate-dark)] font-medium leading-tight">{conf}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conferences Abroad */}
            <div>
              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
                בחו"ל
              </h3>
              <ul className="flex flex-col">
                {conferencesAbroad.map((conf, idx) => (
                  <li key={idx} className="flex items-start gap-3 py-4 border-b border-[var(--color-border)] last:border-0 dir-ltr text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)] shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <span className="text-[var(--color-slate-dark)] font-medium leading-tight">{conf}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
