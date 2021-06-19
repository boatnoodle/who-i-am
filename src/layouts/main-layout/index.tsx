import React from "react"
import GlobalStyle from "../../theme/globalStyles"

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      {children}
    </div>
  )
}
