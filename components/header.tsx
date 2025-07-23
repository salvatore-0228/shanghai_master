"use client"

import styles from "@/components/header.module.css"
import React from "react"
import { Info } from "lucide-react"

interface HeaderProps {
  sectionTitle: React.ReactNode,
  pageNumber: React.ReactNode,
  subTitle: React.ReactNode
}

export default function Header({ sectionTitle, subTitle, pageNumber }: HeaderProps) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "#ccc", width: "5dvh"}}>
          <p style={{ fontSize: "100%", padding: "1dvh", paddingTop: "2dvh", paddingLeft: "2dvh", paddingRight: "2dvh", color: "white" }}>
            {pageNumber}
          </p>
        </div>
        <div style={{ flex: "1", color: "white", paddingTop: "2dvh", paddingLeft: "1dvh", backgroundColor: "black" }}>
          <span style={{ fontSize: "120%", fontWeight: "400", textDecoration: "underline" }}>
            {sectionTitle}
          </span>
          <span style={{ paddingLeft: "10px", paddingRight: "10px", display: `${subTitle == "" ? "none" : ""}` }}>|</span>
          <span>
            {subTitle}
          </span>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoButtonContainer}>
            <button className={styles.infoButton} aria-label="Information">
              <Info size={50} color="white" />
            </button>
            <div className={styles.infoBoxContainer}>
              <div className={styles.infoBoxContent}>
                <div className={styles.infoIcon}>
                  <Info color="black" size={20} />
                </div>
                <p className={styles.infoBoxText}>
                  The Chinese are extremely proud of their history, though in Shanghai that history is fast being
                  replaced by modern architecture.
                </p>
                <div className={styles.infoIcon}>
                  <Info color="black" size={20} />
                </div>
                <p className={styles.infoBoxText}>
                  Erring on the side of caution when discussing Chinese history with locals is advisable, as Western
                  interpretations of Chinese history are not always welcome.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: "1", backgroundColor: "black", color: "white", padding: "1dvh", paddingTop: "2dvh", paddingRight: "2dvh", textAlign: "right" }}>
          <span>
            {subTitle}
          </span>
          <span style={{ paddingLeft: "2dvh", paddingRight: "1dvh", display: `${subTitle == "" ? "none" : ""}` }}>|</span>
          <span style={{ fontSize: "120%", fontWeight: "400", textDecoration: "underline" }}>
            {sectionTitle}
          </span>
        </div>
        <div style={{ backgroundColor: "#ccc", width: "5dvh" }}>
          <p style={{ fontSize: "100%", padding: "1dvh", paddingTop: "2dvh", paddingLeft: "2dvh", paddingRight: "2dvh", color: "white" }}>
            {pageNumber}
          </p>
        </div>
      </div>
    </div>
  )
}
