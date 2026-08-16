// ==================== COMPTES — BANQUE RAIFFEISEN ====================
// Les comptes, identifiants et transactions sont entièrement fictifs. Aucun
// compte n'est « bloqué » et aucun frais n'est jamais exigé pour accéder à
// son propre argent.

export const initialUsers = [
  {
    code: '07014860451',
    passwort: '260823',
    name: 'Marie Van',
    email: 'marie.van@gmail.com',
    telefon: '+41 79 000 00 00',
    waehrung: 'CHF',
    kontostand: 70000.5,
    kontonummer: 'CH93 0076 2011 6238 5295 7',
    filiale: 'Agence Annemasse Centre',
    eroeffnungsdatum: '12.03.2021',
    status: 'actif',
    transaktionen: [
      { datum: '02.08.2024', bezeichnung: 'Salaire', soll: '', haben: '4200.00' },
      { datum: '05.08.2024', bezeichnung: 'Loyer', soll: '1450.00', haben: '' },
      { datum: '08.08.2024', bezeichnung: 'Achat Migros', soll: '86.40', haben: '' },
      { datum: '10.08.2024', bezeichnung: 'Abonnement CFF', soll: '220.00', haben: '' }
    ]
  },
  {
    code: 'jean.patrick',
    passwort: 'test1234',
    name: 'Jean Patrick',
    email: 'jean.patrick@exemple.com',
    telefon: '+225 07 00 00 00 00',
    waehrung: 'CHF',
    kontostand: 2450000,
    kontonummer: 'CI93 CI93 5678 9012 3456 7890 12',
    filiale: 'Agence Abidjan Plateau',
    eroeffnungsdatum: '20.06.2023',
    status: 'actif',
    transaktionen: [
      { datum: '01.08.2026', bezeichnung: 'Virement reçu', soll: '', haben: '600000.00' },
      { datum: '04.08.2026', bezeichnung: 'Loyer Cocody', soll: '250000.00', haben: '' },
      { datum: '09.08.2026', bezeichnung: 'Facture d\'électricité', soll: '45000.00', haben: '' }
    ]
  },
  {
    code: 'laura.fontaine',
    passwort: 'test1234',
    name: 'Laura Fontaine',
    email: 'laura.fontaine@exemple.com',
    telefon: '+33 6 00 00 00 00',
    waehrung: 'CHF',
    kontostand: 8760.32,
    kontonummer: 'FR76 3000 4000 0100 0123 4567 890',
    filiale: 'Agence Lyon Part-Dieu',
    eroeffnungsdatum: '05.09.2020',
    status: 'actif',
    transaktionen: [
      { datum: '03.08.2026', bezeichnung: 'Salaire', soll: '', haben: '2600.00' },
      { datum: '06.08.2026', bezeichnung: 'Assurance ménage', soll: '38.90', haben: '' },
      { datum: '11.08.2026', bezeichnung: 'Restaurant', soll: '54.20', haben: '' }
    ]
  }
];

export const DATA_VERSION = 7;
