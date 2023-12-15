# BuildW3

Benvenuto nel progetto del Team1 di Epicode relativo alla terza ed ultima Build Week del corso Frontend Developer.

Il sito in questione rappresenta un "social media" aperto a tutti, libero e semplice da utilizzare che permetterà a tutti gli utenti iscritti di poter pubblicare idee, opinioni personali o qualsiasi altra cosa venga in mente all'utente. Le funzionalità sono basilari e semplici da imparare, tanto da permettere anche all'utente medio l'utilizzo.

Il sito permette anche agli utenti non iscritti di poter visionare tutti i post creati dai vari utenti, ma le vere funzionalità arrivano una volta iscritti:

1. L'iscrizione è semplice, attraverso un form è possibile inserire Nome, Email e Password e dunque registrarsi alla piattaforma.
2. Il login risulta altrettanto semplice (sempre se ti ricordi le credenziali...), tramite l'email e la password inseriti nella registrazione potrai entrare nel mondo di BW Post.
3. Sul menù di navigazione saranno presenti le voci:
   -HOME: dove sarà possibile visionare, commentare e mettere like a tutti i post presenti;
   -Profilo: dove sarà possibile visionare e personalizzare il proprio utente, cambiando fin da subito mail, password e anche foto profilo;
   -Create: una semplice interfaccia ti accompagnerà nella creazione di un tuo post. Attraverso i campi Title, Body e Poster potrai inserire rispettivamente Titolo, Corpo del post e relativa immagine allegata;
4. Ogni post sulla Home potrà essere visionato approfonditamente attraverso il tasto VIEW presente su di esso. La nuova interfaccia mostrerà:
   -L'intero post compreso di immagine, titolo e corpo;
   -La sezione commenti e il relativo campo dove sarà possibile inserire un nuovo commento (nel commento sarà poi visualizzato anche il nome dell'utente che ha scritto il commento);
5. Le funzionalità in Home non terminano qui, infatti per i propri post ci saranno a disposizioni altre due funzionalità:
   -Edit: un bottone vi porterà in una semplice interfaccia dove potrete modificare tutti i parametri del post (Titolo, corpo e immagine);
   -Delete: un bottone che vi permetterà di cancellare il proprio post.
6. Una volta fatto il login sul menù di navigazione sarà presente il tasto LOGOUT, che permetterà a tutti gli utenti di poter uscire e quindi sloggarsi dall'applicazione stessa.

Il sito vi accompagnerà nella scoperta di post anche attraverso suoni e animazioni che renderanno l'esperienza unica nel suo genere.

Questo progetto è stato creato con [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Scrivendo in consoloe `npm run fullstack` sarà possibile far partire l'applicazione. In automatico sarai reinderizzato verso `http://localhost:4200/`. L'applicazione si aggiornerà automaticamente a qualsiasi cambiamento interno nei file.

## Code scaffolding

Run `ng g component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
