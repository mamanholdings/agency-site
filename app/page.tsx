import Image from "next/image";
import Link from "next/link";
import { Icon } from "./_components/icon";

const planFeatures = [
  "אתר תדמית מקצועי בהיקף של עד 5 עמודים",
  "עיצוב המותאם לעסק, לעברית ולמובייל",
  "כפתורי טלפון ו-WhatsApp וטופס פנייה מוגן מספאם",
  "מבנה תוכן והתאמה טכנית בסיסית למנועי חיפוש",
  "אחסון, תעודת SSL, תחזוקה ועדכוני אבטחה",
  "בדיקות תקינות, טיפול בתקלות ושינויי תוכן קטנים",
];

const siteTypes = [
  {
    number: "01",
    name: "דף נחיתה",
    purpose: "לקמפיין או לשירות ממוקד",
    description:
      "עמוד אחד שמציג הצעה ברורה ומוביל את המבקר לפעולה אחת — השארת פרטים, שיחה או רכישה.",
  },
  {
    number: "02",
    name: "אתר תדמית",
    purpose: "להצגת העסק ולעידוד פניות",
    description:
      "אתר שמציג את העסק, השירותים והיתרונות באופן מקצועי, מחזק את אמון הלקוחות ומעודד אותם ליצור קשר.",
  },
  {
    number: "03",
    name: "חנות אונליין",
    purpose: "למכירת מוצרים · בתמחור נפרד",
    description:
      "מערכת מסחר עם קטלוג, סליקה, משלוחים וניהול הזמנות. ההיקף נקבע בנפרד לפי הפעילות של העסק.",
  },
];

