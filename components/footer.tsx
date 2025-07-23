"use client"

import React from 'react';
import Link from 'next/link';


interface PageControllerProps {
  pageNumber: number,
  pageMax: number
}

const PageControls = ({ pageNumber, pageMax }: PageControllerProps) => {
  return (
    <div className={`flex flex-row gap-2 items-center text-center justify-center h-full`}>
      <div style={{ cursor: "pointer", width: "2rem", height: "2rem" }} >
        <img src="/images/btn/-10.png" />
      </div>
      <div style={{ cursor: "pointer", width: "2rem", height: "2rem" }} >
        <Link href={`/page/${pageNumber - 2 <= 0 ? 1 : pageNumber - 2}`}>
          <img src="/images/btn/-5.png" />
        </Link>
      </div>
      <div style={{ cursor: "pointer", width: "2rem", height: "2rem" }} >
        <Link href={`/page/${pageNumber - 1 <= 0 ? 1 : pageNumber - 1}`}>
          <img src="/images/btn/previous.png" />
        </Link>
      </div>
      <div style={{ cursor: "pointer", width: "2rem", height: "2rem" }} >
        <Link href={`/page/${pageNumber + 1 <= pageMax ? pageNumber + 1 : pageMax}`}>
          <img src="/images/btn/next.png" />
        </Link>
      </div>
      <div style={{ cursor: "pointer", width: "2rem", height: "2rem" }} >
        <Link href={`/page/${pageNumber + 2 <= pageMax ? pageNumber + 2 : pageMax}`}>
          <img src="/images/btn/+5.png" />
        </Link>
      </div>

      <div style={{ cursor: "pointer", width: "2rem" }} className="mx-[0.3rem]" >
        <img src="/images/btn/+10.png" />
      </div>
    </div>
  );
};


interface FooterProps {
  pageNumber: number,
  maxNumber: number
}

export default function Footer({ pageNumber, maxNumber }: FooterProps) {
  return (
    <div style={{ position: "relative", width: "100%", backgroundColor: "black", height: "5dvh" }} >
      <PageControls
        pageNumber={pageNumber}
        pageMax={maxNumber}
      />
    </div>
  )
}
