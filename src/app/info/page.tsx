import Image from "next/image";
import { User } from "lucide-react";

export default function InfoPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[var(--color-navy)] py-20 md:py-32 border-b border-[var(--color-navy-light)]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-[var(--color-accent)] font-semibold text-sm mb-4 tracking-wide">
            גדליה אוליצקי הנדסה בע"מ
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            אודות החברה
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--color-slate-light)] text-lg md:text-xl">
            החברה הוקמה בשנת 2013 ומציעה פתרונות ושירותים הנדסיים בתחום ניהול וביצוע פרויקטי תשתיות תחבורה, וסקירות גשרים ומבני דרך.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Overview & Excellence */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[var(--color-navy)]">מצוינות הנדסית מוכחת</h2>
                <div className="h-1 w-20 bg-[var(--color-accent)] rounded-full"></div>
                <p className="text-[var(--color-slate-dark)] text-lg leading-relaxed">
                  החברה משפרת באופן מתמיד את רמת האיכות והשירות ומיישמת את נוהל הבטחת האיכות במסגרת התקן <strong className="text-[var(--color-navy)]">9001:2015 ISO</strong>.
                </p>
                <p className="text-[var(--color-slate-dark)] text-lg leading-relaxed">
                  החברה מוכרת בזכות המוניטין המצוין שצבר המייסד והמהנדס הראשי גדליה אוליצקי לאורך 30 שנות עבודתו במיזמים הבולטים בארץ - עבור רכבת ישראל, נתיבי-ישראל, חברת מוריה ועוד.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-border)] space-y-4">
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-4">החותם שלנו:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)] shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className="text-[var(--color-slate-dark)]">מראשוני סוקרי הגשרים המוסמכים בישראל.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)] shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className="text-[var(--color-slate-dark)]">בקרת איכות בפרויקט זוכה פרס איגוד המהנדסים לבנייה ולתשתיות: גשר 10 בקו הרכבת ירושלים-תל אביב, הגשר הגבוה ביותר במזרח התיכון.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)] shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className="text-[var(--color-slate-dark)]">הרצאות ופרסומים בארץ ובעולם בתחום תשתיות עירוניות לתחבורה ומגורים.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-[var(--color-navy)] text-white p-10 md:p-12 rounded-2xl shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">הסמכות ותעודות</h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-[var(--color-slate-light)]">
                <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></div><span>תקן ISO 9001:2015</span></div>
                <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></div><span>ניהול הבטחת איכות בפרויקטי תשתית - נתיבי ישראל</span></div>
                <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></div><span>סוקר גשרים, מנהרות, ומבני דרך דרגה 2 - נתיבי ישראל</span></div>
                <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></div><span>פיקוח גשרים - מע"צ</span></div>
                <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></div><span>פיקוח כבישים - מע"צ</span></div>
                <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></div><span>הסדרת בטיחות באתרי סלילה - מע"צ</span></div>
                <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></div><span>סוקר איכות מבנים וכתיבת חוות דעת מומחה - מכון התקנים</span></div>
                <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></div><span>בוחני נזקי מים במבנים - מכון התקנים הישראלי</span></div>
              </div>
            </div>

            {/* Team Section */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--color-navy)]">בעלי תפקידים</h2>
                <div className="h-1 w-16 bg-[var(--color-accent)] rounded-full mx-auto mt-4"></div>
              </div>

              <div className="space-y-12">
                {/* Gdalya Olitsky */}
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start py-8 border-t border-[var(--color-border)]">
                  
                  {/* Right side (RTL Start) - Name & Title */}
                  <div className="md:w-1/4 shrink-0 space-y-1 text-center md:text-right">
                    <h3 className="text-2xl font-bold text-[var(--color-navy)]">גדליה אוליצקי</h3>
                    <p className="text-[var(--color-accent)] font-medium">מהנדס ראשי ומנכ"ל</p>
                    <p className="text-[var(--color-navy-light)] font-bold mt-2">30 שנות ניסיון</p>
                    <div className="text-[var(--color-slate)] text-sm space-y-2 pt-4">
                      <p>מהנדס בעל תואר שני מהאוניברסיטה להנדסת בנין במוסקבה.</p>
                      <p>בוגר קורס סוקרי גשרים (2008).</p>
                    </div>
                  </div>

                  {/* Center - Description */}
                  <div className="md:w-2/4 text-[var(--color-slate-dark)] space-y-4 text-center md:text-right">
                    <p>
                      ניסיונו העשיר, בניהול, פיקוח והבטחת איכות בפרויקטים רבים ומורכבים, כולל:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm mr-2 text-[var(--color-slate)] text-right">
                      <li>שיקום והרחבת כביש 1 בקטע מישור אדומים - השומרוני הטוב - צומת אלמוג.</li>
                      <li>הקמת 5 גשרים במחלף הזיתים סמוך לירושלים.</li>
                      <li>הקמת גשר לרכבת הקלה בפסגת זאב בירושלים.</li>
                      <li>הקמת קירות קרקע משוריינת בכביש מעלה אדומים-קידר.</li>
                      <li>הקמת קירות דיפון וגשרי שילוט בשדרות בגין בירושלים.</li>
                    </ul>
                  </div>

                  {/* Left side (RTL End) - Photo */}
                  <div className="md:w-1/4 shrink-0 flex justify-center md:justify-end">
                    <div className="w-40 h-40 bg-[var(--color-surface-alt)] rounded-full border-4 border-white shadow-md relative overflow-hidden group">
                      <Image src="/gdalia.png" alt="גדליה אוליצקי" fill className="object-cover object-[center_40%]" />
                    </div>
                  </div>

                </div>

                {/* Michael Olitsky */}
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start py-8 border-t border-[var(--color-border)]">
                  
                  {/* Right side (RTL Start) - Name & Title */}
                  <div className="md:w-1/4 shrink-0 space-y-1 text-center md:text-right">
                    <h3 className="text-2xl font-bold text-[var(--color-navy)]">מיכאל אוליצקי</h3>
                    <p className="text-[var(--color-accent)] font-medium">מייסד וסמנכ"ל</p>
                    <div className="text-[var(--color-slate)] text-sm space-y-2 pt-4">
                      <p>מהנדס בעל תואר שני</p>
                    </div>
                  </div>

                  {/* Center - Description */}
                  <div className="md:w-2/4 text-[var(--color-slate-dark)] space-y-4 text-center md:text-right">
                    <p className="text-lg">
                      הנדסאי בניין, בעל תואר ראשון בכלכלה ומנהל עסקים מהאוניברסיטה העברית ותואר שני בהנדסה וניהול מערכות תשתית ממכללת אפקה בתל אביב.
                    </p>
                    <p>
                      סוקר גשרים מוסמך, וחוקר בתחום התכנון העירוני.
                    </p>
                  </div>

                  {/* Left side (RTL End) - Photo */}
                  <div className="md:w-1/4 shrink-0 flex justify-center md:justify-end">
                    <div className="w-40 h-40 bg-[var(--color-surface-alt)] rounded-full border-4 border-white shadow-md relative overflow-hidden group">
                      <Image src="/michael.jpg" alt="מיכאל אוליצקי" fill className="object-cover object-top" />
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-20 pt-16 border-t border-[var(--color-border)] text-center space-y-6">
              <h2 className="text-3xl font-bold text-[var(--color-navy)]">נשמח לעמוד לשירותכם</h2>
              <p className="text-[var(--color-slate-dark)] text-lg max-w-2xl mx-auto">
                לפרטים נוספים, ייעוץ, או תיאום סקירת גשרים, נשמח לעמוד לשירותכם.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:office@golitsky.com" className="px-8 py-4 bg-[var(--color-accent)] text-white rounded-xl font-bold hover:bg-opacity-90 transition-all w-full sm:w-auto text-center">
                  צרו קשר
                </a>
                <a href="/projects" className="px-8 py-4 bg-white border-2 border-[var(--color-navy)] text-[var(--color-navy)] rounded-xl font-bold hover:bg-[var(--color-surface-alt)] transition-all w-full sm:w-auto text-center">
                  צפו בפרויקטים
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
