import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Compatible con Móviles",
    description:
      "Diseño completamente responsivo que se adapta perfectamente a cualquier dispositivo móvil o de escritorio.",
  },
  {
    icon: "BadgeCheck",
    title: "Prueba Social",
    description:
      "Incluye testimonios y elementos que generan confianza y credibilidad en tus usuarios.",
  },
  {
    icon: "Goal",
    title: "Contenido Dirigido",
    description:
      "Mensajes claros y específicos que conectan directamente con las necesidades de tu audiencia.",
  },
  {
    icon: "PictureInPicture",
    title: "Visuales Impactantes",
    description:
      "Imágenes y gráficos de alta calidad que capturan la atención y comunican tu mensaje eficazmente.",
  },
  {
    icon: "MousePointerClick",
    title: "Llamadas a la Acción Claras",
    description:
      "Botones y enlaces estratégicamente ubicados para maximizar las conversiones y engagement.",
  },
  {
    icon: "Newspaper",
    title: "Titulares Claros",
    description:
      "Encabezados convincentes que comunican inmediatamente el valor de tu propuesta.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Características
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Lo Que Nos Hace Diferentes
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Descubre las funcionalidades únicas que hacen de nuestra plantilla la 
        elección perfecta para crear páginas de aterrizaje exitosas y atractivas.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
