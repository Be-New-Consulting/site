export interface LegalRow {
  label: string
  value: string
}

export interface LegalSection {
  heading: string
  rows?: LegalRow[]
  paragraphs?: string[]
}

// Les champs laissés vides ne sont pas rendus. À compléter avant la bascule
// sur le domaine institutionnel : forme juridique, SIREN, siège social, et
// le téléphone de l'hébergeur (exigé par la LCEN).
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
        { label: "Responsable de la publication", value: "Fabien Costes" },
        { label: "Forme juridique", value: "" },
        { label: "SIREN", value: "" },
        { label: "Siège social", value: "" },
        { label: "Courriel", value: "contact@benew-consulting.com" },
        { label: "Téléphone", value: "+33 6 51 06 26 84" },
      ],
    },
    {
      heading: "Hébergement",
      rows: [
        { label: "Hébergeur", value: "IONOS SARL" },
        { label: "Adresse", value: "7 place de la Gare, 57200 Sarreguemines, France" },
        { label: "Téléphone", value: "" },
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
