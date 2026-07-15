import React from 'react';
import Image from 'next/image';

export default function HabitableBridgePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[var(--color-navy)] py-24 md:py-32 border-b border-[var(--color-navy-light)]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-[var(--color-accent)] font-semibold text-sm mb-4 tracking-wide">
            מחקר אקדמי
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto">
            גשרים למגורים ושכונות בקומות
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--color-slate-light)] text-lg md:text-xl">
            פתרונות מתקדמים לציפוף עירוני ועירוב שימושים באמצעות תשתיות תחבורה
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <article className="max-w-3xl mx-auto prose prose-lg md:prose-xl text-[var(--color-slate-dark)]">
            
            <p className="lead text-xl md:text-2xl font-medium text-[var(--color-navy)] leading-relaxed mb-10">
              כוחות השוק ועוצמות הביקושים לדיור ולשטחים מסחריים באזורים מרכזיים ונגישים, מעוררים ומעודדים באופן ישיר את התפתחות תחום הבניה לגובה. 
            </p>

            <p className="mb-6 leading-relaxed">
              מבנים רבי קומות מוסיפים חללים ומרחבים חדשים במימד האנכי, ובכך מאפשרים ציפוף משמעותי של אוכלוסיה בערים. יחד עם זאת, בנייה לגובה מכבידה מאוד על מערכות התחבורה ושאר התשתיות הפיזיות בערים. שכן, באופן מסורתי, ועל אף חשיבותן הקריטית, מערכות התשתית נמצאות תמיד בעמדת נחיתות, הן במובן הכלכלי, מפאת היותן מוצר ציבורי, והן במובן הפיזי, בו הן כבולות למישור אופקי יחיד, זה של פני האדמה.
            </p>
            
            <div className="my-12 relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-sm border border-[var(--color-border)]">
              <Image src="/assest/habitable1.png" alt="איור גשר למגורים" fill className="object-contain bg-white" />
            </div>
            
            <p className="mb-6 leading-relaxed">
              על מנת לספק מענה אופטימלי לצרכי אוכלוסיות הערים, אשר צומחות בקצב חסר תקדים, יש לשקול שילוב של תשתיות עירוניות בבנייה לגובה. קיים צורך לתכנן מבנים אשר מלבד מגורים, מאפשרים התניידות במרחב העירוני ועירוב שימושים במפלסים נוספים מעל פני הקרקע. בפרט, מעניין לבחון התכנות של מערכת עירונית עילית, בצורת רשת גשרים הנושאים בתי מגורים, שטחי מסחר, מקומות בילוי ופנאי, מוסדות ציבור, שטחים פתוחים ועוד. באופן מעשי, כל גשר מתפקד גם בתור שכונה הליכתית ומקיימת וגם בתור מסדרון תחבורתי הכולל גם מעבר תשתיות, מעל העיר הקיימת.
            </p>

            <div className="my-16 text-center relative px-8">
              <span className="absolute top-0 right-4 text-8xl text-[var(--color-accent)] opacity-20 font-serif leading-none -translate-y-6">"</span>
              <p className="text-2xl md:text-3xl italic font-bold text-[var(--color-navy)] leading-relaxed relative z-10">
                באופן מעשי, כל גשר מתפקד גם בתור שכונה הליכתית ומקיימת וגם בתור מסדרון תחבורתי הכולל גם מעבר תשתיות, מעל העיר הקיימת.
              </p>
            </div>

            <div className="my-12 relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-border)]">
              <Image src="/assest/habitable2.jpg" alt="הדמיה של טבעת גשרים למגורים" fill className="object-cover" />
            </div>

            <p className="mb-6 leading-relaxed">
              כיום, גשרים משמשים באופן כמעט בלעדי לצרכי תחבורה, ואין זה נדיר למצוא גשרים הנושאים דרכים מהירות במרכזי ערים. אולם, בשנים האחרונות, חלה תפנית בגישת מספר רשויות בולטות ברחבי העולם, וביניהן ניו-יורק וסיאול, אשר החלו בהסבת גשרי רכבות וגשרי-רכב קיימים לשטחים פתוחים. 
            </p>
            
            <p className="mb-6 leading-relaxed">
              יתר על כן, קיימות מספר דוגמאות בעלות אופי היסטורי לגשרים שעליהם חנויות או שטחי מסחר כדוגמת גשר ריאלטו בוונציה, פונטו וצ'יו בפירנצה, ואף גשר לונדון הישן, שעד לפני הרסיתו בשנת 1831 עמד כשש-מאות שנים, איכלס תושבים, שווקים ואף כנסיות. מבנים דומים מהעת האחרונה ניתן למצוא למשל באיסטנבול- גשר גאלטה, הנושא טיילת עם מסעדות במפלס תחתון ותנועת כלי רכב במפלס עליון. ובנוסף, את בתי הקוביות ברוטרדם, אשר בנויות מעל כביש ושטח ציבורי פתוח.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-navy)] mt-12 mb-6">אין מניעה קונסטרוקטיבית</h2>

            <p className="mb-6 leading-relaxed">
              מבחינה הנדסית, אין גבול לאורך כולל מקסימלי אפשרי של גשרים. בנוסף, בעשורים האחרונים נבנו גשרים עם מפתח של עד 2 קילומטר, גשרים שגובהם 270 מטר מעל פני הקרקע וגשרים שמסוגלים לעמוד ברעידות אדמה קיצוניות, גם בעוצמות מעל 7.5 בסולם ריכטר. ככלל, גשרים מסוגלים לשאת עומסים דינאמיים כבדים, כדוגמת תנועת משאיות ואף רכבות משא. לכן, אין מניעה קונסטרוקטיבית להשמיש גשרים בתור תשתית למבנים עירוניים.
            </p>

            <p className="mb-6 leading-relaxed">
              התפתחות עירונית מקיימת תלויה בשדרוג מהותי של התשתיות העירוניות, והתאמתן לרמת השירות הנדרשת כתוצאה מבנייה לגובה, על כל השלכותיה. גשרים הנושאים רחובות שלמים ישפרו את הנגישות והחיבוריות בתוך העיר, יספקו אפשרויות תעסוקה נוספות, יגבירו את עירוב השימושים, יאפשרו גישות חדשניות ויעילות לניהול מים, אנרגיה ופסולת, כל זאת תוך כדי שימור הסביבה העירונית הקיימת ושיתוף פעולה מוגבר בין התושבים, המגזר העסקי והרשויות.
            </p>

          </article>
        </div>
      </section>
    </div>
  );
}
