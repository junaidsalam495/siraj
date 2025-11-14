import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { ArrowRight } from "lucide-react";

const SubcribeNewsLetter = () => {
  return (
    <>
      <aside className="relative w-full flex justify-center py-10 px-5 md:px-[76px] subcribe-news-letter">
        <div className="w-full max-w-[1110px] relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex-1">
              <h2 className="font-bold text-white text-[28px] md:text-[40px] leading-tight mb-[14px] md:mb-[22px]">
                Subcribe to Our Newsletter
              </h2>
              <p className="text-white text-sm md:text-base leading-[22px] md:leading-[26px]">
                Get the latest SEO tips and software insights straight to your inbox.
              </p>
            </div>
            <div className="w-full md:w-[520px]">
              <div className="relative">

                {/* MOBILE STACKED INPUT + BUTTON */}
                <div className="flex flex-col gap-3 md:hidden">
                  <Input
                    type="email"
                    placeholder="Enter email address"
                    className="bg-transparent border border-white text-white placeholder:text-white h-[50px] px-4"
                  />
                  <Button className="h-[50px] w-full bg-white text-black text-[16px]">
                    Subscribe Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                {/* DESKTOP ROW INPUT + BUTTON */}
                <div className="hidden md:flex rounded-[5px] overflow-hidden border border-white h-[60px]">
                  <Input
                    type="email"
                    placeholder="Enter email address"
                    className="flex-1 bg-transparent border-0 text-white placeholder:text-white text-base h-full px-[25px] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button className="h-[50px] w-[191px] bg-white text-black rounded-[5px] m-[5px] text-[17px] hover:bg-white/90">
                    Subscribe Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                {/* CHECKBOX */}
                <div className="flex items-center gap-2 mt-[14px]">
                  <Checkbox
                    id="privacy-policy"
                    defaultChecked
                    className="rounded-sm border-[#ffffff33] data-[state=checked]:bg-transparent data-[state=checked]:border-white"
                  />
                  <label
                    htmlFor="privacy-policy"
                    className="text-white text-sm md:text-base leading-[22px] md:leading-[26px] cursor-pointer"
                  >
                    by Subscribing, you accept our Privacy Policy
                  </label>
                </div>

              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SubcribeNewsLetter;
