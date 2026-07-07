import {
  HardHat,
  Landmark,
  ClipboardCheck,
  ShieldCheck,
  FlaskConical,
} from "lucide-react";
import type { ComponentType } from "react";

/* ─── Navigation ─── */
export const NAV_LINKS = [
  { label: "ראשי", href: "#hero" },
  { label: "אודות", href: "#about" },
  { label: "שירותים", href: "#services" },
  { label: "פרויקטים", href: "#projects" },
  { label: "לקוחות", href: "#clients" },
  { label: "צרו קשר", href: "#contact" },
] as const;

/* ─── Services ─── */
export interface Service {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  colSpan?: string;
}

export const SERVICES: Service[] = [
  {
    icon: HardHat,
    title: "ניהול פרויקט ופיקוח",
    description:
      "ניהול שלבי ביצוע הפרויקט, תיאום בין הגורמים השונים, מעקב אחר העבודה באתר ולוחות הזמנים. פיקוח צמוד על עבודות גישור, סלילה, תשתיות, תאורה ושילוט.",
    colSpan: "md:col-span-2",
  },
  {
    icon: Landmark,
    title: "סקירות גשרים ומבנים",
    description:
      "בדיקה והערכת המצב המבני של גשרים, מנהרות, קירות תומכים, מובלים וגשרי שילוט. ניסיון במעל 500 סקירות בכל רחבי הארץ.",
  },
  {
    icon: ClipboardCheck,
    title: "בקרת איכות",
    description:
      "ביצוע פיקוח צמוד, מעקב ובקרה, הפעלת מעבדות, בקרת מדידה, ניהול מידע, דיווח שוטף והכנת תיקי מסירה.",
  },
  {
    icon: ShieldCheck,
    title: "הבטחת איכות",
    description:
      "ניהול בקרת איכות, לוחות זמנים, סטטוס כמויות בפרויקט, ניהול מסמכי התכנון והביצוע, וקישור בין המערכות.",
  },
  {
    icon: FlaskConical,
    title: "מחקר ופיתוח",
    description:
      "הרצאות ופרסומים בארץ ובעולם בתחום תשתיות עירוניות לתחבורה ומגורים. מחקר בנושא גשרים למגורים.",
  },
];

/* ─── Featured Projects ─── */
export interface Project {
  title: string;
  category: string;
  description: string;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "גשר 10 בקו הרכבת המהיר ירושלים - ת״א",
    category: "בקרת איכות",
    description:
      "גשר בטון דרוך בשיטת FT זיז מאוזן. הגשר הגבוה ביותר במזרח התיכון. זוכה פרס איגוד המהנדסים לבנייה ולתשתיות.",
    image: "/images/projects/project1.png",
  },
  {
    title: "מחלף בן-ציון נתניהו",
    category: "פיקוח",
    description:
      "עבודות גישור — 3 גשרים, בשיטת מקטעים וקורות. סלילה, תשתיות, תאורה, ביצוע רמפות ושילוט.",
    image: "/images/projects/project2.jpg",
  },
  {
    title: "הקו הירוק — רכבת קלה ראשל״צ",
    category: "הבטחת איכות",
    description:
      "ניהול הבטחת איכות עבודות תשתית, סלילה, ניקוז, נוף, שיקום סביבתי ובטיחות בתנועה.",
  },
  {
    title: "שיקוע בגין — קפלן, תל אביב",
    category: "פיקוח",
    description:
      "שיקום והרחבת גשר כולל הוספת קורות באחד המחלפים הסואנים ביותר בארץ.",
  },
  {
    title: "מנהרות הגבעה הצרפתית",
    category: "בקרת איכות",
    description: "עבודות תשתית, סלילה ומנהור בפרויקט מורכב בלב ירושלים.",
  },
  {
    title: "שיקום גשרים בכביש 90",
    category: "הבטחת איכות",
    description:
      "שימוש ביריעות סיבי פחמן, הזרקות, החלפת סמכי נאופרן, תפרי התפשטות ושיקום בטונים.",
  },
];

/* ─── Clients ─── */
export interface Client {
  name: string;
  image: string;
}

export const CLIENTS: Client[] = [
  { name: "נתיבי ישראל", image: "/images/clients/netivei-israel.png" },
  { name: "רכבת ישראל", image: "/images/clients/israel-railways.jpg" },
  { name: "חברת מוריה ירושלים", image: "/images/clients/moriah.png" },
  { name: "עיריית תל אביב", image: "/images/clients/tel-aviv.png" },
  { name: "נתיבי איילון", image: "/images/clients/ayalon.png" },
  { name: "מעלה אדומים", image: "/images/clients/maale-adumim.png" },
  { name: "ברן גרופ", image: "/images/clients/baran-group.png" },
  { name: "מועצה אזורית תמר", image: "/images/clients/tamar.png" },
  { name: "מעבדות איזוטסט", image: "/images/clients/isotest.png" },
  { name: "גיאופרום", image: "/images/clients/geoprom.gif" },
];

/* ─── Stats ─── */
export const STATS = [
  { value: "30+", label: "שנות ניסיון" },
  { value: "500+", label: "סקירות גשרים" },
  { value: "ISO", label: "9001:2015" },
  { value: "2013", label: "שנת הקמה" },
] as const;

/* ─── Certifications ─── */
export const CERTIFICATIONS = [
  "תקן ISO 9001:2015",
  "ניהול הבטחת איכות בפרויקטי תשתית — נתיבי ישראל",
  "סוקר גשרים, מנהרות ומבני דרך דרגה 2 — נתיבי ישראל",
  "פיקוח גשרים וכבישים — מע״צ",
  "הסדרת בטיחות באתרי סלילה — מע״צ",
  "סוקר איכות מבנים — מכון התקנים הישראלי",
] as const;

/* ─── Contact Info ─── */
export const CONTACT_INFO = {
  address: "הסורג 2, ירושלים 9414502",
  email: "office@golitsky.com",
  phone: "02-6515114",
  mobile: "050-8221662",
  fax: "02-6542741",
} as const;
