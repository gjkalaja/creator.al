import type { VoiceProfile, AddonFeature, FAQItem, PricingPlan } from './types';
import React from 'react';

export const CheckIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-brand-accent", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 3 },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" })
);

export const voiceProfiles: VoiceProfile[] = [
  {
    name: 'Arben',
    description: 'Një zë i qartë dhe autoritar, perfekt për narracione dhe dokumentarë.',
    imageUrl: 'https://www.mediadesk.al/images/test/arben.png',
    audioUrl: 'https://www.mediadesk.al/images/test/arben.wav',
  },
  {
    name: 'Besa',
    description: 'Zëri i Besës është miqësor dhe tërheqës, ideal për reklama dhe video shpjeguese.',
    imageUrl: 'https://www.mediadesk.al/images/test/besa.png',
    audioUrl: 'https://www.mediadesk.al/images/test/besa.wav',
  },
  {
    name: 'Ilir',
    description: 'Toni profesional i Ilirit është i shkëlqyer për video trajnimi dhe prezantime korporative.',
    imageUrl: 'https://www.mediadesk.al/images/test/ilir.png',
    audioUrl: 'https://www.mediadesk.al/images/test/ilir.wav',
  },
  {
    name: 'Teuta',
    description: 'Një tregimtare e lindur; i mban dëgjuesit të mbërthyer pas çdo fjale.',
    imageUrl: 'https://www.mediadesk.al/images/test/teuta.png',
    audioUrl: 'https://www.mediadesk.al/images/test/teuta.wav',
  },
  {
    name: 'Genti',
    description: 'Entuziazmi i Gentit është ngjitës. I shkëlqyer për skripte motivuese.',
    imageUrl: 'https://www.mediadesk.al/images/test/genti.png',
    audioUrl: 'https://www.mediadesk.al/images/test/genti.wav',
  },
  {
    name: 'Drita',
    description: 'Një aktore zëri e ngrohtë dhe e duruar, por profesionale.',
    imageUrl: 'https://www.mediadesk.al/images/test/drita.png',
    audioUrl: 'https://www.mediadesk.al/images/test/drita.wav',
  },
];

export const addonFeatures: AddonFeature[] = [
  {
    icon: 'https://www.mediadesk.al/images/test/ikona1.png',
    title: 'Konvertim artikulli në video për rrjete sociale',
    description: 'Shndërroni artikujt e lajmeve në video me tekst dhe pamje të animuara.',
    price: '49 Euro/Muaj',
  },
  {
    icon: 'https://www.mediadesk.al/images/test/ikona2.png',
    title: 'Transkriptim dhe titrim automatik',
    description: 'Zbardhni me saktësi audion në gjuhën shqipe dhe gjeneroni automatikisht titra për videot tuaja.',
    price: '99 Euro/Muaj',
  },
  {
    icon: 'https://www.mediadesk.al/images/test/ikona3.png',
    title: 'Nga regjistrimi audio në artikull',
    description: 'Ktheni regjistrimet zanore, podcast-et ose fjalimet në artikuj të formatuar mirë dhe të gatshëm për botim.',
    price: '39 Euro/Muaj',
  },
  {
    icon: 'https://www.mediadesk.al/images/test/ikona4.png',
    title: 'Brandim i videove',
    description: 'Shtoni automatikisht logon, titullin dhe nëntitujt tuaj në video për një pamje profesionale.',
    price: '49 Euro/Muaj',
  },
  {
    icon: 'https://www.mediadesk.al/images/test/ikona5.png',
    title: 'Ndarja e videove të gjata për Youtube',
    description: 'Ndani videot e gjata në klipe më të shkurtra dhe dinamike, të optimizuara për YouTube dhe platforma të tjera.',
    price: '99 Euro/Muaj',
  },
  {
    icon: 'https://www.mediadesk.al/images/test/ikona6.png',
    title: 'Mjet i personalizuar për nevojat tuaja',
    description: 'Keni një nevojë specifike? Ne ndërtojmë mjete të personalizuara AI për të zgjidhur sfidat tuaja unike.',
    price: 'Na Kontaktoni',
  }
];

export const pricingPlans: PricingPlan[] = [
    {
        name: 'Plani Fillestar',
        price: '27',
        description: 'Ideal për individë dhe projekte të vogla që sapo kanë filluar.',
        features: [
            '8 orë gjenerim zëri / muaj',
            'Akses në të gjithë zërat standardë',
            'Licencë komerciale',
            'Suport standard',
        ],
        isPopular: false,
        ctaText: 'Fillo Tani',
        ctaHref: '#',
    },
    {
        name: 'Plani Pro',
        price: '55',
        description: 'Për krijuesit profesionistë që kërkojnë më shumë fuqi dhe fleksibilitet.',
        features: [
            '16 orë gjenerim zëri / muaj',
            'Kontroll i shpejtësisë së leximit',
            'Akses në zërat premium',
            'Suport me përparësi',
        ],
        isPopular: true,
        ctaText: 'Fillo Tani',
        ctaHref: '#',
    },
    {
        name: 'Plani Enterprise',
        price: 'Custom',
        description: 'Zgjidhje e personalizuar për agjencitë dhe bizneset e mëdha.',
        features: [
            'Vëllim i pakufizuar gjenerimi zëri',
            'Filtra emocional në gjenerimin e zërit',
            'API akses',
            'Menaxher i dedikuar llogarie',
        ],
        isPopular: false,
        ctaText: 'Na Kontaktoni',
        ctaHref: '#',
    },
];

