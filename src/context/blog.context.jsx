import { createContext, useState } from "react";

export const BlogContext = createContext({
    selectedBlogSection: "bitcoin",
    setSelectedBlogSection: () => {},
})

export const BlogProvider = ({children}) => {
    const [selectedBlogSection, setSelectedBlogSection] = useState("bitcoin")

    const blogSelecter = (subject) => {
        setSelectedBlogSection(subject)
    }

    const value = { blogSelecter, selectedBlogSection }

    return(
        <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
    )
}
