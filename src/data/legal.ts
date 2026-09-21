export interface LegalRow {
  label: string
  value: string
}

export interface LegalSection {
  heading: string
  rows?: LegalRow[]
  paragraphs?: string[]
}

// Les champs laissés vides ne sont pas rendus, pour ne jamais publier une
// information légale incomplète. Restent à compléter : capital social et
// numéro RCS.
export const legal: {
  title: string
  intro: string
  sections: LegalSection[]
} = {
  title: "Mentions légales",
  intro:
    "Informations légales relatives à l'éditeur et à l'hébergement de ce site, conformément à la loi pour la confiance dans l'économie numérique.",
  sections: [
    {
      heading: "Éditeur du site",
      rows: [
        { label: "Dénomination", value: "Be New Consulting" },
        { label: "Forme juridique", value: "EURL — entreprise unipersonnelle à responsabilité limitée" },
        { label: "Capital social", value: "" },
        { label: "SIREN", value: "979 591 872" },
        { label: "RCS", value: "" },
        { label: "Siège social", value: "16 chemin de Lyze, 33380 Biganos, France" },
        { label: "Responsable de la publication", value: "Fabien Costes" },
        { label: "Courriel", value: "contact@benew-consulting.com" },
        { label: "Téléphone", value: "+33 6 51 06 26 84" },
      ],
    },
    {
      heading: "Hébergement",
      rows: [
        { label: "Serveur exploité par", value: "Be New Consulting — Fabien Costes" },
        { label: "Contact", value: "+33 6 51 06 26 84 — contact@benew-consulting.com" },
        { label: "Infrastructure", value: "IONOS SARL, 7 place de la Gare, 57200 Sarreguemines, France" },
      ],
      paragraphs: [
        "Le site est déployé sur un serveur privé virtuel loué auprès d'IONOS et administré directement par Be New Consulting. Toute demande relative au contenu publié peut être adressée aux coordonnées ci-dessus.",
      ],
    },
    {
      heading: "Propriété intellectuelle",
      paragraphs: [
        "Les textes, visuels et éléments graphiques de ce site sont la propriété de leur auteur, sauf mention contraire. Le code source du site est publié sous licence libre et consultable publiquement.",
        "Les noms de clients et de produits cités le sont à titre de référence et restent la propriété de leurs détenteurs respectifs.",
      ],
    },
    {
      heading: "Données personnelles et traceurs",
      paragraphs: [
        "Ce site est statique. Il ne dépose aucun cookie, n'utilise aucun outil de mesure d'audience et ne collecte aucune donnée personnelle par lui-même.",
        "Aucune ressource tierce n'est chargée : les polices de caractères sont hébergées sur le même serveur que le site. Aucune donnée, adresse IP comprise, n'est transmise à un service tiers du seul fait de la consultation.",
        "Les échanges initiés par courriel ou via LinkedIn relèvent des conditions propres à ces services.",
      ],
    },
  ],
}