export const partnerLogos: { src: string; alt: string }[] = [
    { src: 'https://www.mediadesk.al/images/test/a2.png', alt: 'A2 CNN Logo' },
    { src: 'https://www.mediadesk.al/images/test/anabel.png', alt: 'Anabel Logo' },
    { src: 'https://www.mediadesk.al/images/test/liberale.png', alt: 'Liberale Logo' },
    { src: 'https://www.mediadesk.al/images/test/vox.png', alt: 'Vox Logo' },
    { src: 'https://www.mediadesk.al/images/test/tema.png', alt: 'Tema Logo' },
    { src: 'https://www.mediadesk.al/images/test/pamfleti.png', alt: 'Pamfleti Logo' },
];

export const heroDemoTexts: string[] = [
    "Kreu i kompanisë Meta beson se ky ndryshim do të ndodhë natyrshëm, pasi syzet janë një aksesor i zakonshëm për njerëzit. Ai thekson se nuk do të kufizohen vetëm në shfaqjen e njoftimeve, por do të ofrojnë një mënyrë krejt të re për të përjetuar teknologjinë. Përfitimi i parë do të jetë fizik, thotë ai, nuk do të mbajmë më duart të zëna dhe nuk do të qëndrojmë me kokën ulur mbi ekran.",
    "Historia fillon kështu. Kur Prometeu vodhi zjarrin nga Olimpi për t’ua dhënë njerëzve, Zeusi u tremb. Rreziqet që i vinin njerëzimit nga zjarri ishin të mëdha, jo vetëm sepse Prometeu u dhuroi njerëzve falas diçka që ata as e kishin merituar apo kërkuar, por edhe sepse ai ua dha atë pa asnjë përgatitje.",
    "Është vënë në dukje se, duke krijuar dhe riprodhuar universin fantastik të Perandorisë osmane, Kadareja synonte të rrëfente natyrën çnjerëzuese të regjimit totalitar; nëpërmjet një përftese letrare të njohur si alegori, në tekste të artikuluara të paktën në dy nivele kuptimi."
];

export const arbenDemoAudio: string[] = [
    'https://www.mediadesk.al/images/test/arbenmain.wav',
    'https://www.mediadesk.al/images/test/arbenmain2.wav',
    'https://www.mediadesk.al/images/test/arbenmain3.wav'
];


export const faqItems: FAQItem[] = [
  {
    question: 'Sa kohë duhet për të sintetizuar tekstin në të folur me AI?',
    answer: 'Me teknologjinë e avancuar të shndërrimit të tekstit në të folur, mund të jetë pothuajse e menjëhershme, duke prodhuar skedarë audio me cilësi të lartë brenda sekondave pas futjes së tekstit. Ky efikasitet e bën ideale për aplikacione në kohë reale.',
  },
  {
    question: 'Cili është zëri AI me tingullin më realist?',
    answer: 'Zëri më realist varet nga preferenca personale dhe konteksti. Ne ofrojmë një gamë të gjerë zërash ultra-realistë, secili me karakteristika unike. Ju ftojmë t\'i provoni për të gjetur atë që i përshtatet më së miri projektit tuaj.',
  },
  {
    question: 'A mund të krijoj një zë AI timin?',
    answer: 'Jo, për momentin ju nuk mund të klononi një zë tuajin.  Gjithsesi, në platformën tonë do të gjeni më shumë se 20 zëra krejt të ndryshëm. Kontaktoni ekipin tonë të shitjeve për më shumë informacion mbi këtë veçori.',
  },
  {
    question: 'A janë zërat AI të ligjshëm? A mund t\'i përdor për qëllime komerciale?',
    answer: 'Absolutisht. Të gjitha planet tona me pagesë vijnë me një licencë të plotë komerciale, që do të thotë se ju mund t\'i përdorni zërat tanë për çdo qëllim, duke përfshirë marketingun, videot në YouTube, podcast-et dhe produktet e shituara.',
  },
  {
    question: 'A mundet një gjenerator zëri të prodhojë thekse ose gjuhë të ndryshme?',
    answer: 'Platforma jonë është e specializuar në ofrimin e zërave më cilësorë në gjuhën shqipe. Megjithatë, teknologjia jonë aktualisht është e aftë të riprodhojë vetëm gjuhën letrare.',
  },
   {
    question: 'A mund të kontrolloj shpejtësinë e leximit?',
    answer: 'Po, në planin tonë profesional, ju mund të kontrolloni shpejtësinë e leximit midis 3 modelesh, i avashtë, normal dhe lexim i shpejtë.',
  },
    {
    question: 'A mund të përcaktoj mënyren e leximit të tekstit?',
    answer: 'Po, në planin tonë premium, ju mund të percaktoni detaje emocionale apo karakteristika të veçanta të zërit. Për shembull, ju mund të kërkoni një zë të nevrikosur dhe të ngjirur.',
  }
];
