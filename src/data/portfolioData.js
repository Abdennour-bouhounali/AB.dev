export const companyInfo = {
  name: "EduNex",
  title: "Cabinet de Conseil & Réalisations Numériques",
  location: "France",
  city: "Toulouse",
  tagline: "Des solutions numériques sur mesure pour propulser votre entreprise.",
  subtitle: "EduNex accompagne les entreprises et indépendants dans la conception et le développement de solutions numériques : sites web, applications métier, plateformes SaaS, automatisation et intelligence artificielle.",
  email: "abdennour.bouhounali@gmail.com",
  phone: "07 58 10 30 86",
  formspreeId: "meebevgl",
  targetClients: "PME, Artisans, Commerçants, Startups, Professions libérales & Associations",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
};

export const services = [
  {
    id: "consulting",
    title: "Conseil informatique",
    icon: "LayoutTemplate",
    description: "Analyse stratégique de vos besoins, audit technique complet de vos systèmes actuels et architecture de solutions adaptées à vos objectifs de croissance.",
    features: [
      "Analyse des besoins",
      "Audit numérique",
      "Architecture de solutions"
    ],
    value: "Une feuille de route technologique claire pour sécuriser vos investissements."
  },
  {
    id: "website",
    title: "Sites web professionnels",
    icon: "Globe",
    description: "Conception de sites internet vitrines modernes, performants et hautement optimisés pour le référencement naturel (SEO) et le design mobile (responsive).",
    features: [
      "Sites vitrines premium",
      "Optimisation SEO",
      "Responsive design mobile-first"
    ],
    value: "Une présence en ligne attractive pour capter et convertir vos prospects."
  },
  {
    id: "app",
    title: "Applications métier",
    icon: "Cpu",
    description: "Développement d'outils sur mesure pour structurer votre activité : tableaux de bord opérationnels, portails clients sécurisés et applications internes.",
    features: [
      "Tableaux de bord (Dashboards)",
      "Portails clients sécurisés",
      "Outils de gestion interne"
    ],
    value: "Simplifie le quotidien de vos équipes et optimise la gestion de vos opérations."
  },
  {
    id: "saas",
    title: "Plateformes SaaS",
    icon: "Layers",
    description: "Création d'applications web évolutives, prêtes pour le marché, avec gestion avancée des utilisateurs, abonnements et base de données centralisée.",
    features: [
      "Applications cloud évolutives",
      "Gestion des rôles et utilisateurs",
      "Centralisation sécurisée des données"
    ],
    value: "Une infrastructure robuste prête à accueillir vos milliers d'utilisateurs."
  },
  {
    id: "automation",
    title: "Automatisation",
    icon: "Workflow",
    description: "Connexion de vos outils logiciels (CRM, ERP, facturation, emailing) et automatisation de vos processus répétitifs pour éliminer les tâches manuelles.",
    features: [
      "Connexions d'outils via API",
      "Optimisation des flux de travail",
      "Synchronisation automatique de données"
    ],
    value: "Élimine le risque d'erreur humaine et libère du temps à forte valeur ajoutée."
  },
  {
    id: "ai",
    title: "Intelligence artificielle",
    icon: "BrainCircuit",
    description: "Intégration d'outils d'IA modernes dans vos processus opérationnels : agents conversationnels (chatbots), assistants internes et recherche documentaire intelligente.",
    features: [
      "Chatbots et agents virtuels",
      "Assistants IA personnalisés",
      "Recherche documentaire intelligente"
    ],
    value: "Améliore la réactivité de votre support et accélère la recherche d'information."
  }
];

export const skills = [
  { name: "React", category: "Frontend", level: "react" },
  { name: "TailwindCSS", category: "Styling", level: "tailwind" },
  { name: "Laravel", category: "Backend", level: "laravel" },
  { name: "PHP", category: "Backend", level: "laravel" },
  { name: "JavaScript", category: "Core", level: "react" },
  { name: "HTML", category: "Core", level: "standard" },
  { name: "CSS", category: "Core", level: "standard" },
  { name: "MySQL", category: "Database", level: "db" }
];

