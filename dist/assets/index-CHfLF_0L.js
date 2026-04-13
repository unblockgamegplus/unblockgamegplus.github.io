(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){return e.gameUrl||`https://inkyedu118.github.io/g50/class-${e.id}/`}function t(e){return`/img/class-${e.id}.webp`}var n={Popular:`🔥`,New:`🆕`,Running:`🏃`,"3D":`🎲`,Shooting:`🎯`,Multiplayer:`👥`,Racing:`🏁`,Moto:`🏍️`,Stickman:`🥊`,Adventure:`🗺️`,Puzzle:`🧩`,Animal:`🐾`,Platform:`🕹️`,Simulation:`🖥️`,Management:`🏗️`,Survival:`🌿`,Strategy:`♟️`,Board:`♜`,Girls:`💖`,"2 Player":`🤝`,Car:`🏎️`,Sports:`⚽`,Skill:`🧠`},r=[{id:`all`,emoji:`🎮`,label:`🎮 All Games`,shortLabel:`All Games`},{id:`Popular`,emoji:`🔥`,label:`🔥 Popular`,shortLabel:`Popular`},{id:`New`,emoji:`🆕`,label:`🆕 New`,shortLabel:`New`},{id:`Skill`,emoji:`🧠`,label:`🧠 Skill`,shortLabel:`Skill`},{id:`Running`,emoji:`🏃`,label:`🏃 Running`,shortLabel:`Running`},{id:`Adventure`,emoji:`🗺️`,label:`🗺️ Adventure`,shortLabel:`Adventure`},{id:`Platform`,emoji:`🕹️`,label:`🕹️ Platform`,shortLabel:`Platform`},{id:`Car`,emoji:`🏎️`,label:`🏎️ Car`,shortLabel:`Car`},{id:`Racing`,emoji:`🏁`,label:`🏁 Racing`,shortLabel:`Racing`},{id:`Moto`,emoji:`🏍️`,label:`🏍️ Moto`,shortLabel:`Moto`},{id:`3D`,emoji:`🎲`,label:`🎲 3D`,shortLabel:`3D`},{id:`Shooting`,emoji:`🎯`,label:`🎯 Shooting`,shortLabel:`Shooting`},{id:`Multiplayer`,emoji:`👥`,label:`👥 Multiplayer`,shortLabel:`Multiplayer`},{id:`2 Player`,emoji:`🤝`,label:`🤝 2 Player`,shortLabel:`2 Player`},{id:`Sports`,emoji:`⚽`,label:`⚽ Sports`,shortLabel:`Sports`},{id:`Puzzle`,emoji:`🧩`,label:`🧩 Puzzle`,shortLabel:`Puzzle`},{id:`Animal`,emoji:`🐾`,label:`🐾 Animal`,shortLabel:`Animal`},{id:`Stickman`,emoji:`🥊`,label:`🥊 Stickman`,shortLabel:`Stickman`},{id:`Simulation`,emoji:`🖥️`,label:`🖥️ Simulation`,shortLabel:`Simulation`},{id:`Management`,emoji:`🏗️`,label:`🏗️ Management`,shortLabel:`Management`},{id:`Survival`,emoji:`🌿`,label:`🌿 Survival`,shortLabel:`Survival`},{id:`Strategy`,emoji:`♟️`,label:`♟️ Strategy`,shortLabel:`Strategy`},{id:`Board`,emoji:`♜`,label:`♜ Board`,shortLabel:`Board`},{id:`Girls`,emoji:`💖`,label:`💖 Girls`,shortLabel:`Girls`}],i={};function a(e,t){i[e]=t}function o(e){history.pushState(null,``,e),s()}function s(){let e=new URLSearchParams(window.location.search);if(e.has(`play`)){let t=e.get(`play`).split(`-`)[0];i[`/play`]&&i[`/play`]({id:t})}else i[`/`]&&i[`/`]({})}function c(){window.addEventListener(`popstate`,s),s()}var l=`72aae8a75da17a34e48ed84feaa311bf`,u=`4b03159602cba0243869c415124b923e`;function d(e){return`<div class="ad-banner" style="display:flex;justify-content:center;margin:16px 0;background:rgba(255,255,255,0.02);border:1px dashed rgba(255,255,255,0.05);border-radius:12px;padding:8px 0;width:100%;overflow:hidden;"><iframe srcdoc="${`<!DOCTYPE html><html><head><style>body{margin:0;padding:0;display:flex;justify-content:center;align-items:center;background:transparent;overflow:hidden;}</style></head><body><script>window.atOptions={key:'${e}',format:'iframe',height:90,width:728,params:{}};<\/script><script src="https://biggerbreakerfind.com/${e}/invoke.js"><\/script></body></html>`.replace(/"/g,`&quot;`)}" width="728" height="90" frameborder="0" scrolling="no" style="display:block;margin:0;padding:0;border:none;"></iframe></div>`}var f=[],p=`all`,m=``,h=60,g=e=>document.getElementById(e);async function _(){f=await(await fetch(`/games.json`)).json()}function v(e){return e===`all`?f.length:f.filter(t=>(Array.isArray(t.cat)?t.cat:[t.cat]).includes(e)).length}function y(){let e=m.toLowerCase().trim();return f.filter(t=>{let n=Array.isArray(t.cat)?t.cat:[t.cat],r=p===`all`||n.includes(p),i=!e||t.title.toLowerCase().includes(e);return r&&i})}function b(){return`
    <aside class="sidebar" id="sidebar" role="navigation" aria-label="Game categories">
      <div class="sidebar-section-label">Categories</div>
      ${r.map(e=>{let t=v(e.id);return t===0&&e.id!==`all`?``:`
          <button class="cat-item ${p===e.id?`active`:``}" data-cat="${e.id}" id="cat-${e.id}">
            <span class="cat-icon">${e.emoji}</span>
            <span>${e.shortLabel||e.label}</span>
            <span class="cat-count">${t}</span>
          </button>`}).join(``)}
    </aside>
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
  `}function x(){return`
    <header class="top-header" role="banner">
      <div class="header-logo-wrap">
        <button class="btn-menu" id="btn-menu" aria-label="Open categories">☰</button>
        <a href="#/" class="header-logo">Unblocked<span class="g">Games</span><span class="gplus">G+</span></a>
      </div>
      <div class="header-search">
        <span class="header-search-icon">🔍</span>
        <input type="search" id="search-input" placeholder="Search ${f.length}+ unblocked games..."
          autocomplete="off" value="${m}" aria-label="Search unblocked games G+" />
        <button class="search-clear-btn" id="search-clear" style="display:${m?`flex`:`none`}" aria-label="Clear search">✕</button>
      </div>
      <div class="header-count-wrap">
        <span class="header-count">${f.length}+ Games</span>
      </div>
    </header>
  `}var S={Skill:`skill-based challenges that test your reflexes, timing, and precision`,Running:`endless running adventures where speed and agility are key to survival`,Adventure:`exciting adventure quests full of exploration, story, and discovery`,Platform:`classic platformer gameplay with jumping, dodging, and collecting`,Car:`thrilling car games with fast driving, parking challenges, and stunts`,Racing:`high-speed racing competitions across tracks, roads, and off-road terrain`,Moto:`adrenaline-pumping motorcycle racing and stunt games`,"3D":`3D browser games with immersive graphics and gameplay depth`,Shooting:`action-packed shooting games with weapons, enemies, and strategy`,Multiplayer:`multiplayer games you can enjoy with friends or compete globally`,Puzzle:`brain-teasing puzzle challenges that train logic and problem-solving`,Animal:`fun animal-themed games featuring pets, wildlife, and cute creatures`,Simulation:`realistic simulation experiences from city-building to life sims`,Management:`management and strategy games where you build, plan, and optimize`,Survival:`intense survival games where every decision keeps you alive`,Strategy:`deep strategy games combining planning, tactics, and decision-making`,Board:`classic board games reimagined in the browser for instant fun`,Girls:`fun and creative games designed for everyone who loves style and creativity`,"2 Player":`two-player games perfect for competing or cooperating with a friend`,Sports:`sports action games covering football, basketball, tennis, and more`,Popular:`the most-played and trending unblocked games loved by millions`,New:`the newest HTML5 games freshly added to the collection`,Stickman:`hilarious and action-packed stickman fighting and adventure games`};function C(e,t){let r=t[0]||`Action`,i=S[r]||`fun browser games you can play anywhere`;n[r];let a=t.map(e=>`<span class="game-fact-tag">${n[e]||`🎮`} ${e}</span>`).join(``);return`
  <section class="game-seo-wrap">
    <!-- About -->
    <div class="game-seo-card">
      <div class="game-seo-card-header">
        <span class="game-seo-icon">🎮</span>
        <h2>About ${e.title}</h2>
      </div>
      <p>
        <strong>${e.title}</strong> is a free unblocked ${r.toLowerCase()} game available on <strong>Unblocked Games G+</strong>.
        It belongs to the genre of ${i}.
        Play <strong>${e.title} unblocked</strong> directly in your browser &mdash; no downloads,
        no installations, and no registrations required.
      </p>
      <p>
        Whether you&rsquo;re at school, at work, or at home, <strong>Unblocked Games G+</strong> lets you
        enjoy <strong>${e.title}</strong> instantly on any device. This HTML5 game runs smoothly
        on desktop, tablet, and mobile browsers.
      </p>
      <div class="game-facts-row">
        <div class="game-fact-item">
          <span class="game-fact-label">🏷️ Genre</span>
          <div class="game-fact-tags">${a}</div>
        </div>
        <div class="game-fact-item">
          <span class="game-fact-label">🖥️ Platform</span>
          <div class="game-fact-tags"><span class="game-fact-tag">🌐 Browser (HTML5)</span><span class="game-fact-tag">📱 Mobile</span></div>
        </div>
        <div class="game-fact-item">
          <span class="game-fact-label">💰 Price</span>
          <div class="game-fact-tags"><span class="game-fact-tag free-tag">✓ 100% Free</span></div>
        </div>
        <div class="game-fact-item">
          <span class="game-fact-label">🔓 Access</span>
          <div class="game-fact-tags"><span class="game-fact-tag">⚡ No Login</span><span class="game-fact-tag">⚡ No Download</span></div>
        </div>
      </div>
    </div>

    <!-- How to Play -->
    <div class="game-seo-card">
      <div class="game-seo-card-header">
        <span class="game-seo-icon">📚</span>
        <h2>How to Play ${e.title}</h2>
      </div>
      <p>
        Getting started with <strong>${e.title}</strong> is easy &mdash; just click the game above
        and it will load instantly in your browser. Use your keyboard, mouse, or touch controls
        to interact with the game.
      </p>
      <div class="howto-steps">
        <div class="howto-step">
          <span class="howto-num">1</span>
          <div><strong>Open the Game</strong><br>Click the play area above. The game loads automatically &mdash; no download needed.</div>
        </div>
        <div class="howto-step">
          <span class="howto-num">2</span>
          <div><strong>Learn the Controls</strong><br>Use <kbd>Arrow Keys</kbd> or <kbd>WASD</kbd> to move. Use your mouse or touch screen on mobile.</div>
        </div>
        <div class="howto-step">
          <span class="howto-num">3</span>
          <div><strong>Play &amp; Win</strong><br>Follow in-game instructions to master <strong>${e.title}</strong> and beat your high score!</div>
        </div>
        <div class="howto-step">
          <span class="howto-num">4</span>
          <div><strong>Go Fullscreen</strong><br>Click the <em>Fullscreen</em> button for the best experience on any screen size.</div>
        </div>
      </div>
    </div>

    <!-- FAQ -->
    <div class="game-seo-card">
      <div class="game-seo-card-header">
        <span class="game-seo-icon">❓</span>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div class="faq-list">
        <details class="faq-item">
          <summary>Is ${e.title} free to play?</summary>
          <p>Yes! <strong>${e.title}</strong> is completely free to play on Unblocked Games G+. No subscription, no payment, no account required.</p>
        </details>
        <details class="faq-item">
          <summary>Can I play ${e.title} at school?</summary>
          <p>Yes. Unblocked Games G+ is designed to work on school and work networks. <strong>${e.title} unblocked</strong> runs directly in your browser without needing any special software.</p>
        </details>
        <details class="faq-item">
          <summary>Does ${e.title} work on mobile?</summary>
          <p>Absolutely. <strong>${e.title}</strong> is an HTML5 game that works on smartphones and tablets, as well as desktop computers, with no app installation needed.</p>
        </details>
        <details class="faq-item">
          <summary>What category is ${e.title}?</summary>
          <p><strong>${e.title}</strong> is categorized as a <strong>${t.join(` / `)}</strong> game. Browse more ${r} unblocked games on Unblocked Games G+ using the category sidebar.</p>
        </details>
      </div>
    </div>
  </section>`}function w(){return`
  <section class="home-seo-wrap" aria-label="About Unblocked Games G+">
    <div class="home-seo-header">
      <div class="home-seo-badge">🎮 Unblocked Games G+</div>
      <h2 class="home-seo-title">The Best Free Unblocked Games Online</h2>
      <p class="home-seo-sub">Play 700+ HTML5 games instantly &mdash; no download, no login, no barriers.</p>
    </div>

    <div class="home-seo-features">
      <div class="seo-feat">
        <div class="seo-feat-icon">⚡</div>
        <div>
          <strong>Instant Play</strong>
          <p>Click any game and start playing immediately in your browser. Zero waiting, zero setup.</p>
        </div>
      </div>
      <div class="seo-feat">
        <div class="seo-feat-icon">🔓</div>
        <div>
          <strong>Always Unblocked</strong>
          <p>Works on school chromebooks, work computers, and restricted networks &mdash; guaranteed.</p>
        </div>
      </div>
      <div class="seo-feat">
        <div class="seo-feat-icon">🎮</div>
        <div>
          <strong>700+ Games</strong>
          <p>Action, racing, puzzle, shooting, multiplayer, sports, and more. New games added regularly.</p>
        </div>
      </div>
      <div class="seo-feat">
        <div class="seo-feat-icon">📱</div>
        <div>
          <strong>All Devices</strong>
          <p>Play on desktop, tablet, or mobile. Fully responsive HTML5 games that fit any screen.</p>
        </div>
      </div>
      <div class="seo-feat">
        <div class="seo-feat-icon">👥</div>
        <div>
          <strong>Multiplayer</strong>
          <p>Challenge a friend with 2-player games or compete in online multiplayer titles.</p>
        </div>
      </div>
      <div class="seo-feat">
        <div class="seo-feat-icon">💰</div>
        <div>
          <strong>100% Free</strong>
          <p>No subscriptions, no hidden costs. Unblocked Games G+ is and always will be completely free.</p>
        </div>
      </div>
    </div>

    <div class="home-seo-categories">
      <h3>Popular Game Categories on Unblocked Games G+</h3>
      <div class="home-seo-cat-grid">
        ${r.filter(e=>e.id!==`all`).slice(0,12).map(e=>{let t=v(e.id);return`<a href="#/" class="home-cat-chip" data-cat="${e.id}" id="seo-cat-${e.id}">
            <span>${e.emoji}</span>
            <span>${e.shortLabel}</span>
            <span class="chip-count">${t}</span>
          </a>`}).join(``)}
      </div>
    </div>

    <div class="home-seo-faq">
      <h3>Frequently Asked Questions</h3>
      <div class="faq-list">
        <details class="faq-item" open>
          <summary>What are Unblocked Games G+?</summary>
          <p><strong>Unblocked Games G+</strong> are free HTML5 browser games that can be played anywhere &mdash; including on school or work networks that typically block gaming sites. Our platform hosts 700+ games across all genres, all playable instantly with no download or login required.</p>
        </details>
        <details class="faq-item">
          <summary>Are these games safe to play at school?</summary>
          <p>Yes. All games on Unblocked Games G+ are HTML5-based and run directly in your browser. They do not require any plugins, executables, or external software, making them safe and accessible on most school and corporate networks.</p>
        </details>
        <details class="faq-item">
          <summary>Do I need to create an account?</summary>
          <p>No account, no sign-up, no email &mdash; nothing. Just click a game and play instantly. Unblocked Games G+ is completely open and free for everyone.</p>
        </details>
        <details class="faq-item">
          <summary>What devices support Unblocked Games G+?</summary>
          <p>All games are built with HTML5 and work on Windows, Mac, Linux, Chromebook, iOS, and Android. Whether you use a phone, tablet, or desktop, the games are fully playable.</p>
        </details>
      </div>
    </div>
  </section>`}function T(){document.title=`Unblocked Games G+ | Play 700+ Free Unblocked Games Online`;let e=g(`app`);e.innerHTML=`
    ${x()}
    <div class="layout">
      ${b()}
      <div class="main-content">
        ${d(l)}
        
        <div class="section-header">
          <h1 class="section-title" id="section-title">
            ${p===`all`?`🔥 All Games`:r.find(e=>e.id===p)?.label||p}
            <span class="count" id="game-count"></span>
          </h1>
        </div>
        <div class="games-grid" id="games-grid"></div>
        <div class="load-more-wrap" id="load-more-wrap" style="display:none">
          <button class="btn-load-more" id="btn-load-more">Load More Games</button>
        </div>

        ${d(u)}
        ${w()}
      </div>
    </div>
  `,document.querySelectorAll(`.home-cat-chip`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),p=e.dataset.cat,h=60,T(),window.scrollTo({top:0,behavior:`smooth`})})}),O(),D()}function E(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/(^-|-$)/g,``)}function D(){let e=y(),i=g(`games-grid`),a=g(`game-count`),s=g(`load-more-wrap`),c=g(`section-title`);if(a&&(a.textContent=`(${e.length})`),c&&m)c.innerHTML=`🔍 Results for "<em>${m}</em>" <span class="count">(${e.length})</span>`;else if(c){let t=r.find(e=>e.id===p);c.innerHTML=`${p===`all`?`🔥 All Games`:t?.label||p} <span class="count">(${e.length})</span>`}if(e.length===0){i.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">🎮</div>
        <h3>No games found</h3>
        <p>Try a different search or category.</p>
        <button class="btn-primary" id="btn-clear-search">Clear Search</button>
      </div>`,s&&(s.style.display=`none`),g(`btn-clear-search`)?.addEventListener(`click`,()=>{m=``,g(`search-input`).value=``,g(`search-clear`).style.display=`none`,D()});return}i.innerHTML=e.slice(0,h).map((e,r)=>{let i=(Array.isArray(e.cat)?e.cat:[e.cat])[0]||``,a=n[i]||`🎮`,o=E(e.title);return`
      <article class="game-card" data-id="${e.id}" data-slug="${o}" style="animation-delay:${Math.min(r,30)*20}ms" tabindex="0" role="button" aria-label="Play ${e.title}">
        <div class="card-thumb">
          <img
            src="${t(e)}"
            alt="${e.title}"
            loading="lazy"
            decoding="async"
            onerror="this.onerror=null;this.src='https://placehold.co/300x188/0d0a26/8b5cf6?text=${encodeURIComponent(e.title.slice(0,20))}'"
          />
          <div class="card-overlay">
            <button class="btn-play" tabindex="-1">▶ Play</button>
          </div>
        </div>
        <div class="card-info">
          <div class="card-title">${e.title}</div>
          <div class="card-cat-tag">${a} ${i}</div>
        </div>
      </article>`}).join(``),s&&(s.style.display=e.length>h?`flex`:`none`),i.querySelectorAll(`.game-card`).forEach(e=>{let t=()=>o(`/?play=${e.dataset.id}-${e.dataset.slug}`);e.addEventListener(`click`,t),e.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&t()})})}function O(){g(`search-input`)?.addEventListener(`input`,e=>{m=e.target.value,g(`search-clear`).style.display=m?`flex`:`none`,h=60,D()}),g(`search-clear`)?.addEventListener(`click`,()=>{m=``,g(`search-input`).value=``,g(`search-clear`).style.display=`none`,D()}),document.querySelector(`.sidebar`)?.addEventListener(`click`,e=>{let t=e.target.closest(`.cat-item`);t&&(p=t.dataset.cat,h=60,document.querySelectorAll(`.cat-item`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),D(),g(`sidebar`)?.classList.remove(`open`),g(`sidebar-overlay`)?.classList.remove(`open`),window.scrollTo({top:0,behavior:`smooth`}))}),g(`btn-load-more`)?.addEventListener(`click`,()=>{h+=60,D()}),g(`btn-menu`)?.addEventListener(`click`,()=>{g(`sidebar`)?.classList.toggle(`open`),g(`sidebar-overlay`)?.classList.toggle(`open`)}),g(`sidebar-overlay`)?.addEventListener(`click`,()=>{g(`sidebar`)?.classList.remove(`open`),g(`sidebar-overlay`)?.classList.remove(`open`)})}function k({id:r}){let i=f.find(e=>e.id===r);if(!i){o(`/`);return}let a=e(i),s=Array.isArray(i.cat)?i.cat:[i.cat],c=s[0];document.title=`Play ${i.title} Unblocked | Unblocked Games G+`;let m=document.querySelector(`meta[name="description"]`);m||(m=document.createElement(`meta`),m.name=`description`,document.head.appendChild(m)),m.content=`Play ${i.title} unblocked free online on Unblocked Games G+. No download, no login. Free ${c} HTML5 game — works at school, work, or home on any device.`;let _=f.filter(e=>e.id!==i.id&&(Array.isArray(e.cat)?e.cat.includes(c):e.cat===c)).slice(0,12);g(`app`).innerHTML=`
    ${x()}
    <div class="layout">
      ${b()}
      <div class="main-content">
        ${d(l)}
        <div class="play-page">
          <div class="play-header">
            <button class="btn-back" id="btn-back">← Back</button>
            <div class="play-info">
              <h1 class="play-game-title">Play ${i.title} Unblocked</h1>
              <div class="play-cats">
                ${s.map(e=>`<span class="play-cat-tag">${n[e]||`🎮`} ${e}</span>`).join(``)}
              </div>
            </div>
            <button class="btn-fullscreen" id="btn-fullscreen">⛶ Fullscreen</button>
          </div>
          <div class="game-container" id="game-container">
            <div class="game-loading" id="game-loading">
              <div class="spinner" style="width:48px;height:48px;border-width:4px;"></div>
              <p>Loading <strong>${i.title}</strong>...</p>
            </div>
            <iframe id="game-frame" src="${a}"
              title="Play ${i.title} Unblocked | Unblocked Games G+"
              allowfullscreen frameborder="0"
              allow="fullscreen; autoplay; encrypted-media; gamepad"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock allow-top-navigation allow-modals"
            ></iframe>
          </div>
          ${C(i,s)}
          ${_.length?`
          <div class="related-section">
            <div class="related-section-header">
              <h2 class="section-title">🎮 More ${c} Unblocked Games</h2>
            </div>
            <div class="related-grid" id="related-grid">
              ${_.map(e=>`
                <article class="game-card mini" data-id="${e.id}" tabindex="0" role="button" aria-label="Play ${e.title} unblocked">
                  <div class="card-thumb">
                    <img src="${t(e)}" alt="${e.title} unblocked" loading="lazy" decoding="async"
                      onerror="this.onerror=null;this.src='https://placehold.co/300x188/0d0a26/8b5cf6?text=${encodeURIComponent(e.title.slice(0,20))}'" />
                    <div class="card-overlay"><button class="btn-play" tabindex="-1">▶ Play</button></div>
                  </div>
                  <div class="card-info"><div class="card-title">${e.title}</div></div>
                </article>`).join(``)}
            </div>
          </div>`:``}
          ${d(u)}
        </div>
      </div>
    </div>
  `,g(`game-frame`)?.addEventListener(`load`,()=>{g(`game-loading`).style.display=`none`}),g(`btn-back`)?.addEventListener(`click`,()=>{o(`/`)}),g(`btn-fullscreen`)?.addEventListener(`click`,()=>{let e=g(`game-container`);document.fullscreenElement?document.exitFullscreen():e?.requestFullscreen()}),g(`btn-menu`)?.addEventListener(`click`,()=>{g(`sidebar`)?.classList.toggle(`open`),g(`sidebar-overlay`)?.classList.toggle(`open`)}),g(`sidebar-overlay`)?.addEventListener(`click`,()=>{g(`sidebar`)?.classList.remove(`open`),g(`sidebar-overlay`)?.classList.remove(`open`)}),document.querySelector(`.sidebar`)?.addEventListener(`click`,e=>{let t=e.target.closest(`.cat-item`);t&&(p=t.dataset.cat,h=60,o(`/`))}),document.getElementById(`related-grid`)?.querySelectorAll(`.game-card`).forEach(e=>{let t=()=>{h=60,o(`/?play=${e.dataset.id}-${e.dataset.slug}`)};e.addEventListener(`click`,t),e.addEventListener(`keydown`,e=>{e.key===`Enter`&&t()})})}a(`/`,()=>T()),a(`/play`,({id:e})=>k({id:e})),document.addEventListener(`DOMContentLoaded`,async()=>{g(`app`).innerHTML=`
    <div style="display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;gap:16px;background:#08051a;">
      <div class="spinner" style="width:48px;height:48px;border-width:4px;"></div>
      <p style="color:#9ca3af;font-family:Inter,sans-serif;font-size:0.95rem;">Loading Unblocked Games G+...</p>
    </div>`,await _(),c()});