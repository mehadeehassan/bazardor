const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

/** Each validator returns an error message in Bangla, or null when the input is fine. */

export function validateSignIn({ email, password }) {
  if (!email || !password) return "ইমেইল ও পাসওয়ার্ড দুটোই দিন।";
  if (!EMAIL_PATTERN.test(email)) return "সঠিক ইমেইল ঠিকানা দিন।";
  return null;
}

export function validateSignUp({ name, email, password, confirmPassword }) {
  if (!name || !email || !password || !confirmPassword) {
    return "সবগুলো ঘর পূরণ করুন।";
  }
  if (!EMAIL_PATTERN.test(email)) return "সঠিক ইমেইল ঠিকানা দিন।";
  if (password.length < MIN_PASSWORD_LENGTH) {
    return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।";
  }
  if (password !== confirmPassword) return "দুটি পাসওয়ার্ড মিলছে না।";
  return null;
}

export function validateName(name) {
  if (!name) return "আপনার নাম লিখুন।";
  return null;
}
