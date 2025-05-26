import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';

const Login = () => {
  return (
    <div>
      <Card className='w-sm m-auto'>
        <CardHeader>
          <CardTitle>Login</CardTitle>

          <CardDescription>Card This is a basic login page</CardDescription>
        </CardHeader>

        <CardContent>
          <div className='grid gap-2 pb-4'>
            <Label htmlFor='email' className='text-left'>
              Email
            </Label>
            <Input id='email' type='email' placeholder='m@example.com' />
          </div>

          <div className='grid gap-2'>
            <Label htmlFor='password' className='text-left'>
              Password
            </Label>
            <Input id='password' type='password' />
          </div>
        </CardContent>

        <CardFooter className='justify-center'>
          <Button className='w-full'>Create account</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
