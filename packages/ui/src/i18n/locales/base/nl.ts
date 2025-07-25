import type { TranslationSchema } from '../../types'

export const nl: TranslationSchema = {
  common: {
    save: 'Opslaan',
    cancel: 'Annuleren',
    delete: 'Verwijderen',
    edit: 'Bewerken',
    close: 'Sluiten',
    loading: 'Laden...',
    error: 'Fout',
    success: 'Succes',
    warning: 'Waarschuwing',
    confirm: 'Bevestigen',
    yes: 'Ja',
    no: 'Nee',
    settings: 'Instellingen',
    back: 'Terug',
    home: 'Home',
    done: 'Klaar',
    add: 'Toevoegen',
    remove: 'Verwijderen',
    reset: 'Resetten',
    apply: 'Toepassen',
    search: 'Zoeken',
    filter: 'Filteren',
    sort: 'Sorteren',
    refresh: 'Vernieuwen',
    upload: 'Uploaden',
    download: 'Downloaden',
    share: 'Delen',
    copy: 'Kopiëren',
    paste: 'Plakken',
    undo: 'Ongedaan maken',
    redo: 'Opnieuw',
    welcome: 'Welkom {name}!',
    menu: 'Menu',
    showMore: 'Meer tonen',
    itemsSelected: '{count} items geselecteerd',
    enabled: 'Ingeschakeld',
    disabled: 'Uitgeschakeld',
    comingSoon: 'Binnenkort beschikbaar',
    required: 'Verplicht',
    optional: 'Optioneel',
    dragDropHere: 'of sleep en zet hier neer',
    increaseValue: 'Waarde verhogen',
    decreaseValue: 'Waarde verlagen',
    online: 'Online',
    offline: 'Offline',
    expandGroup: 'Groep uitvouwen',
    collapseGroup: 'Groep samenvouwen',
    applicationLoading: 'Applicatie laden',
    day: 'Dag',
    month: 'Maand',
    searchIcons: 'Zoek iconen...',
    backgroundImage: 'Achtergrondafbeelding',
    preview: 'Voorbeeld',
    justNow: 'Zojuist',
    minutesAgo: '{count}m geleden',
    hoursAgo: '{count}u geleden',
    daysAgo: '{count}d geleden',
    more: 'meer',
    speak: 'Spreken',
    dismiss: 'Sluiten'
  },
  auth: {
    login: 'Inloggen',
    logout: 'Uitloggen',
    signUp: 'Registreren',
    signIn: 'Aanmelden',
    email: 'E-mail',
    password: 'Wachtwoord',
    confirmPassword: 'Bevestig wachtwoord',
    forgotPassword: 'Wachtwoord vergeten?',
    resetPassword: 'Wachtwoord resetten',
    changePassword: 'Wachtwoord wijzigen',
    currentPassword: 'Huidig wachtwoord',
    newPassword: 'Nieuw wachtwoord',
    passwordRequired: 'Wachtwoord is verplicht',
    emailRequired: 'E-mail is verplicht',
    invalidEmail: 'Ongeldig e-mailadres',
    passwordTooShort: 'Wachtwoord moet minimaal 6 tekens zijn',
    passwordMismatch: 'Wachtwoorden komen niet overeen',
    loginFailed: 'Inloggen mislukt',
    signUpFailed: 'Registratie mislukt',
    userNotFound: 'Gebruiker niet gevonden',
    wrongPassword: 'Onjuist wachtwoord',
    emailInUse: 'E-mail al in gebruik',
    weakPassword: 'Wachtwoord is te zwak',
    networkError: 'Netwerkfout. Controleer je verbinding.',
    verifyEmail: 'Verifieer je e-mail',
    emailSent: 'E-mail verzonden',
    checkEmail: 'Controleer je e-mail voor een verificatielink',
    loginToAccount: 'Log in op je account',
    emailAddress: 'E-mailadres',
    enterEmail: 'Voer je e-mail in',
    sendCode: 'Code verzenden',
    or: 'of',
    loginWithApple: 'Inloggen met Apple',
    dontHaveAccount: 'Heb je geen account?',
    register: 'Registreren',
    option1MagicLink: 'Optie 1: Klik op de magische link in je e-mail',
    option2EnterCode: 'Optie 2: Voer de {codeLength}-cijferige code in',
    verificationCode: 'Verificatiecode',
    enterDigitCode: 'Voer de {codeLength}-cijferige code in',
    verifyCode: 'Code verifiëren',
    didntReceiveCode: 'Code niet ontvangen?',
    resendCode: 'Opnieuw versturen',
    useDifferentEmail: 'Gebruik een ander e-mailadres',
    createAccount: 'Maak je account aan',
    fullNameOptional: 'Volledige naam (Optioneel)',
    enterFullName: 'Voer je volledige naam in',
    alreadyHaveAccount: 'Heb je al een account?',
    tryAgain: 'Probeer opnieuw',
    pleaseEnterValidEmail: 'Voer een geldig e-mailadres in',
    pleaseEnterValidCode: 'Voer een geldige {codeLength}-cijferige code in',
    preparingApp: 'Je app wordt voorbereid...',
    welcomeToTiko: 'Welkom bij Tiko',
    signInToAccess: 'Log in om toegang te krijgen tot je communicatie-apps',
    appleSignInFailed: 'Inloggen met Apple mislukt',
    failedToSendCode: 'Verzenden van verificatiecode mislukt',
    invalidVerificationCode: 'Ongeldige verificatiecode',
    failedToResendCode: 'Opnieuw verzenden van code mislukt'
  },
  settings: {
    title: 'Instellingen',
    userSettings: 'Gebruikersinstellingen',
    appearance: 'Uiterlijk',
    theme: 'Thema',
    lightTheme: 'Licht',
    darkTheme: 'Donker',
    autoTheme: 'Automatisch',
    language: 'Taal',
    region: 'Regio',
    voiceAndSound: 'Stem & Geluid',
    voiceEnabled: 'Stem ingeschakeld',
    voice: 'Stem',
    on: 'Aan',
    off: 'Uit',
    saveChanges: 'Wijzigingen opslaan',
    settingsSaved: 'Instellingen opgeslagen',
    failedToSave: 'Opslaan mislukt',
    passwordChangeNotImplemented: 'Wachtwoord wijzigen nog niet geïmplementeerd'
  },
  timer: {
    start: 'Start',
    pause: 'Pauze',
    stop: 'Stop',
    reset: 'Reset',
    setTime: 'Tijd instellen',
    minutes: 'Minuten',
    seconds: 'Seconden',
    countDown: 'Aftellen',
    countUp: 'Optellen',
    quickTimes: 'Snelle tijden',
    timerDuration: 'Timer Duur',
    soundNotification: 'Geluidsmeldingen',
    vibrationNotification: 'Trilmeldingen',
    timesUp: 'Tijd is om!',
    dismiss: 'Sluiten'
  },
  cards: {
    createCard: 'Kaart maken',
    addCard: 'Kaart toevoegen',
    editCard: 'Kaart bewerken',
    deleteCard: 'Kaart verwijderen',
    cardLabel: 'Kaartlabel',
    audioText: 'Audiotekst',
    uploadImage: 'Afbeelding uploaden',
    createCardGroup: 'Kaartgroep maken',
    groupName: 'Groepsnaam',
    selectedCards: 'Geselecteerde kaarten',
    tags: 'Tags',
    useUrl: 'URL gebruiken',
    imageUrl: 'Afbeelding URL',
    basicInformation: 'Basisinformatie',
    image: 'Afbeelding',
    styling: 'Stijl',
    backgroundColor: 'Achtergrondkleur',
    customColor: 'Aangepaste kleur',
    preview: 'Voorbeeld',
    searchCards: 'Kaarten zoeken...',
    gridView: 'Rasterweergave',
    groupsView: 'Groepenweergave',
    loadingCards: 'Kaarten laden...',
    tryAgain: 'Probeer opnieuw',
    noCardsYet: 'Nog geen kaarten',
    createFirstCardPrompt: 'Maak je eerste communicatiekaart om te beginnen',
    createFirstCard: 'Maak eerste kaart',
    noCardsFound: 'Geen kaarten gevonden',
    tryDifferentSearch: 'Probeer een andere zoekterm of maak een nieuwe kaart',
    clearSearch: 'Zoeken wissen',
    ungroupedCards: 'Niet-gegroepeerde kaarten',
    deleteThisCard: 'Deze kaart verwijderen?',
    cardCreatedSuccessfully: 'Kaart succesvol aangemaakt',
    groupCreatedSuccessfully: 'Groep succesvol aangemaakt',
    deleteSelectedCards: '{count} kaarten verwijderen?',
    clear: 'Wissen',
    done: 'Klaar',
    selectCardsToOrganize: 'Selecteer kaarten om te organiseren of verwijderen',
    tapCardsToSpeak: 'Tik op kaarten om te spreken',
    cardsSettings: 'Kaarten instellingen',
    selected: 'geselecteerd',
    closeModal: 'Venster sluiten',
    whatShouldBeSpoken: 'Wat moet er gezegd worden wanneer aangetikt',
  },
  type: {
    typeToSpeak: 'Typ wat je wilt horen...',
    speak: 'Spreek',
    clearText: 'Tekst wissen',
    characters: 'tekens',
    typeGameSettings: 'Type spel instellingen',
    typeAndSpeak: 'Typ en spreek',
    typeTextAndHearItSpoken: 'Typ tekst en hoor het hardop uitgesproken',
    textToSpeak: 'Tekst om uit te spreken',
    stop: 'Stop',
    pause: 'Pauze',
    voice: 'Stem',
    loadingVoices: 'Stemmen laden...',
    selectAVoice: 'Selecteer een stem',
    recent: 'Recent',
    speakThisText: 'Spreek deze tekst uit',
    copyToInput: 'Kopieer naar invoer',
    showAllHistory: 'Toon alle geschiedenis',
    voiceSettings: 'Steminstellingen',
    speechRate: 'Spreeksnelheid',
    pitch: 'Toonhoogte',
    volume: 'Volume',
    saveToHistoryAutomatically: 'Automatisch opslaan in geschiedenis'
  },
  yesno: {
    setQuestion: 'Stel je vraag',
    saveQuestion: 'Vraag opslaan',
    recentQuestions: 'Recente vragen',
    editQuestion: 'Vraag bewerken',
    yes: 'Ja!',
    no: 'Nee!',
    yesnoSettings: 'Ja/Nee instellingen',
    typeYourQuestion: 'Typ je vraag',
    typeYourQuestionPlaceholder: 'Bijv. Wil je spelen?',
    typeYourQuestionOrSelect: 'Typ je vraag of selecteer uit recente',
    removeFromFavorites: 'Verwijder uit favorieten',
    addToFavorites: 'Toevoegen aan favorieten',
    deleteQuestion: 'Verwijder vraag',
    buttonSize: 'Knopgrootte',
    small: 'Klein',
    medium: 'Middel',
    large: 'Groot',
    autoSpeakAnswers: 'Automatisch antwoorden uitspreken',
    hapticFeedback: 'Haptische feedback',
    yesOrNo: 'Ja of Nee'
  },
  todo: {
    groups: 'Groepen',
    items: 'Items',
    createGroup: 'Groep maken',
    editGroup: 'Groep bewerken',
    deleteGroup: 'Groep verwijderen',
    createItem: 'Item maken',
    editItem: 'Item bewerken',
    deleteItem: 'Item verwijderen',
    deleteItemQuestion: 'Item verwijderen?',
    groupName: 'Groepsnaam',
    itemName: 'Itemnaam',
    completed: 'Voltooid',
    pending: 'In afwachting',
    markAsDone: 'Markeer als klaar',
    markAsPending: 'Markeer als in afwachting',
    noGroups: 'Nog geen groepen',
    noItems: 'Nog geen items',
    resetItems: 'Items resetten',
    allItemsReset: 'Alle items zijn gereset',
    createTodoList: 'Todo lijst maken',
    editTodoList: 'Todo lijst bewerken',
    addTodoItem: 'Todo item toevoegen',
    listName: 'Lijstnaam',
    itemTitle: 'Item titel',
    iconOptional: 'Icoon (optioneel)',
    colorOptional: 'Kleur (optioneel)',
    imageOptional: 'Afbeelding (optioneel)',
    whatNeedsDone: 'Wat moet er gedaan worden?',
    clickToAddImage: 'Klik om een afbeelding toe te voegen',
    uploadImagePrompt: 'Upload een afbeelding om het todo item visueler te maken',
    saveChanges: 'Wijzigingen opslaan',
    addItem: 'Item toevoegen',
    noTodoListsYet: 'Nog geen todo lijsten',
    askParentCreate: 'Vraag een ouder om je eerste todo lijst te maken!',
    createFirstTodoList: 'Maak je eerste todo lijst om te beginnen',
    noItemsYet: 'Nog geen items',
    askParentAddItems: 'Vraag een ouder om items aan deze lijst toe te voegen!',
    addFirstTodoItem: 'Voeg je eerste todo item toe om te beginnen',
    completedCount: '{completed} / {total} voltooid',
    deleteTodoList: 'Todo lijst verwijderen?',
    deleteTodoListConfirm: 'Weet je zeker dat je "{title}" en alle items wilt verwijderen?',
    deleteItemConfirm: 'Weet je zeker dat je "{title}" wilt verwijderen?',
    todoListDeleted: 'Todo lijst verwijderd',
    itemDeleted: 'Item verwijderd',
    enterListName: 'Voer lijstnaam in'
  },
  radio: {
    radioSettings: 'Radio Instellingen',
    playback: 'Afspelen',
    autoplayNext: 'Automatisch volgende nummer',
    autoplayDescription: 'Speel automatisch het volgende nummer af wanneer het huidige nummer eindigt',
    showTrackTitles: 'Toon nummertitels',
    showTrackTitlesDescription: 'Toon nummertitels in de speler interface',
    clear: 'Wissen',
    defaultVolume: 'Standaard volume: {volume}%',
    repeatMode: 'Herhaalmodus',
    noRepeat: 'Niet herhalen',
    repeatOne: 'Herhaal één',
    repeatAll: 'Herhaal alles',
    shuffleMode: 'Shuffle modus',
    shuffleDescription: 'Speel nummers in willekeurige volgorde af',
    sleepTimer: 'Slaaptimer',
    defaultDuration: 'Standaard duur: {minutes} minuten',
    resetSettings: 'Instellingen resetten',
    resetSettingsDescription: 'Zet alle instellingen terug naar de standaardwaarden. Deze actie kan niet ongedaan worden gemaakt.',
    resetToDefaults: 'Reset naar standaard',
    saveSettings: 'Instellingen opslaan',
    resetConfirm: 'Weet je zeker dat je alle instellingen wilt resetten naar de standaardwaarden? Dit kan niet ongedaan worden gemaakt.',
    failedToSaveSettings: 'Instellingen opslaan mislukt. Probeer het opnieuw.',
    addAudioTrack: 'Audio nummer toevoegen',
    videoUrl: 'Video URL',
    videoUrlPlaceholder: 'https://youtube.com/watch?v=... of https://vimeo.com/...',
    pasteUrlPrompt: 'Plak een YouTube, Vimeo, of directe video URL. Audio wordt geëxtraheerd voor afspelen.',
    title: 'Titel',
    titlePlaceholder: 'Mijn geweldige audio nummer',
    description: 'Beschrijving',
    descriptionPlaceholder: 'Optionele beschrijving...',
    customThumbnailUrl: 'Aangepaste thumbnail URL',
    thumbnailPlaceholder: 'https://example.com/thumbnail.jpg',
    leaveEmptyThumbnail: 'Laat leeg om automatisch gedetecteerde thumbnail te gebruiken',
    addTag: 'Voeg een tag toe en druk op Enter',
    removeTag: 'Tag verwijderen',
    untitled: 'Zonder titel',
    titleRequired: 'Titel is verplicht',
    videoUrlRequired: 'Video URL is verplicht',
    pleaseEnterValidUrl: 'Voer een geldige URL in',
    pleaseEnterValidThumbnailUrl: 'Voer een geldige thumbnail URL in',
    failedToAddAudioTrack: 'Audio nummer toevoegen mislukt. Probeer het opnieuw.',
    failedToSaveChanges: 'Wijzigingen opslaan mislukt. Probeer het opnieuw.',
    markAsFavorite: 'Markeer als favoriet',
    videoUrlReadonly: 'Video URL (Alleen-lezen)',
    openUrl: 'Openen',
    videoUrlCannotChange: 'Video URL kan niet worden gewijzigd. Maak een nieuw item om een andere URL te gebruiken.',
    neverPlayed: 'Nooit afgespeeld',
    onePlay: '1 keer afgespeeld',
    multiplePlays: '{count} keer afgespeeld',
    searchAudio: 'Zoek audio...',
    parentModeEnable: 'Ouder Modus inschakelen',
    addAudio: 'Audio toevoegen',
    loadingAudioCollection: 'Je audio collectie laden...',
    noAudioTracksYet: 'Nog geen audio nummers',
    startBuildingCollection: 'Begin met het opbouwen van je audio collectie door je eerste nummer toe te voegen',
    addYourFirstAudio: 'Voeg je eerste audio toe',
    noResultsFound: 'Geen resultaten gevonden',
    tryAdjustingSearch: 'Probeer je zoekopdracht of filters aan te passen',
    clearAllFilters: 'Alle filters wissen',
    all: 'Alles',
    favorites: 'Favorieten',
    recent: 'Recent',
    deleteTrackConfirm: 'Weet je zeker dat je "{title}" wilt verwijderen?',
    favorite: 'Favoriet',
    tags: 'Tags',
    add: 'Toevoegen',
    tryAgain: 'Probeer opnieuw',
    editAudioItem: 'Audio-item bewerken',
    editAudioTrack: 'Audiotrack bewerken',
    audioTrackTitle: 'Audiotrack titel',
    plays: 'afspelingen',
    noAudioSelected: 'Geen audio geselecteerd',
    sleepIn: 'Slaap over {minutes}m',
    searchingFor: 'Zoeken naar',
    resultsFound: '{count, plural, =0 {Geen resultaten gevonden} =1 {1 resultaat gevonden} other {{count} resultaten gevonden}}',
    searchingCollection: 'Je audiocollectie doorzoeken...',
    tryDifferentKeywords: 'Probeer te zoeken met andere trefwoorden of controleer je spelling.',
    play: 'afspelen',
    playAllResults: 'Alle resultaten afspelen',
    searchAudioPlaceholder: 'Zoek audio op titel, beschrijving of tags...'
  },
  parentMode: {
    title: 'Ouder Modus',
    unlock: 'Ouder Modus ontgrendelen',
    lock: 'Ouder Modus vergrendelen',
    enterPin: 'Voer PIN in',
    setPin: 'PIN instellen',
    confirmPin: 'Bevestig PIN',
    incorrectPin: 'Onjuiste PIN',
    pinMismatch: 'PINs komen niet overeen',
    pinSet: 'PIN is ingesteld',
    unlocked: 'Ouder Modus ontgrendeld',
    locked: 'Ouder Modus vergrendeld',
    permissionDenied: 'Toegang geweigerd',
    setupTitle: 'Ouder Modus instellen',
    setupSuccess: 'Ouder Modus is succesvol ingesteld',
    enableParentMode: 'Ouder modus inschakelen',
    setUpParentMode: 'Ouder modus instellen',
    enterParentPin: 'Voer ouder PIN in',
    createPinDescription: 'Maak een 4-cijferige PIN om ouderfuncties te beschermen',
    enterPinDescription: 'Voer je PIN in om toegang te krijgen tot ouderfuncties',
    parentModeEnabled: 'Ouder modus ingeschakeld',
    failedToEnable: 'Kan ouder modus niet inschakelen',
    disableParentMode: 'Ouder modus uitschakelen',
    disableConfirmMessage: 'Weet je zeker dat je de ouder modus wilt uitschakelen?',
    yesDisable: 'Ja, uitschakelen',
    parentModeDisabled: 'Ouder modus uitgeschakeld',
    failedToDisable: 'Kan ouder modus niet uitschakelen',
    cannotDisableNoPopup: 'Kan ouder modus niet uitschakelen zonder popup',
    insufficientPermissions: 'Onvoldoende rechten',
    parentModeUnlocked: 'Ouder modus ontgrendeld',
    enterYourPin: 'Voer je PIN in',
    confirmYourPin: 'Bevestig je PIN',
    pinMustBe4Digits: 'PIN moet 4 cijfers zijn',
    hideNumbers: 'Verberg nummers',
    showNumbers: 'Toon nummers',
    parentMode: 'Oudermodus',
  },
  profile: {
    title: 'Profiel',
    memberSince: 'Lid sinds',
    accountDetails: 'Accountgegevens',
    email: 'E-mail',
    phone: 'Telefoon',
    language: 'Taal',
    parentMode: 'Ouder Modus',
    accountActions: 'Accountacties',
    editProfile: 'Profiel bewerken',
    changePassword: 'Wachtwoord wijzigen',
    setupParentMode: 'Ouder Modus instellen',
    name: 'Naam',
    enterName: 'Voer je naam in',
    clickToChangeAvatar: 'Klik om avatar te wijzigen',
    invalidFileType: 'Selecteer een geldig afbeeldingsbestand',
    fileTooLarge: 'Bestandsgrootte moet minder dan 10MB zijn',
    imageProcessingFailed: 'Afbeelding verwerken mislukt',
    profileUpdated: 'Profiel succesvol bijgewerkt',
    updateFailed: 'Profiel bijwerken mislukt'
  },
  tiko: {
    welcome: 'Welkom bij Tiko',
    selectApp: 'Selecteer een app om te beginnen',
    moreApps: 'Meer Apps Beschikbaar',
    installFromStore: 'Installeer vanuit Store',
    appNotInstalled: 'App niet geïnstalleerd',
    openApp: 'App Openen'
  },
  signin: {
    title: 'Inloggen',
    signingInto: 'Inloggen bij {app}',
    withApple: 'Inloggen met Apple',
    withEmail: 'Inloggen met E-mail',
    authenticating: 'Authenticeren...',
    errors: {
      noReturnUrl: 'Geen retour-URL opgegeven',
      appleSignInFailed: 'Inloggen met Apple mislukt',
      emailSignInFailed: 'Inloggen met e-mail mislukt'
    }
  },
  sso: {
    signInWithTiko: 'Inloggen met Tiko'
  },
  validation: {
    onlyOneNumberAllowed: 'Er is slechts één nummer toegestaan'
  },
  languageNames: {
    // Base languages
    bulgarian: 'Bulgaars',
    czech: 'Tsjechisch',
    welsh: 'Welsh',
    danish: 'Deens',
    german: 'Duits',
    greek: 'Grieks',
    english: 'Engels',
    spanish: 'Spaans',
    estonian: 'Ests',
    finnish: 'Fins',
    french: 'Frans',
    irish: 'Iers',
    croatian: 'Kroatisch',
    hungarian: 'Hongaars',
    armenian: 'Armeens',
    icelandic: 'IJslands',
    italian: 'Italiaans',
    lithuanian: 'Litouws',
    latvian: 'Lets',
    maltese: 'Maltees',
    dutch: 'Nederlands',
    norwegian: 'Noors',
    polish: 'Pools',
    portuguese: 'Portugees',
    romanian: 'Roemeens',
    russian: 'Russisch',
    slovak: 'Slowaaks',
    slovenian: 'Sloveens',
    swedish: 'Zweeds',
    // Regional variants
    germanGermany: 'Duits (Duitsland)',
    germanAustria: 'Duits (Oostenrijk)',
    germanSwitzerland: 'Duits (Zwitserland)',
    englishUK: 'Engels (Verenigd Koninkrijk)',
    englishUS: 'Engels (Verenigde Staten)',
    englishAustralia: 'Engels (Australië)',
    englishCanada: 'Engels (Canada)',
    spanishSpain: 'Spaans (Spanje)',
    spanishMexico: 'Spaans (Mexico)',
    spanishArgentina: 'Spaans (Argentinië)',
    frenchFrance: 'Frans (Frankrijk)',
    frenchCanada: 'Frans (Canada)',
    frenchBelgium: 'Frans (België)',
    dutchNetherlands: 'Nederlands (Nederland)',
    dutchBelgium: 'Nederlands (België)',
    portuguesePortugal: 'Portugees (Portugal)',
    portugueseBrazil: 'Portugees (Brazilië)'
  },
  uiDocs: {
    documentationSettings: 'Documentatie instellingen',
    buttons: 'Knoppen',
    buttonsDocumentation: 'Knoppen documentatie',
    cards: 'Kaarten',
    cardsDocumentation: 'Kaarten documentatie',
    colors: 'Kleuren',
    colorsDocumentation: 'Kleuren documentatie',
    icons: 'Iconen',
    iconsDocumentation: 'Iconen documentatie',
    inputs: 'Invoervelden',
    inputsDocumentation: 'Invoervelden documentatie',
    welcomeToUIDocumentation: 'Welkom bij de UI documentatie',
    exploreComponents: 'Verken onze componenten',
    comingSoon: 'Binnenkort beschikbaar',
    tikoUIDocumentation: 'Tiko UI Documentatie',
    completeDocumentationAndTesting: 'Complete documentatie en testsuite voor alle Tiko UI componenten',
    interactiveButtonComponents: 'Interactieve knopcomponenten met verschillende stijlen en staten',
    completeIconLibrary: 'Complete iconenbibliotheek met meer dan 1000+ iconen',
    inputComponents: 'Invoercomponenten',
    formInputsSelectsTextareas: 'Formulierinvoer, selecties, tekstgebieden en validatie',
    contentContainersAndLayouts: 'Inhoudcontainers en kaartindelingen',
    colorSystem: 'Kleurensysteem',
    colorPaletteThemes: 'Kleurenpaletten, thema\'s en semantische kleuren',
    quickStart: 'Snel starten',
    documentationAppShowcase: 'Deze documentatie-app toont alle beschikbare UI-componenten in het Tiko-ontwerpsysteem. Elke sectie demonstreert het gebruik van componenten, eigenschappen, varianten en best practices.',
    codeExamples: 'Codevoorbeelden',
    seeWorkingExamples: 'Bekijk werkende voorbeelden met syntaxismarkering',
    livePreviews: 'Live voorbeelden',
    interactiveComponentPreviews: 'Interactieve componentvoorbeelden',
    documentation: 'Documentatie',
    completePropAndUsage: 'Complete eigenschappen en gebruiksdocumentatie',
    items: 'items'
  }
}
