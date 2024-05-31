import React from "react";
import { SidebarProps } from "./index";
import { useDomains } from "@/hooks/sidebar/use-domains";
import { cn } from "@/lib/utils";
import { AppDrawer } from "@/components/app-drawer";
import { Plus } from "lucide-react";
import { Loader } from "@/components/loader";
import { FormGenerator } from "@/components/form/form-generator";
import { UploadButton } from "@/components/upload-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type DomainsMenuProps = SidebarProps & {
  min?: boolean;
};

export function DomainsMenu(props: DomainsMenuProps) {
  const { domains, min } = props;
  const { errors, isDomain, loading, onAddDomain, register } = useDomains();

  return (
    <div className={cn("flex flex-col gap-3", min ? "mt-6" : "mt-3")}>
      <div className="flex justify-between w-full items-center">
        {!min && <p className="text-xs text-gray-500">DOMAINS</p>}
        <AppDrawer
          description="add in your domain address to integrate your chatbot"
          title="Add your business"
          onOpen={
            <div className="cursor-pointer text-gray-500 rounded-full border-2">
              <Plus />
            </div>
          }
        >
          <Loader loading={loading}>
            <form
              onSubmit={onAddDomain}
              className="mt-3 w-6/12 flex flex-col gap-3"
            >
              <FormGenerator
                inputType="input"
                label="Domain"
                type="text"
                placeholder="mydomian.com"
                name="domain"
                errors={errors}
                register={register}
              />
              <UploadButton
                register={register}
                label="Upload Icon"
                errors={errors}
              />
              <Button type="submit" className="w-full">
                Add Domain
              </Button>
            </form>
          </Loader>
        </AppDrawer>
      </div>
      <div className="flex flex-col gap-1 text-ironside font-medium">
        {domains &&
          domains.map((domain) => (
            <Link
              href={`/settings/${domain.name.split(".")[0]}`}
              key={domain.id}
              className={cn(
                "flex gap-3 hover:bg-white rounded-full transition duration-100 ease-in-out cursor-pointer ",
                !min ? "p-2" : "py-2",
                domain.name.split(".")[0] == isDomain && "bg-white"
              )}
            >
              <Image
                src={`https://ucarecdn.com/${domain.icon}/`}
                alt="logo"
                width={20}
                height={20}
              />
              {!min && <p className="text-sm">{domain.name}</p>}
            </Link>
          ))}
      </div>
    </div>
  );
}
