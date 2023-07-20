import { Link } from "react-router-dom"
import "./sidebar.css"
import { BarChartOutlined, ChatBubbleOutlineRounded, List, LineStyle, MailOutline, PaidOutlined, PersonOutline, PlayCircleOutline, QuestionAnswerRounded, Report, Timeline, TrendingUp, WorkOutline } from '@mui/icons-material'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dachbord</h3>
                    <ul className='sidebarList active'>
                        <li className='sideBarListItem'>
                            <LineStyle className="sideBarIcon" />
                            <Link to="/" className="link"> Home</Link>
                        </li>
                        <li className='sideBarListItem'>
                            <Timeline className="sideBarIcon" />
                            Analytics
                        </li>
                        <li className='sideBarListItem'>
                            <TrendingUp className="sideBarIcon" />
                            Sales
                        </li>

                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className='sidebarList active'>
                        <li className='sideBarListItem'>
                            <PersonOutline className="sideBarIcon" />
                            <Link to="/users" className="link">  Users</Link>
                        </li>
                        <li className='sideBarListItem'>
                            <PlayCircleOutline className="sideBarIcon" />
                            <Link to="/product" className="link"> Movies</Link>
                        </li>
                        <li className='sideBarListItem'>
                            <List className="sideBarIcon" />
                            <Link to="/lists" className="link"> Lists</Link>
                        </li>
                        <li className='sideBarListItem'>
                            <BarChartOutlined className="sideBarIcon" />
                            Reports
                        </li>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className='sidebarList active'>
                        <li className='sideBarListItem'>
                            <MailOutline className="sideBarIcon" />
                            Mail
                        </li>
                        <li className='sideBarListItem'>
                            <QuestionAnswerRounded className="sideBarIcon" />
                            Feedback
                        </li>
                        <li className='sideBarListItem'>
                            <ChatBubbleOutlineRounded className="sideBarIcon" />
                            Messages
                        </li>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className='sidebarList active'>
                        <li className='sideBarListItem'>
                            <WorkOutline className="sideBarIcon" />
                            Manage
                        </li>
                        <li className='sideBarListItem'>
                            <Timeline className="sideBarIcon" />
                            Analytics
                        </li>
                        <li className='sideBarListItem'>
                            <Report className="sideBarIcon" />
                            Reports
                        </li>

                    </ul>
                </div>


            </div>



        </div>
    )
}

export default Sidebar