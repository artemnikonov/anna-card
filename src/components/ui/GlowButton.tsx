import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { type ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'default' | 'outline';
  className?: string;
}

export default function GlowButton({ 
  children, 
  href, 
  onClick, 
  size = 'default',
  variant = 'default',
  className = '' 
}: GlowButtonProps) {
  const buttonContent = (
    <motion.div
      className="relative inline-block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-olive-accent to-primary rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse" />
      <Button
        size={size}
        variant={variant}
        className={`relative ${className}`}
        onClick={onClick}
      >
        {children}
      </Button>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="group inline-block">
        {buttonContent}
      </a>
    );
  }

  return <div className="group inline-block">{buttonContent}</div>;
}

