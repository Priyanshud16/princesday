import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Heart, Sparkles, Crown, Stars, Quote, ChevronLeft, ChevronRight, Camera, Gift } from 'lucide-react';
import Image_1 from '../assets/Image-1.jpeg';
import Image_2 from '../assets/Image-2.jpeg';
import Image_3 from '../assets/Image-3.jpeg';
import Image_4 from '../assets/Image-4.jpeg';
import Image_5 from '../assets/Image-5.jpeg';
import Image_6 from '../assets/Image-6.jpeg';
import Image_7 from '../assets/Image-7.jpeg';
import Image_8 from '../assets/Image-8.jpeg';
import Image_9 from '../assets/Image-9.jpeg';
import Image_10 from '../assets/Image-10.jpeg';
import Image_11 from '../assets/Image-11.jpeg';
import Image_12 from '../assets/Image-12.jpeg';
import Image_13 from '../assets/Image-13.jpeg';
import Image_14 from '../assets/Image-14.jpeg';
import Image_15 from '../assets/Image-15.jpeg';
import Image_16 from '../assets/Image-16.jpeg';
import Image_17 from '../assets/Image-17.jpeg';
import Image_18 from '../assets/Image-18.jpeg';
import Image_19 from '../assets/Image-19.jpeg';
import Image_20 from '../assets/Image-20.jpeg';
import Image_21 from '../assets/Image-21.jpeg';
import Image_22 from '../assets/Image-22.jpeg';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const images = [
  { url: Image_8, caption: 'Our First Meet' },
  { url: Image_7, caption: 'Our First Kiss' },
  { url: Image_17, caption: 'Our Video Calls Memories' },
  { url: Image_16, caption: 'Our Video Calls Memories' },
  { url: Image_19, caption: 'Mall Visit' },
  { url: Image_20, caption: 'Mall Visit' },
  { url: Image_1, caption: 'First Date' },
  { url: Image_4, caption: 'Movie Night' },
  { url: Image_5, caption: 'Cooking Together' },
  { url: Image_6, caption: 'Sunset Walk' },
  { url: Image_17, caption: 'Video Call' },
  { url: Image_16, caption: 'Video Call' },
  { url: Image_2, caption: 'Spring Blossoms' },
  { url: Image_3, caption: 'My Beautiful Girl' },
  { url: Image_9, caption: 'Adventure Awaits' },
  { url: Image_10, caption: 'Dreamy Days' },
  { url: Image_11, caption: 'Your Eyes' },
  { url: Image_12, caption: 'Golden Hour' },
  { url: Image_13, caption: 'Together Forever' },
  { url: Image_14, caption: 'Sweet Kisses' },
  { url: Image_15, caption: 'Your Laugh' },
  { url: Image_18, caption: 'Starry Nights' },
  { url: Image_21, caption: 'Love in the Air' },
  { url: Image_22, caption: 'Happy Place' },
];

