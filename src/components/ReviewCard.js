import React from 'react'
import { useSelector } from 'react-redux'

const ReviewCard = ({boxState}) => {
    const {reviewDatas} = useSelector(state => state.movie);
    // console.log(boxState)

    return (
        <div className={`${boxState}`}>
            {reviewDatas.map(item => (
                <div key={item.id} style={{borderBottom: '1px solid white', margin: '20px'}}>
                    <h5>{item.author}</h5>
                    <p>{item.content}</p>
                </div>
            ))}
        </div>
    )
}

export default ReviewCard