import React from 'react'
import { useSelector } from 'react-redux'

const ReviewCard = ({boxState}) => {
    const {reviewDatas} = useSelector(state => state.movie);
    console.log(boxState)

    const boxName = '';
    // boxState === true ? boxName = 'show-box' : boxName = 'hide-box';
    // if (boxState) {
    //     boxName = 'show-box';
    // }
    return (
    
        <div className={`${boxState}`}>
            {reviewDatas.map(item => (
                <>
                    <h5>{item.author}</h5>
                    <p>{item.content}</p>
                </>
            ))}
        </div>
    )
}

export default ReviewCard