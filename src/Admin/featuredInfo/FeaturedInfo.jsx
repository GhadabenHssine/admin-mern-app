import './featuredInfo.css'
import { ArrowDownwardOutlined, ArrowUpward } from "@mui/icons-material"

const FeaturedInfo = () => {
    return (
        <div className="featured1">
            <div className="featuredItem">
                <span className='featuredTitle'>
                    Revanue
                </span>
                <div className='featuredMoneyContainer'>

                    <span className='featuredMony'>
                        $2.415
                    </span>
                    <span className='featuredMonyRate'>
                        -11.4
                        <ArrowDownwardOutlined className='featuredIcon negative' />
                    </span>
                </div>
                <span className='featuredSub'>
                    Compared to last month

                </span>
            </div>

            <div className="featuredItem">
                <span className='featuredTitle'>
                    Sales
                </span>
                <div className='featuredMoneyContainer'>

                    <span className='featuredMony'>
                        $4.415
                    </span>
                    <span className='featuredMonyRate'>
                        -1.4
                        <ArrowDownwardOutlined className='featuredIcon negative' />
                    </span>
                </div>
                <span className='featuredSub'>
                    Compared to last month

                </span>
            </div>

            <div className="featuredItem">
                <span className='featuredTitle'>
                    Cost
                </span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMony'> $2.215</span>
                    <span className='featuredMonyRate'> -11.4 <ArrowUpward className='featuredIcon ' /> </span>
                </div>
                <span className='featuredSub'>Compared to last month </span>
            </div>





        </div>
    )
}

export default FeaturedInfo