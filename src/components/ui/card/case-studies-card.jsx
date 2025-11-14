import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ParagraphText } from "../text/heading-text";

export function CaseStudiesCard({ title, description, image, category }) {
  return (
    <Card className="service-card rounded-xl shadow-[-10px_0px_60px_#00000017] border-0 h-full overflow-hidden">
      <div className="relative w-full h-52">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <ParagraphText text={category} className="text-primary" />
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-md leading-relaxed text-white">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
