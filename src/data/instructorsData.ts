export interface Instructor {
  id: string;
  name: string;
  englishName: string;
  title: string;
  role: string;
  avatar: string;
  experience: string;
  rating: number;
  studentsCount: string;
  coursesCount: number;
  coursesTeaching: {
    courseId: string;
    courseTitle: string;
    badge: string;
  }[];
  bio: string;
  specialties: string[];
  location: string;
}

export const instructorsData: Instructor[] = [
  {
    id: 'musa-emon',
    name: 'মুসা ইমন (Musa Emon)',
    englishName: 'Musa Emon / Musa Ahmed',
    title: 'প্রতিষ্ঠাতা, প্রবাসী কনসালট্যান্ট ও প্রধান মেন্টর',
    role: 'Lead Mentor & Founder',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    experience: '৮+ বছর ওমানে বসবাস ও প্রবাসী ক্যারিয়ার কনসালটেন্সি',
    rating: 4.95,
    studentsCount: '৫,৪০০+',
    coursesCount: 2,
    coursesTeaching: [
      {
        courseId: 'oman-guide-atoz',
        courseTitle: 'ওমান গাইড A to Z',
        badge: 'প্রধান শিক্ষক'
      },
      {
        courseId: 'oman-visa-atoz',
        courseTitle: 'ওমানের ভিসা A to Z',
        badge: 'ইমিগ্রেশন এক্সপার্ট'
      }
    ],
    bio: 'দীর্ঘ ৮ বছর ধরে ওমানে কর্মজীবন ও ব্যবসার বাস্তব অভিজ্ঞতা থেকে হাজারো প্রবাসীকে ভিসা জটিলতা, আইনি সুরক্ষা ও ওমানের সফল ক্যারিয়ার গঠনে নির্দেশনা দিয়ে আসছেন। Hello Probash প্ল্যাটফর্মের মাধ্যমে প্রবাসীদের ক্ষমতায়নে নিবেদিত।',
    specialties: [
      'ওমান ভিসা প্রসেসিং ও ভেরিফিকেশন',
      'শ্রম আইন (Oman Labour Law) ও দূতাবাস সাপোর্ট',
      'প্রবাসে জীবনযাত্রা ও আর্থিক ব্যবস্থাপনা',
      'কোম্পানি ট্রান্সফার ও রিলিজ গাইডলাইন'
    ],
    location: 'Muscat, Oman'
  },
  {
    id: 'abdullah',
    name: 'ওস্তাদ আব্দুল্লাহ আল-মামুন',
    englishName: 'Ustadh Abdullah Al-Mamun',
    title: 'আরবি ভাষা ট্রেইনার ও কালচারাল এডভাইজর',
    role: 'Arabic Language Specialist',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    experience: '৫+ বছর ওমানি আঞ্চলিক আরবি ও স্পোকেন ট্রেইনার',
    rating: 4.9,
    studentsCount: '৩,৮০০+',
    coursesCount: 1,
    coursesTeaching: [
      {
        courseId: 'arabic-language',
        courseTitle: 'আরবি ভাষা শিক্ষা (Arabic Language)',
        badge: 'ভাষা শিক্ষক'
      }
    ],
    bio: 'ওমানি লোকাল ডায়ালেক্ট (লহজা আম্মিয়া) সহজে শেখানোর জন্য সুপরিচিত। হাজারো প্রবাসী ভাইকে জিরো থেকে প্র্যাক্টিক্যাল আরবিতে কথা বলতে শিখিয়ে তাদের কর্মক্ষেত্রে আত্মবিশ্বাস তৈরি করেছেন।',
    specialties: [
      'ওমানি কথ্য আরবি (Omani Dialect)',
      'কাজের ক্ষেত্রে প্র্যাক্টিক্যাল কমিউনিকেশন',
      'বাজার, পুলিশ ও হাসপাতালের আরবি কথোপকথন',
      'সহজ উচ্চারণ ও গ্রামারলেস স্পিকিং মেথড'
    ],
    location: 'Sohar, Oman'
  },
  {
    id: 'tasnim',
    name: 'তাসনিম রহমান',
    englishName: 'Tasnim Rahman',
    title: 'স্পোকেন ইংলিশ ও প্রফেশনাল কমিউনিকেশন মেন্টর',
    role: 'Spoken English Trainer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    experience: '৪+ বছর আন্তর্জাতিক প্রতিষ্ঠান ও প্রবাসী ট্রেইনিং',
    rating: 4.85,
    studentsCount: '২,৬০০+',
    coursesCount: 1,
    coursesTeaching: [
      {
        courseId: 'english-language',
        courseTitle: 'English Language (স্পোকেন ইংলিশ)',
        badge: 'কমিউনিকেশন ট্রেইনার'
      }
    ],
    bio: 'আন্তর্জাতিক প্রতিষ্ঠানে কর্মরত বাংলাদেশিদের ইংরেজি জড়তা কাটিয়ে সাবলীল স্পিকিং শেখানোর দীর্ঘ অভিজ্ঞতা রয়েছে। সহজ কৌশলে ভোকাবুলারি মনে রাখার পদ্ধতি ও বাস্তব ডায়ালগ প্র্যাকটিস করান।',
    specialties: [
      'প্রবাসীদের জন্য স্পোকেন ইংলিশ',
      'কর্মক্ষেত্রের ইংরেজি কথোপকথন ও কাস্টমার ডিলিং',
      'ইন্টারভিউ প্রেপারেশন ও সিভি রাইটিং',
      'হোয়াটসঅ্যাপ ও ইমেইল কমিউনিকেশন'
    ],
    location: 'Dhaka / Online'
  },
  {
    id: 'sayeed',
    name: 'ইঞ্জিঃ সাইদুর রহমান',
    englishName: 'Engr. Sayeed Rahman',
    title: 'ডিজিটাল কনটেন্ট ক্রিয়েটর ও সিনিয়র ভিডিও এডিটর',
    role: 'Content Creation Mentor',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    experience: '৬+ বছর ভিডিও প্রডাকশন ও ইউটিউব চ্যানেল গ্রোথ',
    rating: 4.9,
    studentsCount: '৩,২০০+',
    coursesCount: 1,
    coursesTeaching: [
      {
        courseId: 'content-creation-video-editing',
        courseTitle: 'Content Creation & Basic Video Editing',
        badge: 'এডিটিং মেন্টর'
      }
    ],
    bio: 'মোবাইল ও কম্পিউটার দিয়ে আকর্ষণীয় ভিডিও তৈরি এবং সোশ্যাল মিডিয়া (ফেসবুক/ইউটিউব) থেকে মনিটাইজেশন করে আয় করার প্র্যাক্টিক্যাল কৌশল হাতে-কলমে শেখান। ১০০+ চ্যানেলের মনিটাইজেশন কনসালট্যান্ট।',
    specialties: [
      'স্মার্টফোনে ক্যাপকাট (CapCut) দিয়ে রিলস মেকিং',
      'অ্যাডোবি প্রিমিয়ার প্রো ও কালার গ্রেডিং',
      'ইউটিউব ও ফেসবুক মনিটাইজেশন পলিসি',
      'ক্যানভা দিয়ে ভাইরাল থাম্বনেইল ডিজাইন'
    ],
    location: 'Muscat / Dhaka'
  }
];
