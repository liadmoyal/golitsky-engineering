import React from 'react';
import Image from 'next/image';

const featuredProjects = [
  {
    title: "גשר 10 בקו הרכבת המהיר ירושלים - תל אביב",
    role: "ניהול בקרת איכות",
    description: 'גשר בטון דרוך בנוי בשיטת FT זיז מאוזן. הגשר הגבוה במזה"ת.',
    image: "/assest/bridge-10-new.jpg",
    credit: "קרדיט: צילום: Shutterstock"
  },
  {
    title: "מחלף 4/20 ע\"ש בן-ציון נתניהו",
    role: "פיקוח",
    description: "עבודות גישור- 3 גשרים, בשיטת מקטעים וקורות. סלילה, תשתיות, תאורה, ביצוע רמפות, ושילוט.",
    image: "/assest/mechlaf.jpg",
    credit: "קרדיט: יהל מהנדסים"
  },
  {
    title: "שיקוע בגין - קפלן בתל אביב",
    role: "פיקוח",
    description: "שיקום והרחבת גשר כולל הוספת קורות באחד המחלפים הסואנים ביותר בארץ.",
    image: "/assest/begin-kaplan.jpg"
  },
  {
    title: "כביש מספר 1 - מחלף הזיתים",
    role: "פיקוח",
    description: "5 גשרי בטון כולל שימוש בדריכת אחר, מעבר תחתי, עבודות עוגני סלע בקירות תמך, מערכות, עפר וסלילה, גשרי שילוט, תעלות ומערכת ניקוז.",
    image: "/assest/hazeitim.jpg"
  }
];

const otherProjects = [
  {
    title: "שיקום גשר חצבה ונקורות",
    role: "ניהול הבטחת איכות",
    description: "שימוש ביריעות סיבי פחמן, הזרקות ישירות והיקפיות, החלפת סמכי נאופרן, החלפת תפרי התפשטות, שיקום בטונים ועוד."
  },
  {
    title: "הקו הירוק של הרכבת הקלה בראשל\"צ - מקטע G1",
    role: "ניהול הבטחת איכות",
    description: "עבודות תשתית, סלילה, ניקוז, נוף, שיקום סביבתי ובטיחות בתנועה."
  },
  {
    title: "שיקום והרחבת כביש 3 משואות יצחק - אביגדור",
    role: "ניהול הבטחת איכות - גישור ובטונים",
    description: "הקמה ושיקום גשרים"
  },
  {
    title: "שיקום גשר רודד",
    role: "ניהול הבטחת איכות",
    description: "שימוש ביריעות סיבי פחמן, הזרקות ישירות והיקפיות, החלפת סמכי נאופרן, החלפת תפרי התפשטות, שיקום בטונים ועוד."
  },
  {
    title: "הקו הירוק של הרכבת הקלה בראשל\"צ- מקטע G2",
    role: "ניהול הבטחת איכות",
    description: "עבודות תשתית, סלילה, ניקוז, נוף, שיקום סביבתי ובטיחות בתנועה."
  },
  {
    title: "הרחבה ושיקום כביש 2 קטע חבצלת - ג. אולגה",
    role: "בקרת איכות",
    description: "הפרויקט כלל עבודות עפר, סלילה, בטון, קירות תומכים, גשרים ומעברים תחתיים."
  },
  {
    title: "מחלף רמת שלמה בירושלים",
    role: "הבטחת איכות",
    description: "ביצוע 2 גשרים קורות דרוכות, גשרי שילוט, עבודות עפר, תשתיות וסלילה."
  },
  {
    title: "דפו 25 של הרכבת הקלה בירושלים",
    role: "ניהול הבטחת איכות",
    description: "כלונסאות ולאמנטי סלארי לביסוס מבנים ודיפון, עוגני קרקע וברגי סלע."
  },
  {
    title: "כביש מספר 1 מישור אדומים - השומרוני הטוב",
    role: "פיקוח",
    description: "כולל 2 גשרים, מעברים חקלאים, קירות תומכים, מעבירי מים גדולים, מערכות מים, ניקוז עבודות עפר וסלילה."
  },
  {
    title: "גשר נחל דרגה בכביש האמריקאי בירושלים",
    role: "בקרת איכות",
    description: "גשר מקטעים בשיטת FT זיז מאוזן, קירות תומכים מבטון מזוין וקרקע משוריינת, סלילה ותשתיות."
  },
  {
    title: "מנהרות הגבעה הצרפתית בירושלים",
    role: "בקרת איכות",
    description: "עבודות תשתית, סלילה ומנהור."
  }
];

