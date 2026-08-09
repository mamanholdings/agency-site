import { Icon } from "./_components/icon";

const packages = [
  {
    name: "דף נחיתה",
    eyebrow: "להצעה ממוקדת",
    setup: "1,500",
    monthly: "150",
    description: "עמוד ממוקד לשירות, קמפיין או הצעה אחת, עם מסלול ברור לפנייה.",
    features: [
      "עמוד אחד, עד 5 מקטעים",
      "עיצוב מלא למובייל",
      "כפתורי טלפון ו-WhatsApp",
      "התאמה טכנית בסיסית למנועי חיפוש",
      "סבב תיקונים אחד",
    ],
  },
  {
    name: "אתר תדמית",
    eyebrow: "הבחירה לעסקים",
    setup: "2,500",
    monthly: "200",
    description: "אתר מלא שמציג את העסק, השירותים והיתרונות ובונה אמון מול לקוחות.",
    featured: true,
    features: [
      "עד 5 עמודים",
      "עיצוב מותאם אישית לעברית ולמובייל",
      "טופס פנייה עם הגנת ספאם",
      "חיבור למדידה וניתוח תנועה",
      "התאמה טכנית למנועי חיפוש ומבנה תוכן",
      "2 סבבי תיקונים",
    ],
  },
  {
    name: "אתר תדמית מורחב",
    eyebrow: "לעסק עם היקף תוכן רחב",
    setup: "4,500",
    monthly: "350",
    description: "פתרון רחב לעסק עם כמה שירותים, קהלים או תהליכי פנייה.",
    features: [
      "עד 8 עמודים",
      "עמודי שירות או אזורי פעילות",
      "חיבור ליומן או למערכת ניהול לקוחות",
      "דוח מדידה חודשי",
      "עדיפות בטיפול השוטף",
      "3 סבבי תיקונים",
    ],
  },
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
    purpose: "למכירת מוצרים באינטרנט",
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
      "אחסון האתר, תעודת SSL, בדיקות מהירות וזמינות, טיפול בתקלות, שדרוגי מערכת, עדכוני אבטחה, תמיכה והיקף מוגדר של שינויי תוכן קטנים. הפירוט המדויק יופיע בהצעה ובהסכם.",
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
            <a href="#why">למה צריך אתר</a>
            <a href="#solutions">סוגי אתרים</a>
            <a href="#packages">חבילות</a>
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
                <span /> אתרים שמקדמים עסקים
              </p>
              <h1 id="hero-title">
                העסק שלכם ראוי לאתר
                <br />
                <em>שמביא תוצאות.</em>
              </h1>
              <p className="hero-summary">
                אנחנו מתמחים בבניית אתרים מותאמים לעסקים שרוצים להיראות
                מקצועיים, להגיע ללקוחות הנכונים ולעודד פניות ומכירות.
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
                <li><Icon name="check" /> מתאים למגוון עסקים</li>
                <li><Icon name="check" /> מותאם למובייל</li>
                <li><Icon name="check" /> מהיר ומאובטח</li>
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
                  <p>נוכחות מקצועית.<br />תוצאות עסקיות.</p>
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
            <span>דפי נחיתה</span><i />
            <span>אתרי תדמית</span><i />
            <span>חנויות אונליין</span><i />
            <span>נוכחות דיגיטלית</span>
          </div>
        </section>

        <section className="section section-dark" id="why" aria-labelledby="why-title">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="kicker kicker-light">נוכחות דיגיטלית היא חלק מהעסק</p>
                <h2 id="why-title">האתר משפיע על ההחלטה לפנות אליכם.</h2>
              </div>
              <p>
                לקוחות בודקים את העסק באינטרנט לפני שהם מתקשרים או קונים.
                כשאין אתר מקצועי, קשה יותר לבנות אמון — והזדמנויות עוברות למתחרים.
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

        <section className="section packages-section" id="packages" aria-labelledby="packages-title">
          <div className="shell">
            <div className="section-heading centered-heading">
              <h2 id="packages-title">בוחרים אתר לפי המטרות והיקף העבודה.</h2>
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
                    לקבלת הצעה <Icon name="arrow" />
                  </a>
                </article>
              ))}
            </div>
            <p className="pricing-note">
              המחירים המוצגים הם נקודת פתיחה לתמחור ואינם כוללים דומיין, צילום, מיתוג, כתיבה מקצועית,
              מערכות מסחר או חיבורים לשירותים חיצוניים בתשלום. חנות אונליין מתוכננת ומתומחרת בנפרד
              לפי הקטלוג, הסליקה, המשלוחים והתפעול. המחיר הסופי, היקף העבודה ומע״מ יוגדרו בהצעה מסודרת.
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
              <p className="kicker kicker-light">אחרי ההשקה</p>
              <h2 id="care-title">האתר נשאר מהיר, מעודכן וזמין.</h2>
              <p>
                מסלול התחזוקה כולל יותר מאחסון. אנחנו עוקבים אחר הזמינות,
                מטפלים בעדכוני אבטחה ותומכים בשינויי תוכן קטנים לאורך הדרך.
              </p>
            </div>
            <div className="care-features">
              <div><Icon name="gauge" /><span><b>ביצועים וזמינות</b><small>בדיקות מהירות, מעקב אחר זמינות וטיפול בתקלות</small></span></div>
              <div><Icon name="lock" /><span><b>אבטחה</b><small>תעודת SSL, הצפנה ועדכוני אבטחה שוטפים</small></span></div>
              <div><Icon name="tools" /><span><b>תחזוקה ועדכונים</b><small>שדרוגי מערכת, עדכוני תוכן ותמיכה שוטפת</small></span></div>
              <div><Icon name="code" /><span><b>גיבוי ושחזור</b><small>הקוד מגובה ונשמר באופן מאובטח, עם אפשרות לשחזר גרסה יציבה</small></span></div>
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
              <p className="kicker kicker-light">מתחילים בהיכרות</p>
              <h2 id="contact-title">בואו נבין איזה אתר יקדם את העסק שלכם.</h2>
            </div>
            <div className="contact-card">
              <span className="demo-badge">פרטים לדוגמה — יוחלפו לפני ההשקה</span>
              <p>ספרו לנו על העסק, הלקוחות והמטרות. נחזור אליכם כדי להבין את הצורך ולהציע את הפתרון המתאים.</p>
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
