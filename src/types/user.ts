export type UserTabel = {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    role: string; // 'user' | 'admin' or any other roles you have
    deviceToken: string | null;
    deviceType: string | null;
    socialType: string | null;
    social_Id: string | null;
    isProfileComplete: boolean;
    otp: string | null;
    otpExpiry: string | null;
    image: string | null;
    createdAt: string; // ISO string format or Date object if needed
    updatedAt: string; // ISO string format or Date object if needed
  };
  