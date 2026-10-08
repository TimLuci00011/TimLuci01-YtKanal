// Echte Videos, Streams, Collabs & Shorts vom Kanal TimLuci01 (@Timluci01 - UC0REH3HAaH3QGf8EcttLBiQ)
const CHANNEL_ID = "UC0REH3HAaH3QGf8EcttLBiQ";

const VIDEOS_DATA = [
  // Videos / Trailer / Tutorial
  {
    id: "Tb9Lq9RMIjQ",
    title: "Meine eigende webseite",
    category: "videos",
    badge: "🔥 NEU • Webseite",
    badgeClass: "badge-video",
    views: "Neu",
    date: "Gerade eben"
  },
  {
    id: "HjUHmyRoW4U",
    title: "Teaser für One Piece Mini Season? + Vieles Mehr! 🔥| TimLuci01",
    category: "videos",
    badge: "Video • News",
    badgeClass: "badge-video",
    views: "Neu",
    date: "Vor 21 Stunden"
  },
  {
    id: "Dxk5asIOjXg",
    title: "🔴Kurzer Fortnite Stream + Morgen RELOAD Update!",
    category: "streams",
    badge: "🔴 Livestream",
    badgeClass: "badge-stream",
    views: "34 Aufrufe",
    date: "Vor 12 Stunden gestreamt"
  },
  {
    id: "kk4AZUNkqqA",
    title: "Jack The Clown und Mehr! In Fortnite! | TimLuci01",
    category: "videos",
    badge: "Video • Update",
    badgeClass: "badge-video",
    views: "27 Aufrufe",
    date: "Vor 1 Tag"
  },
  {
    id: "2ay_I0-a8co",
    title: "Status Montag - #01 | TimLuci01",
    category: "status",
    badge: "📅 Status Montag",
    badgeClass: "badge-status",
    views: "26 Aufrufe",
    date: "Vor 2 Tagen"
  },
  {
    id: "Jv5EdoJMKyU",
    title: "Das ist der Horde Rush Modus in Fortnite! 🎃😍| TimLuci01",
    category: "videos",
    badge: "Video • Gameplay",
    badgeClass: "badge-video",
    views: "139 Aufrufe",
    date: "Vor 4 Tagen"
  },
  {
    id: "kVK_Uy-l2AY",
    title: "🔴Fortnite & Poppy Playtime Chapter 2",
    category: "streams",
    badge: "🔴 Livestream",
    badgeClass: "badge-stream",
    views: "61 Aufrufe",
    date: "Vor 4 Tagen gestreamt"
  },
  {
    id: "EP-qi5sdkvo",
    title: "Fortnite SHOP - 02.10.2026 - Und Shop diese Woche! | TimLuci01",
    category: "videos",
    badge: "Video • Shop",
    badgeClass: "badge-video",
    views: "19 Aufrufe",
    date: "Vor 5 Tagen"
  },
  {
    id: "l4yzA_6O9OM",
    title: "Fortnite XXL Halloween Update ist DA! | Alle Infos! 😍🎃| TimLuci01",
    category: "videos",
    badge: "Video • Update",
    badgeClass: "badge-video",
    views: "54 Aufrufe",
    date: "Vor 6 Tagen"
  },
  {
    id: "c-3uI1bOkhw",
    title: "Poppy Playtime Chapter 1 Full Game! 😭 | TimLuci01",
    category: "videos",
    badge: "Full Gameplay",
    badgeClass: "badge-video",
    views: "68 Aufrufe",
    date: "Vor 7 Tagen"
  },
  {
    id: "Np7j9Wqyw0k",
    title: "🔴Playing Poppy Playtime Chapter 1! | TimLuci01",
    category: "streams",
    badge: "🔴 Livestream",
    badgeClass: "badge-stream",
    views: "98 Aufrufe",
    date: "Vor 7 Tagen gestreamt"
  },
  {
    id: "dP2faTv_4t0",
    title: "Fortnitemares Key Art! | Skins, Items und Mehr! 😍🔥| TimLuci01",
    category: "collabs",
    badge: "🤝 Collab • Plus",
    badgeClass: "badge-collab",
    views: "25 Aufrufe",
    date: "Vor 7 Tagen"
  },
  {
    id: "vYyUhJWUF10",
    title: "Fortnitemares 2026 Trailer | Gameplay, Skins und Mehr! 😍 | Tim-01",
    category: "videos",
    badge: "Trailer",
    badgeClass: "badge-video",
    views: "16 Aufrufe",
    date: "Vor 8 Tagen"
  },
  {
    id: "aMs-VWJLRLA",
    title: "Fortnite XXL Update JETZT! 😍 | TimLuci01",
    category: "streams",
    badge: "🔴 Livestream",
    badgeClass: "badge-stream",
    views: "252 Aufrufe",
    date: "Vor 1 Monat gestreamt"
  },
  {
    id: "IgWcSngrwdw",
    title: "🔴Halloween The Game mit @realjustyn | Paar Wins holen!",
    category: "streams",
    badge: "🔴 Livestream",
    badgeClass: "badge-stream",
    views: "74 Aufrufe",
    date: "Vor 1 Monat gestreamt"
  },
  {
    id: "e5tK8iSCUGI",
    title: "Es ist nun soweit! | Blitz Zone Wars Update! | TimLuci01",
    category: "streams",
    badge: "⚡ Blitz Zone Wars",
    badgeClass: "badge-stream",
    views: "36 Aufrufe",
    date: "Vor 2 Monaten gestreamt"
  },
  {
    id: "P6nmVkubQsk",
    title: "Minecraft BED WARS! Mit @nudelsalat88 / Gewinnen wir? | Tim-01",
    category: "collabs",
    badge: "🤝 Collab • Bed Wars",
    badgeClass: "badge-collab",
    views: "48 Aufrufe",
    date: "Vor 4 Monaten"
  },
  {
    id: "7vyVu-s4vAM",
    title: "POPPY PLAYTIME Chapter 1 | Full Gameplay! | Deutsch - Tim-01",
    category: "collabs",
    badge: "🤝 TimLuci01 Plus",
    badgeClass: "badge-collab",
    views: "33 Aufrufe",
    date: "Vor 8 Monaten"
  }
];

