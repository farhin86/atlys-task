import { Post } from "../../types";

const dummyPost: Post = {
    user: {
        image: './images/user.svg',
        name: 'Theresa Webb'
    },
    content: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet`,
    feelingEmoji: '👋', 
    noOfComments: 24,
    isEdited: true,
    creatdAt: '5h ago'
}

export const posts = Array(5).fill(dummyPost).map((post: Post, index) => {
    return {
        ...post,
        creatdAt: `${index+1}h ago`,
        feelingEmoji: index === 1 ? '😞' :  '👋'
    }
})