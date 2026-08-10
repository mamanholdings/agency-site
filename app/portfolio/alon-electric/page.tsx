import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../../_components/icon";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "אלון חשמל — אתר לדוגמה",
  description: "עמוד נחיתה לדוגמה עבור עסק שירות בתחום החשמל.",
  robots: {
    index: false,
    follow: false,
  },
};

const services = [
  {
    number: "01",
    title: "איתור תקלות וקצרים",
    text: "בדיקה מסודרת של מקור התקלה והסבר ברור לפני שמתחילים בעבודה.",
  },
  {
    number: "02",
    title: "שקעים, מפסקים ותאורה",
    text: "התקנה והחלפה של נקודות חשמל וגופי תאורה בהתאם לצורך בבית או בעסק.",
  },
  {
    number: "03",
    title: "לוחות חשמל",
    text: "בדיקה, סידור והחלפת רכיבים בלוח, לאחר אבחון והתאמת היקף העבודה.",
  },
  {
    number: "04",
    title: "תשתיות ושיפוצים",
    text: "תכנון והכנת נקודות חשמל חדשות כחלק משיפוץ, מעבר דירה או שינוי בחלל.",
  },
];

const faqs = [
  {
    question: "איך מתאמים ביקור?",
    answer: "משאירים הודעה עם תיאור קצר של הצורך ומצרפים תמונה כשזה רלוונטי. לאחר מכן מתאמים זמן הגעה שמתאים לשני הצדדים.",
  },
  {
    question: "אפשר לדעת את המחיר מראש?",
    answer: "כאשר היקף העבודה ברור ניתן לתת הערכה ראשונית. בתקלות שדורשות בדיקה, המחיר נקבע לאחר האבחון ולפני תחילת העבודה.",
  },
  {
    question: "אתם עובדים גם עם עסקים?",
    answer: "כן. ניתן לתאם עבודות חשמל נקודתיות גם במשרדים, חנויות ועסקים, בהתאם לסוג העבודה ולזמן הנדרש.",
  },
];

