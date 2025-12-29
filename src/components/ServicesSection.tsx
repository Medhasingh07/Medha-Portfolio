import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, PenTool, Smartphone, TabletSmartphone } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive and functional websites from scratch using modern technologies like React and Next.js.",
    color: "bg-gradient-to-br from-purple-500 to-indigo-600",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Developing mobile applications for both iOS and Android, focusing on performance and user experience.",
    color: "bg-gradient-to-br from-green-400 to-cyan-500",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces that provide a great user experience.",
    color: "bg-gradient-to-br from-pink-500 to-red-500",
  },
  {
    icon: TabletSmartphone,
    title: "Responsive Design",
    description: "Ensuring your website looks and works great on all devices, from desktops to mobile phones.",
    color: "bg-gradient-to-br from-teal-400 to-blue-500",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-primary">
            My Services
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            I offer a range of services to help you build your digital presence.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border text-center transition-transform duration-300 hover:scale-105 hover:border-primary">
              <CardHeader className="items-center">
                <div className={`p-4 rounded-lg ${service.color}`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="pt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
