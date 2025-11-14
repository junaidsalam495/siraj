import { caseStudies } from "@/mock/case-studies";
import { CaseStudiesCard } from "../ui/card/case-studies-card";

function CaseStudiesTabs() {
  return (
    <section className="relative w-full py-14 md:py-20 mx-auto px-4 md:px-20">
      <div className="flex md:flex-row flex-col justify-center items-center gap-8 text-white text-sm mb-10">
        <button className="hover:text-primary">ALL</button>
        <button className="hover:text-primary">CLOUD SERVICES</button>
        <button className="text-primary border-b-2 border-amber-500 pb-1">
          CYBER SECURITY IT
        </button>
        <button className="hover:text-primary">CONSULTANCY</button>
        <button className="hover:text-primary">IT SECURITY</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
        {caseStudies?.map((item, index) => (
          <CaseStudiesCard
            key={index}
            title={item.title}
            category={item.category}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

export default CaseStudiesTabs;
