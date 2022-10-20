import React from 'react'
import { Link } from 'react-router-dom'
const MainNav = () => {
  return (
<ul>
<li><Link to="/">네이버</Link></li>
<li><Link to="/">서비스</Link></li>
<li><Link to="/">가치실현</Link></li>
<li><Link to="/">홍보</Link></li>
<li><Link to="/">투자정보</Link></li>
<li><Link to="/">스토리</Link></li>
<li><Link to="/">채용</Link></li>

</ul>
  )
}

export default MainNav