export const projects = [
  {
    id: "essalam",
    domain: "essalam-sport.fr",
    title: "Essalam Sport Club",
    summary: "Plateforme de gestion complète avec dashboard administration et application mobile pour une association sportive d'envergure.",
    tech: ["React", "TailwindCSS", "Laravel", "MySQL"],
    bullets: [
      "Interface d'administration intuitive pour la gestion des adhérents.",
      "Système de notifications en temps réel pour les événements.",
      "Application mobile responsive pour un accès direct aux calendriers."
    ],
    metrics: [
      { num: "100%", label: "Gestion centralisée" },
      { num: "Mobile", label: "Application dédiée" }
    ],
    url: "https://essalam-sport.fr",
    type: "association",
    status: "En développement",
    images: ["/images/essalam-1.png", "/images/essalam-2.png", "/images/essalam-3.png"]
  },
  {
    id: "tagemi",
    domain: "tagemi-foundation.org",
    title: "TAGEMI Medical Platform",
    summary: "Application de gestion multi-rôle hautement sécurisée pour coordonner les campagnes médicales et le suivi des patients.",
    tech: ["React", "TailwindCSS", "REST APIs"],
    bullets: [
      "Interface et rôles d'accès différenciés pour les praticiens.",
      "Rapports d'intervention générés instantanément en PDF.",
      "Sécurisation totale des accès et des informations médicales."
    ],
    metrics: [
      { num: "Multi-rôle", label: "Accès sécurisés" },
      { num: "<1.2s", label: "Chargement interactif" }
    ],
    url: "https://tagemi-foundation.org",
    type: "medical",
    images: ["/images/tagemi-1.png", "/images/tagemi-2.png"]
  },
  {
    id: "fisora",
    domain: "fisora.shop",
    title: "Fisora E-Commerce",
    summary: "Boutique en ligne personnalisée et performante avec gestion de catalogue produits, stocks et tunnel de paiement optimisé.",
    tech: ["Laravel", "MySQL", "TailwindCSS", "JavaScript"],
    bullets: [
      "Parcours d'achat fluide (tunnel de commande 35% plus rapide).",
      "Gestion des stocks en temps réel sans lenteurs de plugins tiers.",
      "Console d'administration intuitive et sur mesure."
    ],
    metrics: [
      { num: "35%", label: "Tunnel d'achat plus rapide" },
      { num: "Zéro", label: "Frais tiers superflus" }
    ],
    url: "https://fisora.shop",
    type: "ecommerce",
    images: ["/images/fisora-1.png", "/images/fisora-2.png", "/images/fisora-3.png"]
  },
  {
    id: "maisonsaha",
    domain: "maisonsaha.fr",
    title: "Maison Saha",
    summary: "Site vitrine premium avec expérience utilisateur moderne, storytelling immersif et présentation de menu interactive pour un brunch/café.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    bullets: [
      "Identité de marque forte et storytelling digital immersif.",
      "Menu interactif avec fiches produits élégantes.",
      "Entièrement optimisé pour les réservations sur smartphones."
    ],
    metrics: [
      { num: "100%", label: "Optimisé mobile-first" },
      { num: "Premium", label: "Identité visuelle" }
    ],
    url: "https://maisonsaha.vercel.app/",
    type: "vitrine",
    images: ["/images/maisonsaha-1.png", "/images/maisonsaha-2.png", "/images/maisonsaha-3.png"]
  },
  {
    id: "mansouria",
    domain: "mansouria-paris.fr",
    title: "Mansouria Paris",
    summary: "Présence digitale premium et expérience de marque immersive pour un restaurant gastronomique historique à Paris.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    bullets: [
      "Identité visuelle moderne & expérience digitale haut de gamme.",
      "Storytelling émotionnel mettant en valeur le patrimoine de la marque.",
      "Expérience mobile fluide et optimisée pour augmenter les réservations."
    ],
    metrics: [
      { num: "1984", label: "Histoire & Patrimoine" },
      { num: "Luxury", label: "Design de marque" }
    ],
    url: "https://mansouria-coral.vercel.app/",
    type: "vitrine",
    images: ["/images/mansouria-1.png", "/images/mansouria-2.png"]
  }
];

