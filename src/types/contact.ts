export interface Contact {
  resourceName?: string;
  names?: Array<{
    displayName: string;
  }>;
  birthdays?: Array<{
    date: string;
  }>;
  phoneNumbers?: Array<{
    value: string;
  }>;
  emailAddresses?: Array<{
    value: string;
  }>;
}