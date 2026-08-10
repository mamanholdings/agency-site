import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../../_components/icon";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "אלון חשמל — אתר לדוגמה",
  description: "עמוד נחיתה לדוגמה עבור עסק שירות בתחום החשמל.",
  robots: { index: false, follow: false },
};

const services = [
  {
    icon: "gauge" as const,
    title: "איתור תקלות וקצרים",
    text: "בדיקה מסודרת של מקור התקלה והסבר ברור לפני שמתחילים בעבודה.",
    tag: "אבחון וטיפול",
  },
  {
    icon: "spark" as const,
    title: "שקעים, מפסקים ותאורה",
    text: "התקנה והחלפה של נקודות חשמל וגופי תאורה בבית או בעסק.",
    tag: "התקנות",
  },
  {
    icon: "bolt" as const,
    title: "לוחות חשמל",
    text: "בדיקה, סידור והחלפת רכיבים לאחר אבחון והתאמת היקף העבודה.",
    tag: "בדיקה ושדרוג",
  },
  {
    icon: "tools" as const,
    title: "תשתיות ושיפוצים",
    text: "הכנת נקודות חשמל חדשות כחלק משיפוץ, מעבר דירה או שינוי בחלל.",
    tag: "תכנון וביצוע",
  },
];

const faqs = [
  {
    question: "איך מתאמים ביקור?",
    answer: "שולחים תיאור קצר של הצורך ומצרפים תמונה כשזה רלוונטי. לאחר מכן מתאמים זמן הגעה שמתאים לשני הצדדים.",
  },
  {
    question: "אפשר לדעת את המחיר מראש?",
    answer: "כאשר היקף העבודה ברור ניתן לתת הערכה ראשונית. בתקלות שדורשות בדיקה, המחיר נקבע לאחר האבחון ולפני תחילת העבודה.",
  },
  {
    question: "השירות מתאים גם לעסקים?",
    answer: "כן. ניתן לתאם עבודות חשמל נקודתיות במשרדים, בחנויות ובעסקים, בהתאם לסוג העבודה ולזמן הנדרש.",
  },
];