const SHORTS_DATA = [
  {
    id: "7InKOy2t38E",
    title: "Das kommende Poppy Playtime Ch 2 Video! #poppyplaytime #viral #fyp",
    views: "1.085 Aufrufe"
  },
  {
    id: "AorG5dPsRYs",
    title: "Monsterteile im Horde Rush Modus in Fortnite! #fortnite #update",
    views: "830 Aufrufe"
  },
  {
    id: "Y2Vp2Tn4Ws4",
    title: "Kommendes Reload Update #fortnite #update #viral #gaming",
    views: "527 Aufrufe"
  },
  {
    id: "G1i3mxOxnjo",
    title: "Beim Horde Rush Modus Rang-System! #fortnite #update #viral",
    views: "338 Aufrufe"
  },
  {
    id: "aHuaSH4PBsc",
    title: "Der Schrottriss im Horde Rush Modus! #fortnite #fortniteclips",
    views: "336 Aufrufe"
  },
  {
    id: "D9m2XZ3qTok",
    title: "Minecraft Bed Wars Kill! Mit @nudelsalat88 #minecraft #bedwars",
    views: "312 Aufrufe"
  },
  {
    id: "UFxAIikukCU",
    title: "Power Hour heute Abend! #fortnite #update #viral #gaming",
    views: "190 Aufrufe"
  },
  {
    id: "q4b71CZdsDo",
    title: "OG Live Event Morgen! INFOS! #fortnite #update #fortniteclips",
    views: "175 Aufrufe"
  },
  {
    id: "6Fn7TkcHjm4",
    title: "Neue OG Stage vom Rift Beacon! #fortnite #update #viral",
    views: "72 Aufrufe"
  },
  {
    id: "_WEMEazQic0",
    title: "Jack The Clown x Fortnite | #fortnite #update #viral #gaming",
    views: "67 Aufrufe"
  }
];

const videoGrid = document.getElementById("videoGrid");
const shortsGrid = document.getElementById("shortsGrid");
const categoryTabs = document.getElementById("categoryTabs");
const searchInput = document.getElementById("videoSearchInput");

let activeFilter = "all";
let searchQuery = "";

function renderVideos() {
  if (!videoGrid) return;

  const filtered = VIDEOS_DATA.filter((video) => {
    const matchesCategory = activeFilter === "all" || video.category === activeFilter;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    videoGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        Keine Videos für diese Suche gefunden. Probiere einen anderen Begriff!
      </div>
    `;
    return;
  }

  videoGrid.innerHTML = filtered
    .map(
      (v) => `
      <article class="video-card" data-video-id="${v.id}" data-video-title="${v.title.replace(/"/g, "&quot;")}">
        <div class="video-thumb-wrap">
          <img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="${v.title.replace(/"/g, "&quot;")}" loading="lazy" />
          <span class="video-badge ${v.badgeClass}">${v.badge}</span>
          <div class="video-play-mini">
            <div class="play-btn-circle">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div class="video-body">
          <h3 class="video-title">${v.title}</h3>
          <div class="video-meta">
            <span>👁️ ${v.views}</span>
            <span>${v.date}</span>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

function renderShorts() {
  if (!shortsGrid) return;

  shortsGrid.innerHTML = SHORTS_DATA.map(
    (s) => `
      <article class="short-card" data-video-id="${s.id}" data-video-title="${s.title.replace(/"/g, "&quot;")}">
        <img src="https://i.ytimg.com/vi/${s.id}/hqdefault.jpg" alt="${s.title.replace(/"/g, "&quot;")}" loading="lazy" />
        <div class="short-overlay">
          <div class="short-top">
            <span class="short-pill">SHORT</span>
            <span class="short-views">🔥 ${s.views}</span>
          </div>
          <h3 class="short-title">${s.title}</h3>
        </div>
      </article>
    `
  ).join("");
}

