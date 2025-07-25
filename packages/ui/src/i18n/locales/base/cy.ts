import type { TranslationSchema } from '../../types'

// Welsh (Cymraeg) translations
export const cy: TranslationSchema = {
  common: {
    save: 'Cadw',
    cancel: 'Canslo',
    delete: 'Dileu',
    edit: 'Golygu',
    close: 'Cau',
    loading: 'Yn llwytho...',
    error: 'Gwall',
    success: 'Llwyddiant',
    warning: 'Rhybudd',
    confirm: 'Cadarnhau',
    yes: 'Ie',
    no: 'Na',
    settings: 'Gosodiadau',
    back: 'Yn ôl',
    home: 'Cartref',
    done: 'Wedi\'i wneud',
    add: 'Ychwanegu',
    remove: 'Tynnu',
    reset: 'Ailosod',
    apply: 'Cymhwyso',
    search: 'Chwilio',
    filter: 'Hidlo',
    sort: 'Trefnu',
    refresh: 'Adnewyddu',
    upload: 'Uwchlwytho',
    download: 'Lawrlwytho',
    share: 'Rhannu',
    copy: 'Copïo',
    paste: 'Gludo',
    undo: 'Dadwneud',
    redo: 'Ailwneud',
    welcome: 'Croeso {name}!',
    menu: 'Dewislen',
    showMore: 'Dangos mwy',
    itemsSelected: '{count} eitem wedi\'u dewis',
    enabled: 'Wedi\'i alluogi',
    disabled: 'Wedi\'i analluogi',
    comingSoon: 'Yn dod yn fuan',
    required: 'Gofynnol',
    optional: 'Dewisol',
    dragDropHere: 'neu lusgo a gollwng yma',
    increaseValue: 'Cynyddu gwerth',
    decreaseValue: 'Lleihau gwerth',
    online: 'Ar-lein',
    offline: 'All-lein',
    expandGroup: 'Ehangu grŵp',
    collapseGroup: 'Crebachu grŵp',
    applicationLoading: 'Sgrin llwytho\'r rhaglen',
    day: 'Diwrnod',
    month: 'Mis',
    searchIcons: 'Chwilio eiconau...',
    backgroundImage: 'Delwedd Gefndir',
    preview: 'Rhagolwg',
    justNow: 'Newydd ddigwydd',
    minutesAgo: '{count}m yn ôl',
    hoursAgo: '{count}a yn ôl',
    daysAgo: '{count}d yn ôl',
    more: 'mwy',
    speak: 'Siarad',
    dismiss: 'Diystyru'
  },
  auth: {
    login: 'Mewngofnodi',
    logout: 'Allgofnodi',
    signUp: 'Cofrestru',
    signIn: 'Mewngofnodi',
    email: 'E-bost',
    password: 'Cyfrinair',
    confirmPassword: 'Cadarnhau Cyfrinair',
    forgotPassword: 'Wedi anghofio cyfrinair?',
    resetPassword: 'Ailosod Cyfrinair',
    changePassword: 'Newid Cyfrinair',
    currentPassword: 'Cyfrinair Presennol',
    newPassword: 'Cyfrinair Newydd',
    passwordRequired: 'Mae angen cyfrinair',
    emailRequired: 'Mae angen e-bost',
    invalidEmail: 'Cyfeiriad e-bost annilys',
    passwordTooShort: 'Rhaid i\'r cyfrinair fod o leiaf 6 nod',
    passwordMismatch: 'Nid yw\'r cyfrineiriau\'n cyfateb',
    loginFailed: 'Methodd y mewngofnodi',
    signUpFailed: 'Methodd y cofrestriad',
    userNotFound: 'Defnyddiwr heb ei ganfod',
    wrongPassword: 'Cyfrinair anghywir',
    emailInUse: 'E-bost eisoes yn cael ei ddefnyddio',
    weakPassword: 'Mae\'r cyfrinair yn rhy wan',
    networkError: 'Gwall rhwydwaith. Gwiriwch eich cysylltiad.',
    verifyEmail: 'Gwiriwch eich e-bost',
    emailSent: 'E-bost wedi\'i anfon',
    checkEmail: 'Gwiriwch eich e-bost am ddolen ddilysu',
    loginToAccount: 'Mewngofnodi i\'ch cyfrif',
    emailAddress: 'Cyfeiriad E-bost',
    enterEmail: 'Rhowch eich e-bost',
    sendCode: 'Anfon Cod',
    or: 'neu',
    loginWithApple: 'Mewngofnodi gydag Apple',
    dontHaveAccount: 'Dim cyfrif gennych?',
    register: 'Cofrestru',
    option1MagicLink: 'Opsiwn 1: Cliciwch y dolen hud yn eich e-bost',
    option2EnterCode: 'Opsiwn 2: Rhowch y cod {codeLength}-digid',
    verificationCode: 'Cod Dilysu',
    enterDigitCode: 'Rhowch god {codeLength}-digid',
    verifyCode: 'Dilysu Cod',
    didntReceiveCode: 'Heb dderbyn y cod?',
    resendCode: 'Ailanfon',
    useDifferentEmail: 'Defnyddio e-bost gwahanol',
    createAccount: 'Creu eich cyfrif',
    fullNameOptional: 'Enw Llawn (Dewisol)',
    enterFullName: 'Rhowch eich enw llawn',
    alreadyHaveAccount: 'Eisoes â chyfrif?',
    tryAgain: 'Ceisiwch Eto',
    pleaseEnterValidEmail: 'Rhowch gyfeiriad e-bost dilys',
    pleaseEnterValidCode: 'Rhowch god {codeLength}-digid dilys',
    preparingApp: 'Paratoi eich app...',
    welcomeToTiko: 'Croeso i Tiko',
    signInToAccess: 'Mewngofnodwch i gael mynediad i\'ch apiau cyfathrebu',
    appleSignInFailed: 'Methodd mewngofnodi Apple',
    failedToSendCode: 'Methodd anfon cod dilysu',
    invalidVerificationCode: 'Cod dilysu annilys',
    failedToResendCode: 'Methodd ailanfon y cod'
  },
  settings: {
    title: 'Gosodiadau',
    userSettings: 'Gosodiadau Defnyddiwr',
    appearance: 'Ymddangosiad',
    theme: 'Thema',
    lightTheme: 'Golau',
    darkTheme: 'Tywyll',
    autoTheme: 'Awtomatig',
    language: 'Iaith',
    region: 'Rhanbarth',
    voiceAndSound: 'Llais a Sain',
    voiceEnabled: 'Llais wedi\'i Alluogi',
    voice: 'Llais',
    on: 'Ymlaen',
    off: 'I ffwrdd',
    saveChanges: 'Cadw Newidiadau',
    settingsSaved: 'Gosodiadau wedi\'u cadw',
    failedToSave: 'Methodd cadw\'r gosodiadau',
    passwordChangeNotImplemented: 'Newid cyfrinair heb ei weithredu eto'
  },
  timer: {
    start: 'Dechrau',
    pause: 'Oedi',
    stop: 'Stopio',
    reset: 'Ailosod',
    setTime: 'Gosod Amser',
    minutes: 'Munudau',
    seconds: 'Eiliadau',
    countDown: 'Cyfrif i Lawr',
    countUp: 'Cyfrif i Fyny',
    quickTimes: 'Amseroedd Cyflym',
    timerDuration: 'Hyd Amserydd',
    soundNotification: 'Hysbysiad sain',
    vibrationNotification: 'Hysbysiad dirgryniad',
    timesUp: 'Mae\'r amser ar ben!',
    dismiss: 'Diystyru'
  },
  cards: {
    createCard: 'Creu Cerdyn',
    addCard: 'Ychwanegu Cerdyn',
    editCard: 'Golygu Cerdyn',
    deleteCard: 'Dileu Cerdyn',
    cardLabel: 'Label Cerdyn',
    audioText: 'Testun Sain',
    uploadImage: 'Uwchlwytho Delwedd',
    createCardGroup: 'Creu Grŵp Cardiau',
    groupName: 'Enw\'r Grŵp',
    selectedCards: 'Cardiau Dethol',
    tags: 'Tagiau',
    useUrl: 'Defnyddio URL',
    imageUrl: 'URL Delwedd',
    basicInformation: 'Gwybodaeth Sylfaenol',
    image: 'Delwedd',
    styling: 'Arddull',
    backgroundColor: 'Lliw Cefndir',
    customColor: 'Lliw personol',
    preview: 'Rhagolwg',
    searchCards: 'Chwilio cardiau...',
    gridView: 'Golwg Grid',
    groupsView: 'Golwg Grwpiau',
    loadingCards: 'Yn llwytho cardiau...',
    tryAgain: 'Ceisiwch Eto',
    noCardsYet: 'Dim cardiau eto',
    createFirstCardPrompt: 'Crëwch eich cerdyn cyfathrebu cyntaf i ddechrau',
    createFirstCard: 'Creu Cerdyn Cyntaf',
    noCardsFound: 'Dim cardiau wedi\'u canfod',
    tryDifferentSearch: 'Ceisiwch derm chwilio gwahanol neu creu cerdyn newydd',
    clearSearch: 'Clirio Chwiliad',
    ungroupedCards: 'Cardiau Heb Grŵp',
    deleteThisCard: 'Dileu\'r cerdyn hwn?',
    cardCreatedSuccessfully: 'Cerdyn wedi\'i greu\'n llwyddiannus',
    groupCreatedSuccessfully: 'Grŵp wedi\'i greu\'n llwyddiannus',
    deleteSelectedCards: 'Dileu {count} cerdyn?',
    clear: 'Clirio',
    done: 'Wedi\'i wneud',
    selectCardsToOrganize: 'Dewiswch gardiau i\'w trefnu neu eu dileu',
    tapCardsToSpeak: 'Tapiwch gardiau i siarad',
    cardsSettings: 'Gosodiadau Cardiau',
    selected: 'wedi\'u dewis',
    closeModal: 'Cau\'r ffenestr',
    whatShouldBeSpoken: 'Beth ddylai gael ei siarad wrth dapio'
  },
  type: {
    typeToSpeak: 'Teipiwch yr hyn rydych am ei glywed...',
    speak: 'Siarad',
    clearText: 'Clirio testun',
    characters: 'nodau',
    typeGameSettings: 'Gosodiadau Gêm Teipio',
    typeAndSpeak: 'Teipio a Siarad',
    typeTextAndHearItSpoken: 'Teipiwch destun a\'i glywed yn cael ei siarad yn uchel',
    textToSpeak: 'Testun i\'w siarad',
    stop: 'Stopio',
    pause: 'Oedi',
    voice: 'Llais',
    loadingVoices: 'Yn llwytho lleisiau...',
    selectAVoice: 'Dewiswch lais',
    recent: 'Diweddar',
    speakThisText: 'Siarad y testun hwn',
    copyToInput: 'Copïo i\'r mewnbwn',
    showAllHistory: 'Dangos yr Holl Hanes',
    voiceSettings: 'Gosodiadau Llais',
    speechRate: 'Cyfradd Siarad',
    pitch: 'Traw',
    volume: 'Sain',
    saveToHistoryAutomatically: 'Cadw i\'r hanes yn awtomatig'
  },
  yesno: {
    setQuestion: 'Gosod Eich Cwestiwn',
    saveQuestion: 'Cadw Cwestiwn',
    recentQuestions: 'Cwestiynau Diweddar',
    editQuestion: 'Golygu Cwestiwn',
    yes: 'Ie!',
    no: 'Na!',
    yesOrNo: 'Ie neu Na',
    yesnoSettings: 'Gosodiadau Ie/Na',
    typeYourQuestion: 'Teipiwch eich cwestiwn yma...',
    typeYourQuestionPlaceholder: 'Teipiwch eich cwestiwn yma...',
    typeYourQuestionOrSelect: 'Teipiwch eich cwestiwn neu dewiswch o\'r cwestiynau diweddar',
    removeFromFavorites: 'Tynnu o ffefrynnau',
    addToFavorites: 'Ychwanegu at ffefrynnau',
    deleteQuestion: 'Dileu cwestiwn',
    buttonSize: 'Maint Botwm',
    small: 'Bach',
    medium: 'Canolig',
    large: 'Mawr',
    autoSpeakAnswers: 'Siarad atebion yn awtomatig',
    hapticFeedback: 'Adborth haptig'
  },
  todo: {
    groups: 'Grwpiau',
    items: 'Eitemau',
    createGroup: 'Creu Grŵp',
    editGroup: 'Golygu Grŵp',
    deleteGroup: 'Dileu Grŵp',
    createItem: 'Creu Eitem',
    editItem: 'Golygu Eitem',
    deleteItem: 'Dileu Eitem',
    deleteItemQuestion: 'Dileu Eitem?',
    groupName: 'Enw\'r Grŵp',
    itemName: 'Enw\'r Eitem',
    completed: 'Wedi\'i gwblhau',
    pending: 'Yn aros',
    markAsDone: 'Marcio fel Wedi\'i Wneud',
    markAsPending: 'Marcio fel Yn Aros',
    noGroups: 'Dim grwpiau eto',
    noItems: 'Dim eitemau eto',
    resetItems: 'Ailosod Eitemau',
    allItemsReset: 'Mae\'r holl eitemau wedi\'u hailosod',
    createTodoList: 'Creu Rhestr Tasgau',
    editTodoList: 'Golygu Rhestr Tasgau',
    addTodoItem: 'Ychwanegu Eitem Tasg',
    listName: 'Enw\'r Rhestr',
    itemTitle: 'Teitl yr Eitem',
    iconOptional: 'Eicon (dewisol)',
    colorOptional: 'Lliw (dewisol)',
    imageOptional: 'Delwedd (dewisol)',
    whatNeedsDone: 'Beth sydd angen ei wneud?',
    clickToAddImage: 'Cliciwch i ychwanegu delwedd',
    uploadImagePrompt: 'Uwchlwythwch ddelwedd i wneud yr eitem tasg yn fwy gweledol',
    saveChanges: 'Cadw Newidiadau',
    addItem: 'Ychwanegu Eitem',
    noTodoListsYet: 'Dim rhestrau tasgau eto',
    askParentCreate: 'Gofynnwch i riant greu eich rhestr tasgau gyntaf!',
    createFirstTodoList: 'Crëwch eich rhestr tasgau gyntaf i ddechrau',
    noItemsYet: 'Dim eitemau eto',
    askParentAddItems: 'Gofynnwch i riant ychwanegu eitemau i\'r rhestr hon!',
    addFirstTodoItem: 'Ychwanegwch eich eitem tasg gyntaf i ddechrau',
    completedCount: '{completed} / {total} wedi\'u cwblhau',
    deleteTodoList: 'Dileu Rhestr Tasgau?',
    deleteTodoListConfirm: 'Ydych chi\'n siŵr eich bod am ddileu "{title}" a\'i holl eitemau?',
    deleteItemConfirm: 'Ydych chi\'n siŵr eich bod am ddileu "{title}"?',
    todoListDeleted: 'Rhestr tasgau wedi\'i dileu',
    itemDeleted: 'Eitem wedi\'i dileu',
    enterListName: 'Rhowch enw\'r rhestr'
  },
  radio: {
    radioSettings: 'Gosodiadau Radio',
    playback: 'Chwarae',
    autoplayNext: 'Chwarae\'r Trac Nesaf yn Awtomatig',
    autoplayDescription: 'Chwarae\'r trac nesaf yn awtomatig pan fydd y trac presennol yn gorffen',
    showTrackTitles: 'Dangos Teitlau Traciau',
    showTrackTitlesDescription: 'Dangos teitlau traciau yn rhyngwyneb y chwaraewr',
    defaultVolume: 'Sain Rhagosodedig: {volume}%',
    repeatMode: 'Modd Ailadrodd',
    noRepeat: 'Dim Ailadrodd',
    repeatOne: 'Ailadrodd Un',
    repeatAll: 'Ailadrodd Popeth',
    shuffleMode: 'Modd Cymysgu',
    shuffleDescription: 'Chwarae traciau mewn trefn ar hap',
    sleepTimer: 'Amserydd Cwsg',
    defaultDuration: 'Hyd Rhagosodedig: {minutes} munud',
    resetSettings: 'Ailosod Gosodiadau',
    resetSettingsDescription: 'Ailosod yr holl osodiadau i\'w gwerthoedd rhagosodedig. Ni ellir dadwneud y weithred hon.',
    resetToDefaults: 'Ailosod i\'r Rhagosodiadau',
    saveSettings: 'Cadw Gosodiadau',
    resetConfirm: 'Ydych chi\'n siŵr eich bod am ailosod yr holl osodiadau i\'w rhagosodiadau? Ni ellir dadwneud hyn.',
    failedToSaveSettings: 'Methodd cadw gosodiadau. Ceisiwch eto.',
    addAudioTrack: 'Ychwanegu Trac Sain',
    editAudioTrack: 'Golygu Trac Sain',
    videoUrl: 'URL Fideo',
    videoUrlPlaceholder: 'https://youtube.com/watch?v=... neu https://vimeo.com/...',
    pasteUrlPrompt: 'Gludwch URL YouTube, Vimeo, neu fideo uniongyrchol. Bydd sain yn cael ei echdynnu ar gyfer chwarae.',
    title: 'Teitl',
    titlePlaceholder: 'Fy nhrac sain gwych',
    description: 'Disgrifiad',
    descriptionPlaceholder: 'Disgrifiad dewisol...',
    customThumbnailUrl: 'URL Mân-lun Personol',
    thumbnailPlaceholder: 'https://example.com/thumbnail.jpg',
    leaveEmptyThumbnail: 'Gadewch yn wag i ddefnyddio mân-lun a ganfuwyd yn awtomatig',
    addTag: 'Ychwanegwch dag a gwasgwch Enter',
    removeTag: 'Tynnu tag',
    untitled: 'Dideitl',
    titleRequired: 'Mae angen teitl',
    videoUrlRequired: 'Mae angen URL fideo',
    pleaseEnterValidUrl: 'Rhowch URL dilys',
    pleaseEnterValidThumbnailUrl: 'Rhowch URL mân-lun dilys',
    failedToAddAudioTrack: 'Methodd ychwanegu trac sain. Ceisiwch eto.',
    failedToSaveChanges: 'Methodd cadw newidiadau. Ceisiwch eto.',
    markAsFavorite: 'Marcio fel ffefryn',
    videoUrlReadonly: 'URL Fideo (Darllen yn unig)',
    openUrl: 'Agor',
    videoUrlCannotChange: 'Ni ellir newid URL fideo. Crëwch eitem newydd i ddefnyddio URL gwahanol.',
    neverPlayed: 'Erioed wedi\'i chwarae',
    onePlay: '1 chwarae',
    multiplePlays: '{count} chwarae',
    searchAudio: 'Chwilio sain...',
    parentModeEnable: 'Galluogi Modd Rhiant',
    addAudio: 'Ychwanegu Sain',
    loadingAudioCollection: 'Yn llwytho eich casgliad sain...',
    noAudioTracksYet: 'Dim traciau sain eto',
    startBuildingCollection: 'Dechreuwch adeiladu eich casgliad sain trwy ychwanegu eich trac cyntaf',
    addYourFirstAudio: 'Ychwanegwch Eich Sain Cyntaf',
    noResultsFound: 'Dim canlyniadau wedi\'u canfod',
    tryAdjustingSearch: 'Ceisiwch addasu eich chwiliad neu hidlyddion',
    clearAllFilters: 'Clirio Pob Hidlydd',
    all: 'Popeth',
    favorites: 'Ffefrynnau',
    recent: 'Diweddar',
    deleteTrackConfirm: 'Ydych chi\'n siŵr eich bod am ddileu "{title}"?',
    favorite: 'Ffefryn',
    tags: 'Tagiau',
    add: 'Ychwanegu',
    clear: 'Clirio',
    tryAgain: 'Ceisiwch Eto',
    editAudioItem: 'Golygu Eitem Sain',
    audioTrackTitle: 'Teitl trac sain',
    plays: 'chwarae',
    noAudioSelected: 'Dim sain wedi\'i dewis',
    sleepIn: 'Cysgu mewn {minutes}m',
    searchingFor: 'Chwilio am',
    resultsFound: '{count, plural, =0 {Dim canlyniadau wedi\'u canfod} =1 {1 canlyniad wedi\'i ganfod} other {{count} canlyniad wedi\'u canfod}}',
    searchingCollection: 'Chwilio eich casgliad sain...',
    tryDifferentKeywords: 'Ceisiwch chwilio gyda geiriau allweddol gwahanol neu gwiriwch eich sillafu.',
    play: 'chwarae',
    playAllResults: 'Chwarae Pob Canlyniad',
    searchAudioPlaceholder: 'Chwilio sain yn ôl teitl, disgrifiad, neu dagiau...'
  },
  parentMode: {
    title: 'Modd Rhiant',
    unlock: 'Datgloi Modd Rhiant',
    lock: 'Cloi Modd Rhiant',
    enterPin: 'Rhowch PIN',
    setPin: 'Gosod PIN',
    confirmPin: 'Cadarnhau PIN',
    incorrectPin: 'PIN anghywir',
    pinMismatch: 'Nid yw\'r PINs yn cyfateb',
    pinSet: 'Mae\'r PIN wedi\'i osod',
    unlocked: 'Modd Rhiant wedi\'i ddatgloi',
    locked: 'Modd Rhiant wedi\'i gloi',
    permissionDenied: 'Gwrthodwyd caniatâd',
    setupTitle: 'Gosod Modd Rhiant',
    setupSuccess: 'Mae Modd Rhiant wedi\'i osod yn llwyddiannus',
    enableParentMode: 'Galluogi Modd Rhiant',
    setUpParentMode: 'Gosod Modd Rhiant',
    enterParentPin: 'Rhowch PIN Rhiant',
    createPinDescription: 'Crëwch PIN 4-digid i ddiogelu rheolaethau rhiant',
    enterPinDescription: 'Rhowch eich PIN 4-digid i gael mynediad i reolaethau rhiant',
    parentModeEnabled: 'Modd rhiant wedi\'i alluogi\'n llwyddiannus',
    failedToEnable: 'Methodd galluogi modd rhiant',
    disableParentMode: 'Analluogi Modd Rhiant',
    disableConfirmMessage: 'Ydych chi\'n siŵr eich bod am analluogi Modd Rhiant? Bydd hyn yn dileu\'r holl reolaethau rhiant.',
    yesDisable: 'Ie, Analluogi',
    parentModeDisabled: 'Modd rhiant wedi\'i analluogi',
    failedToDisable: 'Methodd analluogi modd rhiant',
    cannotDisableNoPopup: 'Methu analluogi modd rhiant - dim gwasanaeth ffenestr naid ar gael',
    insufficientPermissions: 'Caniatadau annigonol ar gyfer y weithred hon',
    parentModeUnlocked: 'Modd rhiant wedi\'i ddatgloi',
    enterYourPin: 'Cadarnhewch eich PIN',
    confirmYourPin: 'Cadarnhewch eich PIN',
    pinMustBe4Digits: 'Rhaid i\'r PIN fod yn union 4 digid',
    hideNumbers: 'Cuddio Rhifau',
    showNumbers: 'Dangos Rhifau',
    parentMode: 'Modd Rhiant'
  },
  profile: {
    title: 'Proffil',
    memberSince: 'Aelod ers',
    accountDetails: 'Manylion y Cyfrif',
    email: 'E-bost',
    phone: 'Ffôn',
    language: 'Iaith',
    parentMode: 'Modd Rhiant',
    accountActions: 'Gweithredoedd Cyfrif',
    editProfile: 'Golygu Proffil',
    changePassword: 'Newid Cyfrinair',
    setupParentMode: 'Gosod Modd Rhiant',
    name: 'Enw',
    enterName: 'Rhowch eich enw',
    clickToChangeAvatar: 'Cliciwch i newid afatar',
    invalidFileType: 'Dewiswch ffeil delwedd ddilys',
    fileTooLarge: 'Rhaid i faint y ffeil fod yn llai na 10MB',
    imageProcessingFailed: 'Methodd prosesu\'r ddelwedd',
    profileUpdated: 'Proffil wedi\'i ddiweddaru\'n llwyddiannus',
    updateFailed: 'Methodd diweddaru\'r proffil'
  },
  tiko: {
    welcome: 'Croeso i Tiko',
    selectApp: 'Dewiswch app i ddechrau',
    moreApps: 'Mwy o Appiau ar Gael',
    installFromStore: 'Gosod o\'r Siop',
    appNotInstalled: 'App heb ei osod',
    openApp: 'Agor App'
  },
  signin: {
    title: 'Mewngofnodi',
    signingInto: 'Mewngofnodi i {app}',
    withApple: 'Mewngofnodi gydag Apple',
    withEmail: 'Mewngofnodi gydag E-bost',
    authenticating: 'Dilysu...',
    errors: {
      noReturnUrl: 'Dim URL dychwelyd wedi\'i nodi',
      appleSignInFailed: 'Methodd mewngofnodi Apple',
      emailSignInFailed: 'Methodd mewngofnodi e-bost'
    }
  },
  sso: {
    signInWithTiko: 'Mewngofnodi gyda Tiko'
  },
  validation: {
    onlyOneNumberAllowed: 'Dim ond un rhif a ganiateir'
  },
  languageNames: {
    // Base languages
    bulgarian: 'Bwlgareg',
    czech: 'Tsieceg',
    welsh: 'Cymraeg',
    danish: 'Daneg',
    german: 'Almaeneg',
    greek: 'Groeg',
    english: 'Saesneg',
    spanish: 'Sbaeneg',
    estonian: 'Estoneg',
    finnish: 'Ffinneg',
    french: 'Ffrangeg',
    irish: 'Gwyddeleg',
    croatian: 'Croateg',
    hungarian: 'Hwngareg',
    armenian: 'Armeneg',
    icelandic: 'Islandeg',
    italian: 'Eidaleg',
    lithuanian: 'Lithwaneg',
    latvian: 'Latfieg',
    maltese: 'Malteg',
    dutch: 'Iseldireg',
    norwegian: 'Norwyeg',
    polish: 'Pwyleg',
    portuguese: 'Portiwgaleg',
    romanian: 'Rwmaneg',
    russian: 'Rwseg',
    slovak: 'Slofaceg',
    slovenian: 'Slofeneg',
    swedish: 'Swedeg',
    // Regional variants
    germanGermany: 'Almaeneg (Yr Almaen)',
    germanAustria: 'Almaeneg (Awstria)',
    germanSwitzerland: 'Almaeneg (Y Swistir)',
    englishUK: 'Saesneg (Y Deyrnas Unedig)',
    englishUS: 'Saesneg (UDA)',
    englishAustralia: 'Saesneg (Awstralia)',
    englishCanada: 'Saesneg (Canada)',
    spanishSpain: 'Sbaeneg (Sbaen)',
    spanishMexico: 'Sbaeneg (Mecsico)',
    spanishArgentina: 'Sbaeneg (Yr Ariannin)',
    frenchFrance: 'Ffrangeg (Ffrainc)',
    frenchCanada: 'Ffrangeg (Canada)',
    frenchBelgium: 'Ffrangeg (Gwlad Belg)',
    dutchNetherlands: 'Iseldireg (Yr Iseldiroedd)',
    dutchBelgium: 'Iseldireg (Gwlad Belg)',
    portuguesePortugal: 'Portiwgaleg (Portiwgal)',
    portugueseBrazil: 'Portiwgaleg (Brasil)'
  },
    uiDocs: {
    documentationSettings: 'Gosodiadau Dogfennaeth',
    buttons: 'Botymau',
    buttonsDocumentation: 'Dogfennaeth Botymau',
    cards: 'Cardiau',
    cardsDocumentation: 'Dogfennaeth Cardiau',
    colors: 'Lliwiau',
    colorsDocumentation: 'Dogfennaeth Lliwiau',
    icons: 'Eiconau',
    iconsDocumentation: 'Dogfennaeth Eiconau',
    inputs: 'Mewnbynnau',
    inputsDocumentation: 'Dogfennaeth Mewnbynnau',
    welcomeToUIDocumentation: 'Croeso i Ddogfennaeth UI',
    exploreComponents: 'Archwiliwch ein cydrannau',
    comingSoon: 'Yn Dod yn Fuan',
    tikoUIDocumentation: 'Dogfennaeth UI Tiko',
    completeDocumentationAndTesting: 'Dogfennaeth gyflawn a chyfres brofi ar gyfer holl gydrannau UI Tiko',
    interactiveButtonComponents: 'Cydrannau botwm rhyngweithiol gydag arddulliau a chyflyrau amrywiol',
    completeIconLibrary: 'Llyfrgell eiconau cyflawn gyda dros 1000+ o eiconau',
    inputComponents: 'Cydrannau Mewnbwn',
    formInputsSelectsTextareas: 'Mewnbynnau ffurflen, dewisiadau, ardaloedd testun a dilysu',
    contentContainersAndLayouts: 'Cynwysyddion cynnwys a chynlluniau cardiau',
    colorSystem: 'System Lliwiau',
    colorPaletteThemes: 'Palet lliwiau, themâu a lliwiau semantig',
    quickStart: 'Dechrau Cyflym',
    documentationAppShowcase: 'Mae\'r app dogfennaeth hwn yn arddangos yr holl gydrannau UI sydd ar gael yn system ddylunio Tiko. Mae pob adran yn dangos defnydd cydrannau, priodweddau, amrywiadau, ac arferion gorau.',
    codeExamples: 'Enghreifftiau Cod',
    seeWorkingExamples: 'Gweld enghreifftiau gweithiol gydag amlygu cystrawen',
    livePreviews: 'Rhagolygon Byw',
    interactiveComponentPreviews: 'Rhagolygon cydrannau rhyngweithiol',
    documentation: 'Dogfennaeth',
    completePropAndUsage: 'Dogfennaeth briodwedd a defnydd cyflawn',
    items: 'eitemau'
  }
}