const surveys = [
  {
    title: "סקירות גשרים ומנהרות עבור חברת נתיבי איילון",
    description: "ביצוע סקירת מנהרת לה גווארדיה, גשר דב הוז, גשר יצחק שדה ועוד."
  },
  {
    title: "סקירות גשרים, קירות תומכים ומובלי ניקוז עבור רכבת ישראל",
    description: "ביצוע מעל 100 סקירות לגשרי רכבת, מובלים וקירות תומכים בדרום ומרכז הארץ."
  },
  {
    title: "סקירות גשרים ומנהרות עבור עיריית ירושלים וחברת מוריה",
    description: "ביצוע סקירות למעל 40 מבנים כולל גשרי רכב, גשרי הולכי רגל, מנהרות ומעברים תחתיים. כמו כן, סקירת גשר רכבת קלה בעל 12 מפתחים בהדסה עין כרם."
  },
  {
    title: "סקירות גשרים, גשרי שילוט, מובלים וקירות תומכים ואקוסטיים עבור חברת נתיבי ישראל",
    description: "ביצוע של מאות סקירות בכל רחבי הארץ, סקירות לפני מסירה למזמין ועוד."
  },
  {
    title: "סקירות גשרים ומובלי ניקוז תת-קרקעיים עבור נת\"ע",
    description: "סקירת גשר ההגנה, סקירת מובל ניקוז תת קרקעי באורך כ-1 ק\"מ העובר לאורך שדרות ירושלים ביפו, וסקירות מובלי ניקוז ארוכים נוספים ועוד."
  },
  {
    title: "סקירות גשרים, מובלים, גשרי שילוט וקירות תומכים ואקוסטיים בכביש 431",
    description: "מעל 300 סקירות מבנים שונים ומגוונים בלוח זמנים צפוף לטובת עמידה ביעדי האחזקה של מנהלת הכביש."
  }
];

export default function ProjectsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[var(--color-navy)] py-20 md:py-28 border-b border-[var(--color-navy-light)]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-[var(--color-accent)] font-semibold text-sm mb-4 tracking-wide">
            תיק עבודות
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            פרויקטים נבחרים
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--color-slate-light)] text-lg md:text-xl">
            ריכזנו עבורכם חלק קטן מהפרויקטים המשמעותיים והמורכבים שביצענו ברחבי הארץ בתחומי פיקוח, בקרת איכות וסקירות מבנים.
          </p>
        </div>
      </section>

      {/* Main Projects Section */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Featured Projects Grid */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--color-navy)]">פרויקטי דגל</h2>
            <div className="h-1 w-16 bg-[var(--color-accent)] rounded-full mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
            {featuredProjects.map((project, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-[var(--color-border)] shadow-sm overflow-hidden group flex flex-col h-full"
              >
                <div className="relative h-64 md:h-80 w-full overflow-hidden bg-[var(--color-surface-alt)]">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  {project.credit && (
                    <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md text-white/90 text-[10px] px-2 py-0.5 rounded z-10 pointer-events-none tracking-wide">
                      {project.credit}
                    </div>
                  )}
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <span className="inline-block self-start px-3 py-1 bg-[var(--color-surface-alt)] text-[var(--color-navy)] text-xs font-bold rounded-full mb-4">
                    {project.role}
                  </span>
                  <h3 className="text-2xl font-bold text-[var(--color-navy)] leading-snug mb-4">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-slate-dark)] text-base leading-relaxed mt-auto border-t border-[var(--color-border)] pt-4">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Section */}
          <div className="text-center mb-12 mt-24">
            <h3 className="text-2xl font-bold text-[var(--color-navy)]">פרויקטים נוספים</h3>
            <div className="h-1 w-16 bg-[var(--color-accent)] rounded-full mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {otherProjects.map((project, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl p-6 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors duration-300 flex flex-col h-full"
              >
                <div className="mb-3">
                  <span className="text-[var(--color-accent)] text-xs font-bold mb-2 block">
                    {project.role}
                  </span>
                  <h4 className="text-lg font-bold text-[var(--color-navy)] leading-snug">
                    {project.title}
                  </h4>
                </div>
                <p className="text-[var(--color-slate)] text-sm leading-relaxed mt-auto pt-4 border-t border-[var(--color-border)]">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Surveys Section */}
      <section className="py-20 md:py-24 bg-[var(--color-surface-alt)] border-t border-[var(--color-border)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--color-navy)]">סקירות גשרים, מנהרות ומבני דרך</h2>
            <div className="h-1 w-16 bg-[var(--color-accent)] rounded-full mx-auto mt-4"></div>
            <p className="text-[var(--color-slate-dark)] mt-6 max-w-2xl mx-auto">
              ניסיון עשיר בביצוע מאות סקירות קפדניות עבור הגופים והרשויות המובילים בישראל.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {surveys.map((survey, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent)] transition-colors duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-navy)] mb-2">
                    {survey.title}
                  </h3>
                  <p className="text-[var(--color-slate-dark)] text-sm">
                    {survey.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
