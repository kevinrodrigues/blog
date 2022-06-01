/** @jsx jsx */
import { jsx, Link } from "theme-ui"

const Footer = () => {
    return (
        <footer
            sx={{
                boxSizing: `border-box`,
                display: `flex`,
                justifyContent: `space-between`,
                mt: [6],
                color: `secondary`,
                a: {
                    variant: `links.secondary`,
                },
                flexDirection: [`column`, `column`, `row`],
                variant: `dividers.top`,
            }}
        >
            <div>
                &copy; {new Date().getFullYear()}. KR All rights reserved.
            </div>
            <div>
                Kevin Rodrigues
            </div>
        </footer>
    )
}

export default Footer
