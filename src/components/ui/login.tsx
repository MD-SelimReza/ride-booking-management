import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { FcGoogle } from 'react-icons/fc';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useLoginMutation } from '@/services/authApi';

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: LoginFormInputs) => {
    console.log('Submitting login form with data:', data);
    try {
      const res = await login(data).unwrap();
      console.log('✅ Login success:', res);

      if (res?.token) {
        localStorage.setItem('accessToken', res.token);
      }

      navigate('/');
    } catch (err) {
      console.error('❌ Login failed:', err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-muted">
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <Link to="/">
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
          </Link>
          <h1 className="text-2xl font-bold">Welcome Back 👋</h1>
          <p className="text-muted-foreground text-sm max-w-sm">
            Sign in to access your account, book rides faster, and enjoy a
            seamless experience.
          </p>
        </div>

        {/* Card Form */}
        <Card className="min-w-sm border-muted bg-background">
          <CardContent className="space-y-6 p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2 relative">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember me + Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label
                    htmlFor="remember"
                    className="text-sm text-muted-foreground"
                  >
                    Remember me
                  </Label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Sign In Button */}
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign in'}
              </Button>
            </form>

            {/* Google Login */}
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <FcGoogle className="h-5 w-5" />
              Sign in with Google
            </Button>

            {/* Already have account */}
            <p className="text-sm text-center text-muted-foreground">
              Don&apos;t have an account yet?{' '}
              <Link
                to="/signup"
                className="font-medium underline hover:text-primary"
              >
                Sign up
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
