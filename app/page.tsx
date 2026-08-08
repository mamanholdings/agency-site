import { Icon } from "./_components/icon";

const packages = [
  {
    name: "נוכחות",
    eyebrow: "להתחיל נכון",
    setup: "1,500",
    monthly: "150",
    description: "עמוד ממוקד שמציג את העסק ומוביל לקוחות לשיחה.",
    features: [
      "עמוד אחד, עד 5 מקטעים",
      "עיצוב מלא למובייל",
      "כפתורי טלפון ו-WhatsApp",
      "SEO טכני בסיסי",
      "סבב תיקונים אחד",
    ],
  },
  {
    name: "מקצועי",
    eyebrow: "הבחירה המרכזית",
    setup: "2,500",
    monthly: "200",
    description: "אתר שלם לעסק שרוצה להיראות רציני ולקבל פניות מסודרות.",
    featured: true,
    features: [
      "עד 5 עמודים",
      "עיצוב RTL מותאם אישית",
      "טופס פנייה עם הגנת ספאם",
      "חיבור למדידה וניתוח תנועה",
      "SEO טכני ומבנה תוכן",
      "2 סבבי תיקונים",
    ],
  },
  {
    name: "צמיחה",
    eyebrow: "לעסק בתנועה",
    setup: "4,500",
    monthly: "350",
    description: "תשתית רחבה יותר לשירותים, אזורים ותהליכי פנייה מתקדמים.",
    features: [
      "עד 8 עמודים",
      "עמודי שירות או אזורי פעילות",
      "חיבור ליומן או CRM בסיסי",
      "דוח מדידה חודשי",
      "עדיפות בטיפול השוטף",
      "3 סבבי תיקונים",
    ],
  },
];

const projects = [
  {
    trade: "חשמלאי",
    name: "זרם בטוח",
    line: "זמינות ברורה, שירותים מסודרים ודרך קצרה לפנייה.",
    className: "project-electric",
    icon: "bolt" as const,
  },
  {
    trade: "אינסטלטור",
    name: "קו נקי",
    line: "אתר שירות מקומי עם היררכיה פשוטה ואמון מהרגע הראשון.",
    className: "project-water",
    icon: "tools" as const,
  },
  {
    trade: "טכנאי מיזוג",
    name: "מזג מדויק",
    line: "נוכחות דיגיטלית נקייה שמוכנה לעונת השיא.",
    className: "project-air",
    icon: "spark" as const,
  },
];