const loveLines = [
  "Nandini, if I could turn my feelings into words, even the stars would run out of space before I could finish telling you how much you mean to me.",
  "In a world of billions, my heart somehow found its favourite person. And that person will always be you, Nandini.",
  "You don't need a crown to be my princess, Nandini. Your smile is enough to make my entire world feel like a kingdom.",
  "If I had to choose between a thousand beautiful sunsets and one moment with you, I'd choose you without thinking twice.",
  "Nandini, I wish you could see yourself through my eyes, even for a second. You would finally understand why I find you so incredibly special.",
  "You are not just someone I love. You are the person I want to tell everything to, laugh with over silly things, and grow old with.",
  "Sometimes I wonder what I did right to deserve someone like you. Then I look at your smile and silently thank the universe for bringing you into my life.",
  "Your smile has a strange kind of magic, Nandini. No matter how difficult my day is, just one thought of you makes everything feel lighter.",
  "I don't promise that every day will be perfect, but I promise to stand beside you through the imperfect ones. You will never have to face everything alone.",
  "If love had a favourite name, mine would be Nandini. If happiness had a face, I'd see yours in every little moment.",
  "I want to be the reason behind your random smiles, the person you run to when things get difficult, and the one who reminds you every day how precious you are.",
  "You are my favourite notification, my happiest thought, my sweetest distraction, and the most beautiful part of my everyday life.",
  "I don't need a fairytale, Nandini. I just need you, your hand in mine, and a lifetime of little moments that belong only to us.",
  "Even on the days when you don't feel beautiful, remember that to me, you are a masterpiece in every possible way.",
  "I wish I could pause time whenever I'm with you, because somehow every second feels too short when I'm around my favourite person.",
  "I want to celebrate your victories, support your dreams, wipe away your tears, and remind you that you are capable of everything you dream of.",
  "Nandini, you are the kind of beautiful that goes beyond appearance. It's in your little habits, your expressions, your laughter, and everything that makes you YOU.",
  "If I could write one promise across the sky, it would be this: no matter where life takes us, I'll always want to choose you, again and again.",
  "I may not be able to give you the entire universe, but I promise to make my little world a place where you always feel loved, valued, and safe.",
  "And if I get a thousand lifetimes, Nandini, I hope I find you in every single one. Because once will never be enough when it comes to loving you.",
];

const wishes = [
  { icon: '👑', title: 'To My Princess', text: 'May you always know how deeply you are loved, how truly you are cherished, and how completely you are adored. You are my greatest treasure.' },
  { icon: '💕', title: 'Every Day', text: 'I wish to be the reason behind your smile, the comfort in your storm, and the warmth in your winter. You deserve all the happiness in the world.' },
  { icon: '✨', title: 'Your Dreams', text: 'May every dream you hold close to your heart come true. And I promise to be right by your side, cheering you on, every step of the way.' },
  { icon: '🌹', title: 'My Promise', text: 'I promise to love you in every way, to hold your hand through every storm, and to be your safe haven, your biggest fan, and your forever home.' },
  { icon: '🌟', title: 'Forever Yours', text: 'You are not just my girlfriend, you are my best friend, my soulmate, my princess. And I am forever grateful that you chose me.' },
];

const SLIDE_MS = 5000;

/* ------------------------------------------------------------------ */
/*  BACKGROUND LAYERS (stable, generated once)                         */
/* ------------------------------------------------------------------ */

const rand = (min, max) => min + Math.random() * (max - min);

const Background = React.memo(() => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 22 }, () => ({
        left: rand(0, 100),
        size: rand(14, 38),
        delay: rand(0, 14),
        duration: rand(12, 24),
        drift: rand(-60, 60),
        opacity: rand(0.25, 0.6),
      })),
    []
  );
  const stars = useMemo(
    () =>
      Array.from({ length: 40 }, () => ({
        left: rand(0, 100),
        top: rand(0, 100),
        size: rand(2, 6),
        delay: rand(0, 5),
        duration: rand(2, 5),
      })),
    []
  );
  const petals = useMemo(
    () =>
      Array.from({ length: 14 }, () => ({
        left: rand(0, 100),
        delay: rand(0, 16),
        duration: rand(10, 20),
        size: rand(10, 20),
        sway: rand(40, 120),
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* soft glowing orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {stars.map((s, i) => (
        <span
          key={`s${i}`}
          className="twinkle absolute rounded-full bg-white"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: '0 0 10px 2px rgba(255,255,255,0.9)',
          }}
        />
      ))}

      {petals.map((p, i) => (
        <span
          key={`p${i}`}
          className="petal absolute"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.3,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--sway': `${p.sway}px`,
          }}
        />
      ))}

      {hearts.map((h, i) => (
        <span
          key={`h${i}`}
          className="rise-heart absolute"
          style={{
            left: `${h.left}%`,
            bottom: '-60px',
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            opacity: h.opacity,
            '--drift': `${h.drift}px`,
          }}
        >
          <Heart className="text-pink-400" size={h.size} fill="currentColor" />
        </span>
      ))}
    </div>
  );
});

