import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../../../components/UI/Card';
import "./style.css";
const recentPost = (props) => {
    return (
        <div style={{ width: '70%' }}>

            <div>
                <Card style={{ margin: '20px 0' }}>
                    <div className='postImageWrapper'>
                        <img src='../../blogPostImages/148597389_713525289346792_766445616429846783_n.jpg' alt="anhdep"></img>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <span>BEAUTIFUL-AND-SPECIAL-MOMENT</span>
                        <h2>Tết năm 2020 họp lớp với A3</h2>
                        <span>By TynTyn</span>
                        <p className="setp">Hình như đây là năm đầu tiên sau khi ra trường anh em lại gặp nhau họp lớp ở nhà thầy! A3 đặt lịch mùng 3 hằng năm là ngày gặp mặt ở nhà thầy! sau đó sang nhà mình chơi rồi tối đi nhậu nhẹt...</p>

                        <NavLink to='/Post/1' ><button className="buttonRead">Read More</button></NavLink>
                    </div>
                </Card>
                <Card style={{ margin: '20px 0' }}>
                    <div className='postImageWrapper'>
                        <img src='../../blogPostImages/148597389_713525289346792_766445616429846783_n.jpg' alt="anhdep"></img>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <span>BEAUTIFUL-AND-SPECIAL-MOMENT</span>
                        <h2>Tết năm 2021 họp lớp với A3</h2>
                        <span>By TynTyn</span>
                        <p className="setp">Lần thứ 2 đi họp lớp sau khi ra trường! Cứ tưởng chúng nó bị muỗi đốt hết rồi mà hoa ra cũng khá là đông vui...</p>

                        <NavLink to='/Post/2' ><button className="buttonRead">Read More</button></NavLink>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default recentPost;
