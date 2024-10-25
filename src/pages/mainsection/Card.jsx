import React from 'react'
import './Card.css'

function Card() {
    let data = [
        {
            name: 'Mango Orange Bellini Recipe',
            img: "https://t3.ftcdn.net/jpg/05/64/93/44/360_F_564934426_YwWXJYxzMNU60IMdtKBMKIHRdZF088Ao.jpg"
        },
        {
            name: 'Mango And passionfruit ice',
            img: "https://mir-s3-cdn-cf.behance.net/projects/404/cd5573196288813.Y3JvcCwxMzgwLDEwODAsMjU5LDA.jpg"
        },
        {
            name: 'Mango',
            img: "https://t3.ftcdn.net/jpg/05/64/93/44/360_F_564934426_YwWXJYxzMNU60IMdtKBMKIHRdZF088Ao.jpg"
        },
        {
            name: 'Mango Sauce',
            img: "https://media.istockphoto.com/id/904617420/photo/fresh-mango-smoothie-in-the-glass.jpg?s=612x612&w=0&k=20&c=ogIRn5AfahJNU4W8UmQIZ-mJqL9tgOm9yH_-5WJmkSQ="
        },
        {
            name: 'Raspado DE mango',
            img: "https://t3.ftcdn.net/jpg/05/64/93/44/360_F_564934426_YwWXJYxzMNU60IMdtKBMKIHRdZF088Ao.jpg"    
        },
        {
            name: 'Mango milk',
            img: "https://media.istockphoto.com/id/904617420/photo/fresh-mango-smoothie-in-the-glass.jpg?s=612x612&w=0&k=20&c=ogIRn5AfahJNU4W8UmQIZ-mJqL9tgOm9yH_-5WJmkSQ="
        }
    ]
    return (
        <>
            <div style={{ display: 'flex', flexWrap: "wrap", padding: "100px 50px" }} className='card'>
                {
                    data.map((val) => {
                        return (
                            <>
                                <div className='card-data'>
                                    <div style={{ margin: '10px', objectFit:"cover"}}>
                                        <img src={val.img} alt="" srcset="" style={{ width: "100%", height:"200px", objectFit:"cover", borderRadius:"10px"}} />
                                        <div style={{padding:"5px 10px"}}>
                                            <h1 style={{ fontSize: "18px", textAlign: "center" }}>{val.name}</h1>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )

                    })
                }
            </div>
        </>
    )
}

export default Card