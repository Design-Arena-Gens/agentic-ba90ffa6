'use client';

import { useState } from 'react';
import styles from './page.module.css';

interface Verse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

const sampleVerses: Verse[] = [
  {
    book: "Псалом",
    chapter: 23,
    verse: 1,
    text: "Господь — Пастырь мой; я ни в чем не буду нуждаться"
  },
  {
    book: "Иоанн",
    chapter: 3,
    verse: 16,
    text: "Ибо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий верующий в Него, не погиб, но имел жизнь вечную"
  },
  {
    book: "Притчи",
    chapter: 3,
    verse: 5,
    text: "Надейся на Господа всем сердцем твоим, и не полагайся на разум твой"
  }
];

export default function Home() {
  const [selectedVerse, setSelectedVerse] = useState<Verse>(sampleVerses[0]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.sunIcon}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="20" fill="#C79A56" opacity="0.3"/>
              <circle cx="40" cy="40" r="12" fill="#C79A56"/>
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x1 = 40 + Math.cos(angle) * 25;
                const y1 = 40 + Math.sin(angle) * 25;
                const x2 = 40 + Math.cos(angle) * 35;
                const y2 = 40 + Math.sin(angle) * 35;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#C79A56"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>
          </div>
          <h1 className={styles.title}>Свет Священного Писания</h1>
          <p className={styles.subtitle}>Открывайте мудрость и покой в Слове Божием</p>
        </div>
      </section>

      {/* Search Section */}
      <section className={styles.searchSection}>
        <div className={styles.container}>
          <div className={styles.searchBox}>
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#6E7E5F" strokeWidth="2"/>
              <line x1="12.5" y1="12.5" x2="17.5" y2="17.5" stroke="#6E7E5F" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Поиск по Писанию..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>
      </section>

      {/* Featured Verse Section */}
      <section className={styles.verseSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Стих дня</h2>
          <div className={styles.verseCard}>
            <div className={styles.verseQuote}>
              <svg className={styles.quoteIcon} width="40" height="30" viewBox="0 0 40 30" fill="none">
                <path d="M0 30V15C0 6.716 6.716 0 15 0v5C9.477 5 5 9.477 5 15v3h10v12H0zM25 30V15c0-8.284 6.716-15 15-15v5c-5.523 0-10 4.477-10 10v3h10v12H25z" fill="#C79A56" opacity="0.2"/>
              </svg>
              <p className={styles.verseText}>{selectedVerse.text}</p>
            </div>
            <p className={styles.verseReference}>
              {selectedVerse.book} {selectedVerse.chapter}:{selectedVerse.verse}
            </p>
          </div>
        </div>
      </section>

      {/* Reading Plans Section */}
      <section className={styles.plansSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Планы чтения</h2>
          <div className={styles.plansGrid}>
            <div className={styles.planCard}>
              <div className={styles.planIcon}>📖</div>
              <h3 className={styles.planTitle}>Библия за год</h3>
              <p className={styles.planDescription}>Читайте всю Библию за 365 дней</p>
              <button className={styles.planButton}>Начать</button>
            </div>

            <div className={styles.planCard}>
              <div className={styles.planIcon}>✝️</div>
              <h3 className={styles.planTitle}>Евангелия</h3>
              <p className={styles.planDescription}>Погрузитесь в жизнь Христа</p>
              <button className={styles.planButton}>Начать</button>
            </div>

            <div className={styles.planCard}>
              <div className={styles.planIcon}>🕊️</div>
              <h3 className={styles.planTitle}>Псалмы и Притчи</h3>
              <p className={styles.planDescription}>Мудрость и хвала каждый день</p>
              <button className={styles.planButton}>Начать</button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Books */}
      <section className={styles.booksSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Книги Библии</h2>
          <div className={styles.booksGrid}>
            {['Бытие', 'Исход', 'Псалмы', 'Притчи', 'Исаия', 'Матфей', 'Иоанн', 'Римлянам', 'Откровение'].map((book) => (
              <button key={book} className={styles.bookButton}>
                {book}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>О проекте</h4>
              <p className={styles.footerText}>
                Свет Священного Писания - платформа для изучения и медитации над Словом Божиим
              </p>
            </div>
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Ресурсы</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#">Планы чтения</a></li>
                <li><a href="#">Комментарии</a></li>
                <li><a href="#">Аудио Библия</a></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Контакты</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Поддержка</a></li>
                <li><a href="#">Молитвенная</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2024 Свет Священного Писания. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
