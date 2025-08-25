import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { FcGoogle } from 'react-icons/fc';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Link, useNavigate } from 'react-router';
import { useRegisterMutation } from '@/services/authApi';

// ✅ Validation schema
const signupSchema = z.object({
  name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['RIDER', 'DRIVER'], {
    message: 'Please select a role',
  }),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterMutation();

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: '', email: '', password: '', role: 'RIDER' },
  });

  const onSubmit = async (data: SignupFormValues) => {
    console.log('Submitting signup form with data:', data);
    try {
      const res = await registerUser(data).unwrap();
      console.log('✅ Signup successful:', res);
      navigate('/signin');
    } catch (err) {
      console.error('❌ Signup failed:', err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-muted">
      <div className="w-full max-w-md">
        {/* Logo + Heading */}
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <svg
            width="45"
            height="35"
            viewBox="0 0 50 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43 31L31 40H5L7 35L12 31H29L32 35L40 11L45 7H50L43 31ZM43 5L38 9H21L18 5L10 29L5 33H0L7 9L19 0H45L43 5ZM24 13H35L29 31L26 27H15L21 9L24 13Z"
              fill="#297AFF"
            ></path>
          </svg>
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm">
            Please fill in the details to get started.
          </p>
        </div>

        {/* Card Form */}
        <Card className="min-w-sm border-muted bg-background">
          <CardContent className="space-y-6 p-6">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  {...form.register('name')}
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...form.register('email')}
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  {...form.register('password')}
                />
                {form.formState.errors.password && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </div>

              {/* Role Selection */}
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select
                  onValueChange={(value) =>
                    form.setValue('role', value as 'RIDER' | 'DRIVER')
                  }
                  defaultValue={form.getValues('role')}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="RIDER">Rider</SelectItem>
                    <SelectItem value="DRIVER">Driver</SelectItem>
                  </SelectContent>
                </Select>

                {form.formState.errors.role && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.role.message}
                  </p>
                )}
              </div>

              {/* Sign Up Button */}
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? 'Signing up...' : 'Sign up'}
              </Button>
            </form>

            {/* Google Signup */}
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              type="button"
            >
              <FcGoogle className="h-5 w-5" />
              Sign up with Google
            </Button>

            {/* Already have account */}
            <p className="text-sm text-center text-muted-foreground">
              Already have an account?{' '}
              <Link
                to="/signin"
                className="font-medium underline hover:text-primary"
              >
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
