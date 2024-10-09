import { HomePageTypes } from "@/types/homepage";

export namespace HomepageMock {
  export const Category: HomePageTypes.Category[] = [
    {
      duration_hours: 83618.1969444388,
      category_name: "Communication",
      installations: 306935645378,
    },
    {
      duration_hours: 27168.9072222244,
      category_name: "Education",
      installations: 1066961250,
    },
    {
      duration_hours: 18217.6919444442,
      category_name: "Educational",
      installations: 126912210,
    },
    {
      duration_hours: 16686.0724999991,
      category_name: "Business",
      installations: 34884847287,
    },
    {
      duration_hours: 14045.7222222207,
      category_name: "Tools",
      installations: 87112488683,
    },
    {
      duration_hours: 12782.2719444442,
      category_name: "Arcade",
      installations: 32347382338,
    },
    {
      duration_hours: 8991.7702777773,
      category_name: "Productivity",
      installations: 28858519047,
    },
    {
      duration_hours: 5369.3683333333,
      category_name: "Puzzle",
      installations: 1208495993,
    },
    {
      duration_hours: 3105.5288888889,
      category_name: "Casual",
      installations: 9718239338,
    },
    {
      duration_hours: 2118.5316666667,
      category_name: "Entertainment",
      installations: 818201903,
    },
  ];

  export const Contribution: HomePageTypes.Contribution[] = [
    {
      contribution: 48,
      developer: "6677g.com",
    },
    {
      contribution: 45,
      developer: "TabTale",
    },
    {
      contribution: 41,
      developer: "VascoGames",
    },
    {
      contribution: 39,
      developer: "Google Inc.",
    },
    {
      contribution: 36,
      developer: "i6 Games",
    },
    {
      contribution: 35,
      developer: "Tapinator, Inc. (Ticker: TAPM)",
    },
    {
      contribution: 33,
      developer: "eBook Apps",
    },
    {
      contribution: 32,
      developer: "Gameloft",
    },
    {
      contribution: 30,
      developer: "Tapps - Top Apps and Games",
    },
    {
      contribution: 30,
      developer: "Glu",
    },
  ];

  export const StateInfo: HomePageTypes.stateInfoResponse[] = [
    {
      duration_hours: 144956.9233332897,
      devices: 279631,
      state: "NSW",
    },
    {
      duration_hours: 22267.2186111123,
      devices: 41947,
      state: "QLD",
    },
    {
      duration_hours: 14808.7933333331,
      devices: 14389,
      state: "WA",
    },
    {
      duration_hours: 8649.4852777777,
      devices: 12949,
      state: "VIC",
    },
    {
      duration_hours: 7718.4772222222,
      devices: 8683,
      state: "TAS",
    },
    {
      duration_hours: 5901.7505555555,
      devices: 9681,
      state: "SA",
    },
    {
      duration_hours: 243.0625,
      devices: 368,
      state: "NT",
    },
    {
      duration_hours: 0.1291666667,
      devices: 7,
      state: "ACT",
    },
  ];

  export const Installation: HomePageTypes.Installation[] = [
    {
      num_downloads: 31375169,
      activity_id: "com.facebook.katana",
      app_name: "Facebook",
      rating: 4.0,
    },
    {
      num_downloads: 29237332,
      activity_id: "com.whatsapp",
      app_name: "WhatsApp Messenger",
      rating: 4.4,
    },
    {
      num_downloads: 28146446,
      activity_id: "com.cleanmaster.mguard",
      app_name: "Clean Master (Boost & AppLock)",
      rating: 4.7,
    },
    {
      num_downloads: 24656288,
      activity_id: "com.instagram.android",
      app_name: "Instagram",
      rating: 4.5,
    },
    {
      num_downloads: 18959546,
      activity_id: "com.facebook.orca",
      app_name: "Messenger",
      rating: 3.9,
    },
    {
      num_downloads: 16843684,
      activity_id: "com.supercell.clashofclans",
      app_name: "Clash of Clans",
      rating: 4.6,
    },
    {
      num_downloads: 16295563,
      activity_id: "com.kiloo.subwaysurf",
      app_name: "Subway Surfers",
      rating: 4.4,
    },
    {
      num_downloads: 12780095,
      activity_id: "com.king.candycrushsaga",
      app_name: "Candy Crush Saga",
      rating: 4.3,
    },
    {
      num_downloads: 12520913,
      activity_id: "com.cleanmaster.security",
      app_name: "CM Security Antivirus AppLock",
      rating: 4.7,
    },
    {
      num_downloads: 8044125,
      activity_id: "com.outfit7.mytalkingtomfree",
      app_name: "My Talking Tom",
      rating: 4.4,
    },
  ];
}