export const processSteps = [
  {
    num: "01",
    title: "Cadrage & Curation",
    description: "Nous échangeons en détail pour cerner les besoins métier de votre entreprise. Nous établissons ensemble le cahier des charges technique et fonctionnel."
  },
  {
    num: "02",
    title: "Architecture & Design",
    description: "Conception des parcours utilisateurs, modélisation des bases de données et élaboration des maquettes interactives pour valider les flux fonctionnels."
  },
  {
    num: "03",
    title: "Développement & Tests",
    description: "Écriture de code propre, performant et documenté. Vous suivez l'avancée en temps réel via un lien de staging privé. Nous effectuons des audits SEO et des tests unitaires complets."
  },
  {
    num: "04",
    title: "Lancement & Suivi",
    description: "Déploiement sur des serveurs cloud sécurisés et optimisés, configuration SSL, formation de vos équipes et phase d'accompagnement post-mise en ligne."
  }
];

export const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Directrice Générale chez Fisora",
    quote: "L'accompagnement d'EduNex a transformé nos ventes. La boutique en ligne sur mesure qu'ils ont conçue a réduit nos abandons de panier de 35% grâce à un parcours ultra-rapide."
  },
  {
    name: "Marc-Antoine",
    role: "Directeur de la Fondation Tagemi",
    quote: "Le professionnalisme et l'attention portée à l'optimisation mobile ont permis à notre plateforme médicale d'être pleinement opérationnelle même dans les zones à faible bande passante."
  },
  {
    name: "Elise Dupont",
    role: "Fondatrice de la Maison Dupont",
    quote: "EduNex comprend parfaitement les problématiques de conversion. Le site vitrine premium qu'ils ont réalisé pour notre établissement a doublé notre taux de réservation."
  }
];

export const faqs = [
  {
    question: "Pourquoi choisir une solution sur mesure plutôt qu'un outil générique ?",
    answer: "Les créateurs de sites génériques imposent souvent du code lourd et lent, des abonnements cumulatifs coûteux et des limites structurelles strictes. Un développement sur mesure par EduNex garantit des performances de chargement exceptionnelles (bénéfiques pour le SEO Google), une sécurité maximale, et une plateforme capable de s'adapter précisément à l'évolution de vos besoins métiers sans contraintes techniques tierces."
  },
  {
    question: "Combien de temps prend la réalisation d'un projet ?",
    answer: "La durée de conception varie selon la complexité : un site internet vitrine moderne se déploie en 2 à 3 semaines, tandis qu'une application métier sur mesure ou une plateforme SaaS nécessite généralement 4 à 8 semaines. Nous travaillons en mode agile, avec des livraisons hebdomadaires sur un environnement de préproduction pour que vous restiez impliqué à chaque étape."
  },
  {
    question: "Proposez-vous un accompagnement après la mise en ligne ?",
    answer: "Tout à fait. Nous proposons des contrats de maintenance et de suivi : surveillance de l'hébergement, mises à jour de sécurité des bases de données, sauvegardes externalisées régulières et ajustements fonctionnels mineurs. De plus, nous livrons une documentation technique claire et des vidéos explicatives pour que vous puissiez administrer votre contenu en toute autonomie."
  },
  {
    question: "Où êtes-vous basés ? Est-il possible de se rencontrer ?",
    answer: "L'équipe d'EduNex est basée à Toulouse, France. Nous pouvons tout à fait nous rencontrer localement en Occitanie pour initier vos projets. Pour les clients basés dans d'autres régions ou à l'étranger, nous gérons l'ensemble des échanges de façon fluide par visioconférence (Meet, Zoom) et Slack."
  }
];