const faqs = [
  {
    question: "איזה סוג אתר מתאים לעסק שלי?",
    answer:
      "דף נחיתה מתאים להצעה או לקמפיין ממוקד, אתר תדמית מתאים להצגת העסק ולעידוד פניות, וחנות אונליין מיועדת למכירת מוצרים. בפגישת האפיון נבחן את המטרה ונמליץ על הפתרון המתאים, בלי להוסיף לעסק מערכת מורכבת שאינה נחוצה לו.",
  },
  {
    question: "כמה זמן לוקח לבנות אתר?",
    answer:
      "אתר תדמית ממוקד יכול להיות מוכן בדרך כלל בתוך 2–4 שבועות מרגע שכל התוכן והחומרים מתקבלים. לוח הזמנים הסופי נקבע לפי היקף הפרויקט וקצב המשוב.",
  },
  {
    question: "מה כולל התשלום החודשי?",
    answer:
      "התשלום החודשי כולל את בניית אתר התדמית במסגרת המסלול, אחסון, תעודת SSL, בדיקות מהירות ותקינות, טיפול בתקלות, עדכוני אבטחה והיקף מוגדר של שינויי תוכן קטנים. ההיקף המלא יופיע בהצעה ובהסכם.",
  },
  {
    question: "מה המשמעות של אתר ללא עלות הקמה?",
    answer:
      "במקום לשלם סכום גדול בתחילת הדרך, עלות בניית האתר נכללת במסלול החודשי. התשלום הוא 250 ₪ לחודש בהתחייבות ל-12 חודשים, כלומר התחייבות כוללת של 3,000 ₪ בשנה הראשונה. אין תשלום הקמה נוסף לאתר תדמית העומד בהיקף המסלול.",
  },
  {
    question: "מה קורה אם רוצים להפסיק במהלך השנה הראשונה?",
    answer:
      "אפשר להפסיק את השירות גם במהלך השנה הראשונה, אך יש להסדיר את יתרת התשלומים עד לסיום תקופת ההתחייבות. לדוגמה, אם נותרו ארבעה חודשים, יתרת התשלום תהיה עבור ארבעת החודשים שנותרו.",
  },
  {
    question: "ומה קורה אחרי 12 חודשים?",
    answer:
      "לאחר השלמת השנה הראשונה המסלול ממשיך ללא התחייבות נוספת. אפשר להמשיך ליהנות מהאחסון והתחזוקה ב-250 ₪ לחודש, או להפסיק את השירות בכל עת בהתאם לתנאי ההסכם.",
  },
  {
    question: "האם האתר יופיע ראשון בגוגל?",
    answer:
      "אי אפשר להבטיח דירוג. אנחנו בונים בסיס טכני נכון, מהיר ונגיש, ומארגנים את התוכן כך שמנועי חיפוש ולקוחות יבינו את העסק. קידום שוטף הוא שירות נפרד.",
  },
  {
    question: "אפשר להוסיף בעתיד מערכת הזמנות או מלאי?",
    answer:
      "כן. כאשר יש צורך עסקי אמיתי, אפשר לתכנן מערכת ייעודית עם הרשאות, מסד נתונים, גיבויים ובקרות אבטחה מתאימות. מערכת כזו מתומחרת ומתוכננת בנפרד מאתר תדמית.",
  },
  {
    question: "למי שייכים האתר והדומיין?",
    answer:
      "הדומיין והתוכן של העסק נשארים בבעלות העסק. תנאי מסירת קובצי האתר והעברתו לאחר סיום ההתקשרות יוגדרו מראש ובכתב, לאחר שכל התשלומים הנדרשים הוסדרו.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        דילוג לתוכן
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="MamanDigital — דף הבית">
            <span>Maman</span>Digital
          </a>
          <nav aria-label="ניווט ראשי">
            <a href="#why">למה צריך אתר</a>
            <a href="#solutions">סוגי אתרים</a>
            <a href="#portfolio">תיק עבודות</a>
            <a href="#packages">המסלול</a>
            <a href="#process">תהליך</a>
          </nav>
          <a className="button button-small" href="#contact">
            בואו נדבר
            <Icon name="arrow" />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="kicker">
                <span /> אתר מקצועי בלי הוצאה גדולה מראש
              </p>
              <h1 id="hero-title">
                אתר תדמית לעסק
                <br />
                <em>ב־250 ₪ לחודש.</em>
              </h1>
              <p className="hero-summary">
                אנחנו בונים את האתר ללא דמי הקמה במסגרת מסלול אחסון ותחזוקה
                בהתחייבות לשנה. כך העסק מקבל נוכחות מקצועית בלי להוציא אלפי שקלים ביום הראשון.
              </p>
              <div className="hero-actions">
                <a className="button" href="#contact">
                  בדקו התאמה למסלול ב-WhatsApp
                  <Icon name="arrow" />
                </a>
                <a className="text-link" href="#portfolio">
                  צפייה בתיק עבודות <span aria-hidden="true">↓</span>
                </a>
              </div>
              <ul className="hero-notes" aria-label="יתרונות מרכזיים">
                <li><Icon name="check" /> ללא דמי הקמה</li>
                <li><Icon name="check" /> 250 ₪ לחודש</li>
                <li><Icon name="check" /> התחייבות ל־12 חודשים</li>
              </ul>
            </div>

            <div className="hero-visual" aria-label="המחשה של אתר עסקי במובייל">
              <div className="signal-card signal-top">
                <span className="signal-icon"><Icon name="gauge" /></span>
                <span><b>אתר מהיר</b><small>בנוי לביצועים</small></span>
              </div>
              <div className="phone-frame">
                <div className="phone-bar"><span /><span /><span /></div>
                <div className="phone-content">
                  <div className="mini-brand"><Icon name="spark" /> העסק שלכם</div>
                  <p>אתר מקצועי.<br />בלי הוצאה גדולה מראש.</p>
                  <span className="mini-button">בואו נדבר</span>
                  <div className="mini-lines"><span /><span /><span /></div>
                  <div className="mini-services">
                    <span>שירותים</span><span>אודות</span><span>יצירת קשר</span>
                  </div>
                </div>
              </div>
              <div className="lead-card">
                <span className="lead-dot" />
                <span><small>פנייה חדשה</small><b>לקוח מתעניין בשירות</b></span>
                <span className="lead-time">עכשיו</span>
              </div>
              <div className="signal-card signal-bottom">
                <span className="signal-icon"><Icon name="phone" /></span>
                <span><b>יצירת קשר פשוטה</b><small>ישירות מהאתר</small></span>
              </div>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="סוגי אתרים ומטרות עסקיות">
          <div>
            <span>ללא דמי הקמה</span><i />
            <span>250 ₪ לחודש</span><i />
            <span>אחסון ותחזוקה כלולים</span><i />
            <span>שנה ראשונה בהתחייבות</span>
          </div>
        </section>

        <section className="section section-dark" id="why" aria-labelledby="why-title">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="kicker kicker-light">נוכחות דיגיטלית בלי לדחות למחר</p>
                <h2 id="why-title">לקוחות בודקים את העסק. עכשיו המחיר לא צריך לעצור אתכם.</h2>
              </div>
              <p>
                לקוחות בודקים את העסק באינטרנט לפני שהם מתקשרים או קונים.
                כשעלות ההקמה מרגישה גבוהה, קל לוותר על האתר — ולכן בנינו מסלול שמחליף
                הוצאה גדולה מראש בתשלום חודשי קבוע וברור.
              </p>
            </div>

            <div className="benefit-grid">
              <article>
                <span className="number">01</span>
                <Icon name="spark" />
                <h3>יוצרים רושם מקצועי</h3>
                <p>עיצוב ותוכן שמציגים את העסק בצורה אמינה, ברורה ומדויקת.</p>
              </article>
              <article>
                <span className="number">02</span>
                <Icon name="phone" />
                <h3>מקלים על הלקוחות ליצור קשר</h3>
                <p>כפתורים ברורים ל-WhatsApp, לטלפון, לטופס או לרכישה — בהתאם לצורכי העסק.</p>
              </article>
              <article>
                <span className="number">03</span>
                <Icon name="code" />
                <h3>בונים בסיס לצמיחה</h3>
                <p>אתר מהיר ומאובטח שאפשר למדוד, לשפר ולהרחיב כשהעסק מתקדם.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section solutions-section" id="solutions" aria-labelledby="solutions-title">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <h2 id="solutions-title">לא כל עסק צריך את אותו סוג אתר.</h2>
              </div>
              <p>
                אנחנו מתאימים את סוג האתר למודל העסקי, לקהל ולמטרה שהוא נועד לקדם —
                פניות, מכירות או נוכחות מקצועית.
              </p>
            </div>

            <div className="solution-grid">
              {siteTypes.map((type) => (
                <article className="solution-card" key={type.name}>
                  <span className="solution-number">{type.number}</span>
                  <p className="solution-purpose">{type.purpose}</p>
                  <h3>{type.name}</h3>
                  <p>{type.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
          <div className="shell">
            <div className="section-heading split-heading portfolio-heading">
              <div>
                <p className="kicker">תיק עבודות</p>
                <h2 id="portfolio-title">כך נראה אתר שמותאם לעסק ולקהל שלו.</h2>
              </div>
              <p>
                כאן תוכלו להתרשם מהחשיבה, העיצוב וההתאמה של כל אתר לעסק שהוא
                נועד לשרת. נתחיל בפרויקט קונספט לענף השירותים.
              </p>
            </div>

            <article className="portfolio-card">
              <div className="portfolio-image">
                <Image
                  alt="חשמלאי מקצועי בודק לוח חשמל בדירה מודרנית"
                  fill
                  sizes="(max-width: 820px) 100vw, 56vw"
                  src="/images/alon-electric-hero.png"
                />
                <span className="portfolio-demo-label">אתר לדוגמה · לא לקוח אמיתי</span>
              </div>
              <div className="portfolio-copy">
                <span className="portfolio-index">פרויקט 01</span>
                <p className="portfolio-type">עמוד נחיתה לעסק שירות</p>
                <h3>אלון חשמל</h3>
                <p>
                  אתר חד־עמודי שמציג שירותי חשמל בצורה ברורה, מחזק את תחושת
                  המקצועיות ומוביל את המבקר ליצירת קשר בלי להעמיס עליו מידע.
                </p>
                <ul aria-label="מאפייני הפרויקט">
                  <li><Icon name="check" /> מבנה ממוקד לפניות</li>
                  <li><Icon name="check" /> התאמה מלאה למובייל</li>
                  <li><Icon name="check" /> שפה חזותית ייחודית לעסק</li>
                </ul>
                <Link className="button portfolio-button" href="/portfolio/alon-electric">
                  לצפייה באתר לדוגמה <Icon name="arrow" />
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="section packages-section" id="packages" aria-labelledby="packages-title">
          <div className="shell">
            <div className="section-heading centered-heading">
              <p className="kicker">מסלול פשוט ושקוף</p>
              <h2 id="packages-title">מתחילים בלי עלות הקמה גדולה.</h2>
              <p>
                אתר תדמית מקצועי, אחסון ותחזוקה במסלול חודשי אחד — עם היקף ברור ותנאים ידועים מראש.
              </p>
            </div>

            <article className="subscription-card">
              <div className="subscription-offer">
                <span className="popular-badge">לאתרי תדמית בהיקף מוגדר</span>
                <p className="package-eyebrow">האתר עלינו במסגרת המסלול</p>
                <h3>אתר תדמית + אחסון ותחזוקה</h3>
                <div className="subscription-price">
                  <span className="currency">₪</span>
                  <strong>250</strong>
                  <span>לחודש</span>
                </div>
                <p className="subscription-setup"><b>0 ₪ דמי הקמה</b> · התחייבות ל־12 חודשים</p>
                <p className="subscription-total">סך ההתחייבות בשנה הראשונה: 3,000 ₪</p>
                <a className="button" href="#contact">
                  בדקו אם המסלול מתאים לעסק <Icon name="arrow" />
                </a>
              </div>

              <div className="subscription-scope">
                <h3>מה כלול במסלול?</h3>
                <ul>
                  {planFeatures.map((feature) => (
                    <li key={feature}><Icon name="check" />{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="subscription-terms" aria-label="תנאי המסלול המרכזיים">
                <div>
                  <span>01</span>
                  <h3>השנה הראשונה</h3>
                  <p>התחייבות ל־12 תשלומים חודשיים. במקרה של יציאה מוקדמת משלמים את יתרת התקופה.</p>
                </div>
                <div>
                  <span>02</span>
                  <h3>אחרי השנה הראשונה</h3>
                  <p>ממשיכים ב־250 ₪ לחודש ללא התחייבות נוספת, וניתן להפסיק בכל עת.</p>
                </div>
                <div>
                  <span>03</span>
                  <h3>מה מתומחר בנפרד?</h3>
                  <p>דומיין, צילום, מיתוג, כתיבה מקצועית, שירותים חיצוניים ואתרים או מערכות מורכבים.</p>
                </div>
              </div>
            </article>
            <p className="pricing-note">
              המסלול מיועד לאתרי תדמית בהיקף המוגדר ואינו מתאים לחנויות אונליין, אזורים אישיים,
              מערכות הזמנות, מלאי או פיתוחים מורכבים. היקף האתר, תנאי ההעברה, מע״מ וכל עלות חיצונית
              יוגדרו במפורש בהצעה ובהסכם לפני תחילת העבודה.
            </p>
          </div>
        </section>

        <section className="section process-section" id="process" aria-labelledby="process-title">
          <div className="shell process-layout">
            <div className="process-intro">
              <h2 id="process-title">לומדים את העסק ובונים עבורו אתר המותאם למטרותיו.</h2>
              <p>
                התהליך נועד להבין מה הלקוחות שלכם צריכים לראות ומה האתר צריך
                להשיג, כדי שכל החלטה בעיצוב ובתוכן תשרת מטרה עסקית ברורה.
              </p>
              <a className="text-link" href="#contact">קובעים פגישת אפיון <Icon name="arrow" /></a>
            </div>
            <ol className="process-list">
              <li><span>01</span><div><h3>פגישת אפיון ולמידה</h3><p>מכירים את העסק, קהל היעד והשירותים, ומגדירים מה האתר צריך להשיג: פניות, מכירות או חיזוק התדמית.</p></div></li>
              <li><span>02</span><div><h3>מתאימים את האתר לעסק</h3><p>בוחרים דף נחיתה, אתר תדמית או חנות אונליין, ובונים מבנה, תוכן ועיצוב התומכים במטרה שהוגדרה.</p></div></li>
              <li><span>03</span><div><h3>עוברים יחד ומדייקים</h3><p>מקבלים גרסת תצוגה, עוברים עליה יחד ומבצעים את השינויים הנדרשים כדי לדייק את האתר לעסק וללקוחותיו.</p></div></li>
              <li><span>04</span><div><h3>בודקים, משפרים ומשיקים</h3><p>בודקים את התצוגה במובייל, המהירות, הנגישות, הטפסים והאבטחה, ולאחר האישור מעלים את האתר לאוויר.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section care-section" aria-labelledby="care-title">
          <div className="shell care-card">
            <div className="care-copy">
              <p className="kicker kicker-light">כלול בתשלום החודשי</p>
              <h2 id="care-title">שומרים על האתר מהיר, מעודכן ומתפקד.</h2>
              <p>
                מסלול התחזוקה כולל יותר מאחסון. אנחנו עוקבים אחר תקינות האתר,
                מטפלים בעדכוני אבטחה ותומכים בשינויי תוכן קטנים לאורך הדרך.
              </p>
            </div>
            <div className="care-features">
              <div><Icon name="gauge" /><span><b>ביצועים ותקינות</b><small>בדיקות מהירות, מעקב אחר תקינות האתר וטיפול בתקלות</small></span></div>
              <div><Icon name="lock" /><span><b>אבטחה</b><small>תעודת SSL, הצפנה ועדכוני אבטחה שוטפים</small></span></div>
              <div><Icon name="tools" /><span><b>תחזוקה ועדכונים</b><small>שדרוגי מערכת, עדכוני תוכן ותמיכה שוטפת</small></span></div>
              <div><Icon name="code" /><span><b>גיבוי ושחזור</b><small>הקוד מגובה ונשמר באופן מאובטח, עם אפשרות לשחזר גרסאות ישנות במידת הצורך</small></span></div>
            </div>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-title">
          <div className="shell faq-layout">
            <div className="section-heading">
              <p className="kicker">מידע לפני שמתחילים</p>
              <h2 id="faq-title">תשובות לשאלות חשובות.</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary><span>{faq.question}</span><i aria-hidden="true" /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-grid" aria-hidden="true" />
          <div className="shell contact-layout">
            <div>
              <p className="kicker kicker-light">מתחילים בלי הוצאה גדולה מראש</p>
              <h2 id="contact-title">בואו נבדוק אם העסק מתאים למסלול.</h2>
            </div>
            <div className="contact-card">
              <span className="demo-badge">פרטים לדוגמה — יוחלפו לפני ההשקה</span>
              <p>ספרו לנו על העסק, השירותים והמטרות. נבדוק אם אתר תדמית במסגרת המסלול מתאים לצורך שלכם ונציג את ההיקף והתנאים בצורה ברורה.</p>
              <div className="contact-links">
                <span aria-label="מספר טלפון להדגמה"><Icon name="phone" />050-000-0000</span>
                <span aria-label="כתובת אימייל להדגמה"><Icon name="spark" />hello@mamandigital.example</span>
              </div>
              <span className="button button-disabled" aria-disabled="true">
                WhatsApp יחובר לפני ההשקה <Icon name="arrow" />
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-main">
          <a className="brand brand-footer" href="#top"><span>Maman</span>Digital</a>
          <p>אתרים שמחזקים נוכחות ומקדמים תוצאות עסקיות.</p>
          <a href="#top">חזרה למעלה ↑</a>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} MamanDigital</span>
          <span>אתר הדגמה · פרטי קשר ומדיניות יעודכנו לפני השקה ציבורית</span>
        </div>
      </footer>
    </>
  );
}
