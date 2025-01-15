export interface MessageTemplate {
  id: string;
  name: string;
  content: string;
  channels: ('email' | 'linkedin' | 'whatsapp' | 'signal')[];
}

export interface TemplateVariable {
  key: string;
  label: string;
  example: string;
}

export const TEMPLATE_VARIABLES: TemplateVariable[] = [
  { key: 'firstName', label: 'First Name', example: 'John' },
  { key: 'lastName', label: 'Last Name', example: 'Doe' },
  { key: 'birthday', label: 'Birthday', example: 'March 15' },
  { key: 'email', label: 'Email', example: 'john@example.com' }
];