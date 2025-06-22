import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const loginFormSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(1, {
    message: 'Password is required.',
  }),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    setIsLoading(true);
    console.log('Login attempt with:', data);
    setTimeout(() => {
      setIsLoading(false);
      // In a real application, you would handle navigation or display a success toast message.
    }, 2000);
  };

  return (
    <Card className="w-96 shadow-lg border-none bg-card">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-card-foreground">Welcome</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    {/* A space in the placeholder is needed for the floating label to work correctly */}
                    <Input
                      id="email"
                      type="email"
                      placeholder=" "
                      className={cn(
                        'peer h-10 w-full border-b border-border bg-transparent p-0 text-card-foreground shadow-none rounded-none',
                        'focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0'
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormLabel
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm"
                  >
                    Email Address
                  </FormLabel>
                  <FormMessage className="pt-1" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      id="password"
                      type="password"
                      placeholder=" "
                      className={cn(
                        'peer h-10 w-full border-b border-border bg-transparent p-0 text-card-foreground shadow-none rounded-none',
                        'focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0'
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormLabel
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm"
                  >
                    Password
                  </FormLabel>
                  <FormMessage className="pt-1" />
                </FormItem>
              )}
            />

            <div>
              <Button
                type="button"
                variant="link"
                className="h-auto p-0 text-sm font-normal text-muted-foreground hover:text-primary"
              >
                Forgot Password
              </Button>
            </div>

            <Button type="submit" className="w-full !mt-8" disabled={isLoading}>
              {isLoading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center p-6">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Button
            type="button"
            variant="link"
            className="h-auto p-0 font-semibold text-primary"
          >
            SignUp
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;