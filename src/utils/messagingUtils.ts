const WHATSAPP_REGEX = /\+\d{1,3}\s?\d{10}/;
const SIGNAL_REGEX = /\+\d{1,3}\s?\d{10}/;

export const detectMessagingApps = (phoneNumber: string) => {
  return {
    whatsapp: WHATSAPP_REGEX.test(phoneNumber),
    signal: SIGNAL_REGEX.test(phoneNumber)
  };
};