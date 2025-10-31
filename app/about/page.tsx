import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, Users, Award, Truck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="https://placehold.co/1200x800.png"
          alt="Art supplies and creative workspace"
          fill
          className="object-cover"
          data-ai-hint="art supplies workspace"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">
              About Canvas & Palette
            </h1>
            <p className="text-lg md:text-xl">
              Your trusted partner in creativity since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Canvas & Palette was founded with a simple mission: to provide artists of all levels with 
                the highest quality art supplies at accessible prices. What started as a small local shop 
                has grown into a trusted online destination for creative professionals and hobbyists alike.
              </p>
              <p>
                We carefully curate every product in our collection, working directly with renowned 
                manufacturers and emerging brands to bring you the best tools for your artistic journey. 
                Our team of experienced artists and art enthusiasts ensures that every item meets our 
                high standards for quality and value.
              </p>
              <p>
                Today, we're proud to serve thousands of artists across the country, helping them bring 
                their creative visions to life with premium paints, brushes, canvases, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">Passion for Art</h3>
              <p className="text-muted-foreground">
                We're artists serving artists, driven by our love for creativity
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                Only the finest materials make it into our catalog
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">Community Focus</h3>
              <p className="text-muted-foreground">
                Supporting and inspiring our creative community
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">Reliable Service</h3>
              <p className="text-muted-foreground">
                Fast shipping and exceptional customer support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Sarah Johnson', role: 'Founder & CEO', image: 'https://placehold.co/400x400.png' },
              { name: 'Michael Chen', role: 'Head of Product', image: 'https://placehold.co/400x400.png' },
              { name: 'Emily Rodriguez', role: 'Customer Experience', image: 'https://placehold.co/400x400.png' },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    data-ai-hint="person face"
                  />
                </div>
                <h3 className="text-xl font-headline font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Ready to Create?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Explore our collection and find your perfect art supplies
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/collections">Shop Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
