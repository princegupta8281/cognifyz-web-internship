import { useState, useEffect } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Menu,
  X,
  Clock,
  Palette,
  Smartphone,
  Image as ImageIcon,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Send,
  Award,
  ShieldCheck,
  Video,
  Mail,
  Globe,
  Linkedin,
  Instagram,
  ArrowRight,
  Layers,
  Terminal,
  Cpu,
  Users,
  Briefcase,
  ExternalLink,
  Check,
  Copy,
  Sun,
  Moon,
  FileCode2,
  Laptop,
  Tablet,
  BadgeCheck
} from 'lucide-react';

const IMAGES = {
  hero: "./images/hero.jpg",
  aiData: "./images/ai-data.jpg",
  webDesign: "./images/web-design.jpg",
  cloudMentor: "./images/cloud-mentor.jpg"
};

const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Collaborative Web Engineering Studio',
    category: 'Level 3 • Enterprise Landing Architecture',
    description: 'High-velocity agile product studio where Cognifyz interns architect production-ready React, Tailwind CSS, and full-stack interfaces.',
    src: IMAGES.hero,
    stats: '12 Weeks • Live Mentorship',
    resolution: '3840 × 2160 UHD',
    tech: ['React 18', 'Tailwind CSS', 'Design Systems']
  },
  {
    id: 'gal-2',
    title: 'AI & Neural Data Intelligence Suite',
    category: 'Cognifyz Core • Where Data Meets Intelligence',
    description: 'Real-time neural network telemetry and predictive analytics dashboards engineered by Cognifyz Data Science & AI teams.',
    src: IMAGES.aiData,
    stats: 'AI / ML Integration',
    resolution: '2560 × 1920 Retina',
    tech: ['Neural Pipelines', 'Data Visualization', 'AI Telemetry']
  },
  {
    id: 'gal-3',
    title: 'Multi-Device Adaptive UI Ecosystem',
    category: 'Level 2 • Mobile-First CSS & Grid Systems',
    description: 'Pixel-perfect responsive layouts engineered with fluid CSS media queries and modular component frameworks across desktop, tablet, and mobile.',
    src: IMAGES.webDesign,
    stats: '100% Lighthouse UI Score',
    resolution: '2560 × 1920 Retina',
    tech: ['CSS Grid', 'Media Queries', 'Fluid Breakpoints']
  },
  {
    id: 'gal-4',
    title: 'Cloud Architecture & Senior Code Reviews',
    category: 'Level 1–3 • Mentorship & Production CI/CD',
    description: '1-on-1 architecture pairing sessions, strict academic integrity verification, and cloud deployment workflows guided by principal engineers.',
    src: IMAGES.cloudMentor,
    stats: 'MSME Registered Program',
    resolution: '2560 × 1920 Retina',
    tech: ['Cloud Native', 'Code Review', 'MSME Certified']
  }
];

const FRAMEWORK_CARDS = [
  {
    id: 'card-1',
    badge: 'Bulma / UIKit Architecture',
    category: 'Data Science & AI',
    title: 'Neural Analytics Engine',
    description: 'Delivering high-impact data science, artificial intelligence (AI), and machine learning (ML) solutions tailored for modern enterprise scale.',
    image: IMAGES.aiData,
    metrics: '99.4% Precision',
    author: 'Cognifyz AI Lab',
    accent: 'bg-zinc-900/90 text-zinc-200 border border-zinc-700'
  },
  {
    id: 'card-2',
    badge: 'Bootstrap 5 Grid System',
    category: 'Full-Stack Web Engineering',
    title: 'Adaptive Design Systems',
    description: 'Crafting ultra-responsive, mobile-first web applications using modern front-end frameworks, semantic HTML5, and scalable CSS architectures.',
    image: IMAGES.webDesign,
    metrics: '< 40ms Render',
    author: 'Frontend Architecture Guild',
    accent: 'bg-zinc-900/90 text-zinc-200 border border-zinc-700'
  },
  {
    id: 'card-3',
    badge: 'Foundation Fluid Layout',
    category: 'Training & Career Accelerator',
    title: 'Industry Mentorship Track',
    description: 'Structured training programs designed to elevate practical engineering skills and bridge the gap between academic theory and production code.',
    image: IMAGES.cloudMentor,
    metrics: '3 Skill Levels',
    author: 'Cognifyz Internship Cell',
    accent: 'bg-zinc-900/90 text-zinc-200 border border-zinc-700'
  }
];

const BUTTON_PALETTE = [
  {
    name: 'Obsidian Carbon',
    bg: 'bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700',
    hex: '#18181B',
    ring: 'ring-zinc-600',
    glow: 'shadow-black/40'
  },
  {
    name: 'Electric Indigo',
    bg: 'bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-500',
    hex: '#6366F1',
    ring: 'ring-indigo-400/50',
    glow: 'shadow-indigo-600/20'
  },
  {
    name: 'Titanium Platinum',
    bg: 'bg-zinc-100 hover:bg-white text-zinc-950 border border-zinc-300',
    hex: '#F4F4F5',
    ring: 'ring-zinc-400/50',
    glow: 'shadow-zinc-500/10'
  },
  {
    name: 'Nordic Slate',
    bg: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-600',
    hex: '#1E293B',
    ring: 'ring-slate-500/50',
    glow: 'shadow-slate-900/30'
  },
  {
    name: 'Alpine Emerald',
    bg: 'bg-emerald-950 hover:bg-emerald-900 text-emerald-200 border border-emerald-800',
    hex: '#064E3B',
    ring: 'ring-emerald-700/50',
    glow: 'shadow-emerald-950/30'
  },
  {
    name: 'Warm Bronze',
    bg: 'bg-stone-800 hover:bg-stone-700 text-stone-100 border border-stone-600',
    hex: '#292524',
    ring: 'ring-stone-600/50',
    glow: 'shadow-stone-950/30'
  }
];

const CODE_SNIPPETS = {
  l1t1: `<!-- Level 1 Task 1: Semantic Webpage, Single-Input Form & 3-Link Nav -->
<header class="cognifyz-navbar">
  <nav aria-label="Primary Navigation">
    <a href="#home" class="nav-link active">Home</a>
    <a href="#curriculum" class="nav-link">Curriculum</a>
    <a href="#showcase" class="nav-link">Showcase</a>
  </nav>
</header>

<section class="hero-card">
  <h1>Cognifyz Web Engineering Architecture</h1>
  <p>Where Data Meets Intelligence — building production-ready web interfaces.</p>
  <img src="showcase-preview.jpg" alt="Cognifyz Studio" />
  <form onsubmit="handleGoalSubmit(event)" class="single-input-form">
    <input type="text" placeholder="Enter your sprint deliverable..." required />
    <button type="submit">Deploy Task</button>
  </form>
</section>`,
  l1t2: `// Level 1 Task 2: Dynamic Color Button, Time-Aware Greeting & Calculator
const palette = ['#18181B', '#FCD34D', '#F4F4F5', '#1E293B', '#064E3B'];
let idx = 0;

function cycleButtonColor(btnElement) {
  idx = (idx + 1) % palette.length;
  btnElement.style.backgroundColor = palette[idx];
}

function getTimeBasedGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning, Innovator! Ready for today’s sprint?';
  if (hour < 17) return 'Good Afternoon, Builder! Keep shipping clean code.';
  return 'Good Evening, Architect! Reviewing your responsive layouts.';
}

function calculateSum(numA, numB) {
  return Number((parseFloat(numA || 0) + parseFloat(numB || 0)).toFixed(4));
}`,
  l2: `/* Level 2 Tasks 1 & 2: Framework Card Grid & Responsive Media Queries */
.cognifyz-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .cognifyz-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 640px) {
  .cognifyz-grid { grid-template-columns: 1fr; }
  .desktop-nav { display: none; }
  .hamburger-trigger { display: inline-flex; }
}`,
  l3: `// Level 3 Tasks 1 & 2: Auto Slideshow, Lightbox & Internship Landing CTA
useEffect(() => {
  if (!isPlaying) return;
  const interval = setInterval(() => {
    setActiveSlide((prev) => (prev + 1) % galleryItems.length);
  }, 3800);
  return () => clearInterval(interval);
}, [isPlaying]);`
};

