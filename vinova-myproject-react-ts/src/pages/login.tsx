import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { InputField } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Form } from "@/components/ui/form"
import { LoginBodyType } from "@/components/constant/type"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginBody } from "@/schemaValidations/auth-schema"
import { useLogin } from "@/hooks/use-auth"

export function LoginForm() {

  const { loginMutation } = useLogin();

  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const onSubmit = (values: LoginBodyType) => {
    loginMutation.mutate({ values });
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Đăng nhập</CardTitle>
        <CardDescription>
          Nhập tên tài khoản và mật khẩu của bạn để đăng nhập vào hệ thống
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 max-w-[600px] flex-shrink-0 w-full"
            noValidate
          >
            <div className="grid gap-4">
              <InputField
                name="username"
                label="Tên tài khoản"
                placeholder="Nhập tên tài khoản"
                control={form.control}
              />
              <InputField
                name="password"
                label="Mật khẩu"
                type="password"
                placeholder="Nhập mật khẩu"
                control={form.control}
              />
              <Button
                type="submit"
                className="w-full"
                variant="secondary"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? "Đang đăng nhập..." : "Đăng nhập"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
