// ==================== SERVICE DE DEVISE ====================
// Seul le franc suisse est désormais pris en charge (contexte Raiffeisen).
export const CURRENCIES = {
  CHF: { label: 'Franc suisse', symbol: 'CHF', locale: 'fr-CH', rateFromEUR: 0.94 }
};

/**
 * Convertit un montant. Comme seul le CHF existe désormais, il n'y a plus
 * rien à convertir — la fonction est conservée pour la compatibilité.
 */
export function convertAmount(betrag) {
  return betrag;
}

/**
 * Formate un montant selon la convention suisse : symbole avant le
 * montant, point comme séparateur de milliers.
 */
export function formatCurrency(betrag) {
  const config = CURRENCIES.CHF;

  const formattedNumber = new Intl.NumberFormat(config.locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(betrag);

  return `${config.symbol} ${formattedNumber}`;
}
