import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-muted">
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          {/* Replace with your logo */}
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
          <h1 className="text-2xl font-bold">Welcome Back 👋</h1>
          <p className="text-muted-foreground text-sm max-w-sm">
            Sign in to access your account, book rides faster, and enjoy a
            seamless experience.
          </p>
        </div>

        {/* Card Form */}
        <Card className="min-w-sm border-muted bg-background">
          <CardContent className="space-y-6 p-6">
            <div className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
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
            </div>

            {/* Sign In Button */}
            <Button className="w-full" type="submit">
              Sign in
            </Button>

            {/* Google Signup */}
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