export default function App() {
  // Modern Obsidian Dark Mode ('dark'), toggleable to Clean Light ('light')
  const [darkMode, setDarkMode] = useState(true);

  // Navigation & Mobile Drawer
  const [activeSection, setActiveSection] = useState('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLevelTab, setActiveLevelTab] = useState('all');

  // Code Inspector Modal / Drawer state for each level
  const [activeCodeView, setActiveCodeView] = useState(null); // 'l1t1' | 'l1t2' | 'l2' | 'l3' | null
  const [copiedCode, setCopiedCode] = useState(false);

  // Interactive Task Completion Tracker
  const [completedTasks, setCompletedTasks] = useState({
    l1t1: true,
    l1t2: true,
    l2t1: true,
    l2t2: true,
    l3t1: true,
    l3t2: true
  });

  // Level 1 Task 1 State: 3-Link Nav, Content Switcher, Single-Input Form
  const [l1SubNav, setL1SubNav] = useState('home');
  const [l1InputText, setL1InputText] = useState('');
  const [l1Submissions, setL1Submissions] = useState([
    { id: 101, value: 'Ship glassmorphic React landing page for Level 3', time: '10:42 AM' },
    { id: 102, value: 'Configure responsive CSS media query breakpoints', time: '11:15 AM' }
  ]);

  // Level 1 Task 2 State: Dynamic Color Button, Time-Based Greeting Alert Box, Calculator
  const [colorIndex, setColorIndex] = useState(0);
  const [clickCount, setClickCount] = useState(1);
  const [greetingBanner, setGreetingBanner] = useState({
    title: 'System Telemetry Ready — Click "Show Time Greeting Alert"',
    message: 'Click the button above to inspect your real-time system clock and generate a dynamic contextual greeting alert.',
    time: '11:55 AM',
    badge: 'Live Clock Sensor'
  });
  const [calcNum1, setCalcNum1] = useState('128.5');
  const [calcNum2, setCalcNum2] = useState('256.5');
  const [calcOperation, setCalcOperation] = useState('+');
  const [calcHistory, setCalcHistory] = useState([
    { expr: '128.5 + 256.5', sum: 385 },
    { expr: '42 + 58', sum: 100 }
  ]);

  // Level 3 Task 2 Inline Contact Form State with Validation
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'Web Development Internship Inquiry',
    message: ''
  });
  const [contactErrors, setContactErrors] = useState({});
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Level 2 Task 1 & 2 State: Framework Cards, Grid Switcher & Responsive Viewport Studio
  const [gridColumns, setGridColumns] = useState(3);
  const [savedCards, setSavedCards] = useState({ 'card-1': true });
  const [demoMobileMenuOpen, setDemoMobileMenuOpen] = useState(false);
  const [simulatedViewport, setSimulatedViewport] = useState('desktop'); // 'mobile' | 'tablet' | 'desktop'

  // Level 3 Task 1 State: Image Gallery Lightbox & Automatic Slideshow
  const [selectedLightboxImage, setSelectedLightboxImage] = useState(null);
  const [lightboxZoom, setLightboxZoom] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(true);

  // Level 3 Task 2 State: Application Modal & Certificate Preview Modal
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);
  const [applicantName, setApplicantName] = useState('Aarav Verma');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantTrack, setApplicantTrack] = useState('All 3 Levels (Executive Full-Stack Track)');
  const [applicantGithub, setApplicantGithub] = useState('');
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [copiedTag, setCopiedTag] = useState(false);

  // Automatic Slideshow Effect (Level 3 Task 1)
  useEffect(() => {
    if (!isSlideshowPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % GALLERY_ITEMS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isSlideshowPlaying]);

  // Smooth Section Scroll with Auto-Tab Unhiding
  const navigateTo = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    if (sectionId === 'level-1' && activeLevelTab !== 'all' && activeLevelTab !== 'level1') {
      setActiveLevelTab('all');
    } else if (sectionId === 'level-2' && activeLevelTab !== 'all' && activeLevelTab !== 'level2') {
      setActiveLevelTab('all');
    } else if (sectionId === 'level-3' && activeLevelTab !== 'all' && activeLevelTab !== 'level3') {
      setActiveLevelTab('all');
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  // Toggle task completion badge
  const toggleTaskDone = (key) => {
    setCompletedTasks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(completedTasks).filter(Boolean).length;

  // Level 1 Task 1: Form Submit Handler
  const handleL1FormSubmit = (e) => {
    e.preventDefault();
    const trimmed = l1InputText.trim();
    if (!trimmed) return;
    setL1Submissions((prev) => [
      {
        id: Date.now(),
        value: trimmed,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      },
      ...prev
    ]);
    setL1InputText('');
  };

  // Level 1 Task 2: Color Button Handler
  const handleColorChange = () => {
    setColorIndex((prev) => (prev + 1) % BUTTON_PALETTE.length);
    setClickCount((prev) => prev + 1);
  };

  // Level 1 Task 2: Time-based Greeting Alert Handler
  const triggerTimeGreeting = () => {
    const now = new Date();
    const hour = now.getHours();
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    let greetingTitle = 'Good Evening, Principal Engineer!';
    let greetingSub = 'Late-night engineering session detected! Your Cognifyz React build is compiling with zero warnings.';
    let periodBadge = 'Night Shift Window';

    if (hour >= 5 && hour < 12) {
      greetingTitle = 'Good Morning, Lead Innovator!';
      greetingSub = 'Optimal morning focus window! Time to architect clean HTML5, CSS Grid, and React components at Cognifyz.';
      periodBadge = 'Morning Standup Window';
    } else if (hour >= 12 && hour < 17) {
      greetingTitle = 'Good Afternoon, Full-Stack Builder!';
      greetingSub = 'Mid-day sprint in progress! Keep pushing high-impact UI components for your Cognifyz internship portfolio.';
      periodBadge = 'Afternoon Sprint';
    } else if (hour >= 17 && hour < 21) {
      greetingTitle = 'Good Evening, Product Architect!';
      greetingSub = 'Wrapping up today’s deliverables? Test your responsive media queries across mobile and desktop viewports.';
      periodBadge = 'Evening Review';
    } else {
      greetingTitle = 'Good Night / Late Night, Innovator!';
      greetingSub = 'Late-night engineering session detected! Your Cognifyz React build is running smoothly with full test coverage.';
      periodBadge = 'Night / Late Shift Window';
    }

    setGreetingBanner({
      title: greetingTitle,
      message: greetingSub,
      time: formattedTime,
      badge: periodBadge
    });
  };

  // Level 1 Task 2: Dynamic Arithmetic Calculator
  const parsedNum1 = parseFloat(calcNum1) || 0;
  const parsedNum2 = parseFloat(calcNum2) || 0;

  const calculateResult = (n1, n2, op) => {
    switch (op) {
      case '+': return Number((n1 + n2).toFixed(4));
      case '-': return Number((n1 - n2).toFixed(4));
      case '*': return Number((n1 * n2).toFixed(4));
      case '/': return n2 !== 0 ? Number((n1 / n2).toFixed(4)) : 'Error (Div by 0)';
      default: return Number((n1 + n2).toFixed(4));
    }
  };

  const currentSum = calculateResult(parsedNum1, parsedNum2, calcOperation);

  const handleRecordCalculation = (e) => {
    e.preventDefault();
    setCalcHistory((prev) => [
      { expr: `${parsedNum1} ${calcOperation} ${parsedNum2}`, sum: currentSum },
      ...prev.slice(0, 4)
    ]);
  };

  // Level 3 Task 2: Inline Contact Form Validation
  const validateContactForm = () => {
    const errs = {};
    if (!contactForm.name.trim()) {
      errs.name = 'Full name is required.';
    } else if (contactForm.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactForm.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(contactForm.email.trim())) {
      errs.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    if (!contactForm.message.trim()) {
      errs.message = 'Please provide a message or inquiry.';
    } else if (contactForm.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setContactErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (validateContactForm()) {
      setContactSubmitted(true);
      setTimeout(() => {
        setContactForm({
          name: '',
          email: '',
          subject: 'Web Development Internship Inquiry',
          message: ''
        });
      }, 400);
    }
  };

  // Copy LinkedIn Hashtags
  const handleCopyHashtags = () => {
    const tags = '#cognifyz #cognifyzTech #cognifyzTechnologies #WebDevelopment #ReactJS';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(tags);
      } else {
        const ta = document.createElement('textarea');
        ta.value = tags;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopiedTag(true);
      setTimeout(() => setCopiedTag(false), 2500);
    } catch {
      setCopiedTag(true);
      setTimeout(() => setCopiedTag(false), 2500);
    }
  };

  // Copy Source Code Snippet
  const handleCopySnippet = (codeStr) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(codeStr);
      } else {
        const ta = document.createElement('textarea');
        ta.value = codeStr;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  // Level 3 Task 2: Submit Internship Application
  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    if (!applicantName.trim() || !applicantEmail.trim()) return;
    setApplicationSubmitted(true);
  };

  const currentPalette = BUTTON_PALETTE[colorIndex];

  // Clean Professional Executive Dark & Light Theme
  const themeBg = darkMode
    ? 'bg-[#090A0F] text-zinc-100 bg-grid-subtle'
    : 'bg-[#F8FAFC] text-zinc-900 bg-grid-light';
  const cardBg = darkMode
    ? 'bg-[#111217] border border-zinc-800 text-zinc-100 shadow-md hover:border-zinc-700/80 transition-colors duration-200'
    : 'bg-white border border-zinc-200/90 text-zinc-900 shadow-sm hover:border-zinc-300 transition-colors duration-200';
  const subCardBg = darkMode
    ? 'bg-[#0D0E12] border border-zinc-800/80 text-zinc-200'
    : 'bg-zinc-50 border border-zinc-200 text-zinc-800';
  const mutedText = darkMode ? 'text-zinc-400' : 'text-zinc-500';
  const headingText = darkMode ? 'text-white' : 'text-zinc-900';
  const subHeadingText = darkMode ? 'text-zinc-200' : 'text-zinc-800';
  const borderCol = darkMode ? 'border-zinc-800' : 'border-zinc-200';
  const cardHeaderBg = darkMode
    ? 'bg-[#14151C] border-zinc-800 text-white'
    : 'bg-zinc-50/90 border-zinc-200 text-zinc-900';
  const badgeBg = darkMode
    ? 'bg-zinc-900 border-zinc-800 text-zinc-300'
    : 'bg-zinc-100 border-zinc-200 text-zinc-700';
  const iconBoxBg = darkMode
    ? 'bg-zinc-800/80 border-zinc-700 text-zinc-300'
    : 'bg-zinc-100 border-zinc-200 text-zinc-700';
  const inputBg = darkMode
    ? 'bg-[#090A0F] border-zinc-800 text-white placeholder:text-zinc-500 focus:border-zinc-500'
    : 'bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-500 shadow-xs';
  const primaryBtn = darkMode
    ? 'bg-white hover:bg-zinc-200 text-zinc-950 shadow-sm'
    : 'bg-zinc-900 hover:bg-zinc-800 text-white shadow-sm';
  const secondaryBtn = darkMode
    ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border-zinc-800'
    : 'bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-300 shadow-xs';

  return (
    <div className={`w-full min-h-screen font-sans antialiased transition-colors duration-200 selection:bg-zinc-800 selection:text-white ${themeBg}`}>
      {/* =====================================================================
          STICKY MINIMALIST CLEAN NAVIGATION HEADER
         ===================================================================== */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-200 w-full ${
          darkMode
            ? 'bg-[#090A0F]/90 border-zinc-800 shadow-sm'
            : 'bg-white/90 border-zinc-200 shadow-sm'
        }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between py-3">
            {/* Brand Identity */}
            <button
              type="button"
              onClick={() => navigateTo('landing')}
              className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
            >
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${
                  darkMode
                    ? 'bg-zinc-900 border border-zinc-700 text-white shadow-sm group-hover:border-zinc-500'
                    : 'bg-zinc-900 text-white shadow-sm'
                }`}
              >
                <Cpu className="w-4 h-4 text-zinc-200" />
              </div>
              <div>
                <span className={`text-base font-bold tracking-tight ${headingText}`}>
                  Cognifyz
                </span>
                <p className={`text-[10px] font-medium tracking-wide ${mutedText}`}>
                  Where Data Meets Intelligence
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className={`hidden lg:flex items-center gap-1 p-1 rounded-xl border ${
                darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-100 border-zinc-200'
              }`}
            >
              {[
                { id: 'landing', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'level-1', label: 'Level 1' },
                { id: 'level-2', label: 'Level 2' },
                { id: 'level-3', label: 'Level 3' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => navigateTo(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      isActive
                        ? darkMode
                          ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                          : 'bg-white text-zinc-950 font-semibold shadow-sm'
                        : darkMode
                        ? 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                        : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Controls: Theme Switcher + Apply CTA + Hamburger Trigger */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle Dark or Light Mode"
                className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                  darkMode
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800'
                    : 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-100 shadow-xs'
                }`}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={() => {
                  setApplicationSubmitted(false);
                  setApplyModalOpen(true);
                }}
                className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer active:scale-95 ${primaryBtn}`}
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Hamburger Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Mobile Navigation Drawer"
                className={`lg:hidden p-2 rounded-lg border transition-colors cursor-pointer ${
                  darkMode
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-200 hover:bg-zinc-800'
                    : 'bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-100'
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Collapsible Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden border-b px-4 pt-3 pb-5 space-y-1.5 ${
              darkMode ? 'bg-[#0D0D10] border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
            }`}
          >
            {[
              { id: 'landing', label: 'Home' },
              { id: 'about', label: 'About Cognifyz' },
              { id: 'level-1', label: 'Level 1: Semantic HTML/CSS & JS' },
              { id: 'level-2', label: 'Level 2: Frameworks & Responsive Design' },
              { id: 'level-3', label: 'Level 3: Gallery & Contact' },
              { id: 'contact', label: 'Contact Us' }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigateTo(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-medium flex items-center justify-between cursor-pointer ${
                  activeSection === item.id
                    ? darkMode
                      ? 'bg-zinc-800 text-white font-semibold'
                      : 'bg-zinc-900 text-white font-semibold'
                    : darkMode
                    ? 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
                    : 'text-zinc-700 hover:bg-zinc-100'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </button>
            ))}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCertificateModalOpen(true);
                }}
                className={`py-2.5 px-3 rounded-lg border font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer ${secondaryBtn}`}
              >
                <Award className="w-4 h-4 text-zinc-400" />
                <span>View Certificate</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setApplicationSubmitted(false);
                  setApplyModalOpen(true);
                }}
                className={`py-2.5 px-3 rounded-lg font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer ${primaryBtn}`}
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* =====================================================================
            HERO & LANDING PAGE
           ===================================================================== */}
        <section id="landing" className={`relative overflow-hidden pt-4 sm:pt-6 pb-12 sm:pb-16 border-b ${borderCol}`}>
          <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left 7 Columns: Headline, Intro, Benefits, CTAs */}
              <div className="lg:col-span-7 space-y-5">
                <div
                  className={`inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium ${
                    darkMode
                      ? 'bg-zinc-900 border-zinc-800 text-zinc-300'
                      : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span>COGNIFYZ TECHNOLOGIES &bull; WEB DEVELOPMENT INTERNSHIP</span>
                </div>

                {/* Exact Headline required by PDF Page 11 with Clean Silver Emphasis */}
                <h1 className={`text-3xl sm:text-5xl lg:text-[46px] font-bold tracking-tight leading-[1.18] ${headingText}`}>
                  Web Developer Internship Opportunities at{' '}
                  <span className={`${darkMode ? 'text-brand-gradient' : 'text-brand-gradient-light'} font-extrabold`}>
                    Cognifyz Technologies
                  </span>
                </h1>

                {/* Overview & Duration */}
                <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${mutedText}`}>
                  Accelerate your software engineering career inside an industry-grade{' '}
                  <strong className={darkMode ? 'text-zinc-200 font-medium' : 'text-zinc-900 font-semibold'}>
                    4 to 12-week intensive internship program
                  </strong>
                  . Master production front-end engineering by completing{' '}
                  <strong className={darkMode ? 'text-zinc-100 font-medium' : 'text-zinc-900 font-semibold'}>
                    any 2 of 3 progressive skill levels
                  </strong>{' '}
                  (Level 1, Level 2, or Level 3) with senior code reviews, AI/ML ecosystem exposure, and verified MSME credentials.
                </p>

                {/* Executive Metric Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {[
                    {
                      icon: Briefcase,
                      title: 'Real-World Experience',
                      metric: '6 Production Tasks',
                      desc: 'Hands-on HTML5, CSS3, JS, React & Responsive Frameworks.'
                    },
                    {
                      icon: Users,
                      title: '1-on-1 Mentorship',
                      metric: 'Senior AI & Web Leads',
                      desc: 'Direct architectural feedback and LinkedIn portfolio review.'
                    },
                    {
                      icon: Award,
                      title: 'Verified Credentials',
                      metric: 'Offer Letter + Cert',
                      desc: 'MSME Business Forum recognized completion certificate.'
                    }
                  ].map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border transition-colors ${cardBg}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-[11px] font-semibold uppercase tracking-wider ${mutedText}`}>
                            {item.metric}
                          </span>
                          <IconComponent className="w-4 h-4 text-zinc-400" />
                        </div>
                        <div className={`text-sm font-semibold ${headingText}`}>{item.title}</div>
                        <p className={`text-xs mt-1 leading-relaxed ${mutedText}`}>{item.desc}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Call-to-Action (CTA) Buttons: "Apply Now" & "Learn More" + Certificate */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setApplicationSubmitted(false);
                      setApplyModalOpen(true);
                    }}
                    className={`px-5 py-2.5 rounded-lg font-semibold text-xs flex items-center gap-2 transition-all cursor-pointer active:scale-95 ${primaryBtn}`}
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => navigateTo('level-1')}
                    className={`px-4 py-2.5 rounded-lg font-medium text-xs border flex items-center gap-2 transition-colors cursor-pointer ${secondaryBtn}`}
                  >
                    <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Learn More & Launch Workbench</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCertificateModalOpen(true)}
                    className={`px-4 py-2.5 rounded-lg font-medium text-xs border flex items-center gap-1.5 transition-colors cursor-pointer ${secondaryBtn}`}
                  >
                    <BadgeCheck className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Offer Letter & Certificate</span>
                  </button>
                </div>
              </div>

              {/* Right 5 Columns: Clean Hero Showcase Card */}
              <div className="lg:col-span-5">
                <div className={`rounded-xl overflow-hidden border p-3 ${cardBg}`}>
                  {/* Minimal Studio Window Header */}
                  <div className="flex items-center justify-between px-2 py-1.5 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-700" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-700" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-700" />
                    </div>
                    <span className={`text-[11px] font-medium ${mutedText}`}>
                      Cognifyz Engineering Studio
                    </span>
                    <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded border ${badgeBg}`}>
                      ACTIVE
                    </span>
                  </div>

                  <div className="relative rounded-lg overflow-hidden group border border-zinc-800">
                    <img
                      src={IMAGES.hero}
                      alt="Cognifyz Web Development Studio"
                      className="w-full h-64 sm:h-72 object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent flex flex-col justify-end p-5 text-white">
                      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        <span>Interactive Multi-Level Engineering Suite</span>
                      </div>
                      <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                        Every task from Level 1, Level 2, and Level 3 is built as an interactive sandbox below with live code inspection.
                      </p>
                    </div>
                  </div>

                  {/* Quick Level Jump Pills */}
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {[
                      { id: 'level-1', title: 'Level 1', sub: 'HTML/CSS & JS' },
                      { id: 'level-2', title: 'Level 2', sub: 'Grid & RWD' },
                      { id: 'level-3', title: 'Level 3', sub: 'Media & CTA' }
                    ].map((lvl) => (
                      <button
                        key={lvl.id}
                        type="button"
                        onClick={() => navigateTo(lvl.id)}
                        className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                          darkMode
                            ? 'bg-zinc-900/80 hover:bg-zinc-800 border-zinc-800 text-zinc-200'
                            : 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200 text-zinc-800'
                        }`}
                      >
                        <div className={`text-xs font-semibold ${headingText}`}>{lvl.title}</div>
                        <div className={`text-[10px] mt-0.5 ${mutedText}`}>{lvl.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>


            {/* Qualifications & Tech Stack Matrix */}
            <div className={`mt-10 pt-6 border-t ${borderCol}`}>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                    Qualifications & Core Tech Stack
                  </span>
                  <p className={`text-xs mt-0.5 ${mutedText}`}>
                    Candidates applying for the Cognifyz Web Development Internship gain mastery across these core technologies:
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Semantic HTML5 Architecture',
                    'CSS3 Flexbox, Grid & Media Queries',
                    'Modern JavaScript (ES6+ DOM)',
                    'React.js Hooks & State Management',
                    'Bootstrap / Bulma / UIKit / Tailwind',
                    'Responsive Mobile-First Design',
                    'Git Version Control & Clean Code'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 ${
                        darkMode
                          ? 'bg-zinc-900/90 border-zinc-800 text-zinc-300'
                          : 'bg-white border-zinc-200 text-zinc-700'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            EXECUTIVE ABOUT US, INTERNSHIP RULES & SUBMISSION PROTOCOL (Pages 2–5)
           ===================================================================== */}
        <section id="about" className={`py-16 border-b ${borderCol}`}>
          <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className={`text-xs font-semibold uppercase tracking-widest ${mutedText}`}>
                  Corporate Profile & Program Governance
                </span>
                <h2 className={`text-2xl sm:text-3xl font-bold mt-1 tracking-tight ${headingText}`}>
                  About Cognifyz Technologies & Official Submission Protocol
                </h2>
              </div>
              <button
                type="button"
                onClick={handleCopyHashtags}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border cursor-pointer self-start md:self-auto transition-colors ${secondaryBtn}`}
              >
                {copiedTag ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
                <span>
                  {copiedTag
                    ? 'Copied Official LinkedIn Hashtags!'
                    : 'Copy Official Hashtags (#cognifyz #cognifyzTech)'}
                </span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Column 1: About Us (Page 2) */}
              <div className={`p-6 sm:p-7 rounded-xl border flex flex-col justify-between ${cardBg}`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider ${badgeBg}`}>
                      About Us
                    </span>
                    <div className={`p-2 rounded-lg ${iconBoxBg}`}>
                      <Cpu className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className={`text-lg font-bold ${headingText}`}>
                    Where Data Meets Intelligence
                  </h3>
                  <ul className={`space-y-3.5 text-xs leading-relaxed ${mutedText}`}>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span>
                        <strong className={subHeadingText}>Data Science Leader:</strong> Cognifyz Technologies is a leading technology company specializing in dynamic data science and delivering impactful enterprise solutions.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span>
                        <strong className={subHeadingText}>AI, ML & Analytics Suite:</strong> Offers a wide range of products and services including Artificial Intelligence (AI), Machine Learning (ML), and advanced data analytics tools.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span>
                        <strong className={subHeadingText}>Skill Acceleration:</strong> Provides industry-aligned training programs to enhance practical engineering skills and meet evolving business needs.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className={`mt-6 pt-4 border-t ${borderCol} flex items-center justify-between text-[11px] font-medium`}>
                  <span className={`font-semibold ${headingText}`}>MSME BUSINESS FORUM</span>
                  <span className={mutedText}>सूक्ष्म, लघु एवं मध्यम उद्यम</span>
                </div>
              </div>

              {/* Column 2: Tenure Guidelines (Page 3) */}
              <div className={`p-6 sm:p-7 rounded-xl border flex flex-col justify-between ${cardBg}`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider ${badgeBg}`}>
                      Tenure Code of Conduct
                    </span>
                    <div className={`p-2 rounded-lg ${iconBoxBg}`}>
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className={`text-lg font-bold ${headingText}`}>
                    Important Points to Keep in Mind
                  </h3>
                  <ul className={`space-y-3.5 text-xs leading-relaxed ${mutedText}`}>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span>
                        <strong className={subHeadingText}>Elevate LinkedIn Presence:</strong> Update your LinkedIn profile and share your offer letter and completion certificate tagging <strong>Cognifyz Technologies</strong>.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span>
                        <strong className={subHeadingText}>Zero-Tolerance Academic Integrity:</strong> Respect intellectual property. Plagiarism and copying code are serious offenses that lead to immediate internship termination.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span>
                        <strong className={subHeadingText}>Community Engagement:</strong> Share a video walkthrough of your completed tasks using <code className={`px-1 py-0.5 rounded font-mono ${darkMode ? 'text-zinc-300 bg-zinc-900 border border-zinc-800' : 'text-zinc-800 bg-zinc-100 border border-zinc-300'}`}>#cognifyz #cognifyzTech</code>.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className={`mt-6 pt-4 border-t ${borderCol} flex items-center justify-between text-[11px] font-medium`}>
                  <span className={mutedText}>100% Original Architecture</span>
                  <span className="font-semibold text-emerald-500">Verified Clean Code</span>
                </div>
              </div>

              {/* Column 3: Submission Protocol (Pages 4 & 5) */}
              <div className={`p-6 sm:p-7 rounded-xl border flex flex-col justify-between ${cardBg}`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider ${badgeBg}`}>
                      Submission Rules
                    </span>
                    <div className={`p-2 rounded-lg ${iconBoxBg}`}>
                      <Video className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className={`text-lg font-bold ${headingText}`}>
                    How to Complete & Submit
                  </h3>
                  <ul className={`space-y-3.5 text-xs leading-relaxed ${mutedText}`}>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span>
                        <strong className={subHeadingText}>Choose Any 2 of 3 Levels:</strong> You have the flexibility to complete any 2 levels (Level 1, Level 2, or Level 3) — all 3 levels are engineered in full below!
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span>
                        <strong className={subHeadingText}>Host Video Proof on LinkedIn:</strong> Record a professional video showcasing your projects and tag Cognifyz Technologies to establish peer credibility.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span>
                        <strong className={subHeadingText}>Modular Level Organization:</strong> Maintain separate clean modules for each level ready for the official Submission Form.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className={`mt-6 pt-4 border-t ${borderCol} flex items-center justify-between text-[11px] font-semibold`}>
                  <span className={headingText}>All 3 Levels Included</span>
                  <span className={mutedText}>Ready for Video Demo</span>
                </div>
              </div>
            </div>

            {/* Interactive Workbench Filter Bar */}
            <div className={`p-4 sm:p-5 rounded-xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${cardBg}`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${iconBoxBg}`}>
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className={`text-sm font-bold ${headingText}`}>
                      Interactive Task Workbench & Live Code Inspector
                    </h3>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
                      darkMode
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}>
                      {completedCount} / 6 Tasks Verified
                    </span>
                  </div>
                  <p className={`text-xs mt-0.5 ${mutedText}`}>
                    Filter by internship level or inspect the underlying HTML/CSS/JS/React source code for any task.
                  </p>
                </div>
              </div>

              {/* Segmented Controller for Level Filtering */}
              <div className={`p-1 rounded-xl border flex flex-wrap gap-1 ${
                darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-100 border-zinc-200'
              }`}>
                {[
                  { id: 'all', label: 'All Levels (1, 2 & 3)' },
                  { id: 'level1', label: 'Level 1 (HTML/CSS & JS)' },
                  { id: 'level2', label: 'Level 2 (Frameworks & RWD)' },
                  { id: 'level3', label: 'Level 3 (Gallery & Landing)' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveLevelTab(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      activeLevelTab === tab.id
                        ? darkMode
                          ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                          : 'bg-zinc-900 text-white font-semibold shadow-sm'
                        : darkMode
                        ? 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                        : 'text-zinc-600 hover:text-zinc-900 hover:bg-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            LEVEL 1 WORKBENCH: HTML/CSS (Task 1) & JAVASCRIPT (Task 2)
           ===================================================================== */}
        {(activeLevelTab === 'all' || activeLevelTab === 'level1') && (
          <section id="level-1" className={`py-16 border-b ${borderCol}`}>
            <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 space-y-10">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-widest mb-2 border ${badgeBg}`}>
                    <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Level 1 Engineering Workbench • Tasks 1 & 2</span>
                  </div>
                  <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${headingText}`}>
                    Level 1: Semantic HTML/CSS & Dynamic JavaScript Studio
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveCodeView(activeCodeView === 'l1t1' ? null : 'l1t1')}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium border flex items-center gap-1.5 cursor-pointer transition-colors ${
                      activeCodeView === 'l1t1'
                        ? darkMode ? 'bg-white text-zinc-950 font-semibold shadow-sm' : 'bg-zinc-900 text-white font-semibold shadow-sm'
                        : secondaryBtn
                    }`}
                  >
                    <FileCode2 className="w-4 h-4 text-zinc-400" />
                    <span>{activeCodeView === 'l1t1' ? 'Hide Task 1 Code' : 'Inspect Task 1 Code'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCodeView(activeCodeView === 'l1t2' ? null : 'l1t2')}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium border flex items-center gap-1.5 cursor-pointer transition-colors ${
                      activeCodeView === 'l1t2'
                        ? darkMode ? 'bg-white text-zinc-950 font-semibold shadow-sm' : 'bg-zinc-900 text-white font-semibold shadow-sm'
                        : secondaryBtn
                    }`}
                  >
                    <FileCode2 className="w-4 h-4 text-zinc-400" />
                    <span>{activeCodeView === 'l1t2' ? 'Hide Task 2 Code' : 'Inspect Task 2 Code'}</span>
                  </button>
                </div>
              </div>

              {/* Collapsible Source Code Inspector for Level 1 */}
              {(activeCodeView === 'l1t1' || activeCodeView === 'l1t2') && (
                <div className="rounded-xl bg-[#0B0C10] border border-zinc-800 overflow-hidden shadow-lg">
                  <div className="px-4 py-2.5 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-300">
                    <span className="font-mono font-semibold text-zinc-200">
                      {activeCodeView === 'l1t1' ? 'level1-task1-html-css.html' : 'level1-task2-javascript.js'}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleCopySnippet(CODE_SNIPPETS[activeCodeView])}
                        className="px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium cursor-pointer flex items-center gap-1"
                      >
                        {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveCodeView(null)}
                        className="p-1 rounded-md hover:bg-zinc-800 text-zinc-400 cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <pre className="p-4 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed">
                    {CODE_SNIPPETS[activeCodeView]}
                  </pre>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* -------------------------------------------------------------
                    LEVEL 1 - TASK 1 WORKBENCH CARD (HTML/CSS)
                   ------------------------------------------------------------- */}
                <div className={`rounded-xl border overflow-hidden flex flex-col ${cardBg}`}>
                  <div className={`px-6 py-4 border-b flex items-center justify-between ${cardHeaderBg}`}>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-md border ${badgeBg}`}>
                          Level 1 • Task 1
                        </span>
                        <span className={`text-xs font-normal ${mutedText}`}>HTML5 & CSS3</span>
                      </div>
                      <h3 className={`text-base font-bold mt-1 ${headingText}`}>
                        Semantic Webpage, Single-Input Form & 3-Link Nav
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleTaskDone('l1t1')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer transition-colors ${
                        completedTasks.l1t1
                          ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                          : darkMode
                          ? 'bg-zinc-800/60 text-zinc-400 hover:bg-zinc-800 border border-zinc-700'
                          : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-300 shadow-xs'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{completedTasks.l1t1 ? 'Verified' : 'Mark Done'}</span>
                    </button>
                  </div>

                  <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
                    {/* Sub-Task 1.3: 3-Link Navigation Menu */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider">
                        <span className={mutedText}>1. Interactive 3-Link Navigation Menu</span>
                        <span className={`font-mono ${mutedText}`}>Active: #{l1SubNav}</span>
                      </div>
                      <nav
                        aria-label="Level 1 Three Link Navigation"
                        className={`grid grid-cols-3 gap-1 p-1 rounded-xl border ${
                          darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-100 border-zinc-200'
                        }`}
                      >
                        {[
                          { id: 'home', label: '01. Architecture' },
                          { id: 'curriculum', label: '02. AI & Data' },
                          { id: 'showcase', label: '03. Cloud Ops' }
                        ].map((navLink) => (
                          <button
                            key={navLink.id}
                            type="button"
                            onClick={() => setL1SubNav(navLink.id)}
                            className={`py-2 px-3 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                              l1SubNav === navLink.id
                                ? darkMode
                                  ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                                  : 'bg-white text-zinc-900 font-semibold shadow-sm border border-zinc-200'
                                : darkMode
                                ? 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                                : 'text-zinc-600 hover:text-zinc-900'
                            }`}
                          >
                            {navLink.label}
                          </button>
                        ))}
                      </nav>
                    </div>

                    {/* Sub-Task 1.1: Webpage with Heading, Paragraph, and Image */}
                    <div className={`p-4 sm:p-5 rounded-xl border space-y-3 ${subCardBg}`}>
                      <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider">
                        <span className={mutedText}>2. Webpage Section (Heading + Paragraph + Image)</span>
                        <span className={`font-mono ${mutedText}`}>Semantic DOM</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                        <div className="sm:col-span-5 rounded-lg overflow-hidden border border-zinc-800 relative group">
                          <img
                            src={
                              l1SubNav === 'home'
                                ? IMAGES.webDesign
                                : l1SubNav === 'curriculum'
                                ? IMAGES.aiData
                                : IMAGES.cloudMentor
                            }
                            alt="Level 1 Task 1 Showcase"
                            className="w-full h-32 object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="sm:col-span-7 space-y-1.5">
                          <h4 className={`text-sm font-bold ${headingText}`}>
                            {l1SubNav === 'home' && 'Modern Semantic HTML5 & CSS3 Layout'}
                            {l1SubNav === 'curriculum' && 'Cognifyz AI & Data Analytics Pipeline'}
                            {l1SubNav === 'showcase' && 'Enterprise Cloud & Mentorship Workflow'}
                          </h4>
                          <p className={`text-xs leading-relaxed ${mutedText}`}>
                            {l1SubNav === 'home' &&
                              'Engineered with clean <header>, <article>, <h1>, <p>, and responsive <img> tags styled using modern CSS custom properties and fluid flexbox containers.'}
                            {l1SubNav === 'curriculum' &&
                              'Combining front-end craftsmanship with Cognifyz Technologies’ core strengths in Artificial Intelligence (AI), Machine Learning (ML), and analytics.'}
                            {l1SubNav === 'showcase' &&
                              'Every component is structured for maintainability, accessibility, and seamless integration into production React applications.'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Sub-Task 1.2: Basic Form with a Single Input Field and Submit Button */}
                    <div className={`p-4 sm:p-5 rounded-xl border space-y-3.5 ${subCardBg}`}>
                      <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider">
                        <span className={mutedText}>3. Single-Input Form + Submit Button</span>
                        <span className={`font-mono ${mutedText}`}>{l1Submissions.length} Logged</span>
                      </div>
                      <form onSubmit={handleL1FormSubmit} className="flex flex-col sm:flex-row gap-2.5">
                        <input
                          type="text"
                          value={l1InputText}
                          onChange={(e) => setL1InputText(e.target.value)}
                          placeholder="Enter a sprint task or milestone to deploy..."
                          aria-label="Single Input Milestone Field"
                          className={`flex-1 px-3.5 py-2 rounded-lg border text-xs focus:outline-none transition-colors ${inputBg}`}
                        />
                        <button
                          type="submit"
                          className={`px-4 py-2 rounded-lg font-semibold text-xs inline-flex items-center justify-center gap-1.5 cursor-pointer shrink-0 transition-colors active:scale-95 shadow-sm ${primaryBtn}`}
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit</span>
                        </button>
                      </form>

                      <div className="space-y-1.5 max-h-28 overflow-y-auto pr-1">
                        {l1Submissions.map((item) => (
                          <div
                            key={item.id}
                            className={`flex items-center justify-between px-3 py-1.5 rounded-lg border text-xs ${
                              darkMode
                                ? 'bg-zinc-900/40 border-zinc-800 text-zinc-300'
                                : 'bg-white border-zinc-200 text-zinc-800 shadow-xs'
                            }`}
                          >
                            <div className="flex items-center gap-2 truncate">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                              <span className="font-medium truncate">{item.value}</span>
                            </div>
                            <span className="text-[10px] font-mono text-zinc-500 shrink-0 ml-2">
                              {item.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* -------------------------------------------------------------
                    LEVEL 1 - TASK 2 WORKBENCH CARD (JavaScript)
                   ------------------------------------------------------------- */}
                <div className={`rounded-xl border overflow-hidden flex flex-col ${cardBg}`}>
                  <div className={`px-6 py-4 border-b flex items-center justify-between ${cardHeaderBg}`}>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-md border ${badgeBg}`}>
                          Level 1 • Task 2
                        </span>
                        <span className={`text-xs font-normal ${mutedText}`}>JavaScript ES6+</span>
                      </div>
                      <h3 className={`text-base font-bold mt-1 ${headingText}`}>
                        Dynamic Color State, Time Greeting & JS Calculator
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleTaskDone('l1t2')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer transition-colors ${
                        completedTasks.l1t2
                          ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                          : darkMode
                          ? 'bg-zinc-800/60 text-zinc-400 hover:bg-zinc-800 border border-zinc-700'
                          : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-300 shadow-xs'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{completedTasks.l1t2 ? 'Verified' : 'Mark Done'}</span>
                    </button>
                  </div>

                  <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                    {/* Sub-Task 2.1: Button that changes its color when clicked */}
                    <div className={`p-4 sm:p-5 rounded-xl border space-y-3 ${subCardBg}`}>
                      <div className="flex items-center justify-between">
                        <span className={`text-[11px] font-semibold uppercase tracking-wider ${mutedText}`}>
                          1. Interactive Color-Changing Button
                        </span>
                        <span className={`text-[11px] font-mono ${mutedText}`}>
                          Mutations: <strong className={headingText}>{clickCount}</strong> • {currentPalette.hex}
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={handleColorChange}
                          className={`flex-1 py-2.5 px-4 rounded-lg font-semibold text-xs shadow-sm ring-1 ${currentPalette.bg} ${currentPalette.ring} ${currentPalette.glow} transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95`}
                        >
                          <Palette className="w-4 h-4" />
                          <span>Click to Change Color ({currentPalette.name})</span>
                        </button>

                        {/* Color Swatch Dots */}
                        <div className="flex items-center justify-center gap-1.5 px-2">
                          {BUTTON_PALETTE.map((swatch, idx) => (
                            <button
                              key={swatch.hex}
                              type="button"
                              onClick={() => {
                                setColorIndex(idx);
                                setClickCount((c) => c + 1);
                              }}
                              aria-label={`Select ${swatch.name}`}
                              style={{ backgroundColor: swatch.hex }}
                              className={`w-3.5 h-3.5 rounded-full border border-zinc-500 transition-transform cursor-pointer ${
                                colorIndex === idx ? 'scale-125 ring-2 ring-zinc-900 dark:ring-white shadow-sm' : 'opacity-60 hover:opacity-100'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sub-Task 2.2: Alert Box that displays a greeting message based on current time */}
                    <div className={`p-4 sm:p-5 rounded-xl border space-y-3 ${subCardBg}`}>
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[11px] font-semibold uppercase tracking-wider ${mutedText}`}>
                          2. Time-Aware Greeting Alert Box
                        </span>
                        <button
                          type="button"
                          onClick={triggerTimeGreeting}
                          className={`px-3 py-1.5 rounded-lg font-medium text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer active:scale-95 ${secondaryBtn}`}
                        >
                          <Clock className="w-3.5 h-3.5 text-zinc-400" />
                          <span>Show Time Greeting Alert</span>
                        </button>
                      </div>

                      {greetingBanner && (
                        <div
                          role="alert"
                          className={`p-4 rounded-lg border flex items-start justify-between gap-3 shadow-md ${
                            darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'
                          }`}
                        >
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                <span>{greetingBanner.badge}</span>
                              </span>
                              <span className={`text-[11px] font-mono ${mutedText}`}>
                                System Clock: {greetingBanner.time}
                              </span>
                            </div>
                            <p className={`text-xs font-semibold pt-1 ${headingText}`}>{greetingBanner.title}</p>
                            <p className={`text-xs leading-relaxed ${mutedText}`}>
                              {greetingBanner.message}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setGreetingBanner(null)}
                            aria-label="Dismiss Greeting Alert"
                            className="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Sub-Task 2.3: Basic Calculator that adds two numbers together */}
                    <div className={`p-4 sm:p-5 rounded-xl border space-y-3.5 ${subCardBg}`}>
                      <div className="flex items-center justify-between">
                        <span className={`text-[11px] font-semibold uppercase tracking-wider ${mutedText}`}>
                          3. JavaScript Calculator Engine ({calcOperation})
                        </span>
                        <div className="flex items-center gap-1">
                          {['+', '-', '*', '/'].map((op) => (
                            <button
                              key={op}
                              type="button"
                              onClick={() => setCalcOperation(op)}
                              className={`w-7 h-7 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer ${
                                calcOperation === op
                                  ? darkMode
                                    ? 'bg-white text-zinc-950 font-bold shadow-sm'
                                    : 'bg-zinc-900 text-white font-bold shadow-sm'
                                  : darkMode
                                  ? 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
                                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200'
                              }`}
                            >
                              {op}
                            </button>
                          ))}
                          <button
                            type="button"
                            onClick={() => {
                              setCalcNum1('0');
                              setCalcNum2('0');
                            }}
                            className={`text-[10px] px-2 py-1 rounded-md ml-1 cursor-pointer transition-colors ${
                              darkMode ? 'text-zinc-400 hover:text-white hover:bg-zinc-800' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200'
                            }`}
                          >
                            Reset
                          </button>
                        </div>
                      </div>

                      <form onSubmit={handleRecordCalculation} className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-7 gap-2.5 items-center">
                          <div className="sm:col-span-2">
                            <label className={`block text-[10px] font-semibold uppercase tracking-wider mb-1 ${mutedText}`}>
                              Operand A
                            </label>
                            <input
                              type="number"
                              step="any"
                              value={calcNum1}
                              onChange={(e) => setCalcNum1(e.target.value)}
                              className={`w-full px-3 py-2 rounded-lg border text-xs font-mono focus:outline-none transition-colors ${inputBg}`}
                            />
                          </div>
                          <div className={`text-center font-bold text-lg sm:pt-4 ${mutedText}`}>
                            {calcOperation}
                          </div>
                          <div className="sm:col-span-2">
                            <label className={`block text-[10px] font-semibold uppercase tracking-wider mb-1 ${mutedText}`}>
                              Operand B
                            </label>
                            <input
                              type="number"
                              step="any"
                              value={calcNum2}
                              onChange={(e) => setCalcNum2(e.target.value)}
                              className={`w-full px-3 py-2 rounded-lg border text-xs font-mono focus:outline-none transition-colors ${inputBg}`}
                            />
                          </div>
                          <div className="sm:col-span-2 sm:pt-4">
                            <div
                              className={`px-3 py-2 rounded-lg text-center font-mono font-semibold text-xs border ${
                                darkMode
                                  ? 'bg-zinc-800 text-white border-zinc-700 shadow-sm'
                                  : 'bg-zinc-900 text-white border-zinc-900 shadow-sm'
                              }`}
                            >
                              = {currentSum}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                          <div className="flex flex-wrap gap-1.5">
                            {calcHistory.map((item, idx) => (
                              <span
                                key={idx}
                                className={`px-2 py-0.5 rounded-md border text-[11px] font-mono ${
                                  darkMode
                                    ? 'bg-zinc-900 border-zinc-800 text-zinc-400'
                                    : 'bg-white border-zinc-200 text-zinc-700 shadow-xs'
                                }`}
                              >
                                {item.expr} = <strong className={headingText}>{item.sum}</strong>
                              </span>
                            ))}
                          </div>
                          <button
                            type="submit"
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer shrink-0 transition-colors ${secondaryBtn}`}
                          >
                            Log Calculation
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================================
            LEVEL 2 WORKBENCH: FRONT-END FRAMEWORKS (Task 1) & RESPONSIVE DESIGN (Task 2)
           ===================================================================== */}
        {(activeLevelTab === 'all' || activeLevelTab === 'level2') && (
          <section id="level-2" className={`py-16 border-b ${borderCol}`}>
            <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 space-y-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-widest mb-2 border ${badgeBg}`}>
                    <Layers className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Level 2 Architecture Lab • Tasks 1 & 2</span>
                  </div>
                  <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${headingText}`}>
                    Level 2: Front-End Framework Cards & Responsive Viewport Studio
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveCodeView(activeCodeView === 'l2' ? null : 'l2')}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium border flex items-center gap-1.5 cursor-pointer transition-colors ${
                      activeCodeView === 'l2'
                        ? darkMode ? 'bg-white text-zinc-950 font-semibold shadow-sm' : 'bg-zinc-900 text-white font-semibold shadow-sm'
                        : secondaryBtn
                    }`}
                  >
                    <FileCode2 className="w-4 h-4 text-zinc-400" />
                    <span>{activeCodeView === 'l2' ? 'Hide CSS Grid Code' : 'Inspect CSS Grid Code'}</span>
                  </button>

                  <div className={`flex items-center gap-1 p-1 rounded-xl border ${
                    darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-100 border-zinc-200'
                  }`}>
                    <span className={`text-[11px] font-medium px-2 ${mutedText}`}>Grid:</span>
                    {[1, 2, 3].map((cols) => (
                      <button
                        key={cols}
                        type="button"
                        onClick={() => setGridColumns(cols)}
                        className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                          gridColumns === cols
                            ? darkMode
                              ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                              : 'bg-white text-zinc-900 font-semibold shadow-sm border border-zinc-200'
                            : darkMode
                            ? 'text-zinc-400 hover:text-white'
                            : 'text-zinc-600 hover:text-zinc-900'
                        }`}
                      >
                        {cols} {cols === 1 ? 'Col' : 'Cols'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {activeCodeView === 'l2' && (
                <div className="rounded-xl bg-[#0B0C10] border border-zinc-800 overflow-hidden shadow-lg">
                  <div className="px-4 py-2.5 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-300">
                    <span className="font-mono font-semibold text-zinc-200">
                      level2-responsive-grid-and-media-queries.css
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveCodeView(null)}
                      className="p-1 rounded-md hover:bg-zinc-800 text-zinc-400 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <pre className="p-4 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed">
                    {CODE_SNIPPETS.l2}
                  </pre>
                </div>
              )}

              {/* Level 2 Task 1: Responsive Card Components with Image & Text inside a Responsive Grid Layout */}
              <div
                className={`grid gap-6 ${
                  gridColumns === 1
                    ? 'grid-cols-1 max-w-2xl mx-auto'
                    : gridColumns === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {FRAMEWORK_CARDS.map((card) => {
                  const isSaved = !!savedCards[card.id];
                  return (
                    <article
                      key={card.id}
                      className={`rounded-xl border overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-zinc-700 group ${cardBg}`}
                    >
                      <div>
                        <div className="relative h-52 overflow-hidden bg-zinc-950">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                          />
                          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-zinc-900/90 backdrop-blur-md border border-zinc-700 text-zinc-200 text-[10px] font-medium tracking-wide">
                            {card.badge}
                          </div>
                          <div className={`absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold ${card.accent}`}>
                            {card.metrics}
                          </div>
                        </div>

                        <div className="p-5 space-y-2">
                          <div className={`text-[10px] font-semibold uppercase tracking-wider ${mutedText}`}>
                            {card.category}
                          </div>
                          <h3 className={`text-base font-bold transition-colors ${headingText}`}>{card.title}</h3>
                          <p className={`text-xs leading-relaxed ${mutedText}`}>
                            {card.description}
                          </p>
                        </div>
                      </div>

                      <div className={`px-5 py-3.5 border-t ${borderCol} flex items-center justify-between`}>
                        <span className={`text-xs font-medium ${mutedText}`}>{card.author}</span>
                        <button
                          type="button"
                          onClick={() =>
                            setSavedCards((prev) => ({ ...prev, [card.id]: !prev[card.id] }))
                          }
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                            isSaved
                              ? darkMode
                                ? 'bg-zinc-800 text-white border border-zinc-700 shadow-sm'
                                : 'bg-zinc-900 text-white border border-zinc-900 shadow-sm'
                              : secondaryBtn
                          }`}
                        >
                          {isSaved ? '★ Saved' : '☆ Save Component'}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Level 2 Task 2: Interactive Multi-Device Breakpoint & Hamburger Simulator */}
              <div className={`rounded-xl border p-6 sm:p-7 space-y-6 ${cardBg}`}>
                <div className={`flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b ${borderCol} pb-5`}>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-semibold uppercase tracking-widest ${mutedText}`}>
                        Level 2 • Task 2 Live Breakpoint Emulator
                      </span>
                      <span className={`px-2 py-0.5 rounded-md border text-[10px] font-mono ${badgeBg}`}>
                        CSS @media + Hamburger Drawer
                      </span>
                    </div>
                    <h3 className={`text-lg font-bold mt-1 ${headingText}`}>
                      Interactive Viewport Resizer & Mobile Hamburger Navigation
                    </h3>
                    <p className={`text-xs mt-0.5 ${mutedText}`}>
                      Switch between Mobile (375px), Tablet (768px), and Desktop (1440px) below to watch the CSS Grid reflow and test the collapsible hamburger menu.
                    </p>
                  </div>

                  <div className={`p-1 rounded-xl border flex flex-wrap gap-1 ${
                    darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-100 border-zinc-200'
                  }`}>
                    {[
                      { id: 'mobile', label: 'Mobile (375px)', icon: Smartphone },
                      { id: 'tablet', label: 'Tablet (768px)', icon: Tablet },
                      { id: 'desktop', label: 'Desktop (1440px)', icon: Laptop }
                    ].map((vp) => {
                      const VpIcon = vp.icon;
                      return (
                        <button
                          key={vp.id}
                          type="button"
                          onClick={() => {
                            setSimulatedViewport(vp.id);
                            if (vp.id === 'desktop') setDemoMobileMenuOpen(false);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer transition-colors ${
                            simulatedViewport === vp.id
                              ? darkMode
                                ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                                : 'bg-white text-zinc-900 font-semibold shadow-sm border border-zinc-200'
                              : darkMode
                              ? 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                              : 'text-zinc-600 hover:text-zinc-900'
                          }`}
                        >
                          <VpIcon className="w-3.5 h-3.5" />
                          <span>{vp.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Emulated Device Frame */}
                <div className="flex justify-center py-2">
                  <div
                    className={`transition-all duration-300 rounded-xl bg-[#090A0F] border border-zinc-800 shadow-xl overflow-hidden text-zinc-100 ${
                      simulatedViewport === 'mobile'
                        ? 'w-full max-w-[375px]'
                        : simulatedViewport === 'tablet'
                        ? 'w-full max-w-[720px]'
                        : 'w-full'
                    }`}
                  >
                    {/* Simulated Device Top Bar */}
                    <div className="px-4 py-2.5 bg-zinc-950 flex items-center justify-between border-b border-zinc-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-xs font-medium tracking-wide text-zinc-300">
                          COGNIFYZ_UI ({simulatedViewport.toUpperCase()})
                        </span>
                      </div>

                      {simulatedViewport === 'desktop' ? (
                        <div className="flex items-center gap-4 text-xs font-medium text-zinc-400">
                          <span className="text-white">Dashboard</span>
                          <span>Grid System</span>
                          <span>Media Queries</span>
                          <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800 font-mono text-[11px]">
                            Breakpoint: ≥1024px
                          </span>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setDemoMobileMenuOpen(!demoMobileMenuOpen)}
                          className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-zinc-200 hover:bg-zinc-800 flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                        >
                          {demoMobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
                          <span>{demoMobileMenuOpen ? 'Close Menu' : 'Menu'}</span>
                        </button>
                      )}
                    </div>

                    {/* Simulated Collapsible Hamburger Drawer */}
                    {simulatedViewport !== 'desktop' && demoMobileMenuOpen && (
                      <div className="p-3 bg-zinc-950 border-b border-zinc-800 space-y-1 text-xs">
                        <div className="text-[10px] font-mono uppercase text-zinc-400 px-2 pb-1">
                          Mobile Drawer (Level 2 • Task 2)
                        </div>
                        <div className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-white font-medium">
                          01. Responsive Home View
                        </div>
                        <div className="px-3 py-1.5 rounded hover:bg-zinc-900 text-zinc-400">
                          02. CSS Media Queries (@media max-width: 768px)
                        </div>
                        <div className="px-3 py-1.5 rounded hover:bg-zinc-900 text-zinc-400">
                          03. Submit Internship Portfolio
                        </div>
                      </div>
                    )}

                    {/* Simulated Adaptive Grid Inside Viewport */}
                    <div
                      className={`p-4 sm:p-5 grid gap-3.5 ${
                        simulatedViewport === 'mobile'
                          ? 'grid-cols-1'
                          : simulatedViewport === 'tablet'
                          ? 'grid-cols-2'
                          : 'grid-cols-3'
                      }`}
                    >
                      <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/90 space-y-1">
                        <div className="text-xs font-semibold text-white">
                          Fluid Container Width
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          Automatically switches from 3 columns on desktop to 2 on tablet and 1 stacked column on mobile.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/90 space-y-1">
                        <div className="text-xs font-semibold text-white">
                          Touch-Friendly Controls
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          Interactive targets scale with ergonomic padding and zero horizontal overflow at 375px.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/90 space-y-1">
                        <div className="text-xs font-semibold text-white">
                          Collapsible Navigation
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          Desktop horizontal links transform into an accessible toggleable hamburger drawer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================================
            LEVEL 3 WORKBENCH: IMAGE GALLERY & AUTO SLIDESHOW (Task 1)
           ===================================================================== */}
        {(activeLevelTab === 'all' || activeLevelTab === 'level3') && (
          <section id="level-3" className={`py-16 border-b ${borderCol}`}>
            <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 space-y-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-widest mb-2 border ${badgeBg}`}>
                    <ImageIcon className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Level 3 Media Suite • Task 1</span>
                  </div>
                  <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${headingText}`}>
                    Level 3: Interactive Lightbox Gallery & Auto-Transition Slideshow
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveCodeView(activeCodeView === 'l3' ? null : 'l3')}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium border flex items-center gap-1.5 cursor-pointer self-start md:self-auto transition-colors ${
                    activeCodeView === 'l3'
                      ? darkMode ? 'bg-white text-zinc-950 font-semibold shadow-sm' : 'bg-zinc-900 text-white font-semibold shadow-sm'
                      : secondaryBtn
                  }`}
                >
                  <FileCode2 className="w-4 h-4 text-zinc-400" />
                  <span>{activeCodeView === 'l3' ? 'Hide Slideshow Code' : 'Inspect Slideshow Code'}</span>
                </button>
              </div>

              {activeCodeView === 'l3' && (
                <div className="rounded-xl bg-[#0B0C10] border border-zinc-800 overflow-hidden shadow-lg">
                  <div className="px-4 py-2.5 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-300">
                    <span className="font-mono font-semibold text-zinc-200">
                      level3-gallery-and-slideshow-hooks.jsx
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveCodeView(null)}
                      className="p-1 rounded-md hover:bg-zinc-800 text-zinc-400 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <pre className="p-4 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed">
                    {CODE_SNIPPETS.l3}
                  </pre>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 7 Columns: Automatic Image Slideshow with Progress Indicators */}
                <div className={`lg:col-span-7 rounded-xl border overflow-hidden ${cardBg}`}>
                  <div className={`px-6 py-4 flex flex-wrap items-center justify-between gap-2 border-b ${cardHeaderBg}`}>
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isSlideshowPlaying ? 'bg-blue-500' : 'bg-zinc-500'
                        }`}
                      />
                      <span className={`text-xs font-semibold uppercase tracking-wider ${subHeadingText}`}>
                        Auto-Transition Slideshow ({currentSlide + 1} / {GALLERY_ITEMS.length})
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() =>
                          setCurrentSlide(
                            (prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
                          )
                        }
                        aria-label="Previous Slide"
                        className={`p-2 rounded-lg cursor-pointer transition-colors ${secondaryBtn}`}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsSlideshowPlaying(!isSlideshowPlaying)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 transition-colors ${primaryBtn}`}
                      >
                        {isSlideshowPlaying ? (
                          <>
                            <Pause className="w-3.5 h-3.5" />
                            <span>Pause Auto</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5" />
                            <span>Resume Auto</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setCurrentSlide((prev) => (prev + 1) % GALLERY_ITEMS.length)
                        }
                        aria-label="Next Slide"
                        className={`p-2 rounded-lg cursor-pointer transition-colors ${secondaryBtn}`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Main Slideshow Stage */}
                  <div className="relative h-80 sm:h-96 bg-zinc-950 overflow-hidden group">
                    <img
                      src={GALLERY_ITEMS[currentSlide].src}
                      alt={GALLERY_ITEMS[currentSlide].title}
                      className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-[#090A0F]/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2.5 py-1 rounded-md bg-zinc-900/90 backdrop-blur-md border border-zinc-700 text-zinc-200 text-[10px] font-medium tracking-wide">
                          {GALLERY_ITEMS[currentSlide].category}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-zinc-900/80 border border-zinc-800 text-zinc-400 text-[10px] font-mono">
                          {GALLERY_ITEMS[currentSlide].resolution}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                        {GALLERY_ITEMS[currentSlide].title}
                      </h3>
                      <p className="text-xs text-zinc-300 mt-1.5 max-w-xl leading-relaxed">
                        {GALLERY_ITEMS[currentSlide].description}
                      </p>
                    </div>
                  </div>

                  {/* Slideshow Footer Controls */}
                  <div className={`px-6 py-4 border-t ${borderCol} flex items-center justify-between`}>
                    <div className="flex items-center gap-2">
                      {GALLERY_ITEMS.map((item, idx) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setCurrentSlide(idx)}
                          aria-label={`Select slide ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            currentSlide === idx
                              ? darkMode ? 'w-7 bg-white' : 'w-7 bg-zinc-900'
                              : darkMode ? 'w-2 bg-zinc-700 hover:bg-zinc-500' : 'w-2 bg-zinc-300 hover:bg-zinc-400'
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setLightboxZoom(false);
                        setSelectedLightboxImage(GALLERY_ITEMS[currentSlide]);
                      }}
                      className={`text-xs font-medium flex items-center gap-1.5 cursor-pointer transition-colors ${
                        darkMode ? 'text-zinc-300 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                      }`}
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Open Fullscreen Lightbox</span>
                    </button>
                  </div>
                </div>

                {/* Right 5 Columns: Click-to-Enlarge Thumbnail Gallery (Level 3 Task 1) */}
                <div className={`lg:col-span-5 rounded-xl border p-6 space-y-5 ${cardBg}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`text-[10px] font-semibold uppercase tracking-widest ${mutedText}`}>
                        Level 3 • Task 1 Thumbnail Matrix
                      </span>
                      <h3 className={`text-base font-bold mt-0.5 ${headingText}`}>
                        Click Any Thumbnail to Enlarge
                      </h3>
                    </div>
                    <span className={`px-2.5 py-1 rounded-md border text-[10px] font-mono font-medium ${badgeBg}`}>
                      4 UHD Assets
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5">
                    {GALLERY_ITEMS.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setCurrentSlide(idx);
                          setLightboxZoom(false);
                          setSelectedLightboxImage(item);
                        }}
                        className={`group relative rounded-xl overflow-hidden border text-left focus:outline-none cursor-pointer transition-all duration-200 hover:border-zinc-500 ${
                          currentSlide === idx
                            ? darkMode ? 'ring-2 ring-white border-white shadow-md' : 'ring-2 ring-zinc-900 border-zinc-900 shadow-md'
                            : borderCol
                        }`}
                      >
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-36 object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent p-3 flex flex-col justify-end">
                          <span className="text-[10px] font-mono text-zinc-300 font-medium">
                            {item.stats}
                          </span>
                          <span className="text-xs font-semibold text-white leading-tight line-clamp-1 mt-0.5">
                            {item.title}
                          </span>
                        </div>
                        <div className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-zinc-950/80 border border-zinc-700 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className={`p-3.5 rounded-lg border text-xs flex items-center justify-between ${subCardBg}`}>
                    <span className={mutedText}>
                      Click any thumbnail above to trigger the high-resolution modal zoom view.
                    </span>
                    <span className="font-mono text-[11px] text-zinc-400 font-medium shrink-0 ml-2">
                      CSS Transform
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* =====================================================================
          OFFICIAL CONTACT US & EXECUTIVE FOOTER (Level 3 Task 2 & PDF Page 12)
         ===================================================================== */}
      <footer id="contact" className={`pt-16 pb-12 border-t w-full ${darkMode ? 'bg-[#090A0F] border-zinc-800' : 'bg-white border-zinc-200'}`}>
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-widest border ${badgeBg}`}>
                <span>How to Contact Us? • Official Channels</span>
              </div>
              <h2 className={`text-2xl sm:text-4xl font-bold tracking-tight leading-tight ${headingText}`}>
                To find out more information, please contact{' '}
                <span className={`font-extrabold ${headingText}`}>Cognifyz Technologies</span>
              </h2>
              <p className={`text-xs sm:text-sm max-w-xl leading-relaxed ${mutedText}`}>
                Ready to submit your completed levels or inquire about full-time AI, Data Science, and Web Engineering roles? Connect with Cognifyz Technologies across our verified channels.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setApplicationSubmitted(false);
                    setApplyModalOpen(true);
                  }}
                  className={`px-5 py-2.5 rounded-lg font-semibold text-xs cursor-pointer shadow-sm active:scale-95 transition-colors ${primaryBtn}`}
                >
                  Open Internship Application
                </button>
                <button
                  type="button"
                  onClick={() => setCertificateModalOpen(true)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${secondaryBtn}`}
                >
                  Preview Completion Certificate
                </button>
              </div>
            </div>

            {/* 4 Official Contact Cards from PDF Page 12 */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href="mailto:contact@cognifyz.com"
                className={`p-4.5 rounded-xl border flex items-center gap-4 transition-colors group ${cardBg}`}
              >
                <div className={`p-2.5 rounded-lg transition-colors ${iconBoxBg}`}>
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-[11px] font-medium ${mutedText}`}>
                    Official Email Desk
                  </div>
                  <div className={`text-xs font-semibold mt-0.5 ${headingText}`}>
                    contact@cognifyz.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.cognifyz.com"
                target="_blank"
                rel="noreferrer"
                className={`p-4.5 rounded-xl border flex items-center gap-4 transition-colors group ${cardBg}`}
              >
                <div className={`p-2.5 rounded-lg transition-colors ${iconBoxBg}`}>
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-[11px] font-medium ${mutedText}`}>
                    Corporate Portal
                  </div>
                  <div className={`text-xs font-semibold flex items-center gap-1 mt-0.5 ${headingText}`}>
                    <span>www.cognifyz.com</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className={`p-4.5 rounded-xl border flex items-center gap-4 transition-colors group ${cardBg}`}
              >
                <div className={`p-2.5 rounded-lg transition-colors ${iconBoxBg}`}>
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-[11px] font-medium ${mutedText}`}>
                    LinkedIn Network
                  </div>
                  <div className={`text-xs font-semibold mt-0.5 ${headingText}`}>
                    @cognifyz-Technologies
                  </div>
                </div>
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className={`p-4.5 rounded-xl border flex items-center gap-4 transition-colors group ${cardBg}`}
              >
                <div className={`p-2.5 rounded-lg transition-colors ${iconBoxBg}`}>
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-[11px] font-medium ${mutedText}`}>
                    Instagram Handle
                  </div>
                  <div className={`text-xs font-semibold mt-0.5 ${headingText}`}>
                    @cognifyz_tech
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Level 3 Task 2: Interactive Contact Form with Validation */}
          <div className={`pt-8 border-t ${borderCol}`}>
            <div className={`p-6 sm:p-8 rounded-xl border ${cardBg}`}>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="text-center space-y-1.5">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest border ${badgeBg}`}>
                    <span>Level 3 • Task 2 Interactive Contact & Form Validation</span>
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${headingText}`}>
                    Direct Contact & Submission Desk
                  </h3>
                  <p className={`text-xs ${mutedText}`}>
                    Submit your queries, project links, or application details with real-time client-side validation.
                  </p>
                </div>

                {contactSubmitted ? (
                  <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h4 className={`text-base font-bold ${headingText}`}>
                      Message Dispatched to Cognifyz Desk!
                    </h4>
                    <p className={`text-xs ${mutedText}`}>
                      Thank you for contacting us. Your message has been logged with Reference <strong className={`font-mono ${headingText}`}>#CGZ-INQUIRY-{Date.now().toString().slice(-4)}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setContactSubmitted(false)}
                      className={`px-4 py-2 rounded-lg text-xs font-medium cursor-pointer ${secondaryBtn}`}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-[11px] font-medium uppercase tracking-wider mb-1.5 ${mutedText}`}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={contactForm.name}
                          onChange={(e) => {
                            setContactForm({ ...contactForm, name: e.target.value });
                            if (contactErrors.name) setContactErrors({ ...contactErrors, name: null });
                          }}
                          placeholder="e.g. John Doe"
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:outline-none transition-colors ${inputBg} ${
                            contactErrors.name ? '!border-rose-500' : ''
                          }`}
                        />
                        {contactErrors.name && (
                          <p className="text-[11px] text-rose-500 font-medium mt-1">{contactErrors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className={`block text-[11px] font-medium uppercase tracking-wider mb-1.5 ${mutedText}`}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => {
                            setContactForm({ ...contactForm, email: e.target.value });
                            if (contactErrors.email) setContactErrors({ ...contactErrors, email: null });
                          }}
                          placeholder="e.g. name@domain.com"
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:outline-none transition-colors ${inputBg} ${
                            contactErrors.email ? '!border-rose-500' : ''
                          }`}
                        />
                        {contactErrors.email && (
                          <p className="text-[11px] text-rose-500 font-medium mt-1">{contactErrors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className={`block text-[11px] font-medium uppercase tracking-wider mb-1.5 ${mutedText}`}>
                        Inquiry Subject
                      </label>
                      <select
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:outline-none transition-colors ${inputBg}`}
                      >
                        <option value="Web Development Internship Inquiry">Web Development Internship Inquiry</option>
                        <option value="Task Evaluation & Submission Review">Task Evaluation & Submission Review</option>
                        <option value="Certificate Verification & Offer Letter">Certificate Verification & Offer Letter</option>
                        <option value="AI & Data Science Fellowship">AI & Data Science Fellowship</option>
                      </select>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className={`block text-[11px] font-medium uppercase tracking-wider ${mutedText}`}>
                          Message *
                        </label>
                        <span className="text-[10px] text-zinc-500 font-mono">
                          {contactForm.message.length} characters (min 10)
                        </span>
                      </div>
                      <textarea
                        rows={3}
                        value={contactForm.message}
                        onChange={(e) => {
                          setContactForm({ ...contactForm, message: e.target.value });
                          if (contactErrors.message) setContactErrors({ ...contactErrors, message: null });
                        }}
                        placeholder="Write your inquiry or paste your project demo repository link..."
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:outline-none transition-colors ${inputBg} ${
                          contactErrors.message ? '!border-rose-500' : ''
                        }`}
                      />
                      {contactErrors.message && (
                        <p className="text-[11px] text-rose-500 font-medium mt-1">{contactErrors.message}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setContactForm({ name: '', email: '', subject: 'Web Development Internship Inquiry', message: '' });
                          setContactErrors({});
                        }}
                        className={`px-3.5 py-2 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${secondaryBtn}`}
                      >
                        Clear
                      </button>
                      <button
                        type="submit"
                        className={`px-5 py-2.5 rounded-lg font-semibold text-xs active:scale-95 transition-colors flex items-center gap-2 cursor-pointer ${primaryBtn}`}
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Validated Inquiry</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${borderCol} ${mutedText}`}>
            <div className="flex items-center gap-2">
              <span className={`font-semibold tracking-wide ${headingText}`}>COGNIFYZ TECHNOLOGIES</span>
              <span>• Where Data Meets Intelligence • MSME Registered</span>
            </div>
            <div>
              Executive React Edition • Level 1, Level 2 & Level 3 Complete Architecture
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          MODAL 1: HIGH-RESOLUTION IMAGE LIGHTBOX WITH ZOOM (Level 3 Task 1)
         ===================================================================== */}
      {selectedLightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedLightboxImage(null)}
        >
          <div
            className={`border rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl ${
              darkMode ? 'bg-[#111217] border-zinc-800' : 'bg-white border-zinc-200'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`px-6 py-4 flex items-center justify-between border-b ${cardHeaderBg}`}>
              <div>
                <span className={`text-[10px] font-semibold uppercase tracking-widest ${mutedText}`}>
                  {selectedLightboxImage.category}
                </span>
                <h3 className={`text-base font-bold mt-0.5 ${headingText}`}>{selectedLightboxImage.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLightboxZoom(!lightboxZoom)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${secondaryBtn}`}
                >
                  {lightboxZoom ? 'Reset 1x Zoom' : 'Toggle 1.25x Zoom'}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLightboxImage(null)}
                  aria-label="Close Enlarged Image"
                  className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-700 dark:hover:text-white cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-zinc-950 overflow-hidden flex items-center justify-center max-h-[65vh]">
              <img
                src={selectedLightboxImage.src}
                alt={selectedLightboxImage.title}
                className={`w-full max-h-[65vh] object-contain transition-transform duration-300 ${
                  lightboxZoom ? 'scale-125' : 'scale-100'
                }`}
              />
            </div>

            <div className={`p-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              darkMode ? 'bg-[#0E0F14] border-zinc-800 text-zinc-300' : 'bg-zinc-50 border-zinc-200 text-zinc-700'
            }`}>
              <div className="space-y-1.5">
                <p className={`text-xs leading-relaxed ${mutedText}`}>
                  {selectedLightboxImage.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedLightboxImage.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-0.5 rounded-md border text-[10px] font-mono ${badgeBg}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLightboxImage(null)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold shrink-0 cursor-pointer shadow-sm transition-colors ${primaryBtn}`}
              >
                Close Lightbox
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 2: INTERACTIVE CERTIFICATE & OFFER LETTER PREVIEW (PDF Page 1 & 3)
         ===================================================================== */}
      {certificateModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setCertificateModalOpen(false)}
        >
          <div
            className={`border rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl ${
              darkMode ? 'bg-[#111217] border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`px-6 py-4 border-b flex items-center justify-between ${cardHeaderBg}`}>
              <div className="flex items-center gap-2.5">
                <div className={`p-2 rounded-lg ${iconBoxBg}`}>
                  <Award className="w-4 h-4" />
                </div>
                <span className={`text-sm font-bold ${headingText}`}>
                  Cognifyz Internship Completion Certificate Preview
                </span>
              </div>
              <button
                type="button"
                onClick={() => setCertificateModalOpen(false)}
                className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-700 dark:hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Customize Intern Name Live */}
              <div>
                <label className={`block text-[11px] font-medium uppercase tracking-wider mb-1.5 ${mutedText}`}>
                  Customize Your Name on the Certificate Preview:
                </label>
                <input
                  type="text"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder="Enter your full name..."
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-xs font-semibold focus:outline-none transition-colors ${inputBg}`}
                />
              </div>

              {/* Visual Certificate Card */}
              <div className="p-7 sm:p-9 rounded-xl bg-[#090A0F] border border-zinc-700 relative overflow-hidden shadow-lg text-white">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <div>
                    <div className="text-base font-bold tracking-tight text-white">
                      COGNIFYZ TECHNOLOGIES
                    </div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">
                      Where Data Meets Intelligence • MSME Registered
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px] font-medium uppercase tracking-wider">
                    VERIFIED CREDENTIAL
                  </div>
                </div>

                <div className="py-8 text-center space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
                    Certificate of Internship Completion
                  </div>
                  <p className="text-xs text-zinc-400">This is proudly presented to</p>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight py-2">
                    {applicantName || 'Cognifyz Web Developer Intern'}
                  </div>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                    for successfully completing the <strong className="text-white font-medium">Web Development Internship Program</strong> across Level 1, Level 2, and Level 3 with distinction.
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Domain: Full-Stack & React Web Development</span>
                  <span className="font-mono text-zinc-300 font-semibold">ID: CGZ-WD-2026-PRO</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleCopyHashtags}
                  className={`px-4 py-2 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${secondaryBtn}`}
                >
                  {copiedTag ? 'Copied LinkedIn Tags!' : 'Copy LinkedIn Hashtags'}
                </button>
                <button
                  type="button"
                  onClick={() => setCertificateModalOpen(false)}
                  className={`px-5 py-2 rounded-lg font-semibold text-xs cursor-pointer shadow-sm active:scale-95 transition-colors ${primaryBtn}`}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 3: INTERNSHIP APPLICATION PORTAL (Level 3 Task 2 "Apply Now" CTA)
         ===================================================================== */}
      {applyModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setApplyModalOpen(false)}
        >
          <div
            className={`border rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl ${
              darkMode ? 'bg-[#111217] border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`px-6 py-4 border-b flex items-center justify-between ${cardHeaderBg}`}>
              <div>
                <span className={`text-[10px] font-semibold uppercase tracking-widest ${mutedText}`}>
                  Cognifyz Career Portal
                </span>
                <h3 className={`text-base font-bold mt-0.5 ${headingText}`}>
                  Apply for Web Developer Internship
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setApplyModalOpen(false)}
                aria-label="Close Application Modal"
                className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-700 dark:hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {applicationSubmitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className={`text-lg font-bold ${headingText}`}>
                  Application Confirmed, {applicantName}!
                </h4>
                <p className={`text-xs leading-relaxed ${mutedText}`}>
                  Your enrollment for the <strong className={headingText}>Cognifyz Web Development Internship</strong> ({applicantTrack}) has been recorded. Host your project demo video on LinkedIn with <strong className={headingText}>#cognifyz #cognifyzTech</strong>!
                </p>
                <button
                  type="button"
                  onClick={() => setApplyModalOpen(false)}
                  className={`w-full py-2.5 rounded-lg font-semibold text-xs cursor-pointer shadow-sm active:scale-95 transition-colors ${primaryBtn}`}
                >
                  Return to Engineering Suite
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplicationSubmit} className="p-6 space-y-4">
                <div>
                  <label className={`block text-[11px] font-medium uppercase tracking-wider mb-1.5 ${mutedText}`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Enter your full name"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:outline-none transition-colors ${inputBg}`}
                  />
                </div>

                <div>
                  <label className={`block text-[11px] font-medium uppercase tracking-wider mb-1.5 ${mutedText}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="developer@domain.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:outline-none transition-colors ${inputBg}`}
                  />
                </div>

                <div>
                  <label className={`block text-[11px] font-medium uppercase tracking-wider mb-1.5 ${mutedText}`}>
                    Select Internship Track (Any 2 of 3 Levels)
                  </label>
                  <select
                    value={applicantTrack}
                    onChange={(e) => setApplicantTrack(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:outline-none transition-colors ${inputBg}`}
                  >
                    <option value="All 3 Levels (Executive Full-Stack Track)">
                      All 3 Levels (Level 1 + Level 2 + Level 3 Complete)
                    </option>
                    <option value="Level 1 + Level 3 (Recommended)">
                      Level 1 + Level 3 (HTML/JS + Landing Page & Gallery)
                    </option>
                    <option value="Level 2 + Level 3">
                      Level 2 + Level 3 (Frameworks/RWD + Landing Page)
                    </option>
                    <option value="Level 1 + Level 2">
                      Level 1 + Level 2 (HTML/JS + Responsive Frameworks)
                    </option>
                  </select>
                </div>

                <div>
                  <label className={`block text-[11px] font-medium uppercase tracking-wider mb-1.5 ${mutedText}`}>
                    LinkedIn / GitHub Repository Link
                  </label>
                  <input
                    type="text"
                    value={applicantGithub}
                    onChange={(e) => setApplicantGithub(e.target.value)}
                    placeholder="https://linkedin.com/in/your-profile"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:outline-none transition-colors ${inputBg}`}
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setApplyModalOpen(false)}
                    className={`px-3.5 py-2 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${secondaryBtn}`}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`px-5 py-2 rounded-lg font-semibold text-xs cursor-pointer shadow-sm active:scale-95 transition-colors ${primaryBtn}`}
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
