import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Gratuito",
    popular: 0,
    price: 0,
    description:
      "Perfecto para empezar y probar nuestras funcionalidades básicas.",
    buttonText: "Iniciar Prueba Gratuita",
    benefitList: [
      "1 miembro del equipo",
      "1 GB de almacenamiento",
      "Hasta 2 páginas",
      "Soporte de la comunidad",
      "Asistencia IA",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 45,
    description:
      "Ideal para equipos pequeños que buscan funcionalidades avanzadas.",
    buttonText: "Comenzar",
    benefitList: [
      "4 miembros del equipo",
      "8 GB de almacenamiento",
      "Hasta 6 páginas",
      "Soporte prioritario",
      "Asistencia IA",
    ],
  },
  {
    title: "Empresarial",
    popular: 0,
    price: 120,
    description:
      "Para organizaciones grandes que necesitan máximo rendimiento.",
    buttonText: "Contáctanos",
    benefitList: [
      "10 miembros del equipo",
      "20 GB de almacenamiento",
      "Hasta 10 páginas",
      "Soporte telefónico y email",
      "Asistencia IA",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Precios
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Obtén acceso ilimitado
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Elige el plan que mejor se adapte a tus necesidades y comienza a crear hoy mismo.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
