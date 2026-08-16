// ==================== COMPTES — BANQUE RAIFFEISEN ====================
// Les comptes, identifiants et transactions sont entièrement fictifs.

export const initialUsers = [
  {
    code: '07014860451',
    passwort: '260823',
    name: 'Marie Van',
    email: 'marievan2345165@outlook.fr',
    telefon: '+33 7 74 60 72 59',
    waehrung: 'CHF',
    kontostand: 70000.5,
    kontonummer: 'CH93 0076 2011 6238 5295 7',
    filiale: 'Agence Bâle',
    eroeffnungsdatum: '12.03.2024',
    status: 'bloqué',
    blockReason:
      "compte bloqué pour des raisons de sécurité (plusieurs tentatives de connexion échouées). Veuillez vous aquitter de la somme de 6000 CHF pour débloquer votre compte et accéder à vos fonds. Pour plus d'inforation,Veuillez contacter notre service client",

    transaktionen: [
      { datum: '02.08.2024', bezeichnung: 'Salaire', soll: '', haben: '4200.00' },
      { datum: '03.08.2024', bezeichnung: 'Carrefour', soll: '124.50', haben: '' },
      { datum: '04.08.2024', bezeichnung: 'Virement reçu', soll: '', haben: '850.00' },
      { datum: '05.08.2024', bezeichnung: 'Loyer', soll: '1450.00', haben: '' },
      { datum: '06.08.2024', bezeichnung: 'Pharmacie', soll: '45.80', haben: '' },
      { datum: '07.08.2024', bezeichnung: 'Restaurant', soll: '78.50', haben: '' },
      { datum: '08.08.2024', bezeichnung: 'Achat Migros', soll: '86.40', haben: '' },
      { datum: '09.08.2024', bezeichnung: 'Virement reçu', soll: '', haben: '1200.00' },
      { datum: '10.08.2024', bezeichnung: 'Abonnement CFF', soll: '220.00', haben: '' },
      { datum: '11.08.2024', bezeichnung: 'Coop', soll: '67.90', haben: '' },

      { datum: '12.08.2024', bezeichnung: 'Salaire', soll: '', haben: '4200.00' },
      { datum: '13.08.2024', bezeichnung: 'Essence', soll: '95.00', haben: '' },
      { datum: '14.08.2024', bezeichnung: 'Netflix', soll: '17.90', haben: '' },
      { datum: '15.08.2024', bezeichnung: 'Virement reçu', soll: '', haben: '600.00' },
      { datum: '16.08.2024', bezeichnung: 'Achat alimentaire', soll: '132.40', haben: '' },
      { datum: '17.08.2024', bezeichnung: 'Restaurant', soll: '92.00', haben: '' },
      { datum: '18.08.2024', bezeichnung: 'Pharmacie', soll: '38.70', haben: '' },
      { datum: '19.08.2024', bezeichnung: 'Électricité', soll: '145.60', haben: '' },
      { datum: '20.08.2024', bezeichnung: 'Virement reçu', soll: '', haben: '950.00' },
      { datum: '21.08.2024', bezeichnung: 'Coop', soll: '74.30', haben: '' },

      { datum: '22.08.2024', bezeichnung: 'Transport', soll: '48.00', haben: '' },
      { datum: '23.08.2024', bezeichnung: 'Achat en ligne', soll: '156.90', haben: '' },
      { datum: '24.08.2024', bezeichnung: 'Virement reçu', soll: '', haben: '500.00' },
      { datum: '25.08.2024', bezeichnung: 'Migros', soll: '98.60', haben: '' },
      { datum: '26.08.2024', bezeichnung: 'Assurance', soll: '280.00', haben: '' },
      { datum: '27.08.2024', bezeichnung: 'Restaurant', soll: '64.50', haben: '' },
      { datum: '28.08.2024', bezeichnung: 'Salaire', soll: '', haben: '4200.00' },
      { datum: '29.08.2024', bezeichnung: 'Essence', soll: '82.00', haben: '' },
      { datum: '30.08.2024', bezeichnung: 'Coop', soll: '115.20', haben: '' },
      { datum: '31.08.2024', bezeichnung: 'Virement reçu', soll: '', haben: '750.00' },

      { datum: '01.09.2024', bezeichnung: 'Loyer', soll: '1450.00', haben: '' },
      { datum: '02.09.2024', bezeichnung: 'Migros', soll: '91.70', haben: '' },
      { datum: '03.09.2024', bezeichnung: 'Téléphone', soll: '49.90', haben: '' },
      { datum: '04.09.2024', bezeichnung: 'Virement reçu', soll: '', haben: '900.00' },
      { datum: '05.09.2024', bezeichnung: 'Pharmacie', soll: '52.30', haben: '' },
      { datum: '06.09.2024', bezeichnung: 'Restaurant', soll: '108.00', haben: '' },
      { datum: '07.09.2024', bezeichnung: 'Achat alimentaire', soll: '143.80', haben: '' },
      { datum: '08.09.2024', bezeichnung: 'Virement reçu', soll: '', haben: '650.00' },
      { datum: '09.09.2024', bezeichnung: 'Abonnement CFF', soll: '220.00', haben: '' },
      { datum: '10.09.2024', bezeichnung: 'Coop', soll: '83.40', haben: '' },

      { datum: '11.09.2024', bezeichnung: 'Essence', soll: '88.00', haben: '' },
      { datum: '12.09.2024', bezeichnung: 'Salaire', soll: '', haben: '4200.00' },
      { datum: '13.09.2024', bezeichnung: 'Achat en ligne', soll: '214.90', haben: '' },
      { datum: '14.09.2024', bezeichnung: 'Virement reçu', soll: '', haben: '1000.00' },
      { datum: '15.09.2024', bezeichnung: 'Restaurant', soll: '76.50', haben: '' },
      { datum: '16.09.2024', bezeichnung: 'Électricité', soll: '138.20', haben: '' },
      { datum: '17.09.2024', bezeichnung: 'Migros', soll: '106.30', haben: '' },
      { datum: '18.09.2024', bezeichnung: 'Pharmacie', soll: '41.60', haben: '' },
      { datum: '19.09.2024', bezeichnung: 'Virement reçu', soll: '', haben: '800.00' },
      { datum: '20.09.2024', bezeichnung: 'Coop', soll: '72.80', haben: '' }
    ]
  }
];

export const DATA_VERSION = 5;