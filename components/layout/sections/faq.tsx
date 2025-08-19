import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "¿Esta plantilla es gratuita?",
    answer: "Sí. Es una plantilla gratuita de NextJS con Shadcn.",
    value: "item-1",
  },
  {
    question: "¿Cómo puedo personalizar los colores y el diseño?",
    answer:
      "Puedes personalizar fácilmente los colores modificando las variables CSS en el archivo globals.css. También puedes cambiar componentes en la carpeta de componentes para ajustar el diseño según tus necesidades.",
    value: "item-2",
  },
  {
    question:
      "¿La plantilla es compatible con dispositivos móviles?",
    answer:
      "Absolutamente. La plantilla está diseñada con un enfoque mobile-first y es completamente responsiva en todos los dispositivos.",
    value: "item-3",
  },
  {
    question: "¿Puedo usar esta plantilla para proyectos comerciales?",
    answer: "Sí, puedes usar esta plantilla para proyectos tanto personales como comerciales sin restricciones.",
    value: "item-4",
  },
  {
    question:
      "¿Qué soporte está disponible si tengo problemas?",
    answer: "Ofrecemos documentación completa y soporte a través de nuestra comunidad en GitHub y Discord.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          PREGUNTAS FRECUENTES
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Preguntas Comunes
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