export default function AlonElectricPage() {
  return (
    <div className={styles.site}>
      <a className={styles.skipLink} href="#electric-main">דילוג לתוכן</a>

      <aside className={styles.demoBar} aria-label="הבהרה לגבי האתר">
        <span>אתר לדוגמה שנבנה עבור תיק העבודות של MamanDigital</span>
        <Link href="/#portfolio">חזרה לתיק העבודות</Link>
      </aside>

      <header className={styles.header}>
        <div className={styles.shell}>
          <Link className={styles.logo} href="#top" aria-label="אלון חשמל — דף הבית">
            <span><Icon name="bolt" /></span>
            <b>אלון</b> חשמל
          </Link>
          <nav className={styles.nav} aria-label="ניווט באתר לדוגמה">
            <a href="#services">שירותים</a>
            <a href="#why-us">למה אלון</a>
            <a href="#process">איך זה עובד</a>
          </nav>
          <a className={styles.headerCta} href="#contact">לתיאום שירות</a>
        </div>
      </header>

      <main id="electric-main">
        <section className={styles.hero} id="top" aria-labelledby="electric-hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span /> שירות חשמל לבית ולעסק</p>
            <h1 id="electric-hero-title">כשהחשמל צריך טיפול, חשוב לדעת למי פונים.</h1>
            <p className={styles.heroLead}>
              אבחון מסודר, הסבר בגובה העיניים ועבודה שמתבצעת בתיאום —
              מתקלות קטנות ועד הכנת תשתיות חדשות.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#contact">
                לתיאום ביקור <Icon name="arrow" />
              </a>
              <a className={styles.secondaryButton} href="#services">לכל השירותים</a>
            </div>
            <ul className={styles.heroTrust} aria-label="עקרונות השירות">
              <li><Icon name="check" /> תיאום ברור</li>
              <li><Icon name="check" /> עבודה מסודרת</li>
              <li><Icon name="check" /> מענה אישי</li>
            </ul>
          </div>

          <div className={styles.heroMedia}>
            <Image
              alt="חשמלאי בודק לוח חשמל בדירה"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
              src="/images/alon-electric-hero.png"
            />
            <div className={styles.photoLabel}>
              <span><Icon name="tools" /></span>
              <p><small>טיפול מקצועי</small><b>מהבדיקה ועד לסיום העבודה</b></p>
            </div>
          </div>
        </section>

        <section className={styles.serviceStrip} aria-label="מידע מרכזי">
          <span>שירות בתיאום מראש</span><i />
          <span>לבית ולעסק</span><i />
          <span>הסבר לפני תחילת העבודה</span>
        </section>

        <section className={styles.section} id="services" aria-labelledby="services-title">
          <div className={styles.contentShell}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}><span /> שירותים נפוצים</p>
              <h2 id="services-title">שירותי חשמל נפוצים לבית ולעסק.</h2>
              <p>כל עבודה מתחילה בהבנת הצורך ובבדיקה מתאימה, כדי לטפל במה שנדרש ולא מעבר לכך.</p>
            </div>
            <div className={styles.serviceGrid}>
              {services.map((service) => (
                <article key={service.number}>
                  <span>{service.number}</span>
                  <Icon name={service.number === "01" ? "gauge" : service.number === "02" ? "spark" : service.number === "03" ? "bolt" : "tools"} />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.problemSection} id="why-us" aria-labelledby="why-title">
          <div className={styles.contentShell}>
            <div className={styles.problemIntro}>
              <p className={styles.lightEyebrow}>יודעים מה קורה בכל שלב</p>
              <h2 id="why-title">לא צריך לנחש מה התקלקל ומה הולך לקרות עכשיו.</h2>
              <p>
                מקבלים הסבר ברור על הבדיקה, על העבודה הנדרשת ועל העלות לפני
                שמתקדמים. כך אפשר לקבל החלטה רגועה ומבוססת.
              </p>
            </div>
            <ol className={styles.valueList}>
              <li><span>01</span><div><h3>בודקים לפני שמחליפים</h3><p>מתחילים באבחון ומתקדמים רק לאחר שהצורך ברור.</p></div></li>
              <li><span>02</span><div><h3>מסבירים בשפה פשוטה</h3><p>יודעים מה נמצא, מה מומלץ לבצע ומה צפויה להיות העלות.</p></div></li>
              <li><span>03</span><div><h3>משאירים אחרינו סדר</h3><p>מסיימים את העבודה רק לאחר בדיקה וניקוי אזור העבודה.</p></div></li>
            </ol>
          </div>
        </section>

        <section className={styles.processSection} id="process" aria-labelledby="process-title">
          <div className={styles.contentShell}>
            <div className={styles.processHeader}>
              <p className={styles.eyebrow}><span /> פשוט לתאם</p>
              <h2 id="process-title">מתאמים שירות בשלושה שלבים פשוטים.</h2>
            </div>
            <ol className={styles.processGrid}>
              <li><b>1</b><h3>מתארים את הצורך</h3><p>שולחים הודעה קצרה ומצרפים תמונה אם אפשר.</p></li>
              <li><b>2</b><h3>מתאמים ביקור</h3><p>מקבלים מענה ראשוני וקובעים מועד שמתאים.</p></li>
              <li><b>3</b><h3>בודקים ומטפלים</h3><p>מאבחנים, מסבירים ומבצעים לאחר קבלת אישור.</p></li>
            </ol>
          </div>
        </section>

        <section className={styles.faqSection} aria-labelledby="electric-faq-title">
          <div className={styles.contentShell}>
            <div className={styles.faqHeading}>
              <p className={styles.eyebrow}><span /> שאלות נפוצות</p>
              <h2 id="electric-faq-title">מידע שכדאי לדעת לפני שמתקשרים.</h2>
            </div>
            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary><span>{faq.question}</span><i aria-hidden="true" /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contact" aria-labelledby="electric-contact-title">
          <div className={styles.contentShell}>
            <div className={styles.contactCopy}>
              <p>צריכים עזרה בחשמל?</p>
              <h2 id="electric-contact-title">מתארים את הצורך ומתאמים את הצעד הבא.</h2>
            </div>
            <div className={styles.contactCard}>
              <span>פרטי קשר לדוגמה בלבד</span>
              <h3>אלון חשמל</h3>
              <p>המספר והקישור אינם פעילים. באתר אמיתי הם יחוברו ישירות לבעל העסק.</p>
              <strong aria-label="מספר טלפון לדוגמה">050-000-0000</strong>
              <span className={styles.disabledButton} aria-disabled="true">WhatsApp יחובר לפני ההשקה</span>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.contentShell}>
          <Link className={styles.logo} href="#top"><span><Icon name="bolt" /></span><b>אלון</b> חשמל</Link>
          <p>אתר קונספט לצורכי המחשה · אינו מייצג עסק או לקוח אמיתי</p>
          <Link href="/#portfolio">נבנה על ידי MamanDigital</Link>
        </div>
      </footer>

      <a className={styles.mobileCta} href="#contact">לתיאום שירות <Icon name="arrow" /></a>
    </div>
  );
}