export default function AlonElectricPage() {
  return (
    <div className={styles.site}>
      <a className={styles.skipLink} href="#electric-main">דילוג לתוכן</a>

      <aside className={styles.demoBar} aria-label="הבהרה לגבי האתר">
        <span>אתר קונספט לתיק העבודות של MamanDigital</span>
        <Link href="/#portfolio">חזרה לתיק העבודות</Link>
      </aside>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.logo} href="#top" aria-label="אלון חשמל — דף הבית">
            <span><Icon name="bolt" /></span>
            <b>אלון חשמל</b>
          </Link>
          <nav className={styles.nav} aria-label="ניווט באתר לדוגמה">
            <a href="#services">שירותים</a>
            <a href="#approach">איך עובדים</a>
            <a href="#questions">שאלות נפוצות</a>
          </nav>
          <a className={styles.headerButton} href="#contact">לתיאום ביקור</a>
        </div>
      </header>

      <main id="electric-main">
        <section className={styles.hero} id="top" aria-labelledby="electric-hero-title">
          <Image
            alt="חשמלאי בודק לוח חשמל בדירה"
            fill
            priority
            sizes="100vw"
            src="/images/alon-electric-hero.png"
          />
          <div className={styles.heroShade} />
          <div className={styles.heroInner}>
            <div className={styles.heroPanel}>
              <span className={styles.available}><i /> שירות בתיאום מראש</span>
              <h1 id="electric-hero-title">חשמל תקין.<br />ראש שקט.</h1>
              <p>
                טיפול מסודר בעבודות חשמל לבית ולעסק, עם הסבר ברור לפני
                שמתחילים ועדכון לאורך העבודה.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#contact">לתיאום ביקור <Icon name="arrow" /></a>
                <a className={styles.textButton} href="#services">מה אפשר לתקן?</a>
              </div>
            </div>

            <div className={styles.heroNote}>
              <span><Icon name="tools" /></span>
              <div><small>מהבדיקה ועד לסיום</small><b>יודעים מה קורה בכל שלב</b></div>
            </div>
          </div>

          <div className={styles.heroFacts} aria-label="עקרונות השירות">
            <span><Icon name="check" /> תיאום ברור</span>
            <span><Icon name="check" /> הסבר פשוט</span>
            <span><Icon name="check" /> עבודה מסודרת</span>
          </div>
        </section>

        <section className={styles.intro} aria-labelledby="intro-title">
          <div className={styles.shell}>
            <span className={styles.sectionLabel}>במה אפשר לעזור?</span>
            <h2 id="intro-title">לא כל תקלה נראית אותו דבר.<br />מתחילים בבדיקה נכונה.</h2>
            <p>מקשיבים למה שקורה, בודקים את מקור הבעיה ורק אז מחליטים כיצד לטפל.</p>
          </div>
        </section>

        <section className={styles.services} id="services" aria-label="שירותי חשמל">
          <div className={styles.shell}>
            <div className={styles.serviceMosaic}>
              {services.map((service, index) => (
                <article className={index === 0 ? styles.featuredService : styles.serviceCard} key={service.title}>
                  <div className={styles.serviceTop}>
                    <span><Icon name={service.icon} /></span>
                    <small>{service.tag}</small>
                  </div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  {index === 0 ? <div className={styles.signalRings} aria-hidden="true"><i /><i /><i /></div> : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.approach} id="approach" aria-labelledby="approach-title">
          <div className={styles.shell}>
            <div className={styles.approachVisual} aria-hidden="true">
              <div className={styles.bigCircle}><Icon name="bolt" /><span>בלי<br />ניחושים</span></div>
              <span className={styles.orbitOne}>בדיקה</span>
              <span className={styles.orbitTwo}>הסבר</span>
              <span className={styles.orbitThree}>טיפול</span>
            </div>

            <div className={styles.approachCopy}>
              <span className={styles.sectionLabel}>עבודה ברורה מההתחלה</span>
              <h2 id="approach-title">לפני שמתקנים, מבינים מה באמת צריך לעשות.</h2>
              <p>כך נמנעים מהחלפות מיותרות ויודעים מראש כיצד העבודה מתקדמת.</p>
              <ul>
                <li><span><Icon name="check" /></span><div><b>בודקים את מקור הבעיה</b><small>מתחילים באבחון ולא בהשערה.</small></div></li>
                <li><span><Icon name="check" /></span><div><b>מסבירים לפני שמתחילים</b><small>מקבלים תמונה ברורה של העבודה והעלות.</small></div></li>
                <li><span><Icon name="check" /></span><div><b>בודקים שוב בסיום</b><small>מוודאים שהכול עובד ומשאירים את האזור מסודר.</small></div></li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.process} aria-labelledby="process-title">
          <div className={styles.shell}>
            <div className={styles.processIntro}>
              <span className={styles.sectionLabel}>כך מתאמים שירות</span>
              <h2 id="process-title">דרך קצרה מההודעה הראשונה לטיפול.</h2>
              <a href="#contact">רוצים להתחיל? <Icon name="arrow" /></a>
            </div>
            <ol className={styles.timeline}>
              <li><i /><span>שלב 1</span><h3>מתארים את הצורך</h3><p>שולחים הודעה קצרה ומצרפים תמונה אם אפשר.</p></li>
              <li><i /><span>שלב 2</span><h3>מתאמים זמן</h3><p>מקבלים מענה ראשוני וקובעים מועד שמתאים.</p></li>
              <li><i /><span>שלב 3</span><h3>בודקים ומטפלים</h3><p>מאבחנים, מסבירים ומבצעים לאחר קבלת אישור.</p></li>
            </ol>
          </div>
        </section>

        <section className={styles.closing} id="questions">
          <div className={styles.shell}>
            <div className={styles.faq} aria-labelledby="faq-title">
              <span className={styles.sectionLabel}>לפני שמתקשרים</span>
              <h2 id="faq-title">שאלות נפוצות</h2>
              <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                  <details key={faq.question} open={index === 0}>
                    <summary><span>{faq.question}</span><i aria-hidden="true" /></summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            <aside className={styles.contactCard} id="contact" aria-labelledby="contact-title">
              <span className={styles.dummyBadge}>פרטים לדוגמה בלבד</span>
              <div className={styles.contactIcon}><Icon name="phone" /></div>
              <p>צריכים עזרה בחשמל?</p>
              <h2 id="contact-title">ספרו בקצרה מה צריך לבדוק.</h2>
              <strong aria-label="מספר טלפון לדוגמה">050-000-0000</strong>
              <span className={styles.disabledButton} aria-disabled="true">WhatsApp יחובר לפני ההשקה</span>
              <small>המספר והקישור אינם פעילים באתר הקונספט.</small>
            </aside>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.shell}>
          <Link className={styles.logo} href="#top"><span><Icon name="bolt" /></span><b>אלון חשמל</b></Link>
          <p>אתר קונספט · אינו מייצג עסק או לקוח אמיתי</p>
          <Link href="/#portfolio">נבנה על ידי MamanDigital</Link>
        </div>
      </footer>

      <a className={styles.mobileCta} href="#contact">לתיאום ביקור <Icon name="arrow" /></a>
    </div>
  );
}