const faqs = [
  {
    question: "כמה זמן לוקח לבנות אתר?",
    answer:
      "אתר תדמית ממוקד יכול להיות מוכן בדרך כלל בתוך 2–4 שבועות מרגע שכל התוכן והחומרים מתקבלים. לוח הזמנים הסופי נקבע לפי היקף הפרויקט וקצב המשוב.",
  },
  {
    question: "מה כולל התשלום החודשי?",
    answer:
      "אחסון ב-Vercel, SSL, ניטור זמינות וטפסים, עדכוני אבטחה ותלויות, תמיכה וזמן מוגדר לשינויי תוכן קטנים. ההיקף המדויק יופיע בהצעה ובהסכם.",
  },
  {
    question: "האם האתר יופיע ראשון בגוגל?",
    answer:
      "אי אפשר להבטיח דירוג. אנחנו בונים בסיס טכני נכון, מהיר ונגיש, ומארגנים את התוכן כך שמנועי חיפוש ולקוחות יבינו את העסק. קידום שוטף הוא שירות נפרד.",
  },
  {
    question: "אפשר להוסיף בעתיד מערכת הזמנות או מלאי?",
    answer:
      "כן. מתחילים באתר תדמית פשוט ומהיר, וכשיש צורך עסקי אמיתי אפשר לתכנן מערכת נפרדת עם הרשאות, מסד נתונים, גיבויים ובקרות אבטחה מתאימות.",
  },
  {
    question: "למי שייכים האתר והדומיין?",
    answer:
      "הדומיין צריך להיות בבעלות העסק. הבעלות על הקוד, התוכן ושירותי הצד השלישי תוגדר מראש ובכתב, ללא הפתעות.",
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
            <a href="#why">למה אנחנו</a>
            <a href="#packages">חבילות</a>
            <a href="#work">עבודות</a>
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
                <span /> אתרים לבעלי מקצוע בכל הארץ
              </p>
              <h1 id="hero-title">
                אתר שעובד קשה
                <br />
                <em>כמו העסק שלך.</em>
              </h1>
              <p className="hero-summary">
                MamanDigital בונה אתרי תדמית חדים, מהירים ומותאמים לנייד
                לטכנאים, חשמלאים, אינסטלטורים ובעלי מקצוע שרוצים להפוך
                חיפושים לפניות.
              </p>
              <div className="hero-actions">
                <a className="button" href="#contact">
                  קבלו הצעת מחיר ב-WhatsApp
                  <Icon name="arrow" />
                </a>
                <a className="text-link" href="#packages">
                  צפייה בחבילות <span aria-hidden="true">↓</span>
                </a>
              </div>
              <ul className="hero-notes" aria-label="יתרונות מרכזיים">
                <li><Icon name="check" /> עברית ו-RTL</li>
                <li><Icon name="check" /> מותאם למובייל</li>
                <li><Icon name="check" /> מהיר ומאובטח</li>
              </ul>
            </div>

            <div className="hero-visual" aria-label="המחשה של אתר לבעל מקצוע">
              <div className="signal-card signal-top">
                <span className="signal-icon"><Icon name="gauge" /></span>
                <span><b>אתר מהיר</b><small>בנוי לביצועים</small></span>
              </div>
              <div className="phone-frame">
                <div className="phone-bar"><span /><span /><span /></div>
                <div className="phone-content">
                  <div className="mini-brand"><Icon name="bolt" /> החשמלאי שלי</div>
                  <p>שירות מהיר.<br />עבודה בטוחה.</p>
                  <span className="mini-button">התקשרו עכשיו</span>
                  <div className="mini-lines"><span /><span /><span /></div>
                  <div className="mini-services">
                    <span>תיקונים</span><span>התקנות</span><span>חירום</span>
                  </div>
                </div>
              </div>
              <div className="lead-card">
                <span className="lead-dot" />
                <span><small>פנייה חדשה</small><b>לקוח מאזור המרכז</b></span>
                <span className="lead-time">עכשיו</span>
              </div>
              <div className="signal-card signal-bottom">
                <span className="signal-icon"><Icon name="phone" /></span>
                <span><b>מסלול קצר</b><small>מחיפוש לשיחה</small></span>
              </div>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="תחומי שירות">
          <div>
            <span>חשמלאים</span><i />
            <span>אינסטלטורים</span><i />
            <span>טכנאים</span><i />
            <span>מתקינים</span><i />
            <span>בעלי מקצוע</span><i />
            <span>עסקים מקומיים</span>
          </div>
        </section>

        <section className="section section-dark" id="why" aria-labelledby="why-title">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="kicker kicker-light">לא עוד כרטיס ביקור דיגיטלי</p>
                <h2 id="why-title">אתר עם עבודה לעשות.</h2>
              </div>
              <p>
                הלקוח כבר מחפש פתרון. האתר צריך להסביר מהר מי אתם, לבנות
                אמון ולהפוך את הצעד הבא לפשוט.
              </p>
            </div>

            <div className="benefit-grid">
              <article>
                <span className="number">01</span>
                <Icon name="spark" />
                <h3>נראים מקצועיים</h3>
                <p>שפה חזותית ברורה, תוכן מדויק וחוויה שמתאימה לעסק אמיתי.</p>
              </article>
              <article>
                <span className="number">02</span>
                <Icon name="phone" />
                <h3>מובילים לפעולה</h3>
                <p>מסלול קצר לטלפון, WhatsApp או טופס — בלי להעמיס על הלקוח.</p>
              </article>
              <article>
                <span className="number">03</span>
                <Icon name="code" />
                <h3>בנויים לטווח ארוך</h3>
                <p>קוד נקי, מעט תלות במערכות מיותרות ותשתית שאפשר להרחיב.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section packages-section" id="packages" aria-labelledby="packages-title">
          <div className="shell">
            <div className="section-heading centered-heading">
              <p className="kicker">מחיר ברור. היקף ברור.</p>
              <h2 id="packages-title">בוחרים את החבילה שמתאימה לעסק.</h2>
              <p>מתחילים ממוקד, בלי תוספות שלא באמת צריך.</p>
            </div>

            <div className="package-grid">
              {packages.map((item) => (
                <article className={`package-card${item.featured ? " package-featured" : ""}`} key={item.name}>
                  {item.featured ? <span className="popular-badge">הכי מתאים לרוב העסקים</span> : null}
                  <p className="package-eyebrow">{item.eyebrow}</p>
                  <h3>{item.name}</h3>
                  <p className="package-description">{item.description}</p>
                  <div className="price-row">
                    <span className="currency">₪</span>
                    <strong>{item.setup}</strong>
                    <span>הקמה</span>
                  </div>
                  <p className="monthly">+ ₪{item.monthly} לחודש אחסון ותחזוקה</p>
                  <ul>
                    {item.features.map((feature) => (
                      <li key={feature}><Icon name="check" />{feature}</li>
                    ))}
                  </ul>
                  <a className={item.featured ? "button" : "button button-outline"} href="#contact">
                    בחירת החבילה <Icon name="arrow" />
                  </a>
                </article>
              ))}
            </div>
            <p className="pricing-note">
              המחירים הם בסיס לתכנון ואינם כוללים דומיין, צילום, מיתוג, כתיבה מקצועית,
              מערכות מסחר או אינטגרציות בתשלום. היקף סופי ומע״מ יוגדרו בהצעה מסודרת.
            </p>
          </div>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="kicker">כיוון, לא תבנית</p>
                <h2 id="work-title">כל מקצוע מקבל במה משלו.</h2>
              </div>
              <p>
                אלה פרויקטי קונספט שמדגימים כיוונים אפשריים. הם אינם לקוחות או
                תוצאות מסחריות אמיתיות.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => (
                <article className={`project-card ${project.className}`} key={project.name}>
                  <div className="project-topline">
                    <span>פרויקט קונספט</span>
                    <span>0{index + 1}</span>
                  </div>
                  <div className="project-preview">
                    <div className="project-browser">
                      <span /><span /><span />
                    </div>
                    <div className="project-logo"><Icon name={project.icon} />{project.name}</div>
                    <div className="project-title">שירות שאפשר<br />לסמוך עליו.</div>
                    <span className="project-button">דברו איתנו</span>
                    <div className="project-shape" />
                  </div>
                  <div className="project-copy">
                    <div><span>{project.trade}</span><h3>{project.name}</h3></div>
                    <p>{project.line}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process" aria-labelledby="process-title">
          <div className="shell process-layout">
            <div className="process-intro">
              <p className="kicker">פשוט לעבוד יחד</p>
              <h2 id="process-title">מתקדמים שלב־שלב, בלי ערפל.</h2>
              <p>
                אתם מכירים את העסק. אנחנו הופכים את הידע הזה לאתר ברור,
                מהיר ונוח לתחזוקה.
              </p>
              <a className="text-link" href="#contact">מתחילים בשיחה <Icon name="arrow" /></a>
            </div>
            <ol className="process-list">
              <li><span>01</span><div><h3>מגדירים מטרה</h3><p>קהל, שירותים, אזור פעילות והפעולה החשובה ביותר.</p></div></li>
              <li><span>02</span><div><h3>בונים כיוון</h3><p>מבנה, תוכן ועיצוב מוצגים בגרסת Preview פרטית.</p></div></li>
              <li><span>03</span><div><h3>מדייקים ובודקים</h3><p>מובייל, נגישות, מהירות, טפסים ואבטחה עוברים בדיקה.</p></div></li>
              <li><span>04</span><div><h3>עולים ומטפלים</h3><p>הגרסה המאושרת עולה לאוויר ונכנסת למסלול תחזוקה.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section care-section" aria-labelledby="care-title">
          <div className="shell care-card">
            <div className="care-copy">
              <p className="kicker kicker-light">אחרי ההשקה</p>
              <h2 id="care-title">יש מי ששומר על האתר.</h2>
              <p>
                אחסון הוא רק חלק מהעניין. מסלול התחזוקה נועד לשמור על האתר
                זמין, מעודכן ומוכן לשינויים קטנים בלי לפתוח פרויקט מחדש.
              </p>
            </div>
            <div className="care-features">
              <div><Icon name="gauge" /><span><b>ניטור</b><small>זמינות וטפסים</small></span></div>
              <div><Icon name="lock" /><span><b>אבטחה</b><small>HTTPS ועדכונים</small></span></div>
              <div><Icon name="tools" /><span><b>תחזוקה</b><small>שינויים קטנים ותמיכה</small></span></div>
              <div><Icon name="code" /><span><b>גרסאות</b><small>קוד מתועד ושחזור</small></span></div>
            </div>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-title">
          <div className="shell faq-layout">
            <div className="section-heading">
              <p className="kicker">שאלות לפני שמתחילים</p>
              <h2 id="faq-title">קצר ולעניין.</h2>
              <p>כל מה שחשוב לדעת לפני שמוציאים אתר לדרך.</p>
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
              <p className="kicker kicker-light">הצעד הבא פשוט</p>
              <h2 id="contact-title">בואו נבנה לעסק נוכחות שעובדת.</h2>
            </div>
            <div className="contact-card">
              <span className="demo-badge">פרטי הדגמה — יחוברו לפני ההשקה</span>
              <p>ספרו לנו מה אתם עושים, איפה אתם עובדים ומה האתר צריך להשיג.</p>
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
          <p>אתרים שעובדים בשביל בעלי מקצוע.</p>
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
