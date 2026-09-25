import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent font-medium transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground text-sm h-8 px-2.5 hover:bg-primary/80",
        // Your custom btn variant with the exact padding, text size, and hover transform
        btn: "group bg-primary text-secondary-foreground px-7 py-3.5 text-base transition-transform hover:-translate-y-0.5 [&_svg]:transition-transform [&_svg]:group-hover:translate-x-0.5 [&_svg]:group-hover:-translate-y-0.5",
        outline:
          "border-border bg-background text-sm h-8 px-2.5 hover:bg-muted hover:text-foreground",
        btn_outline:
          "border-border bg-background text-sm px-7 py-4.5 hover:bg-muted hover:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground text-sm h-8 px-2.5 hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground text-sm h-8 px-2.5",
        destructive:
          "bg-destructive/10 text-destructive text-sm h-8 px-2.5 hover:bg-destructive/20",
        link: "text-primary underline-offset-4 hover:underline text-sm",
      },
      size: {
        default: "",
        sm: "h-7 px-2 text-xs",
        lg: "h-10 px-4",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends ButtonPrimitive.Props, VariantProps<typeof buttonVariants> {
  href?: string;
}

function Button({
  className,
  href,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const comp = (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size: variant === "btn" ? undefined : size,
          className,
        }),
      )}
      {...props}
    />
  );

  if (href) {
    return <Link href={href}>{comp}</Link>;
  }

  return comp;
}

export { Button, buttonVariants };
