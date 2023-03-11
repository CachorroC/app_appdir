import { Boundary } from '#@/components/boundary';
import React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return <Boundary>{children}</Boundary>;
}
