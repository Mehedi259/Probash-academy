export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted?: boolean;
  videoUrl?: string;
  summary?: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  numId: number;
  title: string;
  englishTitle: string;
  subtitle: string;
  category: 'language' | 'skills' | 'guide' | 'visa';
  image: string;
  lessonsCount: number;
  durationHours: number;
  rating: number;
  reviewsCount: string;
  priceBDT: number;
  priceOMR: number;
  badge: string;
  badgeColor: string;
  instructorId: string;
  instructorName: string;
  instructorTitle: string;
  instructorAvatar: string;
  description: string;
  highlights: string[];
  modules: Module[];
}

export const coursesData: Course[] = [
  {
    id: 'arabic-language',
    numId: 1,
    title: 'আরবি ভাষা শিক্ষা',
    englishTitle: 'Arabic Language Mastery',
    subtitle: 'ওমান ও গালফ দেশের কথ্য ও কাজের আরবি - শূন্য থেকে প্র্যাক্টিক্যাল কথোপকথন',
    category: 'language',
    image: 'https://images.unsplash.com/photo-1546410531-f5139c894562?q=80&w=1200&auto=format&fit=crop',
    lessonsCount: 45,
    durationHours: 35,
    rating: 4.9,
    reviewsCount: '2.4k',
    priceBDT: 1500,
    priceOMR: 6,
    badge: 'সেরা পছন্দের কোর্স',
    badgeColor: '#E1212B',
    instructorId: 'abdullah',
    instructorName: 'ওস্তাদ আব্দুল্লাহ আল-মামুন',
    instructorTitle: 'আরবি ভাষা বিশেষজ্ঞ ও শিক্ষক',
    instructorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    description: 'ওমানে প্রবাসীদের সবচেয়ে বড় দুর্বলতা হলো আরবি ভাষা না জানা। এই কোর্সের মাধ্যমে আপনি একদম সহজ বাংলায় ওমানি কথ্য আরবি (Lahja Ammiyah) শিখতে পারবেন। কাজের জায়গা, শপ, সুপারমার্কেট, পুলিশ চেকপোস্ট, হাসপাতাল ও স্পন্সরের সাথে আত্মবিশ্বাসের সাথে কথা বলার জন্য এই কোর্সটি অপরিহার্য।',
    highlights: [
      'দৈনন্দিন ব্যবহৃত ১০০০+ গুরুত্বপূর্ণ আরবি শব্দ ও বাক্য',
      'ওমানি আঞ্চলিক ভাষা (Omani Dialect) ও টান বোঝার সহজ উপায়',
      'কাজের ক্ষেত্রে (দোকান, হোটেল, ড্রাইভিং, সাইট, অফিস) প্রয়োজনীয় সংলাপ',
      'সংখ্যা, টাকা-পয়সা হিসাব, সময় ও দিকনির্দেশনা বলা',
      'স্পন্সর, কাস্টমার ও পুলিশের সাথে কথোপকথন প্র্যাকটিস',
      'প্রতিটি ক্লাসের সাথে ডাউনলোডযোগ্য অডিও ও পিডিএফ গাইড'
    ],
    modules: [
      {
        id: 'mod-1',
        title: 'মডিউল ১: আরবি বর্ণমালা ও প্রাথমিক শুভেচ্ছা বিনিময়',
        lessons: [
          { id: 'ar-1', title: 'লেসন ১: ওমানে প্রাথমিক সালাম ও পরিচিতি (Greetings in Oman)', duration: '18:40', summary: 'কেমন আছেন, আপনার নাম কি, কোথা থেকে এসেছেন ইত্যাদি জিজ্ঞাসা করা।' },
          { id: 'ar-2', title: 'লেসন ২: প্রয়োজনীয় সর্বনাম ও সাধারণ শব্দসমূহ (Pronouns & Basic Words)', duration: '22:15', summary: 'আমি, আপনি, সে, আমরা, এইটা, ওইটা ইত্যাদি ব্যবহারের নিয়ম।' },
          { id: 'ar-3', title: 'লেসন ৩: সংখ্যা গণনা ও ওমানি রিয়াল/পয়সার হিসাব (Numbers & Money)', duration: '25:10', summary: '১ থেকে ১০০ পর্যন্ত গণনা এবং ওমানি বাইসা ও রিয়াল হিসাবের উপায়।' }
        ]
      },
      {
        id: 'mod-2',
        title: 'মডিউল ২: বাজার, কেনাকাটা ও রেস্টুরেন্টে আরবি',
        lessons: [
          { id: 'ar-4', title: 'লেসন ৪: দোকানে কেনাকাটা ও দামাদামি করার আরবি', duration: '20:30', summary: 'কত দাম? ডিসকাউন্ট দিন, ভালো জিনিস দিন ইত্যাদি বলা।' },
          { id: 'ar-5', title: 'লেসন ৫: হোটেল ও রেস্তোরাঁয় খাবারের অর্ডার দেওয়া', duration: '19:50', summary: 'মেনু দেখে অর্ডার করা ও বিল চাওয়ার সংলাপ।' }
        ]
      },
      {
        id: 'mod-3',
        title: 'মডিউল ৩: কর্মক্ষেত্র ও সাইটে কাজের কথোপকথন',
        lessons: [
          { id: 'ar-6', title: 'লেসন ৬: কফিল/স্পন্সর ও ম্যানেজারের সাথে কথপোকথন', duration: '24:10', summary: 'ছুটি চাওয়া, বেতন আলোচনা ও কাজের নির্দেশ বোঝা।' },
          { id: 'ar-7', title: 'লেসন ৭: কনস্ট্রাকশন, দোকান ও ড্রাইভিং সংক্রান্ত ভাষা', duration: '26:45', summary: 'প্রফেশনাল কাজের বিভিন্ন উপাদানের নাম ও বাক্য।' }
        ]
      },
      {
        id: 'mod-4',
        title: 'মডিউল ৪: ইমার্জেন্সি ও সরকারি দপ্তরের আরবি',
        lessons: [
          { id: 'ar-8', title: 'লেসন ৮: পুলিশ চেকপোস্ট ও ট্রাফিক পুলিশের সাথে কথা বলা', duration: '21:15', summary: 'লাইসেন্স, মুলকিয়া ও বাতাকা দেখানোর সময় ভদ্রভাবে উত্তর দেয়া।' },
          { id: 'ar-9', title: 'লেসন ৯: হাসপাতাল ও ফার্মেসিতে রোগ ও ওষুধের বর্ণনা', duration: '23:30', summary: 'ডাক্তারের কাছে অসুস্থতা বর্ণনা করার আরবি।' }
        ]
      }
    ]
  },
  {
    id: 'english-language',
    numId: 2,
    title: 'English Language (স্পোকেন ইংলিশ)',
    englishTitle: 'Spoken English for Expats',
    subtitle: 'প্রবাসীদের জন্য সহজ স্পোকেন ইংলিশ - ক্যারিয়ার ও আন্তর্জাতিক যোগাযোগের চাবিকাঠি',
    category: 'language',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop',
    lessonsCount: 36,
    durationHours: 28,
    rating: 4.8,
    reviewsCount: '1.8k',
    priceBDT: 1200,
    priceOMR: 5,
    badge: 'কর্মসংস্থান উপযোগী',
    badgeColor: '#0A1B3B',
    instructorId: 'tasnim',
    instructorName: 'তাসনিম রহমান',
    instructorTitle: 'ইএসএল ও স্পোকেন ইংলিশ ট্রেইনার',
    instructorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    description: 'মধ্যপ্রাচ্য ও আন্তর্জাতিক অঙ্গনে উচ্চবেতনের চাকরি পেতে ইংরেজির কোনো বিকল্প নেই। প্রবাসী ভাইবোনদের মুখের জড়তা দূর করে সাবলীলভাবে ইংরেজিতে কথা বলা, স্মার্ট ইন্টারভিউ দেওয়া এবং কাস্টমার হ্যান্ডলিং শেখাতে এই কোর্সটি সাজানো হয়েছে প্র্যাক্টিক্যাল পদ্ধতিতে।',
    highlights: [
      'মুখে জড়তা দূর করে কনফিডেন্ট স্পিকিং টেকনিক',
      'দৈনন্দিন কর্মক্ষেত্রে ৫০০+ বাস্তব ইংরেজি বাক্য',
      'জব ইন্টারভিউ ও সিভি প্রেজেন্টেশন স্কিল',
      'হোয়াটসঅ্যাপ ও ইমেইল লেখার সহজ নিয়ম',
      'মাল্টিন্যাশনাল কোম্পানি ও হাই-এন্ড শপে কাস্টমার ডিলিং',
      'প্র্যাকটিস অডিও ও কুইজ এক্সারসাইজ'
    ],
    modules: [
      {
        id: 'mod-en-1',
        title: 'মডিউল ১: ডেইলি কনভারসেশন ও মুখের জড়তা দূরীকরণ',
        lessons: [
          { id: 'en-1', title: 'লেসন ১: আত্মবিশ্বাস নিয়ে নিজের পরিচয় প্রদান (Self Introduction)', duration: '20:10', summary: 'স্মার্টভাবে নাম, অভিজ্ঞতা ও কাজের বিবরণ ইংরেজিতে বলা।' },
          { id: 'en-2', title: 'লেসন ২: সাধারণ প্রশ্ন করা ও দ্রুত উত্তর দেওয়া (Asking & Answering)', duration: '22:40', summary: 'Who, What, Where, When দিয়ে বাস্তব বাক্য গঠন।' },
          { id: 'en-3', title: 'লেসন ৩: সময়, তারিখ ও অ্যাপয়েন্টমেন্ট নির্ধারণ (Schedule & Timing)', duration: '18:50', summary: 'কর্মক্ষেত্রে মিটিং ও শিফট নিয়ে ইংরেজিতে কথা বলা।' }
        ]
      },
      {
        id: 'mod-en-2',
        title: 'মডিউল ২: কর্মক্ষেত্র ও কাস্টমার সার্ভিস ইংলিশ',
        lessons: [
          { id: 'en-4', title: 'লেসন ৪: কাস্টমার হ্যান্ডলিং ও ভদ্র ব্যবহারের ভাষা (Polite English)', duration: '24:20', summary: 'Excuse me, Please, Could you help me ইত্যাদি সৌজন্যমূলক ফ্রেইজ।' },
          { id: 'en-5', title: 'লেসন ৫: কমপ্লেইন সমাধান ও সমস্যা জানানো (Handling Problems)', duration: '25:15', summary: 'কর্মক্ষেত্রে সমস্যা হলে বসের সাথে পরিষ্কার ইংরেজি আলোচনা।' }
        ]
      },
      {
        id: 'mod-en-3',
        title: 'মডিউল ৩: জব ইন্টারভিউ ও ক্যারিয়ার প্রস্তুতি',
        lessons: [
          { id: 'en-6', title: 'লেসন ৬: ওমানে ভালো চাকরির ইন্টারভিউ প্রস্তুতি (Ace the Interview)', duration: '28:30', summary: 'কমন ইন্টারভিউ প্রশ্নের আদর্শ উত্তর ও উচ্চারণ।' },
          { id: 'en-7', title: 'লেসন ৭: প্রফেশনাল মেসেজ ও ইমেইল ড্রাফটিং (Messaging & Email)', duration: '21:00', summary: 'ছুটির আবেদন ও কাজের রিপোর্ট পাঠানোর ফরম্যাট।' }
        ]
      }
    ]
  },
  {
    id: 'content-creation-video-editing',
    numId: 3,
    title: 'Content Creation & Basic Video Editing',
    englishTitle: 'Content Creation & Video Editing Mastery',
    subtitle: 'স্মার্টফোন ও কম্পিউটারে ভিডিও এডিটিং, ফেসবুক রিলস ও ইউটিউব কনটেন্ট বানিয়ে ইনকাম',
    category: 'skills',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    lessonsCount: 40,
    durationHours: 32,
    rating: 4.9,
    reviewsCount: '3.1k',
    priceBDT: 2000,
    priceOMR: 8,
    badge: 'অনলাইন ইনকাম গ্যারান্টি',
    badgeColor: '#10B981',
    instructorId: 'sayeed',
    instructorName: 'ইঞ্জিঃ সাইদুর রহমান',
    instructorTitle: 'ভিডিও ক্রিয়েটর ও ডিজিটাল মেন্টর',
    instructorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    description: 'প্রবাসে কাজের পাশাপাশি মোবাইল ফোন দিয়ে সুন্দর ভিডিও বানিয়ে ফেসবুক, টিকটক ও ইউটিউব থেকে আয় করতে চান? এই কোর্সে ক্যাপকাট (CapCut), প্রিমিয়ার প্রো এবং কন্টেন্ট আইডিয়া জেনারেশন থেকে শুরু করে ভিডিও এডিটিং, কালার গ্রেডিং ও মনিটাইজেশন পলিসি এ টু জেড শেখানো হয়েছে।',
    highlights: [
      'মোবাইল দিয়ে সিনেমাটিক ভিডিও শ্যুট করার সিক্রেট টিপস',
      'ক্যাপকাট (CapCut) দিয়ে মোবাইলে ভাইরাল রিলস ও শর্টস তৈরি',
      'ভিডিও ট্রানজিশন, সাউন্ড এফেক্টস ও ট্রেন্ডিং মিউজিক ব্যবহার',
      'প্রফেশনাল ভয়েসওভার রেকর্ডিং ও নয়েজ রিমুভাল',
      'ক্যানভা দিয়ে আকর্ষণীয় ইউটিউব থাম্বনেইল তৈরি',
      'ফেসবুক ও ইউটিউব চ্যানেল গ্রোথ এবং মনিটাইজেশন গাইড'
    ],
    modules: [
      {
        id: 'mod-cc-1',
        title: 'মডিউল ১: স্মার্টফোন ভিডিওগ্রাফি ও কন্টেন্ট প্ল্যানিং',
        lessons: [
          { id: 'cc-1', title: 'লেসন ১: কন্টেন্ট আইডিয়া নির্বাচন ও স্ক্রিপ্ট তৈরি', duration: '22:10', summary: 'প্রবাস জীবন, তথ্যমূলক ও ট্রাভেল ভিডিওর আইডিয়া খুঁজে পাওয়ার উপায়।' },
          { id: 'cc-2', title: 'লেসন ২: মোবাইল ক্যামেরা সেটিংস, ফ্রেম রেট ও লাইটিং', duration: '25:40', summary: 'কম আলোতেও মোবাইল দিয়ে ঝকঝকে ভিডিও ধারণের নিয়ম।' },
          { id: 'cc-3', title: 'লেসন ৩: অডিও ও মাইক সেটআপ – নয়েজ মুক্ত সাউন্ড', duration: '19:30', summary: 'বাইরের বাতাসে ক্লিয়ার সাউন্ড রেকর্ড করার কৌশল।' }
        ]
      },
      {
        id: 'mod-cc-2',
        title: 'মডিউল ২: CapCut ও Premiere Pro ভিডিও এডিটিং',
        lessons: [
          { id: 'cc-4', title: 'লেসন ৪: ক্যাপকাট ইন্টারফেস ও বেসিক কাট-পেস্ট (Mobile Editing)', duration: '28:15', summary: 'ভিডিওর অপ্রয়োজনীয় অংশ কাটা, স্পিড র‍্যাম্পিং ও জুমিং।' },
          { id: 'cc-5', title: 'লেসন ৫: টেক্সট, অটো ক্যাপশন ও বাংলা ফন্ট যুক্ত করা', duration: '26:00', summary: 'ভিডিওর সাথে বাংলা সাবটাইটেল ও অ্যানিমেটেড টেক্সট ব্যবহার।' },
          { id: 'cc-6', title: 'লেসন ৬: সাউন্ড ইফেক্টস (SFX) ও কালার গ্রেডিং টেকনিক', duration: '24:50', summary: 'ভিডিওতে প্রফেশনাল মুড আনা ও সাউন্ড ব্যালেন্সিং।' }
        ]
      },
      {
        id: 'mod-cc-3',
        title: 'মডিউল ৩: সোশাল মিডিয়া গ্রোথ ও আয়',
        lessons: [
          { id: 'cc-7', title: 'লেসন ৭: ক্লিকযোগ্য থাম্বনেইল তৈরি (Canva Mastery)', duration: '23:45', summary: 'ইউটিউব ও ফেসবুক থাম্বনেইল ডিজাইন যা ভিউ বাড়াবে।' },
          { id: 'cc-8', title: 'লেসন ৮: ফেসবুক ও ইউটিউব চ্যানেল মনিটাইজেশন ও আর্নিং পলিসি', duration: '30:20', summary: 'কপিরাইট মুক্ত কাজ ও ব্যাংক একাউন্টে ডলার আনার পদ্ধতি।' }
        ]
      }
    ]
  },
  {
    id: 'oman-guide-atoz',
    numId: 4,
    title: 'ওমান গাইড A to Z',
    englishTitle: 'Oman Life & Work Guide A to Z',
    subtitle: 'ওমানে প্রবাসীদের জন্য পূর্ণাঙ্গ গাইডলাইন - জীবনযাত্রা, আইন, কর্মসংস্থান ও সাফল্য',
    category: 'guide',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    lessonsCount: 28,
    durationHours: 20,
    rating: 5.0,
    reviewsCount: '4.2k',
    priceBDT: 1500,
    priceOMR: 6,
    badge: 'মাস্টার গাইড',
    badgeColor: '#E1212B',
    instructorId: 'musa-emon',
    instructorName: 'মুসা ইমন (Musa Emon)',
    instructorTitle: 'প্রতিষ্ঠাতা, প্রবাসী কনসালট্যান্ট ও মেন্টর',
    instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    description: 'নতুন ওমান আসছেন বা ইতোমধ্যে ওমানে অবস্থান করছেন? ওমানের আইনকানুন, ট্রাফিক নিয়ম, শ্রম অধিকার, বাসা ভাড়া, ব্যাংক একাউন্ট, টাকা দেশে পাঠানো এবং বিপদে পড়লে দূতাবাসের সহায়তা পাওয়ার যাবতীয় খুঁটিনাটি বাস্তব অভিজ্ঞতা থেকে জানুন। একটি ভুলের কারণে জেল-জরিমানা বা ফেরত আসা থেকে বাঁচতে এই গাইড কোর্সটি অবশ্য শিক্ষণীয়।',
    highlights: [
      'ওমানের সামাজিক সংস্কৃতি ও রীতিনীতি (যা জানা বাধ্যতামূলক)',
      'ওমানের রয়্যাল ওমান পুলিশ (ROP) এবং ট্রাফিক আইন ও জরিমানা এড়ানোর নিয়ম',
      'বাসা ভাড়া, মেস লাইফ ও স্বাস্থ্যকর খাবার বাজেট ম্যানেজমেন্ট',
      'ওমানে ব্যাংক একাউন্ট খোলা ও বৈধ পথে রেমিট্যান্স পাঠানোর পদ্ধতি',
      'শ্রম আইন (Oman Labour Law) - ওভারটাইম, বেতন ও ছুটির অধিকার',
      'বাংলাদেশ দূতাবাস ও প্রবাসী কল্যাণ বোর্ডের আইনি সহযোগিতা পাওয়ার উপায়'
    ],
    modules: [
      {
        id: 'mod-og-1',
        title: 'মডিউল ১: ওমানে প্রথম পদার্পণ ও প্রস্তুতি',
        lessons: [
          { id: 'og-1', title: 'লেসন ১: ওমান এয়ারপোর্ট ইমিগ্রেশন ও সিম কার্ড সংগ্রহ', duration: '18:30', summary: 'মাস্কাট বা সালালাহ এয়ারপোর্টে যা করবেন এবং সাশ্রয়ী মোবাইল সিম প্যাকেজ।' },
          { id: 'og-2', title: 'লেসন ২: প্রথম ৩০ দিনের চেকলিস্ট ও সিভিল আইডি তৈরি', duration: '22:15', summary: 'ফিঙ্গারপ্রিন্ট, মেডিকেল রিপোর্ট ও বাতাকা তোলার ধারাবাহিক ধাপ।' }
        ]
      },
      {
        id: 'mod-og-2',
        title: 'মডিউল ২: জীবনযাত্রা ও ফাইন্যান্স ম্যানেজমেন্ট',
        lessons: [
          { id: 'og-3', title: 'লেসন ৩: বাসস্থান নির্বাচন, এগ্রিমেন্ট ও খরচ কমানোর কৌশল', duration: '21:40', summary: 'মাস্কাট ও অন্যান্য অঞ্চলে নিরাপদ ও কম খরচে বাসস্থান পাওয়া।' },
          { id: 'og-4', title: 'লেসন ৪: ব্যাংক একাউন্ট খোলা, কার্ড ব্যবহার ও রেমিট্যান্স পাঠানো', duration: '24:00', summary: 'ব্যাংক মাস্কাট, ব্যাংক দোফার ও এক্সচেঞ্জ হাউজ ব্যবহারের উপায়।' }
        ]
      },
      {
        id: 'mod-og-3',
        title: 'মডিউল ৩: ওমান শ্রম আইন ও আইনি সুরক্ষা',
        lessons: [
          { id: 'og-5', title: 'লেসন ৫: নতুন শ্রম আইন ২০২৬: অধিকার ও বাধ্যবাধকতা', duration: '27:50', summary: 'কাজের সময়, সাপ্তাহিক ছুটি, গ্র্যাচুইটি ও বেতন না পেলে করণীয়।' },
          { id: 'og-6', title: 'লেসন ৬: ওমানি পুলিশের জরিমানা, তল্লাশি ও আইনি সহায়তা', duration: '25:10', summary: 'ROP হেল্পলাইন ও বাংলাদেশ দূতাবাসের সহযোগিতা গ্রহণ।' }
        ]
      }
    ]
  },
  {
    id: 'oman-visa-atoz',
    numId: 5,
    title: 'ওমানের ভিসা A to Z',
    englishTitle: 'Oman Visa Processing A to Z',
    subtitle: 'ভিসা প্রসেসিং, স্ট্যাটাস চেক, মেডিকেল, আকামা ও রিনিউয়াল - দালালমুক্ত পূর্ণাঙ্গ তথ্য',
    category: 'visa',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    lessonsCount: 32,
    durationHours: 24,
    rating: 4.9,
    reviewsCount: '3.8k',
    priceBDT: 1800,
    priceOMR: 7,
    badge: 'সর্বাধিক প্রশংসিত',
    badgeColor: '#E1212B',
    instructorId: 'musa-emon',
    instructorName: 'মুসা ইমন (Musa Emon)',
    instructorTitle: 'ভিসা ও ইমিগ্রেশন বিশেষজ্ঞ',
    instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    description: 'দালালের খপ্পরে পড়ে লাখ লাখ টাকা খোয়ানো বন্ধ করুন! ওমানের ওয়ার্ক ভিসা, ফ্যামিলি ভিসা, ফ্রি ভিসা (আজাদ ভিসা)-র সত্যতা, মেডিকেল টেস্ট, ফিঙ্গারপ্রিন্ট, আকামা নবায়ন এবং কোম্পানি ট্রান্সফারের সব রুলস বিস্তারিত জানুন। ঘরে বসেই নিজের ভিসার সঠিক স্ট্যাটাস চেক করতে পারবেন এই কোর্সের পর।',
    highlights: [
      'ওয়ার্ক পারমিট ও এমপ্লয়মেন্ট ভিসা যাচাই করার সরকারি ওয়েবসাইট গাইড',
      'GAMCA মেডিকেল টেস্ট ও ওমানে আগমনের পর ফিটনেস টেস্ট রুলস',
      'সিভিল আইডি (বাতাকা) ইস্যু ও প্রতি ২ বছর পর রিনিউয়াল প্রসেস',
      'কোম্পানি রিলিজ ও কফিল ট্রান্সফার (NOC) নিয়মাবলী',
      'ওমানের ভিজিট ও ফ্যামিলি জয়েনিং ভিসা আবেদন পদ্ধতি',
      'ভিসা বাতিল ও এক্সিট পারমিটের জন্য যা যা জানতে হবে'
    ],
    modules: [
      {
        id: 'mod-ov-1',
        title: 'মডিউল ১: ওমান ভিসা যাচাই ও আবেদনের প্রাথমিক ধাপ',
        lessons: [
          { id: 'ov-1', title: 'লেসন ১: ওমানের ভিসা প্রকারভেদ ও আসল-নকল চেনার উপায়', duration: '24:15', summary: 'ROP পোর্টালে ভিসা নম্বর দিয়ে অফিশিয়াল ভেরিফিকেশন করার লাইভ ডেমো।' },
          { id: 'ov-2', title: 'লেসন ২: গামকা (GAMCA) মেডিকেল টেস্ট ও সতর্কতা', duration: '21:30', summary: 'মেডিকেল আনফিট হওয়া এড়াতে প্রয়োজনীয় পরীক্ষা ও সতর্কতা।' },
          { id: 'ov-3', title: 'লেসন ৩: ওমান দূতাবাস ও ম্যানপাওয়ার (BMET) ক্লিয়ারেন্স', duration: '23:50', summary: 'স্মার্ট কার্ড ও সরকারি অনুমোদনের ধাপসমূহ।' }
        ]
      },
      {
        id: 'mod-ov-2',
        title: 'মডিউল ২: আকামা, সিভিল আইডি ও নবায়ন',
        lessons: [
          { id: 'ov-4', title: 'লেসন ৪: ওমানে পৌঁছার পর স্বাস্থ্য পরীক্ষা ও ফিঙ্গারপ্রিন্ট', duration: '26:10', summary: 'বায়োমেট্রিক ও সিভিল স্ট্যাটাস অফিসে বাতাকা আবেদন।' },
          { id: 'ov-5', title: 'লেসন ৫: আকামা ও সিভিল আইডি রিনিউ করার প্রসেস ও ফি', duration: '22:40', summary: 'সময়মতো নবায়ন না করলে জরিমানা ও তার সমাধান।' }
        ]
      },
      {
        id: 'mod-ov-3',
        title: 'মডিউল ৩: কোম্পানি পরিবর্তন, রিলিজ ও ফ্যামিলি ভিসা',
        lessons: [
          { id: 'ov-6', title: 'লেসন ৬: কফিল ট্রান্সফার ও রিলিজ (NOC) সংক্রান্ত নতুন নিয়ম', duration: '28:00', summary: 'কোম্পানি পরিবর্তনের আইনি শর্ত ও নোটিফিকেশন প্রক্রিয়া।' },
          { id: 'ov-7', title: 'লেসন ৭: পরিবার নিয়ে যাওয়ার জন্য ফ্যামিলি ও ভিজিট ভিসা', duration: '25:20', summary: 'বেতন স্কেল, ঘর ভাড়া শর্ত ও ফ্যামিলি ভিসা অনুমোদনের গাইড।' }
        ]
      }
    ]
  }
];
