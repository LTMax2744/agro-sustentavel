import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Droplets, Handshake, TrendingUp, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design: Modernismo Agrícola Minimalista
 * - Paleta: Verde floresta (#2D5016), Marrom terra (#8B7355), Verde claro (#A4D65E)
 * - Tipografia: Playfair Display para títulos, Inter para corpo
 * - Layout: Seções com diagonal cuts e espaço negativo generoso
 * - Animações: Fade-in ao scroll, hover effects sutis
 */

interface AnimatedCardProps {
  isVisible: boolean;
  delay: number;
}

function AnimatedCard({ isVisible, delay }: AnimatedCardProps) {
  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: `all 0.6s ease-out ${delay * 100}ms`,
  };
}

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold text-primary">AgroForte</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#tema" className="text-sm hover:text-primary transition-colors">
              Tema
            </a>
            <a href="#praticas" className="text-sm hover:text-primary transition-colors">
              Práticas
            </a>
            <a href="#impacto" className="text-sm hover:text-primary transition-colors">
              Impacto
            </a>
            <a href="#futuro" className="text-sm hover:text-primary transition-colors">
              Futuro
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-white py-20 md:py-32">
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Agro Forte, Futuro Sustentável
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Equilíbrio entre produção e meio ambiente. Descubra como o agronegócio moderno concilia
              produtividade com sustentabilidade, garantindo um futuro próspero para gerações vindouras.
            </p>
            <div className="flex gap-4">
              <Button className="bg-accent text-primary hover:bg-accent/90 font-semibold">
                Explorar Conteúdo
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
      </section>

      {/* Tema Section */}
      <section id="tema" data-animate className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              style={AnimatedCard({ isVisible: visibleSections["tema"], delay: 0 })}
              className="space-y-6"
            >
              <div className="inline-block">
                <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                  Tema Central
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
                O Equilíbrio Necessário
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O agronegócio é a base da economia brasileira, responsável por alimentar o país e o
                mundo. Mas como produzir em larga escala sem comprometer o meio ambiente?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A resposta está na sustentabilidade. Práticas modernas, tecnologia e inovação permitem
                que o campo seja forte e produtivo, mantendo a integridade dos ecossistemas.
              </p>
            </div>
            <div
              style={AnimatedCard({ isVisible: visibleSections["tema"], delay: 1 })}
              className="grid grid-cols-2 gap-4"
            >
              <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-l-4 border-l-accent">
                <div className="text-4xl font-bold text-primary mb-2">33%</div>
                <p className="text-sm text-muted-foreground">
                  Do PIB brasileiro vem do agronegócio
                </p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-l-4 border-l-secondary">
                <div className="text-4xl font-bold text-secondary mb-2">8.5B</div>
                <p className="text-sm text-muted-foreground">
                  Hectares sob manejo sustentável
                </p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-l-4 border-l-primary">
                <div className="text-4xl font-bold text-primary mb-2">1º</div>
                <p className="text-sm text-muted-foreground">
                  Brasil em produção de alimentos
                </p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-l-4 border-l-accent">
                <div className="text-4xl font-bold text-primary mb-2">61%</div>
                <p className="text-sm text-muted-foreground">
                  Território preservado em florestas
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Práticas Section */}
      <section id="praticas" data-animate className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">
              Soluções Sustentáveis
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-4">
              Práticas que Transformam
            </h2>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Conheça as principais estratégias que permitem o agronegócio brasileiro ser forte e
              sustentável simultaneamente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Rotação de Culturas",
                description:
                  "Alternância de plantações mantém o solo fértil, reduz pragas e melhora a biodiversidade do ecossistema agrícola.",
                delay: 0,
              },
              {
                icon: Droplets,
                title: "Irrigação Eficiente",
                description:
                  "Sistemas de irrigação de precisão reduzem o desperdício de água em até 50%, economizando recursos hídricos valiosos.",
                delay: 1,
              },
              {
                icon: Shield,
                title: "Manejo Integrado",
                description:
                  "Controle biológico de pragas e doenças reduz o uso de agroquímicos, protegendo a saúde do solo e dos trabalhadores.",
                delay: 2,
              },
              {
                icon: TrendingUp,
                title: "Agricultura de Precisão",
                description:
                  "Uso de drones, GPS e IA otimiza o uso de insumos, aumentando produtividade com menor impacto ambiental.",
                delay: 3,
              },
              {
                icon: Zap,
                title: "Energia Renovável",
                description:
                  "Painéis solares e biomassa reduzem a dependência de combustíveis fósseis nas operações agrícolas.",
                delay: 4,
              },
              {
                icon: Handshake,
                title: "Certificação Ambiental",
                description:
                  "Selos de sustentabilidade garantem que produtos foram produzidos respeitando normas ambientais rigorosas.",
                delay: 5,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  style={AnimatedCard({ isVisible: visibleSections["praticas"], delay: item.delay })}
                  className="group"
                >
                  <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 border-t-4 border-t-accent">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impacto Section */}
      <section id="impacto" data-animate className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              style={AnimatedCard({ isVisible: visibleSections["impacto"], delay: 1 })}
              className="order-2 md:order-1"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20">
                  <div className="text-5xl font-bold text-primary font-display mb-3">+45%</div>
                  <p className="text-sm text-muted-foreground font-semibold">
                    Aumento de produtividade com práticas sustentáveis
                  </p>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-lg border border-accent/20">
                  <div className="text-5xl font-bold text-primary font-display mb-3">-30%</div>
                  <p className="text-sm text-muted-foreground font-semibold">
                    Redução de emissões de carbono
                  </p>
                </div>
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-lg border border-secondary/20">
                  <div className="text-5xl font-bold text-secondary font-display mb-3">500M</div>
                  <p className="text-sm text-muted-foreground font-semibold">
                    Toneladas de CO2 sequestradas anualmente
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20">
                  <div className="text-5xl font-bold text-primary font-display mb-3">$2T</div>
                  <p className="text-sm text-muted-foreground font-semibold">
                    Valor agregado ao PIB anualmente
                  </p>
                </div>
              </div>
            </div>
            <div
              style={AnimatedCard({ isVisible: visibleSections["impacto"], delay: 0 })}
              className="order-1 md:order-2 space-y-6"
            >
              <div className="inline-block">
                <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                  Resultados Mensuráveis
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
                Impacto Real da Sustentabilidade
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Os números comprovam: sustentabilidade não é apenas responsabilidade ambiental, é
                estratégia de negócio. Propriedades que adotam práticas sustentáveis têm maior
                produtividade, menor custo operacional e acesso a mercados premium.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Brasil lidera globalmente em agronegócio sustentável, combinando inovação
                tecnológica com respeito ao meio ambiente, gerando riqueza sem comprometer o futuro.
              </p>
              <Button className="bg-primary text-white hover:bg-primary/90 font-semibold mt-8">
                Conheça Casos de Sucesso
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Futuro Section */}
      <section id="futuro" data-animate className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div
              style={AnimatedCard({ isVisible: visibleSections["futuro"], delay: 0 })}
            >
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                Visão de Futuro
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                Um Agro Forte e Sustentável
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                O futuro do agronegócio brasileiro é verde. Através de inovação contínua, investimento
                em tecnologia e compromisso com a sustentabilidade, o campo se fortalece enquanto
                preserva os recursos naturais.
              </p>
              <p className="text-lg text-white/90 leading-relaxed mb-12">
                Cada propriedade que adota práticas sustentáveis contribui para um modelo de
                desenvolvimento que é economicamente viável, socialmente justo e ambientalmente
                responsável.
              </p>
            </div>

            <div
              style={AnimatedCard({ isVisible: visibleSections["futuro"], delay: 1 })}
              className="grid md:grid-cols-3 gap-6 mt-12"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <div className="text-4xl font-bold mb-3">2030</div>
                <p className="text-white/80">
                  Carbono neutro em 50% das propriedades agrícolas
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <div className="text-4xl font-bold mb-3">100%</div>
                <p className="text-white/80">
                  Rastreabilidade de produtos sustentáveis
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <div className="text-4xl font-bold mb-3">10B</div>
                <p className="text-white/80">
                  Hectares sob manejo regenerativo
                </p>
              </div>
            </div>

            <div className="mt-12 flex gap-4 justify-center">
              <Button className="bg-accent text-primary hover:bg-accent/90 font-semibold">
                Comece Agora
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <span className="font-display text-lg font-bold">AgroForte</span>
              </div>
              <p className="text-white/70 text-sm">
                Equilíbrio entre produção e meio ambiente
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Conteúdo</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#tema" className="hover:text-white transition-colors">
                    Tema
                  </a>
                </li>
                <li>
                  <a href="#praticas" className="hover:text-white transition-colors">
                    Práticas
                  </a>
                </li>
                <li>
                  <a href="#impacto" className="hover:text-white transition-colors">
                    Impacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Guias
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Termos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>
              &copy; 2026 Agro Forte, Futuro Sustentável. Desenvolvido para o Concurso Agrinho 2026.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
