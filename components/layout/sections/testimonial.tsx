"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Juan Pérez",
    userName: "Gerente de Producto",
    comment:
      "¡Increíble! NextJs + Shadcn es espectacular. Esta plantilla me permite cambiar colores, fuentes e imágenes para que coincidan con mi identidad de marca.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sofía Collins",
    userName: "Analista de Ciberseguridad",
    comment:
      "Una herramienta excepcional que ha transformado completamente mi forma de crear páginas web. La facilidad de personalización es impresionante.",
    rating: 4.8,
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Adán Johnson",
    userName: "Director de Tecnología",
    comment:
      "La mejor inversión que he hecho para mi empresa. El diseño es elegante y la funcionalidad es exactamente lo que necesitábamos.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ethan Parker",
    userName: "Científico de Datos",
    comment:
      "Perfecta integración con nuestras herramientas existentes. La documentación es clara y el soporte técnico es excepcional.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ava Mitchell",
    userName: "Gerente de Proyectos TI",
    comment:
      "Hemos reducido significativamente el tiempo de desarrollo gracias a esta plantilla. Altamente recomendada para equipos ágiles.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Isabella Reed",
    userName: "Ingeniera DevOps",
    comment:
      "La arquitectura es sólida y escalable. Implementamos múltiples proyectos con esta base y todos han sido exitosos.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonios
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Escucha lo que Dicen Nuestros +1000 Clientes
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