// Modal Player Logic
const videoModal = document.getElementById("videoModal");
const videoModalTitle = document.getElementById("videoModalTitle");
const videoModalYtLink = document.getElementById("videoModalYtLink");
const videoModalIframeContainer = document.getElementById("videoModalIframeContainer");
const videoModalClose = document.getElementById("videoModalClose");
const videoModalBackdrop = document.getElementById("videoModalBackdrop");

function openVideoModal(videoId, title) {
  if (!videoModal || !videoId) return;
  videoModalTitle.textContent = title || "TimLuci01 Video";
  videoModalYtLink.href = `https://www.youtube.com/watch?v=${videoId}`;
  videoModalIframeContainer.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
      title="${(title || "YouTube Video").replace(/"/g, "&quot;")}"
      referrerpolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  `;
  videoModal.classList.add("open");
  videoModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeVideoModal() {
  if (!videoModal) return;
  videoModal.classList.remove("open");
  videoModal.setAttribute("aria-hidden", "true");
  videoModalIframeContainer.innerHTML = "";
  document.body.style.overflow = "";
}

// Event Listeners
document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-video-id]");
  if (trigger) {
    const vid = trigger.getAttribute("data-video-id");
    const title = trigger.getAttribute("data-video-title");
    openVideoModal(vid, title);
  }
});

if (videoModalClose) videoModalClose.addEventListener("click", closeVideoModal);
if (videoModalBackdrop) videoModalBackdrop.addEventListener("click", closeVideoModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && videoModal.classList.contains("open")) {
    closeVideoModal();
  }
});

if (categoryTabs) {
  categoryTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-tab");
    if (!btn) return;
    document.querySelectorAll(".filter-tab").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.getAttribute("data-filter") || "all";
    renderVideos();
  });
}

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    renderVideos();
  });
}

// Mobile Menu
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// Automatischer Live-Abgleich mit dem YouTube RSS-Feed (falls neue Videos hochgeladen werden)
async function syncLatestYouTubeFeed() {
  try {
    const rssUrl = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`);
    const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`);
    if (!res.ok) return;
    const data = await res.json();
    if (!data || !Array.isArray(data.items)) return;

    let added = false;
    data.items.slice(0, 6).reverse().forEach((item) => {
      const guidParts = (item.guid || "").split(":");
      const vid = guidParts[guidParts.length - 1];
      if (!vid || vid.length !== 11) return;
      const existsInVideos = VIDEOS_DATA.some((v) => v.id === vid);
      const existsInShorts = SHORTS_DATA.some((s) => s.id === vid);
      if (!existsInVideos && !existsInShorts) {
        const isShort = (item.title || "").includes("#");
        if (isShort) {
          SHORTS_DATA.unshift({
            id: vid,
            title: item.title,
            views: "Neu"
          });
        } else {
          VIDEOS_DATA.unshift({
            id: vid,
            title: item.title,
            category: item.title.includes("🔴") ? "streams" : "videos",
            badge: item.title.includes("🔴") ? "🔴 Livestream" : "Neu • Video",
            badgeClass: item.title.includes("🔴") ? "badge-stream" : "badge-video",
            views: "Neu",
            date: "Gerade eben"
          });
        }
        added = true;
      }
    });

    if (added) {
      renderVideos();
      renderShorts();
    }
  } catch (_) {
    // Fallback auf die lokal eingebetteten aktuellen Kanal-Daten
  }
}

// Hebt automatisch den heutigen Wochentag im Streamplan hervor
function highlightCurrentStreamDay() {
  const todayIndex = new Date().getDay(); // 0 = SO, 1 = MO, ..., 4 = DO, ..., 6 = SA
  const dayCards = document.querySelectorAll(".stream-day-card");
  dayCards.forEach((card) => {
    const dayAttr = parseInt(card.getAttribute("data-day"), 10);
    if (dayAttr === todayIndex) {
      card.classList.add("is-today");
      const pill = card.querySelector(".day-status-pill");
      if (pill && !card.querySelector(".today-live-tag")) {
        const tag = document.createElement("span");
        tag.className = "today-live-tag";
        tag.innerHTML = `<span class="pulse-indicator" style="width:6px;height:6px;background:#fff;box-shadow:none;"></span> HEUTE`;
        pill.insertAdjacentElement("afterend", tag);
      }
    }
  });
}

// Navbar Scroll-Spy & Scrolled-Effekt
function initNavbarScrollSpy() {
  const navbar = document.getElementById("navbar");
  const navItems = document.querySelectorAll(".nav-link[data-section]");
  const sectionIds = ["top", "streamplan", "videos", "shorts", "formate", "community", "partner"];

  function onScroll() {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    }

    let currentSection = "top";
    const scrollPos = window.scrollY + 180;

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        currentSection = id;
      }
    }

    navItems.forEach((link) => {
      const target = link.getAttribute("data-section");
      link.classList.toggle("active", target === currentSection);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// Initial Render
renderVideos();
renderShorts();
highlightCurrentStreamDay();
initNavbarScrollSpy();
syncLatestYouTubeFeed();


