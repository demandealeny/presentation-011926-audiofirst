import imgAvatarWebsite from '@/assets/avatar-website.jpg';
import { type SlideContent, SlideType } from './types';

export const SLIDES: SlideContent[] = [
  {
    id: 'slide-1',
    type: SlideType.TITLE,
    title: "L'Audio-First",
    subtitle: "Une nouvelle façon de connecter avec son audience",
    content: "Leny Diallo",
    image: imgAvatarWebsite,
    emoji: "🎙️"
  },
  {
    id: 'slide-2',
    type: SlideType.LIST,
    title: "Qui je suis",
    subtitle: "Je m'appelle Leny, j'aide les e-commerce à croître sereinement",
    content: [
      "📊 Data - Collecte de données",
      "💰 Monétisation - Retail Media",
      "🎧 Expérience Client - Audio First · le sujet d'aujourd'hui"
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
      "🔄 Consommable partout",
      "❤️ Crée de l'intimité",
      "😌 Facile à produire",
      "🌊 Peu saturé"
    ],
    emoji: "🚀"
  },
  {
    id: 'slide-6',
    type: SlideType.CARDS,
    title: "La preuve que ça marche",
    subtitle: "Des résultats concrets tirés d'études de cas réelles",
    emoji: "🔥",
    highlight: true,
    extraData: {
      items: [
        {
          title: "$1.8M",
          desc: "Andrea Crowder : x4.5 de C.A. en 1 an (passage de 400k à 1.8M) en basculant sur un modèle 'Tout Audio'.",
          icon: "📈"
        },
        {
          title: "$320k",
          desc: "Julie Ciardi : Lancement réussi avec 50% de cash collecté immédiatement grâce à l'intimité du podcast privé.",
          icon: "💰"
        },
        {
          title: "$150k/mois",
          desc: "Colleen Catchman : Passage de 40k à 150k $/mois grâce à l'utilisation stratégique de tunnels de podcasts privés.",
          icon: "🚀"
        }
      ]
    }
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
      "1. Follow @lenydiallo.store",
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
      "✅ Automatique et direct",
      "📱 Accessible partout",
      "📊 Trackable"
    ],
    emoji: "⚙️"
  },
  {
    id: 'slide-16',
    type: SlideType.BIG_STATEMENT,
    title: "6 façons d'utiliser l'audio",
    content: "dans TON business",
    emoji: "💡",
    highlight: true
  },
  {
    id: 'slide-17',
    type: SlideType.LIST,
    title: "Les cas d'usages",
    content: [
      "🧘 Coach : Méditations guidées",
      "💻 SaaS : Onboarding interactif",
      "🎓 Formation : Q/A asynchrone",
      "🎤 Summit : Micro audio summit",
      "🛍️ E-commerce : Routine de soin",
      "📊 Consultant : Mini-audits"
    ],
    emoji: "☝️"
  },
  {
    id: 'slide-20',
    type: SlideType.BIG_STATEMENT,
    title: "L'opportunité",
    content: "L'audio est sous-utilisé. C'est une opportunité à saisir.",
    emoji: "💎"
  },
  {
    id: 'slide-club',
    type: SlideType.IMAGE_CTA,
    title: "Aller plus loin ensemble",
    content: "Rejoignez le club des entrepreneurs qui veulent gagner plus, se former et rencontrer les bonnes personnes.",
    emoji: "https://i.vimeocdn.com/video/2106594326-5e002c67f54fe20960d7b219a1e8dbbb84d7ef2f5d690c1b441c6fa9731857a7-d_1280?region=us",
    extraData: {
      label: "Découvrir le Club Sam'uraï 🚀",
      items: [{ title: "https://www.skool.com/cime-4598/about?ref=c22e845d1b244bf09e6c314de7894f8a" }]
    },
    highlight: true
  },
  {
    id: 'slide-21',
    type: SlideType.CONTACT,
    title: "Questions ?",
    content: "Contact : leny@leny.store",
    emoji: "👋",
    highlight: true
  }
];