import { SlideContent, SlideType } from './types';

export const SLIDES: SlideContent[] = [
  {
    id: 'slide-1',
    type: SlideType.TITLE,
    title: "L'Audio-First",
    subtitle: "Une nouvelle façon de connecter avec son audience",
    content: "Leny",
    emoji: "🎙️"
  },
  {
    id: 'slide-2',
    type: SlideType.LIST,
    title: "Qui je suis",
    subtitle: "J'aide les e-commerce multimarques à croître sereinement",
    content: [
      "📊 Data - Collecte de données",
      "💰 Monétisation - Retail Media",
      "🎧 Expérience Client - Audio First ← AUJOURD'HUI"
    ],
    emoji: "👋"
  },
  {
    id: 'slide-3',
    type: SlideType.CENTER_EMOJI,
    title: "Aujourd'hui on se concentre sur...",
    content: "L'Expérience Audio",
    subtitle: "Applicable à tous les business",
    emoji: "🎧",
    highlight: true // Yellow/White theme
  },
  {
    id: 'slide-4',
    type: SlideType.LIST,
    title: "Ce que tout le monde utilise",
    content: [
      "📹 Vidéo",
      "✍️ Texte",
      "📸 Images",
      "❓ Audio... presque personne"
    ],
    emoji: "📉"
  },
  {
    id: 'slide-5',
    type: SlideType.LIST,
    title: "Pourquoi l'audio ?",
    content: [
      "🔄 Consommable partout (multitâche)",
      "❤️ Crée l'intimité rapidement",
      "🌊 Peu saturé"
    ],
    emoji: "🚀"
  },
  {
    id: 'slide-6',
    type: SlideType.SPLIT,
    title: "La preuve que ça marche",
    subtitle: "Ce n'est pas de la théorie",
    content: [
      "Sophia Parra - Pocket CMO (taux conversion 1.5%)",
      "Micro Audio Summit : 100-1000 leads en 6 semaines",
      "Coachs et consultants en ligne (US)"
    ],
    emoji: "📈",
    highlight: true
  },
  {
    id: 'slide-7',
    type: SlideType.BIG_STATEMENT,
    title: "Le parcours en 4 étapes",
    content: "Instagram → DM Audio → Podcast Privé → Engagement",
    emoji: "🗺️"
  },
  // Process Steps grouped together conceptually for the scrollytelling
  {
    id: 'slide-8',
    type: SlideType.PROCESS,
    title: "Étape 1",
    subtitle: "Instagram",
    content: "Follow automatique",
    emoji: "📱"
  },
  {
    id: 'slide-9',
    type: SlideType.PROCESS,
    title: "Étape 2",
    subtitle: "DM avec Audio",
    content: "Message vocal automatique",
    emoji: "💬"
  },
  {
    id: 'slide-10',
    type: SlideType.PROCESS,
    title: "Étape 3",
    subtitle: "Podcast Privé",
    content: "Invitation à rejoindre. Email = Accès.",
    emoji: "🔒"
  },
  {
    id: 'slide-11',
    type: SlideType.PROCESS,
    title: "Étape 4",
    subtitle: "Écoute & Déclencheurs",
    content: "Épisode 1 écouté → Bonus débloqué. Épisode 2 → Nouveau feed.",
    emoji: "⚡"
  },
  {
    id: 'slide-12',
    type: SlideType.LIST,
    title: "DÉMO LIVE: On teste ensemble",
    content: [
      "1. Follow @[ton_compte_instagram]",
      "2. Attendre le DM",
      "3. Rejoindre le podcast"
    ],
    emoji: "🧪",
    highlight: true
  },
  {
    id: 'slide-13',
    type: SlideType.LIST,
    title: "Ce qui va se passer",
    content: [
      "Maintenant : Follow",
      "Dans 30 sec : DM reçu",
      "Dans 2 min : Email envoyé",
      "Dans 5 min : Accès podcast"
    ],
    emoji: "⏳"
  },
  {
    id: 'slide-15',
    type: SlideType.LIST,
    title: "Pourquoi ça fonctionne",
    content: [
      "✅ Automatique",
      "🎤 Personnel (voix)",
      "📱 Accessible partout"
    ],
    emoji: "⚙️"
  },
  {
    id: 'slide-16',
    type: SlideType.BIG_STATEMENT,
    title: "10 façons d'utiliser l'audio",
    content: "dans TON business",
    emoji: "💡",
    highlight: true
  },
  {
    id: 'slide-17',
    type: SlideType.LIST,
    title: "Les applications (1/2)",
    content: [
      "🧘 Coach : Méditations/exercices guidés",
      "💻 SaaS : Onboarding audio interactif",
      "🎓 Formation : Modules immersifs",
      "🛍️ E-commerce : Stories produit",
      "📊 Consultant : Mini-audits audio"
    ],
    emoji: "☝️"
  },
  {
    id: 'slide-18',
    type: SlideType.LIST,
    title: "Les applications (2/2)",
    content: [
      "🎤 Summit : Micro audio summit",
      "📚 Lead Magnet : Série podcast privée",
      "💎 Qualification : Diagnostic audio payant",
      "👥 Communauté : Mastermind audio asynchrone",
      "⭐ VIP : Coaching avec flux podcast"
    ],
    emoji: "✌️"
  },
  {
    id: 'slide-20',
    type: SlideType.BIG_STATEMENT,
    title: "L'opportunité",
    content: "L'audio est sous-utilisé. C'est une opportunité à saisir.",
    emoji: "💎"
  },
  {
    id: 'slide-21',
    type: SlideType.CONTACT,
    title: "Questions ?",
    content: "Contact : [ton_email_ou_instagram]",
    emoji: "👋",
    highlight: true
  }
];