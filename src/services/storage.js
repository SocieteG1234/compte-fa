// ==================== SERVICE DE STOCKAGE ====================
const StorageService = {
  get(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.warn(`Clé "${key}" introuvable ou invalide`);
      return null;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Erreur d’écriture localStorage :', error);
      return false;
    }
  },

  delete(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Erreur de suppression localStorage :', error);
      return false;
    }
  }
};

export default StorageService;
