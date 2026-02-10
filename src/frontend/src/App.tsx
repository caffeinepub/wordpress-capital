import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, ShoppingCart, Palette, Layers, Server, Zap, Menu, X } from 'lucide-react';
import { SiWordpress, SiShopify, SiReact, SiVuedotjs } from 'react-icons/si';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const services = [
    {
      icon: <SiWordpress className="w-8 h-8" />,
      title: 'WordPress Development',
      description: 'Custom WordPress solutions tailored to your business needs',
      features: ['Theme creation/customisation', 'Plugin development']
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'WooCommerce Development',
      description: 'Powerful e-commerce solutions built on WooCommerce',
      features: []
    },
    {
      icon: <SiShopify className="w-8 h-8" />,
      title: 'Shopify Development',
      description: 'Complete Shopify store setup and customization',
      features: []
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'ReactJS / Vue JS',
      description: 'Modern frontend applications with cutting-edge frameworks',
      features: []
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Hosting Solutions',
      description: 'Reliable and secure hosting for your web applications',
      features: []
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/wp-capital-logo.dim_512x512.png"
                alt="WordPress Capital"
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-foreground">WordPress Capital</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
              <Button onClick={() => scrollToSection('services')} size="sm">
                Get Started
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Contact
                </button>
                <Button onClick={() => scrollToSection('services')} size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Build Your Digital Presence with{' '}
                    <span className="text-primary">WordPress Capital</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    Expert web development and e-commerce solutions. From WordPress to modern React applications,
                    we bring your vision to life with cutting-edge technology and creative excellence.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => scrollToSection('services')} size="lg" className="text-base">
                    Explore Services
                  </Button>
                  <Button
                    onClick={() => scrollToSection('contact')}
                    variant="outline"
                    size="lg"
                    className="text-base"
                  >
                    Get in Touch
                  </Button>
                </div>
                <div className="flex items-center gap-8 pt-4">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">Fast Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">Clean Code</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">Custom Design</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/assets/generated/wp-capital-hero-illustration.dim_1600x900.png"
                    alt="Web Development Illustration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive web development solutions to power your business growth
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  {service.features.length > 0 && (
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Why Choose Us</h2>
                <p className="text-lg text-muted-foreground">
                  We combine technical expertise with creative vision to deliver exceptional results
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Code className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Expert Development</h3>
                      <p className="text-muted-foreground">
                        Our team specializes in WordPress, WooCommerce, Shopify, and modern JavaScript frameworks
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Palette className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Custom Solutions</h3>
                      <p className="text-muted-foreground">
                        Every project is tailored to your unique business needs and brand identity
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Fast Turnaround</h3>
                      <p className="text-muted-foreground">
                        We deliver high-quality work efficiently without compromising on excellence
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Server className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Reliable Hosting</h3>
                      <p className="text-muted-foreground">
                        Secure, fast, and dependable hosting solutions to keep your site running smoothly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Ready to Get Started?</h2>
                <p className="text-lg text-muted-foreground">
                  Let's discuss your project and bring your ideas to life
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg" className="text-base">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/wp-capital-logo.dim_512x512.png"
                alt="WordPress Capital"
                className="h-8 w-8 object-contain"
              />
              <span className="text-lg font-semibold text-foreground">WordPress Capital</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} WordPress Capital. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'wordpress-capital'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-1"
              >
                Built with <span className="text-red-500">♥</span> using caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
