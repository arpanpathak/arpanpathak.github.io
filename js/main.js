/* =========================================================
   Arpan Pathak: Portfolio
   ========================================================= */

/* ---------- Project data (from live GitHub API, Aug 2026) ---------- */

/* 📚 Books I've written */
const books = [
  {
    name: 'gpu-parallel-book',
    url: 'https://github.com/arpanpathak/gpu-parallel-book',
    desc: 'GPU parallel programming from the ground up: CUDA C++ and Rust kernels paired with clickable SVG 2D/3D architecture diagrams (warps, SMs, memory tiers).',
    lang: 'Cuda',
    stars: 40,
    forks: 6,
    icon: '📖',
    home: 'https://arpanpathak.github.io/gpu-parallel-book/',
  },
  {
    name: 'seeing-machines-book',
    url: 'https://github.com/arpanpathak/seeing-machines-book',
    desc: 'Seeing Machines: Deep Learning & Computer Vision from Python to Bare Metal: 16 chapters ending in the CivicSense capstone.',
    lang: 'Rust',
    stars: 0,
    forks: 0,
    icon: '👁️',
  },
  {
    name: 'ebpf-rust-networking-book',
    url: 'https://github.com/arpanpathak/ebpf-rust-networking-book',
    desc: 'eBPF from the ground up: the kernel packet path, verifier, XDP, tc, sockmap, Cilium & Kubernetes, with working Aya programs.',
    lang: 'Rust',
    stars: 1,
    forks: 0,
    icon: '🕸️',
    home: 'https://arpanpathak.github.io/ebpf-rust-networking-book/',
  },
  {
    name: 'bevy-physics-book',
    url: 'https://github.com/arpanpathak/bevy-physics-book',
    desc: 'Comprehensive guide to building physics engines with Bevy & Rust: vectors, kinematics, collisions, ECS, physics sandbox.',
    lang: 'Rust',
    stars: 2,
    forks: 0,
    icon: '🎮',
  },
  {
    name: 'modern-cpp-systems-book',
    url: 'https://github.com/arpanpathak/modern-cpp-systems-book',
    desc: 'Modern C++ memory-safe systems programming: from first principles to NVIDIA & HFT interview, 16 chapters.',
    lang: 'C++',
    stars: 1,
    forks: 1,
    icon: '📘',
  },
];

/* 🧪 More personal projects */
const moreProjects = [
  {
    name: 'openbatrangs',
    url: 'https://github.com/arpanpathak/openbatrangs',
    desc: 'Agentic coding CLI for local models via Ollama. Auto-discovers the best model on Jetson/edge hardware and iterates with tools.',
    lang: 'Rust',
    stars: 0,
    forks: 0,
    icon: '🦇',
    new: true,
  },
  {
    name: 'cuda-oxide',
    url: 'https://github.com/arpanpathak/cuda-oxide',
    desc: 'Experimental Rust-to-CUDA compiler: write SIMT GPU kernels in safe(ish) idiomatic Rust, compiled straight to PTX.',
    lang: 'Rust',
    stars: 0,
    forks: 0,
    icon: '⚙️',
  },
  {
    name: 'audio-source-seperation',
    url: 'https://github.com/arpanpathak/audio-source-seperation',
    desc: 'Split a song into vocals and instrumental stems in pure Rust: ONNX Runtime (Demucs) backend, library + CLI.',
    lang: 'Rust',
    stars: 0,
    forks: 0,
    icon: '🎧',
  },
  {
    name: 'andross',
    url: 'https://github.com/arpanpathak/andross',
    desc: 'A gorgeous C++20/23 SDK for low-latency Vision, Physics & AR/VR: deterministic execution, smart allocators, no config cruft.',
    lang: 'C++',
    stars: 0,
    forks: 0,
    icon: '🎛️',
  },
  {
    name: 'kube-goAt',
    url: 'https://github.com/arpanpathak/kube-goAt',
    desc: 'A RISC-inspired, AST-based Infrastructure-as-Code library for Kubernetes in Go: pragmatic, maintainable cloud-native IaC.',
    lang: 'Go',
    stars: 0,
    forks: 0,
    icon: '☸️',
  },
  {
    name: 'zero-trust-networking-examples',
    url: 'https://github.com/arpanpathak/zero-trust-networking-examples',
    desc: 'Hands-on zero-trust, low-overhead Kubernetes networking with Cilium.',
    lang: 'Shell',
    stars: 1,
    forks: 0,
    icon: '🔐',
  },
  {
    name: 'systems-programming-design-patterns',
    url: 'https://github.com/arpanpathak/systems-programming-design-patterns',
    desc: 'Hands-on systems programming: I/O, OS, networking, and concurrency patterns, each with working examples.',
    lang: 'Go',
    stars: 12,
    forks: 0,
    icon: '🔍',
  },
];

