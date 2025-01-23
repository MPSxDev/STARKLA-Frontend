export const DIFFICULTY_SETTINGS = {
    Medium: { pairs: 8, time: 40 },
    Hard: { pairs: 12, time: 30 },
    Expert: { pairs: 16, time: 20 },
    Master: { pairs: 20, time: 15 }
  };
  
  export const WORD_PAIRS = [
    { id: 1, wordEn: "Compiler", wordEs: "Compilador" },
    { id: 2, wordEn: "Function", wordEs: "Función" },
    { id: 3, wordEn: "Variable", wordEs: "Variable" },
    { id: 4, wordEn: "Database", wordEs: "Base de datos" },
    { id: 5, wordEn: "Interface", wordEs: "Interfaz" },
    { id: 6, wordEn: "Network", wordEs: "Red" },
    { id: 7, wordEn: "Server", wordEs: "Servidor" },
    { id: 8, wordEn: "Security", wordEs: "Seguridad" },
    { id: 9, wordEn: "Testing", wordEs: "Pruebas" },
    { id: 10, wordEn: "Library", wordEs: "Biblioteca" },
    { id: 11, wordEn: "Framework", wordEs: "Marco de trabajo" },
    { id: 12, wordEn: "Component", wordEs: "Componente" },
    { id: 13, wordEn: "Module", wordEs: "Módulo" },
    { id: 14, wordEn: "Algorithm", wordEs: "Algoritmo" },
    { id: 15, wordEn: "Debugging", wordEs: "Depuración" },
    { id: 16, wordEn: "Deployment", wordEs: "Despliegue" },
    { id: 17, wordEn: "Class", wordEs: "Clase" },
    { id: 18, wordEn: "Object", wordEs: "Objeto" },
    { id: 19, wordEn: "Method", wordEs: "Método" },
    { id: 20, wordEn: "Property", wordEs: "Propiedad" }
  ];

// New game scoring and timing constants
export const GAME_SETTINGS = {
  POINTS: {
    MATCH: 100,          // Points for finding a match
    COMBO_BONUS: 50,     // Bonus points for combo (every 3 matches)
    SPEED_BONUS: 25,     // Bonus points for quick matches (under threshold)
  },
  TIMING: {
    CARD_FLIP_DELAY: 500,    // Time cards stay flipped when no match (ms)
    QUICK_MATCH_THRESHOLD: 3,  // Seconds threshold for speed bonus
    COMBO_THRESHOLD: 3,        // Number of matches needed for combo
  },
  ANIMATIONS: {
    CARD_FLIP_DURATION: 0.3,   // Card flip animation duration (seconds)
  }
};