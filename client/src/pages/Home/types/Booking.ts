export type BookingFormStateType = {
  name: string;
  email: string;
  phone: string;
  datetime: string;
  guests: string;
  message: string;
};

export type BookingFormKeysType = keyof BookingFormStateType;
