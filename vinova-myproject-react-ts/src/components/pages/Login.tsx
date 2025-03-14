import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">CMS Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="text">Username or email</Label>
                <Input
                  id="usernameOrEmail"
                  type="text"
                  placeholder="Username or email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input id="password" type="password" placeholder="Password" required />
              </div>
              <Button variant="customButton" type="submit">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
