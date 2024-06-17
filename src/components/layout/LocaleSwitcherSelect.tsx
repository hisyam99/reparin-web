"use client";

import { useParams } from "next/navigation";
import { ReactNode, useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(value: string) {
    const nextLocale = value;
    startTransition(() => {
      router.replace(
        {
          pathname,
          query: {
            ...params,
          },
        },
        { locale: nextLocale }
      );
    });
  }

  return (
    <div className="relative text-black-400">
      <Select
        onValueChange={onSelectChange}
        defaultValue={defaultValue}
        disabled={isPending}
      >
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {children}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
