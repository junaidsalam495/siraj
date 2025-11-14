import { FileTextIcon, MailIcon, PhoneIcon, UserIcon, Phone, Mail, MapPin, Clock } from "lucide-react";

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

export const contactInfo = [
  {
    id: 1,
    icon: Phone,
    title: "Contact Phone",
    lines: ["+55 (9900) 666 22"],
  },
  {
    id: 2,
    icon: Mail,
    title: "Contact Mail",
    lines: ["info.kali@gmail.com"],
  },
  {
    id: 3,
    icon: MapPin,
    title: "Contact Location",
    lines: ["18/2, Topkhana Road, Australia.", "27 Division St, New York, USA"],
  },
  {
    id: 4,
    icon: Clock,
    title: "Office Time",
    lines: ["Mon–Fri: 7.00 – 22.00", "St–Sun: 9.00 – 20.00"],
  },
];

