import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

export default function ProfilePage() {
  const user = {
    name: 'Selim Reza',
    email: 'selim.reza@example.com',
    role: 'Driver',
    phone: '+880 1700-123456',
    image: 'https://i.pravatar.cc/150?img=32',
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-md shadow-lg bg-background">
        <CardHeader className="flex flex-col items-center space-y-4">
          {/* User Avatar */}
          <Avatar className="h-20 w-20">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>

          {/* Title */}
          <CardTitle className="text-xl font-bold">{user.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{user.role}</p>
        </CardHeader>

        <Separator />

        {/* Profile Details */}
        <CardContent className="space-y-4 py-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Email</p>
            <p className="text-base">{user.email}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Phone</p>
            <p className="text-base">{user.phone}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Role</p>
            <p className="text-base">{user.role}</p>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex justify-between">
            <Link to="/edit-profile">
              <Button variant="outline">Edit Profile</Button>
            </Link>
            <Link to="/change-password">
              <Button variant="secondary">Change Password</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