const LANG_COLORS = {
  Rust: '#dea584',
  Go: '#00ADD8',
  'C++': '#f34b7d',
  Cuda: '#3a4e3a',
  Kotlin: '#a97bff',
  Python: '#3572a5',
  HTML: '#e34c26',
  Shell: '#89e051',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
};

/* ---------- Terminal typing ---------- */
const mission = "Systems engineer · 8+ yrs · Amazon → Oracle → Microsoft. I make databases faster (lock-free), networks safer (eBPF/Cilium), ML inference cheaper (5k QPS serving), and local-first agentic coding real with openBatarangs.";

function typeText(el, text, speed = 18, callback) {
  let i = 0;
  function tick() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(tick, speed);
    } else if (callback) {
      callback();
    }
  }
  tick();
}

/* ---------- Render projects ---------- */
function renderProjects() {
  renderGrid('booksGrid', books);
  renderGrid('moreGrid', moreProjects);
}

function renderGrid(id, items) {
  const grid = document.getElementById(id);
  if (!grid) return;
  grid.innerHTML = items
    .map((p) => {
      const color = LANG_COLORS[p.lang] || '#93a1b8';
      const starStr = p.stars > 0 ? p.stars : '';
      return `
      <article class="project-card reveal">
        <div class="project-top">
          <span class="project-icon">${p.icon}</span>
          <span class="project-lang" style="color:${color};border-color:${color}55;">${p.lang}</span>
        </div>
        <h3><a href="${p.url}" target="_blank" rel="noopener">${p.name} ↗</a>${p.new ? ' <span class="project-new">NEW</span>' : ''}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-meta">
          ${starStr ? `<span>⭐ ${starStr}</span>` : ''}
          ${p.forks ? `<span>⑂ ${p.forks}</span>` : ''}
          ${p.home ? `<span><a href="${p.home}" target="_blank" rel="noopener">live ↗</a></span>` : ''}
        </div>
      </article>`;
    })
    .join('');
}

/* ---------- Animated counters ---------- */
function animateCounters() {
  const nums = document.querySelectorAll('.stat-num');
  nums.forEach((el) => {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const start = performance.now();

    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      el.textContent = prefix + val.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

/* ---------- Intersection observer (reveal + counters) ---------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

/* Counters trigger once when the about section is visible */
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        statsObserver.disconnect();
      }
    });
  },
  { threshold: 0.3 }
);
const stats = document.querySelector('.about-stats');
if (stats) statsObserver.observe(stats);

/* ---------- Nav scroll state ---------- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

/* ---------- Mobile burger ---------- */
const burger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  })
);

/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  // reveal project cards after render
  document.querySelectorAll('#booksGrid .reveal, #moreGrid .reveal').forEach((el) => io.observe(el));

  // terminal animation
  typeText(document.getElementById('tWhoami'), 'Arpan Pathak', 40);
  setTimeout(() => typeText(document.getElementById('tMission'), mission, 14), 900);

  // blink cursor
  const cursor = document.getElementById('tCursor');
  if (cursor) {
    setInterval(() => {
      cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 500);
  }
});
