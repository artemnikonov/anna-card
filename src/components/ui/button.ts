import { cva } from "class-variance-authority"

// Button look for links and buttons: <a class={cn(buttonVariants({ variant: 'outline' }), '...')}>
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-normal transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        outline: "border border-primary/20 text-primary bg-transparent shadow-xs hover:bg-primary/10 hover:border-primary/80",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)
