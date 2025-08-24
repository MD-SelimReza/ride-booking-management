import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const Testimonial4 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-6">
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="mb-4 text-center text-3xl font-semibold lg:text-5xl">
              What Our Users Say
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-center">
              Hear from riders, drivers, and partners who trust our platform
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="grid grid-cols-1 items-stretch gap-x-0 gap-y-4 lg:grid-cols-3 lg:gap-4">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&q=80"
              alt="customer"
              className="h-72 w-full rounded-md object-cover lg:h-auto"
            />
            <Card className="col-span-2 flex items-center justify-center p-6">
              <div className="flex flex-col gap-4">
                <q className="text-xl font-medium lg:text-3xl">
                  “This platform completely transformed my daily commute.
                  Affordable pricing and the safety features make me feel secure
                  every ride.”
                </q>
                <div className="flex flex-col items-start">
                  <p>Sarah Mitchell</p>
                  <p className="text-muted-foreground">
                    Marketing Manager, BrightWave
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Testimonials */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Card className="flex flex-col h-full">
              <CardContent className="px-6 pt-6 leading-7 text-foreground/70 flex-1">
                <q>
                  “As a driver, I finally found a service that respects my
                  schedule. I can work flexibly and still earn consistently.”
                </q>
              </CardContent>
              <CardFooter>
                <div className="flex gap-4 leading-5">
                  <Avatar className="size-9 rounded-full ring-1 ring-input">
                    <AvatarImage
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="driver"
                    />
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium">Michael Carter</p>
                    <p className="text-muted-foreground">Driver Partner</p>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardContent className="px-6 pt-6 leading-7 text-foreground/70 flex-1">
                <q>
                  “Managing the platform as an admin is seamless. The analytics
                  and controls give us complete visibility and peace of mind.”
                </q>
              </CardContent>
              <CardFooter>
                <div className="flex gap-4 leading-5">
                  <Avatar className="size-9 rounded-full ring-1 ring-input">
                    <AvatarImage
                      src="https://randomuser.me/api/portraits/women/45.jpg"
                      alt="admin"
                    />
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium">Priya Desai</p>
                    <p className="text-muted-foreground">Platform Admin</p>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardContent className="px-6 pt-6 leading-7 text-foreground/70 flex-1">
                <q>
                  “The SOS button is a game-changer. Knowing help is just one
                  click away makes me and my family feel safe.”
                </q>
              </CardContent>
              <CardFooter>
                <div className="flex gap-4 leading-5">
                  <Avatar className="size-9 rounded-full ring-1 ring-input">
                    <AvatarImage
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="rider"
                    />
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium">Emily Zhang</p>
                    <p className="text-muted-foreground">Frequent Rider</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial4 };