/* ------------------------------------------------------------------ */
/*  SMALL HELPERS                                                      */
/* ------------------------------------------------------------------ */

const AnimatedTitle = ({ text }) => {
  let n = 0;
  return (
    <span aria-label={text} className="inline-block">
      {text.split(' ').map((word, w) => (
        <React.Fragment key={w}>
          {w > 0 && ' '}
          {/* each word stays together; the line can only break between words */}
          <span className="inline-block whitespace-nowrap" aria-hidden="true">
            {word.split('').map((ch) => {
              const i = n++;
              return (
                <span
                  key={i}
                  className="letter-pop inline-block shimmer-text"
                  style={{ animationDelay: `${0.9 + i * 0.06}s, 0s` }}
                >
                  {ch}
                </span>
              );
            })}
          </span>
        </React.Fragment>
      ))}
    </span>
  );
};

/* ------------------------------------------------------------------ */
/*  MAIN                                                               */
/* ------------------------------------------------------------------ */

const PrincessDayWebsite = () => {
  const [opened, setOpened] = useState(false);
  const [splashGone, setSplashGone] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('gallery');
  const [currentLine, setCurrentLine] = useState(0);
  const [typed, setTyped] = useState('');
  const [bursts, setBursts] = useState([]);
  const burstId = useRef(0);

  /* ---- click / tap heart bursts ---- */
  const spawnBurst = (x, y, count = 8) => {
    const items = Array.from({ length: count }, () => {
      burstId.current += 1;
      const angle = Math.random() * Math.PI * 2;
      const dist = rand(50, 130);
      return {
        id: burstId.current,
        x,
        y,
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist - 40,
        size: rand(12, 26),
        emoji: ['💖', '💕', '✨', '🌸', '💗'][Math.floor(Math.random() * 5)],
      };
    });
    setBursts((prev) => [...prev, ...items]);
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => !items.some((i) => i.id === b.id)));
    }, 1300);
  };

  const handleRootClick = (e) => spawnBurst(e.clientX, e.clientY, 7);

  const openSurprise = (e) => {
    e.stopPropagation();
    const r = e.currentTarget.getBoundingClientRect();
    spawnBurst(r.left + r.width / 2, r.top + r.height / 2, 26);
    setOpened(true);
    setTimeout(() => setSplashGone(true), 1200);
  };

  /* ---- gallery autoplay (resets after manual navigation) ---- */
  useEffect(() => {
    if (!opened || activeTab !== 'gallery') return;
    const t = setTimeout(() => {
      setCurrentImageIndex((p) => (p + 1) % images.length);
    }, SLIDE_MS);
    return () => clearTimeout(t);
  }, [opened, activeTab, currentImageIndex]);

  const nextImage = () => setCurrentImageIndex((p) => (p + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((p) => (p - 1 + images.length) % images.length);

  /* ---- typewriter for love lines ---- */
  useEffect(() => {
    if (!opened || activeTab !== 'lines') return;
    const full = loveLines[currentLine];
    if (typed.length < full.length) {
      const t = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 28);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setTyped('');
      setCurrentLine((p) => (p + 1) % loveLines.length);
    }, 3200);
    return () => clearTimeout(t);
  }, [opened, activeTab, typed, currentLine]);

  const pickLine = (idx) => {
    setTyped('');
    setCurrentLine(idx);
  };

  const tabs = [
    { id: 'gallery', label: 'Our Memories', icon: Camera },
    { id: 'lines', label: 'Love Notes', icon: Quote },
    { id: 'wishes', label: 'My Wishes', icon: Gift },
  ];

  const switchTab = (id, e) => {
    if (id === activeTab) return;
    setActiveTab(id);
    if (id === 'lines') {
      setTyped('');
    }
  };

  return (
    <div
      onClick={handleRootClick}
      className="aurora-bg min-h-screen relative overflow-x-hidden w-full"
      style={{ minHeight: '100dvh' }}
    >
      <style>{`
        /* ---------- animated gradient background ---------- */
        .aurora-bg {
          background: linear-gradient(120deg, #ffe4f1, #f3e1ff, #ffd9e6, #e8dcff, #ffe4ec);
          background-size: 400% 400%;
          animation: aurora 18s ease infinite;
        }
        @keyframes aurora {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* ---------- glowing orbs ---------- */
        .orb { position: absolute; border-radius: 9999px; filter: blur(70px); opacity: .55; }
        .orb-1 { width: 420px; height: 420px; background: #ff8fc7; top: -120px; left: -100px; animation: orb1 16s ease-in-out infinite; }
        .orb-2 { width: 380px; height: 380px; background: #c9a2ff; bottom: -120px; right: -80px; animation: orb2 20s ease-in-out infinite; }
        .orb-3 { width: 300px; height: 300px; background: #ffd1a1; top: 40%; left: 55%; animation: orb3 22s ease-in-out infinite; }
        @keyframes orb1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(140px, 120px) scale(1.2); } }
        @keyframes orb2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-160px, -100px) scale(1.25); } }
        @keyframes orb3 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-120px, 80px) scale(0.85); } }

        /* ---------- twinkling stars ---------- */
        .twinkle { animation: twinkle ease-in-out infinite; }
        @keyframes twinkle {
          0%,100% { opacity: .1; transform: scale(.6); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        /* ---------- rising hearts ---------- */
        .rise-heart { animation: rise linear infinite; }
        @keyframes rise {
          0% { transform: translate(0, 0) rotate(-10deg) scale(.6); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translate(var(--drift), -55vh) rotate(12deg) scale(1); }
          100% { transform: translate(calc(var(--drift) * -1), -115vh) rotate(-12deg) scale(1.15); opacity: 0; }
        }

        /* ---------- falling petals ---------- */
        .petal {
          top: -30px;
          background: radial-gradient(circle at 30% 30%, #ffc2dd, #ff7eb6);
          border-radius: 70% 0 70% 0;
          opacity: .75;
          animation: petal-fall linear infinite;
        }
        @keyframes petal-fall {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          10% { opacity: .8; }
          50% { transform: translate(var(--sway), 55vh) rotate(180deg); }
          100% { transform: translate(calc(var(--sway) * -.6), 110vh) rotate(380deg); opacity: 0; }
        }

        /* ---------- shimmering gradient text ---------- */
        .shimmer-text {
          background: linear-gradient(90deg, #ec4899, #a855f7, #f59e0b, #ec4899);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 5s infinite linear;
        }
        @keyframes shimmer { 0% { background-position: 0% 0; } 100% { background-position: 300% 0; } }

        /* ---------- title letters pop in ---------- */
        .letter-pop { animation: letter-pop .7s cubic-bezier(.2,1.4,.4,1) backwards, shimmer 5s infinite linear; }
        @keyframes letter-pop {
          0% { opacity: 0; transform: translateY(40px) scale(.3) rotate(-15deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0); }
        }

        /* ---------- generic entrances ---------- */
        /* "backwards" fill: hidden during the delay, then released so hover effects still work */
        .fade-up { animation: fade-up .8s cubic-bezier(.2,.8,.2,1) backwards; }
        @keyframes fade-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .slide-left { animation: slide-left .8s cubic-bezier(.2,.8,.2,1) backwards; }
        @keyframes slide-left { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        .slide-right { animation: slide-right .8s cubic-bezier(.2,.8,.2,1) backwards; }
        @keyframes slide-right { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        .zoom-in { animation: zoom-in .7s cubic-bezier(.2,1.2,.3,1) backwards; }
        @keyframes zoom-in { from { opacity: 0; transform: scale(.7); } to { opacity: 1; transform: scale(1); } }

        /* keep long content inside the screen on small devices */
        html, body { overflow-x: hidden; }
        @media (max-width: 640px) {
          .orb-1 { width: 240px; height: 240px; }
          .orb-2 { width: 220px; height: 220px; }
          .orb-3 { width: 180px; height: 180px; }
        }

        /* ---------- crown / floating ---------- */
        .float-y { animation: float-y 3.5s ease-in-out infinite; }
        @keyframes float-y { 0%,100% { transform: translateY(0) rotate(-4deg); } 50% { transform: translateY(-14px) rotate(4deg); } }
        .heartbeat { animation: heartbeat 1.4s ease-in-out infinite; }
        @keyframes heartbeat {
          0%,100% { transform: scale(1); }
          14% { transform: scale(1.25); }
          28% { transform: scale(1); }
          42% { transform: scale(1.18); }
          70% { transform: scale(1); }
        }
        .spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ---------- glow pulse ---------- */
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        @keyframes pulse-glow {
          0%,100% { box-shadow: 0 10px 40px rgba(236,72,153,.25); }
          50% { box-shadow: 0 10px 70px rgba(168,85,247,.55); }
        }

        /* ---------- animated gradient border ---------- */
        .glow-border { position: relative; }
        .glow-border::before {
          content: ''; position: absolute; inset: -3px; border-radius: inherit; z-index: -1;
          background: conic-gradient(from var(--a, 0deg), #ff5fa2, #a855f7, #fbbf24, #ff5fa2);
          animation: border-spin 6s linear infinite;
          filter: blur(6px); opacity: .85;
        }
        @property --a { syntax: '<angle>'; inherits: false; initial-value: 0deg; }
        @keyframes border-spin { to { --a: 360deg; } }

        /* ---------- Ken Burns gallery image ---------- */
        .ken-burns { animation: ken-burns 6s ease-out forwards, img-in .9s ease forwards; }
        @keyframes ken-burns { from { transform: scale(1.02); } to { transform: scale(1.14) translate(-1.5%, -1%); } }
        @keyframes img-in { from { opacity: 0; filter: blur(12px); } to { opacity: 1; filter: blur(0); } }
        .caption-in { animation: caption-in .8s .2s cubic-bezier(.2,.8,.2,1) both; }
        @keyframes caption-in { from { opacity: 0; transform: translateY(20px); letter-spacing: .3em; } to { opacity: 1; transform: translateY(0); letter-spacing: normal; } }

        /* ---------- progress bar for slideshow ---------- */
        .progress-fill { transform-origin: left; animation: progress ${SLIDE_MS}ms linear forwards; }
        @keyframes progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }

        /* ---------- thumbnail hover ---------- */
        .thumb { transition: transform .35s cubic-bezier(.2,1.2,.3,1), box-shadow .35s, opacity .3s; }
        .thumb:hover { transform: translateY(-6px) rotate(-2deg) scale(1.08); box-shadow: 0 14px 28px rgba(236,72,153,.35); z-index: 5; }

        /* ---------- cards ---------- */
        .lift { transition: transform .35s cubic-bezier(.2,1.2,.3,1), box-shadow .35s; }
        .lift:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 20px 40px rgba(236,72,153,.25); }

        /* ---------- shine sweep ---------- */
        .shine { position: relative; overflow: hidden; }
        .shine::after {
          content: ''; position: absolute; top: 0; left: -120%; width: 60%; height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255,255,255,.55), transparent);
          transform: skewX(-20deg); animation: shine 4.5s ease-in-out infinite;
        }
        @keyframes shine { 0% { left: -120%; } 40%,100% { left: 160%; } }

        /* ---------- typewriter caret ---------- */
        .caret { display: inline-block; width: 3px; height: 1.1em; margin-left: 4px; background: currentColor; vertical-align: -0.15em; animation: blink 1s steps(2) infinite; }
        @keyframes blink { 50% { opacity: 0; } }

        /* ---------- click burst ---------- */
        .burst { position: fixed; pointer-events: none; z-index: 100; animation: burst 1.2s cubic-bezier(.1,.8,.3,1) forwards; }
        @keyframes burst {
          0% { transform: translate(-50%, -50%) scale(.2); opacity: 1; }
          100% { transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(1.2) rotate(40deg); opacity: 0; }
        }

        /* ---------- splash screen ---------- */
        .splash { transition: opacity 1s ease, transform 1.1s cubic-bezier(.7,0,.3,1), filter 1s; }
        .splash.open { opacity: 0; transform: scale(1.6); filter: blur(10px); pointer-events: none; }
        .envelope-pulse { animation: env-pulse 2s ease-in-out infinite; }
        @keyframes env-pulse { 0%,100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(236,72,153,.5); } 50% { transform: scale(1.06); box-shadow: 0 0 0 28px rgba(236,72,153,0); } }

        /* ---------- tab pill ---------- */
        .tab-btn { transition: transform .3s cubic-bezier(.2,1.4,.4,1), background .3s, box-shadow .3s; }
        .tab-btn:hover { transform: translateY(-3px) scale(1.05); }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
        }
      `}</style>

      <Background />

      {/* click-burst particles */}
      {bursts.map((b) => (
        <span
          key={b.id}
          className="burst"
          style={{ left: b.x, top: b.y, fontSize: b.size, '--dx': `${b.dx}px`, '--dy': `${b.dy}px` }}
        >
          {b.emoji}
        </span>
      ))}

      {/* ---------------- SPLASH ---------------- */}
      {!splashGone && (
        <div
          className={`splash fixed inset-0 z-50 flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-pink-200 via-fuchsia-200 to-purple-300 ${opened ? 'open' : ''}`}
        >
          <Crown className="float-y text-yellow-500 drop-shadow-lg mb-4 sm:mb-6 w-14 h-14 sm:w-20 sm:h-20" fill="currentColor" />
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-pink-700 mb-3 fade-up max-w-2xl" style={{ fontFamily: 'Georgia, serif', animationDelay: '.2s' }}>
            Nandini, a surprise awaits you…
          </h2>
          <p className="text-pink-600 italic mb-8 sm:mb-10 fade-up" style={{ animationDelay: '.6s' }}>
            made with all my love
          </p>
          {/* fade-up lives on the wrapper so it doesn't clash with the button's pulse animation */}
          <div className="fade-up" style={{ animationDelay: '1s' }}>
            <button
              onClick={openSurprise}
              className="envelope-pulse px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-base sm:text-lg font-semibold shadow-2xl flex items-center gap-3"
            >
              <Heart className="heartbeat" size={22} fill="currentColor" />
              Tap to open
              <Sparkles size={22} />
            </button>
          </div>
        </div>
      )}

      {/* ---------------- HEADER ---------------- */}
      <header className="relative z-10 text-center pt-6 sm:pt-10 pb-4 sm:pb-6 px-4">
        {opened && (
          <>
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4 zoom-in" style={{ animationDelay: '.3s' }}>
              <Crown className="float-y text-yellow-500 drop-shadow-lg w-9 h-9 sm:w-[52px] sm:h-[52px]" fill="currentColor" />
              <Sparkles className="spin-slow text-pink-400 w-6 h-6 sm:w-[34px] sm:h-[34px]" />
              <Crown className="float-y text-yellow-500 drop-shadow-lg w-9 h-9 sm:w-[52px] sm:h-[52px]" fill="currentColor" style={{ animationDelay: '.6s' }} />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-3 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              <AnimatedTitle text="Happy Princess Day" />
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-pink-600 font-light italic fade-up" style={{ animationDelay: '2.2s' }}>
              18th November • A day to celebrate my queen
            </p>
            <div className="flex items-center justify-center gap-3 mt-4 fade-up" style={{ animationDelay: '2.5s' }}>
              <Stars className="text-yellow-400 spin-slow" size={22} />
              <Heart className="heartbeat text-pink-500" size={26} fill="currentColor" />
              <Stars className="text-yellow-400 spin-slow" size={22} />
            </div>
          </>
        )}
      </header>

      {/* ---------------- TABS ---------------- */}
      {opened && (
        <div className="relative z-10 flex justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 px-3 sm:px-4 flex-wrap fade-up" style={{ animationDelay: '2.7s' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={(e) => switchTab(tab.id, e)}
              className={`tab-btn flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105 pulse-glow shine'
                  : 'bg-white/80 text-pink-600 hover:bg-white shadow-md'
              }`}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* ---------------- MAIN ---------------- */}
      {opened && (
        <main className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-4 pb-14 sm:pb-20">
          {/* ===== GALLERY ===== */}
          {activeTab === 'gallery' && (
            <div key="gallery" className="space-y-8">
              <div className="glow-border relative bg-white p-2 sm:p-4 rounded-2xl sm:rounded-3xl shadow-2xl zoom-in">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/9] bg-pink-100">
                  <img
                    key={currentImageIndex}
                    src={images[currentImageIndex].url}
                    alt={images[currentImageIndex].caption}
                    className="ken-burns absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                  <div key={`cap-${currentImageIndex}`} className="caption-in absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                      <Heart size={18} fill="currentColor" className="heartbeat text-pink-400" />
                      <span className="text-xs sm:text-sm uppercase tracking-wider opacity-90">
                        Memory {currentImageIndex + 1} of {images.length}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold drop-shadow">{images[currentImageIndex].caption}</h3>
                  </div>

                  {/* slideshow progress bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/25">
                    <div key={`bar-${currentImageIndex}`} className="progress-fill h-full bg-gradient-to-r from-pink-400 to-yellow-300" />
                  </div>
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-3 sm:left-7 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-125"
                  aria-label="Previous memory"
                >
                  <ChevronLeft size={22} className="text-pink-600" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-3 sm:right-7 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-125"
                  aria-label="Next memory"
                >
                  <ChevronRight size={22} className="text-pink-600" />
                </button>
              </div>

              <div className="bg-white/70 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl fade-up" style={{ animationDelay: '.3s' }}>
                <h3 className="text-lg sm:text-2xl font-bold text-pink-600 mb-4 flex items-center gap-2">
                  <Camera size={22} />
                  All Our Beautiful Memories
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      className={`thumb zoom-in relative overflow-hidden rounded-xl aspect-square ${
                        idx === currentImageIndex ? 'ring-4 ring-pink-500 scale-105 shadow-lg' : 'opacity-85 hover:opacity-100'
                      }`}
                      style={{ animationDelay: `${0.35 + idx * 0.04}s` }}
                    >
                      <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                      {idx === currentImageIndex && (
                        <div className="absolute inset-0 bg-pink-500/25 flex items-center justify-center">
                          <Heart size={26} fill="white" className="heartbeat text-white drop-shadow-lg" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ===== LOVE LINES ===== */}
          {activeTab === 'lines' && (
            <div key="lines" className="space-y-6">
              <div className="glow-border bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl text-white text-center relative overflow-hidden zoom-in shine">
                <Quote size={48} className="float-y absolute top-3 left-3 opacity-20" />
                <Quote size={48} className="float-y absolute bottom-3 right-3 opacity-20 rotate-180" />
                <div className="relative z-10 min-h-[260px] sm:min-h-[200px] md:min-h-[160px] flex items-center justify-center px-1 sm:px-4">
                  <p className="text-base sm:text-xl md:text-3xl font-light italic leading-relaxed break-words">
                    “{typed}
                    <span className="caret" />
                    ”
                  </p>
                </div>
                <div className="flex justify-center flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
                  {loveLines.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); pickLine(idx); }}
                      aria-label={`Love note ${idx + 1}`}
                      className={`h-2.5 sm:h-3 rounded-full transition-all duration-500 ${
                        idx === currentLine ? 'bg-white w-6 sm:w-8' : 'bg-white/40 hover:bg-white/70 w-2.5 sm:w-3'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                {loveLines.map((line, idx) => (
                  <div
                    key={idx}
                    className={`${idx % 2 === 0 ? 'slide-left' : 'slide-right'} lift bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border-l-4 border-pink-400`}
                    style={{ animationDelay: `${0.2 + idx * 0.07}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <Heart size={20} className="heartbeat text-pink-500 mt-1 flex-shrink-0" fill="currentColor" style={{ animationDelay: `${idx * 0.15}s` }} />
                      <p className="text-gray-700 italic leading-relaxed">{line}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== WISHES ===== */}
          {activeTab === 'wishes' && (
            <div key="wishes" className="space-y-6">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 shadow-2xl zoom-in">
                <div className="text-center mb-6 sm:mb-8">
                  <Gift className="float-y text-pink-500 mx-auto mb-3 sm:mb-4 w-12 h-12 sm:w-16 sm:h-16" />
                  <h2 className="text-3xl sm:text-4xl font-bold shimmer-text mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    My Wishes For You
                  </h2>
                  <p className="text-gray-600 italic">On this special Princess Day</p>
                </div>

                <div className="space-y-4">
                  {wishes.map((wish, idx) => (
                    <div
                      key={idx}
                      className={`${idx % 2 === 0 ? 'slide-left' : 'slide-right'} lift shine bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4 sm:p-6 border border-pink-200`}
                      style={{ animationDelay: `${0.3 + idx * 0.18}s` }}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <span className="float-y text-3xl sm:text-4xl" style={{ animationDelay: `${idx * 0.4}s` }}>{wish.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-pink-600 mb-2">{wish.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{wish.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glow-border bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl text-white text-center relative overflow-hidden fade-up" style={{ animationDelay: '1.2s' }}>
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  {Array.from({ length: 16 }, (_, i) => (
                    <Heart
                      key={i}
                      size={30 + (i % 4) * 10}
                      className="absolute float-y"
                      style={{
                        left: `${(i * 37) % 100}%`,
                        top: `${(i * 53) % 100}%`,
                        animationDelay: `${(i % 6) * 0.5}s`,
                      }}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <div className="relative z-10">
                  <Crown size={52} className="float-y mx-auto mb-4 text-yellow-300 drop-shadow-lg" fill="currentColor" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                    You Are My Forever Princess
                  </h2>
                  <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto leading-relaxed">
                    Happy Princess Day, my love. Thank you for being the most beautiful part of my life.
                    You make every ordinary day feel like a fairytale. I love you more than words can say.
                  </p>
                  <div className="flex items-center justify-center gap-3 mt-6">
                    <Heart size={24} fill="currentColor" className="heartbeat" />
                    <Heart size={34} fill="currentColor" className="heartbeat" style={{ animationDelay: '.2s' }} />
                    <Heart size={24} fill="currentColor" className="heartbeat" style={{ animationDelay: '.4s' }} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      )}

      {/* ---------------- FOOTER ---------------- */}
      {opened && (
        <footer className="relative z-10 text-center py-8 border-t border-pink-200 bg-white/50 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart size={20} className="heartbeat text-pink-500" fill="currentColor" />
            <span className="text-pink-600 font-semibold">Made with love, just for you</span>
            <Heart size={20} className="heartbeat text-pink-500" fill="currentColor" />
          </div>
          <p className="text-gray-500 text-sm">Happy Princess Day • 18th November • Forever Yours</p>
          <div className="flex items-center justify-center gap-2 mt-3 text-pink-400">
            <Sparkles size={16} className="spin-slow" />
            <Crown size={16} />
            <Sparkles size={16} className="spin-slow" />
          </div>
        </footer>
      )}
    </div>
  );
};

export default PrincessDayWebsite;