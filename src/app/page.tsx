"use client";
import Script from "next/script";

const showLegal = (page: string) => {
  (window as unknown as { showLegalPage?: (p: string) => void }).showLegalPage?.(
    page
  );
};

const goToMain = () => {
  (window as unknown as { goToMainPage?: () => void }).goToMainPage?.();
};

const dismissWelcome = () => {
  (window as unknown as { dismissWelcome?: () => void }).dismissWelcome?.();
};

export default function Home() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js" />
      <Script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js" />
      <div id="welcome-overlay" className="welcome-overlay hidden">
        <div className="welcome-content">
          <h2>Willkommen zum Vertretungsplan!</h2>
          <p>
            Hier finden Sie alle aktuellen Vertretungen und Änderungen für Ihre
            Klasse.
          </p>
          <button className="btn btn--primary" onClick={dismissWelcome}>Los geht&apos;s!</button>
        </div>
      </div>

      <div id="mobile-menu-overlay" className="mobile-menu-overlay hidden">
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <h3>Menü</h3>
            <button id="close-mobile-menu" className="mobile-menu-close">
              <i data-lucide="x"></i>
            </button>
          </div>
          <div className="mobile-menu-content">
            <div className="calendar-widget">
              <h4>Datum auswählen</h4>
              <div className="calendar-container">
                <div className="calendar-header">
                  <button id="prev-month-mobile" className="calendar-nav">
                    <i data-lucide="chevron-left"></i>
                  </button>
                  <span id="current-month-mobile" className="calendar-month" />
                  <button id="next-month-mobile" className="calendar-nav">
                    <i data-lucide="chevron-right"></i>
                  </button>
                </div>
                <div id="calendar-mobile" className="calendar-grid" />
              </div>
            </div>

            <button id="show-substitutions-mobile" className="btn btn--primary btn--full-width">
              <span className="button-text">Vertretungen anzeigen</span>
              <span className="loading-spinner hidden">
                <i data-lucide="loader-2"></i>
              </span>
            </button>

            <div className="search-container">
              <div className="search-input-wrapper">
                <i data-lucide="search" className="search-icon"></i>
                <input
                  type="text"
                  id="search-input-mobile"
                  className="form-control search-input"
                  placeholder="Klasse, Lehrer, Fach oder Raum suchen..."
                />
              </div>
            </div>

            <div className="filter-section">
              <h4>Kategorien</h4>
              <div id="category-filters-mobile" className="category-filters" />
            </div>

            <div className="legal-links">
              <a href="#impressum" onClick={() => showLegal('impressum')}>Impressum</a>
              <a href="#datenschutz" onClick={() => showLegal('datenschutz')}>Datenschutz</a>
            </div>
          </div>
        </div>
      </div>

      <div className="app-layout">
        <header className="app-header">
          <div className="header-content">
            <button id="mobile-menu-toggle" className="mobile-menu-toggle">
              <i data-lucide="menu"></i>
            </button>
              <h1
                className="app-title clickable-title"
                onClick={goToMain}
              tabIndex={0}
              role="button"
              aria-label="Zur Hauptseite"
            >
              Vertretungsplan
            </h1>
            <div className="header-actions">
              <nav className="header-nav">
                  <a href="#impressum" onClick={() => showLegal('impressum')}>Impressum</a>
                  <a href="#datenschutz" onClick={() => showLegal('datenschutz')}>Datenschutz</a>
              </nav>
              <button id="theme-toggle" className="theme-toggle">
                <i data-lucide="sun" className="theme-icon theme-icon--light"></i>
                <i data-lucide="moon" className="theme-icon theme-icon--dark"></i>
                <i data-lucide="monitor" className="theme-icon theme-icon--system"></i>
              </button>
            </div>
          </div>
        </header>

        <div className="app-content">
          <aside className="sidebar">
            <div className="calendar-widget">
              <h3>Datum auswählen</h3>
              <div className="calendar-container">
                <div className="calendar-header">
                  <button id="prev-month" className="calendar-nav">
                    <i data-lucide="chevron-left"></i>
                  </button>
                  <span id="current-month" className="calendar-month" />
                  <button id="next-month" className="calendar-nav">
                    <i data-lucide="chevron-right"></i>
                  </button>
                </div>
                <div id="calendar" className="calendar-grid" />
              </div>
            </div>

            <button id="show-substitutions" className="btn btn--primary btn--full-width">
              <span className="button-text">Vertretungen anzeigen</span>
              <span className="loading-spinner hidden">
                <i data-lucide="loader-2"></i>
              </span>
            </button>

            <div className="search-container">
              <div className="search-input-wrapper">
                <i data-lucide="search" className="search-icon"></i>
                <input
                  type="text"
                  id="search-input"
                  className="form-control search-input"
                  placeholder="Klasse, Lehrer, Fach oder Raum suchen..."
                />
              </div>
            </div>

            <div className="filter-section">
              <h3>Kategorien</h3>
              <div id="category-filters" className="category-filters" />
            </div>
          </aside>

          <main className="main-content">
            <div id="main-view" className="main-view">
              <div className="content-header">
                <h2 id="content-title">Vertretungen für heute</h2>
                <div id="search-results-info" className="search-results-info hidden"></div>
              </div>

              <div id="loading-state" className="loading-state hidden">
                <div className="skeleton-cards">
                  <div className="skeleton-card"></div>
                  <div className="skeleton-card"></div>
                  <div className="skeleton-card"></div>
                  <div className="skeleton-card"></div>
                </div>
              </div>

              <div id="error-state" className="error-state hidden">
                <div className="error-message">
                  <i data-lucide="alert-circle"></i>
                  <h3>Fehler beim Laden der Vertretungen</h3>
                  <p id="error-text">Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.</p>
                  <button id="retry-button" className="btn btn--primary">Erneut versuchen</button>
                </div>
              </div>

              <div id="substitutions-grid" className="substitutions-grid"></div>

              <div id="no-results" className="no-results hidden">
                <i data-lucide="search"></i>
                <h3>Keine Vertretungen gefunden</h3>
                <p>Für die gewählten Filter wurden keine Vertretungen gefunden.</p>
              </div>
            </div>

            <div id="legal-view" className="legal-view hidden">
              <div className="legal-header">
                <button id="back-to-main" className="btn btn--outline">
                  <i data-lucide="arrow-left"></i>
                  Zurück
                </button>
              </div>
              <div id="legal-content" className="legal-content"></div>
            </div>
          </main>
        </div>
      </div>

      <Script src="/app.js"></Script>
    </>
  );
}
