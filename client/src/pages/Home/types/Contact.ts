export type ContactFormType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFormKeysType = keyof ContactFormType;
