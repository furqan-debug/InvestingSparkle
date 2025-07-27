import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 backdrop-blur-sm",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gradient-primary text-primary-foreground hover:opacity-90 hover:shadow-medium hover:scale-105",
        secondary:
          "border-transparent bg-gradient-secondary text-secondary-foreground hover:opacity-90 hover:shadow-medium hover:scale-105",
        accent:
          "border-transparent bg-gradient-accent text-accent-foreground hover:opacity-90 hover:shadow-accent hover:scale-105",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 hover:shadow-medium",
        outline: "border border-input text-foreground hover:bg-accent hover:text-accent-foreground",
        glass: "glass text-foreground hover:shadow-soft hover:scale-105",
        glow: "bg-gradient-primary text-primary-foreground animate-pulse-glow",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
