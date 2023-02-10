import { Outlet, NavLink } from "react-router-dom"

export const HelpLayout = () => {
  return (
    <div className="help-layout">
        <h2>WebSite Help</h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At necessitatibus voluptatibus nam aut recusandae quos quasi iste vel repellendus adipisci.
        </p>

        <nav>
            <NavLink to='faq'>View The Faq</NavLink>
            <NavLink to='contact'>Contact Us</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}
