"use client";
import Image from "next/image";
import Link from "next/link";
import loginImage from "../../../public/loginImage.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Lottie from "lottie-react";
import AnimationData from "../../../public/animation2.json";
export default function Auth() {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 xl:min-h-[80vh] max-lg: h-[100vh] max-lg:flex max-lg: justify-center ">
      <div className="bg-muted flex justify-center items-center max-lg:hidden max-lg:w-full ">
        <Lottie animationData={AnimationData} className="w-3/4" />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Giriş</h1>
            <p className="text-balance text-muted-foreground">
              Aşağıdakı məlumatları daxil edin
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@nümunə.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Şifrəniz</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Şifrəni Unutmusuz?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button
              variant="default"
              type="submit"
              className="w-full cursor-pointer bg-primary"
            >
              Daxil ol
            </Button>
            <Button variant="outline" className="w-full">
              Microsoft hesabınla qeydiyyatdan keç
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Hesabın yoxdur?{" "}
            <Link href="#" className="underline">
              Qeydiyyatdan keç
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
