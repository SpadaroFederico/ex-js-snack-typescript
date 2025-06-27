// 🏆 Snack 2
// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

// nome → stringa
// cognome → stringa
// annoNascita → numero
// sesso → Può essere solo "m" o "f".
// anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])
// 🎯 BONUS
// Il type alias Dipendente, ha anche i seguenti dati:

// emailAziendale → Email assegnata al dipendente (non si può modificare)
// contratto → Specifica il tipo di contratto del dipendente, con valori limitati a “indeterminato”, “determinato” o “freelance”.

type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: "m" | "f";
  anniDiServizio: number[];
  readonly emailAziendale: string;
  contratto: "indeterminato" | "determinato" | "freelance";
};

const mario: Dipendente = {
  nome: "Mario",
  cognome: "Rossi",
  annoNascita: 1985,
  sesso: "m",
  anniDiServizio: [2015, 2016, 2018, 2019],
  emailAziendale: "mario.rossi@azienda.com",
  contratto: "indeterminato"
};

type Developer = Dipendente & {
  livelloEsperienza: "Junior" | "Mid" | "Senior";
  linguaggi?: string[];
  certificazioni: string[]; 
};

type ProjectManager = Dipendente & {
  teamSize: number | null;
  budgetGestito?: number; 
  stakeholderPrincipali: string[];
};

type Team = {
  nome: string;
  progettoAttuale: string | null;
  budget: number;
  membri: [ProjectManager, ...Developer[]]; 
};


