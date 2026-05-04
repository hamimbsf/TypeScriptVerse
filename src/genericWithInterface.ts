interface Developer<T> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
}

interface PoorWatch {
  heartRate: boolean;
  countDown: boolean;
}

interface RichWatch {
  heartRate: boolean;
  callSupport: boolean;
  calculators: boolean;
  aiFeatures: boolean;
}

const poorDeveloper: Developer<PoorWatch> = {
  name: "Hamim",
  salary: 1,
  device: {
    brand: "apple",
    model: "M2",
    releasedYear: "2023",
  },
  smartWatch: {
    heartRate: true,
    countDown: true,
  },
};

const richDeveloper: Developer<RichWatch> = {
  name: "Jhankar Vai",
  salary: 1,
  device: {
    brand: "apple",
    model: "M2",
    releasedYear: "2023",
  },
  smartWatch: {
    heartRate: true,
    calculators: true,
    callSupport: true,
    aiFeatures: true,
  },
};
