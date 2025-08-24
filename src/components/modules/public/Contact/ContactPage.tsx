'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
}

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

const Contact = ({
  title = 'Contact Us',
  description = 'We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!',
  phone = '(123) 34567890',
  email = 'email@example.com',
  web = { label: 'shadcnblocks.com', url: 'https://shadcnblocks.com' },
}: Contact2Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);

    // Reset after submit
    reset();
  };

  return (
    <section className="py-32 max-w-[1440px] w-full mx-auto px-5">
      <div className="mx-auto flex w-full flex-col justify-between gap-10 lg:flex-row lg:gap-20">
        {/* Left side content */}
        <div className="mx-auto flex max-w-xl w-full flex-col justify-between gap-10 h-fit">
          <div className="text-center lg:text-left">
            <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
              {title}
            </h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="mx-auto w-fit lg:mx-0">
            <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
              Contact Details
            </h3>
            <ul className="ml-4 list-disc">
              <li>
                <span className="font-bold">Phone: </span>
                {phone}
              </li>
              <li>
                <span className="font-bold">Email: </span>
                <a href={`mailto:${email}`} className="underline">
                  {email}
                </a>
              </li>
              <li>
                <span className="font-bold">Web: </span>
                <a href={web.url} target="_blank" className="underline">
                  {web.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right side form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex max-w-3xl w-full flex-col gap-6 rounded-lg border p-10"
        >
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="firstname">First Name</Label>
            <Input
              id="firstname"
              placeholder="First Name"
              {...register('firstname', {
                required: 'First name is required',
              })}
            />
            {errors.firstname && (
              <span className="text-sm text-red-500">
                {errors.firstname.message}
              </span>
            )}
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="Subject"
              {...register('subject')}
            />
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here."
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && (
              <span className="text-sm text-red-500">
                {errors.message.message}
              </span>
            )}
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
