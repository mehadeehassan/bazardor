const MESSAGES = {
  INVALID_EMAIL_OR_PASSWORD: "ইমেইল বা পাসওয়ার্ড ভুল হয়েছে।",
  INVALID_EMAIL: "সঠিক ইমেইল ঠিকানা দিন।",
  INVALID_PASSWORD: "পাসওয়ার্ড ভুল হয়েছে।",
  PASSWORD_TOO_SHORT: "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।",
  USER_ALREADY_EXISTS: "এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট খোলা হয়েছে।",
  USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
    "এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট খোলা হয়েছে।",
};

const FALLBACK_MESSAGE = "কিছু একটা সমস্যা হয়েছে, আবার চেষ্টা করুন।";

/** Turns a BetterAuth error into a message the user can read */
export function getAuthErrorMessage(error) {
  return MESSAGES[error?.code] ?? FALLBACK_MESSAGE;
}
