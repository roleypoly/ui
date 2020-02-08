import { Logotype } from 'atoms/branding';
import { Button } from 'atoms/button';
import Link from 'next/link';
import * as React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { MastheadBase, MastheadLeft, MastheadRight } from './Masthead.styled';

export const Guest = () => (
  <MastheadBase>
    <MastheadLeft>
      <Link href="/">
        <Logotype height={30} />
      </Link>
    </MastheadLeft>
    <MastheadRight>
      <Link href="/auth/login">
        <Button size="small">
          Login <FaSignInAlt size="1em" style={{ transform: 'translateY(1px)' }} />
        </Button>
      </Link>
    </MastheadRight>
  </MastheadBase>
);
