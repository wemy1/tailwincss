import React from "react"
import './index.css';


export const metadata = {
  title: "Dépannage à Domicile - Inscription",
  description: "Service de dépannage à domicile pour tous vos besoins",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
