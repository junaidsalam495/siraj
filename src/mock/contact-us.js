import { FileTextIcon, MailIcon, PhoneIcon, UserIcon } from "lucide-react";

export const formFields = [
  {
    id: "fullName",
    label: "Full Name",
    placeholder: "lorem ipsum",
    icon: UserIcon,
    type: "input",
    gridColumn: "col-span-1",
  },
  {
    id: "email",
    label: "Email Address",
    placeholder: "lorem ipsum@domain.com",
    icon: MailIcon,
    type: "input",
    gridColumn: "col-span-1",
  },
  {
    id: "phone",
    label: "PhoneIcon Number",
    placeholder: "+1(90) 0000 000 00",
    icon: PhoneIcon,
    type: "input",
    gridColumn: "col-span-1",
  },
  {
    id: "subject",
    label: "Subject",
    placeholder: "Subject",
    icon: FileTextIcon,
    type: "input",
    gridColumn: "col-span-1",
  },
];
