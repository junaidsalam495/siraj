import { FileTextIcon } from "lucide-react";
import { ButtonArrow } from "../button";
import { formFields } from "@/mock/contact-us";
import { Label } from "../label";
import { Input } from "../input";
import { Textarea } from "../textarea";

const ContactForm = () => {
  return (
    <>
      <form className="space-y-6 contact-form md:p-8 p-4 rounded-xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formFields?.map((field) => (
            <div key={field.id} className={field.gridColumn}>
              <Label
                htmlFor={field.id}
                className="font-medium text-white text-base tracking-[0] leading-6 mb-2 block"
              >
                {field.label}
              </Label>
              <div className="relative">
                <Input
                  id={field.id}
                  type="text"
                  defaultValue={field.placeholder}
                  className="h-[50px] rounded-[5px] border-white bg-transparent text-[#afafaf] font-normal text-base pr-10"
                />
                <field.icon className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white" />
              </div>
            </div>
          ))}
        </div>
        <div>
          <Label
            htmlFor="inquiry"
            className="font-medium text-white text-base tracking-[0] leading-6 mb-2 block"
          >
            Inquiry about
          </Label>
          <div className="relative">
            <Textarea
              id="inquiry"
              defaultValue="Write your message"
              className="h-[120px] rounded-[5px] border-white bg-transparent text-[#afafaf] font-normal text-base resize-none pr-10"
            />
            <FileTextIcon className="absolute right-3 top-3 w-3.5 h-3.5 text-white" />
          </div>
        </div>
        <ButtonArrow text="Submit Now" />
      </form>
    </>
  );
};

export default ContactForm;
