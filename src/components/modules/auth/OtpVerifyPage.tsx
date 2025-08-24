import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dot } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const otpSchema = z.object({
  otp: z.string().length(6, 'OTP must be exactly 6 digits.'),
});

type OtpFormValues = z.infer<typeof otpSchema>;

export default function OtpVerifyPage() {
  const [timer, setTimer] = useState(5);

  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: '' },
  });

  const onSubmit = (data: OtpFormValues) => {
    console.log('OTP Submitted:', data.otp);
    // 🚀 Call backend verify endpoint here
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Verify OTP</CardTitle>
          <p className="text-sm text-muted-foreground">
            Enter the 6-digit OTP sent to your email or phone.
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              id="otp-form"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>One-Time Password</FormLabel>
                    <FormControl>
                      {/* ✅ Center OTP Input */}
                      <div className="flex justify-center">
                        <InputOTP
                          maxLength={6}
                          value={field.value}
                          onChange={(val) => {
                            // ✅ Prevent typing more than 6 digits
                            if (val.length <= 6) {
                              field.onChange(val);
                            }
                          }}
                        >
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                          </InputOTPGroup>
                          <InputOTPGroup>
                            <InputOTPSlot index={1} />
                          </InputOTPGroup>
                          <InputOTPGroup>
                            <InputOTPSlot index={2} />
                          </InputOTPGroup>
                          <Dot />
                          <InputOTPGroup>
                            <InputOTPSlot index={3} />
                          </InputOTPGroup>
                          <InputOTPGroup>
                            <InputOTPSlot index={4} />
                          </InputOTPGroup>
                          <InputOTPGroup>
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    </FormControl>
                    <FormDescription>
                      <Button
                        onClick={() => console.log('Resend OTP')}
                        type="button"
                        variant="link"
                        disabled={timer !== 0}
                        className={cn('p-0 m-0', {
                          'cursor-pointer': timer === 0,
                          'text-gray-500': timer !== 0,
                        })}
                      >
                        Resend OTP:
                      </Button>{' '}
                      {timer}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Verify OTP
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
