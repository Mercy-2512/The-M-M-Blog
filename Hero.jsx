const NavLinks = [
    {
        title: "Home", 
        path: "/"
    },
    {
        title: "About", 
        path: "/about"
    },
    {
        title: "Our Services", 
        path: "/our_services"
    },
]
export const Hero = () => {
    return(
        <>
            <h1>Hello World</h1>
            <div className="grid grid-cols-4">

            {
                NavLinks.map((navlink, index) => (
                    <div key={index} className="grid">
                        {navlink.title} {navlink.path}
                    </div>
                ))
            }
            </div>
        </>

    )
}