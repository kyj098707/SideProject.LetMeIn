import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { SideBarBox, LinksBox } from './SideBar.style'

const SideBar = () => {
  const menuItem = [
    {
      path:"/",
      name:"home"
      // icon:
    },
    {
      path:"/about",
      name:"about"
    },
  ]

  return (
    <SideBarBox>
        {
          menuItem.map((item, index) =>(
            <Link to={item.path} key={index}>
              {/* <div className="icon">{item.icon}</div> */}
              <LinksBox> 
                <FontAwesomeIcon icon={faHouse}/> {item.name}
              </LinksBox>
            </Link>
          ))
        }
    </SideBarBox>
  )
}

export default SideBar